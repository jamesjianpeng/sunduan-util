
var toString = Object.prototype.toString;

/**
 * Deletes the last item in the array and returns a copy after the deletion was successful
 *
 * @param {Object} list list is Array
 *
 */

var pop = function(list) {
  'use strict';

  if (toString.call(list) !== '[object Array]') {
    throw new TypeError('list is not Array')
  }
  var len = list.length;

  var A = new Array(len - 1);

  for (var i = 0; i < A.length; i++) {
    A[i] = list[i];
  }

  return A;

}

module.exports = pop;

/**
 * use
 *
 * var list = [1, 2, 3, 4, 5, 6]
 *
 * var newList = pop(list)
 *
 * console.log(newList) // [1, 2, 3, 4, 5]
 * console.log(list) // [1, 2, 3, 4, 5, 6]
 *
 * The return value of calling array.prototype.pop is the corresponding deleted element
 * and change the original array
 *
 */
