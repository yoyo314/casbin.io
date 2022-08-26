"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2014],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=f(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return s}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"effector",title:"Effector",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},c=void 0,f={unversionedId:"effector",id:"effector",title:"Effector",description:"Effector is the interface for Casbin effectors",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/ko/docs/effector",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"effector",title:"Effector",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},sidebar:"docs",previous:{title:"\ubaa8\ub378(Model) \ubb38\ubc95",permalink:"/ko/docs/syntax-for-models"},next:{title:"\ud568\uc218",permalink:"/ko/docs/function"}},p={},s=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},u=d("Tabs"),m=d("TabItem"),h={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Effect is the result of a policy rule. And the ",(0,o.kt)("inlineCode",{parentName:"p"},"Effector")," is the interface for Casbin effectors."),(0,o.kt)("h3",{id:"mergeeffects"},(0,o.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,o.kt)("p",null,"MergeEffects merges all matching results collected by the enforcer into a single decision."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,o.kt)("p",null,"In this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Effect")," is the final decision being merged by this function(Initialized as ",(0,o.kt)("inlineCode",{parentName:"li"},"Indeterminate"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"explainIndex")," is the index of ",(0,o.kt)("inlineCode",{parentName:"li"},"eft")," which is ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Deny"),".(Initialized as ",(0,o.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"err")," is used to check if the effect is supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expr")," is the policy effects stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"effects")," is the array of the Effect which can be ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Indeterminate")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Deny")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"matches")," is the array showing that if the result is matching the policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"policyIndex")," is the index of policy in the model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"policyLength")," is the length of the policy.")),(0,o.kt)("p",null,"The code above illustrates how can we pass the parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeEffects")," function and the function will process the effects and matches based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"expr")),(0,o.kt)("p",null,"To deploy an Effector, we can do this:"),(0,o.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,o.kt)("p",null,"The basic idea of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeEffects")," indicates that if the ",(0,o.kt)("inlineCode",{parentName:"p"},"expr")," can match the results which means that the ",(0,o.kt)("inlineCode",{parentName:"p"},"p_eft")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"allow"),", then we can merge all effects at last. And if there are no deny rules are matched, then we allow."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"expr")," can not match ",(0,o.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"policyIndex")," is shorter than ",(0,o.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", it will ",(0,o.kt)("strong",{parentName:"p"},"short-circuit")," some effects in the middle.")))}k.isMDXComponent=!0}}]);