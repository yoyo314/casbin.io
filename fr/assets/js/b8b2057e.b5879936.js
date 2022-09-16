"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9800],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),o=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=o(t.components);return n.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(e),k=r,g=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return e?n.createElement(g,i(i({ref:a},d),{},{components:e})):n.createElement(g,i({ref:a},d))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},4696:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=e(7462),r=(e(7294),e(3905));const l={id:"admin-portal",title:"Portail Admin",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},i=void 0,p={unversionedId:"admin-portal",id:"admin-portal",title:"Portail Admin",description:"Admin portal for Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/fr/docs/admin-portal",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Portail Admin",description:"Admin portal for Casbin",keywords:["Admin portal","casdoor"]},sidebar:"docs",previous:{title:"Management",permalink:"/fr/docs/category/management"},next:{title:"Service Casbin",permalink:"/fr/docs/service"}},m={},o=[],d=t=>function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=d("Tabs"),s=d("TabItem"),k={toc:o};function g(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nous fournissons un portail web ",(0,r.kt)("a",{parentName:"p",href:"https://casdoor.org"},"appel\xe9 Casdoor")," pour la gestion des mod\xe8les et la gestion des politiques :"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"\xe9diteur de mod\xe8le"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"\xc9diteur de politique"})),(0,r.kt)("p",null,"Il y a aussi des projets de portail d'administration tiers qui utilisent Casbin comme moteur d'autorisation. Vous pouvez commencer \xe0 construire votre propre service Casbin bas\xe9 sur ces projets."),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projet"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Porte de caisse")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Beego"),(0,r.kt)("td",{parentName:"tr",align:null},"Bas\xe9 sur Beego + XORM + React")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-team")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"go-admin Bas\xe9 sur Gin + Casbin + GORM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Bas\xe9 sur Gin + GORM + Vue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,r.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"\xc9chafaudage RBAC bas\xe9 sur Gin + GORM + Casbin + Ant Design React")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"aller-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Aller \xe0 la passerelle de l'API RESTful bas\xe9e sur Gin + GORM + JWT + RBAC (Casbin)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"\xe9quipe de taureaux")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Gin"),(0,r.kt)("td",{parentName:"tr",align:null},"Plateforme de gestion des autorisations unifi\xe9e bas\xe9e sur JWT + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Iris"),(0,r.kt)("td",{parentName:"tr",align:null},"API Backend bas\xe9e sur Iris + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Rapide")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,r.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur GF (Go Frame)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"Frontend"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"Backend"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue 2.x + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"\xc9cho"),(0,r.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Echo + Gorm + Casbin + Uber-FX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Centre de sp\xe9cialisation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"Mux"),(0,r.kt)("td",{parentName:"tr",align:null},"Plateforme RESTful Golang bas\xe9e sur Casbin + MongoDB"))))),(0,r.kt)(s,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projet"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"toile de d\xe9marrage printani\xe8re")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,r.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur SpringBoot 2.0 + MyBatisPlus + Casbin"))))),(0,r.kt)(s,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projet"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"Exprim\xe9"),(0,r.kt)("td",{parentName:"tr",align:null},"Une application de chaudi\xe8re pour la construction des API RESTful Microservice dans Node.js en utilisant Express, Sequelize, JWT et Casbin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"RBAC Casbin-Role-Mgt-Tableau-RBAC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface React + Material"),(0,r.kt)("td",{parentName:"tr",align:null},"Exprim\xe9"),(0,r.kt)("td",{parentName:"tr",align:null},"Une gestion RBAC conviviale avec l'int\xe9gration d'Enforcer pour v\xe9rifier le r\xe9sultat de la mise en application en route"))))),(0,r.kt)(s,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projet"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,r.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,r.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"Editeur de politique openstack")),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"Django"),(0,r.kt)("td",{parentName:"tr",align:null},"L'interface Web pour Casbin"))))),(0,r.kt)(s,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Projet"),(0,r.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,r.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("th",{parentName:"tr",align:null},"Backend"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,r.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,r.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,r.kt)("td",{parentName:"tr",align:null},"Framework backend non intrusif bas\xe9 sur ThinkPHP 5.1+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,r.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,r.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,r.kt)("td",{parentName:"tr",align:null},"Passerelle API RESTful bas\xe9e sur ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,r.kt)("td",{parentName:"tr",align:null},"Syst\xe8me de gestion des autorisations RBAC bas\xe9 sur vue-element-admin et Laravel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue 2 + \xc9l\xe9ment de l'interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,r.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Laravel 8, JWT et RBAC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,r.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Hyperf, Vuetify et Casbin")))))))}g.isMDXComponent=!0}}]);