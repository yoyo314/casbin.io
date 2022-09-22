"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4379],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),d=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,o=l(t,["components","mdxType","originalType","parentName"]),s=d(a),g=r,k=s["".concat(c,".").concat(g)]||s[g]||m[g]||i;return a?n.createElement(k,p(p({ref:e},o),{},{components:a})):n.createElement(k,p({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6565:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={id:"overview",title:"Overview",description:"Casbin overview",keywords:["overview","supported languages"]},p=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"Casbin overview",source:"@site/docs/Overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Overview.mdx",tags:[],version:"current",lastUpdatedBy:"Fabio Ospitia Trujillo",lastUpdatedAt:1663871316,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"overview",title:"Overview",description:"Casbin overview",keywords:["overview","supported languages"]},sidebar:"docs",previous:{title:"The basics",permalink:"/docs/category/the-basics"},next:{title:"Get Started",permalink:"/docs/get-started"}},c={},d=[{value:"Languages supported by Casbin:",id:"languages-supported-by-casbin",level:2},{value:"Feature set for different languages",id:"feature-set-for-different-languages",level:3},{value:"What is Casbin?",id:"what-is-casbin",level:2},{value:"What Casbin does:",id:"what-casbin-does",level:3},{value:"What Casbin does <strong>NOT</strong> do:",id:"what-casbin-does-not-do",level:3}],o={toc:d};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casbin is a powerful and efficient open-source access control library that supports various\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Access_control#Access_control_models"},"access control models"),"\nfor enforcing authorization across the board."),(0,r.kt)("p",null,"Enforcing a set of rules is as simple as listing down subjects, objects and the\ndesired allowed action (or any other format as per your needs) in a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"policy"))," file.\nThis is synonymous across all flows Casbin is used in. The developer/administrator has the\ncomplete control over the layout, execution and conditions for authorization\nwhich is set via the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"model"))," file. Casbin provides an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Enforcer"))," for\nvalidating an incoming request based on the policy and model files given to the Enforcer."),(0,r.kt)("h2",{id:"languages-supported-by-casbin"},"Languages supported by Casbin:"),(0,r.kt)("p",null,"Casbin provides support for various programming languages, ready to be integrated\nwithin any project and workflow:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin"},(0,r.kt)("img",{alt:"golang",src:a(2067).Z,width:"480",height:"251"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/jcasbin"},(0,r.kt)("img",{alt:"java",src:a(8951).Z,width:"480",height:"240"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/node-casbin"},(0,r.kt)("img",{alt:"nodejs",src:a(1875).Z,width:"480",height:"293"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/php-casbin/php-casbin"},(0,r.kt)("img",{alt:"php",src:a(9818).Z,width:"480",height:"259"}))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin"},"Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin"},"jCasbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin"},"node-Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin"},"PHP-Casbin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/pycasbin"},(0,r.kt)("img",{alt:"python",src:a(1634).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/Casbin.NET"},(0,r.kt)("img",{alt:"dotnet",src:a(145).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin-cpp"},(0,r.kt)("img",{alt:"c++",src:a(5081).Z,width:"480",height:"270"}))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://github.com/casbin/casbin-rs"},(0,r.kt)("img",{alt:"rust",src:a(3383).Z,width:"480",height:"240"}))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin"},"PyCasbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/Casbin.NET"},"Casbin.NET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-cpp"},"Casbin-CPP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-rs"},"Casbin-RS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"production-ready")))),(0,r.kt)("h3",{id:"feature-set-for-different-languages"},"Feature set for different languages"),(0,r.kt)("p",null,"We are always working our best to make Casbin have the same set of features for all\nlanguages. But the reality is not that beautiful."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Go"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:"center"},"PHP"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"C#"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Delphi"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Rust"),(0,r.kt)("th",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Lua"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dart"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Elixir"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enforcement"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RBAC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ABAC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Scaling ABAC (",(0,r.kt)("inlineCode",{parentName:"td"},"eval()"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Management API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RBAC API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Batch API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Filtered Adapter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Watcher"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Role Manager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Multi-Threading"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"'in' of matcher"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),"- \u2705 for Watcher or Role Manager\nonly means having the interface in the core library. It is not indicative of whether\nthere is a watcher or role manager implementation available."),(0,r.kt)("h2",{id:"what-is-casbin"},"What is Casbin?"),(0,r.kt)("p",null,"Casbin is an authorization library which can be used in flows where we want a certain\n",(0,r.kt)("inlineCode",{parentName:"p"},"object")," or entity to be accessed by a specific user or ",(0,r.kt)("inlineCode",{parentName:"p"},"subject"),". The type of access i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\ncan be ",(0,r.kt)("em",{parentName:"p"},"read"),", ",(0,r.kt)("em",{parentName:"p"},"write"),", ",(0,r.kt)("em",{parentName:"p"},"delete"),' or any other action as set by the developer.\nThis is how Casbin is most widely used and its called the "standard"\nor classic ',(0,r.kt)("inlineCode",{parentName:"p"},"{ subject, object, action }")," flow."),(0,r.kt)("p",null,"Casbin is capable of handling many complex authorization senerios other than the standard flow.\nThere can be addition of ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac"},"roles (RBAC)"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/abac"},"attributes (ABAC)")," etc."),(0,r.kt)("h3",{id:"what-casbin-does"},"What Casbin does:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enforce the policy in the classic ",(0,r.kt)("inlineCode",{parentName:"li"},"{ subject, object, action }")," form\nor a customized form as you defined, both allow and deny authorizations are supported."),(0,r.kt)("li",{parentName:"ol"},"Handle the storage of the access control model and its policy."),(0,r.kt)("li",{parentName:"ol"},"Manage the role-user mappings and role-role mappings (aka role hierarchy in RBAC)."),(0,r.kt)("li",{parentName:"ol"},"Support built-in superuser like ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"administrator"),". A superuser can do anything without explicit permissions."),(0,r.kt)("li",{parentName:"ol"},"Multiple built-in operators to support the rule matching. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch")," can map a\nresource key ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo/bar")," to the pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo*"),".")),(0,r.kt)("h3",{id:"what-casbin-does-not-do"},"What Casbin does ",(0,r.kt)("strong",{parentName:"h3"},"NOT")," do:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Authentication (aka verify ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," when a user logs in)"),(0,r.kt)("li",{parentName:"ol"},"Manage the list of users or roles.")),(0,r.kt)("p",null,"It's more convenient for the project to manage their list of users, roles or passwords.\nUsers usually have their passwords, and Casbin is not designed as a password container.\nHowever, Casbin stores the user-role mapping for the RBAC scenario."))}m.isMDXComponent=!0},5081:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cpp-56b38b73abf68f92c17de2d420951248.png"},145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dotnet-72b4fc5b6729af5affc0dad178cca8e8.png"},2067:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/golang-bb03eb73d50185d94e628cc517857215.png"},8951:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/java-1a1bba41af766a38ce2c5abb53785db3.png"},1875:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/nodejs-6ddbd197a96684461fe7e1e19f946aab.png"},9818:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/php-c6cf7587c7ce90491250aa5877d5621a.png"},1634:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/python-d2e764c939405c0ddad577ca4d53f9f9.png"},3383:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);