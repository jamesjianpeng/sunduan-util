const hello = require('./hello');
const throttle = require('./throttle');
const pop = require('./array/pop');
const forEach = require('./array/forEach');
const buildURL = require('./helper/buildURL');
const deepClone = require('./helper/deepClone');
const FormatDate = require('./helper/FormatDate');

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
