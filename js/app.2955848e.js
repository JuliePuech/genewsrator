(function(e){function n(n){for(var r,i,a=n[0],u=n[1],c=n[2],d=0,p=[];d<a.length;d++)i=a[d],s[i]&&p.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==s[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},s={1:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/genewsrator/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var l=u;o.push([7,0]),t()})({"0YYs":function(e,n,t){},"5hKd":function(e,n,t){"use strict";var r=t("k5Rx"),s=t.n(r);s.a},"5pot":function(e,n,t){"use strict";var r=t("Uc8q"),s=t.n(r);s.a},"6ZZl":function(e,n,t){"use strict";var r=t("XzyU"),s=t.n(r);s.a},7:function(e,n,t){e.exports=t("Vtdi")},"7NlO":function(e,n,t){"use strict";var r=t("0YYs"),s=t.n(r);s.a},CCLW:function(e,n,t){"use strict";var r=t("k/tj"),s=t.n(r);s.a},HtGe:function(e,n,t){},Uc8q:function(e,n,t){},Vtdi:function(e,n,t){"use strict";t.r(n);t("VRzm");var r=t("Kw5r"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],i=(t("nNx0"),t("KHd+")),a={},u=Object(i["a"])(a,s,o,!1,null,null,null),c=u.exports,l=t("jE9Z"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("screen",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"home_intro"},[t("img",{attrs:{src:"/img/home.png",alt:""}}),t("loading")],1),t("screen",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"home_text"},[t("div",[t("h2",[e._v("AVERTISSEMENT")]),t("h3",[e._v("Effets indésirables")]),t("p",[e._v("\n          Risque d'addiction"),t("br"),e._v("\n                  - "),t("br"),e._v("\nRisque de pollution de l'espace médiatique"),t("br"),e._v("\n                  -"),t("br"),e._v("\n        Risque d'infobésité\n        ")])])]),t("screen",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"home_button"},[t("div",[t("img",{attrs:{src:"/img/button.png",alt:""},on:{click:e.generate}})])]),t("windows",{directives:[{name:"show",rawName:"v-show",value:e.hasWindows,expression:"hasWindows"}],attrs:{windows:e.windows}})],1)},p=[],f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Screen"},[e._t("default")],2)},m=[],h={name:"Screen"},g=h,v=(t("5hKd"),Object(i["a"])(g,f,m,!1,null,null,null)),w=v.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("img",{attrs:{src:"/img/loading.svg",alt:""}})},b=[],x={name:"Loading"},y=x,U=(t("6ZZl"),Object(i["a"])(y,_,b,!1,null,"229421f2",null)),j=U.exports,C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Screen LongScreen"},[t("div",{staticClass:"Windows"},e._l(e.windows,function(n,r){return t("window",{key:r,attrs:{sentence:n,index:r,height:r===e.currentWindow?1:0},on:{focus:function(n){e.currentWindow=r},close:function(n){e.close(r)},share:function(n){e.share(r)}}})}))])},N=[],O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Window",style:{top:100*e.index+"px",transform:"translateX("+10*Math.random()*(Math.random()>.5?-1:1)+"%)",zIndex:e.height,order:e.index}},[t("div",{staticClass:"Window__close",on:{click:function(n){e.$emit("close")}}},[t("img",{attrs:{src:"/img/croix.png",alt:""}})]),t("div",{staticClass:"Window__share",on:{click:function(n){e.$emit("share")}}},[t("img",{attrs:{src:"/img/avion.png",alt:""}})]),t("div",{staticClass:"Window__content",on:{click:function(n){e.$emit("focus")}}},[e._v("\n    "+e._s(e.sentence)+"\n  ")])])},k=[],S=(t("xfY5"),{name:"Window",props:{height:{type:Number,default:0},index:{type:Number,default:0},sentence:{type:String,default:""}}}),W=S,E=(t("CCLW"),Object(i["a"])(W,O,k,!1,null,null,null)),$=E.exports,q={name:"Windows",data:function(){return{currentWindow:0}},components:{Window:$},props:{windows:{}},methods:{close:function(e){this.$store.commit("close",e),this.currentWindow=this.windows.length-1},getIndex:function(e){return this.$store.state["open"][e]},share:function(e){FB.ui({method:"share",href:"http://julie-puech.com/genewsrator/news/".concat(this.getIndex(e))},function(e){})}}},M=q,T=(t("nt1T"),Object(i["a"])(M,C,N,!1,null,null,null)),I=T.exports,L={name:"home",components:{Screen:w,Loading:j,Windows:I},data:function(){return{loading:!0}},computed:{hasWindows:function(){return this.$store.getters.hasSentences},windows:function(){return this.$store.getters.openSentences}},methods:{generate:function(){this.$store.commit("generate")}},mounted:function(){var e=this;setTimeout(function(){e.loading=!1},5e3)}},A=L,P=(t("5pot"),Object(i["a"])(A,d,p,!1,null,null,null)),R=P.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"News"},[t("screen",[t("div",{staticClass:"News__one"},[t("div",{staticClass:"News__one__body"},[e._v("\n        "+e._s(e.sentence)+"  \n      ")]),t("div",{staticClass:"News__one__footer"},[t("div",{staticClass:"News__one__footer__left"},[t("router-link",{attrs:{to:"/"}},[t("img",{attrs:{src:"/img/banner.png",alt:""}})])],1),t("div",{staticClass:"News__one__footer__right"},[t("img",{attrs:{src:"/img/appstore.png",alt:""}}),t("img",{attrs:{src:"/img/googleplay.png",alt:""}})])])])])],1)},Y=[],Z={name:"News",props:{id:{}},components:{Screen:w},computed:{sentence:function(){return this.$store.state["sentences"][this.id]}},watch:{sentence:function(e){}}},z=Z,F=(t("7NlO"),Object(i["a"])(z,B,Y,!1,null,null,null)),K=F.exports;r["a"].use(l["a"]);var V=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:R},{path:"/news/:id",name:"news",component:K,props:!0}]}),G=t("L2JU"),H=["Une ado essaie d'échapper à son violeur qui reste de marbre.","Une mère essaie d'échapper à une jument pour ne jamais payer d'amende.",'Un chasseur viole une jument régulièrement pour la "former" pour sa vie d\'adulte.',"Une étude dévoile la seule astuce qui est infaillible pour se baigner nu dans un étang.","Des policiers essaient d'échapper à un groupe de filles mortes.","La fillette de 6 ans violait leur fille de 12 ans qui est morte.","Des chewing gum au cannabis pour soulager son violeur qu'il confond avec un sanglier.","Un chasseur torture ses enfants pour les manger devant leurs yeux horrifiés.","Un fermier mange des OGM pour rigoler.","Une femme tue un arbre pour déstresser.","Un homme vole un crabe pour le cacher.","Un homme collecte des cendriers pour les placer sur une tombe.","Un couple implante des puces dans des bébés.","Un homme pousse un jeune enfant pour le rendre handicapé.","Un prêtre découvre un complot dans un hôtel.","Un policier dévoile sa fibromyalgie en disant qu'il est vierge.","Un président révèle pourquoi un groupe de filles se baignaient nues dans un étang.","Un pompier lance l'alerte sur les smartphones qui causent énormément de stress.","Un inconnu dénonce une construction frauduleuse pour devenir célèbre.","Un homme utilise un chat pour rembourser ses dettes.","Une femme dénonce l'utilisation de pesticides en Allemagne.","Un quadragénaire se sert d'un élevage de saumons pour pouvoir partir en vacances.","Une personne célèbre dévoile des vaccins périmés pour monter un business.","Une personne âgée mange des insectes pour y voir plus clair.","Une femme vole un dentier à l'aide d'une kalash.","Un prêtre détruit un supermarché pour rigoler.","Un homme mange des pneus pour devenir célèbre.","Un femme de 73 ans écrase son mari pour s'en débarrasser.","Une enfant dénonce la vente de cannabis dans son école."];r["a"].use(G["a"]);var J=new G["a"].Store({state:{sentences:H,open:[]},getters:{sentence:function(e){return function(n){return n.sentences[e]}},hasSentences:function(e){return e.open.length>0},openSentences:function(e){return e.open.map(function(n){return e.sentences[n]})}},mutations:{generate:function(e){if(e.open.length!==e.sentences.length){var n=Math.floor(Math.random()*e.sentences.length);while(-1!==e.open.indexOf(n))n=Math.floor(Math.random()*e.sentences.length);e.open.unshift(n)}},close:function(e,n){e.open=e.open.filter(function(e,t){return t!==n})}},actions:{share:function(e,n){e.commit;return new Promise(function(e,n){})}}}),X=function(e){return window.fbAsyncInit=function(){FB.init({appId:e,autoLogAppEvents:!0,xfbml:!0,version:"v3.0"})},function(e,n,t){var r,s=e.getElementsByTagName(n)[0];e.getElementById(t)||(r=e.createElement(n),r.id=t,r.src="https://connect.facebook.net/en_US/sdk.js",s.parentNode.insertBefore(r,s))}},D="672609486465692",Q=t("lIOY");Object(Q["a"])("".concat("/genewsrator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:V,store:J,render:function(e){return e(c)}}).$mount("#app"),X(D)(document,"script","facebook-jssdk")},XzyU:function(e,n,t){},"k/tj":function(e,n,t){},k5Rx:function(e,n,t){},nNx0:function(e,n,t){"use strict";var r=t("uWEC"),s=t.n(r);s.a},nt1T:function(e,n,t){"use strict";var r=t("HtGe"),s=t.n(r);s.a},uWEC:function(e,n,t){}});
//# sourceMappingURL=app.2955848e.js.map