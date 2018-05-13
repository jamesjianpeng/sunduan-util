
### init

  ```
  install:

  npm i sunduan-util -save

  use:

  import {
    hello,
    throttle, // 节流函数
    // array function
    pop,
    forEach
  } from 'sunduan-util';

  ```


### test


  ```

	  console.log(hello.hello(), 'sunDuanUtil');

  ```

### throttle  

  ```

    var func = function() {
      console.log(window.innerWidth, window.innerHeight);
    }

    func = throttle(func, 2000);
    window.addEventListener('resize', func);

  ```

### pop

  ```

  var list = [1, 2, 3, 4, 5, 6];

  var newList = pop(list);

  console.log(newList); // [1, 2, 3, 4, 5]
  console.log(list); // [1, 2, 3, 4, 5, 6]

  ```

### forEach

  ```

  var obj = { a: 10, b: 20, c: 30 }
  forEach(obj, function(value, index, obj) {
    console.log(value, index, obj);
  })

  var list = [1, 2, 3, 4]
  forEach(obj, function(value, index, obj) {
    console.log(value, index, obj);
  })

  ```

### buildURL

  ```
  var url = 'https://testxxxx.com/comments';

  var params = {
    postId: 1,
    page: 1,
    pageSize: 10
  };

  var url = buildURL(url, params);

  console.log(url); // https://testxxxx.com/comments?postId=1&page=1&pageSize=10

  ```
