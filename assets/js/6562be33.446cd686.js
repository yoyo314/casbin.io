"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"performance",title:"Performance Optimization",description:"Casbin performance optimization",keywords:["optimization"]},i=void 0,s={unversionedId:"performance",id:"performance",title:"Performance Optimization",description:"Casbin performance optimization",source:"@site/docs/Performance.mdx",sourceDirName:".",slug:"/performance",permalink:"/docs/performance",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Performance.mdx",tags:[],version:"current",lastUpdatedBy:"Aarav Arora",lastUpdatedAt:1664369368,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"performance",title:"Performance Optimization",description:"Casbin performance optimization",keywords:["optimization"]},sidebar:"docs",previous:{title:"Benchmarks",permalink:"/docs/benchmark"},next:{title:"Authorization of Kubernetes",permalink:"/docs/k8s"}},l={},c=[{value:"High Volume Traffic",id:"high-volume-traffic",level:4},{value:"High Number of Policy Rules",id:"high-number-of-policy-rules",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When applied in a production environment with millions of users or permissions, you may encounter performance downgrade in Casbin enforcement, there are usually two causes:"),(0,a.kt)("h4",{id:"high-volume-traffic"},"High Volume Traffic"),(0,a.kt)("p",null,"The number of coming requests per second is too large, e.g., 10,000 request/s for a single Casbin instance. In such case, a single Casbin instance is usually not enough to handle all the requests. There are 2 possible solutions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use multi-threading to enable multiple Casbin instances, so you can fully utilize all the cores in the machine. See details at: ",(0,a.kt)("a",{parentName:"p",href:"/docs/multi-threading"},"Multi-threading"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy Casbin instances to a cluster (multiple machines). Use Watcher to guarantee all Casbin instances are consistent. See details at: ",(0,a.kt)("a",{parentName:"p",href:"/docs/watchers"},"Watchers"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use the above methods both at the same time, e.g., deploy Casbin to a 10-machine cluster. Each machine has 5 threads simultaneously to serve Casbin enforcement requests.")),(0,a.kt)("h4",{id:"high-number-of-policy-rules"},"High Number of Policy Rules"),(0,a.kt)("p",null,"Millions of policy rules may be required in a cloud or multi-tenant environment. Each enforcement call or even loading the policy rules at the initial time is very slow. Such cases can usually be mitigated in several ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your Casbin model or policy is not well-designed. A well-written model and policy will abstract out the duplicated logic for each user/tenant and reduce the number of rules to a very small level (< 100): e.g., you can share some default rules across all tenants and let users customize their rules later. Customized rules can override the default rules. If you still have question, please send GitHub issue to the Casbin repos.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do sharding to let a Casbin enforcer only load a small set of policy rules, e.g., enforcer_0 only serves for tenant_0 to tenant_99, enforcer_1 only serves for tenant_100 to tenant_199. To load only a subset of all policy rules, see details at: ",(0,a.kt)("a",{parentName:"p",href:"/docs/policy-subset-loading"},"Policy Subset Loading"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Grant permissions to RBAC roles instead of users directly. Casbin's RBAC is implemented by a role inheritance tree (as a cache). So given a user like Alice, Casbin only uses O(1) time to query the RBAC tree for role-user relationship and do enforcement. If your g rules don't change often, then the RBAC tree won't need to update. See details at this dicussion: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/681#issuecomment-763801583"},"https://github.com/casbin/casbin/issues/681#issuecomment-763801583")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can try the above methods all at the same time.")))}p.isMDXComponent=!0}}]);