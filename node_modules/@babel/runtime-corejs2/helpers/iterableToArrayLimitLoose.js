var _Symbol = require("core-js/library/fn/symbol/index.js");
var _Symbol$iterator = require("core-js/library/fn/symbol/iterator.js");
function _iterableToArrayLimitLoose(e, r) {
  var t = e && ("undefined" != typeof _Symbol && e[_Symbol$iterator] || e["@@iterator"]);
  if (null != t) {
    var o,
      l = [];
    for (t = t.call(e); e.length < r && !(o = t.next()).done;) l.push(o.value);
    return l;
  }
}
module.exports = _iterableToArrayLimitLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;