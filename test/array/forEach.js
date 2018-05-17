var forEach = require('../../lib/array/forEach');

console.log(forEach, 'forEach------')

var obj = { a: 10, b: 20, c: 30 };
forEach(obj, function(value, index, obj) {
  console.log(value, index, obj);
})

console.log('============');

var list = [1, 2, 3, 4];
forEach(list, function(value, index, obj) {
  console.log(value, index, obj);
})
