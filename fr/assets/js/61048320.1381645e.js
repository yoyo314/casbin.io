"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3064],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={id:"superadmin",title:"Super Admin"},c=void 0,u={unversionedId:"superadmin",id:"superadmin",title:"Super Admin",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/fr/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin"},sidebar:"docs",previous:{title:"Priority Model",permalink:"/fr/docs/priority-model"},next:{title:"Model Storage",permalink:"/fr/docs/model-storage"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,o.kt)("p",null,"It illustrates that as for the defined ",(0,o.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_effect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"matchers"),", Casbin judges if the request can match the policy, or most importantly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," is root. Once the judgment is correct, the authorization then is allowed, and the user has permission to do everything.",(0,o.kt)("br",{parentName:"p"}),"\n","Just like the root of Linux systems, after the users are authorized as root, then we have the permissions to access all the files and settings. So if we want ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," to have the full access to the whole system, we can let it become the super admin, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," has the permission to do everything."))}m.isMDXComponent=!0}}]);