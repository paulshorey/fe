(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{JwsL:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("IP2g"),o=a("4Bjl"),l=a("5gr6"),i=a("q1tI"),s=a.n(i),c=a("vOnD").a.div.withConfig({displayName:"Footerstyled__StyledFooter",componentId:"ka3aa5-0"})([""]);t.a=function(){return s.a.createElement(c,null,s.a.createElement("div",{className:"footerCopyright"},s.a.createElement("p",{className:"content"},"Built with ❤️  by"," ",s.a.createElement(n.a,{to:"/about",className:"color-accent"},"Paul + Samira"),". All rights reserved. By using this site, you agree not to programmatically collect our content. Thanks a lot for visiting!"),s.a.createElement("p",{className:"content"},"Get this same ",s.a.createElement(n.a,{to:"/api"},"data, results, and algorithms")," for your site |"," ",s.a.createElement(n.a,{to:"/api"},"this API is now available")," | ",s.a.createElement(n.a,{to:"/contact"},"Contact us")," | Text analysis"," ",s.a.createElement(r.a,{icon:o.e,className:"faBolt"})," by:"," ",s.a.createElement("a",{href:"https://wordio.co",target:"_blank"},"wordio",s.a.createElement(l.d,null),".",s.a.createElement(l.d,null),"co"))))}},Wr7T:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("r8ck"),l=(a("VRzm"),a("Btvt"),a("o0o1")),i=a.n(l),s=(a("ls82"),a("ANjH")),c=a("/MKj"),m=a("PMNF"),u=a("1A+w"),p=a("MAR7"),d=(a("a1Th"),a("HEwt"),a("rE2o"),a("ioFf"),a("f3/d"),a("KKXr"),a("rGqo"),a("yt8O"),a("XfO3"),a("T39b"),a("91GP"),a("Wbzz")),f=a("4Bjl"),h=a("IP2g"),E=a("BvKs");function v(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.a.Component;var g=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props,t=e.word;e.api_actions;return t&&" "!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"posword"},r.a.createElement(d.a,{to:"/word?str="+t,className:"color-medium"},t),", ")):null},t}(r.a.Component);var w=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.field,n=t.row,o=a;if("list"===a&&(o="all"),!a||!Array.isArray(n[a]))return null;var l=n[a].map((function(e,t){return r.a.createElement(g,{word:e,key:e+t})})).filter((function(e){return!!e}));return this.state.advanced?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},a,":")),r.a.createElement("div",{className:"two"},l.length>0&&r.a.createElement("p",{className:"fieldWords"},l)),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(h.a,{icon:f.b,className:"faAngleUp",style:{transform:"scale(0.85)"}}))):r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,l.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,o,": ")),r.a.createElement("div",{className:"two fieldWords"},l)),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(h.a,{icon:f.k,className:"faEllipsisH",style:{transform:"scale(0.85)"}}))))},n}(r.a.Component);var _=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.row,a=e.field;if(!t||void 0===typeof t[a])return r.a.createElement("p",null,"No ",a);var n=a,o=t[a];return"ws_sentiment"===a?(n="sentiment",o=t.list_count>=3?o>=0?"👍":-1===o?"👎":"undefined":"?"):o=r.a.createElement(g,{word:o}),r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("div",{className:"label"},n),r.a.createElement("div",{className:"value",style:{maxWidth:1e4}},o))},n}(r.a.Component),N=(a("/8Fb"),a("ae4e")),k=a("syjQ");var j=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={advanced:t.expand||!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.pos,n=t.row,o=t.api_actions;if(!a)return null;var l=0,i={};for(var s in n.dict){var c=n.dict[s];a===(c[11]||c[9])&&c[12]&&(i[s]=c,l++)}if(!l)return null;var m=Object.entries(i).map((function(e){var t=e[0],a=e[1];if(1===a[0]&&0===a[1])return r.a.createElement(g,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),u=Object.entries(i).map((function(e){var t=e[0],a=e[1];if(0===a[0]&&0===a[1])return r.a.createElement(g,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),p=Object.entries(i).map((function(e){var t=e[0];if(1===e[1][1])return r.a.createElement(g,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e})),d=Object.entries(i).map((function(e){var t=e[0];if(1===e[1][2])return r.a.createElement(g,{api_actions:o,key:t,word:t})})).filter((function(e){return!!e}));return this.state.advanced?m.length||u.length||p.length||d.length?r.a.createElement("div",{className:"ui-form-section advanced"},r.a.createElement("p",{className:"one"},r.a.createElement("b",{className:"title"},Object(k.a)(a),":")),r.a.createElement("div",{className:"two"},m.length>0&&r.a.createElement("p",null,r.a.createElement(N.a,{className:"color-accent opacity50"},"Ok/Good:"),r.a.createElement("span",{className:"posWords"},m)),u.length>0&&r.a.createElement("p",null,r.a.createElement(N.a,{className:"color-bad opacity50"},"Negative:"),r.a.createElement("span",{className:"posWords"},u)),p.length>0&&r.a.createElement("p",null,r.a.createElement(N.a,{className:"color-light opacity75"},"Proper:"),r.a.createElement("span",{className:"posWords"},p)),d.length>0&&r.a.createElement("p",null,r.a.createElement(N.a,{className:"color-light opacity75"},"Unknown sentiment:"),r.a.createElement("span",{className:"posWords"},d))),r.a.createElement("p",{className:"three",onClick:function(){e.setState({advanced:!1})}},r.a.createElement(h.a,{icon:f.b,className:"faAngleUp"}))):null:r.a.createElement("div",{className:"ui-form-section simple"},r.a.createElement("div",null,r.a.createElement("div",{className:"one"},r.a.createElement("b",null,Object(k.a)(a),": ")),r.a.createElement("div",{className:"two posWords",style:{marginBottom:15}},m,-1===n.ws_sentiment&&u),r.a.createElement("div",{className:"three",onClick:function(){e.setState({advanced:!0})}},r.a.createElement(h.a,{icon:f.k,className:"faEllipsisH"})," ",r.a.createElement("sup",null,r.a.createElement("b",null,"more")))))},n}(r.a.Component),x=a("vOnD"),O=x.a.div.withConfig({displayName:"WordResultsstyled__StyledResults",componentId:"j6v6g-0"})(['font-size:1.125rem;position:relative;padding-top:1.25rem;padding-bottom:1rem;color:#182026;min-height:100vh;background:white;.editWordLink{position:absolute;top:1rem;right:1rem;font-size:2rem;color:var(--color-subtle);z-index:100;}.ui-form-section{.one{}.two{}.three{text-align:center;cursor:pointer;color:var(--color-subtle);white-space:nowrap;font-size:1.5rem;margin:1rem auto -1.5rem;width:5rem;svg{transform:scale(0.85);display:inline-block;top:-1rem;position:relative;background:var(--color-warmwhite);padding:0;}sup{position:relative;top:-1.2rem;}}&.advanced{}&.simple{.two{position:relative;white-space:nowrap;overflow:hidden;&:after{content:"";display:block;position:absolute;top:-0.5rem;right:0;height:2rem;width:60px;background:linear-gradient(to left,var(--color-warmwhite) 0%,transparent 100%);}}}}.posword{display:inline-block;font-size:1.125rem;color:var(--color-medium);}.title{font-size:1.25rem;}']),S=a("bpgX"),A=a("0/XF");function C(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return W(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var z=function(e){var t=e.that,a=r.a.createElement(A.a,Object.assign({},t.props,{domains:!1,title:"Synonyms and info for...",placeholder:"..."})),n=t.props,o=n.word_input,l=n.word_chunks,i=n.api_actions;if(o&&!l[o])return r.a.createElement(r.a.Fragment,null,a,r.a.createElement(O,{className:"ViewWord content"},r.a.createElement(d.a,{className:"editWordLink",to:"/edit_word?str="+o},r.a.createElement(h.a,{icon:f.j,className:"faEdit",style:{transform:"scale(0.85)"}})),r.a.createElement("p",null,"Word not found")));var s=l[o],c=C(new Set((s.tlds||[]).flat())),m=(s.pos_short||{}).all||[],u=!1;if(s.abbreviation)for(var p,E=function(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=I(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}(s.abbreviation.split(",").map((function(e){return e.trim()})).filter((function(e){return!!e})));!(p=E()).done;){p.value.length>s.key.length&&(u=!0)}return r.a.createElement(r.a.Fragment,null,a,r.a.createElement(O,{className:"ViewWord content"},r.a.createElement(d.a,{className:"editWordLink",to:"/edit_word?str="+s.key},r.a.createElement(h.a,{icon:f.j,className:"faEdit",style:{transform:"scale(0.85)"}})),!!u&&r.a.createElement("p",{className:"color-bad"},r.a.createElement("sub",null,"(* abbreviation is currently experimental. May include reverse-abbreviation - meaning the LONGER word that uses THIS word as an abbreviation. This has not been proven 100% accurate, and will be taken care of in the near future.)")),r.a.createElement("div",{className:"ui-form-section ui-form-fieldset-grid"},["proper","root","singular","plural","abbreviation","acronym","conjunction","ws_sentiment"].filter((function(e){return s[e]||0===s[e]})).map((function(e,t){return r.a.createElement(_,{field:e,row:s,key:s.key+t})})),!(!m||!m.length)&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"summary:"),r.a.createElement("span",{className:"value"},m.map((function(e,t){return r.a.createElement(g,{api_actions:i,key:e,word:e})})))),!(!c||!c.length)&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"domains:"),r.a.createElement("span",{className:"value"},c.map((function(e,t){return r.a.createElement(S.a,{key:e+t,domext:e})})))),!!s.aux&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"bound morpheme")),!!s.name&&r.a.createElement("div",{className:"ui-form-fieldset"},r.a.createElement("span",{className:"label"},"is a name"))),r.a.createElement("div",{className:"ui-form-section"},[s.pos1,s.pos2,s.pos3,"bef","aft","ety","etc"].map((function(e,t){return r.a.createElement(j,{api_actions:i,pos:e,row:s,key:e+t,expand:!1})})),["list"].map((function(e,t){return r.a.createElement(w,{field:e,row:s,key:s.key+t})})))))},T=x.a.div.withConfig({displayName:"WordHomestyled__StyledHome",componentId:"owvnnx-0"})(["font-size:1.125rem;position:relative;padding-top:2.5rem;padding-bottom:1rem;color:#182026;min-height:100vh;background:white;section{margin:0 0 2.5rem 2px;h3{margin-left:-2px;}}h1,h2,h3,h4,b,strong{font-weight:600;}.text{padding-left:1rem;border-left:solid 4px #efefef;color:#666;}p + .text{margin-top:0.75rem;}"]),P=function(e){var t=e.that,a=t.props.word_input;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,Object.assign({},t.props,{className:a?"Search":"Search WordHome",domains:!1,title:"Find another word for...",placeholder:"...",home:!0,cue:[r.a.createElement("div",{key:"1"},"Synonyms, root word, parts of speech, plurals, abbreviations, and sentiment analysis.")]})),r.a.createElement(T,null,r.a.createElement("article",{className:"content"},r.a.createElement("section",null,r.a.createElement("h3",{className:"color-attention"},"☝️ More entries than any other thesaurus. Plus sentiment-analysis!"),r.a.createElement("p",null,"Try ",r.a.createElement(d.a,{to:"/word?str=aloha"},"aloha"),", or ",r.a.createElement(d.a,{to:"/word?str=aggregate"},"aggregate")," or"," ",r.a.createElement(d.a,{to:"/word?str=appendectomy"},"appendectomy"),". Or ",r.a.createElement(d.a,{to:"/word?str=zig"},"zig")," or"," ",r.a.createElement(d.a,{to:"/word?str=zag"},"zag"),". Even short phrases like"," ",r.a.createElement(d.a,{to:"/word?str=water under the bridge"},"water under the bridge")," or"," ",r.a.createElement(d.a,{to:"/word?str=in a while"},"in a while"),"."),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,r.a.createElement("b",null,"Parts of speech")," (nouns, verbs, interjections, pronouns, etc.), ordered by relevance."," ",r.a.createElement("b",null,"Root word extraction.")," Plural/singular. Abbreviations/acronyms. ",r.a.createElement("b",null,"Sentiment score")," (-1 is negative, 1 is positive, 0 is neutral). Related domain name TLDs. Etc."))),r.a.createElement("section",null,r.a.createElement("h3",{className:"color-attention"},"Word breaking, tokenization, lemmatization. Even without spaces!"),r.a.createElement("p",null,r.a.createElement("i",null,"It is not easy finding an API which will extract meaning from a phrase with no spaces:")),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,r.a.createElement("i",null,'Ex1: "'),r.a.createElement("b",null,"thisisanexample"),r.a.createElement("i",null,'" returns '),r.a.createElement("b",null,"this")," ",r.a.createElement("b",null,"is")," ",r.a.createElement("b",null,"an")," ",r.a.createElement("b",null,"example"),"(noun)."),r.a.createElement("p",null,r.a.createElement("i",null,'Ex2: "'),r.a.createElement("b",null,"atotaleclipseofthesky"),r.a.createElement("i",null,'" returns '),r.a.createElement("b",null,"a")," ",r.a.createElement("b",null,"total"),"(adj) ",r.a.createElement("b",null,"eclipse"),"(noun) ",r.a.createElement("b",null,"of")," ",r.a.createElement("b",null,"the")," ",r.a.createElement("b",null,"sky"),"(noun) +"," ",r.a.createElement("b",null,"total eclipse"),"(noun)"),r.a.createElement("p",null,r.a.createElement("i",null,'Ex3: "'),r.a.createElement("b",null,"unitedstates"),r.a.createElement("i",null,'" returns '),r.a.createElement("b",null,"united"),"(adj) ",r.a.createElement("b",null,"states"),"(noun) + ",r.a.createElement("b",null,"united states"),"(noun)"))),r.a.createElement("section",null,r.a.createElement("h3",{className:"color-attention"},"API coming soon..."),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"For now, here's one use case... Our domain suggestions tool. It analyzes your input text (with or without spaces), generates domain name phrases, and matches related TLDs. Try the app:"," ",r.a.createElement("a",{href:"https://besta.domains",target:"_blank"},"Besta.Domains"),"."))),r.a.createElement("p",null," "))))};function F(e,t,a,n,r,o,l){try{var i=e[o](l),s=i.value}catch(c){return void a(c)}i.done?t(s):Promise.resolve(s).then(n,r)}var R=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},t.ui_actions.RX__search_title("Thesaurus Search:"),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.props.io_actions.RX__search_thesaurus(),this.props.io_actions.RX__set_inputs({tld:""})},o.componentDidUpdate=function(){var e,t=(e=i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.search_now&&this.props.search_now!==t.search_now&&this.props.io_actions.RX__search_thesaurus();case 1:case"end":return e.stop()}}),e,this)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function l(e){F(o,n,r,l,i,"next",e)}function i(e){F(o,n,r,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}(),o.render=function(){var e=this.props.word_input;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(z,{that:this}):r.a.createElement(P,{that:this}))},n}(r.a.Component),B=Object(c.b)((function(e){return{word_input:e.input.str,word_chunks:e.output.chunks,search_now:e.input.search_now}}),(function(e){return{ui_actions:Object(s.bindActionCreators)(m,e),api_actions:Object(s.bindActionCreators)(u.a,e),io_actions:Object(s.bindActionCreators)(p,e)}}))(R),H=a("JwsL");var L=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,{location:this.props.location,meta_title:"Thesaurus"},r.a.createElement(B,{location:this.props.location}),r.a.createElement(H.a,null))},n}(r.a.Component);t.default=L},ae4e:function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),r=a.n(n),o={display:"block",lineHeight:"1em",fontSize:"0.67em",fontWeight:"bold",padding:"0",margin:"0"};t.a=function(e){var t=e.style,a=void 0===t?{}:t,n=e.className,l=void 0===n?"":n,i=e.children;return i?r.a.createElement("span",{className:l,style:Object.assign({},o,a)},i):null}},bpgX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return this.props.domext?r.a.createElement("span",null,r.a.createElement("span",{className:"posword"},r.a.createElement(o.a,{to:"/edit_domain?tld="+this.props.domext,onClick:function(){window.isLoading("render")}},this.props.domext,", "))):null},n}(r.a.Component);t.a=l},"g/RE":function(e,t,a){"use strict";t.a={nou:"nouns",ver:"verbs",adj:"adjectives",adv:"adverbs",etc:"etc",pro:"pronouns",pre:"prepositions",det:"determiners",int:"interjections",con:"conjunctions",ety:"etymology",bef:"before",aft:"after",mod:"modal",ctr:"contractions",ive:"interrogative"}},syjQ:function(e,t,a){"use strict";var n=a("g/RE");t.a=function(e){return n.a[e]||e}}}]);
//# sourceMappingURL=component---src-pages-word-js-5fec54d65a53eeb3759a.js.map