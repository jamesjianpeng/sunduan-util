var FormatDate = require('../../lib/helper/formatDate')

var formatDate = new FormatDate()
var time = formatDate.getDate(+new Date())
console.log(time.date) // 2018/05/19 15:35:38

var formatDate = new FormatDate()
var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH:mm:ss')
console.log(timeTwo.date) // 2018-05-19 15:27:51

setTimeout(function () {
  var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:53'))
  console.log(timeTwo.date) // 2018&05&19
}, 2000)

var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH:mm')
console.log(timeTwo.date) // 2018-05-19 15:27

var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH')
console.log(timeTwo.date) // 2018-05-19 15

var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD')
console.log(timeTwo.date) // 2018-05-19

var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY|MM|DD')
console.log(timeTwo.date) // 2018|05|19

var timeTwo = formatDate.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY&MM&DD')
console.log(timeTwo.date) // 2018&05&19
