(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Wr7T:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("7oih"),c=(a("91GP"),a("ANjH")),l=a("/MKj"),s=a("PMNF"),i=a("1A+w"),m=a("pQzD"),p=a("0/XF"),u=a("Wbzz");var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.row,a=e.field;if(!t||void 0===typeof t[a])return r.a.createElement("p",null,"No ",a);var n=a,o=t[a];return"ws_sentiment"===a&&(n="sentiment",o=o>=0?"👍":-1===o?"👎":"undefined"),r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("div",{className:"label"},n),r.a.createElement("div",{className:"value",style:{maxWidth:1e4}},o))},n}(r.a.Component),f=(a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("ae4e")),E=(a("rE2o"),a("ioFf"),a("BvKs"));function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.a.Component;var h=function(e){function t(){return e.apply(this,arguments)||this}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.word;e.api_actions;return t&&" "!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"posword"},r.a.createElement(u.a,{to:"/word?word="+t,className:"color-medium"},t),",")):null},t}(r.a.Component),y=a("4Bjl"),w=a("IP2g"),_=a("TeHn");var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:t.expand||!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.pos,n=t.row,o=t.api_actions;if(!a)return null;var c=0,l={};for(var s in n.dict){var i=n.dict[s];("bef"===a&&"bef"===i[11]||"aft"===a&&"aft"===i[11]||a===i[9])&&(l[s]=i,c++)}if(!c)return null;var m=n.pos_short&&n.pos_short[a]||[];console.log("row",n);var p=m.map((function(e){return r.a.createElement(h,{api_actions:o,key:e,word:e})})),u=Object.entries(l).map((function(e){var t=e[0],a=e[1];if(1===a[0]&&0===a[1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),d=Object.entries(l).map((function(e){var t=e[0],a=e[1];if(0===a[0]&&0===a[1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),E=Object.entries(l).map((function(e){var t=e[0];if(1===e[1][1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),v=Object.entries(l).map((function(e){var t=e[0];if(1===e[1][2])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e}));return this.state.advanced?u.length||d.length||E.length||v.length?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},Object(_.a)(a),":")),r.a.createElement("div",{className:"two"},p.length>0&&r.a.createElement("p",null,r.a.createElement(f.a,{className:"color-accent-deep opacity50"},"Sorted by length:"),r.a.createElement("span",{className:"posWords opacity50"},p)),u.length>0&&r.a.createElement("p",null,r.a.createElement(f.a,{className:"color-accent-deep opacity50"},"Ok/Good:"),r.a.createElement("span",{className:"posWords"},u)),d.length>0&&r.a.createElement("p",null,r.a.createElement(f.a,{className:"color-bad opacity50"},"Negative:"),r.a.createElement("span",{className:"posWords"},d)),E.length>0&&r.a.createElement("p",null,r.a.createElement(f.a,{className:"color-light opacity75"},"Proper:"),r.a.createElement("span",{className:"posWords"},E)),v.length>0&&r.a.createElement("p",null,r.a.createElement(f.a,{className:"color-light opacity75"},"Unknown sentiment:"),r.a.createElement("span",{className:"posWords"},v))),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(w.a,{icon:y.b,className:"faAngleUp"}))):null:r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,p.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,Object(_.a)(a),": ")),r.a.createElement("div",{className:"two posWords",style:{marginBottom:15}},p)),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(w.a,{icon:y.f,className:"faEllipsisH"}))))},n}(r.a.Component);var N=function(e){var t=e.word;return r.a.createElement("span",{className:"posword"},r.a.createElement(u.a,{to:"/word?word="+t},t),",")},b=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.field,n=t.row;if(!a||!Array.isArray(n[a]))return null;var o=n[a].map((function(e,t){return r.a.createElement(N,{word:e,key:e+t})})).filter((function(e){return!!e}));return this.state.advanced?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},a,":")),r.a.createElement("div",{className:"two"},o.length>0&&r.a.createElement("p",{className:"fieldWords"},o)),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(w.a,{icon:y.b,className:"faAngleUp",style:{transform:"scale(0.85)"}}))):r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,o.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,a,": ")),r.a.createElement("div",{className:"two fieldWords"},o)),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(w.a,{icon:y.f,className:"faEllipsisH",style:{transform:"scale(0.85)"}}))))},n}(r.a.Component),k=a("vOnD").a.div.withConfig({displayName:"ViewWordstyled__Styled",componentId:"sc-8izllo-0"})(["font-size:1.125rem;position:relative;padding-top:0.75rem;padding-bottom:1rem;.editWordLink{position:absolute;top:1rem;right:1rem;font-size:2rem;color:var(--color-subtle-deep);z-index:100;}.ui-form-section{.one{}.two{}.three{text-align:center;cursor:pointer;color:var(--color-subtle-deep);white-space:nowrap;font-size:1.5rem;margin:1rem auto -1.5rem;width:5rem;svg{transform:scale(0.85);display:inline-block;top:-1rem;position:relative;background:var(--color-white);padding:0;}}&.advanced{}&.simple{.two{position:relative;white-space:nowrap;overflow:hidden;&:after{content:'';display:block;position:absolute;top:-0.5rem;right:0;height:2rem;width:60px;background:linear-gradient( to left,var(--color-white) 0%,transparent 100% );}}}}.posword{padding:0 0.5rem 0 0;display:inline-block;font-size:1.125rem;color:var(--color-medium);}.title{font-size:1.25rem;}"]),j=a("bpgX"),O=function(e){var t=e.that.props,a=t.word_input,n=t.word_chunks,o=t.api_actions;if(a&&(!n.length||!n[0].length||!n[0][0].key))return r.a.createElement(k,{className:"ViewWord content"},r.a.createElement("p",null,"Word not found"));var c=n[0][0],l=c.poss&&c.poss.domains_all?c.poss.domains_all:[],s=(c.pos_short||{}).all||[];return console.log("row",c),r.a.createElement(k,{className:"ViewWord content"},r.a.createElement(u.a,{className:"editWordLink",to:"/edit_word?word="+c.key},r.a.createElement(w.a,{icon:y.e,className:"faEdit",style:{transform:"scale(0.85)"}})),r.a.createElement("div",{className:"ui-form-section ui-form-fieldset-grid"},["modal","key","root","root_maybe","singular","plural","abbreviation","acronym","list_count","agg_sentiment","ws_sentiment"].filter((function(e){return c[e]||0===c[e]})).map((function(e,t){return r.a.createElement(d,{field:e,row:c,key:c.key+t})})),s&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"best_of:"),r.a.createElement("span",{className:"value"},s.map((function(e,t){return r.a.createElement(h,{api_actions:o,key:e,word:e})})))),l&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"domains:"),r.a.createElement("span",{className:"value"},l.map((function(e,t){return r.a.createElement(j.a,{key:e+t,domext:e})}))))),r.a.createElement("div",{className:"ui-form-section"},[c.pos1,c.pos2,"bef","aft","ety","etc"].map((function(e,t){return r.a.createElement(g,{api_actions:o,pos:e,row:c,key:e+t,expand:!1})})),["ok_list","list"].map((function(e,t){return r.a.createElement(b,{field:e,row:c,key:c.key+t})}))))},W=function(e){e.that;return r.a.createElement(k,{className:"ViewWord content"},r.a.createElement("p",null,"Try it out ☝"),r.a.createElement("p",null,"More info/functionality coming soon!"),r.a.createElement("p",null,"This service is in stealth mode! Under active development."))};var C=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},t.ui_actions.RX__search_title("Thesaurus Search:"),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.word_chunks,a=e.word_input,n=null;return n=a?r.a.createElement(O,{that:this}):r.a.createElement(W,{that:this}),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,Object.assign({},this.props,{className:a&&t.length?"Search":"Search SearchHome",domains:!1,title:"Another word for...",placeholder:"...",cue:[r.a.createElement("span",{key:"1"},"The most accurate thesaurus ",r.a.createElement("span",{className:"color-accent u"},"API")," "),r.a.createElement("span",{key:"2"},"for ",r.a.createElement(r.a.Fragment,null,"N"),"atural ",r.a.createElement(r.a.Fragment,null,"L"),"anguage ",r.a.createElement(r.a.Fragment,null,"P"),"rocessing applications.")]})),r.a.createElement(m.b,null,n))},n}(r.a.Component),z=Object(l.b)((function(e){return{word_poss:e.word.poss,word_input:e.word.input_str,word_chunks:e.word.chunks}}),(function(e){return{ui_actions:Object(c.bindActionCreators)(s,e),api_actions:Object(c.bindActionCreators)(i.a,e)}}))(C);var F=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,{location:this.props.location},r.a.createElement(z,{location:this.props.location}))},n}(r.a.Component);t.default=F},ae4e:function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),r=a.n(n),o={display:"block",lineHeight:"1em",fontSize:"0.67em",fontWeight:"bold",padding:"0",margin:"0"};t.a=function(e){var t=e.style,a=void 0===t?{}:t,n=e.className,c=void 0===n?"":n,l=e.children;return l?r.a.createElement("span",{className:c,style:Object.assign({},o,{},a)},l):null}},bpgX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return this.props.domext?r.a.createElement("span",null,r.a.createElement("span",{className:"posword"},r.a.createElement(o.a,{to:"/edit_domain?tld="+this.props.domext,onClick:function(){window.isLoading("render")}},this.props.domext,", "))):null},n}(r.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-word-js-1cd3e52e354572454d5f.js.map