"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7929],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4520:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={id:"rbac-with-domains",title:"RBAC with Domains"},c=void 0,l={unversionedId:"rbac-with-domains",id:"rbac-with-domains",title:"RBAC with Domains",description:"Role definition with domains tenants",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RBACWithDomains.mdx",sourceDirName:".",slug:"/rbac-with-domains",permalink:"/fr/docs/rbac-with-domains",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomains.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains",title:"RBAC with Domains"},sidebar:"docs",previous:{title:"RBAC avec motif",permalink:"/fr/docs/rbac-with-pattern"},next:{title:"Casbin RBAC vs. RBAC96",permalink:"/fr/docs/rbac-96"}},p={},d=[{value:"Role definition with domains tenants",id:"role-definition-with-domains-tenants",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"role-definition-with-domains-tenants"},"Role definition with domains tenants"),(0,i.kt)("p",null,"The RBAC roles in Casbin can be global or domain-specific. Domain-specify roles mean that the roles for a user can be different when the user is at different domains/tenants. This is very useful for large systems like a cloud, as the users are usually in different tenants."),(0,i.kt)("p",null,"The role definition with domains/tenants should be something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _, _\n")),(0,i.kt)("p",null,"The 3rd ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," means the name of domain/tenant, this part should not be changed. Then the policy can be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, tenant1, data1, read\np, admin, tenant2, data2, read\n\ng, alice, admin, tenant1\ng, alice, user, tenant2\n")),(0,i.kt)("p",null,"It means ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role in ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant1")," can read ",(0,i.kt)("inlineCode",{parentName:"p"},"data1"),". And ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role in ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant1"),", and has ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," role in ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant2"),". So she can read ",(0,i.kt)("inlineCode",{parentName:"p"},"data1"),". However, since ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," is not an ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant2"),", she cannot read ",(0,i.kt)("inlineCode",{parentName:"p"},"data2"),"."),(0,i.kt)("p",null,"Then in a matcher, you should check the role as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf")," for examples."))}u.isMDXComponent=!0}}]);