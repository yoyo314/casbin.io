"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7287],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=u(n),N=r,c=k["".concat(m,".").concat(N)]||k[N]||d[N]||l;return n?a.createElement(c,p(p({ref:e},o),{},{components:n})):a.createElement(c,p({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2082:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],i={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},m=void 0,u={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ja/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9",permalink:"/ja/docs/multi-threading"},next:{title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",permalink:"/ja/docs/performance"}},o={},d=[],k=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},N=k("Tabs"),c=k("TabItem"),g={toc:d};function b(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(N,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go")," \u3067\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u65bd\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u304c\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c -bench=. -benchmem")," \u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059 (op = ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u30b3\u30fc\u30eb, ms = \u30df\u30ea\u79d2, KB = kilo\u30d0\u30a4\u30c8):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80.620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765.152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7,606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7.906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10.755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(c,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," \u306e\u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u30c4\u30fc\u30eb")," \u306e\u52a9\u3051\u3092\u501f\u308a\u3066\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306e\u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 \u30b3\u30a2, 4 \u30b9\u30ec\u30c3\u30c9\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," \u30bf\u30fc\u30b2\u30c3\u30c8\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," \u306e\u69cb\u6210 (op = ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u3067\u5b9f\u884c\u3057\u305f\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c) ms = millisecond):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,l.kt)(c,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin\u306e")," \u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua")," \u3067\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u308b\u3002 \u30c6\u30b9\u30c8\u30d9\u30c3\u30c9\u306f\u3001CPU\u3092\u5099\u3048\u305fUbuntu VM\u3067\u3057\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 \u30b3\u30a2, 12 \u30b9\u30ec\u30c3\u30c9\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," \u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059 (op = ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u547c\u3073\u51fa\u3057\u3001ms = \u30df\u30ea\u79d2):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30eb\u30fc\u30eb\u306e\u30b5\u30a4\u30ba"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u6642\u9593 (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 \u30eb\u30fc\u30eb (1000 \u30e6\u30fc\u30b6\u30fc\u3001100 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u30eb\u30fc\u30eb\uff0810000\u30e6\u30fc\u30b6\u30fc\u30011000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u30eb\u30fc\u30eb\uff08100000\u30e6\u30fc\u30b6\u30fc\u300110000\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u30012\u3064\u306e\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30c9\u30e1\u30a4\u30f3/\u30c6\u30ca\u30f3\u30c8\u3068RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc, 1 \u30ed\u30fc\u30eb, 2 \u30c9\u30e1\u30a4\u30f3)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u30eb\u30fc\u30eb (0 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u30eb\u30fc\u30eb (3 \u30e6\u30fc\u30b6\u30fc)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7121\u52b9\u306b\u3059\u308b"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u3064\u306e\u30eb\u30fc\u30eb\uff082\u30e6\u30fc\u30b6\u30fc\u30011\u30ed\u30fc\u30eb\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u512a\u5148\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"9 \u30eb\u30fc\u30eb (2 \u30e6\u30fc\u30b6\u30fc\u30012 \u30ed\u30fc\u30eb)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}b.isMDXComponent=!0}}]);