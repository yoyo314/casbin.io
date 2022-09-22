"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2313],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>g});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),o=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=o(t.components);return n.createElement(p.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=o(e),g=r,s=k["".concat(p,".").concat(g)]||k[g]||u[g]||l;return e?n.createElement(s,i(i({ref:a},d),{},{components:e})):n.createElement(s,i({ref:a},d))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},5247:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=e(7462),r=(e(7294),e(3905));const l={id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},i=void 0,m={unversionedId:"admin-portal",id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",source:"@site/docs/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/docs/admin-portal",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/AdminPortal.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1663855807,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},sidebar:"docs",previous:{title:"Management",permalink:"/docs/category/management"},next:{title:"Casbin Service",permalink:"/docs/service"}},p={},o=[],d=t=>function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=d("Tabs"),k=d("TabItem"),g={toc:o};function s(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"https://casdoor.org"},"web-based portal called Casdoor")," for model management and policy management:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"model editor"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"policy editor"})),(0,r.kt)("p",null,"There are also 3rd-party admin portal projects that use Casbin as authorization engine. You can get started to build your own Casbin service based on these projects."),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(k,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Casdoor")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Beego"),(0,r.kt)("td",{parentName:"tr",align:null},"Based on Beego + XORM + React")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-team")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"go-admin Based on Gin + Casbin + GORM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Based on Gin + GORM + Vue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,r.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC scaffolding based on Gin + GORM + Casbin + Ant Design React")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"go-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Go RESTful API gateway based on Gin + GORM + JWT + RBAC (Casbin)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"bullteam")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Unified Permission management platform based on JWT + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Iris"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend API based on Iris + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Gfast")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin portal based on GF (Go Frame)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"Frontend"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"Backend"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue 2.x + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Echo"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin portal based on Echo + Gorm + Casbin + Uber-FX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Spec-Center")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Mux"),(0,r.kt)("td",{parentName:"tr",align:null},"Golang RESTful platform based on Casbin + MongoDB"))))),(0,r.kt)(k,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"spring-boot-web")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin portal based on SpringBoot 2.0 + MyBatisPlus + Casbin"))))),(0,r.kt)(k,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Express"),(0,r.kt)("td",{parentName:"tr",align:null},"A boilerplate application for building RESTful APIs Microservice in Node.js using Express, Sequelize, JWT and Casbin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"Casbin-Role-Mgt-Dashboard-RBAC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,r.kt)("td",{parentName:"tr",align:null},"React + Material UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Express"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner friendly RBAC management with Enforcer integration to check enforcement result on the go"))))),(0,r.kt)(k,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"openstack-policy-editor")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"Django"),(0,r.kt)("td",{parentName:"tr",align:null},"The Web UI for Casbin"))))),(0,r.kt)(k,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,r.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,r.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-intrusive backend framework based on ThinkPHP 5.1+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,r.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,r.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,r.kt)("td",{parentName:"tr",align:null},"RESTful API gateway based on ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,r.kt)("td",{parentName:"tr",align:null},"RBAC permission management system based on vue-element-admin and Laravel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue 2 + Element UI"),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin portal based on Laravel 8, JWT and RBAC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin portal based on Hyperf, Vuetify and Casbin")))))))}s.isMDXComponent=!0}}]);