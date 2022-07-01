"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3991],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7281:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),i=["components"],l={id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5"},c=void 0,s={unversionedId:"model-storage",id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5",description:"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/ko/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",frontMatter:{id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5"},sidebar:"docs",previous:{title:"Super Admin",permalink:"/ko/docs/superadmin"},next:{title:"Policy Storage",permalink:"/ko/docs/policy-storage"}},d={},m=[{value:"Load model from .CONF file",id:"load-model-from-conf-file",level:2},{value:"\ucf54\ub4dc\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30",id:"\ucf54\ub4dc\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30",level:2},{value:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30",id:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30",level:2}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don't implement an API to save the model into a storage."),(0,a.kt)("p",null,"\ub300\uc2e0, \ubaa8\ub378\uc744 \uc815\uc801 \ud639\uc740 \ub3d9\uc801\uc73c\ub85c \ubd88\ub7ec\uc624\ub294 3\uac00\uc9c0 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"load-model-from-conf-file"},"Load model from .CONF file"),(0,a.kt)("p",null,"This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," \ud30c\uc77c \ub0b4\uc6a9 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ubaa8\ub378\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,a.kt)("h2",{id:"\ucf54\ub4dc\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30"},"\ucf54\ub4dc\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"The model can be initialized dynamically from code instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," file. Here's an example for the RBAC model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Initialize the model from Go code.\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// .CSV \ud30c\uc77c \uc5b4\ub311\ud130\ub85c \uc815\ucc45 \uaddc\uce59\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4.\n// \ud30c\uc77c \ub300\uc2e0 \ub2e4\ub978 \uc5b4\ub311\ud130\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubcc0\uacbd\ud558\uc138\uc694.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')),(0,a.kt)("h2",{id:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30"},"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"Or you can just load the entire model text from a multi-line string. The good point for this way is that you do not need to maintain a model file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// Load the policy rules from the .CSV file adapter.\n// \ud30c\uc77c \ub300\uc2e0 \ub2e4\ub978 \uc5b4\ub311\ud130\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubcc0\uacbd\ud558\uc138\uc694.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')))}u.isMDXComponent=!0}}]);