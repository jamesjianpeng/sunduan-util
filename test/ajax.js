var ajax = require('../lib/ajax').ajax;

console.log(ajax, 'test request')

var url = 'https://jsonplaceholder.typicode.com/posts/1'

var getData = function(res) {
  console.log(res)
}

ajax({
  method: 'get',
  url,
  callback: getData
})
