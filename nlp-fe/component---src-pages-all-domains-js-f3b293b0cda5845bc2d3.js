(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1A+w":function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"definitions_list_get",(function(){return l}));var o={};e.r(o),e.d(o,"data_domains_all",(function(){return v})),e.d(o,"data_domain_syns_dict",(function(){return b})),e.d(o,"data_domain_get",(function(){return g})),e.d(o,"data_domain_edit",(function(){return k}));var a={};e.r(a),e.d(a,"data_word_edit",(function(){return A})),e.d(a,"data_word_delete",(function(){return E})),e.d(a,"data_word_sentiment_of_synonym",(function(){return L})),e.d(a,"data_word_proper_of_synonym",(function(){return D})),e.d(a,"data_word_add_poswords",(function(){return R})),e.d(a,"data_word_remove_words",(function(){return P})),e.d(a,"data_word_remove_synonym",(function(){return I}));e("91GP"),e("VRzm"),e("Btvt");var i=e("o0o1"),c=e.n(i),u=(e("ls82"),e("t67i")),s=e("H7RL");function d(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function p(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){d(a,r,o,i,c,"next",n)}function c(n){d(a,r,o,i,c,"throw",n)}i(void 0)}))}}var f="//"+{}.ADMIN_API_HOST;function l(n){return p(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)(f+"/api/oxford/definition/"+n);case 2:if(!(e=t.sent)){t.next=6;break}return e=Object(s.a)(e),t.abrupt("return",e);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})))}e("KKXr");var m=e("BEt8"),_=e("tsqr");function w(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){w(a,r,o,i,c,"next",n)}function c(n){w(a,r,o,i,c,"throw",n)}i(void 0)}))}}var y="//"+{}.ADMIN_API_HOST;function v(n){return window.isLoading("domains"),function(){var n=h(c.a.mark((function n(t){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(y+"/api/data/domains");case 2:if(!(e=n.sent)){n.next=7;break}return e=Object(s.a)(e),window.doneLoading("domains"),n.abrupt("return",e);case 7:return window.doneLoading("domains"),n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function b(n){return window.isLoading("domain"),function(){var t=h(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)(y+"/api/data/domain_syns_of_syns/"+n);case 2:if(!(r=t.sent)){t.next=6;break}return setTimeout((function(){window.doneLoading("domain")}),500),t.abrupt("return",r);case 6:return window.doneLoading("domain"),t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}function g(n){return window.isLoading("data_domain_get"),function(){var t=h(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)(y+"/api/data/domain/"+n);case 2:if(!(r=t.sent)){t.next=7;break}return r=Object(s.a)(r),window.doneLoading("data_domain_get"),t.abrupt("return",r);case 7:return window.doneLoading("data_domain_get"),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}function k(n){return window.isLoading("data_domain_edit"),Array.isArray(n.syns)||(n.syns=(n.syns||"").split(",").map((function(n){return n.trim()})).filter((function(n){return!!n}))),Array.isArray(n.syns1)||(n.syns1=(n.syns1||"").split(",").map((function(n){return n.trim()})).filter((function(n){return!!n}))),function(){var t=h(c.a.mark((function t(e,r){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)(y+"/api/data/domain/"+n.key,n);case 2:if(!(o=t.sent)){t.next=8;break}return _.a.success('edited domain "'+n.key+'"'),e(Object(m.RX__search_now)()),window.doneLoading("data_domain_edit"),t.abrupt("return",o);case 8:return window.doneLoading("data_domain_edit"),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}var x=e("vDqi"),O=e.n(x),j="//"+{}.ADMIN_API_HOST;function A(n){return console.log("attempting to edit word row: ",n),function(t){return window.isLoading("word"),O()({method:"put",url:j+"/api/data/word/"+n.key,data:n}).then((function(){_.a.success('edited word "'+n.key+'"'),t(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),_.a.error("could not edit key="+n.key,10)})).then((function(){window.doneLoading("word")}))}}function E(n){return console.error("attempting to delete word row: ",n),function(t){return window.isLoading("word"),O()({method:"delete",url:j+"/api/data/word/"+n}).then((function(){_.a.success('edited word "'+n+'"'),t(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),_.a.error("could not edit key="+n,10)})).then((function(){window.doneLoading("word")}))}}function L(n,t,e){return function(r){return O()({method:"put",url:j+"/api/data/word_sentiment_of_synonym",data:{key:n,synonym:t,sentiment:e}}).then((function(){_.a.success('edited synonym="'+t+'" sentiment="'+e+'"'),r(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),_.a.error("could not edit key="+n,10)}))}}function D(n,t,e){return function(r){return O()({method:"put",url:j+"/api/data/word_proper_of_synonym/"+n+"/"+t,data:{proper:e}}).then((function(){_.a.success('edited synonym="'+t+'" proper="'+e+'"'),r(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(t){console.error(t),_.a.error("could not edit key="+n,10)}))}}function R(n,t,e){return function(r){var o=e.split(",").map((function(n){return n.trim()}));if(o&&o.length)return O()({method:"put",url:j+"/api/data/word_add_poswords",data:{key:n,pos:t,poswords:o}}).then((function(){_.a.success('added poswords="'+e+'" to pos="'+t+'"'),r(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(r){console.error(r),_.a.error("could not save key="+n+", pos="+t+", poswords="+e,10)}))}}function P(n,t){return function(e){var r=t.split(",").map((function(n){return n.trim()}));if(r&&r.length)return O()({method:"put",url:j+"/api/data/word_remove_words",data:{key:n,words:r}}).then((function(){_.a.success('removed poswords="'+t+'" from key="'+n+'"'),e(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),_.a.error("could not save key="+n+", words="+t,10)}))}}function I(n,t){return function(e){return O()({method:"put",url:j+"/api/data/word_remove_synonym/"+n+"/"+t,data:{}}).then((function(){_.a.success('removed synonym="'+t+'" from key="'+n+'"'),e(Object(m.RX__search_thesaurus)({force:!0}))})).catch((function(e){console.error(e),_.a.error('could not remove synonym="'+t+'" from key="'+n+'"',10)}))}}t.a=Object.assign({},r,o,a)},BnG6:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),a=e("r8ck"),i=(e("VRzm"),e("Btvt"),e("o0o1")),c=e.n(i),u=(e("ls82"),e("ANjH")),s=e("/MKj"),d=e("BEt8"),p=e("PMNF"),f=e("1A+w"),l=e("vOnD").a.div.withConfig({displayName:"AllDomainstyled__StyledDomains",componentId:"sc-13l5a66-0"})(["a,b{font-weight:bold;color:var(--color-accent-dark);}div.line{font-size:0.75rem;margin:0;padding:0.25rem 0.25rem 0.25rem 1rem;&.odd{background:#efefef;}.key{}.value{a{color:var(--color-link);}}}#domains_minimap{position:fixed;top:0;right:0;height:100%;z-index:1000;background:white;cursor:default;border-right:solid 17.5px white;border-left:solid 17.5px white;box-sizing:content-box;}#domains_content{white-space:nowrap;}"]),m=e("t67i"),_=e("TJpk");function w(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){w(a,r,o,i,c,"next",n)}function c(n){w(a,r,o,i,c,"throw",n)}i(void 0)}))}}var y=function(n){var t,e;function r(t){var e;return console.error("EDIT DOMAIN REFRESHED"),(e=n.call(this,t)||this).getAllDomains=h(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.props.api_actions.data_domains_all();case 2:t=n.sent,e.setState({all_domains:t||[]});case 4:case"end":return n.stop()}}),n)}))),e.componentDidMount=h(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getAllDomains();case 2:setTimeout(h(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(m.c)("/scripts/pagemap.min.js");case 2:setTimeout((function(){window.pagemap&&window.pagemap(document.querySelector("#domains_minimap"),{viewport:null,styles:{b:"hsl(90, 100%, 33%)",span:"hsl(200, 50%, 50%)"},back:"rgba(0,0,0,0.0)",view:"rgba(0,0,0,0.25)",drag:"rgba(0,0,0,0.125)",interval:null})}),2e3);case 3:case"end":return n.stop()}}),n)}))),2e3);case 3:case"end":return n.stop()}}),n)}))),e.state={all_domains:[]},e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.render=function(){var n=this.state.all_domains;return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.Helmet,null,o.a.createElement("title",null,"Admin All Domains")),o.a.createElement(l,null,o.a.createElement("canvas",{id:"domains_minimap"}," "),o.a.createElement("div",{id:"domains_content"},!!n.length&&n.map((function(n,t){return o.a.createElement("div",{className:"line "+(t%2?"even":"odd")},o.a.createElement("b",{className:"key"},o.a.createElement("a",{href:"/edit_domain?tld="+n.key,target:"_blank"},n.key)),o.a.createElement("span",{className:"value"},":   ",!!n.syns1&&n.syns1.map((function(n){return o.a.createElement("span",{key:n},o.a.createElement("a",{href:"/edit_word?str="+n,target:"_blank"},n),", ")})),!!n.syns&&n.syns))})))))},r}(o.a.Component),v=Object(s.b)((function(n){return{search_now:n.input.search_now,input_tld:n.input.input_tld,tlds_user:n.output.tlds_user,tlds_all:n.output.tlds_all}}),(function(n){return{input_actions:Object(u.bindActionCreators)(d,n),ui_actions:Object(u.bindActionCreators)(p,n),api_actions:Object(u.bindActionCreators)(f.a,n)}}))(y);var b=function(n){var t,e;function r(){return n.apply(this,arguments)||this}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.render=function(){return o.a.createElement(a.a,{location:this.props.location},o.a.createElement(v,{location:this.props.location}))},r}(o.a.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-all-domains-js-f3b293b0cda5845bc2d3.js.map