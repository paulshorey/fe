(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+6XX":function(e,t,r){var n=r("y1pI");e.exports=function(e){return n(this.__data__,e)>-1}},"/9aa":function(e,t,r){var n=r("NykK"),a=r("ExA7");e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2gN3":function(e,t,r){var n=r("Kz5y")["__core-js_shared__"];e.exports=n},"3Fdi":function(e,t,r){r("a1Th"),r("h7Nl"),r("Btvt");var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(t){}try{return e+""}catch(t){}}return""}},"44Ds":function(e,t,r){var n=r("e4Nc");function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function r(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(a.Cache||n),r}a.Cache=n,e.exports=a},"4kuk":function(e,t,r){var n=r("SfRM"),a=r("Hvzi"),o=r("u8Dt"),i=r("ekgI"),u=r("JSQU");function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=u,e.exports=s},"4uTw":function(e,t,r){var n=r("Z0cm"),a=r("9ggG"),o=r("GNiM"),i=r("dt0z");e.exports=function(e,t){return n(e)?e:a(e,t)?[e]:o(i(e))}},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function f(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var u=a.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){l.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},u.render=function(){return o.createElement(n,this.props)},a}(a.Component);return u(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),u(d,"canUseDOM",s),d}}},"9Nap":function(e,t,r){var n=r("/9aa");e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,o=n(r("PJYZ")),i=n(r("VbXa")),u=n(r("8OQS")),s=n(r("pVnL")),c=n(r("q1tI")),l=n(r("17x9")),f=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=A([].concat(t.fluid))),t.fixed&&(t.fixed=A([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},T=Object.create({}),E=function(e){var t=f(e),r=p(t);return T[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,m=y&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:o}),c.default.createElement("source",{media:a,srcSet:r,sizes:o}))}))}function A(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function b(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+i+u+r+n+t+o+a+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=e.ariaHidden,i=c.default.createElement(I,(0,s.default)({src:t},a,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,n(r),i):i},I=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,o=e.style,i=e.onLoad,l=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,h=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:i,onError:l,ref:t,loading:f,draggable:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));I.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&E(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&m&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=p(t),T[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,o=void 0===a?{}:a,i=e.imgStyle,u=void 0===i?{}:i,l=e.placeholderStyle,d=void 0===l?{}:l,p=e.placeholderClassName,T=e.fluid,E=e.fixed,g=e.backgroundColor,y=e.durationFadeIn,m=e.Tag,v=e.itemProp,A=e.loading,O=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,s.default)({opacity:R?1:0,transition:N?"opacity "+y+"ms":"none"},u),C="boolean"==typeof g?"lightgray":g,L={transitionDelay:y+"ms"},x=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&L,{},u,{},d),G={title:t,alt:this.state.isVisible?"":r,style:x,className:p,itemProp:v};if(T){var j=T,H=h(T);return c.default.createElement(m,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(m,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&c.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&L)}),H.base64&&c.default.createElement(P,{ariaHidden:!0,src:H.base64,spreadProps:G,imageVariants:j,generateSources:_}),H.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,src:H.tracedSVG,spreadProps:G,imageVariants:j,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(I,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:r,title:t,loading:A},H,{imageVariants:j}))}}))}if(E){var k=E,B=h(E),z=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},o);return"inherit"===o.display&&delete z.display,c.default.createElement(m,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},C&&c.default.createElement(m,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},N&&L)}),B.base64&&c.default.createElement(P,{ariaHidden:!0,src:B.base64,spreadProps:G,imageVariants:k,generateSources:_}),B.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,src:B.tracedSVG,spreadProps:G,imageVariants:k,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,S(k),c.default.createElement(I,{alt:r,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:r,title:t,loading:A},B,{imageVariants:k}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});N.propTypes={resolutions:M,sizes:C,fixed:l.default.oneOfType([M,l.default.arrayOf(M)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var L=N;t.default=L},"9ggG":function(e,t,r){var n=r("Z0cm"),a=r("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!a(e))||(i.test(e)||!o.test(e)||null!=t&&e in Object(t))}},AP2z:function(e,t,r){r("a1Th"),r("h7Nl"),r("Btvt");var n=r("nmnc"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(s){}var a=i.call(e);return n&&(t?e[u]=r:delete e[u]),a}},Cwc5:function(e,t,r){var n=r("NKxu"),a=r("Npjl");e.exports=function(e,t){var r=a(e,t);return n(r)?r:void 0}},E2jh:function(e,t,r){r("rGqo"),r("yt8O"),r("Btvt");var n,a=r("2gN3"),o=(n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!o&&o in e}},EpBk:function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GNiM:function(e,t,r){r("pIFo");var n=r("I01J"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,(function(e,r,n,a){t.push(n?a.replace(o,"$1"):r||e)})),t}));e.exports=i},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},H8j4:function(e,t,r){var n=r("QkVE");e.exports=function(e,t){var r=n(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}},Hvzi:function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},I01J:function(e,t,r){var n=r("44Ds");e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},JHgL:function(e,t,r){var n=r("QkVE");e.exports=function(e){return n(this,e).get(e)}},JSQU:function(e,t,r){var n=r("YESw");e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},KMkd:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},KfNM:function(e,t,r){r("a1Th"),r("h7Nl"),r("Btvt");var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,r){var n=r("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},NKxu:function(e,t,r){r("pIFo"),r("Oyvg"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("lSCD"),a=r("E2jh"),o=r("GoyQ"),i=r("3Fdi"),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,l=s.toString,f=c.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||a(e))&&(n(e)?d:u).test(i(e))}},Npjl:function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},NykK:function(e,t,r){var n=r("nmnc"),a=r("AP2z"),o=r("KfNM"),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),o=r("vhPU"),i=/"/g,u=function(e,t,r,n){var a=String(o(e)),u="<"+t;return""!==r&&(u+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),u+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(u),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},QkVE:function(e,t,r){r("bWfx");var n=r("EpBk");e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},SfRM:function(e,t,r){var n=r("YESw");e.exports=function(){this.__data__=n?n(null):{},this.size=0}},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r("q1tI")),i=f(r("17x9")),u=f(r("8+s/")),s=f(r("bmMU")),c=r("v1p5"),l=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,g,y=(0,u.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),m=(T=y,g=E=function(e){function t(){return p(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=u,t.titleAttributes=n({},i),t));case l.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case l.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),u=(0,c.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:u,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},WFqU:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r("yLpj"))},Xi7e:function(e,t,r){var n=r("KMkd"),a=r("adU4"),o=r("tMB7"),i=r("+6XX"),u=r("Z8oC");function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=u,e.exports=s},YESw:function(e,t,r){var n=r("Cwc5")(Object,"create");e.exports=n},Z0cm:function(e,t,r){r("LK8F");var n=Array.isArray;e.exports=n},Z8oC:function(e,t,r){var n=r("y1pI");e.exports=function(e,t){var r=this.__data__,a=n(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}},ZWtO:function(e,t,r){var n=r("4uTw"),a=r("9Nap");e.exports=function(e,t){for(var r=0,o=(t=n(t,e)).length;null!=e&&r<o;)e=e[a(t[r++])];return r&&r==o?e:void 0}},adU4:function(e,t,r){var n=r("y1pI"),a=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():a.call(t,r,1),--this.size,!0)}},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var u,s,c,l=n(t),f=n(r);if(l&&f){if((s=t.length)!=r.length)return!1;for(u=s;0!=u--;)if(!e(t[u],r[u]))return!1;return!0}if(l!=f)return!1;var d=t instanceof Date,p=r instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,T=r instanceof RegExp;if(h!=T)return!1;if(h&&T)return t.toString()==r.toString();var E=a(t);if((s=E.length)!==a(r).length)return!1;for(u=s;0!=u--;)if(!o.call(r,E[u]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(u=s;0!=u--;)if(!("_owner"===(c=E[u])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},dt0z:function(e,t,r){var n=r("zoYe");e.exports=function(e){return null==e?"":n(e)}},e4Nc:function(e,t,r){var n=r("fGT3"),a=r("k+1r"),o=r("JHgL"),i=r("pSRY"),u=r("H8j4");function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=a,s.prototype.get=o,s.prototype.has=i,s.prototype.set=u,e.exports=s},eUgh:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}},ebwN:function(e,t,r){var n=r("Cwc5")(r("Kz5y"),"Map");e.exports=n},ekgI:function(e,t,r){var n=r("YESw"),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:a.call(t,e)}},fGT3:function(e,t,r){var n=r("4kuk"),a=r("Xi7e"),o=r("ebwN");e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(o||a),string:new n}}},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"k+1r":function(e,t,r){var n=r("QkVE");e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},lSCD:function(e,t,r){var n=r("NykK"),a=r("GoyQ");e.exports=function(e){if(!a(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},mwIZ:function(e,t,r){var n=r("ZWtO");e.exports=function(e,t,r){var a=null==e?void 0:n(e,t);return void 0===a?r:a}},nmnc:function(e,t,r){var n=r("Kz5y").Symbol;e.exports=n},pSRY:function(e,t,r){var n=r("QkVE");e.exports=function(e){return n(this,e).has(e)}},tMB7:function(e,t,r){var n=r("y1pI");e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},u8Dt:function(e,t,r){var n=r("YESw"),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return a.call(t,e)?t[e]:void 0}},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=s(r("q1tI")),i=s(r("MgzW")),u=r("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var c,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,u.TAG_NAMES.TITLE),r=E(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return E(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},T=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||r===u.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===u.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==u.TAG_PROPERTIES.INNER_HTML&&s!==u.TAG_PROPERTIES.CSS_TEXT&&s!==u.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),s=0;s<o.length;s++){var c=o[s],l=(0,i.default)({},a[c],n[c]);a[c]=l}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){g(e)}),0)}),y=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,b=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(u.TAG_NAMES.BODY,n),R(u.TAG_NAMES.HTML,a),O(d,p);var h={baseTag:w(u.TAG_NAMES.BASE,r),linkTags:w(u.TAG_NAMES.LINK,o),metaTags:w(u.TAG_NAMES.META,i),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,s),scriptTags:w(u.TAG_NAMES.SCRIPT,l),styleTags:w(u.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(h).forEach((function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(E[e]=h[e].oldTags)})),t&&t(),c(e,T,E)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[u.REACT_TAG_MAP[r]||r]=e[r],t}),t)},N=function(e,t,r){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[u.HELMET_ATTRIBUTE]=!0,a=I(r,n),[o.default.createElement(u.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),o=_(t);return a?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,n)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=u.REACT_TAG_MAP[e]||e;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[u.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){A&&v(A),e.defer?A=m((function(){b(e,(function(){A=null}))})):(b(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:N(u.TAG_NAMES.BASE,t,n),bodyAttributes:N(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:N(u.ATTRIBUTE_NAMES.HTML,a,n),link:N(u.TAG_NAMES.LINK,o,n),meta:N(u.TAG_NAMES.META,i,n),noscript:N(u.TAG_NAMES.NOSCRIPT,s,n),script:N(u.TAG_NAMES.SCRIPT,c,n),style:N(u.TAG_NAMES.STYLE,l,n),title:N(u.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:h([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:E(e,u.HELMET_PROPS.DEFER),encode:E(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:T(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:T(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=m,t.warn=S}).call(this,r("yLpj"))},vx99:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return g}));var n=r("q1tI"),a=r.n(n),o=r("mwIZ"),i=r.n(o),u=r("TJpk"),s=r.n(u),c=r("7oih"),l=r("Wbzz"),f=r("9eSz"),d=r.n(f),p=r("XAo9"),h=r.n(p),T=function(e){var t=e.article;return a.a.createElement("div",{className:h.a.preview},a.a.createElement(d.a,{alt:"",fluid:t.heroImage.fluid}),a.a.createElement("h3",{className:h.a.previewTitle},a.a.createElement(l.a,{to:"/blog/"+t.slug},t.title)),a.a.createElement("small",null,t.publishDate),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),t.tags&&t.tags.map((function(e){return a.a.createElement("p",{className:h.a.tag,key:e},e)})))};var E=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=i()(this,"props.data.site.siteMetadata.title"),t=i()(this,"props.data.allContentfulBlogPost.edges");return a.a.createElement(c.a,{location:this.props.location},a.a.createElement("div",{style:{background:"#fff"}},a.a.createElement(s.a,{title:e}),a.a.createElement("div",{className:"wrapper"},a.a.createElement("h2",{className:"section-headline"},"Recent articles"),a.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;return a.a.createElement("li",{key:t.slug},a.a.createElement(T,{article:t}))}))))))},n}(a.a.Component),g=(t.default=E,"1833322291")},y1pI:function(e,t,r){var n=r("ljhN");e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},zoYe:function(e,t,r){r("a1Th"),r("h7Nl"),r("Btvt");var n=r("nmnc"),a=r("eUgh"),o=r("Z0cm"),i=r("/9aa"),u=n?n.prototype:void 0,s=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(i(t))return s?s.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}}}]);
//# sourceMappingURL=component---src-pages-blog-js-1fa8eb86e8ad54ba52b0.js.map