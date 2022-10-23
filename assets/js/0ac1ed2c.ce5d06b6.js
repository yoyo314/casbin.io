"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4168],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(o),f=r,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return o?n.createElement(u,l(l({ref:t},s),{},{components:o})):n.createElement(u,l({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4106:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={id:"model-storage",title:"Model Storage",description:"Model storage",keywords:["model storage"]},l=void 0,i={unversionedId:"model-storage",id:"model-storage",title:"Model Storage",description:"Model storage",source:"@site/docs/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1666543990,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{id:"model-storage",title:"Model Storage",description:"Model storage",keywords:["model storage"]},sidebar:"docs",previous:{title:"Storage",permalink:"/docs/category/storage"},next:{title:"Policy Storage",permalink:"/docs/policy-storage"}},c={},d=[{value:"Load model from .CONF file",id:"load-model-from-conf-file",level:2},{value:"Load model from code",id:"load-model-from-code",level:2},{value:"Load model from string",id:"load-model-from-string",level:2}],s={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage."),(0,r.kt)("p",null,"However, the good news is, we provide three equivalent ways to load a model either statically or dynamically:"),(0,r.kt)("h2",{id:"load-model-from-conf-file"},"Load model from .CONF file"),(0,r.kt)("p",null,"This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help."),(0,r.kt)("p",null,"The content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".CONF")," file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"Then you can load the model file as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,r.kt)("h2",{id:"load-model-from-code"},"Load model from code"),(0,r.kt)("p",null,"The model can be initialized dynamically from code instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},".CONF")," file. Here's an example for the RBAC model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Initialize the model from Go code.\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')),(0,r.kt)("h2",{id:"load-model-from-string"},"Load model from string"),(0,r.kt)("p",null,"Or you can just load the entire model text from a multi-line string. The good point for this way is that you do not need to maintain a model file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// Load the policy rules from the .CSV file adapter.\n// Replace it with your adapter to avoid files.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')))}m.isMDXComponent=!0}}]);