"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4355],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=n,h=u["".concat(p,".").concat(y)]||u[y]||s[y]||o;return r?i.createElement(h,a(a({ref:t},d),{},{components:r})):i.createElement(h,a({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4358:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var i=r(3117),n=r(102),o=(r(7294),r(3905)),a=["components"],l={id:"priority-model",title:"Priority Model"},p=void 0,c={unversionedId:"priority-model",id:"priority-model",title:"Priority Model",description:"Casbin support load policies with priority.",source:"@site/docs/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/docs/priority-model",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PriorityModel.mdx",tags:[],version:"current",frontMatter:{id:"priority-model",title:"Priority Model"},sidebar:"docs",previous:{title:"ABAC",permalink:"/docs/abac"},next:{title:"Super Admin",permalink:"/docs/superadmin"}},d={},s=[{value:"Load Policy with Priority Implicitly",id:"load-policy-with-priority-implicitly",level:2},{value:"Load Policy with Priority Explicitly",id:"load-policy-with-priority-explicitly",level:2},{value:"Load Policy with Priority Based on Role and User Hierarchy",id:"load-policy-with-priority-based-on-role-and-user-hierarchy",level:2}],u={toc:s};function y(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casbin support load policies with priority. "),(0,o.kt)("h2",{id:"load-policy-with-priority-implicitly"},"Load Policy with Priority Implicitly"),(0,o.kt)("p",null,"It's quite simple, the order determines the priority, policy appeared earlier has higher priority."),(0,o.kt)("p",null,"model.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priority(p.eft) || deny\n")),(0,o.kt)("h2",{id:"load-policy-with-priority-explicitly"},"Load Policy with Priority Explicitly"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also see: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,o.kt)("p",null,'The priority token name in policy definition must be "priority", and the smaller priority value will has higher priority. If there\'s non-numerical character in priority, it will be in the last, rather than throw an error.\nNow, explicit priority only support ',(0,o.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"AddPolicies"),", if ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdatePolicy")," been called, you shouldn't change the priority attribute."),(0,o.kt)("p",null,"model.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = priority, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,o.kt)("p",null,"policy.csv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,o.kt)("p",null,"request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alice, data1, write --\x3e true // for `p, 1, alice, data1, write, allow` has highest priority\nbob, data2, read --\x3e false\nbob, data2, write --\x3e true // for bob has role of `data2_allow_group` which has right to write data2, and there's no deny policy with higher priority \n")),(0,o.kt)("h2",{id:"load-policy-with-priority-based-on-role-and-user-hierarchy"},"Load Policy with Priority Based on Role and User Hierarchy"),(0,o.kt)("p",null,"The inherited structure of roles and users can only be multiple trees, not graphs. If one user has multiple roles,you have to make sure the user has the same level in different trees. If two roles have the same level,the policy(the role corresponding) appeared earlier has higher priority. more details also see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831")),(0,o.kt)("p",null,"model.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,o.kt)("p",null,"policy.csv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,o.kt)("p",null,"Request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jane, data1, read --\x3e true // jane is at the bottom,so priority is higher than editor, admin and root\nalice, data1, read --\x3e true\n")),(0,o.kt)("p",null," The role hierarchy like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"role: root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u2502  \u2514\u2500 user: jane\n    \u2502\n    \u2514\u2500 role: subscriber\n       \u2514\u2500 user: john\n")),(0,o.kt)("p",null,"The priority automatically like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"role: root                 # auto priority: 30\n \u2514\u2500 role: admin            # auto priority: 20\n     \u251c\u2500 role: editor       # auto priority: 10\n     \u2514\u2500 role: subscriber   # auto priority: 10\n")))}y.isMDXComponent=!0}}]);