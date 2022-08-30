"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,b=c["".concat(d,".").concat(m)]||c[m]||s[m]||i;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},o=void 0,l={unversionedId:"cloud-native",id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/de/docs/cloud-native",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},sidebar:"docs",previous:{title:"GraphQL Middlewares",permalink:"/de/docs/graphql-middlewares"},next:{title:"API-\xdcbersicht",permalink:"/de/docs/api-overview"}},d={},u=[{value:"Cloud Native Projekte",id:"cloud-native-projekte",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=p("Tabs"),c=p("TabItem"),m={toc:u};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"cloud-native-projekte"},"Cloud Native Projekte"),(0,n.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,n.kt)("th",{parentName:"tr",align:null},"Autor"),(0,n.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Autorisierungs-Middleware f\xfcr ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"envoy-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Autorisierungs-Middleware f\xfcr ",(0,n.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio")," und ",(0,n.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Gesandter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"kubesphere-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Autorisierungs-Middleware f\xfcr ",(0,n.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere")))))),(0,n.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,n.kt)("th",{parentName:"tr",align:null},"Autor"),(0,n.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"ODPF-Schild")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Datenplattform \xf6ffnen")),(0,n.kt)("td",{parentName:"tr",align:null},"ODPF Shield ist Cloud native role-based authorization aware Reverse-Proxy Service.")))))))}b.isMDXComponent=!0}}]);