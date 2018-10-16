// 选择 XHR 对象
var createXHR = (function() {

  var createAfterIE7XHR = function() {
    return new XMLHttpRequest();
  }

  var createBeforeIE7XHR = function() {

    if (typeof arguments.callee.activeXSring != 'string') {
      var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];

      for (var i = 0; i < versions.length; ++i) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXSring = versions[i];
          break;
        } catch(err) {
          // 下一步
        }
      }

    }

    return new ActiveXObject(arguments.callee.activeXSring);
  }

  return function() {
    var XHR;

    if (typeof XMLHttpRequest !== 'undefined') { // 支持 IE7 以后的版本
       XHR = createAfterIE7XHR();
    } else if (typeof ActiveXObject != 'undefined') { // 支持 IE7 以前的版本
       XHR = createBeforeIE7XHR();
    } else {
      throw new Error('No XHR object available.');
    }

    return XHR;
  }
})()

/*
* 处理请求/响应过程当前 state
*/
var xhrState = (function() {

  var isDone = function(state) { // state 为 4 的时候表示完成
     return state === 4 ? true : false;
  }

  var isSuccess =  function(state) {
    return(state >= 200 && state < 300) || state === 304 ? true : false
  }

  var xhr_state_0 = function({xhr, test}, countAdd) { // 初始化，尚未调用 open() 方法
    if (test) console.log(xhr.readyState, '0 ===> 初始化，尚未调用 open() 方法');
    countAdd()
    return {
      isDone: isDone(xhr.readyState),
      data: null,
      xhrState: xhr.readyState
    };
  }

  var xhr_state_1 = function({xhr, test, countAdd, count}) { // 启动，已经调用 open()，尚未调用 send()
    if (test) console.log(xhr.readyState, '1 ===> 启动，已经调用 open()，尚未调用 send()');
    countAdd(xhr.readyState)
    return {
      isDone: isDone(xhr.readyState),
      data: null,
      xhrState: xhr.readyState
    };
  }

  var xhr_state_2 = function({xhr, test, countAdd, count}) { // 发送，已经调用 send()，但是尚未接受到响应
    if (test) console.log(xhr.readyState, '2 ===> 发送，已经调用 send()，但是尚未接受到响应');
    countAdd(xhr.readyState)
    return {
      isDone: isDone(xhr.readyState),
      data: null,
      xhrState: xhr.readyState
    };
  }

  var xhr_state_3 = function({xhr, test, countAdd, count}) { // 接收，已经接受到部分数据
    if (test) console.log(xhr.readyState, '3 ===> 接收，已经接受到部分数据');
    countAdd(xhr.readyState)
    return {
      isDone: isDone(xhr.readyState),
      data: null,
      xhrState: xhr.readyState
    };
  }

  var xhr_state_4 = function({xhr, test, countAdd}) { // 完成，已经接受到全部到数据，而且已经可以在客户端使用
    if (test) console.log(xhr, xhr.readyState, '4 ===> 完成，已经接受到全部到数据，而且已经可以在客户端使用')
    countAdd(xhr.readyState)
    return {
      isDone: isDone(xhr.readyState),
      data: {
        response: xhr.response && xhr.response !== 'undefined' && xhr.response !== 'null' ? JSON.parse(xhr.response) : null,
        status: xhr.status,
        timeout: xhr.timeout
      },
      failureText: !isSuccess(xhr.status) ? 'xxxx' : '',
      xhrState: xhr.readyState,
      isSuccess: isSuccess(xhr.status)
    };
  }
  return {
    'xhr_state_0': xhr_state_0,
    'xhr_state_1': xhr_state_1,
    'xhr_state_2': xhr_state_2,
    'xhr_state_3': xhr_state_3,
    'xhr_state_4': xhr_state_4
  }
})()

var ajax = (function() {

  // 获取 XHR 对象
  var xhr = createXHR();

  return function() {
    console.log(arguments, '调用他的函数')

    var options = Array.prototype.shift.call(arguments)
    var successFn = Array.prototype.shift.call(arguments)
    var failureFn = Array.prototype.shift.call(arguments)
    var count = []
    var errorText = [
      '初始化，尚未调用 open() 方法', // 0
      '启动，已经调用 open()，尚未调用 send()', // 1
      '发送，已经调用 send()，但是尚未接受到响应', // 2
      '接收，已经接受到部分数据' // 3
    ]

    var countAdd = function(state) {
      count.push(state)
    }

    xhr.onreadystatechange = function() {
      var fnName = 'xhr_state_' + xhr.readyState
      var result = xhrState[fnName]({xhr, test: options.test, countAdd})
      if (result.isDone && count.length === 4) {
        result.isSuccess ? successFn(result.data) : failureFn(result.failureText)
        count = []
        console.log(xhr.getAllResponseHeaders(), '========== allHeaders ==========')
      } else if (result.isDone) {
        var index = count[pop(count).length - 1]
        failureFn(errorText[index])
        count = []
      }
    }

    xhr.open(options.method || 'get', options.url, true);
    // xhr.getAllResponseHeaders()
    // var allHeaders = xhr.getAllResponseHeaders();
    xhr.setRequestHeader('token', 'xxxxxxxx')
    xhr.send(options.params || null);
  }
})()

/*
* FINISH:
* 1. get 请求
* 2. success and failure callback function
*
* @QUESTION:
* 1. 不能实现多个 请求同时发送（暂时想到订阅和发布者模式）
* 2. ajax(obj, callback, callback) 和 ajax.get 同时存在
* 3. request 和 response 的拦截
*
* use
*
* var url = '......'
*
* var getData = function(res) {
*   console.log(res)
* }
*
* var errorData = function(err) {
*   console.log(err, 'err')
* }
*
* request({
*   method: 'get',
*   url
* }, getData, errorData)
*
*
*/
