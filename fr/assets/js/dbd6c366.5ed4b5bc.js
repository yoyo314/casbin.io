"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,b=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(b,s(s({ref:t},u),{},{components:a})):r.createElement(b,s({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={id:"role-managers",title:"Responsables des r\xf4les",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},s=void 0,i={unversionedId:"role-managers",id:"role-managers",title:"Responsables des r\xf4les",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/fr/docs/role-managers",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"role-managers",title:"Responsables des r\xf4les",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},sidebar:"docs",previous:{title:"R\xe9partiteurs",permalink:"/fr/docs/dispatchers"},next:{title:"Moyens",permalink:"/fr/docs/middlewares"}},o={},p=[{value:"API",id:"api",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=u("Tabs"),m=u("TabItem"),c={toc:p};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le gestionnaire de r\xf4le est utilis\xe9 pour g\xe9rer la hi\xe9rarchie des r\xf4les RBAC (cartographie des r\xf4les utilisateurs) dans Casbin. Un gestionnaire de r\xf4le peut r\xe9cup\xe9rer les donn\xe9es du r\xf4le \xe0 partir des r\xe8gles de politique de Casbin ou de sources externes telles que LDAP, Okta, Auth0, Azure AD, etc. Nous supportons diff\xe9rentes impl\xe9mentations d'un gestionnaire de r\xf4les. Pour rester l\xe9ger, nous ne pla\xe7ons pas le code du gestionnaire de r\xf4le dans la biblioth\xe8que principale (\xe0 l'exception du gestionnaire de r\xf4le par d\xe9faut). Une liste compl\xe8te des gestionnaires de r\xf4le de Casbin est fournie ci-dessous. Toute contribution de tierce partie sur un nouveau gestionnaire de r\xf4le est la bienvenue, merci de nous en informer et je la mettrai dans cette liste:)"),(0,n.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Responsable du r\xf4le"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go"},"Gestionnaire de r\xf4le par d\xe9faut (int\xe9gr\xe9)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique de Casbin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/session-role-manager"},"Gestionnaire de r\xf4le de session")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/edomosystems"},"Syst\xe8mes EDOMO")),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique Casbin, avec des sessions bas\xe9es sur une plage de temps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/okta-role-manager"},"Gestionnaire de r\xf4le Okta")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans ",(0,n.kt)("a",{parentName:"td",href:"https://www.okta.com/"},"Okta"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/auth0-role-manager"},"Gestionnaire de r\xf4le Auth0")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in ",(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0"),"'s ",(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/docs/extensions/authorization-extension/v2"},"Authorization Extension"))))),(0,n.kt)("p",null,"Pour les d\xe9veloppeurs : tous les gestionnaires de r\xf4les doivent impl\xe9menter l'interface ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"Gestionnaire de r\xf4le de session")," peut \xeatre utilis\xe9 comme une impl\xe9mentation de r\xe9f\xe9rence.")),(0,n.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Responsable du r\xf4le"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Gestionnaire de r\xf4le par d\xe9faut (int\xe9gr\xe9)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique de Casbin")))),(0,n.kt)("p",null,"Pour les d\xe9veloppeurs : tous les gestionnaires de r\xf4les doivent impl\xe9menter l'interface ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Le gestionnaire de r\xf4le par d\xe9faut")," peut \xeatre utilis\xe9 comme une impl\xe9mentation de r\xe9f\xe9rence.")),(0,n.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Responsable du r\xf4le"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Gestionnaire de r\xf4le par d\xe9faut (int\xe9gr\xe9)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique de Casbin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/session-role-manager"},"Gestionnaire de r\xf4le de session")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique Casbin, avec des sessions bas\xe9es sur une plage de temps")))),(0,n.kt)("p",null,"Pour les d\xe9veloppeurs : tous les gestionnaires de r\xf4les doivent impl\xe9menter l'interface ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Le gestionnaire de r\xf4le par d\xe9faut")," peut \xeatre utilis\xe9 comme une impl\xe9mentation de r\xe9f\xe9rence.")),(0,n.kt)(m,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Responsable du r\xf4le"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Gestionnaire de r\xf4le par d\xe9faut (int\xe9gr\xe9)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique de Casbin")))),(0,n.kt)("p",null,"Pour les d\xe9veloppeurs : tous les gestionnaires de r\xf4les doivent impl\xe9menter l'interface ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Le gestionnaire de r\xf4le par d\xe9faut")," peut \xeatre utilis\xe9 comme une impl\xe9mentation de r\xe9f\xe9rence.")),(0,n.kt)(m,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Responsable du r\xf4le"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Gestionnaire de r\xf4le par d\xe9faut (int\xe9gr\xe9)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supporte la hi\xe9rarchie des r\xf4les stock\xe9e dans la politique de Casbin")))),(0,n.kt)("p",null,"Pour les d\xe9veloppeurs : tous les gestionnaires de r\xf4les doivent impl\xe9menter l'interface ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Le gestionnaire de r\xf4le par d\xe9faut")," peut \xeatre utilis\xe9 comme une impl\xe9mentation de r\xe9f\xe9rence."))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"Voir la section ",(0,n.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API")," pour plus de d\xe9tails."))}b.isMDXComponent=!0}}]);