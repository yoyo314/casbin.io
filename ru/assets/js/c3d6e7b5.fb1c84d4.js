"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"effector",title:"\u042d\u0444\u0444\u0435\u043a\u0442",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},o=void 0,l={unversionedId:"effector",id:"effector",title:"\u042d\u0444\u0444\u0435\u043a\u0442",description:"Effector is the interface for Casbin effectors",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/ru/docs/effector",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"effector",title:"\u042d\u0444\u0444\u0435\u043a\u0442",description:"Effector is the interface for Casbin effectors",keywords:["effector","Effect","MergeEffects"]},sidebar:"docs",previous:{title:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439",permalink:"/ru/docs/syntax-for-models"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f",permalink:"/ru/docs/function"}},p={},c=[{value:"<code>\u042d\u0444\u0444\u0435\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f ()</code>",id:"\u044d\u0444\u0444\u0435\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f-",level:3}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=f("Tabs"),d=f("TabItem"),u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u042d\u0444\u0444\u0435\u043a\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438. \u0418 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u042d\u0444\u0444\u0435\u043a\u0442")," - \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u0432 \u041a\u0430\u043c\u0431\u0438\u043d\u0430."),(0,a.kt)("h3",{id:"\u044d\u0444\u0444\u0435\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f-"},(0,a.kt)("inlineCode",{parentName:"h3"},"\u042d\u0444\u0444\u0435\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f ()")),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441\u0438\u043b\u043e\u0432\u0438\u043a\u043e\u043c \u0432 \u0435\u0434\u0438\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,a.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u042d\u0444\u0444\u0435\u043a\u0442")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u043c \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 (\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"explainIndex")," - \u044d\u0442\u043e \u0438\u043d\u0434\u0435\u043a\u0441 ",(0,a.kt)("inlineCode",{parentName:"li"},"eft")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"),".(\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"err")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expr")," - \u044d\u0442\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0435\u0441\u044f \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0441\u0442\u0440\u043e\u043a\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u044d\u0444\u0444\u0435\u043a\u0442\u044b")," - \u044d\u0442\u043e \u043c\u0430\u0441\u0441\u0438\u0432 \u044d\u0444\u0444\u0435\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441")," \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u043c, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"policyIndex")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438.")),(0,a.kt)("p",null,"\u041a\u043e\u0434 \u0432\u044b\u0448\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeEffects")," , \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c Effector, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e:"),(0,a.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,a.kt)("p",null,"The basic idea of the ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeEffects")," indicates that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")," can match the results which means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"p_eft")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"allow"),", then we can merge all effects at last. \u0418 \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0430\u0432\u0438\u043b, \u0442\u043e \u043c\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u043c."),(0,a.kt)("p",null,"::note"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"policyIndex")," \u043a\u043e\u0440\u043e\u0447\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440")," \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0432 \u0446\u0435\u043d\u0442\u0440\u0435."),(0,a.kt)("p",null,":::"))}m.isMDXComponent=!0}}]);