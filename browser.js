// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}function t(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return r.exec(e).slice(1)};function o(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return(r?"/":"")+(e=t(b(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function i(e){var r=u(e),n="/"===h(e,-1);return(e=t(b(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&n&&(e+="/"),(r?"/":"")+e}function u(e){return"/"===e.charAt(0)}function s(){return i(b(Array.prototype.slice.call(arguments,0),(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function l(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=o(e).substr(1),t=o(t).substr(1);for(var n=r(e.split("/")),i=r(t.split("/")),u=Math.min(n.length,i.length),s=u,l=0;l<u;l++)if(n[l]!==i[l]){s=l;break}var f=[];for(l=s;l<n.length;l++)f.push("..");return(f=f.concat(i.slice(s))).join("/")}function f(e){var t=n(e),r=t[0],o=t[1];return r||o?(o&&(o=o.substr(0,o.length-1)),r+o):"."}function a(e,t){var r=n(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r}function c(e){return n(e)[3]}var p={extname:c,basename:a,dirname:f,sep:"/",delimiter:":",relative:l,join:s,isAbsolute:u,normalize:i,resolve:o};function b(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var h="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)};return(0,e(Object.freeze({__proto__:null,basename:a,default:p,delimiter:":",dirname:f,extname:c,isAbsolute:u,join:s,normalize:i,relative:l,resolve:o,sep:"/"})).resolve)("/home/runner/work/blas-base-xerbla/blas-base-xerbla/lib","..","include")},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).headerDir=t();
//# sourceMappingURL=browser.js.map
