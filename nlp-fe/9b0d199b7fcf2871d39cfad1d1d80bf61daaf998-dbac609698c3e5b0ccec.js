(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1A+w":function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"definitions_list_get",(function(){return p}));var o={};t.r(o),t.d(o,"data_domains_all",(function(){return v})),t.d(o,"data_domain_syns_dict",(function(){return b})),t.d(o,"data_domain_get",(function(){return g})),t.d(o,"data_domain_edit",(function(){return j}));var a={};t.r(a),t.d(a,"data_word_edit",(function(){return P})),t.d(a,"data_word_delete",(function(){return x})),t.d(a,"data_word_sentiment_of_synonym",(function(){return R})),t.d(a,"data_word_proper_of_synonym",(function(){return A})),t.d(a,"data_word_add_poswords",(function(){return S})),t.d(a,"data_word_remove_words",(function(){return I})),t.d(a,"data_word_remove_synonym",(function(){return X}));t("91GP"),t("VRzm"),t("Btvt");var i=t("o0o1"),c=t.n(i),d=(t("ls82"),t("XRP5")),u=t("KPRX");function s(n,e,t,r,o,a,i){try{var c=n[a](i),d=c.value}catch(u){return void t(u)}c.done?e(d):Promise.resolve(d).then(r,o)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(n){s(a,r,o,i,c,"next",n)}function c(n){s(a,r,o,i,c,"throw",n)}i(void 0)}))}}var w="//"+{}.ADMIN_API_HOST;function p(n){return f(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(w+"/api/oxford/definition/"+n);case 2:if(!(t=e.sent)){e.next=6;break}return t=Object(u.a)(t),e.abrupt("return",t);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})))}t("KKXr");var y=t("MAR7"),l=t("tsqr");function m(n,e,t,r,o,a,i){try{var c=n[a](i),d=c.value}catch(u){return void t(u)}c.done?e(d):Promise.resolve(d).then(r,o)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(n){m(a,r,o,i,c,"next",n)}function c(n){m(a,r,o,i,c,"throw",n)}i(void 0)}))}}var _="//"+{}.ADMIN_API_HOST;function v(n){return"object"==typeof window&&window.isLoading&&window.isLoading("domains"),function(){var n=h(c.a.mark((function n(e){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)(_+"/api/data/domains");case 2:if(!(t=n.sent)){n.next=7;break}return t=Object(u.a)(t),"object"==typeof window&&window.doneLoading&&window.doneLoading("domains"),n.abrupt("return",t);case 7:return"object"==typeof window&&window.isLoading&&window.doneLoading("domains"),n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function b(n){return"object"==typeof window&&window.isLoading&&window.isLoading("domain"),function(){var e=h(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(_+"/api/data/domain_syns_of_syns/"+n);case 2:if(!(r=e.sent)){e.next=6;break}return setTimeout((function(){"object"==typeof window&&window.doneLoading&&window.doneLoading("domain")}),500),e.abrupt("return",r);case 6:return"object"==typeof window&&window.doneLoading&&window.doneLoading("domain"),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}function g(n){return"object"==typeof window&&window.isLoading&&window.isLoading("data_domain_get"),function(){var e=h(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(_+"/api/data/domain/"+n);case 2:if(!(r=e.sent)){e.next=7;break}return r=Object(u.a)(r),"object"==typeof window&&window.doneLoading&&window.doneLoading("data_domain_get"),e.abrupt("return",r);case 7:return"object"==typeof window&&window.doneLoading&&window.doneLoading("data_domain_get"),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}function j(n){return"object"==typeof window&&window.isLoading&&window.isLoading("data_domain_edit"),Array.isArray(n.syns)||(n.syns=(n.syns||"").split(",").map((function(n){return n.trim()})).filter((function(n){return!!n}))),Array.isArray(n.syns1)||(n.syns1=(n.syns1||"").split(",").map((function(n){return n.trim()})).filter((function(n){return!!n}))),function(){var e=h(c.a.mark((function e(t,r){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(_+"/api/data/domain/"+n.key,n);case 2:if(!(o=e.sent)){e.next=8;break}return l.a.success('edited domain "'+n.key+'"'),t(Object(y.RX__search_now)()),"object"==typeof window&&window.doneLoading&&window.doneLoading("data_domain_edit"),e.abrupt("return",o);case 8:return"object"==typeof window&&window.doneLoading&&window.doneLoading("data_domain_edit"),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}var O=t("vDqi"),L=t.n(O),k="//"+{}.ADMIN_API_HOST;function P(n){return console.log("attempting to edit word row: ",n),function(e){return"object"==typeof window&&window.isLoading&&window.isLoading("word"),L()({method:"put",url:k+"/api/data/word/"+n.key,data:n}).then((function(){l.a.success('edited word "'+n.key+'"'),e(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),l.a.error("could not edit key="+n.key,10)})).then((function(){"object"==typeof window&&window.doneLoading&&window.doneLoading("word")}))}}function x(n){return console.error("attempting to delete word row: ",n),function(e){return"object"==typeof window&&window.isLoading&&window.isLoading("word"),L()({method:"delete",url:k+"/api/data/word/"+n}).then((function(){l.a.success('edited word "'+n+'"'),e(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),l.a.error("could not edit key="+n,10)})).then((function(){"object"==typeof window&&window.doneLoading&&window.doneLoading("word")}))}}function R(n,e,t){return function(r){return L()({method:"put",url:k+"/api/data/word_sentiment_of_synonym",data:{key:n,synonym:e,sentiment:t}}).then((function(){l.a.success('edited synonym="'+e+'" sentiment="'+t+'"'),r(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),l.a.error("could not edit key="+n,10)}))}}function A(n,e,t){return function(r){return L()({method:"put",url:k+"/api/data/word_proper_of_synonym/"+n+"/"+e,data:{proper:t}}).then((function(){l.a.success('edited synonym="'+e+'" proper="'+t+'"'),r(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),l.a.error("could not edit key="+n,10)}))}}function S(n,e,t){return function(r){var o=t.split(",").map((function(n){return n.trim()}));if(o&&o.length)return L()({method:"put",url:k+"/api/data/word_add_poswords",data:{key:n,pos:e,poswords:o}}).then((function(){l.a.success('added poswords="'+t+'" to pos="'+e+'"'),r(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(r){console.error(r),l.a.error("could not save key="+n+", pos="+e+", poswords="+t,10)}))}}function I(n,e){return function(t){var r=e.split(",").map((function(n){return n.trim()}));if(r&&r.length)return L()({method:"put",url:k+"/api/data/word_remove_words",data:{key:n,words:r}}).then((function(){l.a.success('removed poswords="'+e+'" from key="'+n+'"'),t(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),l.a.error("could not save key="+n+", words="+e,10)}))}}function X(n,e){return function(t){return L()({method:"put",url:k+"/api/data/word_remove_synonym/"+n+"/"+e,data:{}}).then((function(){l.a.success('removed synonym="'+e+'" from key="'+n+'"'),t(Object(y.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),l.a.error('could not remove synonym="'+e+'" from key="'+n+'"',10)}))}}e.a=Object.assign({},r,o,a)},XRP5:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return y})),t.d(e,"c",(function(){return w}));t("HAE/"),t("WLL4"),t("jm62"),t("8+KV"),t("0l/t"),t("ioFf"),t("rGqo"),t("yt8O"),t("RW0V");var r=t("rePB");t("VRzm"),t("Btvt"),t("LK8F"),t("rE2o"),t("XfO3"),t("HEwt"),t("f3/d"),t("a1Th"),t("h7Nl"),t("Oyvg"),t("/8Fb"),t("Tze0"),t("pIFo"),t("KKXr"),t("bWfx");function o(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,d=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){d=!0,i=n},f:function(){try{c||null==t.return||t.return()}finally{if(d)throw i}}}}function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");return e&&(e="?"+e),e}if("object"==typeof window){var c={object_from_querystring:function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={},r=e.replace("?","").split("&"),a=o(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;if(i){var c=i.split("="),d=c[0];d&&(t[d]=c[1]||"")}}}catch(s){a.e(s)}finally{a.f()}for(var u in t)t[u]=decodeURIComponent(t[u]||"").trim();return t},querystring_from_object:i,querystring_replace_key_value:function(n,e,t){n=u(n,"&"),n=u(n,"?");var r=JSON.parse('{"'+decodeURI(n).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');r[e]=t;for(var o="?",a=0,i=Object.entries(r);a<i.length;a++){var c=i[a];o+=c[0]+"=",o+=c[1]+"&"}return u(o,"&")}};for(var d in window.__=window.__||{},c)window.__[d]=c[d]}function u(n,e){return"]"===e&&(e="\\]"),"\\"===e&&(e="\\\\"),n.replace(new RegExp("^["+e+"]+|["+e+"]+$","g"),"")}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function w(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!!n&&("object"==typeof window&&"object"==typeof document&&new Promise((function(e,r){var o=document.createElement("script");for(var a in o.async=!0,o.defer=!0,t)o[a]=t[a];function i(n,t){(t||!o.readyState||/loaded|complete/.test(o.readyState))&&(o.onload=null,o.onreadystatechange=null,o=void 0,t?r():e())}o.onload=i,o.onreadystatechange=i,o.src=n,window.document.body.append(o),e(!0)})))}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=f({method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrer:"no-referrer",headers:{}},t),e&&(n+=i(e)),fetch(n+i(e),{method:t.method,mode:t.cors,cache:t.cache,credentials:t.credentials,headers:t.headers,redirect:t.redirect,referrer:t.referrer}).then((function(n){return n.json()})).then((function(n){return n.data}))}function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(n,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(e)}).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=9b0d199b7fcf2871d39cfad1d1d80bf61daaf998-dbac609698c3e5b0ccec.js.map