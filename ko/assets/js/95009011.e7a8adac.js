"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3991],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7281:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5",description:"Model storage",keywords:["model storage"]},l=void 0,s={unversionedId:"model-storage",id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5",description:"Model storage",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/ko/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",frontMatter:{id:"model-storage",title:"\ubaa8\ub378(Model) \uc800\uc7a5",description:"Model storage",keywords:["model storage"]},sidebar:"docs",previous:{title:"Super Admin",permalink:"/ko/docs/superadmin"},next:{title:"\uc815\ucc45(Policy) \uc800\uc7a5",permalink:"/ko/docs/policy-storage"}},p={},u=[{value:".CONF \ud30c\uc77c\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30",id:"conf-\ud30c\uc77c\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30",level:2},{value:"\ucf54\ub4dc\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30",id:"\ucf54\ub4dc\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30",level:2},{value:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30",id:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc815\ucc45(policy) \uacfc\ub294 \ub2ec\ub9ac, \ubaa8\ub378(model) \uc740 \ud55c \ubc88\ub9cc \ubd88\ub7ec\uc624\uace0, \uc800\uc7a5\uc740 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \ubaa8\ub378\uc740 \ub3d9\uc801 \uc694\uc18c\uac00 \uc544\ub2c8\uace0, \uc2e4\ud589 \uc2dc\uac04\uc5d0 \ubcc0\uacbd\ub418\uc11c\ub294 \uc548 \ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ubaa8\ub378\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud55c API\ub294 \uad6c\ud604\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub300\uc2e0, \ubaa8\ub378\uc744 \uc815\uc801 \ud639\uc740 \ub3d9\uc801\uc73c\ub85c \ubd88\ub7ec\uc624\ub294 3\uac00\uc9c0 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"conf-\ud30c\uc77c\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30"},".CONF \ud30c\uc77c\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," \ud30c\uc77c \ub0b4\uc6a9 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ubaa8\ub378\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,a.kt)("h2",{id:"\ucf54\ub4dc\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30"},"\ucf54\ub4dc\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"The model can be initialized dynamically from code instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," file. Here's an example for the RBAC model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Initialize the model from Go code.\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// .CSV \ud30c\uc77c \uc5b4\ub311\ud130\ub85c \uc815\ucc45 \uaddc\uce59\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4.\n// \ud30c\uc77c \ub300\uc2e0 \ub2e4\ub978 \uc5b4\ub311\ud130\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubcc0\uacbd\ud558\uc138\uc694.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')),(0,a.kt)("h2",{id:"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130-\ubd88\ub7ec\uc624\uae30"},"\ubb38\uc790\uc5f4\ub85c\ubd80\ud130 \ubd88\ub7ec\uc624\uae30"),(0,a.kt)("p",null,"Or you can just load the entire model text from a multi-line string. The good point for this way is that you do not need to maintain a model file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// Load the policy rules from the .CSV file adapter.\n// \ud30c\uc77c \ub300\uc2e0 \ub2e4\ub978 \uc5b4\ub311\ud130\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubcc0\uacbd\ud558\uc138\uc694.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Create the enforcer.\ne := casbin.NewEnforcer(m, a)\n')))}m.isMDXComponent=!0}}]);