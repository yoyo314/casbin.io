"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8924],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(u,o(o({ref:t},f),{},{components:n})):r.createElement(u,o({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"effector",title:"\u30a8\u30d5\u30a7\u30af\u30c8",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},c=void 0,p={unversionedId:"effector",id:"effector",title:"\u30a8\u30d5\u30a7\u30af\u30c8",description:"Effector is the interface for Casbin effectors",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/ja/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"\u30a8\u30d5\u30a7\u30af\u30c8",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},sidebar:"docs",previous:{title:"\u30e2\u30c7\u30eb\u306e\u69cb\u6587",permalink:"/ja/docs/syntax-for-models"},next:{title:"\u95a2\u6570",permalink:"/ja/docs/function"}},f={},s=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=d("Tabs"),u=d("TabItem"),k={toc:s};function N(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u52b9\u679c\u306f\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u306e\u7d50\u679c\u3067\u3059\u3002 \u305d\u3057\u3066\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u30a8\u30d5\u30a7\u30af\u30bf\u30fc")," \u306fCasbin\u30a8\u30d5\u30a7\u30af\u30bf\u30fc\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"mergeeffects"},(0,i.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,i.kt)("p",null,"MergeEffects\u306f\u3001\u57f7\u884c\u8005\u306b\u3088\u3063\u3066\u53ce\u96c6\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u4e00\u81f4\u7d50\u679c\u30921\u3064\u306e\u6c7a\u5b9a\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f8b:"),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u30a8\u30d5\u30a7\u30af\u30c8")," \u306f\u3001\u3053\u306e\u95a2\u6570\u306b\u3088\u3063\u3066\u30de\u30fc\u30b8\u3055\u308c\u308b\u6700\u7d42\u6c7a\u5b9a\u3067\u3059( ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate")," \u3068\u3057\u3066\u521d\u671f\u5316\u3055\u308c\u307e\u3059)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explanation Index")," \u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," \u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3001 ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny"),"(Initialized as ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"err")," \u306f\u52b9\u679c\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6587\u5b57\u5217")," \u3068\u3057\u3066\u683c\u7d0d\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u52b9\u679c\u3067\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u30a8\u30d5\u30a7\u30af\u30c8")," \u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u8a31\u53ef"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0d\u78ba\u5b9a")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"\u62d2\u5426")," \u306e\u3088\u3046\u306a\u52b9\u679c\u306e\u914d\u5217\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matches")," \u306f\u3001\u7d50\u679c\u304c\u30dd\u30ea\u30b7\u30fc\u3068\u4e00\u81f4\u3059\u308b\u3053\u3068\u3092\u793a\u3059\u914d\u5217\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyIndex")," \u306f\u30e2\u30c7\u30eb\u306e\u30dd\u30ea\u30b7\u30fc\u6307\u6570\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u30dd\u30ea\u30b7\u30fc\u9577\u3055")," \u306f\u30dd\u30ea\u30b7\u30fc\u306e\u9577\u3055\u3067\u3059\u3002")),(0,i.kt)("p",null,"\u4e0a\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," \u95a2\u6570\u306b\u6e21\u3059\u65b9\u6cd5\u3092\u793a\u3057\u3066\u304a\u308a\u3001\u95a2\u6570\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u306b\u57fa\u3065\u3044\u3066\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u51e6\u7406\u3057\u4e00\u81f4\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30a8\u30d5\u30a7\u30af\u30bf\u30fc\u3092\u5c55\u958b\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," \u306e\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9\u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"p_eft")," \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8a31\u53ef"),"\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u7d50\u679c\u3068\u4e00\u81f4\u3059\u308b\u5834\u5408\u3092\u793a\u3057\u307e\u3059\u3002 \u3084\u3063\u3068\u3059\u3079\u3066\u306e\u52b9\u679c\u3092\u878d\u5408\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5426\u5b9a\u30eb\u30fc\u30eb\u304c\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u6211\u3005\u306f\u8a31\u53ef\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," can not match ",(0,i.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," and also the ",(0,i.kt)("inlineCode",{parentName:"p"},"policyIndex")," is shorter than ",(0,i.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", it will ",(0,i.kt)("strong",{parentName:"p"},"short-circuit")," some effects in the middle."))))}N.isMDXComponent=!0}}]);