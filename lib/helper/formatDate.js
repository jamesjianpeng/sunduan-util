var forEach = require('../array/forEach');

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

  const t = new Date(this.time.T);

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
