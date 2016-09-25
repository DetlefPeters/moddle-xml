var ModdleXML = require('../../dist/bundle');

var Moddle = require('moddle');

var fs = require('fs');

var modelPath = __dirname + '/../../node_modules/moddle/test/fixtures/model/properties.json';

var pkg = JSON.parse(fs.readFileSync(modelPath));

var moddle = new Moddle([ pkg ]);

// given
var reader = new ModdleXML.Reader(moddle);
var rootHandler = reader.handler('props:ComplexAttrs');

var xml = '<props:complexAttrs xmlns:props="http://properties" ' +
                              'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
            '<props:attrs xsi:type="props:SubAttributes" integerValue="10" />' +
          '</props:complexAttrs>';

// when
reader.fromXML(xml, rootHandler, function(err, result) {

  if (err) {
    console.error(err);
  }

  console.log('RESULT', JSON.stringify(result));

  console.log('EXPECTED', JSON.stringify({
    $type: 'props:ComplexAttrs',
    attrs: {
      $type: 'props:SubAttributes',
      integerValue: 10
    }
  }));

});