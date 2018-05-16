var forEach = require('../array/forEach');

/**
 * clone way
 *
 * @param {Object} resultObj
 * @param {Object} currentObj function name
 *
 *
 */
var cloneWay = {
  'JSON': function(resultObj, currentObj) {
    resultObj = JSON.stringify(currentObj)
    return resultObj ? JSON.parse(resultObj) : null
  },
  'default': function(resultObj, currentObj) {
    var self = this
    forEach(currentObj, function(prop, key) {
      if (typeof prop === 'object') {
        resultObj[key] = prop instanceof Array ? [] : {};
        self.default(resultObj[key], prop);
      } else {
        resultObj[key] = currentObj[key];
      }
    })
    return resultObj;
  }
}

/**
 * deep clone object
 *
 * @param {Object} obj
 * @param {String} type function name
 *
 */

var deepClone = function(obj, type = 'default') {
  if (!obj || typeof obj !== 'object') return obj
  return cloneWay[type]({}, obj)
}

module.exports = deepClone;

/**
 *  var obj = {
 *    a: 'a',
 *    b: 'b',
 *    c: 'c',
 *    d: {
 *      one: 'd1',
 *      two: 'd2'
 *    },
 *    e: ['e1', 'e2', 'e3', 'e4']
 *  }
 *  var newObj = deepClone(obj)
 *  newObj.e.push('e5')
 *  console.log(newObj.e) // ['e1', 'e2', 'e3', 'e4', 'e5']
 *  console.log(obj.e) // ['e1', 'e2', 'e3', 'e4']
 *
 *  var obj = {
 *    a: 'a1',
 *    b: 'b2',
 *    c: 'c3',
 *    d: {
 *      one: 'd1',
 *      two: 'd2'
 *    },
 *    e: ['e1', 'e2', 'e3', 'e4']
 *  }
 *  var newObj = deepClone(obj, 'JSON')
 *  newObj.d.one = 'd3'
 *  console.log(newObj.d) // { one: 'd3', two: 'd2' }
 *  console.log(obj.d) // { one: 'd1', two: 'd2' }
 *
 */
