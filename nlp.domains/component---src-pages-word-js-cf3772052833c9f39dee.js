(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Wr7T:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("7oih"),c=a("ANjH"),l=a("/MKj"),s=a("PMNF"),i=a("1A+w"),m=a("RMal"),p=(a("91GP"),a("Wbzz"));var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.row,a=e.field;if(!t||void 0===typeof t[a])return r.a.createElement("p",null,"No ",a);var n=a,o=t[a];return"ws_sentiment"===a&&(n="sentiment",o=o>=0?"👍":-1===o?"👎":"undefined"),r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("div",{className:"label"},n),r.a.createElement("div",{className:"value",style:{maxWidth:1e4}},o))},n}(r.a.Component),d=(a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("ae4e")),f=(a("rE2o"),a("ioFf"),a("BvKs"));function E(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.a.Component;var h=function(e){function t(){return e.apply(this,arguments)||this}return E(t,e),t.prototype.render=function(){var e=this.props,t=e.word;e.api_actions;return t&&" "!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"posword"},r.a.createElement(p.a,{to:"/word?word="+t,className:"color-medium"},t),",")):null},t}(r.a.Component),v=a("4Bjl"),y=a("IP2g"),w=a("TeHn");var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:t.expand||!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.pos,n=t.row,o=t.api_actions;if(!a)return null;var c=0,l={};for(var s in n.dict){var i=n.dict[s];a===(i[11]||i[9])&&i[12]&&(l[s]=i,c++)}if(!c)return null;var m=n.pos_short&&n.pos_short[a]||[];console.log("row",n);var p=m.map((function(e){return r.a.createElement(h,{api_actions:o,key:e,word:e})})),u=Object.entries(l).map((function(e){var t=e[0],a=e[1];if(1===a[0]&&0===a[1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),f=Object.entries(l).map((function(e){var t=e[0],a=e[1];if(0===a[0]&&0===a[1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),E=Object.entries(l).map((function(e){var t=e[0];if(1===e[1][1])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),g=Object.entries(l).map((function(e){var t=e[0];if(1===e[1][2])return r.a.createElement(h,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e}));return this.state.advanced?u.length||f.length||E.length||g.length?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},Object(w.a)(a),":")),r.a.createElement("div",{className:"two"},p.length>0&&r.a.createElement("p",null,r.a.createElement(d.a,{className:"color-accent opacity50"},"Sorted by length:"),r.a.createElement("span",{className:"posWords opacity50"},p)),u.length>0&&r.a.createElement("p",null,r.a.createElement(d.a,{className:"color-accent opacity50"},"Ok/Good:"),r.a.createElement("span",{className:"posWords"},u)),f.length>0&&r.a.createElement("p",null,r.a.createElement(d.a,{className:"color-bad opacity50"},"Negative:"),r.a.createElement("span",{className:"posWords"},f)),E.length>0&&r.a.createElement("p",null,r.a.createElement(d.a,{className:"color-light opacity75"},"Proper:"),r.a.createElement("span",{className:"posWords"},E)),g.length>0&&r.a.createElement("p",null,r.a.createElement(d.a,{className:"color-light opacity75"},"Unknown sentiment:"),r.a.createElement("span",{className:"posWords"},g))),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(y.a,{icon:v.a,className:"faAngleUp"}))):null:r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,p.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,Object(w.a)(a),": ")),r.a.createElement("div",{className:"two posWords",style:{marginBottom:15}},p)),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(y.a,{icon:v.f,className:"faEllipsisH"}))))},n}(r.a.Component);var _=function(e){var t=e.word;return r.a.createElement("span",{className:"posword"},r.a.createElement(p.a,{to:"/word?word="+t},t),",")},N=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.field,n=t.row;if(!a||!Array.isArray(n[a]))return null;var o=n[a].map((function(e,t){return r.a.createElement(_,{word:e,key:e+t})})).filter((function(e){return!!e}));return this.state.advanced?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},a,":")),r.a.createElement("div",{className:"two"},o.length>0&&r.a.createElement("p",{className:"fieldWords"},o)),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(y.a,{icon:v.a,className:"faAngleUp",style:{transform:"scale(0.85)"}}))):r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,o.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,a,": ")),r.a.createElement("div",{className:"two fieldWords"},o)),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(y.a,{icon:v.f,className:"faEllipsisH",style:{transform:"scale(0.85)"}}))))},n}(r.a.Component),b=a("vOnD").a.div.withConfig({displayName:"ViewWordstyled__Styled",componentId:"sc-8izllo-0"})(["font-size:1.125rem;position:relative;padding-top:0.75rem;padding-bottom:1rem;.editWordLink{position:absolute;top:1rem;right:1rem;font-size:2rem;color:var(--color-subtle);z-index:100;}.ui-form-section{.one{}.two{}.three{text-align:center;cursor:pointer;color:var(--color-subtle);white-space:nowrap;font-size:1.5rem;margin:1rem auto -1.5rem;width:5rem;svg{transform:scale(0.85);display:inline-block;top:-1rem;position:relative;background:var(--color-warmwhite);padding:0;}}&.advanced{}&.simple{.two{position:relative;white-space:nowrap;overflow:hidden;&:after{content:'';display:block;position:absolute;top:-0.5rem;right:0;height:2rem;width:60px;background:linear-gradient( to left,var(--color-warmwhite) 0%,transparent 100% );}}}}.posword{padding:0 0.5rem 0 0;display:inline-block;font-size:1.125rem;color:var(--color-medium);}.title{font-size:1.25rem;}"]),k=a("bpgX"),j=a("0/XF"),O=a("pQzD"),W=function(e){var t=e.that,a=t.props,n=a.word_input,o=a.word_chunks,c=a.api_actions;if(n&&(!o.length||!o[0].length||!o[0][0].key))return r.a.createElement(b,{className:"ViewWord content"},r.a.createElement("p",null,"Word not found"));var l=o[0][0],s=(l.tlds||[]).flat(),i=(l.pos_short||{}).all||[];return console.log("row",l),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,Object.assign({},t.props,{className:n&&o.length?"Search":"Search SearchHome",domains:!1,title:"Another word for...",placeholder:"...",cue:[r.a.createElement("span",{key:"1"},"The most accurate thesaurus"," ",r.a.createElement("span",{className:"color-accent u"},"API")," "),r.a.createElement("span",{key:"2"},"for ",r.a.createElement(r.a.Fragment,null,"N"),"atural ",r.a.createElement(r.a.Fragment,null,"L"),"anguage ",r.a.createElement(r.a.Fragment,null,"P"),"rocessing applications.")]})),r.a.createElement(O.b,null,r.a.createElement(b,{className:"ViewWord content"},r.a.createElement(p.a,{className:"editWordLink",to:"/edit_word?word="+l.key},r.a.createElement(y.a,{icon:v.e,className:"faEdit",style:{transform:"scale(0.85)"}})),r.a.createElement("div",{className:"ui-form-section ui-form-fieldset-grid"},["modal","key","root","prefix","singular","plural","abbreviation","acronym","list_count","ws_sentiment"].filter((function(e){return l[e]||0===l[e]})).map((function(e,t){return r.a.createElement(u,{field:e,row:l,key:l.key+t})})),i&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"best_of:"),r.a.createElement("span",{className:"value"},i.map((function(e,t){return r.a.createElement(h,{api_actions:c,key:e,word:e})})))),s&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"domains:"),r.a.createElement("span",{className:"value"},s.map((function(e,t){return r.a.createElement(k.a,{key:e+t,domext:e})}))))),r.a.createElement("div",{className:"ui-form-section"},[l.pos1,l.pos2,"bef","aft","ety","etc"].map((function(e,t){return r.a.createElement(g,{api_actions:c,pos:e,row:l,key:e+t,expand:!1})})),["ok_list","list"].map((function(e,t){return r.a.createElement(N,{field:e,row:l,key:l.key+t})}))))))},C=function(e){var t=e.that,a=t.props.word_input;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,Object.assign({},t.props,{className:a&&word_chunks.length?"Search":"Search SearchHome",domains:!1,title:"Another word for...",placeholder:"...",home:!0,cue:[r.a.createElement("span",{key:"1"},"The most accurate thesaurus"," ",r.a.createElement("span",{className:"color-accent u"},"API")," "),r.a.createElement("span",{key:"2"},"for ",r.a.createElement(r.a.Fragment,null,"N"),"atural ",r.a.createElement(r.a.Fragment,null,"L"),"anguage ",r.a.createElement(r.a.Fragment,null,"P"),"rocessing applications.")]})),r.a.createElement(O.b,null,r.a.createElement(b,{className:"ViewWord content"},r.a.createElement("p",null,"Try it out ☝"),r.a.createElement("p",null,"More info/functionality coming soon!"),r.a.createElement("p",null,"This service is in stealth mode! Under active development."))))};var F=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},t.ui_actions.RX__search_title("Thesaurus Search:"),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.props.word_actions.RX__get_domains(!1)},o.render=function(){var e=this.props.word_input;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(W,{that:this}):r.a.createElement(C,{that:this}))},n}(r.a.Component),S=Object(l.b)((function(e){return{word_poss:e.word.poss,word_input:e.word.input_str,word_chunks:e.word.chunks}}),(function(e){return{ui_actions:Object(c.bindActionCreators)(s,e),api_actions:Object(c.bindActionCreators)(i.a,e),word_actions:Object(c.bindActionCreators)(m,e)}}))(F);var z=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,{location:this.props.location},r.a.createElement(S,{location:this.props.location}))},n}(r.a.Component);t.default=z},ae4e:function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),r=a.n(n),o={display:"block",lineHeight:"1em",fontSize:"0.67em",fontWeight:"bold",padding:"0",margin:"0"};t.a=function(e){var t=e.style,a=void 0===t?{}:t,n=e.className,c=void 0===n?"":n,l=e.children;return l?r.a.createElement("span",{className:c,style:Object.assign({},o,{},a)},l):null}},bpgX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return this.props.domext?r.a.createElement("span",null,r.a.createElement("span",{className:"posword"},r.a.createElement(o.a,{to:"/edit_domain?tld="+this.props.domext,onClick:function(){window.isLoading("render")}},this.props.domext,", "))):null},n}(r.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-word-js-cf3772052833c9f39dee.js.map