"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9800],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,g=s["".concat(m,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4696:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],p={id:"admin-portal",title:"Portail Admin"},m=void 0,u={unversionedId:"admin-portal",id:"admin-portal",title:"Portail Admin",description:"Nous fournissons un portail web appel\xe9 Casdoor pour la gestion des mod\xe8les et la gestion des politiques :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/fr/docs/admin-portal",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/AdminPortal.mdx",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Portail Admin"},sidebar:"docs",previous:{title:"Autorisation de maillage de service par l'envoy\xe9",permalink:"/fr/docs/envoy"},next:{title:"Service Casbin",permalink:"/fr/docs/service"}},o={},d=[],s=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},k=s("Tabs"),g=s("TabItem"),c={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Nous fournissons un portail web ",(0,l.kt)("a",{parentName:"p",href:"https://casdoor.org"},"appel\xe9 Casdoor")," pour la gestion des mod\xe8les et la gestion des politiques :"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"\xe9diteur de mod\xe8le"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"\xc9diteur de politique"})),(0,l.kt)("p",null,"Il y a aussi des projets de portail d'administration tiers qui utilisent Casbin comme moteur d'autorisation. Vous pouvez commencer \xe0 construire votre propre service Casbin bas\xe9 sur ces projets."),(0,l.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projet"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Porte de caisse")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Beego"),(0,l.kt)("td",{parentName:"tr",align:null},"Bas\xe9 sur Beego + XORM + React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-team")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"go-admin Bas\xe9 sur Gin + Casbin + GORM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bas\xe9 sur Gin + GORM + Vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"\xc9chafaudage RBAC bas\xe9 sur Gin + GORM + Casbin + Ant Design React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"aller-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Aller \xe0 la passerelle de l'API RESTful bas\xe9e sur Gin + GORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"\xe9quipe de taureaux")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Plateforme de gestion des autorisations unifi\xe9e bas\xe9e sur JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Iris"),(0,l.kt)("td",{parentName:"tr",align:null},"API Backend bas\xe9e sur Iris + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Rapide")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur GF (Go Frame)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2.x + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"\xc9cho"),(0,l.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Echo + Gorm + Casbin + Uber-FX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Centre de sp\xe9cialisation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"Mux"),(0,l.kt)("td",{parentName:"tr",align:null},"Plateforme RESTful Golang bas\xe9e sur Casbin + MongoDB"))))),(0,l.kt)(g,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projet"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"toile de d\xe9marrage printani\xe8re")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,l.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur SpringBoot 2.0 + MyBatisPlus + Casbin"))))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projet"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"Exprim\xe9"),(0,l.kt)("td",{parentName:"tr",align:null},"Une application de chaudi\xe8re pour la construction des API RESTful Microservice dans Node.js en utilisant Express, Sequelize, JWT et Casbin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"RBAC Casbin-Role-Mgt-Tableau-RBAC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,l.kt)("td",{parentName:"tr",align:null},"Interface React + Material"),(0,l.kt)("td",{parentName:"tr",align:null},"Exprim\xe9"),(0,l.kt)("td",{parentName:"tr",align:null},"Une gestion RBAC conviviale avec l'int\xe9gration d'Enforcer pour v\xe9rifier le r\xe9sultat de la mise en application en route"))))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projet"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,l.kt)("td",{parentName:"tr",align:null},"Aucun"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"Editeur de politique openstack")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"Django"),(0,l.kt)("td",{parentName:"tr",align:null},"L'interface Web pour Casbin"))))),(0,l.kt)(g,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projet"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,l.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"Framework backend non intrusif bas\xe9 sur ThinkPHP 5.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,l.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"Passerelle API RESTful bas\xe9e sur ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,l.kt)("td",{parentName:"tr",align:null},"Syst\xe8me de gestion des autorisations RBAC bas\xe9 sur vue-element-admin et Laravel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2 + \xc9l\xe9ment de l'interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,l.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Laravel 8, JWT et RBAC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,l.kt)("td",{parentName:"tr",align:null},"Portail d'administration bas\xe9 sur Hyperf, Vuetify et Casbin")))))))}N.isMDXComponent=!0}}]);