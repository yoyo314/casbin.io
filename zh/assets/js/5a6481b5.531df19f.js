"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7336],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),o=u(n),N=r,g=o["".concat(i,".").concat(N)]||o[N]||k[N]||l;return n?a.createElement(g,p(p({ref:e},d),{},{components:n})):a.createElement(g,p({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=o;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},4110:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],m={id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5"},i=void 0,u={unversionedId:"benchmark",id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5",description:"\u7b56\u7565\u6267\u884c\u7684\u8d1f\u8f7d\u5728modelbtest.go\u4e2d\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5\u3002 \u6d4b\u8bd5\u662f:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/zh/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u591a\u7ebf\u7a0b",permalink:"/zh/docs/multi-threading"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/performance"}},d={},k=[],o=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},N=o("Tabs"),g=o("TabItem"),c={toc:k};function b(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(N,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u7b56\u7565\u6267\u884c\u7684\u8d1f\u8f7d\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),"\u4e2d\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5\u3002 \u6d4b\u8bd5\u662f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u82f1\u7279\u5c14 \u9177\u777f i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 \u6838, 8 \u5904\u7406\u5668\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go test -bench= -benchmem")," \u7684\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b (op = \u4e00\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u8c03\u7528, ms = \u6beb\u79d2, KB = \u5343\u5b57\u8282)\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58\u5f00\u9500 (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80.620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765.152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7.906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10.755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(g,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," \u7684\u7b56\u7565\u6267\u884c\u6d4b\u8bd5\u662f\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," \u4e2d, \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool")," \u5b8c\u6210\u7684 \u8fd9\u4e9b\u57fa\u51c6\u7684\u6d4b\u8bd5\u7ed3\u679c\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u82f1\u7279\u5c14 \u9177\u777f i5-6300HQ CPU @ 2.30GHz, 4 \u6838, 4 \u7ebf\u7a0b\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6267\u884c\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," \u914d\u7f6e\u7f16\u8bd1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," \u57fa\u51c6\u7ed3\u679c(op = \u4e00\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u8c03\u7528, ms = \u6beb\u79d2)\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,l.kt)(g,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin\u7684")," \u7b56\u7565\u6267\u884c\u7684\u6d4b\u8bd5\u662f\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"ben.lua")," \u4e2d\u8fdb\u884c\u7684\u3002 \u6d4b\u8bd5\u53f0\u662f Ubuntu VM \uff0cCPU\u578b\u53f7\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 \u6838, 12 Threads\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"luajit bey.lua")," \u7684\u57fa\u51c6\u7ed3\u679c\u5982\u4e0b(op = \u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," \u8c03\u7528, ms = \u6beb\u79d2)\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,l.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}b.isMDXComponent=!0}}]);