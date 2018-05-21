window["sunduanUtil"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var type = __webpack_require__(6);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const hello = __webpack_require__(3);
const throttle = __webpack_require__(4);
const pop = __webpack_require__(5);
const forEach = __webpack_require__(0);
const buildURL = __webpack_require__(7);
const deepClone = __webpack_require__(8);
const FormatDate = __webpack_require__(9);

const sunduanUtil = {
  hello: hello,
  throttle: throttle,
  pop: pop,
  forEach: forEach,
  buildURL: buildURL,
  deepClone: deepClone,
  FormatDate: FormatDate
};

module.exports = sunduanUtil;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hello = function () {
  return 'hello world ！welcome use sunduan-util';
}

module.exports = hello


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var throttle = function (callback, interval) {
  var self = callback,
    timer = null,
    firstTime = true;
  return function() {
    if (firstTime) { // 首次调用
      self.apply(this, arguments);
      firstTime = false;
    }

    if (timer) { // timer 存在则表示上次的改变还没有执行
      return false;
    }

    timer = setTimeout(function() {
      self.apply(this, arguments);
      timer = null;
    }, interval || 500)
  }
}

module.exports = throttle
/*
* use
*
* var func = function() {
*   console.log(window.innerWidth, window.innerHeight)
* }
*
* func = throttle(func, 2000)
* window.addEventListener('resize', func)
*
*
*/


/***/ }),
/* 5 */
/***/ (function(module, exports) {


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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var type = (function () {
  var typeList = ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'Array', 'Object', 'Function', 'Arguments'],
     type = {};
  for (var i = 0;i < typeList.length;i++) {
    let t = typeList[i];
    (function(typeInner) {
      type['is' + typeInner] = function (options) {
        return Object.prototype.toString.call(options) === '[object ' + typeInner + ']'
      }
    })(t)
  }
  return type;
})();

module.exports = type


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__(0);

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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__(0);

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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__(0);

var addZero = function (n, l = 2) {
  if (typeof n !== 'number' && (typeof n === 'number' && n !== 0) && !n ) {
    throw new TypeError(n + 'is not a valid value');
  }
  var list = n.toString().split('')
  if (list.length < l) {
    for(var i = 0;i < l - list.length;i++) {
      list.unshift('0');
    }
  }
  return list.join('');
}

var FormatDate = function () {
  this.time = {
    T: '',
    Y: '',
    M: '',
    D: '',
    W: '',
    H: '',
    m: '',
    s: '',
    format: 'YYYY/MM/DD HH:mm:ss',
    date: ''
  }
}

FormatDate.prototype.lang = 'ZH-CN';

FormatDate.prototype.weekConf = {
  'ZH-CN': {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期天'
  }
};

FormatDate.prototype.MonthConf = {
  'ZH-CN': {
    1: '一月份',
    2: '二月份',
    3: '三月份',
    4: '四月份',
    5: '五月份',
    6: '六月份',
    7: '七月份',
    8: '八月份',
    9: '九月份',
    10: '十月份',
    11: '十一月份',
    12: '十二月份'
  }
};

var error = function (value, text) {
  if (!value) {
    throw new Error(text)
  }
}

var unshiftZero = function (n, l = 2) {
  if (typeof n !== 'number' && (typeof n === 'number' && n !== 0) && !n ) {
    throw new TypeError(n + 'is not a valid value');
  }
  var list = n.toString().split('');
  if (list.length < l) {
    for(var i = 0;i < l - list.length;i++) {
      list.unshift('0');
    }
  }
  return list.join('');
}

FormatDate.prototype.setLang = function (value) {
  error(value, 'lang is undefined')
  FormatDate.prototype.lang = value
  return this
}

FormatDate.prototype.setWeekConf = function (lang, data) {
  error(value, 'lang is undefined')
  FormatDate.prototype.weekConf[value] = data
  return this
}

FormatDate.prototype.setMonthConf = function (lang, data) {
  error(value, 'lang is undefined')
  FormatDate.prototype.monthConf[lang] = data
  return this
}

FormatDate.prototype.resetTime = function () {
  var self = this
  forEach(self.time, function(value, key) {
    if (!('format' in self.time)) self.time[key] = '';
  })
  return self
}

FormatDate.prototype.getFormat = function () {
  var self = this
  var s = this.time.format
  var timeList = this.time.format.split(/[\W]/)
  var obj = {}
  forEach(timeList, function (value, key) {
    var val = self.time[value[0]].toString()
    s = s.replace(value, val)
  })
  this.time.date = s
  return this
}

FormatDate.prototype.getTime = function () {
  this.time.T = Array.prototype.shift.call(arguments)
  this.time.format = Array.prototype.shift.call(arguments) || this.time.format
  if (typeof this.time.T !== 'number' || isNaN(+this.time.T) || (typeof this.time.T === 'object' && !(this.time.T instanceof Date))) {
    throw new TypeError(this.time.T + 'is not a valid timestamp or time object');
  }

  t = new Date(this.time.T);

  this.time.Y = t.getFullYear();

  this.time.M = unshiftZero(t.getMonth() + 1);

  this.time.D = unshiftZero(t.getDate());

  this.time.W = t.getDay();

  this.time.H = unshiftZero(t.getHours());

  this.time.m = unshiftZero(t.getMinutes());

  this.time.s = unshiftZero(t.getSeconds());

  return this
}

FormatDate.prototype.getDate = function () {
  this.resetTime()
  this.getTime.apply(this, arguments)
  // this.getTime(...arguments)
  this.getFormat(this.time.format)
  this.date = this.time.date
  return this
}

module.exports = FormatDate


/***/ })
/******/ ]);
//# sourceMappingURL=sunduan-util.js.map