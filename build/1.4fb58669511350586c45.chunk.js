webpackJsonp([1],{"./app/api/backend/movies.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/index.js"),r=n.n(t),s=n("./config.js"),i={getMovies:function(e){return e?r.a.get(s.a.API_URL+"/movies?title="+e):r.a.get(s.a.API_URL+"/movies")},create:function(e,o){var n=s.a.API_URL+"/movies",t={headers:{Authorization:o}};return r.a.post(n,e,t)}};o.a=i},"./app/api/backend/users.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/index.js"),r=n.n(t),s=n("./config.js"),i={create:function(e){var o=s.a.API_URL+"/users";return r.a.post(o,e)},login:function(e){var o=s.a.API_URL+"/users/sign_in";return r.a.post(o,e)},getUserByAccessToken:function(e){var o=s.a.API_URL+"/users/me",n={headers:{Authorization:e}};return r.a.get(o,n)}};o.a=i},"./app/components/Header/Loadable.js":function(e,o,n){"use strict";var t=n("./node_modules/react-loadable/lib/index.js"),r=n.n(t);o.a=r()({loader:function(){return n.e(5).then(n.bind(null,"./app/components/Header/index.js"))},loading:function(){return null}})},"./app/containers/HomePage/index.js":function(e,o,n){"use strict";function t(){var e=Object(r.useState)(!0),o=p(e,2),n=o[0],t=o[1],s=Object(r.useState)({}),i=p(s,2),a=i[0],c=i[1],j=Object(r.useState)({}),v=p(j,2),g=v[0],y=v[1];Object(r.useEffect)(function(){_(),l.a.getMovies().then(function(e){c(e.data),setTimeout(function(){return t(!1)},1e3)});try{d.a.getUserByAccessToken(UserUtils.getAccessToken()).then(function(e){return y(e.data)})}catch(e){console.log("connect socket error")}},[]);var _=function(){try{var e=localStorage.getItem("accessToken");console.log("Socket #####",e);var o=new WebSocket("ws://remitano-backend-api.onrender.com/cable?token="+e);o.onopen=function(){console.log("Connected to Action Cable");var e={command:"subscribe",identifier:JSON.stringify({channel:"MoviesChannel",id:"65b75b213dd35e4374430423"})};o.send(JSON.stringify(e))},o.onmessage=function(e){var o=JSON.parse(e.data);console.log("#####",o.message),o&&o.message&&o.message.title&&alert(o.message.title)}}catch(e){console.log("connect socket error")}};return f("div",{className:"HomePage"},void 0,m,f("div",{className:"HomePage-container"},void 0,h,n?b:f("div",{className:"row"},void 0,0===a.length?x:a.map(function(e){return f("div",{className:"col-md-12"},e.id,f(u,{title:e.title,description:e.description,sharedByEmail:e.shared_by,embedUrl:e.embed_url,movieID:e.id,currentUser:g}))}))))}Object.defineProperty(o,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),s=n("./app/components/Header/Loadable.js"),i=n("./node_modules/react-loadable/lib/index.js"),a=n.n(i),u=a()({loader:function(){return n.e(8).then(n.bind(null,"./app/components/VideoCard/Item/index.js"))},loading:function(){return null}}),c=a()({loader:function(){return n.e(10).then(n.bind(null,"./app/components/VideoCard/LoadingList/index.js"))},loading:function(){return null}}),l=n("./app/api/backend/movies.js"),d=n("./app/api/backend/users.js");o.default=t;var f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var s=o&&o.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&s)for(var a in s)void 0===n[a]&&(n[a]=s[a]);else n||(n=s||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,o){var n=[],t=!0,r=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!o||n.length!==o);t=!0);}catch(e){r=!0,s=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw s}}return n}return function(o,n){if(Array.isArray(o))return o;if(Symbol.iterator in Object(o))return e(o,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=f(s.a,{}),h=f("div",{className:"SearchBoxContainer"},void 0),b=f(c,{}),x=f("div",{},void 0,f("h1",{className:"HomePage-dont-have-job"},void 0,"Don't have any videos - Testing Caching"))},"./config.js":function(e,o,n){"use strict";function t(){return!0}const r={API_BASE_URL:function(){return t()?"https://remitano-backend-api.onrender.com":"http://localhost:3001"}(),API_URL:function(){return t()?"https://remitano-backend-api.onrender.com/api/v1":"http://localhost:3001/api/v1"}(),SOCKET_BASE_URL:function(){return t()?"remitano-backend-api.onrender.com/cable":"localhost:3001/cable"}()};o.a=r},"./node_modules/axios/index.js":function(e,o,n){e.exports=n("./node_modules/axios/lib/axios.js")},"./node_modules/axios/lib/adapters/xhr.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js"),r=n("./node_modules/axios/lib/core/settle.js"),s=n("./node_modules/axios/lib/helpers/buildURL.js"),i=n("./node_modules/axios/lib/helpers/parseHeaders.js"),a=n("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),u=n("./node_modules/axios/lib/core/createError.js");e.exports=function(e){return new Promise(function(o,c){var l=e.data,d=e.headers;t.isFormData(l)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(p+":"+m)}if(f.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,t=e.responseType&&"text"!==e.responseType?f.response:f.responseText,s={data:t,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};r(o,c,s),f=null}},f.onerror=function(){c(u("Network Error",e,null,f)),f=null},f.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},t.isStandardBrowserEnv()){var h=n("./node_modules/axios/lib/helpers/cookies.js"),b=(e.withCredentials||a(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in f&&t.forEach(d,function(e,o){void 0===l&&"content-type"===o.toLowerCase()?delete d[o]:f.setRequestHeader(o,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(o){if("json"!==e.responseType)throw o}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),c(e),f=null)}),void 0===l&&(l=null),f.send(l)})}},"./node_modules/axios/lib/axios.js":function(e,o,n){"use strict";function t(e){var o=new i(e),n=s(i.prototype.request,o);return r.extend(n,i.prototype,o),r.extend(n,o),n}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/helpers/bind.js"),i=n("./node_modules/axios/lib/core/Axios.js"),a=n("./node_modules/axios/lib/defaults.js"),u=t(a);u.Axios=i,u.create=function(e){return t(r.merge(a,e))},u.Cancel=n("./node_modules/axios/lib/cancel/Cancel.js"),u.CancelToken=n("./node_modules/axios/lib/cancel/CancelToken.js"),u.isCancel=n("./node_modules/axios/lib/cancel/isCancel.js"),u.all=function(e){return Promise.all(e)},u.spread=n("./node_modules/axios/lib/helpers/spread.js"),e.exports=u,e.exports.default=u},"./node_modules/axios/lib/cancel/Cancel.js":function(e,o,n){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},"./node_modules/axios/lib/cancel/CancelToken.js":function(e,o,n){"use strict";function t(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),o(n.reason))})}var r=n("./node_modules/axios/lib/cancel/Cancel.js");t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.source=function(){var e;return{token:new t(function(o){e=o}),cancel:e}},e.exports=t},"./node_modules/axios/lib/cancel/isCancel.js":function(e,o,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"./node_modules/axios/lib/core/Axios.js":function(e,o,n){"use strict";function t(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var r=n("./node_modules/axios/lib/defaults.js"),s=n("./node_modules/axios/lib/utils.js"),i=n("./node_modules/axios/lib/core/InterceptorManager.js"),a=n("./node_modules/axios/lib/core/dispatchRequest.js");t.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var o=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){o.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){o.push(e.fulfilled,e.rejected)});o.length;)n=n.then(o.shift(),o.shift());return n},s.forEach(["delete","get","head","options"],function(e){t.prototype[e]=function(o,n){return this.request(s.merge(n||{},{method:e,url:o}))}}),s.forEach(["post","put","patch"],function(e){t.prototype[e]=function(o,n,t){return this.request(s.merge(t||{},{method:e,url:o,data:n}))}}),e.exports=t},"./node_modules/axios/lib/core/InterceptorManager.js":function(e,o,n){"use strict";function t(){this.handlers=[]}var r=n("./node_modules/axios/lib/utils.js");t.prototype.use=function(e,o){return this.handlers.push({fulfilled:e,rejected:o}),this.handlers.length-1},t.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},t.prototype.forEach=function(e){r.forEach(this.handlers,function(o){null!==o&&e(o)})},e.exports=t},"./node_modules/axios/lib/core/createError.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/core/enhanceError.js");e.exports=function(e,o,n,r,s){var i=new Error(e);return t(i,o,n,r,s)}},"./node_modules/axios/lib/core/dispatchRequest.js":function(e,o,n){"use strict";function t(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/core/transformData.js"),i=n("./node_modules/axios/lib/cancel/isCancel.js"),a=n("./node_modules/axios/lib/defaults.js"),u=n("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),c=n("./node_modules/axios/lib/helpers/combineURLs.js");e.exports=function(e){return t(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(o){delete e.headers[o]}),(e.adapter||a.adapter)(e).then(function(o){return t(e),o.data=s(o.data,o.headers,e.transformResponse),o},function(o){return i(o)||(t(e),o&&o.response&&(o.response.data=s(o.response.data,o.response.headers,e.transformResponse))),Promise.reject(o)})}},"./node_modules/axios/lib/core/enhanceError.js":function(e,o,n){"use strict";e.exports=function(e,o,n,t,r){return e.config=o,n&&(e.code=n),e.request=t,e.response=r,e}},"./node_modules/axios/lib/core/settle.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/core/createError.js");e.exports=function(e,o,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?o(t("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"./node_modules/axios/lib/core/transformData.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js");e.exports=function(e,o,n){return t.forEach(n,function(n){e=n(e,o)}),e}},"./node_modules/axios/lib/defaults.js":function(e,o,n){"use strict";(function(o){function t(e,o){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=o)}var r=n("./node_modules/axios/lib/utils.js"),s=n("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n("./node_modules/axios/lib/adapters/xhr.js"):void 0!==o&&(e=n("./node_modules/axios/lib/adapters/xhr.js")),e}(),transformRequest:[function(e,o){return s(o,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(t(o,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(t(o,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(i)}),e.exports=a}).call(o,n("./node_modules/process/browser.js"))},"./node_modules/axios/lib/helpers/bind.js":function(e,o,n){"use strict";e.exports=function(e,o){return function(){for(var n=new Array(arguments.length),t=0;t<n.length;t++)n[t]=arguments[t];return e.apply(o,n)}}},"./node_modules/axios/lib/helpers/buildURL.js":function(e,o,n){"use strict";function t(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n("./node_modules/axios/lib/utils.js");e.exports=function(e,o,n){if(!o)return e;var s;if(n)s=n(o);else if(r.isURLSearchParams(o))s=o.toString();else{var i=[];r.forEach(o,function(e,o){null!==e&&void 0!==e&&(r.isArray(e)?o+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(t(o)+"="+t(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},"./node_modules/axios/lib/helpers/combineURLs.js":function(e,o,n){"use strict";e.exports=function(e,o){return o?e.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):e}},"./node_modules/axios/lib/helpers/cookies.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js");e.exports=t.isStandardBrowserEnv()?function(){return{write:function(e,o,n,r,s,i){var a=[];a.push(e+"="+encodeURIComponent(o)),t.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),t.isString(r)&&a.push("path="+r),t.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var o=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"./node_modules/axios/lib/helpers/isAbsoluteURL.js":function(e,o,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"./node_modules/axios/lib/helpers/isURLSameOrigin.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js");e.exports=t.isStandardBrowserEnv()?function(){function e(e){var o=e;return n&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var o,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return o=e(window.location.href),function(n){var r=t.isString(n)?e(n):n;return r.protocol===o.protocol&&r.host===o.host}}():function(){return function(){return!0}}()},"./node_modules/axios/lib/helpers/normalizeHeaderName.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js");e.exports=function(e,o){t.forEach(e,function(n,t){t!==o&&t.toUpperCase()===o.toUpperCase()&&(e[o]=n,delete e[t])})}},"./node_modules/axios/lib/helpers/parseHeaders.js":function(e,o,n){"use strict";var t=n("./node_modules/axios/lib/utils.js"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var o,n,s,i={};return e?(t.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),o=t.trim(e.substr(0,s)).toLowerCase(),n=t.trim(e.substr(s+1)),o){if(i[o]&&r.indexOf(o)>=0)return;i[o]="set-cookie"===o?(i[o]?i[o]:[]).concat([n]):i[o]?i[o]+", "+n:n}}),i):i}},"./node_modules/axios/lib/helpers/spread.js":function(e,o,n){"use strict";e.exports=function(e){return function(o){return e.apply(null,o)}}},"./node_modules/axios/lib/utils.js":function(e,o,n){"use strict";function t(e){return"[object Array]"===S.call(e)}function r(e){return"[object ArrayBuffer]"===S.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===S.call(e)}function f(e){return"[object File]"===S.call(e)}function p(e){return"[object Blob]"===S.call(e)}function m(e){return"[object Function]"===S.call(e)}function h(e){return l(e)&&m(e.pipe)}function b(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function j(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,o){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),t(e))for(var n=0,r=e.length;n<r;n++)o.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&o.call(null,e[s],s,e)}function g(){function e(e,n){"object"==typeof o[n]&&"object"==typeof e?o[n]=g(o[n],e):o[n]=e}for(var o={},n=0,t=arguments.length;n<t;n++)v(arguments[n],e);return o}function y(e,o,n){return v(o,function(o,t){e[t]=n&&"function"==typeof o?_(o,n):o}),e}var _=n("./node_modules/axios/lib/helpers/bind.js"),w=n("./node_modules/is-buffer/index.js"),S=Object.prototype.toString;e.exports={isArray:t,isArrayBuffer:r,isBuffer:w,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:l,isUndefined:c,isDate:d,isFile:f,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:b,isStandardBrowserEnv:j,forEach:v,merge:g,extend:y,trim:x}},"./node_modules/is-buffer/index.js":function(e,o){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}});