'use strict';

var fs = require('fs');

var map = require('min-dash').map;

var Moddle = require('moddle');

function ensureDirExists(dir) {

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

function createModelBuilder(base) {

  var cache = {};

  if (!base) {
    throw new Error('[test-util] must specify a base directory');
  }

  function createModel(packageNames) {

    var packages = map(packageNames, function(f) {
      var pkg = cache[f];
      var file = base + f + '.json';

      if (!pkg) {
        try {
          pkg = cache[f] = JSON.parse(readFile(base + f + '.json'));
        } catch (e) {
          throw new Error('[Helper] failed to parse <' + file + '> as JSON: ' +  e.message);
        }
      }

      return pkg;
    });

    return new Moddle(packages);
  }

  return createModel;
}

module.exports.readFile = readFile;
module.exports.ensureDirExists = ensureDirExists;
module.exports.createModelBuilder = createModelBuilder;