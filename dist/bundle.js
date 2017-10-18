(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), require("string_decoder"), require("moddle"));
	else if(typeof define === 'function' && define.amd)
		define(["stream", "string_decoder", "moddle"], factory);
	else if(typeof exports === 'object')
		exports["ModdleXML"] = factory((function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), require("string_decoder"), require("moddle"));
	else
		root["ModdleXML"] = factory(root["stream"], root["string_decoder"], root["Moddle"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

exports.default = isArray;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(28);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isLength = __webpack_require__(30);

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _isLength2.default)(value.length) && !(0, _isFunction2.default)(value);
}

exports.default = isArrayLike;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwn = __webpack_require__(39);

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _createBaseEach = __webpack_require__(42);

var _createBaseEach2 = _interopRequireDefault(_createBaseEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0, _createBaseEach2.default)(_baseForOwn2.default);

exports.default = baseEach;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(32);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0, _overArg2.default)(Object.keys, Object);

exports.default = nativeKeys;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = __webpack_require__(18);

var _identity2 = _interopRequireDefault(_identity);

var _overRest = __webpack_require__(19);

var _overRest2 = _interopRequireDefault(_overRest);

var _setToString = __webpack_require__(21);

var _setToString2 = _interopRequireDefault(_setToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0, _setToString2.default)((0, _overRest2.default)(func, start, _identity2.default), func + '');
}

exports.default = baseRest;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(7);

var _assignValue2 = _interopRequireDefault(_assignValue);

var _copyObject = __webpack_require__(25);

var _copyObject2 = _interopRequireDefault(_copyObject);

var _createAssigner = __webpack_require__(26);

var _createAssigner2 = _interopRequireDefault(_createAssigner);

var _isArrayLike = __webpack_require__(2);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isPrototype = __webpack_require__(31);

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = (0, _createAssigner2.default)(function (object, source) {
  if ((0, _isPrototype2.default)(source) || (0, _isArrayLike2.default)(source)) {
    (0, _copyObject2.default)(source, (0, _keys2.default)(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      (0, _assignValue2.default)(object, key, source[key]);
    }
  }
});

exports.default = assign;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = __webpack_require__(8);

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _eq = __webpack_require__(24);

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
    (0, _baseAssignValue2.default)(object, key, value);
  }
}

exports.default = assignValue;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(22);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty2.default) {
    (0, _defineProperty2.default)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

exports.default = baseAssignValue;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = __webpack_require__(38);

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _baseEach = __webpack_require__(3);

var _baseEach2 = _interopRequireDefault(_baseEach);

var _castFunction = __webpack_require__(43);

var _castFunction2 = _interopRequireDefault(_castFunction);

var _isArray = __webpack_require__(1);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0, _isArray2.default)(collection) ? _arrayEach2.default : _baseEach2.default;
  return func(collection, (0, _castFunction2.default)(iteratee));
}

exports.default = forEach;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseName = parseName;
/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName,
      prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
    // prefix + local name
    if (parts.length === 2) {
      localName = parts[1];
      prefix = parts[0];
    } else {
      throw new Error('expected <prefix:localName> or <localName>, got ' + name);
    }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coerceType = coerceType;
exports.isBuiltIn = isBuiltIn;
exports.isSimple = isSimple;
/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function String(s) {
    return s;
  },
  Boolean: function Boolean(s) {
    return s === 'true';
  },
  Integer: function Integer(s) {
    return parseInt(s, 10);
  },
  Real: function Real(s) {
    return parseFloat(s, 10);
  }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aliasToName = aliasToName;
exports.nameToAlias = nameToAlias;
exports.serializeAsType = serializeAsType;
exports.serializeAsProperty = serializeAsProperty;
var XSI_TYPE = exports.XSI_TYPE = 'xsi:type';
var XSI_URI = exports.XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';

var DEFAULT_NS_MAP = exports.DEFAULT_NS_MAP = {
  'xsi': XSI_URI
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function aliasToName(alias, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return capitalize(alias);
  } else {
    return alias;
  }
}

function nameToAlias(name, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Writer = exports.Reader = undefined;

var _reader = __webpack_require__(15);

var _reader2 = _interopRequireDefault(_reader);

var _writer = __webpack_require__(52);

var _writer2 = _interopRequireDefault(_writer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Reader = _reader2.default;
exports.Writer = _writer2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defer2 = __webpack_require__(16);

var _defer3 = _interopRequireDefault(_defer2);

var _assign2 = __webpack_require__(6);

var _assign3 = _interopRequireDefault(_assign2);

var _find2 = __webpack_require__(33);

var _find3 = _interopRequireDefault(_find2);

var _forEach2 = __webpack_require__(10);

var _forEach3 = _interopRequireDefault(_forEach2);

var _reduce2 = __webpack_require__(44);

var _reduce3 = _interopRequireDefault(_reduce2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tinyStack = __webpack_require__(47);

var _tinyStack2 = _interopRequireDefault(_tinyStack);

var _sax = __webpack_require__(48);

var _moddle = __webpack_require__(51);

var _moddle2 = _interopRequireDefault(_moddle);

var _ns = __webpack_require__(11);

var _types = __webpack_require__(12);

var _common = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parseNodeAttributes(node) {
  var nodeAttrs = node.attributes;

  return (0, _reduce3.default)(nodeAttrs, function (result, v, k) {
    var name, ns;

    if (!v.local) {
      name = v.prefix;
    } else {
      ns = (0, _ns.parseName)(v.name, v.prefix);
      name = ns.name;
    }

    result[name] = v.value;
    return result;
  }, {});
}

function normalizeType(node, attr, model) {
  var nameNs = (0, _ns.parseName)(attr.value);

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

  (0, _forEach3.default)(node.attributes, function (attr) {

    // normalize xsi:type attributes because the
    // assigned type may or may not be namespace prefixed
    if (attr.uri === _common.XSI_URI && attr.local === 'type') {
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

var Context = function () {

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
  function Context(options) {
    _classCallCheck(this, Context);

    (0, _assign3.default)(this, options);

    this.elementsById = {};
    this.references = [];
    this.warnings = [];
  }

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */


  _createClass(Context, [{
    key: 'addReference',
    value: function addReference(reference) {
      this.references.push(reference);
    }

    /**
     * Add a processed element.
     *
     * @param {ModdleElement} element
     */

  }, {
    key: 'addElement',
    value: function addElement(element) {

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

  }, {
    key: 'addWarning',
    value: function addWarning(warning) {
      this.warnings.push(warning);
    }
  }]);

  return Context;
}();

/**
 * Base handler implementation.
 */


var BaseHandler = function () {
  function BaseHandler() {
    _classCallCheck(this, BaseHandler);
  }

  _createClass(BaseHandler, [{
    key: 'handleEnd',


    /**
     * Wrap up handling of context.
     */
    value: function handleEnd() {}

    /**
     * Handle given text.
     *
     * @param {String} text
     */

  }, {
    key: 'handleText',
    value: function handleText(text) {}

    /**
     * Handle node and return handler to delegate for this node.
     *
     * @param {Node} node
     *
     * @return {BaseHandler} delegating handler
     */

  }, {
    key: 'handleNode',
    value: function handleNode(node) {}
  }]);

  return BaseHandler;
}();

/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */


var NoopHandler = function (_BaseHandler) {
  _inherits(NoopHandler, _BaseHandler);

  function NoopHandler() {
    _classCallCheck(this, NoopHandler);

    return _possibleConstructorReturn(this, (NoopHandler.__proto__ || Object.getPrototypeOf(NoopHandler)).apply(this, arguments));
  }

  _createClass(NoopHandler, [{
    key: 'handleNode',
    value: function handleNode(node) {
      return this;
    }
  }]);

  return NoopHandler;
}(BaseHandler);

/**
 * A handler that handles body text.
 */


var BodyHandler = function (_BaseHandler2) {
  _inherits(BodyHandler, _BaseHandler2);

  function BodyHandler() {
    _classCallCheck(this, BodyHandler);

    return _possibleConstructorReturn(this, (BodyHandler.__proto__ || Object.getPrototypeOf(BodyHandler)).apply(this, arguments));
  }

  _createClass(BodyHandler, [{
    key: 'handleText',
    value: function handleText(text) {
      this.body = (this.body || '') + text;
    }
  }]);

  return BodyHandler;
}(BaseHandler);

/**
 * A handler that handles element references.
 */


var ReferenceHandler = function (_BodyHandler) {
  _inherits(ReferenceHandler, _BodyHandler);

  function ReferenceHandler(property, context) {
    _classCallCheck(this, ReferenceHandler);

    var _this3 = _possibleConstructorReturn(this, (ReferenceHandler.__proto__ || Object.getPrototypeOf(ReferenceHandler)).call(this));

    _this3.property = property;
    _this3.context = context;
    return _this3;
  }

  _createClass(ReferenceHandler, [{
    key: 'handleNode',
    value: function handleNode(node) {

      if (this.element) {
        throw error('expected no sub nodes');
      } else {
        this.element = this.createReference(node);
      }

      return this;
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd() {
      this.element.id = this.body;
    }
  }, {
    key: 'createReference',
    value: function createReference(node) {
      return {
        property: this.property.ns.name,
        id: ''
      };
    }
  }]);

  return ReferenceHandler;
}(BodyHandler);

/**
 * Handles nested simple values.
 */


var ValueHandler = function (_BodyHandler2) {
  _inherits(ValueHandler, _BodyHandler2);

  function ValueHandler(propertyDesc, element) {
    _classCallCheck(this, ValueHandler);

    var _this4 = _possibleConstructorReturn(this, (ValueHandler.__proto__ || Object.getPrototypeOf(ValueHandler)).call(this));

    _this4.element = element;
    _this4.propertyDesc = propertyDesc;
    return _this4;
  }

  _createClass(ValueHandler, [{
    key: 'handleEnd',
    value: function handleEnd() {
      var value = this.body || '',
          element = this.element,
          propertyDesc = this.propertyDesc;

      value = (0, _types.coerceType)(propertyDesc.type, value);

      if (propertyDesc.isMany) {
        element.get(propertyDesc.name).push(value);
      } else {
        element.set(propertyDesc.name, value);
      }
    }
  }]);

  return ValueHandler;
}(BodyHandler);

/**
 * A handler for a nested child element.
 */


var BaseElementHandler = function (_BodyHandler3) {
  _inherits(BaseElementHandler, _BodyHandler3);

  function BaseElementHandler(model, context) {
    _classCallCheck(this, BaseElementHandler);

    var _this5 = _possibleConstructorReturn(this, (BaseElementHandler.__proto__ || Object.getPrototypeOf(BaseElementHandler)).call(this));

    _this5.model = model;
    _this5.context = context;
    return _this5;
  }

  _createClass(BaseElementHandler, [{
    key: 'handleNode',
    value: function handleNode(node) {
      var element = this.element;

      if (!element) {
        element = this.element = this.createElement(node);

        this.context.addElement(element);

        return this;
      } else {
        return this.handleChild(node);
      }
    }
  }]);

  return BaseElementHandler;
}(BodyHandler);

/**
 * The main handler, handling an element.
 */


var ElementHandler = function (_BaseElementHandler) {
  _inherits(ElementHandler, _BaseElementHandler);

  function ElementHandler(model, typeStr, context) {
    _classCallCheck(this, ElementHandler);

    var _this6 = _possibleConstructorReturn(this, (ElementHandler.__proto__ || Object.getPrototypeOf(ElementHandler)).call(this, model, context));

    _this6.type = model.getType(typeStr);
    return _this6;
  }

  _createClass(ElementHandler, [{
    key: 'addReference',
    value: function addReference(reference) {
      this.context.addReference(reference);
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd() {

      var value = this.body,
          element = this.element,
          descriptor = getModdleDescriptor(element),
          bodyProperty = descriptor.bodyProperty;

      if (bodyProperty && value !== undefined) {
        value = (0, _types.coerceType)(bodyProperty.type, value);
        element.set(bodyProperty.name, value);
      }
    }

    /**
     * Create an instance of the model from the given node.
     *
     * @param  {Element} node the xml node
     */

  }, {
    key: 'createElement',
    value: function createElement(node) {
      var attributes = parseNodeAttributes(node),
          Type = this.type,
          descriptor = getModdleDescriptor(Type),
          context = this.context,
          instance = new Type({});

      (0, _forEach3.default)(attributes, function (value, name) {

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

            (0, _forEach3.default)(values, function (v) {
              context.addReference({
                element: instance,
                property: prop.ns.name,
                id: v
              });
            });
          }
        } else {
          if (prop) {
            value = (0, _types.coerceType)(prop.type, value);
          }

          instance.set(name, value);
        }
      });

      return instance;
    }
  }, {
    key: 'getPropertyForNode',
    value: function getPropertyForNode(node) {

      var nameNs = (0, _ns.parseName)(node.local, node.prefix);

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

        if ((0, _common.serializeAsType)(property)) {
          typeAnnotation = node.attributes[_common.XSI_TYPE];

          // xsi type is optional, if it does not exists the
          // default type is assumed
          if (typeAnnotation) {

            elementTypeName = typeAnnotation.value;

            // TODO: extract real name from attribute
            elementType = model.getType(elementTypeName);

            return (0, _assign3.default)({}, property, { effectiveType: getModdleDescriptor(elementType).name });
          }
        }

        // search for properties by name first
        return property;
      }

      var pkg = model.getPackage(nameNs.prefix);

      if (pkg) {
        elementTypeName = nameNs.prefix + ':' + (0, _common.aliasToName)(nameNs.localName, descriptor.$pkg);
        elementType = model.getType(elementTypeName);

        // search for collection members later
        property = (0, _find3.default)(descriptor.properties, function (p) {
          return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
        });

        if (property) {
          return (0, _assign3.default)({}, property, { effectiveType: getModdleDescriptor(elementType).name });
        }
      } else {
        // parse unknown element (maybe extension)
        property = (0, _find3.default)(descriptor.properties, function (p) {
          return !p.isReference && !p.isAttribute && p.type === 'Element';
        });

        if (property) {
          return property;
        }
      }

      throw error('unrecognized element <' + nameNs.name + '>');
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
    }
  }, {
    key: 'valueHandler',
    value: function valueHandler(propertyDesc, element) {
      return new ValueHandler(propertyDesc, element);
    }
  }, {
    key: 'referenceHandler',
    value: function referenceHandler(propertyDesc) {
      return new ReferenceHandler(propertyDesc, this.context);
    }
  }, {
    key: 'handler',
    value: function handler(type) {
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

  }, {
    key: 'handleChild',
    value: function handleChild(node) {
      var propertyDesc, type, element, childHandler;

      propertyDesc = this.getPropertyForNode(node);
      element = this.element;

      type = propertyDesc.effectiveType || propertyDesc.type;

      if ((0, _types.isSimple)(type)) {
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
          (0, _assign3.default)(newElement, {
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
  }]);

  return ElementHandler;
}(BaseElementHandler);

/**
 * A handler for unknown elements.
 */


var GenericElementHandler = function (_BaseElementHandler2) {
  _inherits(GenericElementHandler, _BaseElementHandler2);

  function GenericElementHandler(model, typeStr, context) {
    _classCallCheck(this, GenericElementHandler);

    return _possibleConstructorReturn(this, (GenericElementHandler.__proto__ || Object.getPrototypeOf(GenericElementHandler)).call(this, model, context));
  }

  _createClass(GenericElementHandler, [{
    key: 'createElement',
    value: function createElement(node) {

      var name = node.name,
          prefix = node.prefix,
          uri = node.ns[prefix],
          attributes = node.attributes;

      return this.model.createAny(name, uri, attributes);
    }
  }, {
    key: 'handleChild',
    value: function handleChild(node) {

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
  }, {
    key: 'handleText',
    value: function handleText(text) {
      this.body = (this.body || '') + text;
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd() {
      if (this.body) {
        this.element.$body = this.body;
      }
    }
  }]);

  return GenericElementHandler;
}(BaseElementHandler);

/**
 * A reader for a meta-model.
 */


var XMLReader = function () {

  /**
   * Construct the reader instance.
   *
   * @param {Object} options
   * @param {Model} options.model used to read xml files
   * @param {Boolean} options.lax whether to make parse errors warnings
   */
  function XMLReader(options) {
    _classCallCheck(this, XMLReader);

    if (options instanceof _moddle2.default) {
      options = {
        model: options
      };
    }

    (0, _assign3.default)(this, { lax: false }, options);
  }

  /**
   * Parse the given XML into a moddle document tree.
   *
   * @param {String} xml
   * @param {ElementHandler|Object} options or rootHandler
   * @param  {Function} done
   */


  _createClass(XMLReader, [{
    key: 'fromXML',
    value: function fromXML(xml, options, done) {

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

      var context = new Context((0, _assign3.default)({}, options, { rootHandler: rootHandler })),
          parser = new _sax.parser(true, { xmlns: true, trim: true }),
          stack = new _tinyStack2.default();

      rootHandler.context = context;

      // push root handler
      stack.push(rootHandler);

      function resolveReferences() {

        var elementsById = context.elementsById;
        var references = context.references;

        var i, r;

        for (i = 0; r = references[i]; i++) {
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

          var message = 'unparsable content <' + node.name + '> detected\n\t' + 'line: ' + line + '\n\t' + 'column: ' + column + '\n\t' + 'nested error: ' + e.message;

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
      (0, _defer3.default)(function () {
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

  }, {
    key: 'handler',
    value: function handler(name) {
      return new ElementHandler(this.model, name);
    }
  }]);

  return XMLReader;
}();

exports.default = XMLReader;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseDelay = __webpack_require__(17);

var _baseDelay2 = _interopRequireDefault(_baseDelay);

var _baseRest = __webpack_require__(5);

var _baseRest2 = _interopRequireDefault(_baseRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
var defer = (0, _baseRest2.default)(function (func, args) {
  return (0, _baseDelay2.default)(func, 1, args);
});

exports.default = defer;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}

exports.default = baseDelay;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = __webpack_require__(20);

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0, _apply2.default)(func, this, otherArgs);
  };
}

exports.default = overRest;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

exports.default = apply;
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(23);

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineProperty = function () {
  try {
    var func = (0, _getNative2.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

exports.default = defineProperty;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

exports.default = getValue;
module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

exports.default = eq;
module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(7);

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssignValue = __webpack_require__(8);

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0, _baseAssignValue2.default)(object, key, newValue);
    } else {
      (0, _assignValue2.default)(object, key, newValue);
    }
  }
  return object;
}

exports.default = copyObject;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRest = __webpack_require__(5);

var _baseRest2 = _interopRequireDefault(_baseRest);

var _isIterateeCall = __webpack_require__(27);

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0, _baseRest2.default)(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && (0, _isIterateeCall2.default)(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

exports.default = createAssigner;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(9);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = __webpack_require__(29);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

exports.default = isFunction;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

exports.default = isObject;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

exports.default = isLength;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;
module.exports = exports["default"];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFind = __webpack_require__(34);

var _createFind2 = _interopRequireDefault(_createFind);

var _findIndex = __webpack_require__(35);

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = (0, _createFind2.default)(_findIndex2.default);

exports.default = find;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIteratee = __webpack_require__(0);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArrayLike = __webpack_require__(2);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!(0, _isArrayLike2.default)(collection)) {
      var iteratee = (0, _baseIteratee2.default)(predicate, 3);
      collection = (0, _keys2.default)(collection);
      predicate = function predicate(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

exports.default = createFind;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindIndex = __webpack_require__(36);

var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

var _baseIteratee = __webpack_require__(0);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _toInteger = __webpack_require__(37);

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : (0, _toInteger2.default)(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return (0, _baseFindIndex2.default)(array, (0, _baseIteratee2.default)(predicate, 3), index);
}

exports.default = findIndex;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

exports.default = baseFindIndex;
module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

exports.default = arrayEach;
module.exports = exports["default"];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFor = __webpack_require__(40);

var _baseFor2 = _interopRequireDefault(_baseFor);

var _keys = __webpack_require__(4);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0, _baseFor2.default)(object, iteratee, _keys2.default);
}

exports.default = baseForOwn;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBaseFor = __webpack_require__(41);

var _createBaseFor2 = _interopRequireDefault(_createBaseFor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0, _createBaseFor2.default)();

exports.default = baseFor;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

exports.default = createBaseFor;
module.exports = exports["default"];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = __webpack_require__(2);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0, _isArrayLike2.default)(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

exports.default = createBaseEach;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayReduce = __webpack_require__(45);

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _baseEach = __webpack_require__(3);

var _baseEach2 = _interopRequireDefault(_baseEach);

var _baseIteratee = __webpack_require__(0);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _baseReduce = __webpack_require__(46);

var _baseReduce2 = _interopRequireDefault(_baseReduce);

var _isArray = __webpack_require__(1);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = (0, _isArray2.default)(collection) ? _arrayReduce2.default : _baseReduce2.default,
      initAccum = arguments.length < 3;

  return func(collection, (0, _baseIteratee2.default)(iteratee, 4), accumulator, initAccum, _baseEach2.default);
}

exports.default = reduce;
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

exports.default = arrayReduce;
module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function (value, index, collection) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

exports.default = baseReduce;
module.exports = exports["default"];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Tiny stack for browser or server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/tiny-stack/master/LICENSE>
 * @link http://avoidwork.github.io/tiny-stack
 * @module tiny-stack
 * @version 0.1.0
 */

(function (global) {

  "use strict";

  /**
   * TinyStack
   *
   * @constructor
   */

  function TinyStack() {
    this.data = [null];
    this.top = 0;
  }

  /**
   * Clears the stack
   *
   * @method clear
   * @memberOf TinyStack
   * @return {Object} {@link TinyStack}
   */
  TinyStack.prototype.clear = function clear() {
    this.data = [null];
    this.top = 0;

    return this;
  };

  /**
   * Gets the size of the stack
   *
   * @method length
   * @memberOf TinyStack
   * @return {Number} Size of stack
   */
  TinyStack.prototype.length = function length() {
    return this.top;
  };

  /**
   * Gets the item at the top of the stack
   *
   * @method peek
   * @memberOf TinyStack
   * @return {Mixed} Item at the top of the stack
   */
  TinyStack.prototype.peek = function peek() {
    return this.data[this.top];
  };

  /**
   * Gets & removes the item at the top of the stack
   *
   * @method pop
   * @memberOf TinyStack
   * @return {Mixed} Item at the top of the stack
   */
  TinyStack.prototype.pop = function pop() {
    if (this.top > 0) {
      this.top--;

      return this.data.pop();
    } else {
      return undefined;
    }
  };

  /**
   * Pushes an item onto the stack
   *
   * @method push
   * @memberOf TinyStack
   * @return {Object} {@link TinyStack}
   */
  TinyStack.prototype.push = function push(arg) {
    this.data[++this.top] = arg;

    return this;
  };

  /**
   * TinyStack factory
   *
   * @method factory
   * @return {Object} {@link TinyStack}
   */
  function factory() {
    return new TinyStack();
  }

  // Node, AMD & window supported
  if (true) {
    module.exports = factory;
  } else if (typeof define == "function") {
    define(function () {
      return factory;
    });
  } else {
    global.stack = factory;
  }
})(undefined);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// wrapper for non-node envs
;(function (sax) {

  sax.parser = function (strict, opt) {
    return new SAXParser(strict, opt);
  };
  sax.SAXParser = SAXParser;
  sax.SAXStream = SAXStream;
  sax.createStream = createStream;

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024;

  var buffers = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

  sax.EVENTS = // for discoverability.
  ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];

  function SAXParser(strict, opt) {
    if (!(this instanceof SAXParser)) return new SAXParser(strict, opt);

    var parser = this;
    clearBuffers(parser);
    parser.q = parser.c = "";
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
    parser.opt = opt || {};
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
    parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
    parser.tags = [];
    parser.closed = parser.closedRoot = parser.sawRoot = false;
    parser.tag = parser.error = null;
    parser.strict = !!strict;
    parser.noscript = !!(strict || parser.opt.noscript);
    parser.state = S.BEGIN;
    parser.ENTITIES = Object.create(sax.ENTITIES);
    parser.attribList = [];

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) parser.ns = Object.create(rootNS);

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false;
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0;
    }
    emit(parser, "onready");
  }

  if (!Object.create) Object.create = function (o) {
    function f() {
      this.__proto__ = o;
    }
    f.prototype = o;
    return new f();
  };

  if (!Object.getPrototypeOf) Object.getPrototypeOf = function (o) {
    return o.__proto__;
  };

  if (!Object.keys) Object.keys = function (o) {
    var a = [];
    for (var i in o) {
      if (o.hasOwnProperty(i)) a.push(i);
    }return a;
  };

  function checkBufferLength(parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10),
        maxActual = 0;
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length;
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case "textNode":
            closeText(parser);
            break;

          case "cdata":
            emitNode(parser, "oncdata", parser.cdata);
            parser.cdata = "";
            break;

          case "script":
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
            break;

          default:
            error(parser, "Max buffer length exceeded: " + buffers[i]);
        }
      }
      maxActual = Math.max(maxActual, len);
    }
    // schedule the next check for the earliest possible buffer overrun.
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH - maxActual + parser.position;
  }

  function clearBuffers(parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = "";
    }
  }

  function flushBuffers(parser) {
    closeText(parser);
    if (parser.cdata !== "") {
      emitNode(parser, "oncdata", parser.cdata);
      parser.cdata = "";
    }
    if (parser.script !== "") {
      emitNode(parser, "onscript", parser.script);
      parser.script = "";
    }
  }

  SAXParser.prototype = { end: function end() {
      _end(this);
    },
    write: write,
    resume: function resume() {
      this.error = null;return this;
    },
    close: function close() {
      return this.write(null);
    },
    flush: function flush() {
      flushBuffers(this);
    }
  };

  try {
    var Stream = __webpack_require__(49).Stream;
  } catch (ex) {
    var Stream = function Stream() {};
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== "error" && ev !== "end";
  });

  function createStream(strict, opt) {
    return new SAXStream(strict, opt);
  }

  function SAXStream(strict, opt) {
    if (!(this instanceof SAXStream)) return new SAXStream(strict, opt);

    Stream.apply(this);

    this._parser = new SAXParser(strict, opt);
    this.writable = true;
    this.readable = true;

    var me = this;

    this._parser.onend = function () {
      me.emit("end");
    };

    this._parser.onerror = function (er) {
      me.emit("error", er);

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null;
    };

    this._decoder = null;

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, "on" + ev, {
        get: function get() {
          return me._parser["on" + ev];
        },
        set: function set(h) {
          if (!h) {
            me.removeAllListeners(ev);
            return me._parser["on" + ev] = h;
          }
          me.on(ev, h);
        },
        enumerable: true,
        configurable: false
      });
    });
  }

  SAXStream.prototype = Object.create(Stream.prototype, { constructor: { value: SAXStream } });

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__(50).StringDecoder;
        this._decoder = new SD('utf8');
      }
      data = this._decoder.write(data);
    }

    this._parser.write(data.toString());
    this.emit("data", data);
    return true;
  };

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) this.write(chunk);
    this._parser.end();
    return true;
  };

  SAXStream.prototype.on = function (ev, handler) {
    var me = this;
    if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser["on" + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        args.splice(0, 0, ev);
        me.emit.apply(me, args);
      };
    }

    return Stream.prototype.on.call(me, ev, handler);
  };

  // character classes and tokens
  var whitespace = "\r\n\t "
  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  ,
      number = "0124356789",
      letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // (Letter | "_" | ":")
  ,
      quote = "'\"",
      entity = number + letter + "#",
      attribEnd = whitespace + ">",
      CDATA = "[CDATA[",
      DOCTYPE = "DOCTYPE",
      XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace",
      XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/",
      rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE

    // turn all the string character sets into character class objects.
  };whitespace = charClass(whitespace);
  number = charClass(number);
  letter = charClass(letter);

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;

  quote = charClass(quote);
  entity = charClass(entity);
  attribEnd = charClass(attribEnd);

  function charClass(str) {
    return str.split("").reduce(function (s, c) {
      s[c] = true;
      return s;
    }, {});
  }

  function isRegExp(c) {
    return Object.prototype.toString.call(c) === '[object RegExp]';
  }

  function is(charclass, c) {
    return isRegExp(charclass) ? !!c.match(charclass) : charclass[c];
  }

  function not(charclass, c) {
    return !is(charclass, c);
  }

  var S = 0;
  sax.STATE = { BEGIN: S++,
    TEXT: S++ // general stuff
    , TEXT_ENTITY: S++ // &amp and such.
    , OPEN_WAKA: S++ // <
    , SGML_DECL: S++ // <!BLARG
    , SGML_DECL_QUOTED: S++ // <!BLARG foo "bar
    , DOCTYPE: S++ // <!DOCTYPE
    , DOCTYPE_QUOTED: S++ // <!DOCTYPE "//blah
    , DOCTYPE_DTD: S++ // <!DOCTYPE "//blah" [ ...
    , DOCTYPE_DTD_QUOTED: S++ // <!DOCTYPE "//blah" [ "foo
    , COMMENT_STARTING: S++ // <!-
    , COMMENT: S++ // <!--
    , COMMENT_ENDING: S++ // <!-- blah -
    , COMMENT_ENDED: S++ // <!-- blah --
    , CDATA: S++ // <![CDATA[ something
    , CDATA_ENDING: S++ // ]
    , CDATA_ENDING_2: S++ // ]]
    , PROC_INST: S++ // <?hi
    , PROC_INST_BODY: S++ // <?hi there
    , PROC_INST_ENDING: S++ // <?hi "there" ?
    , OPEN_TAG: S++ // <strong
    , OPEN_TAG_SLASH: S++ // <strong /
    , ATTRIB: S++ // <a
    , ATTRIB_NAME: S++ // <a foo
    , ATTRIB_NAME_SAW_WHITE: S++ // <a foo _
    , ATTRIB_VALUE: S++ // <a foo=
    , ATTRIB_VALUE_QUOTED: S++ // <a foo="bar
    , ATTRIB_VALUE_CLOSED: S++ // <a foo="bar"
    , ATTRIB_VALUE_UNQUOTED: S++ // <a foo=bar
    , ATTRIB_VALUE_ENTITY_Q: S++ // <foo bar="&quot;"
    , ATTRIB_VALUE_ENTITY_U: S++ // <foo bar=&quot;
    , CLOSE_TAG: S++ // </a
    , CLOSE_TAG_SAW_WHITE: S++ // </a   >
    , SCRIPT: S++ // <script> ...
    , SCRIPT_ENDING: S++ // <script> ... <
  };

  sax.ENTITIES = { "amp": "&",
    "gt": ">",
    "lt": "<",
    "quot": "\"",
    "apos": "'",
    "AElig": 198,
    "Aacute": 193,
    "Acirc": 194,
    "Agrave": 192,
    "Aring": 197,
    "Atilde": 195,
    "Auml": 196,
    "Ccedil": 199,
    "ETH": 208,
    "Eacute": 201,
    "Ecirc": 202,
    "Egrave": 200,
    "Euml": 203,
    "Iacute": 205,
    "Icirc": 206,
    "Igrave": 204,
    "Iuml": 207,
    "Ntilde": 209,
    "Oacute": 211,
    "Ocirc": 212,
    "Ograve": 210,
    "Oslash": 216,
    "Otilde": 213,
    "Ouml": 214,
    "THORN": 222,
    "Uacute": 218,
    "Ucirc": 219,
    "Ugrave": 217,
    "Uuml": 220,
    "Yacute": 221,
    "aacute": 225,
    "acirc": 226,
    "aelig": 230,
    "agrave": 224,
    "aring": 229,
    "atilde": 227,
    "auml": 228,
    "ccedil": 231,
    "eacute": 233,
    "ecirc": 234,
    "egrave": 232,
    "eth": 240,
    "euml": 235,
    "iacute": 237,
    "icirc": 238,
    "igrave": 236,
    "iuml": 239,
    "ntilde": 241,
    "oacute": 243,
    "ocirc": 244,
    "ograve": 242,
    "oslash": 248,
    "otilde": 245,
    "ouml": 246,
    "szlig": 223,
    "thorn": 254,
    "uacute": 250,
    "ucirc": 251,
    "ugrave": 249,
    "uuml": 252,
    "yacute": 253,
    "yuml": 255,
    "copy": 169,
    "reg": 174,
    "nbsp": 160,
    "iexcl": 161,
    "cent": 162,
    "pound": 163,
    "curren": 164,
    "yen": 165,
    "brvbar": 166,
    "sect": 167,
    "uml": 168,
    "ordf": 170,
    "laquo": 171,
    "not": 172,
    "shy": 173,
    "macr": 175,
    "deg": 176,
    "plusmn": 177,
    "sup1": 185,
    "sup2": 178,
    "sup3": 179,
    "acute": 180,
    "micro": 181,
    "para": 182,
    "middot": 183,
    "cedil": 184,
    "ordm": 186,
    "raquo": 187,
    "frac14": 188,
    "frac12": 189,
    "frac34": 190,
    "iquest": 191,
    "times": 215,
    "divide": 247,
    "OElig": 338,
    "oelig": 339,
    "Scaron": 352,
    "scaron": 353,
    "Yuml": 376,
    "fnof": 402,
    "circ": 710,
    "tilde": 732,
    "Alpha": 913,
    "Beta": 914,
    "Gamma": 915,
    "Delta": 916,
    "Epsilon": 917,
    "Zeta": 918,
    "Eta": 919,
    "Theta": 920,
    "Iota": 921,
    "Kappa": 922,
    "Lambda": 923,
    "Mu": 924,
    "Nu": 925,
    "Xi": 926,
    "Omicron": 927,
    "Pi": 928,
    "Rho": 929,
    "Sigma": 931,
    "Tau": 932,
    "Upsilon": 933,
    "Phi": 934,
    "Chi": 935,
    "Psi": 936,
    "Omega": 937,
    "alpha": 945,
    "beta": 946,
    "gamma": 947,
    "delta": 948,
    "epsilon": 949,
    "zeta": 950,
    "eta": 951,
    "theta": 952,
    "iota": 953,
    "kappa": 954,
    "lambda": 955,
    "mu": 956,
    "nu": 957,
    "xi": 958,
    "omicron": 959,
    "pi": 960,
    "rho": 961,
    "sigmaf": 962,
    "sigma": 963,
    "tau": 964,
    "upsilon": 965,
    "phi": 966,
    "chi": 967,
    "psi": 968,
    "omega": 969,
    "thetasym": 977,
    "upsih": 978,
    "piv": 982,
    "ensp": 8194,
    "emsp": 8195,
    "thinsp": 8201,
    "zwnj": 8204,
    "zwj": 8205,
    "lrm": 8206,
    "rlm": 8207,
    "ndash": 8211,
    "mdash": 8212,
    "lsquo": 8216,
    "rsquo": 8217,
    "sbquo": 8218,
    "ldquo": 8220,
    "rdquo": 8221,
    "bdquo": 8222,
    "dagger": 8224,
    "Dagger": 8225,
    "bull": 8226,
    "hellip": 8230,
    "permil": 8240,
    "prime": 8242,
    "Prime": 8243,
    "lsaquo": 8249,
    "rsaquo": 8250,
    "oline": 8254,
    "frasl": 8260,
    "euro": 8364,
    "image": 8465,
    "weierp": 8472,
    "real": 8476,
    "trade": 8482,
    "alefsym": 8501,
    "larr": 8592,
    "uarr": 8593,
    "rarr": 8594,
    "darr": 8595,
    "harr": 8596,
    "crarr": 8629,
    "lArr": 8656,
    "uArr": 8657,
    "rArr": 8658,
    "dArr": 8659,
    "hArr": 8660,
    "forall": 8704,
    "part": 8706,
    "exist": 8707,
    "empty": 8709,
    "nabla": 8711,
    "isin": 8712,
    "notin": 8713,
    "ni": 8715,
    "prod": 8719,
    "sum": 8721,
    "minus": 8722,
    "lowast": 8727,
    "radic": 8730,
    "prop": 8733,
    "infin": 8734,
    "ang": 8736,
    "and": 8743,
    "or": 8744,
    "cap": 8745,
    "cup": 8746,
    "int": 8747,
    "there4": 8756,
    "sim": 8764,
    "cong": 8773,
    "asymp": 8776,
    "ne": 8800,
    "equiv": 8801,
    "le": 8804,
    "ge": 8805,
    "sub": 8834,
    "sup": 8835,
    "nsub": 8836,
    "sube": 8838,
    "supe": 8839,
    "oplus": 8853,
    "otimes": 8855,
    "perp": 8869,
    "sdot": 8901,
    "lceil": 8968,
    "rceil": 8969,
    "lfloor": 8970,
    "rfloor": 8971,
    "lang": 9001,
    "rang": 9002,
    "loz": 9674,
    "spades": 9824,
    "clubs": 9827,
    "hearts": 9829,
    "diams": 9830
  };

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key];
    var s = typeof e === 'number' ? String.fromCharCode(e) : e;
    sax.ENTITIES[key] = s;
  });

  for (var S in sax.STATE) {
    sax.STATE[sax.STATE[S]] = S;
  } // shorthand
  S = sax.STATE;

  function emit(parser, event, data) {
    parser[event] && parser[event](data);
  }

  function emitNode(parser, nodeType, data) {
    if (parser.textNode) closeText(parser);
    emit(parser, nodeType, data);
  }

  function closeText(parser) {
    parser.textNode = textopts(parser.opt, parser.textNode);
    if (parser.textNode) emit(parser, "ontext", parser.textNode);
    parser.textNode = "";
  }

  function textopts(opt, text) {
    if (opt.trim) text = text.trim();
    if (opt.normalize) text = text.replace(/\s+/g, " ");
    return text;
  }

  function error(parser, er) {
    closeText(parser);
    if (parser.trackPosition) {
      er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
    }
    er = new Error(er);
    parser.error = er;
    emit(parser, "onerror", er);
    return parser;
  }

  function _end(parser) {
    if (!parser.closedRoot) strictFail(parser, "Unclosed root tag");
    if (parser.state !== S.BEGIN && parser.state !== S.TEXT) error(parser, "Unexpected end");
    closeText(parser);
    parser.c = "";
    parser.closed = true;
    emit(parser, "onend");
    SAXParser.call(parser, parser.strict, parser.opt);
    return parser;
  }

  function strictFail(parser, message) {
    if ((typeof parser === "undefined" ? "undefined" : _typeof(parser)) !== 'object' || !(parser instanceof SAXParser)) throw new Error('bad call to strictFail');
    if (parser.strict) error(parser, message);
  }

  function newTag(parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
    var parent = parser.tags[parser.tags.length - 1] || parser,
        tag = parser.tag = { name: parser.tagName, attributes: {}

      // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    };if (parser.opt.xmlns) tag.ns = parent.ns;
    parser.attribList.length = 0;
  }

  function qname(name, attribute) {
    var i = name.indexOf(":"),
        qualName = i < 0 ? ["", name] : name.split(":"),
        prefix = qualName[0],
        local = qualName[1];

    // <x "xmlns"="http://foo">
    if (attribute && name === "xmlns") {
      prefix = "xmlns";
      local = "";
    }

    return { prefix: prefix, local: local };
  }

  function attrib(parser) {
    if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]();

    if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      return parser.attribName = parser.attribValue = "";
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true),
          prefix = qn.prefix,
          local = qn.local;

      if (prefix === "xmlns") {
        // namespace binding attribute; push the binding into scope
        if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
        } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
        } else {
          var tag = parser.tag,
              parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns);
          }
          tag.ns[local] = parser.attribValue;
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect; preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue]);
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue;
      emitNode(parser, "onattribute", { name: parser.attribName,
        value: parser.attribValue });
    }

    parser.attribName = parser.attribValue = "";
  }

  function openTag(parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag;

      // add namespace info to tag
      var qn = qname(parser.tagName);
      tag.prefix = qn.prefix;
      tag.local = qn.local;
      tag.uri = tag.ns[qn.prefix] || "";

      if (tag.prefix && !tag.uri) {
        strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
        tag.uri = qn.prefix;
      }

      var parent = parser.tags[parser.tags.length - 1] || parser;
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, "onopennamespace", { prefix: p, uri: tag.ns[p] });
        });
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i];
        var name = nv[0],
            value = nv[1],
            qualName = qname(name, true),
            prefix = qualName.prefix,
            local = qualName.local,
            uri = prefix == "" ? "" : tag.ns[prefix] || "",
            a = { name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri

          // if there's any attributes with an undefined namespace,
          // then fail on them now.
        };if (prefix && prefix != "xmlns" && !uri) {
          strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
          a.uri = prefix;
        }
        parser.tag.attributes[name] = a;
        emitNode(parser, "onattribute", a);
      }
      parser.attribList.length = 0;
    }

    parser.tag.isSelfClosing = !!selfClosing;

    // process the tag
    parser.sawRoot = true;
    parser.tags.push(parser.tag);
    emitNode(parser, "onopentag", parser.tag);
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
        parser.state = S.SCRIPT;
      } else {
        parser.state = S.TEXT;
      }
      parser.tag = null;
      parser.tagName = "";
    }
    parser.attribName = parser.attribValue = "";
    parser.attribList.length = 0;
  }

  function closeTag(parser) {
    if (!parser.tagName) {
      strictFail(parser, "Weird empty close tag.");
      parser.textNode += "</>";
      parser.state = S.TEXT;
      return;
    }

    if (parser.script) {
      if (parser.tagName !== "script") {
        parser.script += "</" + parser.tagName + ">";
        parser.tagName = "";
        parser.state = S.SCRIPT;
        return;
      }
      emitNode(parser, "onscript", parser.script);
      parser.script = "";
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length;
    var tagName = parser.tagName;
    if (!parser.strict) tagName = tagName[parser.looseCase]();
    var closeTo = tagName;
    while (t--) {
      var close = parser.tags[t];
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, "Unexpected close tag");
      } else break;
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, "Unmatched closing tag: " + parser.tagName);
      parser.textNode += "</" + parser.tagName + ">";
      parser.state = S.TEXT;
      return;
    }
    parser.tagName = tagName;
    var s = parser.tags.length;
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop();
      parser.tagName = parser.tag.name;
      emitNode(parser, "onclosetag", parser.tagName);

      var x = {};
      for (var i in tag.ns) {
        x[i] = tag.ns[i];
      }var parent = parser.tags[parser.tags.length - 1] || parser;
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p];
          emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
        });
      }
    }
    if (t === 0) parser.closedRoot = true;
    parser.tagName = parser.attribValue = parser.attribName = "";
    parser.attribList.length = 0;
    parser.state = S.TEXT;
  }

  function parseEntity(parser) {
    var entity = parser.entity,
        entityLC = entity.toLowerCase(),
        num,
        numStr = "";
    if (parser.ENTITIES[entity]) return parser.ENTITIES[entity];
    if (parser.ENTITIES[entityLC]) return parser.ENTITIES[entityLC];
    entity = entityLC;
    if (entity.charAt(0) === "#") {
      if (entity.charAt(1) === "x") {
        entity = entity.slice(2);
        num = parseInt(entity, 16);
        numStr = num.toString(16);
      } else {
        entity = entity.slice(1);
        num = parseInt(entity, 10);
        numStr = num.toString(10);
      }
    }
    entity = entity.replace(/^0+/, "");
    if (numStr.toLowerCase() !== entity) {
      strictFail(parser, "Invalid character entity");
      return "&" + parser.entity + ";";
    }

    return String.fromCodePoint(num);
  }

  function write(chunk) {
    var parser = this;
    if (this.error) throw this.error;
    if (parser.closed) return error(parser, "Cannot write after close. Assign an onready handler.");
    if (chunk === null) return _end(parser);
    var i = 0,
        c = "";
    while (parser.c = c = chunk.charAt(i++)) {
      if (parser.trackPosition) {
        parser.position++;
        if (c === "\n") {
          parser.line++;
          parser.column = 0;
        } else parser.column++;
      }
      switch (parser.state) {

        case S.BEGIN:
          if (c === "<") {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
          } else if (not(whitespace, c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, "Non-whitespace before first tag.");
            parser.textNode = c;
            parser.state = S.TEXT;
          }
          continue;

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1;
            while (c && c !== "<" && c !== "&") {
              c = chunk.charAt(i++);
              if (c && parser.trackPosition) {
                parser.position++;
                if (c === "\n") {
                  parser.line++;
                  parser.column = 0;
                } else parser.column++;
              }
            }
            parser.textNode += chunk.substring(starti, i - 1);
          }
          if (c === "<") {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
          } else {
            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) strictFail(parser, "Text data outside of root node.");
            if (c === "&") parser.state = S.TEXT_ENTITY;else parser.textNode += c;
          }
          continue;

        case S.SCRIPT:
          // only non-strict
          if (c === "<") {
            parser.state = S.SCRIPT_ENDING;
          } else parser.script += c;
          continue;

        case S.SCRIPT_ENDING:
          if (c === "/") {
            parser.state = S.CLOSE_TAG;
          } else {
            parser.script += "<" + c;
            parser.state = S.SCRIPT;
          }
          continue;

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === "!") {
            parser.state = S.SGML_DECL;
            parser.sgmlDecl = "";
          } else if (is(whitespace, c)) {
            // wait for it...
          } else if (is(nameStart, c)) {
            parser.state = S.OPEN_TAG;
            parser.tagName = c;
          } else if (c === "/") {
            parser.state = S.CLOSE_TAG;
            parser.tagName = "";
          } else if (c === "?") {
            parser.state = S.PROC_INST;
            parser.procInstName = parser.procInstBody = "";
          } else {
            strictFail(parser, "Unencoded <");
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition;
              c = new Array(pad).join(" ") + c;
            }
            parser.textNode += "<" + c;
            parser.state = S.TEXT;
          }
          continue;

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, "onopencdata");
            parser.state = S.CDATA;
            parser.sgmlDecl = "";
            parser.cdata = "";
          } else if (parser.sgmlDecl + c === "--") {
            parser.state = S.COMMENT;
            parser.comment = "";
            parser.sgmlDecl = "";
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE;
            if (parser.doctype || parser.sawRoot) strictFail(parser, "Inappropriately located doctype declaration");
            parser.doctype = "";
            parser.sgmlDecl = "";
          } else if (c === ">") {
            emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
            parser.sgmlDecl = "";
            parser.state = S.TEXT;
          } else if (is(quote, c)) {
            parser.state = S.SGML_DECL_QUOTED;
            parser.sgmlDecl += c;
          } else parser.sgmlDecl += c;
          continue;

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL;
            parser.q = "";
          }
          parser.sgmlDecl += c;
          continue;

        case S.DOCTYPE:
          if (c === ">") {
            parser.state = S.TEXT;
            emitNode(parser, "ondoctype", parser.doctype);
            parser.doctype = true; // just remember that we saw it.
          } else {
            parser.doctype += c;
            if (c === "[") parser.state = S.DOCTYPE_DTD;else if (is(quote, c)) {
              parser.state = S.DOCTYPE_QUOTED;
              parser.q = c;
            }
          }
          continue;

        case S.DOCTYPE_QUOTED:
          parser.doctype += c;
          if (c === parser.q) {
            parser.q = "";
            parser.state = S.DOCTYPE;
          }
          continue;

        case S.DOCTYPE_DTD:
          parser.doctype += c;
          if (c === "]") parser.state = S.DOCTYPE;else if (is(quote, c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED;
            parser.q = c;
          }
          continue;

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c;
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD;
            parser.q = "";
          }
          continue;

        case S.COMMENT:
          if (c === "-") parser.state = S.COMMENT_ENDING;else parser.comment += c;
          continue;

        case S.COMMENT_ENDING:
          if (c === "-") {
            parser.state = S.COMMENT_ENDED;
            parser.comment = textopts(parser.opt, parser.comment);
            if (parser.comment) emitNode(parser, "oncomment", parser.comment);
            parser.comment = "";
          } else {
            parser.comment += "-" + c;
            parser.state = S.COMMENT;
          }
          continue;

        case S.COMMENT_ENDED:
          if (c !== ">") {
            strictFail(parser, "Malformed comment");
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += "--" + c;
            parser.state = S.COMMENT;
          } else parser.state = S.TEXT;
          continue;

        case S.CDATA:
          if (c === "]") parser.state = S.CDATA_ENDING;else parser.cdata += c;
          continue;

        case S.CDATA_ENDING:
          if (c === "]") parser.state = S.CDATA_ENDING_2;else {
            parser.cdata += "]" + c;
            parser.state = S.CDATA;
          }
          continue;

        case S.CDATA_ENDING_2:
          if (c === ">") {
            if (parser.cdata) emitNode(parser, "oncdata", parser.cdata);
            emitNode(parser, "onclosecdata");
            parser.cdata = "";
            parser.state = S.TEXT;
          } else if (c === "]") {
            parser.cdata += "]";
          } else {
            parser.cdata += "]]" + c;
            parser.state = S.CDATA;
          }
          continue;

        case S.PROC_INST:
          if (c === "?") parser.state = S.PROC_INST_ENDING;else if (is(whitespace, c)) parser.state = S.PROC_INST_BODY;else parser.procInstName += c;
          continue;

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && is(whitespace, c)) continue;else if (c === "?") parser.state = S.PROC_INST_ENDING;else parser.procInstBody += c;
          continue;

        case S.PROC_INST_ENDING:
          if (c === ">") {
            emitNode(parser, "onprocessinginstruction", {
              name: parser.procInstName,
              body: parser.procInstBody
            });
            parser.procInstName = parser.procInstBody = "";
            parser.state = S.TEXT;
          } else {
            parser.procInstBody += "?" + c;
            parser.state = S.PROC_INST_BODY;
          }
          continue;

        case S.OPEN_TAG:
          if (is(nameBody, c)) parser.tagName += c;else {
            newTag(parser);
            if (c === ">") openTag(parser);else if (c === "/") parser.state = S.OPEN_TAG_SLASH;else {
              if (not(whitespace, c)) strictFail(parser, "Invalid character in tag name");
              parser.state = S.ATTRIB;
            }
          }
          continue;

        case S.OPEN_TAG_SLASH:
          if (c === ">") {
            openTag(parser, true);
            closeTag(parser);
          } else {
            strictFail(parser, "Forward-slash in opening tag not followed by >");
            parser.state = S.ATTRIB;
          }
          continue;

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (is(whitespace, c)) continue;else if (c === ">") openTag(parser);else if (c === "/") parser.state = S.OPEN_TAG_SLASH;else if (is(nameStart, c)) {
            parser.attribName = c;
            parser.attribValue = "";
            parser.state = S.ATTRIB_NAME;
          } else strictFail(parser, "Invalid attribute name");
          continue;

        case S.ATTRIB_NAME:
          if (c === "=") parser.state = S.ATTRIB_VALUE;else if (c === ">") {
            strictFail(parser, "Attribute without value");
            parser.attribValue = parser.attribName;
            attrib(parser);
            openTag(parser);
          } else if (is(whitespace, c)) parser.state = S.ATTRIB_NAME_SAW_WHITE;else if (is(nameBody, c)) parser.attribName += c;else strictFail(parser, "Invalid attribute name");
          continue;

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === "=") parser.state = S.ATTRIB_VALUE;else if (is(whitespace, c)) continue;else {
            strictFail(parser, "Attribute without value");
            parser.tag.attributes[parser.attribName] = "";
            parser.attribValue = "";
            emitNode(parser, "onattribute", { name: parser.attribName, value: "" });
            parser.attribName = "";
            if (c === ">") openTag(parser);else if (is(nameStart, c)) {
              parser.attribName = c;
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
              parser.state = S.ATTRIB;
            }
          }
          continue;

        case S.ATTRIB_VALUE:
          if (is(whitespace, c)) continue;else if (is(quote, c)) {
            parser.q = c;
            parser.state = S.ATTRIB_VALUE_QUOTED;
          } else {
            strictFail(parser, "Unquoted attribute value");
            parser.state = S.ATTRIB_VALUE_UNQUOTED;
            parser.attribValue = c;
          }
          continue;

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q;else parser.attribValue += c;
            continue;
          }
          attrib(parser);
          parser.q = "";
          parser.state = S.ATTRIB_VALUE_CLOSED;
          continue;

        case S.ATTRIB_VALUE_CLOSED:
          if (is(whitespace, c)) {
            parser.state = S.ATTRIB;
          } else if (c === ">") openTag(parser);else if (c === "/") parser.state = S.OPEN_TAG_SLASH;else if (is(nameStart, c)) {
            strictFail(parser, "No whitespace between attributes");
            parser.attribName = c;
            parser.attribValue = "";
            parser.state = S.ATTRIB_NAME;
          } else strictFail(parser, "Invalid attribute name");
          continue;

        case S.ATTRIB_VALUE_UNQUOTED:
          if (not(attribEnd, c)) {
            if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U;else parser.attribValue += c;
            continue;
          }
          attrib(parser);
          if (c === ">") openTag(parser);else parser.state = S.ATTRIB;
          continue;

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (is(whitespace, c)) continue;else if (not(nameStart, c)) {
              if (parser.script) {
                parser.script += "</" + c;
                parser.state = S.SCRIPT;
              } else {
                strictFail(parser, "Invalid tagname in closing tag.");
              }
            } else parser.tagName = c;
          } else if (c === ">") closeTag(parser);else if (is(nameBody, c)) parser.tagName += c;else if (parser.script) {
            parser.script += "</" + parser.tagName;
            parser.tagName = "";
            parser.state = S.SCRIPT;
          } else {
            if (not(whitespace, c)) strictFail(parser, "Invalid tagname in closing tag");
            parser.state = S.CLOSE_TAG_SAW_WHITE;
          }
          continue;

        case S.CLOSE_TAG_SAW_WHITE:
          if (is(whitespace, c)) continue;
          if (c === ">") closeTag(parser);else strictFail(parser, "Invalid characters in closing tag");
          continue;

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          switch (parser.state) {
            case S.TEXT_ENTITY:
              var returnState = S.TEXT,
                  buffer = "textNode";
              break;

            case S.ATTRIB_VALUE_ENTITY_Q:
              var returnState = S.ATTRIB_VALUE_QUOTED,
                  buffer = "attribValue";
              break;

            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState = S.ATTRIB_VALUE_UNQUOTED,
                  buffer = "attribValue";
              break;
          }
          if (c === ";") {
            parser[buffer] += parseEntity(parser);
            parser.entity = "";
            parser.state = returnState;
          } else if (is(entity, c)) parser.entity += c;else {
            strictFail(parser, "Invalid character entity");
            parser[buffer] += "&" + parser.entity + c;
            parser.entity = "";
            parser.state = returnState;
          }
          continue;

        default:
          throw new Error(parser, "Unknown state: " + parser.state);
      }
    } // while
    // cdata blocks can get very big under normal conditions. emit and move on.
    // if (parser.state === S.CDATA && parser.cdata) {
    //   emitNode(parser, "oncdata", parser.cdata)
    //   parser.cdata = ""
    // }
    if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser);
    return parser;
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode;
      var floor = Math.floor;
      var fromCodePoint = function fromCodePoint() {
        var MAX_SIZE = 0x4000;
        var codeUnits = [];
        var highSurrogate;
        var lowSurrogate;
        var index = -1;
        var length = arguments.length;
        if (!length) {
          return '';
        }
        var result = '';
        while (++index < length) {
          var codePoint = Number(arguments[index]);
          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
          codePoint < 0 || // not a valid Unicode code point
          codePoint > 0x10FFFF || // not a valid Unicode code point
          floor(codePoint) != codePoint // not an integer
          ) {
              throw RangeError('Invalid code point: ' + codePoint);
            }
          if (codePoint <= 0xFFFF) {
            // BMP code point
            codeUnits.push(codePoint);
          } else {
            // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000;
            highSurrogate = (codePoint >> 10) + 0xD800;
            lowSurrogate = codePoint % 0x400 + 0xDC00;
            codeUnits.push(highSurrogate, lowSurrogate);
          }
          if (index + 1 == length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits);
            codeUnits.length = 0;
          }
        }
        return result;
      };
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          'value': fromCodePoint,
          'configurable': true,
          'writable': true
        });
      } else {
        String.fromCodePoint = fromCodePoint;
      }
    })();
  }
})( false ? sax = {} : exports);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign2 = __webpack_require__(6);

var _assign3 = _interopRequireDefault(_assign2);

var _filter2 = __webpack_require__(53);

var _filter3 = _interopRequireDefault(_filter2);

var _isString2 = __webpack_require__(56);

var _isString3 = _interopRequireDefault(_isString2);

var _forEach2 = __webpack_require__(10);

var _forEach3 = _interopRequireDefault(_forEach2);

var _map2 = __webpack_require__(58);

var _map3 = _interopRequireDefault(_map2);

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(12);

var _ns = __webpack_require__(11);

var _common = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';
var ESCAPE_CHARS = /(<|>|'|"|&|\n\r|\n)/g;

function nsName(ns) {
  if ((0, _isString3.default)(ns)) {
    return ns;
  } else {
    return (ns.prefix ? ns.prefix + ':' : '') + ns.localName;
  }
}

function getNsAttrs(namespaces) {

  function isUsed(ns) {
    return namespaces.used[ns.uri];
  }

  function toAttr(ns) {
    var name = 'xmlns' + (ns.prefix ? ':' + ns.prefix : '');
    return { name: name, value: ns.uri };
  }

  var allNs = [].concat(namespaces.wellknown, namespaces.custom);

  return (0, _map3.default)((0, _filter3.default)(allNs, isUsed), toAttr);
}

function getElementNs(ns, descriptor) {
  if (descriptor.isGeneric) {
    return descriptor.name;
  } else {
    return (0, _assign3.default)({ localName: (0, _common.nameToAlias)(descriptor.ns.localName, descriptor.$pkg) }, ns);
  }
}

function getPropertyNs(ns, descriptor) {
  return (0, _assign3.default)({ localName: descriptor.ns.localName }, ns);
}

function getSerializableProperties(element) {
  var descriptor = element.$descriptor;

  return (0, _filter3.default)(descriptor.properties, function (p) {
    var name = p.name;

    if (p.isVirtual) {
      return false;
    }

    // do not serialize defaults
    if (!element.hasOwnProperty(name)) {
      return false;
    }

    var value = element[name];

    // do not serialize default equals
    if (value === p.default) {
      return false;
    }

    // do not serialize null properties
    if (value === null) {
      return false;
    }

    return p.isMany ? value.length : true;
  });
}

var ESCAPE_MAP = {
  '\n': '10',
  '\n\r': '10',
  '"': '34',
  '\'': '39',
  '<': '60',
  '>': '62',
  '&': '38'
};

/**
 * Escape a string attribute to not contain any bad values (line breaks, '"', ...)
 *
 * @param {String} str the string to escape
 * @return {String} the escaped string
 */
function escapeAttr(str) {

  // ensure we are handling strings here
  str = (0, _isString3.default)(str) ? str : '' + str;

  return str.replace(ESCAPE_CHARS, function (str) {
    return '&#' + ESCAPE_MAP[str] + ';';
  });
}

function filterAttributes(props) {
  return (0, _filter3.default)(props, function (p) {
    return p.isAttr;
  });
}

function filterContained(props) {
  return (0, _filter3.default)(props, function (p) {
    return !p.isAttr;
  });
}

/**
 * Serializer for references.
 */

var ReferenceSerializer = function () {
  function ReferenceSerializer(parent, ns) {
    _classCallCheck(this, ReferenceSerializer);

    this.ns = ns;
  }

  _createClass(ReferenceSerializer, [{
    key: 'build',
    value: function build(element) {
      this.element = element;
      return this;
    }
  }, {
    key: 'serializeTo',
    value: function serializeTo(writer) {
      writer.appendIndent().append('<' + nsName(this.ns) + '>' + this.element.id + '</' + nsName(this.ns) + '>').appendNewLine();
    }
  }]);

  return ReferenceSerializer;
}();

/**
 * Serializer for body text.
 */


var BodySerializer = function () {
  function BodySerializer() {
    _classCallCheck(this, BodySerializer);
  }

  _createClass(BodySerializer, [{
    key: 'serializeTo',
    value: function serializeTo(writer) {
      this.serializeValue(writer);
    }
  }, {
    key: 'serializeValue',
    value: function serializeValue(writer) {
      var escape = this.escape;

      if (escape) {
        writer.append('<![CDATA[');
      }

      writer.append(this.value);

      if (escape) {
        writer.append(']]>');
      }
    }
  }, {
    key: 'build',
    value: function build(prop, value) {
      this.value = value;

      if (prop.type === 'String' && value.search(ESCAPE_CHARS) !== -1) {
        this.escape = true;
      }

      return this;
    }
  }]);

  return BodySerializer;
}();

/**
 * Serializer for a value.
 */


var ValueSerializer = function (_BodySerializer) {
  _inherits(ValueSerializer, _BodySerializer);

  function ValueSerializer(ns) {
    _classCallCheck(this, ValueSerializer);

    var _this = _possibleConstructorReturn(this, (ValueSerializer.__proto__ || Object.getPrototypeOf(ValueSerializer)).call(this));

    _this.ns = ns;
    return _this;
  }

  _createClass(ValueSerializer, [{
    key: 'serializeTo',
    value: function serializeTo(writer) {

      writer.appendIndent().append('<' + nsName(this.ns) + '>');

      this.serializeValue(writer);

      writer.append('</' + nsName(this.ns) + '>').appendNewLine();
    }
  }]);

  return ValueSerializer;
}(BodySerializer);

/**
 * Serializer for an element tag.
 */


var ElementSerializer = function () {
  function ElementSerializer(parent, ns) {
    _classCallCheck(this, ElementSerializer);

    this.body = [];
    this.attrs = [];

    this.parent = parent;
    this.ns = ns;
  }

  _createClass(ElementSerializer, [{
    key: 'build',
    value: function build(element) {
      this.element = element;

      var otherAttrs = this.parseNsAttributes(element);

      if (!this.ns) {
        this.ns = this.nsTagName(element.$descriptor);
      }

      if (element.$descriptor.isGeneric) {
        this.parseGeneric(element);
      } else {
        var properties = getSerializableProperties(element);

        this.parseAttributes(filterAttributes(properties));
        this.parseContainments(filterContained(properties));

        this.parseGenericAttributes(element, otherAttrs);
      }

      return this;
    }
  }, {
    key: 'nsTagName',
    value: function nsTagName(descriptor) {
      var effectiveNs = this.logNamespaceUsed(descriptor.ns);
      return getElementNs(effectiveNs, descriptor);
    }
  }, {
    key: 'nsPropertyTagName',
    value: function nsPropertyTagName(descriptor) {
      var effectiveNs = this.logNamespaceUsed(descriptor.ns);
      return getPropertyNs(effectiveNs, descriptor);
    }
  }, {
    key: 'isLocalNs',
    value: function isLocalNs(ns) {
      return ns.uri === this.ns.uri;
    }

    /**
     * Get the actual ns attribute name for the given element.
     *
     * @param {Object} element
     * @param {Boolean} [inherited=false]
     *
     * @return {Object} nsName
     */

  }, {
    key: 'nsAttributeName',
    value: function nsAttributeName(element) {

      var ns;

      if ((0, _isString3.default)(element)) {
        ns = (0, _ns.parseName)(element);
      } else {
        ns = element.ns;
      }

      // return just local name for inherited attributes
      if (element.inherited) {
        return { localName: ns.localName };
      }

      // parse + log effective ns
      var effectiveNs = this.logNamespaceUsed(ns);

      // strip prefix if same namespace like parent
      if (this.isLocalNs(effectiveNs)) {
        return { localName: ns.localName };
      } else {
        return (0, _assign3.default)({ localName: ns.localName }, effectiveNs);
      }
    }
  }, {
    key: 'parseGeneric',
    value: function parseGeneric(element) {

      var self = this,
          body = this.body,
          attrs = this.attrs;

      (0, _forEach3.default)(element, function (val, key) {

        if (key === '$body') {
          body.push(new BodySerializer().build({ type: 'String' }, val));
        } else if (key === '$children') {
          (0, _forEach3.default)(val, function (child) {
            body.push(new ElementSerializer(self).build(child));
          });
        } else if (key.indexOf('$') !== 0) {
          attrs.push({ name: key, value: escapeAttr(val) });
        }
      });
    }

    /**
     * Parse namespaces and return a list of left over generic attributes
     *
     * @param  {Object} element
     * @return {Array<Object>}
     */

  }, {
    key: 'parseNsAttributes',
    value: function parseNsAttributes(element) {
      var self = this;

      var genericAttrs = element.$attrs;

      var model = element.$model;

      var attributes = [];

      // parse namespace attributes first
      // and log them. push non namespace attributes to a list
      // and process them later
      (0, _forEach3.default)(genericAttrs, function (value, name) {
        var nameNs = (0, _ns.parseName)(name);

        var ns;

        // parse xmlns:foo="http://foo.bar"
        if (nameNs.prefix === 'xmlns') {
          ns = { prefix: nameNs.localName, uri: value };
        }

        // parse xmlns="http://foo.bar"
        if (!nameNs.prefix && nameNs.localName === 'xmlns') {
          ns = { uri: value };
        }

        if (ns) {
          if (model.getPackage(value)) {
            // register well known namespace
            self.logNamespace(ns, true);
          } else {
            // log custom namespace directly as used
            self.logNamespaceUsed(ns);
          }
        } else {
          attributes.push({ name: name, value: value });
        }
      });

      return attributes;
    }
  }, {
    key: 'parseGenericAttributes',
    value: function parseGenericAttributes(element, attributes) {

      var self = this;

      (0, _forEach3.default)(attributes, function (attr) {

        // do not serialize xsi:type attribute
        // it is set manually based on the actual implementation type
        if (attr.name === _common.XSI_TYPE) {
          return;
        }

        try {
          self.addAttribute(self.nsAttributeName(attr.name), attr.value);
        } catch (e) {
          console.warn('missing namespace information for ', attr.name, '=', attr.value, 'on', element, e);
        }
      });
    }
  }, {
    key: 'parseContainments',
    value: function parseContainments(properties) {

      var self = this,
          body = this.body,
          element = this.element;

      (0, _forEach3.default)(properties, function (p) {
        var value = element.get(p.name),
            isReference = p.isReference,
            isMany = p.isMany;

        var ns = self.nsPropertyTagName(p);

        if (!isMany) {
          value = [value];
        }

        if (p.isBody) {
          body.push(new BodySerializer().build(p, value[0]));
        } else if ((0, _types.isSimple)(p.type)) {
          (0, _forEach3.default)(value, function (v) {
            body.push(new ValueSerializer(ns).build(p, v));
          });
        } else if (isReference) {
          (0, _forEach3.default)(value, function (v) {
            body.push(new ReferenceSerializer(self, ns).build(v));
          });
        } else {
          // allow serialization via type
          // rather than element name
          var asType = (0, _common.serializeAsType)(p),
              asProperty = (0, _common.serializeAsProperty)(p);

          (0, _forEach3.default)(value, function (v) {
            var serializer;

            if (asType) {
              serializer = new TypeSerializer(self, ns);
            } else if (asProperty) {
              serializer = new ElementSerializer(self, ns);
            } else {
              serializer = new ElementSerializer(self);
            }

            body.push(serializer.build(v));
          });
        }
      });
    }
  }, {
    key: 'getNamespaces',
    value: function getNamespaces() {

      var namespaces = this.namespaces,
          parent = this.parent;

      if (!namespaces) {
        namespaces = this.namespaces = parent ? parent.getNamespaces() : {
          prefixMap: {},
          uriMap: {},
          used: {},
          wellknown: [],
          custom: []
        };
      }

      return namespaces;
    }
  }, {
    key: 'logNamespace',
    value: function logNamespace(ns, wellknown) {
      var namespaces = this.getNamespaces();

      var nsUri = ns.uri;

      var existing = namespaces.uriMap[nsUri];

      if (!existing) {
        namespaces.uriMap[nsUri] = ns;

        if (wellknown) {
          namespaces.wellknown.push(ns);
        } else {
          namespaces.custom.push(ns);
        }
      }

      namespaces.prefixMap[ns.prefix] = nsUri;

      return ns;
    }
  }, {
    key: 'logNamespaceUsed',
    value: function logNamespaceUsed(ns) {
      var element = this.element,
          model = element.$model,
          namespaces = this.getNamespaces();

      // ns may be
      //
      //   * prefix only
      //   * prefix:uri

      var prefix = ns.prefix;

      var wellknownUri = _common.DEFAULT_NS_MAP[prefix] || model && (model.getPackage(prefix) || {}).uri;

      var uri = ns.uri || namespaces.prefixMap[prefix] || wellknownUri;

      if (!uri) {
        throw new Error('no namespace uri given for prefix <' + ns.prefix + '>');
      }

      ns = namespaces.uriMap[uri];

      if (!ns) {
        ns = this.logNamespace({ prefix: prefix, uri: uri }, wellknownUri);
      }

      if (!namespaces.used[ns.uri]) {
        namespaces.used[ns.uri] = ns;
      }

      return ns;
    }
  }, {
    key: 'parseAttributes',
    value: function parseAttributes(properties) {
      var self = this,
          element = this.element;

      (0, _forEach3.default)(properties, function (p) {

        var value = element.get(p.name);

        if (p.isReference) {

          if (!p.isMany) {
            value = value.id;
          } else {
            var values = [];
            (0, _forEach3.default)(value, function (v) {
              values.push(v.id);
            });
            // IDREFS is a whitespace-separated list of references.
            value = values.join(' ');
          }
        }

        self.addAttribute(self.nsAttributeName(p), value);
      });
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      var attrs = this.attrs;

      if ((0, _isString3.default)(value)) {
        value = escapeAttr(value);
      }

      attrs.push({ name: name, value: value });
    }
  }, {
    key: 'serializeAttributes',
    value: function serializeAttributes(writer) {
      var attrs = this.attrs,
          root = !this.parent;

      if (root) {
        attrs = getNsAttrs(this.namespaces).concat(attrs);
      }

      (0, _forEach3.default)(attrs, function (a) {
        writer.append(' ').append(nsName(a.name)).append('="').append(a.value).append('"');
      });
    }
  }, {
    key: 'serializeTo',
    value: function serializeTo(writer) {
      var firstBody = this.body[0],
          indent = firstBody && firstBody.constructor !== BodySerializer;

      writer.appendIndent().append('<' + nsName(this.ns));

      this.serializeAttributes(writer);

      writer.append(firstBody ? '>' : ' />');

      if (firstBody) {

        if (indent) {
          writer.appendNewLine().indent();
        }

        (0, _forEach3.default)(this.body, function (b) {
          b.serializeTo(writer);
        });

        if (indent) {
          writer.unindent().appendIndent();
        }

        writer.append('</' + nsName(this.ns) + '>');
      }

      writer.appendNewLine();
    }
  }]);

  return ElementSerializer;
}();

/**
 * A serializer for data types
 */


var TypeSerializer = function (_ElementSerializer) {
  _inherits(TypeSerializer, _ElementSerializer);

  function TypeSerializer() {
    _classCallCheck(this, TypeSerializer);

    return _possibleConstructorReturn(this, (TypeSerializer.__proto__ || Object.getPrototypeOf(TypeSerializer)).apply(this, arguments));
  }

  _createClass(TypeSerializer, [{
    key: 'build',
    value: function build(element) {
      var descriptor = element.$descriptor;

      this.element = element;

      this.typeNs = this.nsTagName(descriptor);

      // add xsi:type attribute to represent the elements
      // actual type

      var typeNs = this.typeNs,
          pkg = element.$model.getPackage(typeNs.uri),
          typePrefix = pkg.xml && pkg.xml.typePrefix || '';

      this.addAttribute(this.nsAttributeName(_common.XSI_TYPE), (typeNs.prefix ? typeNs.prefix + ':' : '') + typePrefix + descriptor.ns.localName);

      // do the usual stuff
      return _get(TypeSerializer.prototype.__proto__ || Object.getPrototypeOf(TypeSerializer.prototype), 'build', this).call(this, element);
    }
  }, {
    key: 'isLocalNs',
    value: function isLocalNs(ns) {
      return ns.uri === this.typeNs.uri;
    }
  }]);

  return TypeSerializer;
}(ElementSerializer);

var SavingWriter = function () {
  function SavingWriter() {
    _classCallCheck(this, SavingWriter);

    this.value = '';
  }

  _createClass(SavingWriter, [{
    key: 'write',
    value: function write(str) {
      this.value += str;
    }
  }]);

  return SavingWriter;
}();

/**
 * A writer that (optionally) formats the output.
 */


var FormatingWriter = function () {
  function FormatingWriter(out, format) {
    _classCallCheck(this, FormatingWriter);

    this.out = out;
    this.format = format;

    this.prefix = [''];
  }

  _createClass(FormatingWriter, [{
    key: 'append',
    value: function append(str) {
      this.out.write(str);

      return this;
    }
  }, {
    key: 'appendNewLine',
    value: function appendNewLine() {
      if (this.format) {
        this.out.write('\n');
      }

      return this;
    }
  }, {
    key: 'appendIndent',
    value: function appendIndent() {
      if (this.format) {
        this.out.write(this.prefix.join('  '));
      }

      return this;
    }
  }, {
    key: 'indent',
    value: function indent() {
      this.prefix.push('');
      return this;
    }
  }, {
    key: 'unindent',
    value: function unindent() {
      this.prefix.pop();
      return this;
    }
  }]);

  return FormatingWriter;
}();

/**
 * A writer for meta-model backed document trees
 *
 * @param {Object} options output options to pass into the writer
 */


var XMLWriter = function () {
  function XMLWriter(options) {
    _classCallCheck(this, XMLWriter);

    this.options = (0, _assign3.default)({ format: false, preamble: true }, options || {});
  }

  /**
   * Serialize the tree into the passed writer or
   * return it as a String.
   *
   * @param {ModdleElement} tree
   * @param {SavingWriter} [writer]
   *
   * @return {String} result
   */


  _createClass(XMLWriter, [{
    key: 'toXML',
    value: function toXML(tree, writer) {
      var internalWriter = writer || new SavingWriter();
      var formatingWriter = new FormatingWriter(internalWriter, this.options.format);

      if (this.options.preamble) {
        formatingWriter.append(XML_PREAMBLE);
      }

      new ElementSerializer().build(tree).serializeTo(formatingWriter);

      if (!writer) {
        return internalWriter.value;
      }
    }
  }]);

  return XMLWriter;
}();

exports.default = XMLWriter;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFilter = __webpack_require__(54);

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

var _baseFilter = __webpack_require__(55);

var _baseFilter2 = _interopRequireDefault(_baseFilter);

var _baseIteratee = __webpack_require__(0);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArray = __webpack_require__(1);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = (0, _isArray2.default)(collection) ? _arrayFilter2.default : _baseFilter2.default;
  return func(collection, (0, _baseIteratee2.default)(predicate, 3));
}

exports.default = filter;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

exports.default = arrayFilter;
module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseEach = __webpack_require__(3);

var _baseEach2 = _interopRequireDefault(_baseEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  (0, _baseEach2.default)(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

exports.default = baseFilter;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(9);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isArray = __webpack_require__(1);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObjectLike = __webpack_require__(57);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !(0, _isArray2.default)(value) && (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == stringTag;
}

exports.default = isString;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayMap = __webpack_require__(59);

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _baseIteratee = __webpack_require__(0);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _baseMap = __webpack_require__(60);

var _baseMap2 = _interopRequireDefault(_baseMap);

var _isArray = __webpack_require__(1);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0, _isArray2.default)(collection) ? _arrayMap2.default : _baseMap2.default;
  return func(collection, (0, _baseIteratee2.default)(iteratee, 3));
}

exports.default = map;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

exports.default = arrayMap;
module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseEach = __webpack_require__(3);

var _baseEach2 = _interopRequireDefault(_baseEach);

var _isArrayLike = __webpack_require__(2);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = (0, _isArrayLike2.default)(collection) ? Array(collection.length) : [];

  (0, _baseEach2.default)(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

exports.default = baseMap;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map