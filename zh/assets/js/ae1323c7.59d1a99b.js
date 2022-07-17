"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3341],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9510:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"]},p=void 0,c={unversionedId:"rbac",id:"rbac",title:"RBAC",description:"Casbin RBAC usage",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/RBAC.mdx",sourceDirName:".",slug:"/rbac",permalink:"/zh/docs/rbac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBAC.mdx",tags:[],version:"current",frontMatter:{id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"]},sidebar:"docs",previous:{title:"\u51fd\u6570",permalink:"/zh/docs/function"},next:{title:"RBAC with Pattern",permalink:"/zh/docs/rbac-with-pattern"}},s={},m=[{value:"Role\u5b9a\u4e49",id:"role\u5b9a\u4e49",level:2},{value:"\u89d2\u8272\u5c42\u6b21",id:"\u89d2\u8272\u5c42\u6b21",level:2},{value:"\u5982\u4f55\u533a\u5206\u7528\u6237\u548c\u89d2\u8272\uff1f",id:"\u5982\u4f55\u533a\u5206\u7528\u6237\u548c\u89d2\u8272",level:2},{value:"\u5982\u4f55\u67e5\u8be2\u9690\u6027\u89d2\u8272\u6216\u6743\u9650\uff1f",id:"\u5982\u4f55\u67e5\u8be2\u9690\u6027\u89d2\u8272\u6216\u6743\u9650",level:2},{value:"\u5728 RBAC \u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d",id:"\u5728-rbac-\u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d",level:2},{value:"\u89d2\u8272\u7ba1\u7406\u5668",id:"\u89d2\u8272\u7ba1\u7406\u5668",level:2}],d={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"role\u5b9a\u4e49"},"Role\u5b9a\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[role_definition]"),"\u539f\u8bed\u5b9a\u4e49\u4e86RBAC\u4e2d\u7684\u89d2\u8272\u7ee7\u627f\u5173\u7cfb\u3002 Casbin\u652f\u6301RBAC\u7cfb\u7edf\u7684\u591a\u4e2a\u5b9e\u4f8b\uff0c\u4f8b\u5982\uff0c\u7528\u6237\u53ef\u4ee5\u6709\u89d2\u8272\u548c\u7ee7\u627f\u5173\u7cfb\uff0c\u800c\u8d44\u6e90\u4e5f\u53ef\u4ee5\u6709\u89d2\u8272\u548c\u7ee7\u627f\u5173\u7cfb\u3002 \u8fd9\u4e24\u4e2aRBAC\u7cfb\u7edf\u4e0d\u4f1a\u5e72\u6270\u3002"),(0,i.kt)("p",null,"\u6b64\u90e8\u5206\u662f\u53ef\u9009\u7684\u3002 \u5982\u679c\u5728\u6a21\u578b\u4e2d\u4e0d\u4f7f\u7528 RBAC \u89d2\u8272, \u5219\u7701\u7565\u6b64\u90e8\u5206\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _\ng2 = _, _\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u89d2\u8272\u5b9a\u4e49\u8868\u660e, ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," \u662f\u4e00\u4e2a RBAC\u7cfb\u7edf, ",(0,i.kt)("inlineCode",{parentName:"p"},"g2")," \u662f\u53e6\u4e00\u4e2a RBAC \u7cfb\u7edf\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"_, _"),"\u8868\u793a\u89d2\u8272\u7ee7\u627f\u5173\u7cfb\u7684\u524d\u9879\u548c\u540e\u9879\uff0c\u5373\u524d\u9879\u7ee7\u627f\u540e\u9879\u89d2\u8272\u7684\u6743\u9650\u3002 \u4e00\u822c\u6765\u8bb2\uff0c\u5982\u679c\u60a8\u9700\u8981\u8fdb\u884c\u89d2\u8272\u548c\u7528\u6237\u7684\u7ed1\u5b9a\uff0c\u76f4\u63a5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"g")," \u5373\u53ef\u3002  \u5f53\u60a8\u9700\u8981\u8868\u793a\u89d2\u8272\uff08\u6216\u8005\u7ec4\uff09\u4e0e\u7528\u6237\u548c\u8d44\u6e90\u7684\u7ed1\u5b9a\u5173\u7cfb\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"g")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"g2")," \u8fd9\u6837\u7684\u8868\u73b0\u5f62\u5f0f\u3002 \u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac_model")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac_model_with_resource_roles")," \u7684\u793a\u4f8b\u3002"),(0,i.kt)("p",null,"\u5728Casbin\u91cc\uff0c\u6211\u4eec\u4ee5policy\u8868\u793a\u4e2d\u5b9e\u9645\u7684\u7528\u6237\u89d2\u8272\u6620\u5c04\u5173\u7cfb (\u6216\u662f\u8d44\u6e90-\u89d2\u8272\u6620\u5c04\u5173\u7cfb)\uff0c\u4f8b\u5982:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, data2_admin, data2, read\ng, alice, data2_admin\n")),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u662f\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"p"},"data2_admin"),"\u7684\u4e00\u4e2a\u6210\u5458\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u5728\u8fd9\u91cc\u53ef\u4ee5\u662f\u7528\u6237\u3001\u8d44\u6e90\u6216\u89d2\u8272\u3002 Cabin \u53ea\u662f\u5c06\u5176\u8bc6\u522b\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5728matcher\u4e2d\uff0c\u5e94\u8be5\u50cf\u4e0b\u9762\u7684\u4f8b\u5b50\u4e00\u6837\u68c0\u67e5\u89d2\u8272\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5728\u8bf7\u6c42\u4e2d\u5e94\u8be5\u5728policy\u4e2d\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),"\u89d2\u8272\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Casbin \u53ea\u5b58\u50a8\u7528\u6237\u89d2\u8272\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,i.kt)("li",{parentName:"ol"},"Cabin \u6ca1\u6709\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u662f\u6709\u6548\u7684\u7528\u6237\uff0c\u6216\u8005\u89d2\u8272\u662f\u4e00\u4e2a\u6709\u6548\u7684\u89d2\u8272\u3002 \u8fd9\u5e94\u8be5\u901a\u8fc7\u8ba4\u8bc1\u6765\u89e3\u51b3\u3002"),(0,i.kt)("li",{parentName:"ol"},"RBAC \u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u540d\u79f0\u548c\u89d2\u8272\u540d\u79f0\u4e0d\u5e94\u76f8\u540c\u3002\u56e0\u4e3aCasbin\u5c06\u7528\u6237\u540d\u548c\u89d2\u8272\u8bc6\u522b\u4e3a\u5b57\u7b26\u4e32\uff0c \u6240\u4ee5\u5f53\u524d\u8bed\u5883\u4e0bCasbin\u65e0\u6cd5\u5f97\u51fa\u8fd9\u4e2a\u5b57\u9762\u91cf\u5230\u5e95\u6307\u4ee3\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," \u8fd8\u662f\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"\u3002 \u8fd9\u65f6\uff0c\u4f7f\u7528\u660e\u786e\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"role_alice")," \uff0c\u95ee\u9898\u4fbf\u53ef\u8fce\u5203\u800c\u89e3\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5047\u8bbe",(0,i.kt)("inlineCode",{parentName:"li"},"A"),"\u5177\u6709\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"B")," \u5177\u6709\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),"\uff0c\u5e76\u4e14 ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," \u6709\u89d2\u8272 ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),"\u3002 \u8fd9\u79cd\u4f20\u9012\u6027\u5728\u5f53\u524d\u7248\u672c\u4f1a\u9020\u6210\u6b7b\u5faa\u73af\u3002"))),(0,i.kt)("admonition",{title:"Token name convention",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Conventionally subject token name in policy definition is ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," and placed in the beginning. Now Golang Casbin supports customized token name & place. If the subject token name is ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),", the subject token can be placed at an arbitrary place and no extra action needs.  If the subject token name is not ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"constant.SubjectIndex")," should be called after the enforcer is initialized regardless of its position."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# `subject` here for sub\n[policy_definition]\np =  obj, act, subject\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.SubjectIndex, 2) // index start from 0\nok, err := e.DeleteUser("alice") // without SetFieldIndex, it will raise an error\n'))),(0,i.kt)("h2",{id:"\u89d2\u8272\u5c42\u6b21"},"\u89d2\u8272\u5c42\u6b21"),(0,i.kt)("p",null,"Casbin \u7684 RBAC \u652f\u6301 RBAC1 \u7684\u89d2\u8272\u5c42\u6b21\u7ed3\u6784\u529f\u80fd\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"alice"),"\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"role1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"role1"),"\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"role2"),"\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u4e5f\u5c06\u62e5\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"role2")," \u5e76\u7ee7\u627f\u5176\u6743\u9650\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u79f0\u4e3a\u5c42\u6b21\u7ed3\u6784\u7ea7\u522b\u7684\u6982\u5ff5\u3002 \u56e0\u6b64, \u6b64\u793a\u4f8b\u7684\u5c42\u6b21\u7ed3\u6784\u7ea7\u522b\u4e3a2\u3002 \u5bf9\u4e8eCasbin\u4e2d\u7684\u5185\u7f6e\u89d2\u8272\u7ba1\u7406\u5668, \u53ef\u4ee5\u6307\u5b9a\u6700\u5927\u5c42\u6b21\u7ed3\u6784\u7ea7\u522b\u3002 \u9ed8\u8ba4\u503c\u4e3a10\u3002 \u8fd9\u610f\u5473\u7740\u7ec8\u7aef\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u53ea\u80fd\u7ee7\u627f10\u4e2a\u7ea7\u522b\u7684\u89d2\u8272\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// NewRoleManager is the constructor for creating an instance of the\n// default RoleManager implementation.\nfunc NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {\n    rm := RoleManager{}\n    rm.allRoles = &sync.Map{}\n    rm.maxHierarchyLevel = maxHierarchyLevel\n    rm.hasPattern = false\n\n    return &rm\n}\n")),(0,i.kt)("h2",{id:"\u5982\u4f55\u533a\u5206\u7528\u6237\u548c\u89d2\u8272"},"\u5982\u4f55\u533a\u5206\u7528\u6237\u548c\u89d2\u8272\uff1f"),(0,i.kt)("p",null,"\u5728RBAC\u4e2d\uff0cCasbin\u4e0d\u5bf9\u7528\u6237\u548c\u89d2\u8272\u8fdb\u884c\u533a\u5206\u3002 \u5b83\u4eec\u90fd\u88ab\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002 \u5982\u679c\u4f60\u53ea\u4f7f\u7528\u5355\u5c42\u7684RBAC\u6a21\u578b\uff08\u89d2\u8272\u4e0d\u4f1a\u6210\u4e3a\u53e6\u4e00\u4e2a\u89d2\u8272\u7684\u6210\u5458\uff09\u3002 \u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"e.GetAllSubjects()")," \u83b7\u53d6\u6240\u6709\u7528\u6237\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"e.GetAllRoles()")," \u83b7\u53d6\u6240\u6709\u89d2\u8272\u3002 \u5b83\u4eec\u4f1a\u4e3a\u89c4\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"g, u, r")," \u5206\u522b\u5217\u51fa\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"u")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"\u3002"),(0,i.kt)("p",null,"\u4f46\u5982\u679c\u4f60\u5728\u4f7f\u7528\u591a\u5c42RBAC\uff08\u5e26\u6709\u89d2\u8272\u7ee7\u627f\uff09\uff0c\u5e76\u4e14\u4f60\u7684\u5e94\u7528\u6ca1\u6709\u8bb0\u5f55\u4e0b\u4e00\u4e2a\u540d\u5b57\uff08\u5b57\u7b26\u4e32\uff09\u5bf9\u5e94\u7684\u662f\u7528\u6237\u8fd8\u662f\u89d2\u8272\uff0c\u6216\u8005\u4f60\u5c06\u7528\u6237\u548c\u89d2\u8272\u7528\u76f8\u540c\u7684\u540d\u5b57\u547d\u540d\u3002 \u90a3\u4e48\u4f60\u53ef\u4ee5\u53ef\u4ee5\u7ed9\u89d2\u8272\u52a0\u4e0a\u50cf ",(0,i.kt)("inlineCode",{parentName:"p"},"role::admin")," \u7684\u524d\u7f00\u518d\u4f20\u9012\u5230Casbin\u4e2d\u3002 \u7531\u6b64\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u524d\u7f00\u6765\u533a\u5206\u7528\u6237\u548c\u89d2\u8272\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u67e5\u8be2\u9690\u6027\u89d2\u8272\u6216\u6743\u9650"},"\u5982\u4f55\u67e5\u8be2\u9690\u6027\u89d2\u8272\u6216\u6743\u9650\uff1f"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u901a\u8fc7RBAC\u5c42\u6b21\u7ed3\u6784\u7ee7\u627f\u89d2\u8272\u6216\u6743\u9650\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5728\u7b56\u7565\u89c4\u5219\u4e2d\u5206\u914d\u5b83\u4eec\u65f6\uff0c\u6211\u4eec\u5c06\u8fd9\u79cd\u7c7b\u578b\u7684\u5206\u914d\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"implicit"),"\u3002 \u8981\u67e5\u8be2\u8fd9\u79cd\u9690\u5f0f\u5173\u7cfb\uff0c\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2aapi\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()"),"\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()")," \u66ff\u4ee3",(0,i.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()"),". \u6709\u5173\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"this GitHub issue"),"\u3002"),(0,i.kt)("h2",{id:"\u5728-rbac-\u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d"},"\u5728 RBAC \u4e2d\u4f7f\u7528\u6a21\u5f0f\u5339\u914d"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC with Pattern")),(0,i.kt)("h2",{id:"\u89d2\u8272\u7ba1\u7406\u5668"},"\u89d2\u8272\u7ba1\u7406\u5668"),(0,i.kt)("p",null,"\u8be6\u60c5\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/role-managers"},"\u89d2\u8272\u7ba1\u7406\u5668")," \u90e8\u5206\u3002"))}u.isMDXComponent=!0}}]);