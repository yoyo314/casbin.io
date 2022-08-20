"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3681],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(b,c(c({ref:n},s),{},{components:t})):r.createElement(b,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3285:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],l={id:"model-storage",title:"Model \u7684\u5b58\u50a8",description:"Model \u7684\u5b58\u50a8",keywords:["model \u7684\u5b58\u50a8"]},i=void 0,p={unversionedId:"model-storage",id:"model-storage",title:"Model \u7684\u5b58\u50a8",description:"Model \u7684\u5b58\u50a8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/zh/docs/model-storage",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ModelStorage.mdx",tags:[],version:"current",frontMatter:{id:"model-storage",title:"Model \u7684\u5b58\u50a8",description:"Model \u7684\u5b58\u50a8",keywords:["model \u7684\u5b58\u50a8"]},sidebar:"docs",previous:{title:"\u8d85\u7ea7\u7ba1\u7406\u5458",permalink:"/zh/docs/superadmin"},next:{title:"Policy\u7684\u5b58\u50a8",permalink:"/zh/docs/policy-storage"}},s={},d=[{value:"\u4ece .CONF \u6587\u4ef6\u4e2d\u52a0\u8f7d model",id:"\u4ece-conf-\u6587\u4ef6\u4e2d\u52a0\u8f7d-model",level:2},{value:"\u4ece\u4ee3\u7801\u52a0\u8f7d model",id:"\u4ece\u4ee3\u7801\u52a0\u8f7d-model",level:2},{value:"\u4ece\u5b57\u7b26\u4e32\u52a0\u8f7d\u7684 model",id:"\u4ece\u5b57\u7b26\u4e32\u52a0\u8f7d\u7684-model",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0e policy \u4e0d\u540c\uff0cmodel \u53ea\u80fd\u52a0\u8f7d\uff0c\u4e0d\u80fd\u4fdd\u5b58\u3002 \u56e0\u4e3a\u6211\u4eec\u8ba4\u4e3a model \u4e0d\u662f\u52a8\u6001\u7ec4\u4ef6\uff0c\u4e0d\u5e94\u8be5\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u4fee\u6539\uff0c\u6240\u4ee5\u6211\u4eec\u6ca1\u6709\u5b9e\u73b0\u4e00\u4e2a API \u6765\u5c06 model \u4fdd\u5b58\u5230\u5b58\u50a8\u4e2d\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u597d\u6d88\u606f\u662f\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e09\u79cd\u7b49\u6548\u7684\u65b9\u6cd5\u6765\u9759\u6001\u6216\u52a8\u6001\u5730\u52a0\u8f7d\u6a21\u578b\uff1a"),(0,a.kt)("h2",{id:"\u4ece-conf-\u6587\u4ef6\u4e2d\u52a0\u8f7d-model"},"\u4ece .CONF \u6587\u4ef6\u4e2d\u52a0\u8f7d model"),(0,a.kt)("p",null,"\u8fd9\u662f\u4f7f\u7528Casbin\u7684\u6700\u5e38\u89c1\u65b9\u5f0f\u3002 \u5f53\u60a8\u8bf7\u6c42Casbin\u56e2\u961f\u5e2e\u52a9\u65f6\uff0c\u5bf9\u521d\u5b66\u8005\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u5e76\u4e14\u65b9\u4fbf\u5206\u4eab\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".CONF"),"\u6587\u4ef6\u7684\u5185\u5bb9 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"\u63a5\u7740\u4f60\u53ef\u4ee5\u52a0\u8f7d\u6a21\u578b\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,a.kt)("h2",{id:"\u4ece\u4ee3\u7801\u52a0\u8f7d-model"},"\u4ece\u4ee3\u7801\u52a0\u8f7d model"),(0,a.kt)("p",null,"\u6a21\u578b\u53ef\u4ee5\u4ece\u4ee3\u7801\u4e2d\u52a8\u6001\u521d\u59cb\u5316\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," \u6587\u4ef6\u3002 \u4ee5\u4e0b\u662fRBAC\u6a21\u5f0f\u7684\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// \u4eceGo\u4ee3\u7801\u521d\u59cb\u5316\u6a21\u578b\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p.eft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act")\n\n// \u4eceCSV\u6587\u4ef6adapter\u52a0\u8f7d\u7b56\u7565\u89c4\u5219\n// \u4f7f\u7528\u81ea\u5df1\u7684 adapter \u66ff\u6362\u3002\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// \u521b\u5efaenforcer\ne := casbin.NewEnforcer(m, a)\n')),(0,a.kt)("h2",{id:"\u4ece\u5b57\u7b26\u4e32\u52a0\u8f7d\u7684-model"},"\u4ece\u5b57\u7b26\u4e32\u52a0\u8f7d\u7684 model"),(0,a.kt)("p",null,"\u6216\u8005\u60a8\u53ef\u4ee5\u4ece\u591a\u884c\u5b57\u7b26\u4e32\u4e2d\u52a0\u8f7d\u6574\u4e2a\u6a21\u578b\u6587\u672c\u3002 \u8fd9\u79cd\u65b9\u5f0f\u7684\u597d\u70b9\u662f\u4f60\u4e0d\u9700\u8981\u7ef4\u62a4\u6a21\u578b\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// \u4ece\u5b57\u7b26\u4e32\u521d\u59cb\u5316\u6a21\u578b\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n`\nm, _ := model.NewModelFromString(text)\n\n// \u4eceCSV\u6587\u4ef6adapter\u52a0\u8f7d\u7b56\u7565\u89c4\u5219\n// \u4f7f\u7528\u81ea\u5df1\u7684 adapter \u66ff\u6362\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// \u521b\u5efaenforcer\ne := casbin.NewEnforcer(m, a)\n')))}m.isMDXComponent=!0}}]);