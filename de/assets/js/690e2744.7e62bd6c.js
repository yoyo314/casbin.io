"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4028],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),g=d(a),k=r,s=g["".concat(p,".").concat(k)]||g[k]||o[k]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9253:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return o}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],m={id:"admin-portal",title:"Admin-Portal"},p=void 0,d={unversionedId:"admin-portal",id:"admin-portal",title:"Admin-Portal",description:"Wir bieten ein -basiertes Portal namens Casdoor f\xfcr Model-Management und Richtlinien-Management:",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/de/docs/admin-portal",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/AdminPortal.mdx",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Admin-Portal"},sidebar:"docs",previous:{title:"Genehmigung des Service-Mesh durch den Gesandten",permalink:"/de/docs/envoy"},next:{title:"Kasbin-Dienst",permalink:"/de/docs/service"}},u={},o=[],g=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},k=g("Tabs"),s=g("TabItem"),h={toc:o};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Wir bieten ein ",(0,l.kt)("a",{parentName:"p",href:"https://casdoor.org"},"-basiertes Portal namens Casdoor")," f\xfcr Model-Management und Richtlinien-Management:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"model-Editor"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"Richtlinien-Editor"})),(0,l.kt)("p",null,"Es gibt auch 3rd-party Admin-Portalprojekte, die Casbin als Autorisierungs-Engine verwenden. Sie k\xf6nnen damit beginnen, Ihren eigenen Casbin-Service auf Basis dieser Projekte aufzubauen."),(0,l.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,l.kt)("th",{parentName:"tr",align:null},"Autor"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://casdoor.org"},"Kasse")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Reagieren + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Beego"),(0,l.kt)("td",{parentName:"tr",align:null},"Basierend auf Beego + XORM + React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admin-team/go-admin"},"go-admin-team/go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/go-admi-team"},"@go-admin-Team")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"go-admin basierend auf Gin + Casbin + GORM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Basierend auf Gin + GORM + Vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,l.kt)("td",{parentName:"tr",align:null},"Reagieren + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC Ger\xfcst basierend auf Gin + GORM + Casbin + Ant Design React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"RESTful API Gateway basierend auf Gin + GORM + JWT + RBAC (Casbin) gehen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"bullteam")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Unified Permission Management Plattform basierend auf JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Isis"),(0,l.kt)("td",{parentName:"tr",align:null},"Backend-API basierend auf Iris + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Gl\xfchen")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"Adminportal basierend auf GF (Go Frame)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"echo-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin-ui"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha/echo-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/RealLiuSha"},"@RealLiuSha")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2.x + Element-UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Echo"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin Portal basierend auf Echo + Gorm + Kasbin + Uber-FX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade/Spec-Center"},"Spec-Center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/atul-wankhade"},"@atul-wankhade")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"Mux"),(0,l.kt)("td",{parentName:"tr",align:null},"Golang RESTful Plattform basierend auf Casbin + MongoDB"))))),(0,l.kt)(s,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,l.kt)("th",{parentName:"tr",align:null},"Autor"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW/spring-boot-web"},"spring-Boot-Web")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/BazookaW"},"@BazookaW")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"SpringBoot"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin Portal basierend auf SpringBoot 2.0 + MyBatisPlus + Casbin"))))),(0,l.kt)(s,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,l.kt)("th",{parentName:"tr",align:null},"Autor"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto/node-mysql-rest-api"},"node-mysql-rest-api")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JoemaNequinto"},"@JoemaNequinto")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"Eine Boilerplatten-Anwendung zum Bau von RESTful APIs Microservice in Node.js mit Express, Sequelize, JWT und Casbin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"Casbin-Rollen-Mgt-Dashboard-RBAC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,l.kt)("td",{parentName:"tr",align:null},"Reagieren + Materialschnittstelle"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"Beginnende freundliche RBAC-Verwaltung mit Enforcer-Integration, um das Enforcer-Ergebnis unterwegs zu \xfcberpr\xfcfen"))))),(0,l.kt)(s,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,l.kt)("th",{parentName:"tr",align:null},"Autor"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm/fastapi-mysql-generator"},"fastapi-mysql-generator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CoderCharm"},"@CoderCharm")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian/FastAPI-MySQL-Tortoise-Casbin"},"FastAPI-MySQL-Tortoise-Casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xingxingzaixian"},"@xingxingzaixian")),(0,l.kt)("td",{parentName:"tr",align:null},"Keine"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI"),(0,l.kt)("td",{parentName:"tr",align:null},"FastAPI + MySQL + Tortoise + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"openstack-Policy-Editor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"Django"),(0,l.kt)("td",{parentName:"tr",align:null},"Die Web-Oberfl\xe4che f\xfcr Kasbin"))))),(0,l.kt)(s,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Projekt"),(0,l.kt)("th",{parentName:"tr",align:null},"Autor"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@Techoner")),(0,l.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"Nicht aufdringliches Backend-Framework basierend auf ThinkPHP 5.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,l.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"RESTful API Gateway basierend auf ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC Berechtigungsverwaltungssystem basierend auf vue-element-admin und Laravel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2 + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,l.kt)("td",{parentName:"tr",align:null},"Adminportal basierend auf Laravel 8, JWT und RBAC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale/hyperf-vuetify-admin"},"hyperf-vuetify-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TragicMale"},"@TragicMale")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Vuetify 2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Hyperf"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin Portal basierend auf Hyperf, Vuetify und Casbin")))))))}N.isMDXComponent=!0}}]);