"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6446],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"performance",title:"Performance Optimization"},l=void 0,c={unversionedId:"performance",id:"performance",title:"Performance Optimization",description:"When applied in a production environment with millions of users or permissions, you may encounter performance downgrade in Casbin enforcement, there are usually two causes:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Performance.mdx",sourceDirName:".",slug:"/performance",permalink:"/ko/docs/performance",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Performance.mdx",tags:[],version:"current",frontMatter:{id:"performance",title:"Performance Optimization"},sidebar:"docs",previous:{title:"Benchmarks",permalink:"/ko/docs/benchmark"},next:{title:"Authorization of Kubernetes",permalink:"/ko/docs/k8s"}},u={},m=[{value:"High Volume Traffic",id:"high-volume-traffic",level:4},{value:"High Number of Policy Rules",id:"high-number-of-policy-rules",level:4}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When applied in a production environment with millions of users or permissions, you may encounter performance downgrade in Casbin enforcement, there are usually two causes:"),(0,o.kt)("h4",{id:"high-volume-traffic"},"High Volume Traffic"),(0,o.kt)("p",null,"The number of coming requests per second is too large, e.g., 10,000 request/s for a single Casbin instance. In such case, a single Casbin instance is usually not enough to handle all the requests. There are 2 possible solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use multi-threading to enable multiple Casbin instances, so you can fully utilize all the cores in the machine. See details at: ",(0,o.kt)("a",{parentName:"p",href:"/docs/multi-threading"},"Multi-threading"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy Casbin instances to a cluster (multiple machines). Use Watcher to guarantee all Casbin instances are consistent. See details at: ",(0,o.kt)("a",{parentName:"p",href:"/docs/watchers"},"Watchers"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use the above methods both at the same time, e.g., deploy Casbin to a 10-machine cluster. Each machine has 5 threads simultaneously to serve Casbin enforcement requests."))),(0,o.kt)("h4",{id:"high-number-of-policy-rules"},"High Number of Policy Rules"),(0,o.kt)("p",null,"Millions of policy rules may be required in a cloud or multi-tenant environment. Each enforcement call or even loading the policy rules at the initial time is very slow. Such cases can usually be mitigated in several ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your Casbin model or policy is not well-designed. A well-written model and policy will abstract out the duplicated logic for each user/tenant and reduce the number of rules to a very small level (< 100): e.g., you can share some default rules across all tenants and let users customize their rules later. Customized rules can override the default rules. If you still have question, please send GitHub issue to the Casbin repos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Do sharding to let a Casbin enforcer only load a small set of policy rules, e.g., enforcer_0 only serves for tenant_0 to tenant_99, enforcer_1 only serves for tenant_100 to tenant_199. To load only a subset of all policy rules, see details at: ",(0,o.kt)("a",{parentName:"p",href:"/docs/policy-subset-loading"},"Policy Subset Loading"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grant permissions to RBAC roles instead of users directly. Casbin's RBAC is implemented by a role inheritance tree (as a cache). So given a user like Alice, Casbin only uses O(1) time to query the RBAC tree for role-user relationship and do enforcement. If your g rules don't change often, then the RBAC tree won't need to update. See details at this dicussion: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/681#issuecomment-763801583"},"https://github.com/casbin/casbin/issues/681#issuecomment-763801583")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can try the above methods all at the same time."))))}d.isMDXComponent=!0}}]);