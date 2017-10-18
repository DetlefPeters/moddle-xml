'use strict';

import {
  Reader,
  Writer
} from '../../lib/index.js';


describe('moddle-xml', function() {

  it('should expose Reader / Writer', function() {
    expect(Reader).to.exist;
    expect(Writer).to.exist;
  });

});