"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(s,".").concat(u)]||b[u]||c[u]||l;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={id:"role-managers",title:"Role Managers",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},o=void 0,i={unversionedId:"role-managers",id:"role-managers",title:"Role Managers",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",source:"@site/docs/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/docs/role-managers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagers.mdx",tags:[],version:"current",lastUpdatedBy:"Aarav Arora",lastUpdatedAt:1664369368,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"role-managers",title:"Role Managers",description:"The role manager is used to manage the RBAC role hierarchy in Casbin",keywords:["rolemanager","role manager"]},sidebar:"docs",previous:{title:"Dispatchers",permalink:"/docs/dispatchers"},next:{title:"Middlewares",permalink:"/docs/middlewares"}},s={},p=[{value:"API",id:"api",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=m("Tabs"),b=m("TabItem"),u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don't put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as below. Any 3rd-party contribution on a new role manager is welcomed, please inform us and I will put it in this list:)"),(0,n.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role manager"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go"},"Default Role Manager (built-in)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/session-role-manager"},"Session Role Manager")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/edomosystems"},"EDOMO Systems")),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy, with time-range-based sessions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/okta-role-manager"},"Okta Role Manager")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in ",(0,n.kt)("a",{parentName:"td",href:"https://www.okta.com/"},"Okta"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/auth0-role-manager"},"Auth0 Role Manager")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in ",(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0"),"'s ",(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/docs/extensions/authorization-extension/v2"},"Authorization Extension"))))),(0,n.kt)("p",null,"For developers: all role managers must implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager")," interface. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"Session Role Manager")," can be used as a reference implementation.")),(0,n.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role manager"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Default Role Manager (built-in)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy")))),(0,n.kt)("p",null,"For developers: all role managers must implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager")," interface. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"Default Role Manager")," can be used as a reference implementation.")),(0,n.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role manager"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Default Role Manager (built-in)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/session-role-manager"},"Session Role Manager")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy, with time-range-based sessions")))),(0,n.kt)("p",null,"For developers: all role managers must implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager")," interface. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"Default Role Manager")," can be used as a reference implementation.")),(0,n.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role manager"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Default Role Manager (built-in)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy")))),(0,n.kt)("p",null,"For developers: all role managers must implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager")," interface. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"Default Role Manager")," can be used as a reference implementation.")),(0,n.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role manager"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Default Role Manager (built-in)")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports role hierarchy stored in Casbin policy")))),(0,n.kt)("p",null,"For developers: all role managers must implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager")," interface. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"Default Role Manager")," can be used as a reference implementation."))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API")," section for details."))}d.isMDXComponent=!0}}]);