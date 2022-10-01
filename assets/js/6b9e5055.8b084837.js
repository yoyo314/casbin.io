"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6994],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),d=u(a),k=n,N=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return a?r.createElement(N,i(i({ref:e},o),{},{components:a})):r.createElement(N,i({ref:e},o))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,i[1]=m;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2824:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},i=void 0,m={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/docs/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1664628059,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"Multi-threading",permalink:"/docs/multi-threading"},next:{title:"Performance Optimization",permalink:"/docs/performance"}},p={},u=[],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=o("Tabs"),d=o("TabItem"),k={toc:u};function N(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"The overhead of policy enforcement is benchmarked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". The testbed is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,n.kt)("p",null,"The benchmarking result of ",(0,n.kt)("inlineCode",{parentName:"p"},"go test -bench=. -benchmem")," is as follows (op = an ",(0,n.kt)("inlineCode",{parentName:"p"},"Enforce()")," call, ms = millisecond, KB = kilo bytes):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Test case"),(0,n.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,n.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"),(0,n.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ACL"),(0,n.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,n.kt)("td",{parentName:"tr",align:null},"5.649")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,n.kt)("td",{parentName:"tr",align:null},"7.522")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,n.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,n.kt)("td",{parentName:"tr",align:null},"80.620")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,n.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,n.kt)("td",{parentName:"tr",align:null},"765.152")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,n.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,n.kt)("td",{parentName:"tr",align:null},"7,606")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,n.kt)("td",{parentName:"tr",align:null},"7.906")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,n.kt)("td",{parentName:"tr",align:null},"10.755")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,n.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,n.kt)("td",{parentName:"tr",align:null},"2.328")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,n.kt)("td",{parentName:"tr",align:null},"91.774")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,n.kt)("td",{parentName:"tr",align:null},"8.370")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,n.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,n.kt)(d,{value:"C++",label:"C++",mdxType:"TabItem"},(0,n.kt)("p",null,"The overhead of policy enforcement of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," is benchmarked in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,n.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," directory with the help of\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool"),". The testbed for these benchmarks is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 cores, 4 threads\n")),(0,n.kt)("p",null,"Here is the benchmarking result of executing ",(0,n.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," target built in ",(0,n.kt)("inlineCode",{parentName:"p"},"Release")," configuration (op = an ",(0,n.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Test case"),(0,n.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,n.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ACL"),(0,n.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,n.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.300")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,n.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"2.113")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,n.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"21.450")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.041")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,n.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,n.kt)("td",{parentName:"tr",align:null},"NA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"NA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,n.kt)(d,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," overhead of policy enforcement is benchmarked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed was a Ubuntu VM with the CPU:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,n.kt)("p",null,"The benchmarking result of ",(0,n.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," is as follows (op = an ",(0,n.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Test case"),(0,n.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,n.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ACL"),(0,n.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,n.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,n.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,n.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,n.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,n.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,n.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}N.isMDXComponent=!0}}]);