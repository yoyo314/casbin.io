"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1593],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2535:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=["components"],s={id:"rbac-with-domains",title:"RBAC with Domains",description:"RBAC with domains usage",keywords:["RBAC with domains"]},l=void 0,d={unversionedId:"rbac-with-domains",id:"rbac-with-domains",title:"RBAC with Domains",description:"RBAC with domains usage",source:"@site/docs/RBACWithDomains.mdx",sourceDirName:".",slug:"/rbac-with-domains",permalink:"/ru/docs/rbac-with-domains",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"rbac-with-domains",title:"RBAC with Domains",description:"RBAC with domains usage",keywords:["RBAC with domains"]},sidebar:"docs",previous:{title:"RBAC with Pattern",permalink:"/ru/docs/rbac-with-pattern"},next:{title:"Casbin RBAC vs. RBAC96",permalink:"/ru/docs/rbac-96"}},c={},p=[{value:"Role definition with domains tenants",id:"role-definition-with-domains-tenants",level:2}],m={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"role-definition-with-domains-tenants"},"Role definition with domains tenants"),(0,r.kt)("p",null,"The RBAC roles in Casbin can be global or domain-specific. Domain-specify roles mean that the roles for a user can be different when the user is at different domains/tenants. This is very useful for large systems like a cloud, as the users are usually in different tenants."),(0,r.kt)("p",null,"The role definition with domains/tenants should be something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _, _\n")),(0,r.kt)("p",null,"The 3rd ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," means the name of domain/tenant, this part should not be changed. Then the policy can be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, admin, tenant1, data1, read\np, admin, tenant2, data2, read\n\ng, alice, admin, tenant1\ng, alice, user, tenant2\n")),(0,r.kt)("p",null,"It means ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," role in ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant1")," can read ",(0,r.kt)("inlineCode",{parentName:"p"},"data1"),". And ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," role in ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant1"),", and has ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," role in ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant2"),". So she can read ",(0,r.kt)("inlineCode",{parentName:"p"},"data1"),". However, since ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," is not an ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant2"),", she cannot read ",(0,r.kt)("inlineCode",{parentName:"p"},"data2"),"."),(0,r.kt)("p",null,"Then in a matcher, you should check the role as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf")," for examples."),(0,r.kt)("admonition",{title:"Token name convention",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: Conventionally domain token name in policy definition is ",(0,r.kt)("inlineCode",{parentName:"p"},"dom")," and placed as the second token(",(0,r.kt)("inlineCode",{parentName:"p"},"sub, dom, obj, act"),").\nNow Golang Casbin supports customized token name & place. If the domain token name is ",(0,r.kt)("inlineCode",{parentName:"p"},"dom"),", the domain token can be placed at an arbitrary place and no extra action needs.  If the domain token name is not ",(0,r.kt)("inlineCode",{parentName:"p"},"dom")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"constant.DomainIndex")," should be called after the enforcer is initialized regardless of its position."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# `domain` here for `dom`\n[policy_definition]\np = sub, obj, act, domain\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.DomainIndex, 3) // index start from 0\nusers := e.GetAllUsersByDomain("domain1") // without SetFieldIndex, it will raise an error\n'))))}u.isMDXComponent=!0}}]);