// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n,e,o,i){var s,l;if(!r(n))throw new TypeError(t("1Rp3c",n));if(!r(e))throw new TypeError(t("1Rp2H",e));if(!r(o))throw new TypeError(t("1Rp3N",o));function f(r,t){return r?o(r):t?(s.length&&s.unshift(null),void o.apply(null,s)):e.call(i,l,p)}function p(r){var t;if(r)return o(r);if(l+=1,arguments.length>1)for(s=new Array(arguments.length-1),t=1;t<arguments.length;t++)s[t-1]=arguments[t];n(l,f)}s=[],n(l=0,f)}export{n as default};
//# sourceMappingURL=index.mjs.map
