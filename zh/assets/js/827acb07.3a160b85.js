"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7830],{3905:function(t,a,e){e.d(a,{Zo:function(){return d},kt:function(){return g}});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),o=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=o(t.components);return n.createElement(p.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=o(e),g=r,h=k["".concat(p,".").concat(g)]||k[g]||u[g]||l;return e?n.createElement(h,i(i({ref:a},d),{},{components:e})):n.createElement(h,i({ref:a},d))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},570:function(t,a,e){e.r(a),e.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var n=e(3117),r=e(102),l=(e(7294),e(3905)),i=["components"],m={id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},p=void 0,o={unversionedId:"admin-portal",id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/zh/docs/admin-portal",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/AdminPortal.mdx",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Admin Portal",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},sidebar:"docs",previous:{title:"\u4f7f\u7528 Envoy \u5b9e\u73b0 Service Mesh \u6743\u9650\u7ba1\u7406",permalink:"/zh/docs/envoy"},next:{title:"Casbin\u670d\u52a1",permalink:"/zh/docs/service"}},d={},u=[],k=function(t){return function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)}},g=k("Tabs"),h=k("TabItem"),N={toc:u};function s(t){var a=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u4e8e\u6a21\u578b\u7ba1\u7406\u548c\u7b56\u7565\u7ba1\u7406\u7684\u95e8\u6237\u7f51\u7ad9 ",(0,l.kt)("a",{parentName:"p",href:"https://casdoor.org"},"Casdoor")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"\u6a21\u578b\u7f16\u8f91\u5668"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"\u7b56\u7565\u7f16\u8f91\u5668"})),(0,l.kt)("p",null,"\u8fd8\u6709\u7b2c\u4e09\u65b9\u95e8\u6237\u7ba1\u7406\u9879\u76ee\uff0c\u4f7f\u7528Casbin\u4f5c\u4e3a\u6388\u6743\u5f15\u64ce\u3002 \u60a8\u53ef\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u9879\u76ee\u5efa\u7acb\u60a8\u81ea\u5df1\u7684 Cabin \u670d\u52a1\u3002"),(0,l.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(h,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Casdoor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Beego"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Beego + XORM + React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-team")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"go-admin\u57fa\u4e8eGin + Casbin + GORM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eGin + GORM + Vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC\u811a\u624b\u67b6\u57fa\u4e8eGin + GORM + Casbin + Ant\u8bbe\u8ba1\u53cd\u5e94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eGin + GORM + JWT + RBAC (Casbin) \u7684RESTful API\u7f51\u5173")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"bullteam")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eJWT + Casbin\u7684\u7edf\u4e00\u6743\u9650\u7ba1\u7406\u5e73\u53f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Iris"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Iris + Casbin \u7684 \u540e\u7aef API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Gfast")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e GF (Go Frame) \u7684\u7ba1\u7406\u95e8\u6237\u7f51\u7ad9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"\u524d\u7aef"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"\u540e\u7aef"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2.x + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Echo"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Echo + Gorm + Cassbin + Uber-FX \u7684\u7ba1\u7406\u95e8\u6237\u7f51\u7ad9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Spec-Center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Mux"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Casbin + MongoDB \u7684 Golang RESTful \u5e73\u53f0"))))),(0,l.kt)(h,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"spring-boot-web")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e SpringBoot 2.0 + MyBatisPlus + Cassbin \u7684\u7ba1\u7406\u95e8\u6237\u7f51\u7ad9"))))),(0,l.kt)(h,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u4f7f\u7528 Express, Sequelize, JWT \u548c Cassbin \u5728Node.js \u5efa\u9020RESTful APIs \u5fae\u578b\u670d\u52a1\u7684\u5e94\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"Casbin-Role-Mgt-Dashboard-RBAC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Material UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709Enforcer\u53ef\u4ee5\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u6267\u884c\u7ed3\u679c\u4e14\u5bf9\u65b0\u624b\u53cb\u597d\u7684RBAC\u7ba1\u7406"))))),(0,l.kt)(h,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"openstack-policy-editor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"Django"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u7684 Web \u754c\u9762"))))),(0,l.kt)(h,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u524d\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540e\u7aef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,l.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e ThinkPHP 5.1+ \u7684\u975e\u4fb5\u5165\u5f0f\u540e\u7aef\u6846\u67b6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,l.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e ThinkPHP5 + ORM + JWT + RBAC (Casbin) \u7684 RESTful API \u7f51\u5173")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8evue-element-admin\u548cLaravel\u7684RBAC\u8bb8\u53ef\u7ba1\u7406\u7cfb\u7edf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"\u524d\u7aef"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"\u540e\u7aef"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2 + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eLaravel 8, JWT \u548c RBAC\u7684\u95e8\u6237\u7f51\u7ad9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eHyperf\u3001Vuetify\u548cCasbin\u7684\u7ba1\u7406\u95e8\u6237\u7f51\u7ad9")))))))}s.isMDXComponent=!0}}]);