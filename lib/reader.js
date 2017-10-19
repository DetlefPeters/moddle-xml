import {
  reduce,
  forEach,
  find
} from 'min-dash/lib/collection';

import {
  assign
} from 'min-dash/lib/object';

import Stack from 'tiny-stack';
import { parser as SaxParser } from 'sax';
import Moddle from 'moddle';

import {
  parseName as parseNameNs
} from 'moddle/lib/ns';

import {
  coerceType,
  isSimple as isSimpleType
} from 'moddle/lib/types';

import {
  XSI_TYPE,
  XSI_URI,
  serializeAsType,
  aliasToName
} from './common';


function parseNodeAttributes(node) {
  var nodeAttrs = node.attributes;

  return reduce(nodeAttrs, function(result, v, k) {
    var name, ns;

    if (!v.local) {
      name = v.prefix;
    } else {
      ns = parseNameNs(v.name, v.prefix);
      name = ns.name;
    }

    result[name] = v.value;
    return result;
  }, {});
}

function normalizeType(node, attr, model) {
  var nameNs = parseNameNs(attr.value);

  var uri = node.ns[nameNs.prefix || ''],
      localName = nameNs.localName,
      pkg = uri && model.getPackage(uri),
      typePrefix;

  if (pkg) {
    typePrefix = pkg.xml && pkg.xml.typePrefix;

    if (typePrefix && localName.indexOf(typePrefix) === 0) {
      localName = localName.slice(typePrefix.length);
    }

    attr.value = pkg.prefix + ':' + localName;
  }
}

/**
 * Normalizes namespaces for a node given an optional default namespace and a
 * number of mappings from uris to default prefixes.
 *
 * @param  {XmlNode} node
 * @param  {Model} model the model containing all registered namespaces
 * @param  {Uri} defaultNsUri
 */
function normalizeNamespaces(node, model, defaultNsUri) {
  var uri, prefix;

  uri = node.uri || defaultNsUri;

  if (uri) {
    var pkg = model.getPackage(uri);

    if (pkg) {
      prefix = pkg.prefix;
    } else {
      prefix = node.prefix;
    }

    node.prefix = prefix;
    node.uri = uri;
  }

  forEach(node.attributes, function(attr) {

    // normalize xsi:type attributes because the
    // assigned type may or may not be namespace prefixed
    if (attr.uri === XSI_URI && attr.local === 'type') {
      normalizeType(node, attr, model);
    }

    normalizeNamespaces(attr, model, null);
  });
}


function error(message) {
  return new Error(message);
}

/**
 * Get the moddle descriptor for a given instance or type.
 *
 * @param  {ModdleElement|Function} element
 *
 * @return {Object} the moddle descriptor
 */
function getModdleDescriptor(element) {
  return element.$descriptor;
}

/**
 * A parse context.
 *
 * @class
 */
class Context {

  /**
   * @property {ElementHandler} rootHandler
   */

  /**
   * @property {Boolean} lax
   */

  /**
   * Creates a new Context.
   *
   * @param {Object} options
   * @param {ElementHandler} options.rootHandler the root handler for parsing a document
   * @param {boolean} [options.lax=false] whether or not to ignore invalid elements
   */
  constructor(options) {
    assign(this, options);

    this.elementsById = {};
    this.references = [];
    this.warnings = [];
  }

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */
  addReference(reference) {
    this.references.push(reference);
  }

  /**
   * Add a processed element.
   *
   * @param {ModdleElement} element
   */
  addElement(element) {

    if (!element) {
      throw error('expected element');
    }

    var elementsById = this.elementsById;

    var descriptor = getModdleDescriptor(element);

    var idProperty = descriptor.idProperty,
        id;

    if (idProperty) {
      id = element.get(idProperty.name);

      if (id) {

        if (elementsById[id]) {
          throw error('duplicate ID <' + id + '>');
        }

        elementsById[id] = element;
      }
    }
  }

  /**
   * Add an import warning.
   *
   * @param {Object} warning
   * @param {String} warning.message
   * @param {Error} [warning.error]
   */
  addWarning(warning) {
    this.warnings.push(warning);
  }

}

/**
 * Base handler implementation.
 */
class BaseHandler {

  /**
   * Wrap up handling of context.
   */
  handleEnd() { }

  /**
   * Handle given text.
   *
   * @param {String} text
   */
  handleText(text) { }

  /**
   * Handle node and return handler to delegate for this node.
   *
   * @param {Node} node
   *
   * @return {BaseHandler} delegating handler
   */
  handleNode(node) { }

}

/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */
class NoopHandler extends BaseHandler {
  handleNode(node) {
    return this;
  }
}


/**
 * A handler that handles body text.
 */
class BodyHandler extends BaseHandler {

  handleText(text) {
    this.body = (this.body || '') + text;
  }

}

/**
 * A handler that handles element references.
 */
class ReferenceHandler extends BodyHandler {

  constructor(property, context) {
    super();

    this.property = property;
    this.context = context;
  }


  handleNode(node) {

    if (this.element) {
      throw error('expected no sub nodes');
    } else {
      this.element = this.createReference(node);
    }

    return this;
  }

  handleEnd() {
    this.element.id = this.body;
  }

  createReference(node) {
    return {
      property: this.property.ns.name,
      id: ''
    };
  }

}


/**
 * Handles nested simple values.
 */
class ValueHandler extends BodyHandler {

  constructor(propertyDesc, element) {
    super();

    this.element = element;
    this.propertyDesc = propertyDesc;
  }

  handleEnd() {
    var value = this.body || '',
        element = this.element,
        propertyDesc = this.propertyDesc;

    value = coerceType(propertyDesc.type, value);

    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(value);
    } else {
      element.set(propertyDesc.name, value);
    }
  }

}


/**
 * A handler for a nested child element.
 */
class BaseElementHandler extends BodyHandler {

  constructor(model, context) {
    super();

    this.model = model;
    this.context = context;
  }

  handleNode(node) {
    var element = this.element;

    if (!element) {
      element = this.element = this.createElement(node);

      this.context.addElement(element);

      return this;
    } else {
      return this.handleChild(node);
    }
  }

}


/**
 * The main handler, handling an element.
 */
class ElementHandler extends BaseElementHandler {

  constructor(model, typeStr, context) {
    super(model, context);

    this.type = model.getType(typeStr);
  }

  addReference(reference) {
    this.context.addReference(reference);
  }

  handleEnd() {

    var value = this.body,
        element = this.element,
        descriptor = getModdleDescriptor(element),
        bodyProperty = descriptor.bodyProperty;

    if (bodyProperty && value !== undefined) {
      value = coerceType(bodyProperty.type, value);
      element.set(bodyProperty.name, value);
    }
  }

  /**
   * Create an instance of the model from the given node.
   *
   * @param  {Element} node the xml node
   */
  createElement(node) {
    var attributes = parseNodeAttributes(node),
        Type = this.type,
        descriptor = getModdleDescriptor(Type),
        context = this.context,
        instance = new Type({});

    forEach(attributes, function(value, name) {

      var prop = descriptor.propertiesByName[name],
          values;

      if (prop && prop.isReference) {

        if (!prop.isMany) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: value
          });
        } else {
          // IDREFS: parse references as whitespace-separated list
          values = value.split(' ');

          forEach(values, function(v) {
            context.addReference({
              element: instance,
              property: prop.ns.name,
              id: v
            });
          });
        }

      } else {
        if (prop) {
          value = coerceType(prop.type, value);
        }

        instance.set(name, value);
      }
    });

    return instance;
  }

  getPropertyForNode(node) {

    var nameNs = parseNameNs(node.local, node.prefix);

    var type = this.type,
        model = this.model,
        descriptor = getModdleDescriptor(type);

    var propertyName = nameNs.name,
        property = descriptor.propertiesByName[propertyName],
        elementTypeName,
        elementType,
        typeAnnotation;

    // search for properties by name first

    if (property) {

      if (serializeAsType(property)) {
        typeAnnotation = node.attributes[XSI_TYPE];

        // xsi type is optional, if it does not exists the
        // default type is assumed
        if (typeAnnotation) {

          elementTypeName = typeAnnotation.value;

          // TODO: extract real name from attribute
          elementType = model.getType(elementTypeName);

          return assign({}, property, { effectiveType: getModdleDescriptor(elementType).name });
        }
      }

      // search for properties by name first
      return property;
    }


    var pkg = model.getPackage(nameNs.prefix);

    if (pkg) {
      elementTypeName = nameNs.prefix + ':' + aliasToName(nameNs.localName, descriptor.$pkg);
      elementType = model.getType(elementTypeName);

      // search for collection members later
      property = find(descriptor.properties, function(p) {
        return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
      });

      if (property) {
        return assign({}, property, { effectiveType: getModdleDescriptor(elementType).name });
      }
    } else {
      // parse unknown element (maybe extension)
      property = find(descriptor.properties, function(p) {
        return !p.isReference && !p.isAttribute && p.type === 'Element';
      });

      if (property) {
        return property;
      }
    }

    throw error('unrecognized element <' + nameNs.name + '>');
  }

  toString() {
    return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
  }

  valueHandler(propertyDesc, element) {
    return new ValueHandler(propertyDesc, element);
  }

  referenceHandler(propertyDesc) {
    return new ReferenceHandler(propertyDesc, this.context);
  }

  handler(type) {
    if (type === 'Element') {
      return new GenericElementHandler(this.model, type, this.context);
    } else {
      return new ElementHandler(this.model, type, this.context);
    }
  }

  /**
   * Handle the child element parsing
   *
   * @param  {Element} node the xml node
   */
  handleChild(node) {
    var propertyDesc, type, element, childHandler;

    propertyDesc = this.getPropertyForNode(node);
    element = this.element;

    type = propertyDesc.effectiveType || propertyDesc.type;

    if (isSimpleType(type)) {
      return this.valueHandler(propertyDesc, element);
    }

    if (propertyDesc.isReference) {
      childHandler = this.referenceHandler(propertyDesc).handleNode(node);
    } else {
      childHandler = this.handler(type).handleNode(node);
    }

    var newElement = childHandler.element;

    // child handles may decide to skip elements
    // by not returning anything
    if (newElement !== undefined) {

      if (propertyDesc.isMany) {
        element.get(propertyDesc.name).push(newElement);
      } else {
        element.set(propertyDesc.name, newElement);
      }

      if (propertyDesc.isReference) {
        assign(newElement, {
          element: element
        });

        this.context.addReference(newElement);
      } else {
        // establish child -> parent relationship
        newElement.$parent = element;
      }
    }

    return childHandler;
  }

}


/**
 * A handler for unknown elements.
 */
class GenericElementHandler extends BaseElementHandler {

  constructor(model, typeStr, context) {
    super(model, context);
  }

  createElement(node) {

    var name = node.name,
        prefix = node.prefix,
        uri = node.ns[prefix],
        attributes = node.attributes;

    return this.model.createAny(name, uri, attributes);
  }

  handleChild(node) {

    var handler = new GenericElementHandler(this.model, 'Element', this.context).handleNode(node),
        element = this.element;

    var newElement = handler.element,
        children;

    if (newElement !== undefined) {
      children = element.$children = element.$children || [];
      children.push(newElement);

      // establish child -> parent relationship
      newElement.$parent = element;
    }

    return handler;
  }

  handleText(text) {
    this.body = (this.body || '') + text;
  }

  handleEnd() {
    if (this.body) {
      this.element.$body = this.body;
    }
  }

}


/**
 * A reader for a meta-model.
 */
export default class XMLReader {

  /**
   * Construct the reader instance.
   *
   * @param {Object} options
   * @param {Model} options.model used to read xml files
   * @param {Boolean} options.lax whether to make parse errors warnings
   */
  constructor(options) {

    if (options instanceof Moddle) {
      options = {
        model: options
      };
    }

    assign(this, { lax: false }, options);
  }


  /**
   * Parse the given XML into a moddle document tree.
   *
   * @param {String} xml
   * @param {ElementHandler|Object} options or rootHandler
   * @param  {Function} done
   */
  fromXML(xml, options, done) {

    var rootHandler = options.rootHandler;

    if (options instanceof ElementHandler) {
      // root handler passed via (xml, { rootHandler: ElementHandler }, ...)
      rootHandler = options;
      options = {};
    } else {
      if (typeof options === 'string') {
        // rootHandler passed via (xml, 'someString', ...)
        rootHandler = this.handler(options);
        options = {};
      } else if (typeof rootHandler === 'string') {
        // rootHandler passed via (xml, { rootHandler: 'someString' }, ...)
        rootHandler = this.handler(rootHandler);
      }
    }

    var model = this.model,
        lax = this.lax;

    var context = new Context(assign({}, options, { rootHandler: rootHandler })),
        parser = new SaxParser(true, { xmlns: true, trim: true }),
        stack = new Stack();

    rootHandler.context = context;

    // push root handler
    stack.push(rootHandler);


    function resolveReferences() {

      var elementsById = context.elementsById;
      var references = context.references;

      var i, r;

      for (i = 0; (r = references[i]); i++) {
        var element = r.element;
        var reference = elementsById[r.id];
        var property = getModdleDescriptor(element).propertiesByName[r.property];

        if (!reference) {
          context.addWarning({
            message: 'unresolved reference <' + r.id + '>',
            element: r.element,
            property: r.property,
            value: r.id
          });
        }

        if (property.isMany) {
          var collection = element.get(property.name),
              idx = collection.indexOf(r);

          // we replace an existing place holder (idx != -1) or
          // append to the collection instead
          if (idx === -1) {
            idx = collection.length;
          }

          if (!reference) {
            // remove unresolvable reference
            collection.splice(idx, 1);
          } else {
            // add or update reference in collection
            collection[idx] = reference;
          }
        } else {
          element.set(property.name, reference);
        }
      }
    }

    function handleClose(tagName) {
      stack.pop().handleEnd();
    }

    function handleOpen(node) {
      var handler = stack.peek();

      normalizeNamespaces(node, model);

      try {
        stack.push(handler.handleNode(node));
      } catch (e) {

        var line = this.line,
            column = this.column;

        var message =
          'unparsable content <' + node.name + '> detected\n\t' +
            'line: ' + line + '\n\t' +
            'column: ' + column + '\n\t' +
            'nested error: ' + e.message;

        if (lax) {
          context.addWarning({
            message: message,
            error: e
          });

          console.warn('could not parse node');
          console.warn(e);

          stack.push(new NoopHandler());
        } else {
          console.error('could not parse document');
          console.error(e);

          throw error(message);
        }
      }
    }

    function handleText(text) {
      stack.peek().handleText(text);
    }

    parser.onopentag = handleOpen;
    parser.oncdata = parser.ontext = handleText;
    parser.onclosetag = handleClose;
    parser.onend = resolveReferences;

    // deferred parse XML to make loading really ascnchronous
    // this ensures the execution environment (node or browser)
    // is kept responsive and that certain optimization strategies
    // can kick in
    defer(function() {
      var error;

      try {
        parser.write(xml).close();
      } catch (e) {
        error = e;
      }

      done(error, error ? undefined : rootHandler.element, context);
    });
  }


  /**
   * Return a handler with the given name.
   *
   * @param {String} name
   *
   * @return {BaseHandler}
   */
  handler(name) {
    return new ElementHandler(this.model, name);
  }

}



////////// helpers //////////////////////////

function defer(fn) {
  setTimeout(fn, 0);
}