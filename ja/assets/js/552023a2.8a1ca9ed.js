"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},o=void 0,i={unversionedId:"cloud-native",id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/ja/docs/cloud-native",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Cloud Native Middlewares",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},sidebar:"docs",previous:{title:"GraphQL Middlewares",permalink:"/ja/docs/graphql-middlewares"},next:{title:"API",permalink:"/ja/docs/category/api"}},d={},p=[{value:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=u("Tabs"),c=u("TabItem"),m={toc:p};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes")," \u306e\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"envoy-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Authorization middleware For ",(0,n.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio")," and ",(0,n.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Envoy"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"kubesphere-authz")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Authorization middleware for ",(0,n.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere")))))),(0,n.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"ODPF\u30b7\u30fc\u30eb\u30c9")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Open Data Platform")),(0,n.kt)("td",{parentName:"tr",align:null},"ODPF Shield\u306f\u3001\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u306a\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u8a8d\u8b58\u30ea\u30d0\u30fc\u30b9\u30fb\u30d7\u30ed\u30ad\u30b7\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002")))))))}b.isMDXComponent=!0}}]);