var assert = require('assert');
var buildURL = require('../lib/helper/buildURL');

describe('buildURL(url, params)', function() {

  var url = 'https://testxxxx.com/comments';
  var params = {
    postId: 1,
    page: 1,
    pageSize: 10
  };
  it('buildURL(url, params) usually', function() {
    assert.equal(buildURL(url, params), 'https://testxxxx.com/comments?postId=1&page=1&pageSize=10');
  });

  var urlTwo = 'https://testxxxx.com/comments';
  var paramsTwo = {
    postId: 1,
    page: 1,
    pageSize: 10,
    ohter: '@333',
    otherOne: '()',
    otherTwo: ' 9 '
  };
  it('buildURL(url, params) special', function() {
    assert.equal(buildURL(urlTwo, paramsTwo), 'https://testxxxx.com/comments?postId=1&page=1&pageSize=10&ohter=@333&otherOne=()&otherTwo=9');
  });

});
