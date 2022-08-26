"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6364],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},492:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},c=void 0,l={unversionedId:"enforcers",id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/fr/docs/enforcers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},sidebar:"docs",previous:{title:"Chargement du sous-ensemble de la politique",permalink:"/fr/docs/policy-subset-loading"},next:{title:"Adaptateurs",permalink:"/fr/docs/adapters"}},u={},p=[{value:"Formateurs support\xe9s",id:"formateurs-support\xe9s",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=d("Tabs"),m=d("TabItem"),b={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Enforcer")," est la structure principale de Casbin. Il sert d'interface pour permettre aux utilisateurs de faire des op\xe9rations sur des r\xe8gles et des mod\xe8les de politique."),(0,o.kt)("h2",{id:"formateurs-support\xe9s"},"Formateurs support\xe9s"),(0,o.kt)("p",null,"Une liste compl\xe8te des for\xe7ateurs Casbin est fournie ci-dessous. Any 3rd-party contribution on a new enforcer is welcomed, please inform us and we will put it in this list:)"),(0,o.kt)(f,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Enforcer"),(0,o.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"Enforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," est la structure de base pour que les utilisateurs interagissent avec les politiques et mod\xe8les de Casbin. Vous pouvez trouver plus de d\xe9tails sur l'API de ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"sur ",(0,o.kt)("a",{parentName:"td",href:"/docs/management-api"},"ici"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," est bas\xe9 sur ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),". Il permet de mettre en cache le r\xe9sultat de l'\xe9valuation d'une requ\xeate en m\xe9moire par une carte et d'effacer les caches dans un temps d'expiration sp\xe9cifi\xe9. De plus, il est garanti d'\xeatre sans fil par un verrou en lecture et \xe9criture. Vous pouvez utiliser ",(0,o.kt)("inlineCode",{parentName:"td"},"EnableCache")," pour activer la mise en cache des r\xe9sultats d'\xe9valuation (par d\xe9faut activ\xe9). L'autre API de ",(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer"),"est la m\xeame que ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"DistributedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," supporte plusieurs instances dans des instances distribu\xe9es. Il enveloppe ",(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," pour le r\xe9partiteur. Vous pouvez trouver plus de d\xe9tails sur la dispather \xe0 ",(0,o.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"ici"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," est bas\xe9 sur ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," et fournit un acc\xe8s synchronis\xe9. Il est s\xe9curitaire pour les fils.")))))))}k.isMDXComponent=!0}}]);