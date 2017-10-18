require('babel-register')({
  ignore: /node_modules\/(?!(lodash-es|moddle))/
});

var chai = require('chai');
var matchers = require('./matchers');

// add matchers
chai.use(matchers);

// expose expect as global
global.expect = chai.expect;