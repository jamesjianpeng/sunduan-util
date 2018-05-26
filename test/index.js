const assert = require('assert');
const libTest = require('..');

const forEach = libTest.forEach

describe('lib Export forEach', function () {
  it('lib shoule be a Object', function() {
    assert.equal(typeof forEach, 'function')
  })
})


forEach(libTest, function(v, k) {
  console.log('kkkkk')
  describe('lib Export forEach' + k, function() {
    it(k + 'shoule be function', function() {
      assert.equal(typeof v, 'function')
    })
  })
})

describe('lib Export', function () {
  it('lib shoule be a Object', function() {
    assert.equal(typeof libTest, 'object')
  })
})
