import _Reflect$construct from "core-js/library/fn/reflect/construct.js";
import setPrototypeOf from "./setPrototypeOf.js";
import isNativeReflectConstruct from "./isNativeReflectConstruct.js";
export default function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return _Reflect$construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}