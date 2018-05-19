var assert = require('assert');
var FormatDate = require('../lib/helper/formatDate');

describe('FormatDate shoule function', function() {
  var formatDate = new FormatDate();
  it('formatDate.getDate(+new Date()) shoule function', function () {
    assert.equal(typeof FormatDate, 'function');
  })
});

describe('FormatDate shoule object', function() {
  var formatDate = new FormatDate();
  var time = formatDate.getDate(+new Date('2018-05-19 15:35:38'));
  it('formatDate.getDate(+new Date()) shoule object', function () {
    assert.equal(typeof time, 'object');
    assert.equal(time.date, '2018/05/19 15:35:38');
  })
});

describe('FormatDate YYYY-MM-DD HH:mm:ss', function() {
  var formatDateTwo = new FormatDate()
  var timeTwo = formatDateTwo.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH:mm:ss');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY-MM-DD HH:mm:ss")', function () {
    assert.equal(timeTwo.date, '2018-05-19 15:27:51');
  })
});

describe('FormatDate YYYY-MM-DD HH:mm', function() {
  var formatDateThree = new FormatDate()
  var timeThree = formatDateThree.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH:mm');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY-MM-DD HH:mm")', function () {
    assert.equal(timeThree.date, '2018-05-19 15:27');
  })

});

describe('FormatDate YYYY-MM-DD HH', function() {
  var formatDateFour = new FormatDate()
  var timeFour = formatDateFour.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD HH');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY-MM-DD HH")', function () {
    assert.equal(timeFour.date, '2018-05-19 15');
  })
});

describe('FormatDate YYYY-MM-DD', function() {
  var formatDateFive = new FormatDate()
  var timeFive = formatDateFive.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM-DD');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY-MM-DD")', function () {
    assert.equal(timeFive.date, '2018-05-19');
  });
});

describe('FormatDate YYYY-MM', function() {
  var formatDateSix = new FormatDate()
  var timeSix = formatDateSix.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY-MM');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY-MM")', function () {
    assert.equal(timeSix.date, '2018-05');
  });
});

describe('FormatDate YYYY', function() {
  var formatDateSeven = new FormatDate()
  var timeSeven = formatDateSeven.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY');
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY")', function () {
    assert.equal(timeSeven.date, '2018');
  });
});

describe('FormatDate YYYY&MM&DD', function() {
  var formatDateEight = new FormatDate()
  var timeEight = formatDateEight.getDate(+new Date('2018/05/19 15:27:51'), 'YYYY&MM&DD')
  it('formatDateTwo.getDate(+new Date("2018/05/19 15:27:51"), "YYYY&MM&DD")', function () {
    assert.equal(timeEight.date, '2018&05&19');
  });

});
