"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5526],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=u(n),N=r,g=k["".concat(m,".").concat(N)]||k[N]||o[N]||l;return n?a.createElement(g,p(p({ref:e},d),{},{components:n})):a.createElement(g,p({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9511:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return o}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],i={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},m=void 0,u={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ru/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",permalink:"/ru/docs/multi-threading"},next:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",permalink:"/ru/docs/performance"}},d={},o=[],k=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},N=k("Tabs"),g=k("TabItem"),c={toc:o};function b(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(N,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". \u0418\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,l.kt)("p",null,"\u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0438\u0434\u0435\u0442 \u0442\u0435\u0441\u0442 -bench=. -\u0431\u0435\u043d\u0447\u043c")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c (op = an ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u0432\u044b\u0437\u043e\u0432, ms = millisecond, KB = \u043a\u0438\u043b\u043e\u0431\u0430\u0439\u0442):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80.620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765.152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7,606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7.906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10.755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(g,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"CPP Casbin")," \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"\u0442\u0435\u0441\u0442\u0430/\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438"))," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433\u0430 Google"),". \u0418\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 \u044f\u0434\u0440\u0430, 4 \u043f\u043e\u0442\u043e\u043a\u0430\n")),(0,l.kt)("p",null,"\u0412\u043e\u0442 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," , \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," (op = ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u0432\u044b\u0437\u043e\u0432, \u043c\u0441 = \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,l.kt)(g,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043f\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044e \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed was a Ubuntu VM with the CPU:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 \u043f\u043e\u0442\u043e\u043a\u043e\u0432\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438\u043d\u0433\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c (op = ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u0432\u044b\u0437\u043e\u0432, ms = millisecond):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u043c\u0441/\u043e\u043f)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u043f\u0440\u0430\u0432\u0438\u043b (1000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 100 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0441\u0440\u0435\u0434\u043d\u0438\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 \u043f\u0440\u0430\u0432\u0438\u043b (10000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 1000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u0431\u043e\u043b\u044c\u0448\u043e\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 110000 (100000 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, 10000 \u0440\u043e\u043b\u0435\u0439)"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0440\u043e\u043b\u044f\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c, 2 \u0434\u043e\u043c\u0435\u043d\u0430)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0410\u0414\u0410\u0422"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u043f\u0440\u0430\u0432\u0438\u043b (0 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u043f\u0440\u0430\u0432\u0438\u043b (3 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 1 \u0440\u043e\u043b\u044c)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u043f\u0440\u0430\u0432\u0438\u043b (2 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, 2 \u0440\u043e\u043b\u0438)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}b.isMDXComponent=!0}}]);