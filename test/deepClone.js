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

var expect = 'e'
var expectLenght = obj[expect].length + 1

describe('deepClone', function () {
  var newObj = deepClone(obj)
  newObj.e.push('e5')
  it('deepClone length judge', function() {
    assert.equal(newObj[expect].length, expectLenght)
  })

  var newObjTwo = deepClone(obj, 'JSON')
  newObjTwo.e.push('e5')

  it('deepClone type is JSON length judge', function() {
    assert.equal(newObj[expect].length, expectLenght)
  })
})
