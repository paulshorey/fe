(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("r8ck"),i=a("GIND");var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,{location:this.props.location,meta_title:"Contact us"},r.a.createElement(i.a,{location:this.props.location,open_contact:!0}))},n}(r.a.Component);t.default=s},GIND:function(e,t,a){"use strict";a("VRzm"),a("Btvt");var n=a("o0o1"),r=a.n(n),o=(a("ls82"),a("q1tI")),i=a.n(o),s=a("Wbzz"),l=a("Rnav"),c=a("P+Yw"),u=a("IP2g"),m=a("4Bjl"),p=a("vOnD"),d=p.a.div.withConfig({displayName:"AboutUsstyled__ImageDivStyled",componentId:"sc-185qyya-0"})(["position:relative;width:100%;height:100%;img{width:100%;}&.ImageWithZoom{div{width:100%;height:100%;background-position:center;}}"]),h=p.a.div.withConfig({displayName:"AboutUsstyled__CarouselStyled",componentId:"sc-185qyya-1"})(["margin:1.25rem 0.5rem 1.75rem -0.25rem;.carousel{position:relative;li.carousel__slide{border-radius:2px;overflow:hidden;margin-right:0.5vw;margin-left:0.5vw;}img.carousel__image{padding:0 1%;}.arrows{position:absolute;height:calc(100% - 4rem);width:calc(100% + 2rem);left:-1rem;top:0;pointer-events:none;.arrow{pointer-events:all;position:absolute;border-radius:1.25rem;width:2.5rem;height:2.5rem;top:45%;font-size:2.5rem;line-height:2.6rem;color:white;background:linear-gradient(45deg,var(--color-link),hsl(205,100%,56%),var(--color-link));box-shadow:-1px 2px 3px white;border:none;outline:none;&:hover{background:var(--color-link);}svg{position:relative;top:-0.1rem;}&.arrow-right{right:0;svg{right:-0.075rem;}}&.arrow-left{svg{left:-0.075rem;}}&[disabled]{opacity:0.25;cursor:default;}}}.links{margin-top:0.25rem;position:relative;.link{font-size:0.9rem;border:none;color:var(--color-accent-dark);background:none;padding:0;margin:0 0.75rem 0 0;cursor:pointer;text-decoration:underline;&.link-right{position:absolute;right:0;}&[disabled]{opacity:0;visibility:hidden;}}}}"]),g=a("mZMQ"),b=function(e){var t=e.src,a=e.alt,n=void 0===a?"":a;return i.a.createElement(d,{className:"ImageWithZoom"},i.a.createElement(g.e,{alt:n,src:t}))},f=a("hmtA"),v=a.n(f),E=a("uB96"),y=function(){return i.a.createElement(h,null,"object"==typeof window&&i.a.createElement(g.c,{visibleSlides:Math.round(window.innerWidth/300),totalSlides:7,step:Math.round(window.innerWidth/300),naturalSlideWidth:600,naturalSlideHeight:600},i.a.createElement(g.g,{className:v.a.slider},i.a.createElement(g.f,{index:5},i.a.createElement(b,{src:"/photos/aboutus.jpg"})),i.a.createElement(g.f,{index:0},i.a.createElement(b,{src:"/photos/desk-paul.jpg"})),i.a.createElement(g.f,{index:1},i.a.createElement(b,{src:"/photos/desk-samira.jpg"})),i.a.createElement(g.f,{index:2},i.a.createElement(b,{src:"/photos/city-samira-paul.jpg"})),i.a.createElement(g.f,{index:4},i.a.createElement(b,{src:"/photos/aboutus-utah-road.jpg"})),i.a.createElement(g.f,{index:3},i.a.createElement(b,{src:"/photos/about-paul-rocks.jpg"}))),i.a.createElement("div",{className:"arrows"},i.a.createElement(g.a,{className:"arrow arrow-left"},i.a.createElement(u.a,{icon:E.b,className:""})),i.a.createElement(g.b,{className:"arrow arrow-right"},i.a.createElement(u.a,{icon:E.c,className:""})))))},w=a("M4T4"),k=a("5gr6");function N(e,t,a,n,r,o,i){try{var s=e[o](i),l=s.value}catch(c){return void a(c)}s.done?t(l):Promise.resolve(l).then(n,r)}function _(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){N(o,n,r,i,s,"next",e)}function s(e){N(o,n,r,i,s,"throw",e)}i(void 0)}))}}var x=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).componentDidMount=_(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.open_contact&&setTimeout((function(){a.setState({popupActive:!0})}),1e3);case 1:case"end":return e.stop()}}),e)}))),a.componentDidUpdate=function(){var e=_(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.open_contact&&a.props.open_contact!==t.open_contact&&a.setState({popupActive:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={popupActive:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{location:this.props.location,standalone:!0}),i.a.createElement(c.a,{className:"content"},i.a.createElement("div",{className:"before"},i.a.createElement("div",{className:"titleWithButton"},i.a.createElement("h2",null,"About us:"),i.a.createElement(c.b,{className:"ContactUsButton clickable",onClick:function(){e.setState({popupActive:!0})}},"Contact us ",i.a.createElement(u.a,{icon:m.t,className:""}))),i.a.createElement("p",null,"We are a husband and wife team based in Kansas City, MO (USA) 👨🏼‍💻 👩🏽‍💼 ! Combining our talents we are developing a dynamic English ",i.a.createElement(s.a,{to:"/word?str=best"},"thesaurus")," for use in digital applications. Our thesaurus is culturally sensitive, modern and quirky. It is the backbone of our synonym based domain suggestion API."," "),i.a.createElement("p",null,"The English language is complex. This is why Paul built custom admin tools for back-end content editing. Samira used these savvy tools to edit countless words and phrases to produce the reliable results our suggestion tool provides. We are actively editing our thesaurus content everyday which means our API only keeps getting better. We plan to build on this foundation and expand our domain and text analysis APIs, then expand to more content-rich applications."),i.a.createElement(y,null)),i.a.createElement("p",{className:"bio"},i.a.createElement("b",null,"Paul Shorey")," (",i.a.createElement("a",{className:"link",href:"https://paulshorey.com",target:"_blank"},"paulshorey.com"),") has been making websites and apps for 12 years. JavaScript, UI design, front-end, back-end, systems and databases. Paul has a BFA in fine art, but has embraced software development as his art medium of choice. Programming is creative, and very powerful. When not coding, he enjoys building light fixtures, growing micro-greens, and doing adventure sports like hang-gliding."),i.a.createElement("p",{className:"bio"},i.a.createElement("b",null,"Samira Ali")," holds a Bachelor in Sociology. She speaks Swahili and Mandarin, can read/write Arabic, and is currently learning both French and Spanish. Samira’s previous roles have ranged from social media coordinator, graphic designer, researcher, and an electronic health records consultant. She has been a part of several non-profits around Kansas City and has also spearheaded her own initiatives. Samira is passionate about human centered design. She believes applications should be built with diversity of culture, brains and bodies in mind."),i.a.createElement("p",{className:"bio"},i.a.createElement("span",{className:"link",onClick:function(){e.setState({popupActive:!0})}},"Lets meet...")),i.a.createElement("div",{className:"before"},i.a.createElement("div",{className:"titleWithButton"},i.a.createElement("h2",null,"This is a work in progress...")),i.a.createElement("p",null,i.a.createElement("b",null,"We are currently ")," wrapping up the"," ",i.a.createElement("a",{href:"https://rapidapi.com/nlp-studio/api/domain-name-search1",target:"_blank"},"domain suggestions API")," ","for registrars, and app for consumers -"," ",i.a.createElement("a",{className:"link",href:"https://nlpthesaurus.com",target:"_blank"},"NLP.Domains"),"."),i.a.createElement("p",null,i.a.createElement("b",null,"Also ")," launching our dynamic English language thesaurus for AI and text analysis applications -"," ",i.a.createElement("a",{className:"link",href:"https://nlpthesaurus.com",target:"_blank"},"NLP",i.a.createElement(k.d,null),"Thesaurus",i.a.createElement(k.d,null),".com")),i.a.createElement("p",null,i.a.createElement("b",null,"Coming soon: ")," more nifty domain tools, text analysis and sentiment analysis APIs, then we’ll test these tools on more demanding text-based data science projects: aggregation, categorization, visualization, and search of publicly available online content (ex: indie movie recommendations, e-business resources, calendar of online gatherings, map of cultural and social places, and dashboards to monitor economic or political activity) -"," ",i.a.createElement("a",{className:"link",href:"https://nlp.studio",target:"_blank"},"NLP.Studio"))),i.a.createElement("div",{className:"after"},i.a.createElement("p",{className:"bio"},i.a.createElement("b",null,"Let’s work together! ")," After NLP.Domains and NLPThesaurus.com, our plans are to gather experiences and meet new partners while building cool things. If you are building something interesting, we’d love to hear about it. We might be able to contribute our experience to your team. Throughout this journey, we hope to meet new partners, mentors, and friends."),i.a.createElement("p",{className:"bio"},i.a.createElement("b",null,"Dedicated to developing beautiful APIs. "),"We are passionate about building and sharing a repository of quality APIs with the tech world."),i.a.createElement("p",{className:"bio"},i.a.createElement("b",null,"Contact us "),"for any reason, even to just say hello. Give us your first impression of the site, suggestions, or thesaurus. Try out our services. It is a work in progress, so please reach out if anything in particular stands out. Thank you for your visit today!")),i.a.createElement("div",{className:"after"},i.a.createElement(c.b,{className:"ContactUsButton clickable",onClick:function(){e.setState({popupActive:!0})}},"Contact us ",i.a.createElement(u.a,{icon:m.t,className:""}))),i.a.createElement("p",null," "),i.a.createElement("p",null," "),i.a.createElement("p",null," ")),i.a.createElement(w.a,{show:!!this.state.popupActive,onClose:function(){e.setState({popupActive:!1})}}))},n}(i.a.Component);t.a=x}}]);
//# sourceMappingURL=component---src-pages-contact-js-f0beb34ddbd0e76beb46.js.map