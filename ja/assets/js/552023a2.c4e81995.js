"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1898],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(b,i(i({ref:e},d),{},{components:n})):r.createElement(b,i({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5017:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"cloud-native",title:"Cloud Native Middlewares"},u=void 0,p={unversionedId:"cloud-native",id:"cloud-native",title:"Cloud Native Middlewares",description:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/ja/docs/cloud-native",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CloudNative.mdx",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Cloud Native Middlewares"},sidebar:"docs",previous:{title:"GraphQL Middlewares",permalink:"/ja/docs/graphql-middlewares"},next:{title:"API \u306e\u6982\u8981",permalink:"/ja/docs/api-overview"}},d={},c=[{value:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:3}],s=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}},m=s("Tabs"),b=s("TabItem"),f={toc:c};function h(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},"\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,o.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes")," \u306e\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"envoy-authz")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization middleware For ",(0,o.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio")," and ",(0,o.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Envoy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"kubesphere-authz")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization middleware for ",(0,o.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere")))))),(0,o.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"ODPF\u30b7\u30fc\u30eb\u30c9")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Open Data Platform")),(0,o.kt)("td",{parentName:"tr",align:null},"ODPF Shield\u306f\u3001\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u306a\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u8a8d\u8b58\u30ea\u30d0\u30fc\u30b9\u30fb\u30d7\u30ed\u30ad\u30b7\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002")))))))}h.isMDXComponent=!0}}]);