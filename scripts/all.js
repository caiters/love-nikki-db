!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VeeValidate=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule?e.default:e}function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}var i={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/},n={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/},r={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/},s={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/},o=function(e,t){void 0===t&&(t=[null]);var n=t[0];return n?(i[n]||i.en).test(e):Object.keys(i).some(function(t){return i[t].test(e)})},a=function(e,t){void 0===t&&(t=[null]);var i=t[0];return i?(s[i]||s.en).test(e):Object.keys(s).some(function(t){return s[t].test(e)})},l=function(e,t){void 0===t&&(t=[null]);var i=t[0];return i?(r[i]||r.en).test(e):Object.keys(r).some(function(t){return r[t].test(e)})},u=function(e,t){void 0===t&&(t=[null]);var i=t[0];return i?(n[i]||n.en).test(e):Object.keys(n).some(function(t){return n[t].test(e)})},c=function(e,t){var i=t[0],n=t[1];return Number(i)<=e&&Number(n)>=e},f=function(e,t,i){var n=t[0],r=n?document.querySelector("input[name='"+n+"']"):document.querySelector("input[name='"+i+"_confirmation']");return r||(r=n?document.querySelector("input[data-vv-name='"+n+"']"):document.querySelector("input[data-vv-name='"+i+"_confirmation']")),!(!r||String(e)!==r.value)},d=t(function(e,t){function i(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default}),h=e(t(function(e,t){function i(e){(0,n.default)(e);var t=e.replace(/[^0-9]+/g,"");if(!r.test(t))return!1;for(var i=0,s=void 0,o=void 0,a=void 0,l=t.length-1;l>=0;l--)s=t.substring(l,l+1),o=parseInt(s,10),i+=a&&(o*=2)>=10?o%10+1:o,a=!a;return!(i%10!=0||!t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=function(e){return e&&e.__esModule?e:{default:e}}(d),r=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;e.exports=t.default})),p=function(e){return h(String(e))},v=function(e,t){var i=Array.isArray(t)?t[0]||"*":"*";if(Array.isArray(e))return!1;if(null===e||void 0===e||""===e)return!0;if(0===Number(i))return/^-?\d*$/.test(e);var n="*"===i?"+":"{1,"+i+"}";if(!new RegExp("^-?\\d*(\\.\\d"+n+")?$").test(e))return!1;var r=parseFloat(e);return r===r},m=function(e,t){var i=t[0],n=String(e);return/^[0-9]*$/.test(n)&&n.length===Number(i)},g=function(e,t,i){var n=window.URL||window.webkitURL;return new Promise(function(r){var s=new Image;s.onerror=function(){return r({valid:!1})},s.onload=function(){return r({valid:s.width===Number(t)&&s.height===Number(i)})},s.src=n.createObjectURL(e)})},_=function(e,t){for(var i=t[0],n=t[1],r=[],s=0;s<e.length;s++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e[s].name))return!1;r.push(e[s])}return Promise.all(r.map(function(e){return g(e,i,n)}))},y=t(function(e,t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];for(var i in t)void 0===e[i]&&(e[i]=t[i]);return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default}),b=t(function(e,t){function i(e,t){(0,r.default)(e);var i=void 0,s=void 0;"object"===(void 0===t?"undefined":n(t))?(i=t.min||0,s=t.max):(i=arguments[1],s=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=i&&(void 0===s||o<=s)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var r=function(e){return e&&e.__esModule?e:{default:e}}(d);e.exports=t.default}),$=t(function(e,t){function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){(0,r.default)(e),(t=(0,s.default)(t,o)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var i=e.split(".");if(t.require_tld){var n=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1}for(var a,l=0;l<i.length;l++){if(a=i[l],t.allow_underscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=i(d),s=i(y),o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default}),x=e(t(function(e,t){function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if((0,r.default)(e),(t=(0,s.default)(t,l)).require_display_name||t.allow_display_name){var i=e.match(u);if(i)e=i[1];else if(t.require_display_name)return!1}var n=e.split("@"),d=n.pop(),v=n.join("@"),m=d.toLowerCase();if("gmail.com"!==m&&"googlemail.com"!==m||(v=v.replace(/\./g,"").toLowerCase()),!(0,o.default)(v,{max:64})||!(0,o.default)(d,{max:256}))return!1;if(!(0,a.default)(d,{require_tld:t.require_tld}))return!1;if('"'===v[0])return v=v.slice(1,v.length-1),t.allow_utf8_local_part?p.test(v):f.test(v);for(var g=t.allow_utf8_local_part?h:c,_=v.split("."),y=0;y<_.length;y++)if(!g.test(_[y]))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=i(d),s=i(y),o=i(b),a=i($),l={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},u=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,f=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,p=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default})),A=function(e){return x(String(e))},F=function(e,t){var i=new RegExp(".("+t.join("|")+")$","i");return e.every(function(e){return i.test(e.name)})},w=function(e){return e.every(function(e){return/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e.name)})},E=function(e,t){return!!t.filter(function(t){return t==e}).length},L=t(function(e,t){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,n.default)(e),!(t=String(t)))return i(e,4)||i(e,6);if("4"===t)return!!r.test(e)&&e.split(".").sort(function(e,t){return e-t})[3]<=255;if("6"===t){var o=e.split(":"),a=!1,l=i(o[o.length-1],4),u=l?7:8;if(o.length>u)return!1;if("::"===e)return!0;"::"===e.substr(0,2)?(o.shift(),o.shift(),a=!0):"::"===e.substr(e.length-2)&&(o.pop(),o.pop(),a=!0);for(var c=0;c<o.length;++c)if(""===o[c]&&c>0&&c<o.length-1){if(a)return!1;a=!0}else if(l&&c===o.length-1);else if(!s.test(o[c]))return!1;return a?o.length>=1:o.length===u}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=function(e){return e&&e.__esModule?e:{default:e}}(d),r=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,s=/^[0-9A-F]{1,4}$/i;e.exports=t.default}),N=e(L),j=function(e,t){void 0===t&&(t=[4]);var i=t[0];return N(e,i)},O=function(e,t){var i=t[0];return void 0===e||null===e?i>=0:String(e).length<=i},k=function(e,t){var i=t[0];return!Array.isArray(e)&&null!==e&&void 0!==e&&""!==e&&Number(e)<=i},S=function(e,t){var i=new RegExp(t.join("|").replace("*",".+")+"$","i");return e.every(function(e){return i.test(e.type)})},Z=function(e,t){var i=t[0];return void 0!==e&&null!==e&&String(e).length>=i},T=function(e,t){var i=t[0];return!Array.isArray(e)&&null!==e&&void 0!==e&&""!==e&&Number(e)>=i},M=function(e,t){return!t.filter(function(t){return t==e}).length},q=function(e){return/^[0-9]+$/.test(String(e))},D=function(e,t){var i=t[0],n=t.slice(1);return i instanceof RegExp?i.test(e):new RegExp(i,n).test(String(e))},B=function(e){return Array.isArray(e)?!!e.length:void 0!==e&&null!==e&&!!String(e).trim().length},R=function(e,t){var i=t[0];if(isNaN(i))return!1;for(var n=1024*Number(i),r=0;r<e.length;r++)if(e[r].size>n)return!1;return!0},P=e(t(function(e,t){function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];if(e===r||n(r)&&r.test(e))return!0}return!1}function s(e,t){if((0,o.default)(e),!e||e.length>=2083||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;t=(0,u.default)(t,c);var i=void 0,n=void 0,s=void 0,d=void 0,h=void 0,p=void 0,v=void 0,m=void 0;if(v=e.split("#"),e=v.shift(),v=e.split("?"),e=v.shift(),(v=e.split("://")).length>1){if(i=v.shift(),t.require_valid_protocol&&-1===t.protocols.indexOf(i))return!1}else{if(t.require_protocol)return!1;t.allow_protocol_relative_urls&&"//"===e.substr(0,2)&&(v[0]=e.substr(2))}if(e=v.join("://"),v=e.split("/"),""===(e=v.shift())&&!t.require_host)return!0;if((v=e.split("@")).length>1&&(n=v.shift()).indexOf(":")>=0&&n.split(":").length>2)return!1;p=m=null;var g=(d=v.join("@")).match(f);return g?(s="",m=g[1],p=g[2]||null):(s=(v=d.split(":")).shift(),v.length&&(p=v.join(":"))),!(null!==p&&(h=parseInt(p,10),!/^[0-9]+$/.test(p)||h<=0||h>65535))&&(!!((0,l.default)(s)||(0,a.default)(s,t)||m&&(0,l.default)(m,6)||"localhost"===s)&&(s=s||m,!(t.host_whitelist&&!r(s,t.host_whitelist))&&(!t.host_blacklist||!r(s,t.host_blacklist))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=i(d),a=i($),l=i(L),u=i(y),c={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},f=/^\[([^\]]+)\](?::([0-9]+))?$/;e.exports=t.default})),V={alpha_dash:a,alpha_num:l,alpha_spaces:u,alpha:o,between:c,confirmed:f,credit_card:p,decimal:v,digits:m,dimensions:_,email:A,ext:F,image:w,in:E,ip:j,max:O,max_value:k,mimes:S,min:Z,min_value:T,not_in:M,numeric:q,regex:D,required:B,size:R,url:function(e,t){void 0===t&&(t=[!0]);var i=t[0];return P(e,{require_protocol:!!i})}},z=function(){this.errors=[]};z.prototype.add=function(e,t,i,n){void 0===n&&(n="__global__"),this.errors.push({field:e,msg:t,rule:i,scope:n})},z.prototype.all=function(e){return e?this.errors.filter(function(t){return t.scope===e}).map(function(e){return e.msg}):this.errors.map(function(e){return e.msg})},z.prototype.any=function(e){return e?!!this.errors.filter(function(t){return t.scope===e}).length:!!this.errors.length},z.prototype.clear=function(e){var t=this;e||(e="__global__");for(var i=0;i<this.errors.length;++i)(function(t){return t.scope===e})(t.errors[i])&&(t.errors.splice(i,1),--i)},z.prototype.collect=function(e,t,i){if(void 0===i&&(i=!0),!e){var n={};return this.errors.forEach(function(e){n[e.field]||(n[e.field]=[]),n[e.field].push(i?e.msg:e)}),n}return t?this.errors.filter(function(i){return i.field===e&&i.scope===t}).map(function(e){return i?e.msg:e}):this.errors.filter(function(t){return t.field===e}).map(function(e){return i?e.msg:e})},z.prototype.count=function(){return this.errors.length},z.prototype.first=function(e,t){var i=this;void 0===t&&(t="__global__");var n=this._selector(e),r=this._scope(e);if(r){var s=this.first(r.name,r.scope);if(s)return s}if(n)return this.firstByRule(n.name,n.rule,t);for(var o=0;o<this.errors.length;++o)if(i.errors[o].field===e&&i.errors[o].scope===t)return i.errors[o].msg;return null},z.prototype.firstRule=function(e,t){var i=this.collect(e,t,!1);return i.length&&i[0].rule||null},z.prototype.has=function(e,t){return void 0===t&&(t="__global__"),!!this.first(e,t)},z.prototype.firstByRule=function(e,t,i){var n=this.collect(e,i,!1).filter(function(e){return e.rule===t})[0];return n&&n.msg||null},z.prototype.remove=function(e,t){for(var i=this,n=t?function(i){return i.field===e&&i.scope===t}:function(t){return t.field===e&&"__global__"===t.scope},r=0;r<this.errors.length;++r)n(i.errors[r])&&(i.errors.splice(r,1),--r)},z.prototype._selector=function(e){if(e.indexOf(":")>-1){var t=e.split(":");return{name:t[0],rule:t[1]}}return null},z.prototype._scope=function(e){if(e.indexOf(".")>-1){var t=e.split("."),i=t[0];return{name:t[1],scope:i}}return null};var C=function(e){function t(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];e.apply(this,i),e.captureStackTrace&&e.captureStackTrace(this,t),this.message="[vee-validate]: "+this.message}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(Error),I=function(e,t){return e.getAttribute("data-vv-"+t)},U=function(e){var t=I(e,"scope");return!t&&e.form&&(t=I(e.form,"scope")),t},G=function(e,t,i){if(void 0===i&&(i=void 0),!e||!t)return i;var n=t;return e.split(".").every(function(e){return Object.prototype.hasOwnProperty.call(n,e)||void 0!==n[e]?(n=n[e],!0):(n=i,!1)}),n},J=function(e,t,i){if(void 0===t&&(t=0),void 0===i&&(i=!1),0===t)return e;var n;return function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];var o=function(){n=null,i||e.apply(void 0,r)},a=i&&!n;clearTimeout(n),n=setTimeout(o,t),a&&e.apply(void 0,r)}},Y=function(e){console&&console.warn("[vee-validate]: "+e)},W=function(e){return null!==e&&e&&"object"==typeof e&&!Array.isArray(e)},K=function(e){return"function"==typeof e},H=function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},Q=function(e,t){e.classList?e.classList.add(t):H(e,t)||(e.className+=" "+t)},X=function(e,t){if(e.classList)e.classList.remove(t);else if(H(e,t)){var i=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(i," ")}},ee=function(e){if(Array.from)return Array.from(e);for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t},te=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(Object.assign)return Object.assign.apply(Object,[e].concat(t));if(null==e)throw new TypeError("Cannot convert undefined or null to object");var n=Object(e);return t.forEach(function(e){null!=e&&Object.keys(e).forEach(function(t){n[t]=e[t]})}),n},ie=function(e,t){if(W(e)&&(e=Array.from(e)),e.find)return e.find(t);var i;return e.some(function(e){return!!t(e)&&(i=e,!0)}),i},ne=function(e,t,i){return e?"string"==typeof t?t:~["string","object"].indexOf(typeof t.rules)?t.rules:t:I(i,"rules")},re=function(e){return"SELECT"===e.tagName||~["radio","checkbox","file"].indexOf(e.type)?"change":"input"},se=function(e){void 0===e&&(e={}),this.dictionary={},this.merge(e)};se.prototype.hasLocale=function(e){return!!this.dictionary[e]},se.prototype.getMessage=function(e,t,i){return this.hasMessage(e,t)?this.dictionary[e].messages[t]:i||this._getDefaultMessage(e)},se.prototype.getFieldMessage=function(e,t,i){if(!this.hasLocale(e))return this.getMessage(e,i);var n=this.dictionary[e].custom&&this.dictionary[e].custom[t];return n&&n[i]?n[i]:this.getMessage(e,i)},se.prototype._getDefaultMessage=function(e){return this.hasMessage(e,"_default")?this.dictionary[e].messages._default:this.dictionary.en.messages._default},se.prototype.getAttribute=function(e,t,i){return void 0===i&&(i=""),this.hasAttribute(e,t)?this.dictionary[e].attributes[t]:i},se.prototype.hasMessage=function(e,t){return!!(this.hasLocale(e)&&this.dictionary[e].messages&&this.dictionary[e].messages[t])},se.prototype.hasAttribute=function(e,t){return!!(this.hasLocale(e)&&this.dictionary[e].attributes&&this.dictionary[e].attributes[t])},se.prototype.merge=function(e){this._merge(this.dictionary,e)},se.prototype.setMessage=function(e,t,i){this.hasLocale(e)||(this.dictionary[e]={messages:{},attributes:{}}),this.dictionary[e].messages[t]=i},se.prototype.setAttribute=function(e,t,i){this.hasLocale(e)||(this.dictionary[e]={messages:{},attributes:{}}),this.dictionary[e].attributes[t]=i},se.prototype._merge=function(e,t){var i=this;return W(e)&&W(t)?(Object.keys(t).forEach(function(n){if(W(t[n])){if(!e[n]){te(e,(r={},r[n]={},r));var r}return void i._merge(e[n],t[n])}te(e,(s={},s[n]=t[n],s));var s}),e):e};var oe=function(e){return function(t,i){var n=i[0],r=i[1],s=i[2],o=document.querySelector("input[name='"+n+"']");void 0===s&&(s=r,r=!1);var a=e(t,s,!0),l=e(o?o.value:n,s,!0);return!(!a.isValid()||!l.isValid())&&(a.isAfter(l)||r&&a.isSame(l))}},ae=function(e){return function(t,i){var n=i[0],r=i[1],s=i[2],o=document.querySelector("input[name='"+n+"']");void 0===s&&(s=r,r=!1);var a=e(t,s,!0),l=e(o?o.value:n,s,!0);return!(!a.isValid()||!l.isValid())&&(a.isBefore(l)||r&&a.isSame(l))}},le=function(e){return function(t,i){var n=i[0];return e(t,n,!0).isValid()}},ue=function(e){return function(t,i){var n,r,s,o="()";if(i.length>3){var a;n=(a=i)[0],r=a[1],o=a[2],s=a[3]}else{var l;n=(l=i)[0],r=l[1],s=l[2]}var u=e(n,s,!0),c=e(r,s,!0),f=e(t,s,!0);return!!(u.isValid()&&c.isValid()&&f.isValid())&&f.isBetween(u,c,"days",o)}},ce={make:function(e){return{date_format:le(e),after:oe(e),before:ae(e),date_between:ue(e)}},messages:{after:function(e,t){var i=t[0];return"The "+e+" must be after "+(t[1]?"or equal to ":"")+i+"."},before:function(e,t){var i=t[0];return"The "+e+" must be before "+(t[1]?"or equal to ":"")+i+"."},date_between:function(e,t){return"The "+e+" must be between "+t[0]+" and "+t[1]+"."},date_format:function(e,t){return"The "+e+" must be in the format "+t[0]+"."}},installed:!1},fe="en",de=!0,he=new se({en:{messages:{_default:function(e){return"The "+e+" value is not valid."},alpha_dash:function(e){return"The "+e+" field may contain alpha-numeric characters as well as dashes and underscores."},alpha_num:function(e){return"The "+e+" field may only contain alpha-numeric characters."},alpha_spaces:function(e){return"The "+e+" field may only contain alphabetic characters as well as spaces."},alpha:function(e){return"The "+e+" field may only contain alphabetic characters."},between:function(e,t){return"The "+e+" field must be between "+t[0]+" and "+t[1]+"."},confirmed:function(e){return"The "+e+" confirmation does not match."},credit_card:function(e){return"The "+e+" field is invalid."},decimal:function(e,t){void 0===t&&(t=["*"]);var i=t[0];return"The "+e+" field must be numeric and may contain "+(i&&"*"!==i?i:"")+" decimal points."},digits:function(e,t){return"The "+e+" field must be numeric and exactly contain "+t[0]+" digits."},dimensions:function(e,t){return"The "+e+" field must be "+t[0]+" pixels by "+t[1]+" pixels."},email:function(e){return"The "+e+" field must be a valid email."},ext:function(e){return"The "+e+" field must be a valid file."},image:function(e){return"The "+e+" field must be an image."},in:function(e){return"The "+e+" field must be a valid value."},ip:function(e){return"The "+e+" field must be a valid ip address."},max:function(e,t){return"The "+e+" field may not be greater than "+t[0]+" characters."},max_value:function(e,t){return"The "+e+" field must be "+t[0]+" or less."},mimes:function(e){return"The "+e+" field must have a valid file type."},min:function(e,t){return"The "+e+" field must be at least "+t[0]+" characters."},min_value:function(e,t){return"The "+e+" field must be "+t[0]+" or more."},not_in:function(e){return"The "+e+" field must be a valid value."},numeric:function(e){return"The "+e+" field may only contain numeric characters."},regex:function(e){return"The "+e+" field format is invalid."},required:function(e){return"The "+e+" field is required."},size:function(e,t){return"The "+e+" field must be less than "+t[0]+" KB."},url:function(e){return"The "+e+" field is not a valid URL."}},attributes:{},custom:{}}}),pe=function(e,t){void 0===t&&(t={init:!0,vm:null,fastExit:!0}),this.strictMode=de,this.$scopes={__global__:{}},this._createFields(e),this.errorBag=new z,this.fieldBag={},this.paused=!1,this.fastExit=t.fastExit||!1,this.$vm=t.vm,this.$deferred=[],this.$ready=!1,"function"==typeof moment&&this.installDateTimeValidators(moment),t.init&&this.init()},ve={dictionary:{},locale:{},rules:{}};ve.dictionary.get=function(){return he},ve.locale.get=function(){return fe},ve.rules.get=function(){return V},pe._merge=function(e,t){K(t)?V[e]=t:(V[e]=t.validate,K(t.getMessage)&&he.setMessage(fe,e,t.getMessage),t.messages&&he.merge(Object.keys(t.messages).reduce(function(i,n){var r=i;r[n]={messages:(s={},s[e]=t.messages[n],s)};var s;return r},{})))},pe._guardExtend=function(e,t){if(!K(t)){if(!K(t.validate))throw new C("Extension Error: The validator '"+e+"' must be a function or have a 'validate' method.");if(!K(t.getMessage)&&!W(t.messages))throw new C("Extension Error: The validator '"+e+"' must have a 'getMessage' method or have a 'messages' object.")}},pe.create=function(e,t){return new pe(e,t)},pe.extend=function(e,t){pe._guardExtend(e,t),pe._merge(e,t)},pe.installDateTimeValidators=function(e){if("function"!=typeof e)return Y("To use the date-time validators you must provide moment reference."),!1;if(ce.installed)return!0;var t=ce.make(e);return Object.keys(t).forEach(function(e){pe.extend(e,t[e])}),pe.updateDictionary({en:{messages:ce.messages}}),ce.installed=!0,!0},pe.remove=function(e){delete V[e]},pe.setLocale=function(e){void 0===e&&(e="en"),he.hasLocale(e)||Y("You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated."),fe=e},pe.setStrictMode=function(e){void 0===e&&(e=!0),de=e},pe.updateDictionary=function(e){he.merge(e)},pe.addLocale=function(e){if(e.name){this.updateDictionary((t={},t[e.name]=e,t));var t}else Y("Your locale must have a name property")},pe.prototype.addLocale=function(e){pe.addLocale(e)},pe.prototype._resolveScope=function(e){if("string"==typeof e)return e;if(K(e)){var t=e();return"string"==typeof t?t:"__global__"}return"__global__"},pe.prototype._resolveValuesFromGetters=function(e){var t=this;if(void 0===e&&(e="__global__"),!this.$scopes[e])return{};var i={};return Object.keys(this.$scopes[e]).forEach(function(n){var r=t.$scopes[e][n],s=r.getter,o=r.context,a=t._resolveScope(r.scope);if(s&&o&&("__global__"===e||a===e)){var l=o();if(l.disabled)return;i[n]={value:s(l),scope:a}}}),i},pe.prototype._createFields=function(e){var t=this;e&&Object.keys(e).forEach(function(i){t._createField(i,e[i])})},pe.prototype._createField=function(e,t,i){void 0===i&&(i="__global__"),i=this._resolveScope(i),this.$scopes[i]||(this.$scopes[i]={}),this.$scopes[i][e]||(this.$scopes[i][e]={});var n=this.$scopes[i][e];n.name=e,n.validations=this._normalizeRules(e,t,i),n.required=this._isRequired(n)},pe.prototype._normalizeRules=function(e,t,i){return t?"string"==typeof t?this._normalizeString(t):W(t)?this._normalizeObject(t):(Y("Your checks for '"+i+"."+e+"' must be either a string or an object."),{}):{}},pe.prototype._isRequired=function(e){return!(!e.validations||!e.validations.required)},pe.prototype._normalizeObject=function(e){var t=this,i={};return Object.keys(e).forEach(function(n){var r=[];if(r=!0===e[n]?[]:Array.isArray(e[n])?e[n]:[e[n]],!1===e[n]?delete i[n]:i[n]=r,ce.installed&&t._isADateRule(n)){var s=t._getDateFormat(i);t._containsValidation(i[n],s)||i[n].push(t._getDateFormat(i))}}),i},pe.prototype._getDateFormat=function(e){return e.date_format&&Array.isArray(e.date_format)?e.date_format[0]:null},pe.prototype._isADateRule=function(e){return!!~["after","before","date_between"].indexOf(e)},pe.prototype._containsValidation=function(e,t){return!!~e.indexOf(t)},pe.prototype._normalizeString=function(e){var t=this,i={};return e.split("|").forEach(function(e){var n=t._parseRule(e);if(n.name&&("required"===n.name&&(i.required=!0),i[n.name]=n.params,ce.installed&&t._isADateRule(n.name))){var r=t._getDateFormat(i);t._containsValidation(i[n.name],r)||i[n.name].push(t._getDateFormat(i))}}),i},pe.prototype._parseRule=function(e){var t=[],i=e.split(":")[0];return~e.indexOf(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:i,params:t}},pe.prototype._formatErrorMessage=function(e,t,i){void 0===i&&(i={});var n=this._getFieldDisplayName(e),r=this._getLocalizedParams(t,e.scope);if(!this.dictionary.hasLocale(fe)){var s=this.dictionary.getFieldMessage("en",e.name,t.name);return K(s)?s(n,r,i):s}var o=this.dictionary.getFieldMessage(fe,e.name,t.name);return K(o)?o(n,r,i):o},pe.prototype._getLocalizedParams=function(e,t){if(void 0===t&&(t="__global__"),~["after","before","confirmed"].indexOf(e.name)&&e.params&&e.params[0]){var i=this.$scopes[t][e.params[0]];return i&&i.name?[i.name]:[this.dictionary.getAttribute(fe,e.params[0],e.params[0])]}return e.params},pe.prototype._getFieldDisplayName=function(e){return e.as||this.dictionary.getAttribute(fe,e.name,e.name)},pe.prototype._test=function(e,t,i){var n=this,r=V[i.name];if(!r||"function"!=typeof r)throw new C("No such validator '"+i.name+"' exists.");var s=r(t,i.params,e.name);return K(s.then)?s.then(function(t){var r=!0,s={};return Array.isArray(t)?r=t.every(function(e){return e.valid}):(r=t.valid,s=t.data),r||n.errorBag.add(e.name,n._formatErrorMessage(e,i,s),i.name,e.scope),r}):(W(s)||(s={valid:s,data:{}}),s.valid||this.errorBag.add(e.name,this._formatErrorMessage(e,i,s.data),i.name,e.scope),s.valid)},pe.prototype.on=function(e,t,i,n){if(!t)throw new C("Cannot add a listener for non-existent field "+t+".");if(!K(n))throw new C("The "+e+" callback for field "+t+" is not callable.");this.$scopes[i][t].events[e]=n},pe.prototype.off=function(e,t,i){t||Y("Cannot remove a listener for non-existent field "+t+"."),this.$scopes[i][t].events[e]=void 0},pe.prototype._assignFlags=function(e){e.flags={untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:null,invalid:null,validated:!1,required:e.required,pending:!1};var t={};if(t[e.name]=e.flags,"__global__"!==e.scope){var i=te({},this.fieldBag["$"+e.scope],t);this.fieldBag=te({},this.fieldBag,(n={},n["$"+e.scope]=i,n));var n}else this.fieldBag=te({},this.fieldBag,t)},pe.prototype.attach=function(e,t,i){var n=this;void 0===i&&(i={});var r=function(){i.scope=n._resolveScope(i.scope),n.updateField(e,t,i);var r=n.$scopes[i.scope][e];r.scope=i.scope,r.as=i.prettyName,r.getter=i.getter,r.context=i.context,r.listeners=i.listeners||{detach:function(){}},r.el=r.listeners.el,r.events={},n._assignFlags(r),r.el&&K(r.el.setAttribute)&&r.el.setAttribute("data-vv-scope",r.scope),r.listeners.classes&&r.listeners.classes.attach(r),n._setAriaRequiredAttribute(r),n._setAriaValidAttribute(r,!0),i.initial&&n.validate(e,r.getter(r.context()),r.scope).catch(function(){})};(K(i.scope)?i.scope():i.scope)||this.$ready?r():this.$deferred.push(r)},pe.prototype.init=function(){return this.$ready=!0,this.$deferred.forEach(function(e){e()}),this.$deferred=[],this},pe.prototype.flag=function(e,t){var i=this._resolveField(e);i&&(Object.keys(i.flags).forEach(function(e){i.flags[e]=void 0!==t[e]?t[e]:i.flags[e]}),i.listeners&&i.listeners.classes&&i.listeners.classes.sync())},pe.prototype.append=function(e,t,i){void 0===i&&(i={}),i.scope=this._resolveScope(i.scope),this.$scopes[i.scope]&&this.$scopes[i.scope][e]||this.attach(e,t,i);var n=this.$scopes[i.scope][e],r=this._normalizeRules(e,t,i.scope);Object.keys(r).forEach(function(e){n.validations[e]=r[e]})},pe.prototype.updateField=function(e,t,i){void 0===i&&(i={});var n=G(i.scope+"."+e,this.$scopes,null),r=n?JSON.stringify(n.validations):"";this._createField(e,t,i.scope),((n=G(i.scope+"."+e,this.$scopes,null))?JSON.stringify(n.validations):"")!==r&&this.errorBag.remove(e,i.scope)},pe.prototype.clean=function(){var e=this;this.$vm&&K(this.$vm.$nextTick)&&this.$vm.$nextTick(function(){e.errorBag.clear()})},pe.prototype.detach=function(e,t){void 0===t&&(t="__global__"),this.$scopes[t]&&this.$scopes[t][e]&&(this.$scopes[t][e].listeners&&this.$scopes[t][e].listeners.detach(),this.errorBag.remove(e,t),delete this.$scopes[t][e])},pe.prototype.extend=function(e,t){pe.extend(e,t)},pe.prototype.getErrors=function(){return this.errorBag},pe.prototype.installDateTimeValidators=function(e){pe.installDateTimeValidators(e)},pe.prototype.remove=function(e){pe.remove(e)},pe.prototype.setLocale=function(e){this.dictionary.hasLocale(e)||Y("You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated."),fe=e},pe.prototype.setStrictMode=function(e){void 0===e&&(e=!0),this.strictMode=e},pe.prototype.updateDictionary=function(e){pe.updateDictionary(e)},pe.prototype.addScope=function(e){e&&!this.$scopes[e]&&(this.$scopes[e]={})},pe.prototype._resolveField=function(e,t){if(e&&e.indexOf(".")>-1&&!this.$scopes.__global__[e]){var i;t=(i=e.split("."))[0],e=i[1]}return t||(t="__global__"),this.$scopes[t]?this.$scopes[t][e]:null},pe.prototype._handleFieldNotFound=function(e,t){if(!this.strictMode)return Promise.resolve(!0);throw new C('Validating a non-existant field: "'+("__global__"===t?e:t+"."+e)+'". Use "attach()" first.')},pe.prototype._validate=function(e,t){var i=this;if(!e.required&&~[null,void 0,""].indexOf(t))return Promise.resolve(!0);var n=[],r=Object.keys(e.validations)[this.fastExit?"every":"some"](function(r){var s=i._test(e,t,{name:r,params:e.validations[r]});return K(s.then)?(n.push(s),!0):s});return Promise.all(n).then(function(e){return r&&e.every(function(e){return e})})},pe.prototype.validate=function(e,t,i){var n=this;if(void 0===i&&(i="__global__"),this.paused)return Promise.resolve(!0);var r=this._resolveField(e,i);return r?(this.errorBag.remove(r.name,r.scope),r.flags&&(r.flags.pending=!0),this._validate(r,t).then(function(e){return n._setAriaValidAttribute(r,e),r.flags&&(r.flags.pending=!1,r.flags.valid=e,r.flags.invalid=!e,r.flags.pending=!1,r.flags.validated=!0),r.events&&K(r.events.after)&&r.events.after({valid:e}),e})):this._handleFieldNotFound(e,i)},pe.prototype._setAriaValidAttribute=function(e,t){e.el&&!e.listeners.component&&e.el.setAttribute("aria-invalid",!t)},pe.prototype._setAriaRequiredAttribute=function(e){e.el&&!e.listeners.component&&e.el.setAttribute("aria-required",!!e.required)},pe.prototype.pause=function(){return this.paused=!0,this},pe.prototype.resume=function(){return this.paused=!1,this},pe.prototype.validateAll=function(e,t){var i=this;if(void 0===t&&(t="__global__"),this.paused)return Promise.resolve(!0);var n;e&&"string"!=typeof e?(n={},Object.keys(e).forEach(function(i){n[i]={value:e[i],scope:t}})):(this.errorBag.clear(e),n=this._resolveValuesFromGetters(e));var r=Object.keys(n).map(function(e){return i.validate(e,n[e].value,n[e].scope,!1)});return Promise.all(r).then(function(e){return e.every(function(e){return e})})},pe.prototype.validateScopes=function(){var e=this;return this.paused?Promise.resolve(!0):Promise.all(Object.keys(this.$scopes).map(function(t){return e.validateAll(t)})).then(function(e){return e.every(function(e){return e})})},Object.defineProperties(pe.prototype,ve);var me=function(e){return!!e&&(!(!Array.isArray(e)||!~e.indexOf("$validator"))||!(!W(e)||!e.$validator))},ge=function(e,t){return new pe(null,{init:!1,vm:e,fastExit:t.fastExit})},_e=function(e,t){var i={};return i.provide=function(){return this.$validator?{$validator:this.$validator}:{}},i.beforeCreate=function(){!this.$options.$validates&&this.$parent||(this.$validator=ge(this,t));var i=me(this.$options.inject);this.$validator||!t.inject||i||(this.$validator=ge(this,t)),(i||this.$validator)&&(!i&&this.$validator&&(e.util.defineReactive(this.$validator,"errorBag",this.$validator.errorBag),e.util.defineReactive(this.$validator,"fieldBag",this.$validator.fieldBag)),this.$options.computed||(this.$options.computed={}),this.$options.computed[t.errorBagName]=function(){return this.$validator.errorBag},this.$options.computed[t.fieldsBagName]=function(){return this.$validator.fieldBag})},i.mounted=function(){this.$validator&&this.$validator.init()},i},ye={touched:"touched",untouched:"untouched",valid:"valid",invalid:"invalid",pristine:"pristine",dirty:"dirty"},be=function(e,t,i){void 0===i&&(i={}),this.el=e,this.validator=t,this.enabled=i.enableAutoClasses,this.classNames=te({},ye,i.classNames||{}),this.component=i.component,this.listeners={}};be.prototype.reset=function(){this.detach(),this.remove(this.classNames.dirty),this.remove(this.classNames.touched),this.remove(this.classNames.valid),this.remove(this.classNames.invalid),this.attach(this.field)},be.prototype.sync=function(){this.addInteractionListeners(),this.enabled&&(this.toggle(this.classNames.dirty,this.field.flags.dirty),this.toggle(this.classNames.pristine,this.field.flags.pristine),this.toggle(this.classNames.valid,this.field.flags.valid),this.toggle(this.classNames.invalid,this.field.flags.invalid),this.toggle(this.classNames.touched,this.field.flags.touched),this.toggle(this.classNames.untouched,this.field.flags.untouched))},be.prototype.addFocusListener=function(){var e=this;this.listeners.focus=function(){e.remove(e.classNames.untouched),e.add(e.classNames.touched),e.field.flags.touched=!0,e.field.flags.untouched=!1,e.component||e.el.removeEventListener("focus",e.listeners.focus),e.listeners.focus=null},this.component?this.component.$once("focus",this.listeners.focus):this.el.addEventListener("focus",this.listeners.focus)},be.prototype.addInputListener=function(){var e=this,t=re(this.el);this.listeners.input=function(){e.remove(e.classNames.pristine),e.add(e.classNames.dirty),e.field.flags.dirty=!0,e.field.flags.pristine=!1,e.component||e.el.removeEventListener(t,e.listeners.input),e.listeners.input=null},this.component?this.component.$once("input",this.listeners.input):this.el.addEventListener(t,this.listeners.input)},be.prototype.addInteractionListeners=function(){this.listeners.focus||this.addFocusListener(),this.listeners.input||this.addInputListener()},be.prototype.attach=function(e){var t=this;this.field=e,this.add(this.classNames.pristine),this.add(this.classNames.untouched),this.addInteractionListeners(),this.listeners.after=function(e){t.remove(e.valid?t.classNames.invalid:t.classNames.valid),t.add(e.valid?t.classNames.valid:t.classNames.invalid)},this.validator.on("after",this.field.name,this.field.scope,this.listeners.after)},be.prototype.detach=function(){this.field&&(this.component?(this.component.$off("input",this.listeners.input),this.component.$off("focus",this.listeners.focus)):(this.el.removeEventListener("focus",this.listeners.focus),this.el.removeEventListener("input",this.listeners.input)),this.validator.off("after",this.field.name,this.field.scope))},be.prototype.add=function(e){this.enabled&&Q(this.el,e)},be.prototype.remove=function(e){this.enabled&&X(this.el,e)},be.prototype.toggle=function(e,t){t?this.add(e):this.remove(e)};var $e={locale:"en",delay:0,errorBagName:"errors",dictionary:null,strict:!0,fieldsBagName:"fields",enableAutoClasses:!1,classNames:{},events:"input|blur",inject:!0,fastExit:!0},xe=function(e,t,i,n){this.unwatch=void 0,this.callbacks=[],this.el=e,this.scope=W(t.value)?t.value.scope:U(e),this.binding=t,this.vm=i.context,this.component=i.child,this.options=te({},$e,n),this.fieldName=this._resolveFieldName(),this.model=this._resolveModel(i.data),this.classes=new be(e,this.vm.$validator,{component:this.component,enableAutoClasses:n.enableAutoClasses,classNames:n.classNames})};xe.prototype._resolveModel=function(e){if(this.binding.arg)return{watchable:!0,expression:this.binding.arg,lazy:!1};if(W(this.binding.value)&&this.binding.value.arg)return{watchable:!0,expression:this.binding.value.arg,lazy:!1};var t={watchable:!1,expression:null,lazy:!1},i=e.model||ie(e.directives,function(e){return"model"===e.name});return i?(t.expression=i.expression,t.watchable=/^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(i.expression)&&this._isExistingPath(i.expression),t.lazy=!!i.modifiers&&i.modifiers.lazy,t):t},xe.prototype._isExistingPath=function(e){var t=this.vm;return e.split(".").every(function(e){return!!Object.prototype.hasOwnProperty.call(t,e)&&(t=t[e],!0)})},xe.prototype._resolveFieldName=function(){return this.component?I(this.el,"name")||this.component.name:I(this.el,"name")||this.el.name},xe.prototype._hasFieldDependency=function(e){var t=this,i=!1;return!!e&&(W(e)?(Object.keys(e).forEach(function(t){if(/confirmed|after|before/.test(t))return i=e[t].split(",")[0],!1}),i):(e.split("|").every(function(e){return/\b(confirmed|after|before):/.test(e)?(i=e.split(":")[1],!1):!/\b(confirmed)/.test(e)||(i=t.fieldName+"_confirmation",!1)}),i))},xe.prototype._inputListener=function(){return this._validate(this.el.value)},xe.prototype._fileListener=function(){var e=this;return this._validate(ee(this.el.files)).then(function(t){!t&&e.binding.modifiers.reject&&(e.el.value="")})},xe.prototype._radioListener=function(){var e=document.querySelector('input[name="'+this.el.name+'"]:checked');return this._validate(e?e.value:null)},xe.prototype._checkboxListener=function(){var e=this,t=document.querySelectorAll('input[name="'+this.el.name+'"]:checked');t&&t.length?ee(t).forEach(function(t){e._validate(t.value)}):this._validate(null)},xe.prototype._validate=function(e){return this.component&&this.component.disabled||this.el.disabled?Promise.resolve(!0):this.vm.$validator.validate(this.fieldName,e,this.scope||U(this.el))},xe.prototype._getScopedListener=function(e){var t=this;return function(i){(!i||i===t.scope||i instanceof window.Event)&&e()}},xe.prototype._attachValidatorEvent=function(){var e=this,t=this._getScopedListener(this._getSuitableListener().listener.bind(this)),i=this._hasFieldDependency(ne(this.binding.expression,this.binding.value,this.el));i&&this.vm.$nextTick(function(){var n=document.querySelector("input[name='"+i+"']");n?(I(e.el,"validate-on")||e.options.events).split("|").forEach(function(i){n.addEventListener(i,t,!1),e.callbacks.push({name:i,listener:t,el:n})}):Y("Cannot find target field, no additional listeners were attached.")})},xe.prototype._getModeledListener=function(){var e=this;return this.model.watchable?function(){e._validate(G(e.model.expression,e.vm))}:null},xe.prototype._getSuitableListener=function(){var e,t={input:this.model.lazy?"change":"input",blur:"blur"};if("SELECT"===this.el.tagName)t.input="change",e={names:["change","blur"],listener:this._getModeledListener()||this._inputListener};else switch(this.el.type){case"file":t.input="change",t.blur=null,e={names:["change"],listener:this._fileListener};break;case"radio":t.input="change",t.blur=null,e={names:["change"],listener:this._getModeledListener()||this._radioListener};break;case"checkbox":t.input="change",t.blur=null,e={names:["change"],listener:this._getModeledListener()||this._checkboxListener};break;default:e={names:["input","blur"],listener:this._getModeledListener()||this._inputListener}}var i=I(this.el,"validate-on")||this.options.events;return e.names=i.split("|").filter(function(e){return null!==t[e]}).map(function(e){return t[e]||e}),e},xe.prototype._attachComponentListeners=function(){var e=this;this.componentListener=J(function(t){e._validate(t)},I(this.el,"delay")||this.options.delay),(I(this.el,"validate-on")||this.options.events).split("|").forEach(function(t){t&&("input"===t?e.component.$on("input",e.componentListener):"blur"===t?e.component.$on("blur",e.componentListener):e.component.$on(t,e.componentListener),e.componentPropUnwatch=e.component.$watch("value",e.componentListener))})},xe.prototype._attachFieldListeners=function(){var e=this;if(this.component)this._attachComponentListeners();else{var t=this._getSuitableListener(),i=J(t.listener.bind(this),I(this.el,"delay")||this.options.delay);~["radio","checkbox"].indexOf(this.el.type)?this.vm.$nextTick(function(){var n=document.querySelectorAll('input[name="'+e.el.name+'"]');ee(n).forEach(function(n){t.names.forEach(function(t){n.addEventListener(t,i,!1),e.callbacks.push({name:t,listener:i,el:n})})})}):t.names.forEach(function(t){e.el.addEventListener(t,i,!1),e.callbacks.push({name:t,listener:i,el:e.el})})}},xe.prototype._resolveValueGetter=function(){var e=this;if(this.model.watchable)return{context:function(){return e.vm},getter:function(t){return G(e.model.expression,t)}};if(this.component)return{context:function(){return e.component},getter:function(t){var i=I(e.el,"value-path");return i?G(i,e.component):t.value}};switch(this.el.type){case"checkbox":return{context:function(){return document.querySelectorAll('input[name="'+e.el.name+'"]:checked')},getter:function(e){return e&&e.length?ee(e).map(function(e){return e.value}):null}};case"radio":return{context:function(){return document.querySelector('input[name="'+e.el.name+'"]:checked')},getter:function(e){return e&&e.value}};case"file":return{context:function(){return e.el},getter:function(e){return ee(e.files)}};default:return{context:function(){return e.el},getter:function(e){return e.value}}}},xe.prototype._attachModelWatcher=function(e){var t=this,i=I(this.el,"validate-on")||this.options.events,n=J(this._getSuitableListener().listener.bind(this),I(this.el,"delay")||this.options.delay);i.split("|").forEach(function(i){if(~["input","change"].indexOf(i)){var r=J(function(e){t.vm.$validator.validate(t.fieldName,e,t.scope||U(t.el))},I(t.el,"delay")||t.options.delay);return void(t.unwatch=t.vm.$watch(e,r,{deep:!0}))}t.el.addEventListener(i,n,!1),t.callbacks.push({name:i,listener:n,el:t.el})})},xe.prototype.attach=function(){var e=this,t=this._resolveValueGetter(),i=t.context,n=t.getter;this.vm.$validator.attach(this.fieldName,ne(this.binding.expression,this.binding.value,this.el),{scope:function(){return e.scope||U(e.el)},prettyName:I(this.el,"as")||this.el.title,context:i,getter:n,listeners:this,initial:this.binding.modifiers.initial}),this.binding.modifiers.disable||(this._attachValidatorEvent(),this.model.watchable?this._attachModelWatcher(this.model.expression):this._attachFieldListeners())},xe.prototype.detach=function(){this.component&&(this.component.$off("input",this.componentListener),this.component.$off("blur",this.componentListener),K(this.componentPropUnwatch)&&this.componentPropUnwatch()),this.unwatch&&this.unwatch(),this.classes.detach(),this.callbacks.forEach(function(e){e.el.removeEventListener(e.name,e.listener)}),this.callbacks=[]};var Ae=[],Fe=function(e){return{bind:function(t,i,n){if(!n.context.$validator){var r=n.context.$options._componentTag;return void Y("No validator instance is present on "+(r?'component "'+r+'"':"un-named component")+", did you forget to inject '$validator'?")}var s=new xe(t,i,n,e);s.attach(),Ae.push({vm:n.context,el:t,instance:s})},update:function(e,t,i){var n=t.expression,r=t.value,s=i.context,o=ie(Ae,function(t){return t.vm===s&&t.el===e}).instance;if(n&&o.cachedExp!==JSON.stringify(r)){o.cachedExp=JSON.stringify(r);var a=W(r)?r.scope||U(e):U(e);s.$validator.updateField(o.fieldName,ne(n,r,e),{scope:a||"__global__"})}},unbind:function(e,t,i){var n=t.value,r=i.context,s=ie(Ae,function(t){return t.vm===r&&t.el===e});if(void 0!==s){var o=W(n)?n.scope:U(e)||"__global__";r.$validator.detach(s.instance.fieldName,o),Ae.splice(Ae.indexOf(s),1)}}}},we=function(e){return Array.isArray(e)?e.reduce(function(e,t){return~t.indexOf(".")?e[t.split(".")[1]]=t:e[t]=t,e},{}):e};return{install:function(e,t){var i=te({},$e,t);i.dictionary&&pe.updateDictionary(i.dictionary),pe.setLocale(i.locale),pe.setStrictMode(i.strict),e.mixin(_e(e,i)),e.directive("validate",Fe(i))},mapFields:function(e){var t=we(e);return Object.keys(t).reduce(function(e,i){var n=t[i];return e[i]=function(){if(this.$validator.fieldBag[n])return this.$validator.fieldBag[n];if(n.indexOf(".")<=0)return{};var e=n.split("."),t=e[0],i=e[1];return G("$"+t+"."+i,this.$validator.fieldBag,{})},e},{})},Validator:pe,ErrorBag:z,Rules:V,version:"2.0.0-rc.6"}});
Vue.component('category', {
  template: `
  <option :value="item.name.replace(/&nbsp;/gi,'')" v-html="item.name" :disabled="item.type === 'container'"></option>
  `,
  props: ['item']
});

function loopOverCategories(categories, newCategories, prefix) {
  for (var key in categories) {
    if(categories.hasOwnProperty(key)){
      parseCategories(categories[key], newCategories, prefix);
    }
  }
  return newCategories;
}

function parseCategories(category, newCategories, prefix){
  var categoryToAdd = {
    name: prefix + category.name,
    type: category.type
  };
  newCategories.push(categoryToAdd);
  if(category.children) {
    loopOverCategories(category.children, newCategories, prefix + '&nbsp;&nbsp;&nbsp;');
  }
  return newCategories;
}

Vue.component('category-select', {
  template: `
  <div class="form-group">
    <label class="form-group__label" for="category">Category</label>
    <select id="category" @change="categoryChosen" v-model="chosenCategory">
      <option></option>
      <category v-for="category in arrayOfCategories" :item="category"></category>
    </select>
  </div>
  `,
  props: ['categories'],
  data: function(){
    return {
      chosenCategory: ''
    }
  },
  computed: {
    arrayOfCategories: function(){
      var categories = this.categories;
      var newCategories = [];
      loopOverCategories(categories, newCategories, '');
      return newCategories;
    }
  },
  methods: {
    categoryChosen: function(){
      this.$emit('change', this.chosenCategory);
    }
  }
});

Vue.component('container', {
  template: `
  <component v-for="category in item.children" :is="category.type" :item="category"></component>
  `,
  props: ['item']
});

Vue.component('customization', {
  template: `
  <fieldset>
    <legend>Customization</legend>
    <label for="customizable">Is this clothing customizable?</label>
    <div>
      <input type="radio" v-model="customizable" required name="customizable" @change="toggleCustomizable" id="customizableYes" :value="true" :checked="customizable" /> <label for="customizableYes">Yes</label>
    </div>
    <div>
      <input type="radio" v-model="customizable" required name="customizable" @change="toggleCustomizable" id="customizableNo" :value="false" :checked="customizable" /> <label for="customizableNo">No</label>
    </div>
    <div v-if="customizable">
      <div v-for="(item, index) in customizableItems">
        <label :for="'itemNumber'+index">Item ID</label>
        <input type="text" :name="'itemNumber'+index" :id="'itemNumber'+index" v-model="item.id" @blur="addedCustomizableItem()" placeholder="e.g. 001" />
      </div>
      <button type="button" @click="addCustomizableItem">Add another customizable item?</button>
    </div>
  </fieldset>
  `,
  data: function(){
    return {
      customizable: false,
      customizableItems: [{id:''}]
    }
  },
  methods: {
    addCustomizableItem: function(value) {
      this.customizableItems.push({id:''});
    },
    addedCustomizableItem: function(customizableItems) {
      this.$emit('change', this.customizableItems)
    },
    toggleCustomizable: function(){
      this.$emit('toggled', this.customizable);
    }
  }
});

Vue.component('style-checkboxes', {
  template: `
  <fieldset class="style-form__checkbox-wrapper">
    <legend class="style-form__checkbox-title">Select styles</legend>
    <div v-for="style in styles" class="style-form__checkbox-container">
      <input :disabled="shouldBeDisabled(style)" @change="checkedItem(selectedStyles)" v-model="selectedStyles" type="checkbox" :value="style" :name="style" :id="'selectStyles' + style" />
      <label v-bind:for="'selectStyles' + style" v-bind:class="'style style--' + style.toLowerCase()">{{style}}</label>
    </div>
  </fieldset>
  `,
  props: ['styles'],
  data: function() {
    return {
      selectedStyles: []
    }
  },
  methods: {
    checkedItem: function(styles) {
      this.$emit('change', styles);
    },
    shouldBeDisabled: function(value) {
      if(this.selectedStyles.indexOf(value) > -1){
        return false;
      }
      return this.selectedStyles.length >= 5;
    }
  }
});

var customValidationMsgs = {
  en: {
    custom: {
      ratingMature: {
        regex: 'Please give a letter grade - SS, S, A, B, or C'
      }
    }
  }
};

Vue.component('style-ratings', {
  template: `
  <fieldset>
    <legend>Give ratings for selected styles</legend>
    <div v-if="styles.length < 5">
      <p>Select 5 styles above.</p>
    </div>
    <div v-if="styles.length === 5" v-for="style in styles">
      <label :for="'rating' + style">{{style}}</label>
      <input type="text" maxlength="3" :id="'rating' + style" :name="'rating' + style" v-model="styleRatings[style]" @blur="addedRating" v-validate="{ rules: { regex: /^[SSss]{2}|[ABCSabcs]{1,2}$/ }}" />
      <span v-show="errors.has('rating' + style)">{{ errors.first('rating' + style)}}</span>
    </div>
  </fieldset>
  `,
  props: ['styles'],
  data: function(){
    return {
      styleRatings: {}
    }
  },
  methods: {
    addedRating: function(){
      this.$emit('change', this.styleRatings);
    }
  }
});

Vue.component('tags', {
  template: `
  <fieldset class="style-form__checkbox-wrapper">
    <legend class="style-form__checkbox-title">Select tags</legend>
    <div v-for="tag in tags" class="style-form__checkbox-container">
      <input type="checkbox" v-bind:name="tag" @change="addedTag" v-model="selectedTags" :value="tag" v-bind:id="'selectTags' + tag" /> <label v-bind:for="'selectTags' + tag">{{tag}}</label>
    </div>
  </fieldset>
  `,
  props: ['tags'],
  data: function(){
    return {
      selectedTags: []
    }
  },
  methods: {
    addedTag: function(){
      this.$emit('change', this.selectedTags);
    }
  }
});

var nikkiData = new Vuex.Store({
  state: {
    styles: ['Gorgeous', 'Simple', 'Elegance', 'Lively', 'Mature', 'Cute', 'Sexy', 'Pure', 'Warm', 'Cool'],
    tags: ['Sun Care', 'Dancer', 'Floral', 'Winter', 'Britain', 'Swimsuit', 'Shower', 'Kimono', 'Pajamas', 'Wedding', 'Army', 'Office', 'Apron', 'Cheongsam', 'Maiden', 'Evening Gown', 'Navy', 'Traditional', 'Bunny', 'Lady', 'Lolita', 'Gothic', 'Sports', 'Harajuku', 'Preppy', 'Unisex', 'Future', 'Fairy', 'Rock', 'Denim', 'Pet', 'Goddess', 'POP', 'Homewear', 'Chinese Classical', 'Hindu', 'Republic of China', 'European', 'Swordsman', 'Rain', 'Modern China', 'Dryad', 'Bohemia', 'Paramedics'],
    categories: [
      {
        name: 'Hair',
        type: 'category'
      },
      {
        name: 'Dress',
        type: 'category'
      },
      {
        name: 'Coat',
        type: 'category'
      },
      {
        name: 'Tops',
        type: 'category'
      },
      {
        name: 'Bottoms',
        type: 'category'
      },
      {
        name: 'Hosiery',
        type: 'category'
      },
      {
        name: 'Shoes',
        type: 'category'
      },
      {
        name: 'Accessory',
        type: 'container',
        children: [
          {
            name: 'Headwear',
            type: 'container',
            children: [
              {
                name: 'Hair ornaments',
                type: 'category'
              },
              {
                name: 'Veil',
                type: 'category'
              },
              {
                name: 'Hairpin',
                type: 'category'
              },
              {
                name: 'Ear',
                type: 'category'
              }
            ]
          },
          {
            name: 'Earrings',
            type: 'category'
          },
          {
            name: 'Necklace',
            type: 'container',
            children: [
              {
                name: 'Scarf',
                type: 'category'
              },
              {
                name: 'Necklace',
                type: 'category'
              }
            ]
          },
          {
            name: 'Bracelet',
            type: 'container',
            children: [
              {
                name: 'Right hand ornaments',
                type: 'category'
              },
              {
                name: 'Left hand ornaments',
                type: 'category'
              },
              {
                name: 'Glove',
                type: 'category'
              }
            ]
          },
          {
            name: 'Handheld',
            type: 'container',
            children: [
              {
                name: 'Right hand holding',
                type: 'category'
              },
              {
                name: 'Left hand holding',
                type: 'category'
              },
              {
                name: 'Both hand holding',
                type: 'category'
              }
            ]
          },
          {
            name: 'Waist',
            type: 'category'
          },
          {
            name: 'Special',
            type: 'container',
            children: [
              {
                name: 'Face',
                type: 'category'
              },
              {
                name: 'Brooch',
                type: 'category'
              },
              {
                name: 'Tattoo',
                type: 'category'
              },
              {
                name: 'Wing',
                type: 'category'
              },
              {
                name: 'Tail',
                type: 'category'
              },
              {
                name: 'Foreground',
                type: 'category'
              },
              {
                name: 'Background',
                type: 'category'
              },
              {
                name: 'Head ornaments',
                type: 'category'
              },
              {
                name: 'Ground',
                type: 'category'
              },
              {
                name: 'Skin',
                type: 'category'
              }
            ]
          }
        ]
      }
    ],
    clothing: {
      '001': {
        name: 'Nikki\'s Pinky',
        hearts: 2,
        style: {
          simple: 's',
          pure: 'a',
          lively: 'a',
          warm: 'a',
          cute: 'a'
        },
        id: '001',
        tags: [],
        customizable: false,
        otherStyles: false
      },
      '004': {
        name: 'Sporty Teenager',
        hearts: 3,
        style: {
          simple: 's',
          pure: 's',
          lively: 'a',
          cool: 'a',
          cute: 'a'
        },
        id: '004',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      },
      '007': {
        name: 'Elegant Nobleman',
        hearts: 2,
        style: {
          simple: 'b',
          pure: 'b',
          lively: 'a',
          cool: 's',
          cute: 's'
        },
        id: '007',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      },
      '010': {
        name: 'Perfect Senior',
        hearts: 2,
        style: {
          simple: 's',
          pure: 'a',
          lively: 'b',
          cool: 'a',
          cute: 'a'
        },
        id: '010',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      }
    }
  },
  mutations: {
    add: function(state, newItems){
      Object.assign(state, newItems)
    }
  }
});

Vue.use(VeeValidate);

var app = new Vue({
  el: '#nikki',
  data: {
    nikkiData: nikkiData.state,
    clothingFormData: {
      id: '',
      category: '',
      name: '',
      hearts: 0,
      clothingStyles: [],
      ratings: {},
      tags: [],
      customizable: false,
      customizableItems: []
    }
  },
  computed: {
    orderedStyles: function() {
      return this.nikkiData.styles.sort()
    },
    orderedTags: function(){
      return this.nikkiData.tags.sort()
    },
    fullHearts: function() {
      return this.clothingFormData.hearts >= 6
    },
    reformatObject: function(){
      var data = this.clothingFormData;
      var dataID = data.id;
      var dataObject = {};
      dataObject[dataID] = {
        name: data.name,
        hearts: data.hearts,
        category: data.category,
        style: data.ratings,
        tags: data.tags,
        customizable: data.customizable,
        otherStyles: data.customizableItems
      };
      return dataObject;
    },
    jsonData: function(){
      return JSON.stringify(this.reformatObject, null, 2)
    }
  },
  methods: {
    updateStyleArray: function(value) {
      this.clothingFormData.clothingStyles = value;
    },
    selectedHeartsClass: function(num) {
      return this.clothingFormData.hearts >=num ? 'form-group__heart--selected form-group__heart' : 'form-group__heart';
    },
    updateCustomItems: function(items) {
      this.clothingFormData.customizableItems = items;
    },
    updateRatings: function(ratings) {
      this.clothingFormData.ratings = ratings;
    },
    updateTags: function(tags) {
      this.clothingFormData.tags = tags;
    },
    updateCustomizable: function(customizable) {
      this.clothingFormData.customizable = customizable;
    },
    updateCategory: function(category) {
      this.clothingFormData.category = category;
    }
  }
});

app.$validator.updateDictionary(customValidationMsgs);
