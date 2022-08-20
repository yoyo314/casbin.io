"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5543],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),b=c(a),d=n,u=b["".concat(s,".").concat(d)]||b[d]||m[d]||i;return a?r.createElement(u,l(l({ref:e},p),{},{components:a})):r.createElement(u,l({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9849:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),l=["components"],o={id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b",description:"\u652f\u6301\u7684 Cassbin \u6a21\u578b",keywords:["\u652f\u6301\u7684\u6a21\u578b"]},s=void 0,c={unversionedId:"supported-models",id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b",description:"\u652f\u6301\u7684 Cassbin \u6a21\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/SupportedModels.mdx",sourceDirName:".",slug:"/supported-models",permalink:"/zh/docs/supported-models",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"supported-models",title:"\u652f\u6301\u7684\u6a21\u578b",description:"\u652f\u6301\u7684 Cassbin \u6a21\u578b",keywords:["\u652f\u6301\u7684\u6a21\u578b"]},sidebar:"docs",previous:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/zh/docs/tutorials"},next:{title:"Model \u7684\u8bed\u6cd5",permalink:"/zh/docs/syntax-for-models"}},p={},m=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],b={toc:m};function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Access_control_list"},(0,i.kt)("strong",{parentName:"a"},"ACL (Access Control List, \u8bbf\u95ee\u63a7\u5236\u5217\u8868)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u5177\u6709 ",(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Superuser"},"\u8d85\u7ea7\u7528\u6237")," \u7684 ACL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u7528\u6237\u7684 ACL"),": \u5bf9\u4e8e\u6ca1\u6709\u8eab\u4efd\u9a8c\u8bc1\u6216\u7528\u6237\u767b\u5f55\u7684\u7cfb\u7edf\u5c24\u5176\u6709\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u8d44\u6e90\u7684 ACL"),": \u67d0\u4e9b\u573a\u666f\u53ef\u80fd\u53ea\u9488\u5bf9\u8d44\u6e90\u7684\u7c7b\u578b, \u800c\u4e0d\u662f\u5355\u4e2a\u8d44\u6e90, \u8bf8\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"write-article"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"read-log"),"\u7b49\u6743\u9650\u3002 \u5b83\u4e0d\u63a7\u5236\u5bf9\u7279\u5b9a\u6587\u7ae0\u6216\u65e5\u5fd7\u7684\u8bbf\u95ee\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"RBAC (\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u652f\u6301\u8d44\u6e90\u89d2\u8272\u7684RBAC"),": \u7528\u6237\u548c\u8d44\u6e90\u53ef\u4ee5\u540c\u65f6\u5177\u6709\u89d2\u8272 (\u6216\u7ec4)\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u652f\u6301\u57df/\u79df\u6237\u7684RBAC"),": \u7528\u6237\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u57df/\u79df\u6237\u8bbe\u7f6e\u4e0d\u540c\u7684\u89d2\u8272\u96c6\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Attribute-Based_Access_Control"},"ABAC (\u57fa\u4e8e\u5c5e\u6027\u7684\u8bbf\u95ee\u63a7\u5236)")),": \u652f\u6301\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"resource.Owner"),"\u8fd9\u79cd\u8bed\u6cd5\u7cd6\u83b7\u53d6\u5143\u7d20\u7684\u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful")),": \u652f\u6301\u8def\u5f84, \u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"/res/*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/res/: id")," \u548c HTTP \u65b9\u6cd5, \u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u62d2\u7edd\u4f18\u5148"),": \u652f\u6301\u5141\u8bb8\u548c\u62d2\u7edd\u6388\u6743, \u62d2\u7edd\u4f18\u5148\u4e8e\u5141\u8bb8\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u4f18\u5148\u7ea7"),": \u7b56\u7565\u89c4\u5219\u6309\u7167\u5148\u540e\u6b21\u5e8f\u786e\u5b9a\u4f18\u5148\u7ea7\uff0c\u7c7b\u4f3c\u4e8e\u9632\u706b\u5899\u89c4\u5219\u3002")),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95ee\u63a7\u5236\u6a21\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"Model \u6587\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"Policy \u6587\u4ef6"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_model.conf"},"basic_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv"},"basic_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d85\u7ea7\u7528\u6237\u7684ACL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_with_root_model.conf"},"basic_with_root_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_policy.csv"},"basic_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u7528\u6237\u7684ACL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_users_model.conf"},"basic_without_users_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_users_policy.csv"},"basic_without_users_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6ca1\u6709\u8d44\u6e90\u7684ACL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_model.conf"},"basic_without_resources_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/basic_without_resources_policy.csv"},"basic_without_resources_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"rbac_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5177\u6709\u8d44\u6e90\u89d2\u8272\u7684RBAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac_with_resource_roles_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_policy.csv"},"rbac_with_resource_roles_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5e26\u6709\u57df/\u79df\u6237\u7684RBAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_policy.csv"},"rbac_with_domains_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/abac_model.conf"},"abac_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u62d2\u7edd\u6539\u5199"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_not_deny_model.conf"},"rbac_with_not_deny_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv"},"rbac_with_deny_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u540c\u610f\u4e0e\u62d2\u7edd"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_model.conf"},"rbac_with_deny_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_deny_policy.csv"},"rbac_with_deny_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_model.conf"},"priority_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_policy.csv"},"priority_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u660e\u786e\u4f18\u5148\u7ea7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_model_explicit.conf"},"priority_model_explicit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/priority_policy_explicit.csv"},"priority_policy_explicit.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u4e3b\u4f53\u4f18\u5148\u7ea7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/subject_priority_model.conf"},"subject_priority_model.conf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/subject_priority_policy.csv"},"subject_priority_policyl.csv"))))))}d.isMDXComponent=!0}}]);