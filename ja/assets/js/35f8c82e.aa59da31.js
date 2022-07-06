"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[855],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3459:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],c={id:"dispatchers",title:"\u6d3e\u9063\u8005"},l=void 0,s={unversionedId:"dispatchers",id:"dispatchers",title:"\u6d3e\u9063\u8005",description:"\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u306e\u5897\u5206\u5909\u66f4\u3092\u540c\u671f\u3055\u305b\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4e00\u8cab\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u3044\u304b\u3060\u306a\u3069\u306e\u4e00\u8cab\u6027\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u57fa\u3065\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5206\u6563\u30af\u30e9\u30b9\u30bf\u3092\u7c21\u5358\u306b\u78ba\u7acb\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Dispatchers.mdx",sourceDirName:".",slug:"/dispatchers",permalink:"/ja/docs/dispatchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Dispatchers.mdx",tags:[],version:"current",frontMatter:{id:"dispatchers",title:"\u6d3e\u9063\u8005"},sidebar:"docs",previous:{title:"Watchers",permalink:"/ja/docs/watchers"},next:{title:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",permalink:"/ja/docs/role-managers"}},p={},u=[{value:"DistributedEnforcer",id:"distributedenforcer",level:3}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=d("Tabs"),f=d("TabItem"),b={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u306e\u5897\u5206\u5909\u66f4\u3092\u540c\u671f\u3055\u305b\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4e00\u8cab\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u3044\u304b\u3060\u306a\u3069\u306e\u4e00\u8cab\u6027\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u57fa\u3065\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5206\u6563\u30af\u30e9\u30b9\u30bf\u3092\u7c21\u5358\u306b\u78ba\u7acb\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6d3e\u9063\u8005\u306e\u65b9\u6cd5\u306f\u4e8c\u3064\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002 \u6700\u521d\u306f\u30ab\u30b7\u30e5\u30d3\u30f3\u3068\u7d44\u307f\u5408\u308f\u305b\u305f\u65b9\u6cd5\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u65b9\u6cd5\u306f\u30ab\u30b7\u30e5\u30d3\u30f3\u5185\u90e8\u3067\u547c\u3073\u51fa\u3055\u308c\u308b\u3079\u304d\u3067\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30ab\u30b9\u30d3\u30f3\u81ea\u4f53\u304c\u63d0\u4f9b\u3059\u308b\u3088\u308a\u5b8c\u5168\u306a API \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3082\u3046\u4e00\u3064\u306f\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u81ea\u8eab\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u30e1\u30bd\u30c3\u30c9\u3067\u3001\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306e\u521d\u671f\u5316\u30e1\u30bd\u30c3\u30c9\u3092\u542b\u307f\u307e\u3059\u3002 \u52d5\u7684\u30e1\u30f3\u30d0\u30b7\u30c3\u30d7\u3084\u8a2d\u5b9a\u5909\u66f4\u306a\u3069\u306e\u7570\u306a\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u6a5f\u80fd"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6d3e\u9063\u62c5\u5f53\u8005\u306f\u5b9f\u884c\u6642\u306b\u30ab\u30b9\u30d3\u30f3\u306e\u57f7\u884c\u8005\u306e\u4e00\u8cab\u6027\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u3092\u671b\u307f\u307e\u3059 \u305d\u306e\u305f\u3081\u3001\u521d\u671f\u5316\u6642\u306b\u30dd\u30ea\u30b7\u30fc\u304c\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306f\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002 dispatcher \u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u3059\u3079\u3066\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u72b6\u614b\u304c\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("p",null,"Casbin\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u30fc\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002 \u65b0\u3057\u3044\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306b\u5bfe\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8ca2\u732e\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30ea\u30b9\u30c8\u306b\u8a18\u8f09\u3057\u307e\u3059:)"),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u30fc"),(0,i.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/hraft-dispatcher"},"Hashicorp\u3044\u304b\u3060\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u30fc")),(0,i.kt)("td",{parentName:"tr",align:null},"\u3044\u304b\u3060(\u3044\u304b\u3060)"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hashicorp/raft"},"hashicorp/\u7b4f")," \u306b\u57fa\u3065\u3044\u3066\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u30fc")))))),(0,i.kt)("h3",{id:"distributedenforcer"},"DistributedEnforcer"),(0,i.kt)("p",null,"DistributedEnforker wraps \u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u306e SyncedEnforcer \u3092\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewDistributedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n')))))}h.isMDXComponent=!0}}]);