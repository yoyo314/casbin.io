"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},i=void 0,s={unversionedId:"enforcers",id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",source:"@site/docs/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/docs/enforcers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Enforcers.mdx",tags:[],version:"current",lastUpdatedBy:"Aarav Arora",lastUpdatedAt:1664369368,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},sidebar:"docs",previous:{title:"Extensions",permalink:"/docs/category/extensions"},next:{title:"Adapters",permalink:"/docs/adapters"}},c={},l=[{value:"Supported enforcers",id:"supported-enforcers",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("Tabs"),u=d("TabItem"),f={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer")," is the main structure in Casbin. It acts as an interface for users to make operations on policy rules and models."),(0,a.kt)("h2",{id:"supported-enforcers"},"Supported enforcers"),(0,a.kt)("p",null,"A complete list of Casbin enforcers is provided as below. Any 3rd-party contribution on a new enforcer is welcomed, please inform us and we will put it in this list:)"),(0,a.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Enforcer"),(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"Enforcer")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Enforcer")," is the basic structure for users to interact with Casbin policies and models. You can find more details of ",(0,a.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s API at ",(0,a.kt)("a",{parentName:"td",href:"/docs/management-api"},"here"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," is based on ",(0,a.kt)("inlineCode",{parentName:"td"},"Enforcer"),". It supports to cache the evaluation result of a request in memory by a map and clear caches in a specified expire time. Moreover, it is guaranted to be thread-safe by a Read-Write lock. You can use ",(0,a.kt)("inlineCode",{parentName:"td"},"EnableCache")," to enable to cache evaluation results (default is enabled). ",(0,a.kt)("inlineCode",{parentName:"td"},"CachedEnforcer"),"'s other API is the same as ",(0,a.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"DistributedEnforcer")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," supports multiple instances in distributed clusters. It wraps ",(0,a.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," for dispatcher. You can find more details about dispather at ",(0,a.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"here"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," is based on ",(0,a.kt)("inlineCode",{parentName:"td"},"Enforcer")," and provides synchronized access. It is thread-safe.")))))))}m.isMDXComponent=!0}}]);