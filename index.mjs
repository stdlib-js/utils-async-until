// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,e,i,o){var l,s;if(!r(n))throw new TypeError(t("0il3p",n));if(!r(e))throw new TypeError(t("0il2S",e));if(!r(i))throw new TypeError(t("0il3Z",i));function f(r,t){return r?i(r):t?(l.length&&l.unshift(null),void i.apply(null,l)):e.call(o,s,h)}function h(r){var t;if(r)return i(r);if(s+=1,arguments.length>1)for(l=new Array(arguments.length-1),t=1;t<arguments.length;t++)l[t-1]=arguments[t];n(s,f)}l=[],n(s=0,f)}export{n as default};
//# sourceMappingURL=index.mjs.map
