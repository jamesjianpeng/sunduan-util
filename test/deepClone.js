var assert = require('assert');
var deepClone = require('../lib/helper/deepClone');

var obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: {
    one: 'd1',
    two: 'd2'
  },
  e: ['e1', 'e2', 'e3', 'e4']
}

describe('deepClone default', function () {
  var newObj = deepClone(obj)
  var expect = 'e'
  var expectLenght = newObj[expect].length + 1
  newObj.e.push('e5')
  it('deepClone length judge', function() {
    assert.equal(newObj[expect].length, expectLenght)
  })
})

describe('deepClone JSON', function () {
  var newObjTwo = deepClone(obj, 'JSON')
  var expect = 'e'
  var expectLenght = newObjTwo[expect].length + 1
  newObjTwo.e.push('e5')
  it('deepClone type is JSON length judge', function() {
    assert.equal(newObjTwo[expect].length, expectLenght)
  })
})
