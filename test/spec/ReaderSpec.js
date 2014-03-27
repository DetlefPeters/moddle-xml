var _ = require('lodash');

var Reader = require('../../lib/Reader'),
    logger = require('moddle').util.Logger;

var Helper = require('./Helper'),
    readFile = Helper.readFile,
    createModelBuilder = Helper.createModelBuilder,
    log = Helper.log;


describe('Reader', function() {

  var createModel = createModelBuilder('test/fixtures/model/');

  var model = createModel(['properties']);
  var extendedModel = createModel(['properties', 'properties-extended']);

  beforeEach(Helper.initAdditionalMatchers);

  describe('api', function() {

  });


  describe('should import', function() {

    describe('data types', function() {

      it('simple', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:ComplexAttrs');

        // when
        reader.fromXML('<props:complexAttrs xmlns:props="http://properties" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><props:attrs xsi:type="props:Attributes" integerValue="10" /></props:complexAttrs>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:ComplexAttrs',
            attrs: {
              $type: 'props:Attributes',
              integerValue: 10
            }
          });

          done(err);
        });
      });


      it('simple / no xsi:type', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:ComplexAttrs');

        // when
        reader.fromXML('<props:complexAttrs xmlns:props="http://properties"><props:attrs integerValue="10" /></props:complexAttrs>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:ComplexAttrs',
            attrs: {
              $type: 'props:Attributes',
              integerValue: 10
            }
          });

          done(err);
        });
      });


      it('collection / no xsi:type', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:ComplexAttrsCol');

        // when
        reader.fromXML('<props:complexAttrsCol xmlns:props="http://properties"><props:attrs integerValue="10" /><props:attrs booleanValue="true" /></props:complexAttrsCol>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:ComplexAttrsCol',
            attrs: [
              { $type: 'props:Attributes', integerValue: 10 },
              { $type: 'props:Attributes', booleanValue: true }
            ]
          });

          done(err);
        });
      });


      it('simple / xsi:type / other namespace)', function(done) {

        var datatypeModel = createModel(['datatype', 'datatype-external']);

        // given
        var reader = new Reader(datatypeModel);
        var rootHandler = reader.handler('dt:Root');

        var xml =
          '<dt:root xmlns:dt="http://datatypes" xmlns:do="http://datatypes2">' +
            '<dt:otherBounds x="100" />' +
            '<dt:otherBounds x="200" />' +
          '</dt:root>';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'dt:Root',
            otherBounds: [
              { $type: 'do:Rect', x: 100 },
              { $type: 'do:Rect', x: 200 }
            ]
          });

          done(err);
        });
      });

    });


    describe('attributes', function() {

      it('with line breaks', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:BaseWithId');

        // when
        reader.fromXML('<props:baseWithId xmlns:props="http://properties" id="FOO&#10;BAR" />', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:BaseWithId',
            id: 'FOO\nBAR'
          });

          done(err);
        });
      });
      
    });


    describe('simple nested properties', function() {
      
      it('parse boolean property', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:SimpleBodyProperties');

        // when
        reader.fromXML('<props:simpleBodyProperties xmlns:props="http://properties"><props:intValue>5</props:intValue></props:simpleBodyProperties>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:SimpleBodyProperties',
            intValue: 5
          });

          done(err);
        });
      });


      it('parse boolean property', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:SimpleBodyProperties');

        // when
        reader.fromXML('<props:simpleBodyProperties xmlns:props="http://properties"><props:boolValue>false</props:boolValue></props:simpleBodyProperties>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:SimpleBodyProperties',
            boolValue: false
          });

          done(err);
        });
      });


      it('parse string isMany prooperty', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:SimpleBodyProperties');

        // when
        reader.fromXML('<props:simpleBodyProperties xmlns:props="http://properties"><props:str>A</props:str><props:str>B</props:str><props:str>C</props:str></props:simpleBodyProperties>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:SimpleBodyProperties',
            str: [ 'A', 'B', 'C' ]
          });

          done(err);
        });
      });
    });


    describe('body text', function() {

      it('parse body text property', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:SimpleBody');

        // when
        reader.fromXML('<props:simpleBody xmlns:props="http://properties">textContent</props:simpleBody>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:SimpleBody',
            body: 'textContent'
          });

          done(err);
        });
      });


      it('parse body CDATA property', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:SimpleBody');

        // when
        reader.fromXML('<props:simpleBody xmlns:props="http://properties"><![CDATA[<h2>HTML markup</h2>]]></props:simpleBody>', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:SimpleBody',
            body: '<h2>HTML markup</h2>'
          });

          done(err);
        });
      });

    });


    describe('alias', function() {

      it('lowerCase', function(done) {

        // given
        var reader = new Reader(model);
        var rootHandler = reader.handler('props:Root');

        // when
        reader.fromXML('<props:root xmlns:props="http://properties" />', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({ $type: 'props:Root' });

          done(err);
        });

      });


      it('none', function(done) {

        // given
        var noAliasModel = createModel(['noalias']);
        
        var reader = new Reader(noAliasModel);
        var rootHandler = reader.handler('na:Root');

        // when
        reader.fromXML('<na:Root xmlns:na="http://noalias" />', rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({ $type: 'na:Root' });

          done(err);
        });
      });

    });


    describe('reference', function() {

      it('single', function(done) {

        // given
        var reader = new Reader(extendedModel);
        var rootHandler = reader.handler('props:Root');

        var xml =
          '<props:root xmlns:props="http://properties">' +
            '<props:containedCollection id="C_5">' +
              '<props:complex id="C_1" />' +
              '<props:complex id="C_2" />' +
            '</props:containedCollection>' +
            '<props:referencingSingle id="C_4" referencedComplex="C_1" />' +
          '</props:root>';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:Root',
            any: [
              {
                $type: 'props:ContainedCollection',
                id: 'C_5',
                children: [
                  { $type: 'props:Complex', id: 'C_1' },
                  { $type: 'props:Complex', id: 'C_2' }
                ]
              },
              { $type: 'props:ReferencingSingle', id: 'C_4' }
            ]
          });

          var referenced = result.any[0].children[0];
          var referencingSingle = result.any[1];

          expect(referencingSingle.referencedComplex).toBe(referenced);

          done(err);
        });
      });


      it('collection', function(done) {

        // given
        var reader = new Reader(extendedModel);
        var rootHandler = reader.handler('props:Root');

        var xml =
          '<props:root xmlns:props="http://properties">' +
            '<props:containedCollection id="C_5">' +
              '<props:complex id="C_1" />' +
              '<props:complex id="C_2" />' +
            '</props:containedCollection>' +
            '<props:referencingCollection id="C_4">' +
              '<props:references>C_2</props:references>' +
              '<props:references>C_5</props:references>' +
            '</props:referencingCollection>' +
          '</props:root>';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          // then
          expect(result).toDeepEqual({
            $type: 'props:Root',
            any: [
              {
                $type: 'props:ContainedCollection',
                id: 'C_5',
                children: [
                  { $type: 'props:Complex', id: 'C_1' },
                  { $type: 'props:Complex', id: 'C_2' }
                ]
              },
              { $type: 'props:ReferencingCollection', id: 'C_4' }
            ]
          });

          var containedCollection = result.any[0];
          var complex_c2 = containedCollection.children[1];

          var referencingSingle = result.any[1];

          expect(referencingSingle.references).toDeepEqual([ complex_c2, containedCollection ]);
          
          done(err);
        });
      });

    });

  });


  describe('internal', function() {

    describe('should identify references', function() {

      it('on attribute', function(done) {

        // given
        var reader = new Reader(extendedModel);
        var rootHandler = reader.handler('props:ReferencingSingle');

        var xml = '<props:referencingSingle xmlns:props="http://properties" id="C_4" referencedComplex="C_1" />';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          // then
          var expectedReference = {
            element: {
              $type: 'props:ReferencingSingle',
              id: 'C_4'
            },
            property: 'props:referencedComplex',
            id: 'C_1'
          };

          var references = rootHandler.context.getReferences();

          expect(references).toDeepEqual([ expectedReference ]);

          done(err);
        });
      });


      it('embedded', function(done) {

        // given
        var reader = new Reader(extendedModel);
        var rootHandler = reader.handler('props:ReferencingCollection');

        var xml = '<props:referencingCollection xmlns:props="http://properties" id="C_4">' +
                    '<props:references>C_2</props:references>' +
                    '<props:references>C_5</props:references>' +
                  '</props:referencingCollection>';

        reader.fromXML(xml, rootHandler, function(err, result) {

          var expectedTarget = {
            $type: 'props:ReferencingCollection',
            id: 'C_4'
          };

          var expectedReference1 = {
            element: expectedTarget,
            property: 'props:references',
            id: 'C_2'
          };

          var expectedReference2 = {
            element: expectedTarget,
            property: 'props:references',
            id: 'C_5'
          };

          var references = rootHandler.context.getReferences();

          expect(references).toDeepEqual([ expectedReference1, expectedReference2 ]);

          done(err);
        });
      });

    });

  });


  describe('error handling', function() {

    it('should handle non-xml text files', function(done) {

      var data = readFile('test/fixtures/error/no-xml.txt');

      var reader = new Reader(model);
      var rootHandler = reader.handler('props:ComplexAttrs');

      // when
      reader.fromXML(data, rootHandler, function(err, result) {

        expect(err).toBeDefined();
        expect(result).not.toBeDefined();

        done();
      });

    });


    it('should handle non-xml binary file', function(done) {

      var data = readFile('test/fixtures/error/binary.png');

      var reader = new Reader(model);
      var rootHandler = reader.handler('props:ComplexAttrs');

      // when
      reader.fromXML(data, rootHandler, function(err, result) {

        expect(err).toBeDefined();
        expect(result).not.toBeDefined();

        done();
      });

    });


    it('should handle invalid root element', function(done) {

      var xml = '<props:referencingCollection xmlns:props="http://properties" id="C_4">' +
                  '<props:references>C_2</props:references>' +
                  '<props:references>C_5</props:references>' +
                '</props:referencingCollection>';

      var reader = new Reader(model);
      var rootHandler = reader.handler('props:ComplexAttrs');

      var expectedError =
        'unparsable content <props:references> detected\n\t' +
            'line: 0\n\t' +
            'column: 88\n\t' +
            'nested error: unknown type <props:References>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        expect(err).toBeDefined();
        expect(err.message).toEqual(expectedError);

        expect(result).not.toBeDefined();

        done();
      });
    });


    it('should handle invalid child element', function(done) {

      var xml = '<props:referencingCollection xmlns:props="http://properties" id="C_4">' +
                  '<props:references>C_2</props:references>' +
                  '<props:invalid>C_5</props:invalid>' +
                '</props:referencingCollection>';

      var reader = new Reader(model);
      var rootHandler = reader.handler('props:ReferencingCollection');

      var expectedError =
        'unparsable content <props:invalid> detected\n\t' +
            'line: 0\n\t' +
            'column: 125\n\t' +
            'nested error: unknown type <props:Invalid>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        expect(err).toBeDefined();
        expect(err.message).toEqual(expectedError);

        expect(result).not.toBeDefined();

        done();
      });
    });


    it('should handle invalid child element / non-model schema', function(done) {

      var xml = '<props:referencingCollection xmlns:props="http://properties" xmlns:other="http://other">' +
                  '<other:foo>C_2</other:foo>' +
                '</props:referencingCollection>';

      var reader = new Reader(model);
      var rootHandler = reader.handler('props:ReferencingCollection');

      var expectedError =
        'unparsable content <other:foo> detected\n\t' +
            'line: 0\n\t' +
            'column: 99\n\t' +
            'nested error: unrecognized element <other:foo>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        expect(err).toBeDefined();
        expect(err.message).toEqual(expectedError);

        expect(result).not.toBeDefined();

        done();
      });
    });

  });


  describe('extension handling', function() {

    var extensionModel = createModel([ 'extensions' ]);


    it('should read self-closing extension elements', function(done) {

      // given
      var reader = new Reader(extensionModel);
      var rootHandler = reader.handler('e:Root');

      var xml =
        '<e:root xmlns:e="http://extensions" xmlns:other="http://other">' +
          '<e:id>FOO</e:id>' +
          '<other:meta key="FOO" value="BAR" />' +
          '<other:meta key="BAZ" value="FOOBAR" />' +
        '</e:root>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        if (err) {
          return done(err);
        }

        // then
        expect(result).toDeepEqual({
          $type: 'e:Root',
          id: 'FOO',
          extensions: [
            {
              $type: 'other:meta',
              key: 'FOO',
              value: 'BAR'
            },
            {
              $type: 'other:meta',
              key: 'BAZ',
              value: 'FOOBAR'
            }
          ]
        });

        done();
      });
    });


    it('should read extension element body', function(done) {

      // given
      var reader = new Reader(extensionModel);
      var rootHandler = reader.handler('e:Root');

      var xml =
        '<e:root xmlns:e="http://extensions" xmlns:other="http://other">' +
          '<e:id>FOO</e:id>' +
          '<other:note>' +
            'a note' +
          '</other:note>' +
        '</e:root>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        if (err) {
          return done(err);
        }

        // then
        expect(result).toDeepEqual({
          $type: 'e:Root',
          id: 'FOO',
          extensions: [
            {
              $type: 'other:note',
              $body: 'a note'
            }
          ]
        });

        done();
      });
    });


    it('should read nested extension element', function(done) {

      // given
      var reader = new Reader(extensionModel);
      var rootHandler = reader.handler('e:Root');

      var xml =
        '<e:root xmlns:e="http://extensions" xmlns:other="http://other">' +
          '<e:id>FOO</e:id>' +
          '<other:nestedMeta>' +
            '<other:meta key="k1" value="v1" />' +
            '<other:meta key="k2" value="v2" />' +
            '<other:additionalNote>' +
              'this is some text' +
            '</other:additionalNote>' +
          '</other:nestedMeta>' +
        '</e:root>';

      // when
      reader.fromXML(xml, rootHandler, function(err, result) {

        if (err) {
          return done(err);
        }

        // then
        expect(result).toDeepEqual({
          $type: 'e:Root',
          id: 'FOO',
          extensions: [
            {
              $type: 'other:nestedMeta',
              $children: [
                { $type: 'other:meta', key: 'k1', value: 'v1' },
                { $type: 'other:meta', key: 'k2', value: 'v2' },
                { $type: 'other:additionalNote', $body: 'this is some text' }
              ]
            }
          ]
        });

        done();
      });
    });


    describe('descriptor', function() {

      it('should exist', function(done) {

        // given
        var reader = new Reader(extensionModel);
        var rootHandler = reader.handler('e:Root');

        var xml =
          '<e:root xmlns:e="http://extensions" xmlns:other="http://other">' +
            '<e:id>FOO</e:id>' +
            '<other:note>' +
              'a note' +
            '</other:note>' +
          '</e:root>';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          if (err) {
            return done(err);
          }

          var note = result.extensions[0];

          // then
          expect(note.$descriptor).toBeDefined();

          done();
        });
      });


      it('should contain namespace information', function(done) {

        // given
        var reader = new Reader(extensionModel);
        var rootHandler = reader.handler('e:Root');

        var xml =
          '<e:root xmlns:e="http://extensions" xmlns:other="http://other">' +
            '<e:id>FOO</e:id>' +
            '<other:note>' +
              'a note' +
            '</other:note>' +
          '</e:root>';

        // when
        reader.fromXML(xml, rootHandler, function(err, result) {

          if (err) {
            return done(err);
          }

          var note = result.extensions[0];

          // then
          expect(note.$descriptor).toEqual({
            name: 'other:note',
            isGeneric: true,
            ns: {
              prefix: 'other',
              localName: 'note',
              uri: 'http://other'
            }
          });

          done();
        });
      });
      
    });

  });

});