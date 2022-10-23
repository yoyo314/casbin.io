"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7336],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),o=d(a),N=r,g=o["".concat(i,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},4110:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5",description:"Casbin\u653f\u7b56\u6267\u884c\u7684\u5f00\u9500",keywords:["\u57fa\u51c6","\u5f00\u9500"]},p=void 0,m={unversionedId:"benchmark",id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5",description:"Casbin\u653f\u7b56\u6267\u884c\u7684\u5f00\u9500",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/zh/docs/benchmark",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"benchmark",title:"\u6027\u80fd\u6d4b\u8bd5",description:"Casbin\u653f\u7b56\u6267\u884c\u7684\u5f00\u9500",keywords:["\u57fa\u51c6","\u5f00\u9500"]},sidebar:"docs",previous:{title:"\u591a\u7ebf\u7a0b",permalink:"/zh/docs/multi-threading"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/performance"}},i={},d=[],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=k("Tabs"),o=k("TabItem"),N={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(o,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u7b56\u7565\u6267\u884c\u7684\u8d1f\u8f7d\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),"\u4e2d\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5\u3002 \u6d4b\u8bd5\u662f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u82f1\u7279\u5c14 \u9177\u777f i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 \u6838, 8 \u5904\u7406\u5668\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go test -bench= -benchmem")," \u7684\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b (op = \u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforce()")," \u8c03\u7528, ms = \u6beb\u79d2, KB = \u5343\u5b57\u8282)\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58\u5f00\u9500 (KB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,r.kt)("td",{parentName:"tr",align:null},"5.649")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,r.kt)("td",{parentName:"tr",align:null},"7.522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,r.kt)("td",{parentName:"tr",align:null},"80.620")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,r.kt)("td",{parentName:"tr",align:null},"765.152")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,r.kt)("td",{parentName:"tr",align:null},"7606")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,r.kt)("td",{parentName:"tr",align:null},"7.906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,r.kt)("td",{parentName:"tr",align:null},"10.755")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,r.kt)("td",{parentName:"tr",align:null},"2.328")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,r.kt)("td",{parentName:"tr",align:null},"91.774")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,r.kt)("td",{parentName:"tr",align:null},"8.370")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,r.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,r.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,r.kt)(o,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," \u7684\u7b56\u7565\u6267\u884c\u6d4b\u8bd5\u662f\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," \u4e2d, \u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool")," \u5b8c\u6210\u7684 \u8fd9\u4e9b\u57fa\u51c6\u7684\u6d4b\u8bd5\u7ed3\u679c\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u82f1\u7279\u5c14 \u9177\u777f i5-6300HQ CPU @ 2.30GHz, 4 \u6838, 4 \u7ebf\u7a0b\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6267\u884c\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," \u914d\u7f6e\u7f16\u8bd1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," \u57fa\u51c6\u7ed3\u679c(op = \u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u8c03\u7528, ms = \u6beb\u79d2)\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"21.450")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.041")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,r.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,r.kt)(o,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin\u7684")," \u7b56\u7565\u6267\u884c\u7684\u6d4b\u8bd5\u662f\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"ben.lua")," \u4e2d\u8fdb\u884c\u7684\u3002 \u6d4b\u8bd5\u53f0\u662f Ubuntu VM \uff0cCPU\u578b\u53f7\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 \u6838, 12 Threads\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"luajit bey.lua")," \u7684\u57fa\u51c6\u7ed3\u679c\u5982\u4e0b(op = \u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce()")," \u8c03\u7528, ms = \u6beb\u79d2)\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219\u5927\u5c0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u5f00\u9500 (ms/op)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"2 \u89c4\u5219 (2\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"5\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5c0f\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"1100\u6761\u89c4\u5219 (1000\u7528\u6237\uff0c100\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u4e2d\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"11000\u6761\u89c4\u5219 (10000\u7528\u6237\uff0c1000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RBAC (\u5927\u578b)"),(0,r.kt)("td",{parentName:"tr",align:null},"110000\u6761\u89c4\u5219 (100000\u7528\u6237\uff0c10000\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,r.kt)("td",{parentName:"tr",align:null},"6 \u6761\u89c4\u5219 (2\u4e2a\u7528\u6237\uff0c1\u4e2a\u89d2\u8272\uff0c2\u4e2a\u57df)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:null},"0 \u89c4\u5219 (0\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u89c4\u5219 (3\u7528\u6237)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u6761\u89c4\u5219 (2\u7528\u6237\uff0c1\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,r.kt)("td",{parentName:"tr",align:null},"9\u6761\u89c4\u5219 (2\u7528\u6237\uff0c2\u4e2a\u89d2\u8272)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}g.isMDXComponent=!0}}]);