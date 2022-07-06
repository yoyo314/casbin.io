"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2488],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(u,o(o({ref:t},f),{},{components:n})):r.createElement(u,o({ref:t},f))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5170:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"effector",title:"Effector"},c=void 0,p={unversionedId:"effector",id:"effector",title:"Effector",description:"Effect\u662f\u4e00\u4e2apolicy rule\u7684\u7ed3\u679c Effector \u662f\u7528\u4e8eCasbin effector\u7684API",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/zh/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"Effector"},sidebar:"docs",previous:{title:"Model \u7684\u8bed\u6cd5",permalink:"/zh/docs/syntax-for-models"},next:{title:"\u51fd\u6570",permalink:"/zh/docs/function"}},f={},d=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},s=m("Tabs"),u=m("TabItem"),k={toc:d};function N(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Effect\u662f\u4e00\u4e2apolicy rule\u7684\u7ed3\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"Effector")," \u662f\u7528\u4e8eCasbin effector\u7684API"),(0,i.kt)("h3",{id:"mergeeffects"},(0,i.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,i.kt)("p",null,"MergeEffects\u5c06 enforcer \u6536\u96c6\u7684\u6240\u6709\u5339\u914d\u7ed3\u679c\u5408\u5e76\u4e3a\u4e00\u9879\u51b3\u5b9a\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982:"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Effect")," \u662f\u6b64\u51fd\u6570\u5408\u5e76\u7684\u6700\u540e\u51b3\u5b9a(\u521d\u59cb\u53c2\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"indeterminate"),")\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explainIndex")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," \u7684\u7d22\u5f15\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," \u7684\u503c\u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny"),".(\u521d\u59cb\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"err")," \u7528\u4e8e\u68c0\u67e5",(0,i.kt)("inlineCode",{parentName:"li"},"effect"),"\u662f\u5426\u53d7\u5230\u652f\u6301\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u662f\u88ab\u5b58\u50a8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u7684",(0,i.kt)("inlineCode",{parentName:"li"},"policy_effects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"effects")," \u662f Effect \u7684\u6570\u7ec4\uff0c\u5176\u4e2d\u503c\u53ef\u4ee5\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matchers")," \u662f\u663e\u793a\u7ed3\u679c\u662f\u5426\u7b26\u5408\u7b56\u7565\u7684\u6570\u7ec4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyIndex")," \u662f\u6a21\u578b\u4e2d\u7684\u7b56\u7565\u7d22\u5f15\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyLength")," \u662f\u7b56\u7565\u7684\u957f\u5ea6\u3002")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u8bf4\u660e\u4e86\u6211\u4eec\u5982\u4f55\u5c06\u53c2\u6570\u4f20\u9012\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," \u51fd\u6570\uff0c\u5e76\u4e14\u8be5\u51fd\u6570\u5c06\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u5904\u7406\u6548\u679c\u548c\u5339\u914d\u3002"),(0,i.kt)("p",null,"\u8981\u90e8\u7f72\u4e00\u4e2aEffector\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," \u8868\u660e\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u53ef\u4ee5\u5339\u914d\u7ed3\u679c\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,i.kt)("inlineCode",{parentName:"p"},"p_eft")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5408\u5e76\u6240\u6709\u6548\u679c\u3002 \u5982\u679c\u6ca1\u6709\u7b26\u5408\u62d2\u7edd\u7684\u89c4\u5219\uff0c\u6211\u4eec\u5c31\u5141\u8bb8\u8fd9\u6837\u505a\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," can not match ",(0,i.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," and also the ",(0,i.kt)("inlineCode",{parentName:"p"},"policyIndex")," is shorter than ",(0,i.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", it will ",(0,i.kt)("strong",{parentName:"p"},"short-circuit")," some effects in the middle."))))}N.isMDXComponent=!0}}]);