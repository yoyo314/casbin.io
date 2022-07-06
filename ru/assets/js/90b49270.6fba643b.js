"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3029],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,d=c["".concat(p,".").concat(u)]||c[u]||b[u]||l;return a?n.createElement(d,o(o({ref:e},s),{},{components:a})):n.createElement(d,o({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3080:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return b}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={id:"role-managers",title:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0440\u043e\u043b\u0435\u0439"},p=void 0,m={unversionedId:"role-managers",id:"role-managers",title:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0440\u043e\u043b\u0435\u0439",description:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0435\u0439 \u0440\u043e\u043b\u0435\u0439 RBAC (\u043a\u0430\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f) \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0435\u0439 \u0438\u0437 \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 Casbin \u0438\u043b\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a LDAP, Okta, Auth0, Azure AD, \u0438 \u0442.\u0434. \u041c\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u043e\u043b\u0435\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043b\u0435\u0433\u043a\u0438\u0439 \u0432\u0435\u0441, \u043c\u044b \u043d\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u043c \u043a\u043e\u0434 \u0440\u043e\u043b\u0435\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 (\u043a\u0440\u043e\u043c\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e). \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0432\u044b\u0445 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0430 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0438\u0436\u0435. \u041b\u044e\u0431\u043e\u0439 \u0432\u043a\u043b\u0430\u0434 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0432 \u043d\u043e\u0432\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043d\u0430\u043c \u0438 \u044f \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u043c \u0435\u0433\u043e \u0432 \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a:)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/RoleManagers.mdx",sourceDirName:".",slug:"/role-managers",permalink:"/ru/docs/role-managers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagers.mdx",tags:[],version:"current",frontMatter:{id:"role-managers",title:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0440\u043e\u043b\u0435\u0439"},sidebar:"docs",previous:{title:"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u044b",permalink:"/ru/docs/dispatchers"},next:{title:"\u041f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u0438",permalink:"/ru/docs/middlewares"}},s={},b=[{value:"API",id:"api",level:2}],c=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},u=c("Tabs"),d=c("TabItem"),g={toc:b};function h(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0435\u0439 \u0440\u043e\u043b\u0435\u0439 RBAC (\u043a\u0430\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f) \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0435\u0439 \u0438\u0437 \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 Casbin \u0438\u043b\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a LDAP, Okta, Auth0, Azure AD, \u0438 \u0442.\u0434. \u041c\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u043e\u043b\u0435\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043b\u0435\u0433\u043a\u0438\u0439 \u0432\u0435\u0441, \u043c\u044b \u043d\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u043c \u043a\u043e\u0434 \u0440\u043e\u043b\u0435\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 (\u043a\u0440\u043e\u043c\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e). \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0432\u044b\u0445 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0430 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0438\u0436\u0435. \u041b\u044e\u0431\u043e\u0439 \u0432\u043a\u043b\u0430\u0434 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0432 \u043d\u043e\u0432\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043d\u0430\u043c \u0438 \u044f \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u043c \u0435\u0433\u043e \u0432 \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a:)"),(0,l.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/rbac/default-role-manager/role_manager.go"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0439\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/session-role-manager"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/edomosystems"},"EDOMO \u0421\u0438\u0441\u0442\u0435\u043c\u0430")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0443\u044e\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d, \u0441 \u0445\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/okta-role-manager"},"Okta \u0440\u043e\u043b\u0435\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e \u0440\u043e\u043b\u0435\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 ",(0,l.kt)("a",{parentName:"td",href:"https://www.okta.com/"},"Okta"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/auth0-role-manager"},"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e \u0440\u043e\u043b\u0435\u0439, \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0443\u044e \u0432 ",(0,l.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0")," ",(0,l.kt)("a",{parentName:"td",href:"https://auth0.com/docs/extensions/authorization-extension/v2"},"Authorization Extension"))))),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: \u0432\u0441\u0435 \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/rbac/role_manager.go"},"RoleManager"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/session-role-manager"},"Session Role Manager")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.")),(0,l.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0439\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430")))),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: \u0432\u0441\u0435 \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/RoleManager.java"},"RoleManager"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/jcasbin/blob/master/src/main/java/org/casbin/jcasbin/rbac/DefaultRoleManager.java"},"\u0420\u043e\u043b\u0438 \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.")),(0,l.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0439\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/session-role-manager"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0443\u044e\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d, \u0441 \u0445\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438")))),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: \u0432\u0441\u0435 \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/roleManager.ts"},"RoleManager"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin/blob/master/src/rbac/defaultRoleManager.ts"},"\u0420\u043e\u043b\u0438 \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.")),(0,l.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0439\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430")))),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: \u0432\u0441\u0435 \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/RoleManager.php"},"RoleManager"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/php-casbin/php-casbin/blob/master/src/Rbac/DefaultRoleManager/RoleManager.php"},"\u0420\u043e\u043b\u0438 \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.")),(0,l.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u043e\u043b\u0435\u0439, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0439\u0441\u044f \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430")))),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432: \u0432\u0441\u0435 \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/role_manager.py"},"RoleManager"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/pycasbin/blob/master/casbin/rbac/default_role_manager/role_manager.py"},"\u0420\u043e\u043b\u0438 \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs/rolemanager-api"},"API"),"."))}h.isMDXComponent=!0}}]);