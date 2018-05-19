var assert = require('assert');
var hello = require('../lib/hello')

describe('hello function', function() {
  it('hello world ！welcome use sunduan-util', function() {
    assert.equal(hello(), 'hello world ！welcome use sunduan-util');
  });
});
