"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2313],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(a),c=r,g=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8215:function(t,e,a){var n=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},5064:function(t,e,a){a.d(e,{Z:function(){return s}});var n=a(3117),r=a(7294),l=a(2389),i=a(9443);var o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},u=a(9558),m=a(6010),p="tabItem_1uMI";function d(t){var e,a,n,l=t.lazy,i=t.block,d=t.defaultValue,s=t.values,c=t.groupId,g=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"string"==typeof t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:k.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),b=(0,u.lx)(h,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(e=null!=d?d:null==(a=k.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(n=k[0])?void 0:n.props.value;if(null!==N&&!h.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=o(),v=f.tabGroupChoices,y=f.setTabGroupChoices,T=(0,r.useState)(N),w=T[0],P=T[1],C=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=v[c];null!=E&&E!==w&&h.some((function(t){return t.value===E}))&&P(E)}var A=function(t){var e=t.currentTarget,a=C.indexOf(e),n=h[a].value;n!==w&&(O(e),P(n),null!=c&&y(c,n))},x=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=C.indexOf(t.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(t.currentTarget)-1;a=C[r]||C[C.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":i},g)},h.map((function(t){var e=t.value,a=t.label;return r.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,m.Z)("tabs__item",p,{"tabs__item--active":w===e}),key:e,ref:function(t){return C.push(t)},onKeyDown:x,onFocus:A,onClick:A},null!=a?a:e)}))),l?(0,r.cloneElement)(k.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function s(t){var e=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(e)},t))}},9443:function(t,e,a){var n=(0,a(7294).createContext)(void 0);e.Z=n},7850:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return g}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=a(5064),o=a(8215),u=["components"],m={id:"admin-portal",title:"Admin Portal"},p=void 0,d={unversionedId:"admin-portal",id:"admin-portal",isDocsHomePage:!1,title:"Admin Portal",description:"We provide a web-based portal called Casdoor for model management and policy management:",source:"@site/docs/AdminPortal.mdx",sourceDirName:".",slug:"/admin-portal",permalink:"/docs/admin-portal",editUrl:"https://github.com/casbin/casbin-website/edit/master/docs/docs/AdminPortal.mdx",tags:[],version:"current",frontMatter:{id:"admin-portal",title:"Admin Portal"},sidebar:"docs",previous:{title:"Performance Optimization",permalink:"/docs/performance"},next:{title:"Casbin Service",permalink:"/docs/service"}},s=[],c={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We provide a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casdoor"},"web-based portal called Casdoor")," for model management and policy management:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_model_editor.png",alt:"model editor"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hsluoyz.github.io/casbin/ui_policy_editor.png",alt:"policy editor"})),(0,l.kt)("p",null,"There are also 3rd-party admin portal projects that use Casbin as authorization engine. You can get started to build your own Casbin service based on these projects."),(0,l.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casdoor"},"Casdoor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Beego"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on Beego + XORM + React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax/gin-vue-admin"},"gin-vue-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/piexlmax"},"@piexlmax")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on Gin + GORM + Vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian/gin-admin"},"gin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/LyricTian"},"@LyricTian")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Ant Design"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC scaffolding based on Gin + GORM + Casbin + Ant Design React")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017/go-admin"},"go-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hequan2017"},"@hequan2017")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Go RESTful API gateway based on Gin + GORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam/zeus-admin"},"zeus-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bullteam"},"bullteam")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Gin"),(0,l.kt)("td",{parentName:"tr",align:null},"Unified Permission management platform based on JWT + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg/IrisAdminApi"},"IrisAdminApi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/snowlyg"},"@snowlyg")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Iris"),(0,l.kt)("td",{parentName:"tr",align:null},"Backend API based on Iris + Casbin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103/gfast"},"Gfast")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tiger1103"},"@tiger1103")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Go Frame"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on GF (Go Frame)"))))),(0,l.kt)(o.Z,{value:"nodejs",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866/Casbin-Role-Mgt-Dashboard-RBAC"},"Casbin-Role-Mgt-Dashboard-RBAC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alikhan866"},"@alikhan866")),(0,l.kt)("td",{parentName:"tr",align:null},"React + Material UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Express"),(0,l.kt)("td",{parentName:"tr",align:null},"Beginner friendly RBAC management with Enforcer integration to check enforcement result on the go"))))),(0,l.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-policy-editor"},"openstack-policy-editor")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,l.kt)("td",{parentName:"tr",align:null},"Django"),(0,l.kt)("td",{parentName:"tr",align:null},"The Web UI for Casbin"))))),(0,l.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,l.kt)("th",{parentName:"tr",align:null},"Backend"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner/tadmin"},"Tadmin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/techoner"},"@techoner")),(0,l.kt)("td",{parentName:"tr",align:null},"AmazeUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-intrusive backend framework based on ThinkPHP 5.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/video.tinywan.com"},"video.tinywan.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"@Tinywanner")),(0,l.kt)("td",{parentName:"tr",align:null},"LayUI"),(0,l.kt)("td",{parentName:"tr",align:null},"ThinkPHP"),(0,l.kt)("td",{parentName:"tr",align:null},"RESTful API gateway based on ThinkPHP5 + ORM + JWT + RBAC (Casbin)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998/laravel-casbin-admin"},"laravel-casbin-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pl1998"},"@pl1998")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC permission management system based on vue-element-admin and Laravel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"larke-admin (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin-frontend"},"Frontend"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil/larke-admin"},"Backend"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/deatil"},"@deatil")),(0,l.kt)("td",{parentName:"tr",align:null},"Vue 2 + Element UI"),(0,l.kt)("td",{parentName:"tr",align:null},"Laravel 8"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin portal based on Laravel 8, JWT and RBAC")))))))}g.isMDXComponent=!0}}]);