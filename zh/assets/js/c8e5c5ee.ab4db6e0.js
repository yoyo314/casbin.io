"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9064],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],p={id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},c=void 0,l={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/zh/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC with Pattern",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/zh/docs/rbac"},next:{title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236",permalink:"/zh/docs/rbac-with-domains"}},d={},m=[{value:"\u5feb\u901f\u5165\u95e8",id:"\u5feb\u901f\u5165\u95e8",level:2},{value:"\u5728 RBAC \u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d",id:"\u5728-rbac-\u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},s=u("Tabs"),k=u("TabItem"),b={toc:m};function f(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},b,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use pattern in ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use pattern with domain"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use all pattern"),(0,i.kt)("p",{parentName:"li"},"just combined use of two APIs"))),(0,i.kt)("p",null,"As shown above, after you create the ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer")," instance, you need to activate pattern matching via ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API,  which determine how the pattern matches."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you use the online editor, it specifies the pattern matching function in the lower left corner. ",(0,i.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"}))),(0,i.kt)("h2",{id:"\u5728-rbac-\u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d"},"\u5728 RBAC \u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d"),(0,i.kt)("p",null,"\u6709\u65f6\uff0c\u60a8\u5e0c\u671b\u4e00\u4e9b\u5177\u6709\u7279\u5b9a\u6a21\u5f0f\u7684subjects, object \u6216\u8005 domains/tenants\u80fd\u591f\u88ab\u81ea\u52a8\u6388\u4e88\u89d2\u8272\u3002 RBAC\u4e2d\u7684\u6a21\u5f0f\u5339\u914d\u51fd\u6570\u53ef\u4ee5\u5e2e\u52a9\u505a\u5230\u8fd9\u4e00\u70b9\u3002 \u6a21\u5f0f\u5339\u914d\u51fd\u6570\u4e0e\u524d\u4e00\u4e2a\u51fd\u6570\u5171\u4eab\u76f8\u540c\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"matcher function"),"\u3002"),(0,i.kt)("p",null,"\u6a21\u5f0f\u5339\u914d\u51fd\u6570\u652f\u6301g\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570"),(0,i.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c\u5728matcher\u91cc\u9762RBAC\u901a\u5e38\u88ab\u8868\u793a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," \u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4f7f\u7528\u5982\u4e0b\u7b56\u7565\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,"\u56e0\u6b64",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u53ef\u4ee5\u9605\u8bfb\u6240\u6709\u4e66\u7c4d\uff0c\u5305\u62ec",(0,i.kt)("inlineCode",{parentName:"p"},"book 1"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"book 2"),"\u3002 \u4f46\u662f\u5f53\u6709\u6570\u5343\u672c\u4e66\u65f6\uff0c\u5982\u679c\u6211\u4eec\u4ec5\u4ec5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"\u7b56\u7565\u89c4\u5219\u5c06\u6bcf\u672c\u4e66\u4e00\u4e2a\u4e00\u4e2a\u5730\u6dfb\u52a0\u5230\u4e66\u7c4d\u89d2\u8272\uff08\u6216\u7ec4\uff09\uff0c\u90a3\u5c06\u4f1a\u662f\u975e\u5e38\u7e41\u7410\u7684\u3002"),(0,i.kt)("p",null,"\u4e0d\u8fc7\uff0c\u51ed\u501f\u7740\u6a21\u5f0f\u5339\u914d\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u628a\u6574\u4e2a\u7b56\u7565\u53ea\u7528\u4e00\u884c\u5199\u4e0b\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"Casbin\u4f1a\u81ea\u52a8\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2"),"\u5339\u914d\u4e3a\u6a21\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id"),"\u3002 \u60a8\u9700\u8981\u505a\u7684\u4ec5\u4ec5\u662f\u5411enforcer\u6ce8\u518c\u8be5\u65b9\u6cd5\uff0c\u4f8b\u5982\u50cf\u8fd9\u6837\uff1a"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"\u5f53\u5728domains/tenants\u91cc\u9762\u4f7f\u7528\u6a21\u5f0f\u5339\u914d\u51fd\u6570\u7684\u65f6\u5019\uff0c\u4f60\u9700\u8981\u628a\u8fd9\u4e2a\u51fd\u6570\u5411enfoecer\u4ee5\u53camodel\u8fdb\u884c\u6ce8\u518c"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"If you don't understand what ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," means, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". \u7b80\u800c\u8a00\u4e4b\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," \u5c06\u68c0\u67e5\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"r.sub")," \u5728\u57df\u5185 ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom")," \u662f\u5426\u5177\u6709\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," \u56e0\u6b64\uff0c\u8fd9\u6b63\u662f\u5339\u914d\u5668\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002 \u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\u5b8c\u6574\u7684\u793a\u4f8b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"}),"\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u7684\u6a21\u5f0f\u5339\u914d\u8bed\u6cd5\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7eaf\u57df\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"For example,  if we want ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," to have access in different domains, ",(0,i.kt)("inlineCode",{parentName:"p"},"domain1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"domain2"),", we can use the pure domain pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"In this example, we want ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," to read and write ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in domain1 and domain2, pattern matching ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," have the access to two domains."),(0,i.kt)("p",null,"By using pattern matching, especially in the scenarios which is more complicated and there are a lot of domains or objects we need to take into consideration, we can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," more elegant and effective."))}f.isMDXComponent=!0},9523:function(e,t,n){t.Z=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);