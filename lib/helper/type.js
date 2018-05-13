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
