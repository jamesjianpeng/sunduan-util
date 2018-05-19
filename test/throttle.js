var assert = require('assert');
var throttle = require('../lib/throttle');

describe('throttle', function() {
  it('throttle shoule a function', function() {
    assert.equal(typeof throttle, 'function')
  })
})
