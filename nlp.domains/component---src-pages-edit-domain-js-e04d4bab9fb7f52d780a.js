(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bpgX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return this.props.domext?r.a.createElement("span",null,r.a.createElement("span",{className:"posword"},r.a.createElement(o.a,{to:"/edit_domain?tld="+this.props.domext,onClick:function(){window.isLoading("render")}},this.props.domext,", "))):null},n}(r.a.Component);t.a=s},j4rc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("7oih"),s=(a("rGqo"),a("yt8O"),a("RW0V"),a("VRzm"),a("Btvt"),a("91GP"),a("pIFo"),a("o0o1")),i=a.n(s),c=(a("ls82"),a("ANjH")),l=a("/MKj"),m=a("RMal"),p=a("PMNF"),d=a("1A+w"),u=a("pQzD"),f=a("0/XF"),y=(a("/8Fb"),a("vOnD").a.div.withConfig({displayName:"EditDomainstyled__Styled",componentId:"sc-11vw8vs-0"})(["font-size:1rem;position:relative;padding-top:1.125rem;h3{font-size:1em;font-weight:bold;line-height:2.67rem;color:var(--color-dark);}.cue{color:var(--color-light);}.columns{}.column{overflow:visible;width:200px;margin:0 30px 0 0;}.dictKey{margin:1rem 0 0;line-height:1.75rem;font-weight:bold;}.dictLine{display:block;&a&:hover{color:var(--color-link);}&.syns2{white-space:pre;font-size:1.125rem;color:var(--color-dark);margin:1.125rem 0 0 0;line-height:1.125rem;padding-left:0;.posword{padding-right:0.5rem;}}&.syns3{font-size:1rem;color:var(--color-light);white-space:pre;margin:0.125rem 0 0 0;line-height:1.125rem;padding-left:0.75rem;}}.domain-section{margin:0 0 1rem 0;padding:1rem 0;&:first-child{padding-top:0;}&:last-child{border:none;}> .flexrow.posDiv{position:absolute;left:0;}}.domain-syns-paragraph{line-height:1.9rem;> span{color:var(--color-light);padding-right:0.5rem;display:inline-block;> span{color:var(--color-dark);font-size:1.1rem;display:inline-block;}}}"])),h=a("5rEg"),v=a("2/Rp"),g=a("Wbzz"),w=a("TuOZ"),E=a("bpgX");var _=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.that,a=e.dom;return t.props.domext?r.a.createElement("section",{className:"domain-section domain-view"},r.a.createElement("div",null,r.a.createElement("b",null,"all domains:  ")),r.a.createElement("p",{className:"domain-syns-paragraph"},t.tlds_all.map((function(e,t){return r.a.createElement(E.a,{key:e+t,row:e,domext:a.key})})))):null},n}(r.a.Component),b=a("4Bjl"),k=a("IP2g");function x(e,t,a,n,r,o,s){try{var i=e[o](s),c=i.value}catch(l){return void a(l)}i.done?t(c):Promise.resolve(c).then(n,r)}function N(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function s(e){x(o,n,r,s,i,"next",e)}function i(e){x(o,n,r,s,i,"throw",e)}s(void 0)}))}}var D=h.a.TextArea,O=function(e){var t=e.that,a=t.state,n=a.dom,o=a.synsDict;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{className:"EditDomain content"},r.a.createElement("section",{className:"domain-section domain-edit"},r.a.createElement("h3",null,'Edit ".',n.key,'" synonyms-of-synonyms (words to be extrapolated):'),r.a.createElement("div",{className:"flexrow posDiv"},r.a.createElement("span",{className:"flexgrow ui-field-input-group"},r.a.createElement(h.a,{type:"text",placeholder:"comma, separated, words, to add to OK terms...",value:n.syns1,onChange:function(e){t.setState({dom:Object.assign({},n,{syns1:e.target.value})})},onKeyPress:function(){var e=N(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===a.key&&t.submit_state_dom();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),r.a.createElement(v.a,{type:"primary",onClick:N(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.submit_state_dom();case 1:case"end":return e.stop()}}),e)})))},r.a.createElement(k.a,{icon:b.h,className:"faPen",style:{transform:"scale(0.85)"}}),r.a.createElement("b",null," + "),r.a.createElement(k.a,{icon:b.k,className:"faSave",style:{transform:"scale(0.85)"}}))))),o&&Object.keys(o).length>0&&r.a.createElement("section",{className:"domain-section domain-view"},r.a.createElement("div",{className:"cue"},'user will see "',r.a.createElement("b",null,".",n.key),'" extension if they type in any of these words:'," "),r.a.createElement("div",{className:"domain-syns-paragraph columns"},Object.entries(o).map((function(e,t){var a=e[0],n=e[1];return r.a.createElement("div",{key:a+t+"col",className:"column"},r.a.createElement("h3",{className:"dictKey",style:{userSelect:"none"}},r.a.createElement(g.a,{to:"/edit_word?word="+a,target:"_blank"},a,"  ",r.a.createElement(k.a,{icon:b.b,className:"faArrowDown",style:{transform:"scale(0.85)"}}))),r.a.createElement("div",null,n.map((function(e,t){return 0!==e.indexOf("_")?r.a.createElement(w.a,{key:e+t+"str",word:e,row:{key:a},className:"dictLine syns2"},e,","):r.a.createElement("div",{key:e+t+"str",className:"dictLine syns3"},e.replace(/_/g,""))}))),r.a.createElement("h3",{className:"dictKey",style:{userSelect:"none"}},r.a.createElement(g.a,{to:"/edit_word?word="+a,target:"_blank"},r.a.createElement(k.a,{icon:b.c,className:"faArrowUp",style:{transform:"scale(0.85)"}}),"  ",a)))})))),r.a.createElement("section",{className:"domain-section domain-edit"},r.a.createElement("h3",null,'Edit ".',n.key,'" direct-synonyms (these words will be used as-is, will NOT be extrapolated):'),r.a.createElement("div",{className:"posDiv"},r.a.createElement("span",{className:"flexgrow ui-field-input-group"},r.a.createElement(D,{placeholder:"comma, separated, words, to add to OK terms...",rows:20,value:n.syns,onChange:function(e){t.setState({dom:Object.assign({},n,{syns:e.target.value})})},onKeyPress:function(){var e=N(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===a.key&&t.submit_state_dom();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),r.a.createElement(v.a,{type:"primary",onClick:N(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.submit_state_dom();case 1:case"end":return e.stop()}}),e)})))},r.a.createElement(k.a,{icon:b.h,className:"faPen",style:{transform:"scale(0.85)"}}),r.a.createElement("b",null," + "),r.a.createElement(k.a,{icon:b.k,className:"faSave",style:{transform:"scale(0.85)"}}))))),r.a.createElement(_,{dom:n,that:t})))};function j(e,t,a,n,r,o,s){try{var i=e[o](s),c=i.value}catch(l){return void a(l)}i.done?t(c):Promise.resolve(c).then(n,r)}function C(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function s(e){j(o,n,r,s,i,"next",e)}function i(e){j(o,n,r,s,i,"throw",e)}s(void 0)}))}}var A=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).submit_state_dom=C(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.api_actions.data_domain_edit(a.state.dom);case 2:(t=e.sent)&&t.data&&a.getData();case 4:case"end":return e.stop()}}),e)}))),a.gotData=function(e){var t=e.syns?(e.syns.trim()+", ").replace(/[,]+/g,","):"",n=Array.isArray(e.syns1)?e.syns1:[];a.setState({dom:Object.assign({},e,{syns:t,syns1:n.map((function(e){return e.trim()})).filter((function(e){return!!e})).join(", ")+(n.length?", ":"")})}),window.scrollTo({top:0,behavior:"smooth"})},a.gotDataDict=function(e){a.setState({synsDict:e})},a.getData=C(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.props.tld)){e.next=10;break}return e.next=4,a.props.api_actions.data_domain_get(t);case 4:return(n=e.sent)&&n.key&&a.gotData(n),e.next=8,a.props.api_actions.data_domain_syns_dict(t);case 8:(r=e.sent)&&a.gotDataDict(r);case 10:case"end":return e.stop()}}),e)}))),a.getAllDomains=C(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.api_actions.data_domains_all();case 2:t=e.sent,a.setState({all_domains:t||[]});case 4:case"end":return e.stop()}}),e)}))),a.state={synsDict:{},dom:{},all_domains:[]},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.getAllDomains(),this.props.tld&&this.getData()},o.componentDidUpdate=function(e){var t=e.tld,a=this.props.tld;a&&a!==t&&this.getData()},o.render=function(){var e=this.props.tld,t=this.state.dom,a=null;return a=e?t&&t.key?r.a.createElement(O,{that:this}):r.a.createElement("div",{className:"page content"},'Not found "',r.a.createElement("b",null,e),'"'):r.a.createElement("div",{className:"page content"}," "),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(f.a,Object.assign({},this.props,{domains:!0,hideInput:!0,cue:[r.a.createElement("span",{key:"1"},"☝ Choose a domain extension to edit. ")]}))),r.a.createElement(u.b,null,a))},n}(r.a.Component),z=Object(l.b)((function(e){return{tld:Object.keys(e.domain.tlds_user)[0],tlds_user:e.domain.tlds_user,tlds_all:e.domain.tlds_all}}),(function(e){return{word_actions:Object(c.bindActionCreators)(m,e),ui_actions:Object(c.bindActionCreators)(p,e),api_actions:Object(c.bindActionCreators)(d.a,e)}}))(A);var P=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,{location:this.props.location},r.a.createElement(z,{location:this.props.location}))},n}(r.a.Component);t.default=P}}]);
//# sourceMappingURL=component---src-pages-edit-domain-js-e04d4bab9fb7f52d780a.js.map