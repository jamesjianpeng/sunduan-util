var assert = require('assert');
var pop = require('../lib/array/pop');

describe('pop usually', function() {
  var list = [1, 2, 3, 4, 5, 6]
  it('pop ', function () {
    pop(list).map((value, key) => {
      assert.equal(value, list[key])
    })
  })
})
