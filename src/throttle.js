'use strict';

exports.throttle = function (callback, interval) {
  var self = callback,
    timer = null,
    firstTime = true;
  return function() {
    if (firstTime) { // 首次调用
      self.apply(this, arguments)
      firstTime = false
    }

    if (timer) { // timer 存在则表示上次的改变还没有执行
      return false
    }

    timer = setTimeout(function() {
      self.apply(this, arguments)
      timer = null
    }, interval || 500)
  }
}

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
