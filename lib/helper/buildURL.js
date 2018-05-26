var forEach = require('../array/forEach');

function encode(val) {   // encodeURIComponent 转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符
  val = typeof val !== 'string' ? val.toString().trim() : val.trim()
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * addURLParam is a function that connects each url parameter
 *
 * @param {String} url
 * @param {String} key
 * @param {String|Number|Boolean} value
 *
 */

var addURLParam = function(url, key, value) {
  'use strict';

  url += url.indexOf('?') === -1 ? '?' : '&'
  url += encode(key) + '=' + encode(value)
  return url
}

/**
 *
 * buildURL is used '?' Or '&' splicing the full url
 *
 * @param {String} url
 * @param {Object} options
 *
 */

var buildURL = function (url, options) {
  'use strict';
  if (!options) {
    return url
  }
  forEach(options, function(value, key) {
    url = addURLParam(url, key, value);
  })
  return url;
}

module.exports = buildURL;

/**
 *
 * var url = 'https://testxxxx.com/comments';
 *
 * var params = {
 *   postId: 1,
 *   page: 1,
 *   pageSize: 10
 * };
 *
 * var url = buildURL(url, params);
 *
 * console.log(url)
 *
 */
