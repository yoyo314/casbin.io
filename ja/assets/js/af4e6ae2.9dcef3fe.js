"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[765],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",description:"Casbin performance optimization",keywords:["optimization"]},s=void 0,p={unversionedId:"performance",id:"performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",description:"Casbin performance optimization",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Performance.mdx",sourceDirName:".",slug:"/performance",permalink:"/ja/docs/performance",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Performance.mdx",tags:[],version:"current",frontMatter:{id:"performance",title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",description:"Casbin performance optimization",keywords:["optimization"]},sidebar:"docs",previous:{title:"Benchmarks",permalink:"/ja/docs/benchmark"},next:{title:"Kubernetes \u306e\u627f\u8a8d",permalink:"/ja/docs/k8s"}},l={},m=[{value:"\u5927\u5bb9\u91cf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af",id:"\u5927\u5bb9\u91cf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af",level:4},{value:"\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u6570\u304c\u591a\u3044\u3067\u3059",id:"\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u6570\u304c\u591a\u3044\u3067\u3059",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f55\u767e\u4e07\u4eba\u3082\u306e\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u6a29\u9650\u3092\u6301\u3064\u672c\u756a\u74b0\u5883\u3067\u9069\u7528\u3055\u308c\u308b\u3068\u3001Casbin\u306e\u5f37\u5236\u529b\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u901a\u5e38\u30012\u3064\u306e\u539f\u56e0\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u5927\u5bb9\u91cf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af"},"\u5927\u5bb9\u91cf\u30c8\u30e9\u30d5\u30a3\u30c3\u30af"),(0,i.kt)("p",null,"1\u79d2\u3042\u305f\u308a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u304c\u5927\u304d\u3059\u304e\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u5358\u4e00\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5bfe\u3057\u306610,000\u306e\u30ea\u30af\u30a8\u30b9\u30c8/\u79d2\u306a\u3069\u3067\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u5834\u5408\u3001\u5358\u4e00\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u901a\u5e38\u3001\u3059\u3079\u3066\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u306e\u306b\u5341\u5206\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 2\u3064\u306e\u89e3\u6c7a\u7b56\u304c\u3042\u308a\u307e\u3059:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u8907\u6570\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30de\u30b7\u30f3\u5185\u306e\u3059\u3079\u3066\u306e\u30b3\u30a2\u3092\u5b8c\u5168\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306f\u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044: ",(0,i.kt)("a",{parentName:"p",href:"/docs/multi-threading"},"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30af\u30e9\u30b9\u30bf(\u8907\u6570\u306e\u30de\u30b7\u30f3)\u306b\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002 Watcher\u3092\u4f7f\u7528\u3057\u3066\u3001\u3059\u3079\u3066\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u4e00\u8cab\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306f\u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044: ",(0,i.kt)("a",{parentName:"p",href:"/docs/watchers"},"\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0a\u8a18\u306e\u4e21\u65b9\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u540c\u6642\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001Casbin \u3092 10 \u30de\u30b7\u30f3 \u30af\u30e9\u30b9\u30bf\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u306a\u3069\u3067\u3059\u3002 \u5404\u30de\u30b7\u30f3\u306b\u306f\u540c\u6642\u306b5\u30b9\u30ec\u30c3\u30c9\u304c\u3042\u308a\u3001Casbin\u5f37\u5236\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5fdc\u7b54\u3057\u307e\u3059\u3002"))),(0,i.kt)("h4",{id:"\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u6570\u304c\u591a\u3044\u3067\u3059"},"\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u6570\u304c\u591a\u3044\u3067\u3059"),(0,i.kt)("p",null,"\u30af\u30e9\u30a6\u30c9\u307e\u305f\u306f\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u74b0\u5883\u3067\u4f55\u767e\u4e07\u3082\u306e\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u5404\u57f7\u884c\u547c\u3073\u51fa\u3057\u307e\u305f\u306f\u6700\u521d\u306b\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3053\u3068\u306f\u975e\u5e38\u306b\u9045\u3044\u3067\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u30b1\u30fc\u30b9\u306f\u901a\u5e38\u3001\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3067\u8efd\u6e1b\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u3042\u306a\u305f\u306e\u30ab\u30b9\u30d3\u30f3\u30e2\u30c7\u30eb\u307e\u305f\u306f\u30dd\u30ea\u30b7\u30fc\u306f\u3088\u304f\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002 \u3088\u304f\u66f8\u304b\u308c\u305f\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u30e6\u30fc\u30b6\u30fc/\u30c6\u30ca\u30f3\u30c8\u3054\u3068\u306b\u91cd\u8907\u3057\u305f\u30ed\u30b8\u30c3\u30af\u3092\u62bd\u8c61\u5316\u3057\u3001\u30eb\u30fc\u30eb\u306e\u6570\u3092\u975e\u5e38\u306b\u5c0f\u3055\u306a\u30ec\u30d9\u30eb (< 100): e. \u3001\u3059\u3079\u3066\u306e\u30c6\u30ca\u30f3\u30c8\u3067\u3044\u304f\u3064\u304b\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30eb\u30fc\u30eb\u3092\u5171\u6709\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u5f8c\u3067\u30eb\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u30eb\u30fc\u30eb\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30eb\u30fc\u30eb\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u308c\u3067\u3082\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u306f\u3001GitHub Issue \u3092 Casbin \u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin \u65bd\u884c\u8005\u304c\u5c0f\u3055\u306a\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u307f\u3092\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u30b7\u30e3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u884c\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001 enforcer_0 \u306f tenant_0 \u304b\u3089 tenant_99 \u307e\u3067\u3057\u304b\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002enforcer_1 \u306f tenant_100 \u304b\u3089 tenant_199\u307e\u3067\u3057\u304b\u6a5f\u80fd\u3057\u307e\u305b\u3093\u3002 \u3059\u3079\u3066\u306e\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u307f\u3092\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u8a73\u7d30\u306f\u6b21\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044: ",(0,i.kt)("a",{parentName:"p",href:"/docs/policy-subset-loading"},"\u30dd\u30ea\u30b7\u30fc\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u8aad\u307f\u8fbc\u307f"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76f4\u63a5\u30e6\u30fc\u30b6\u30fc\u306e\u4ee3\u308f\u308a\u306bRBAC\u30ed\u30fc\u30eb\u306b\u6a29\u9650\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002 Casbin\u306eRBAC\u306f\u3001(\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066)\u30ed\u30fc\u30eb\u7d99\u627f\u30c4\u30ea\u30fc\u306b\u3088\u3063\u3066\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3060\u304b\u3089\u3001\u30a2\u30ea\u30b9\u306e\u3088\u3046\u306a\u30e6\u30fc\u30b6\u30fc\u3092\u8003\u3048\u308b\u3068\u3001Casbin\u306fRBAC\u30c4\u30ea\u30fc\u3092\u30af\u30a8\u30ea\u3057\u3066\u30ed\u30fc\u30eb\u30e6\u30fc\u30b6\u30fc\u306e\u95a2\u4fc2\u3092\u78ba\u8a8d\u3057\u3001\u5f37\u5236\u3092\u884c\u3046\u306e\u306bO(1)\u6642\u9593\u3057\u304b\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002 g\u30eb\u30fc\u30eb\u304c\u983b\u7e41\u306b\u5909\u66f4\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001RBAC\u30c4\u30ea\u30fc\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u8a73\u7d30\u306f\u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/681#issuecomment-763801583"},"https://github.com/casbin/casbin/issues/681#issuecomment-763801583")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0a\u8a18\u306e\u3059\u3079\u3066\u306e\u65b9\u6cd5\u3092\u540c\u6642\u306b\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))))}d.isMDXComponent=!0}}]);