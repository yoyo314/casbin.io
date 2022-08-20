"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7391],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},c=void 0,l={unversionedId:"enforcers",id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/de/docs/enforcers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},sidebar:"docs",previous:{title:"Richtlinien-Untermengenladen",permalink:"/de/docs/policy-subset-loading"},next:{title:"Adapter",permalink:"/de/docs/adapters"}},d={},u=[{value:"Unterst\xfctzte Vollstrecker",id:"unterst\xfctzte-vollstrecker",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=p("Tabs"),m=p("TabItem"),b={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Enforcer")," ist die Hauptstruktur in Casbin. Es fungiert als Schnittstelle f\xfcr Benutzer, um Operationen an Richtlinien-Regeln und -modellen durchzuf\xfchren."),(0,i.kt)("h2",{id:"unterst\xfctzte-vollstrecker"},"Unterst\xfctzte Vollstrecker"),(0,i.kt)("p",null,"Eine vollst\xe4ndige Liste der Vollstrecker von Casbin wird wie unten angegeben. Any 3rd-party contribution on a new enforcer is welcomed, please inform us and we will put it in this list:)"),(0,i.kt)(f,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Enforcer"),(0,i.kt)("th",{parentName:"tr",align:null},"Autor"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"Enforcer")),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enforcer")," ist die grundlegende Struktur, die Benutzer mit Casbin-Richtlinien und -Modellen interagieren k\xf6nnen. Weitere Details der ",(0,i.kt)("inlineCode",{parentName:"td"},"Enforcer"),"API finden Sie unter ",(0,i.kt)("a",{parentName:"td",href:"/docs/management-api"},"hier"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," basiert auf ",(0,i.kt)("inlineCode",{parentName:"td"},"Enforcer"),". Es unterst\xfctzt das Auswerteergebnis einer Anfrage im Speicher durch eine Karte und leere Caches in einer bestimmten Ablaufzeit. Dar\xfcber hinaus wird gew\xe4hrleistet, dass es Thread-sicher durch ein Read-Write-Schloss ist. Du kannst ",(0,i.kt)("inlineCode",{parentName:"td"},"EnableCache")," verwenden, um Auswerteergebnisse zu cachen (Standard ist aktiviert). ",(0,i.kt)("inlineCode",{parentName:"td"},"Die andere API von CachedEnforcer"),"ist die gleiche wie ",(0,i.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"DistributedEnforcer")),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," unterst\xfctzt mehrere Instanzen in verteilten Clustern. Es verpackt ",(0,i.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," f\xfcr den Dispatcher. Weitere Details zum Dispather finden Sie unter ",(0,i.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"hier"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," basiert auf ",(0,i.kt)("inlineCode",{parentName:"td"},"Enforcer")," und bietet synchronisierten Zugriff. Es ist Thread-sicher.")))))))}k.isMDXComponent=!0}}]);