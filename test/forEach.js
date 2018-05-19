var assert = require('assert');
var forEach = require('../lib/array/forEach');

describe('forEach Object', function () {

  var obj = { a: 10, b: 20, c: 30 };
  it('forEach object error', function() {
    forEach(obj, function(value, index, obj) {
      assert.equal(value, obj[index]);
    })
  });
});

describe('forEach Array', function () {
  var list = [1, 2, 3, 4];
  it('forEach Array error', function() {
    forEach(list, function(value, index, obj) {
      assert.equal(value, obj[index]);
    })
  });

});
