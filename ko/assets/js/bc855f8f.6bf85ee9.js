"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4337],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=m(a),k=r,N=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"benchmark",title:"\ubca4\uce58\ub9c8\ud06c",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},i=void 0,p={unversionedId:"benchmark",id:"benchmark",title:"\ubca4\uce58\ub9c8\ud06c",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ko/docs/benchmark",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"benchmark",title:"\ubca4\uce58\ub9c8\ud06c",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"\uba40\ud2f0 \uc2a4\ub808\ub529",permalink:"/ko/docs/multi-threading"},next:{title:"Performance Optimization",permalink:"/ko/docs/performance"}},u={},m=[],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},s=o("Tabs"),d=o("TabItem"),k={toc:m};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement is benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". The testbed is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,r.kt)("p",null,"The benchmarking result of ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -bench=. -benchmem")," is as follows (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," call, ms = millisecond, KB = kilo bytes):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7,606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,"The overhead of policy enforcement of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," is benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," directory with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool"),". The testbed for these benchmarks is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 cores, 4 threads\n")),(0,r.kt)("p",null,"Here is the benchmarking result of executing ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," target built in ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," configuration (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(d,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," overhead of policy enforcement is benchmarked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed was a Ubuntu VM with the CPU:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,r.kt)("p",null,"The benchmarking result of ",(0,r.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," is as follows (op = an ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test case"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,r.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub9ac\uc18c\uc2a4 \uc5ed\ud560"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC + \ub3c4\uba54\uc778/\ud14c\ub10c\ud2b8"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac70\ubd80(Deny) \uc6b0\uc120"),(0,r.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}N.isMDXComponent=!0}}]);