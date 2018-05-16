var deepClone = require('../../lib/helper/deepClone');

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
var newObj = deepClone(obj)
newObj.e.push('e5')
console.log(newObj.e) // ['e1', 'e2', 'e3', 'e4', 'e5']
console.log(obj.e) // ['e1', 'e2', 'e3', 'e4']

var obj = {
  a: 'a1',
  b: 'b2',
  c: 'c3',
  d: {
    one: 'd1',
    two: 'd2'
  },
  e: ['e1', 'e2', 'e3', 'e4']
}
var newObj = deepClone(obj, 'JSON')
newObj.d.one = 'd3'
console.log(newObj.d) // { one: 'd3', two: 'd2' }
console.log(obj.d) // { one: 'd1', two: 'd2' }
