var assert = require('assert');
var forEach = require('../lib/array/forEach');

describe('forEach', function () {

  var obj = { a: 10, b: 20, c: 30 };
  it('forEach object', function() {
    forEach(obj, function(value, index, obj) {
      assert.equal(value, obj[index]);
    })
  });

  var list = [1, 2, 3, 4];
  it('forEach Array', function() {
    forEach(list, function(value, index, obj) {
      assert.equal(value, obj[index]);
    })
  });

});
