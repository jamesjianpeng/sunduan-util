
### init

  ```
  install:

  npm i sunduan-util -save

  use:

  import {
    hello,
    throttle, // 节流函数
    deepClone,
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
  - throttle(callback,time)
  
  | params    | type       | default  | require  |
  | --------- |:---------- |:-------- |---------:|
  | callback  | Function   | -        | true     |
  | time      | Number     | 500      | false    |
  | return    | -          | -        |  -       |

  ```

  var func = function() {
    console.log(window.innerWidth, window.innerHeight);
  }

  func = throttle(func, 2000);
  window.addEventListener('resize', func);

  ```

### pop
  - pop(list)
  
  |           | type       | default  | require  |
  | --------- |:---------- |:-------- |---------:|
  | list      | Object     | -        |  true    |
  | return    | Array      | -        |  -       |
  

  ```

  var list = [1, 2, 3, 4, 5, 6];

  var newList = pop(list);

  console.log(newList); // [1, 2, 3, 4, 5]
  console.log(list); // [1, 2, 3, 4, 5, 6]

  ```

### forEach
  - forEach(obj, callback)
  
  |           | type       | default  | require  |
  | --------- |:---------- | :--------|---------:|
  | obj       | Object     | -        |  true    |
  | callback  | Function   | -        |  true    |
  | return    | -          | -        |  -       |

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
  - buildURL(url, params)
  
  |           | type       | default  | require  |
  | --------- |:---------- |:-------- |---------:|
  | url       | String     | -        |  true    |
  | params    | Object     | null     |  false   |
  | return    | String     | -        |  true    |

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

### deepClone
  - deepClone(obj, type)
  
  type: default | JSON
  
  |           | type       | default  | require  |
  | --------- |:----------:|:--------:|---------:|
  | obj       | Object     | -        |  true    |
  | type      | String     | default  |  false   |
  | return    | String     | -        |  true    |

  ```
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

  ```
