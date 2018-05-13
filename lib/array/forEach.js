var type = require('../helper/type');

/**
 * froEach Iterator
 *
 * @param {Object} obj Traversing objects
 * @param {Function} callback Callback
 *
 */

var forEach = function(obj, callback) {
  'use strict';

  if (obj == null) {
    throw new TypeError('obj is null or undefined');
  }

  if (typeof obj !== 'object') {
    throw new TypeError('obj is not object');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not function');
  }

  if (type.isObject(obj)) {
    for (const prop in obj) {
      const value = obj[prop];
      callback(value, prop, obj);
    }
  }

  if (type.isArray(obj)) {
    for(let i = 0; i < obj.length; i++){
      const value = obj[i];
      callback(value, i, obj);
    }
  }
}

module.exports = forEach;

/**
 *
 * use
 *
 * var obj = { a: 10, b: 20, c: 30 }
 * forEach(obj, function(value, index, obj) {
 *   console.log(value, index, obj)
 * })
 *
 * var list = [1, 2, 3, 4]
 * forEach(obj, function(value, index, obj) {
 *   console.log(value, index, obj)
 * })
 *
 *
 */
