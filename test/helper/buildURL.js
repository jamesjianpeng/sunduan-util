var buildURL = require('../../lib/helper/buildURL');

var url = 'https://testxxxx.com/comments';
var params = {
  postId: 1,
  page: 1,
  pageSize: 10
};

url = buildURL(url, params);
console.log(url)

url = 'https://testxxxx.com/comments';
params = {
  postId: 1,
  page: 1,
  pageSize: 10,
  ohter: '@',
  otherOne: '()',
  otherOne: ' 9 '
};

url = buildURL(url, params);

console.log(url)
