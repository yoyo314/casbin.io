"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},o=void 0,p={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/ko/docs/rbac-with-pattern",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/ko/docs/rbac"},next:{title:"RBAC + \ub3c4\uba54\uc778",permalink:"/ko/docs/rbac-with-domains"}},l={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Use pattern matching in RBAC",id:"use-pattern-matching-in-rbac",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=d("Tabs"),m=d("TabItem"),u={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use pattern in ",(0,r.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use pattern with domain"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use all pattern"),(0,r.kt)("p",{parentName:"li"},"just combined use of two APIs"))),(0,r.kt)("p",null,"As shown above, after you create the ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcer")," instance, you need to activate pattern matching via ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API,  which determine how the pattern matches."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you use the online editor, it specifies the pattern matching function in the lower left corner. ",(0,r.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"}))),(0,r.kt)("h2",{id:"use-pattern-matching-in-rbac"},"Use pattern matching in RBAC"),(0,r.kt)("p",null,"Sometimes, you want some subjects, object or domains/tenants with the specific pattern to be automatically granted to a role. Pattern matching functions in RBAC can help you do that. A pattern matching function shares the same parameters and return value as the previous ",(0,r.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"matcher function"),"."),(0,r.kt)("p",null,"The pattern matching function supports each parameter of g."),(0,r.kt)("p",null,"We know that normally RBAC is expressed as ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," in matcher. Then we will use policy like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,r.kt)("p",null,"So ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," can read all books including ",(0,r.kt)("inlineCode",{parentName:"p"},"book 1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"book 2"),". But there can be thousands of books and it's very tedious to add each book to the book role (or group) with one ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," policy rule."),(0,r.kt)("p",null,"But with pattern matching functions, you can write the policy with only one line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,r.kt)("p",null,"Casbin will automatically match ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/2")," into pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/:id")," for you. You only need to register the function with the enforcer like:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,"When Using a pattern matching function in domains/tenants, You need to register the function to enforcer and model."),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,"If you don't understand what ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," means, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". In short, ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," will check whether the user ",(0,r.kt)("inlineCode",{parentName:"p"},"r.sub")," has a role ",(0,r.kt)("inlineCode",{parentName:"p"},"p.sub")," in the domain ",(0,r.kt)("inlineCode",{parentName:"p"},"r.dom"),". So this is how the matcher work. You can see the full example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"here"),"."),(0,r.kt)("p",null,"Apart from the pattern matching syntax above, we can also use pure domain pattern."),(0,r.kt)("p",null,"For example,  if we want ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," to have access in different domains, ",(0,r.kt)("inlineCode",{parentName:"p"},"domain1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"domain2"),", we can use the pure domain pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,r.kt)("p",null,"In this example, we want ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," to read and write ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in domain1 and domain2, pattern matching ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," makes ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," have the access to two domains."),(0,r.kt)("p",null,"By using pattern matching, especially in the scenarios which is more complicated and there are a lot of domains or objects we need to take into consideration, we can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy_definition")," more elegant and effective."))}h.isMDXComponent=!0},9523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);