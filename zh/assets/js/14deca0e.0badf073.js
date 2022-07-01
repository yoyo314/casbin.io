"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5543],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),b=c(a),d=n,u=b["".concat(s,".").concat(d)]||b[d]||m[d]||i;return a?r.createElement(u,o(o({ref:e},p),{},{components:a})):r.createElement(u,o({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9849:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=["components"],l={id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b"},s=void 0,c={unversionedId:"supported-models",id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b",description:"1. ACL (Access Control List)",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/SupportedModels.mdx",sourceDirName:".",slug:"/supported-models",permalink:"/zh/docs/supported-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SupportedModels.mdx",tags:[],version:"current",frontMatter:{id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/zh/docs/tutorials"},next:{title:"Model \u7684\u8bed\u6cd5",permalink:"/zh/docs/syntax-for-models"}},p={},m=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],b={toc:m};function d(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Access_control_list"},(0,i.kt)("strong",{parentName:"a"},"ACL (Access Control List)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u5177\u6709 ",(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Superuser"},"\u8d85\u7ea7\u7528\u6237")," \u7684 ACL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ACL without users"),": especially useful for systems that don't have authentication or user log-ins."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ACL without resources"),": some scenarios may target for a type of resources instead of an individual resource by using permissions like ",(0,i.kt)("inlineCode",{parentName:"li"},"write-article"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"read-log"),". \u5b83\u4e0d\u63a7\u5236\u5bf9\u7279\u5b9a\u6587\u7ae0\u6216\u65e5\u5fd7\u7684\u8bbf\u95ee\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"RBAC (\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"RBAC with resource roles"),": both users and resources can have roles (or groups) at the same time."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"RBAC with domains/tenants"),": users can have different role sets for different domains/tenants."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Attribute-Based_Access_Control"},"ABAC (Attribute-Based Access Control)")),": syntax sugar like ",(0,i.kt)("inlineCode",{parentName:"li"},"resource.Owner")," can be used to get the attribute for a resource."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful")),": supports paths like ",(0,i.kt)("inlineCode",{parentName:"li"},"/res/*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/res/:id")," and HTTP methods like ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Deny-override"),": both allow and deny authorizations are supported, deny overrides the allow."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Priority"),": the policy rules can be prioritized like firewall rules.")),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Model"),(0,i.kt)("th",{parentName:"tr",align:null},"Model \u6587\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"Policy \u6587\u4ef6"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_model.conf"},"basic_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv"},"basic_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACL with superuser"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_with_root_model.conf"},"basic_with_root_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv"},"basic_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACL without users"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_users_model.conf"},"basic_without_users_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_users_policy.csv"},"basic_without_users_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACL without resources"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_model.conf"},"basic_without_resources_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_policy.csv"},"basic_without_resources_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"rbac_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac_with_resource_roles_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_policy.csv"},"rbac_with_resource_roles_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_policy.csv"},"rbac_with_domains_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/abac_model.conf"},"abac_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_not_deny_model.conf"},"rbac_with_not_deny_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv"},"rbac_with_deny_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Allow-and-deny"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_model.conf"},"rbac_with_deny_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv"},"rbac_with_deny_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Priority"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_model.conf"},"priority_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_policy.csv"},"priority_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Explicit Priority"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_model_explicit.conf"},"priority_model_explicit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_policy_explicit.csv"},"priority_policy_explicit.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subject-Priority"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/subject_priority_model.conf"},"subject_priority_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/subject_priority_policy.csv"},"subject_priority_policyl.csv"))))))}d.isMDXComponent=!0}}]);