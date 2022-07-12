"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6433],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,k=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],p={id:"rbac-with-pattern",title:"RBAC \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},l=void 0,c={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",description:"RBAC with Pattern",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/ru/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/ru/docs/rbac"},next:{title:"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438",permalink:"/ru/docs/rbac-with-domains"}},d={},u=[{value:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439-\u0441\u0442\u0430\u0440\u0442",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0432 RBAC",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439-\u0448\u0430\u0431\u043b\u043e\u043d-\u0432-rbac",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},s=m("Tabs"),k=m("TabItem"),b={toc:u};function g(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},b,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439-\u0441\u0442\u0430\u0440\u0442"},"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0441 \u0434\u043e\u043c\u0435\u043d\u043e\u043c"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b"),(0,i.kt)("p",{parentName:"li"},"\u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0443\u0445 API"))),(0,i.kt)("p",null,"\u041a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u0432\u044b\u0448\u0435, \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},",")," \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442, \u043a\u0430\u043a \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443."),(0,i.kt)("p",null,"::note"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440, \u0432 \u043b\u0435\u0432\u043e\u043c \u043d\u0438\u0436\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430. ",(0,i.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"})),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439-\u0448\u0430\u0431\u043b\u043e\u043d-\u0432-rbac"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0432 RBAC"),(0,i.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0435\u043c\u044b, \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438\u043b\u0438 \u0434\u043e\u043c\u0435\u043d\u044b/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u043b\u0438\u0441\u044c \u0440\u043e\u043b\u0438. \u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0432 RBAC \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c. \u0428\u0430\u0431\u043b\u043e\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435 \u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f"),"."),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 g."),(0,i.kt)("p",null,"\u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e RBAC \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," \u0432 \u043c\u0430\u0442\u0447\u0435. \u0422\u043e\u0433\u0434\u0430 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0443\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u043c\u043e\u0436\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u043a\u043d\u0438\u0433\u0438, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043a\u043d\u0438\u0433\u0430 1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043a\u043d\u0438\u0433\u0430 2"),". \u041d\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0442\u044b\u0441\u044f\u0447\u0438 \u043a\u043d\u0438\u0433, \u0438 \u043e\u0447\u0435\u043d\u044c \u0443\u0442\u043e\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0432 \u0440\u043e\u043b\u044c (\u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u0443) \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0433"),"."),(0,i.kt)("p",null,"\u041d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2")," \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id")," \u0434\u043b\u044f \u0432\u0430\u0441. \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0441 \u0441\u0438\u043b\u043e\u043c:"),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0432 \u0434\u043e\u043c\u0435\u043d\u0430\u0445/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u0445, \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0434\u043b\u044f \u0443\u0441\u0438\u043b\u0435\u043d\u0438\u044f \u0438 \u043c\u043e\u0434\u0435\u043b\u0438."),(0,i.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," , \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". \u041a\u043e\u0440\u043e\u0447\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"r. ub")," \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," \u0432 \u0434\u043e\u043c\u0435\u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom"),". \u0422\u0430\u043a \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442. \u041f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0434\u0435\u0441\u044c"),"."),(0,i.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430, \u043c\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0430."),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043c\u044b \u0445\u043e\u0442\u0438\u043c, \u0447\u0442\u043e\u0431\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u0434")," \u0438\u043c\u0435\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0434\u043e\u043c\u0435\u043d\u0430\u043c, ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u043e\u043c\u0435\u043d\u04301")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u043e\u043c\u0435\u043d\u04302"),", \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0445\u043e\u0442\u0438\u043c, \u0447\u0442\u043e\u0431\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0443\u043b\u044b\u0431\u0430\u043b\u0438\u0441\u044c")," \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0438\u0441\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u0430\u043d\u043d\u044b\u0445")," \u0432 \u0434\u043e\u043c\u0435\u043d\u04301 \u0438 \u0434\u043e\u043c\u0435\u043d\u04302, \u0448\u0430\u0431\u043b\u043e\u043d, \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," \u0434\u0435\u043b\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u0438\u043c\u0435\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0432\u0443\u043c \u0434\u043e\u043c\u0435\u043d\u0430\u043c."),(0,i.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0438 \u0415\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u043e\u0432 \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," \u0431\u043e\u043b\u0435\u0435 \u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u044b\u043c \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c."))}g.isMDXComponent=!0},9523:function(e,t,n){t.Z=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);