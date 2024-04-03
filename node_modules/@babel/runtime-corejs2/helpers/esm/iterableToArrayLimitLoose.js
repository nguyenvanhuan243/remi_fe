import _Symbol from "core-js/library/fn/symbol/index.js";
import _Symbol$iterator from "core-js/library/fn/symbol/iterator.js";
export default function _iterableToArrayLimitLoose(e, r) {
  var t = e && ("undefined" != typeof _Symbol && e[_Symbol$iterator] || e["@@iterator"]);
  if (null != t) {
    var o,
      l = [];
    for (t = t.call(e); e.length < r && !(o = t.next()).done;) l.push(o.value);
    return l;
  }
}