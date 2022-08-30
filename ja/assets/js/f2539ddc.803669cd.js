"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7287],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),o=d(a),N=r,g=o["".concat(i,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2082:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},p=void 0,m={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ja/docs/benchmark",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9",permalink:"/ja/docs/multi-threading"},next:{title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",permalink:"/ja/docs/performance"}},i={},d=[],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=k("Tabs"),o=k("TabItem"),N={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(o,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go")," \u3067\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u65bd\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u304c\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c -bench=. -benchmem")," \u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059 (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u30b3\u30fc\u30eb, ms = \u30df\u30ea\u79d2, KB = kilo\u30d0\u30a4\u30c8):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7,606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(o,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," \u306e\u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u3001 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u30c4\u30fc\u30eb")," \u306e\u52a9\u3051\u3092\u501f\u308a\u3066\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306e\u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 \u30b3\u30a2, 4 \u30b9\u30ec\u30c3\u30c9\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," \u30bf\u30fc\u30b2\u30c3\u30c8\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," \u306e\u69cb\u6210 (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u3067\u5b9f\u884c\u3057\u305f\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c) ms = millisecond):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(o,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin\u306e")," \u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u3001 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua")," \u3067\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u308b\u3002 \u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u3001CPU\u3092\u5099\u3048\u305fUbuntu VM\u3067\u3057\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 \u30b3\u30a2, 12 \u30b9\u30ec\u30c3\u30c9\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," \u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059 (op = ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u547c\u3073\u51fa\u3057\u3001ms = \u30df\u30ea\u79d2):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}g.isMDXComponent=!0}}]);