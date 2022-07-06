"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5171],{3905:function(t,a,e){e.d(a,{Zo:function(){return m},kt:function(){return u}});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),s=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=s(t.components);return n.createElement(p.Provider,{value:a},t.children)},b={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(e),u=r,d=c["".concat(p,".").concat(u)]||c[u]||b[u]||l;return e?n.createElement(d,i(i({ref:a},m),{},{components:e})):n.createElement(d,i({ref:a},m))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=e[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},4681:function(t,a,e){e.r(a),e.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return b}});var n=e(3117),r=e(102),l=(e(7294),e(3905)),i=["components"],o={id:"role-managers",title:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"},p=void 0,s={unversionedId:"role-managers",id:"role-managers",title:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",description:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001Casbin\u5185\u306eRBAC\u30ed\u30fc\u30eb\u968e\u5c64(\u30e6\u30fc\u30b6\u30fc\u30ed\u30fc\u30eb\u30de\u30c3\u30d4\u30f3\u30b0)\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001Casbin\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u307e\u305f\u306fLDAP\u3001Okta\u3001Auth0\u3001Azure AD\u306a\u3069\u306e\u5916\u90e8\u30bd\u30fc\u30b9\u304b\u3089\u30ed\u30fc\u30eb\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002 \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u5b9f\u88c5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002 \u8efd\u91cf\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u3001\u30e1\u30a4\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u30b3\u30fc\u30c9\u3092\u5165\u308c\u307e\u305b\u3093(\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u9664\u304f)\u3002 Casbin \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002 \u65b0\u3057\u3044\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u5bfe\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8ca2\u732e\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30ea\u30b9\u30c8\u306b\u8a18\u8f09\u3057\u307e\u3059:)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/ja/docs/role-managers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagers.mdx",tags:[],version:"current",frontMatter:{id:"role-managers",title:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"},sidebar:"docs",previous:{title:"\u6d3e\u9063\u8005",permalink:"/ja/docs/dispatchers"},next:{title:"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2",permalink:"/ja/docs/middlewares"}},m={},b=[{value:"API",id:"api",level:2}],c=function(t){return function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)}},u=c("Tabs"),d=c("TabItem"),g={toc:b};function h(t){var a=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001Casbin\u5185\u306eRBAC\u30ed\u30fc\u30eb\u968e\u5c64(\u30e6\u30fc\u30b6\u30fc\u30ed\u30fc\u30eb\u30de\u30c3\u30d4\u30f3\u30b0)\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001Casbin\u30dd\u30ea\u30b7\u30fc\u30eb\u30fc\u30eb\u307e\u305f\u306fLDAP\u3001Okta\u3001Auth0\u3001Azure AD\u306a\u3069\u306e\u5916\u90e8\u30bd\u30fc\u30b9\u304b\u3089\u30ed\u30fc\u30eb\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002 \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u5b9f\u88c5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002 \u8efd\u91cf\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u3001\u30e1\u30a4\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u30b3\u30fc\u30c9\u3092\u5165\u308c\u307e\u305b\u3093(\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u9664\u304f)\u3002 Casbin \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002 \u65b0\u3057\u3044\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u5bfe\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8ca2\u732e\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30ea\u30b9\u30c8\u306b\u8a18\u8f09\u3057\u307e\u3059:)"),(0,l.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08\u30d3\u30eb\u30c8\u30a4\u30f3\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/session-role-manager"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/edomosystems"},"EDOMO \u30b7\u30b9\u30c6\u30e0")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u6642\u9593\u7bc4\u56f2\u30d9\u30fc\u30b9\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/okta-role-manager"},"Okta \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.okta.com/"},"Okta")," \u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/auth0-role-manager"},"Auth0 \u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0"),"\u306e ",(0,l.kt)("a",{parentName:"td",href:"https://auth0.com/docs/extensions/authorization-extension/v2"},"Authorization Extension")," \u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")))),(0,l.kt)("p",null,"\u958b\u767a\u8005\u306e\u5834\u5408: \u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")," \u3092\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08\u30d3\u30eb\u30c8\u30a4\u30f3\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")))),(0,l.kt)("p",null,"\u958b\u767a\u8005\u306e\u5834\u5408: \u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")," \u3092\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08\u30d3\u30eb\u30c8\u30a4\u30f3\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/session-role-manager"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u6642\u9593\u7bc4\u56f2\u30d9\u30fc\u30b9\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")))),(0,l.kt)("p",null,"\u958b\u767a\u8005\u306e\u5834\u5408: \u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")," \u3092\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08\u30d3\u30eb\u30c8\u30a4\u30f3\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")))),(0,l.kt)("p",null,"\u958b\u767a\u8005\u306e\u5834\u5408: \u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")," \u3092\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08\u30d3\u30eb\u30c8\u30a4\u30f3\uff09")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u30dd\u30ea\u30b7\u30fc\u306b\u683c\u7d0d\u3055\u308c\u305f\u30ed\u30fc\u30eb\u968e\u5c64\u3092\u30b5\u30dd\u30fc\u30c8")))),(0,l.kt)("p",null,"\u958b\u767a\u8005\u306e\u5834\u5408: \u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc")," \u3092\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("p",null,"\u8a73\u7d30\u306f ",(0,l.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API")," \u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}h.isMDXComponent=!0}}]);