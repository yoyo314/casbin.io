"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},i=void 0,l={unversionedId:"abac",id:"abac",title:"ABAC",description:"ABAC based on Casbin",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/ko/docs/abac",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/ko/docs/rbac-96"},next:{title:"Priority Model",permalink:"/ko/docs/priority-model"}},s={},c=[{value:"ABAC \ubaa8\ub378\uc774\ub780?",id:"abac-\ubaa8\ub378\uc774\ub780",level:2},{value:"ABAC \uc0ac\uc6a9\ubc95",id:"abac-\uc0ac\uc6a9\ubc95",level:2},{value:"Scaling the model for complex and large number of ABAC rules.",id:"scaling-the-model-for-complex-and-large-number-of-abac-rules",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"abac-\ubaa8\ub378\uc774\ub780"},"ABAC \ubaa8\ub378\uc774\ub780?"),(0,a.kt)("p",null,"ABAC\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc18d\uc131-\uae30\ubc18 \uc811\uadfc \uc81c\uc5b4(Attribute-Based Access Control)"),"\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \ubcf4\uc548 \uc8fc\uccb4(Subject), \ub300\uc0c1(Object) \ud639\uc740 \uc561\uc158(Action) \uc758 \uc18d\uc131(Attribute) \uc744 \uc0ac\uc6a9\ud574\uc11c \uc811\uadfc \uc81c\uc5b4\ub97c \uc124\uc815 \ud560 \uc218 \uc788\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4. XACML\uc774\ub77c\ub294 \ubcf5\uc7a1\ud55c ABAC \uc811\uadfc \uc81c\uc5b4 \uc5b8\uc5b4\uc5d0 \ub300\ud574 \uc544\ub9c8 \ub4e4\uc5b4\ubcf8 \uc801\uc774 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. XACML\uacfc \ube44\uad50\ud558\uba74, Casbin\uc758 ABAC\ub294 \ub9e4\uc6b0 \ub2e8\uc21c\ud569\ub2c8\ub2e4. ABAC \ubaa8\ub378\uc5d0\uc11c\ub294 \ubb38\uc790\uc5f4 \ub300\uc2e0, \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4, \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0 \ub530\ub77c \ub2e4\ub984) \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc11c \ubaa8\ub378\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"ABAC \uc791\uc131 \uc608\uc81c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,a.kt)("p",null,"Matcher \uc870\uac74\uc2dd\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj")," \ub300\uc2e0 ",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj.Owner"),"\ub97c \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforce()")," \ud568\uc218\uc5d0 \uc804\ub2ec\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\uc5d0\ub294 \ubb38\uc790\uc5f4 \ub300\uc2e0 \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4) \uc778\uc2a4\ud134\uc2a4\uac00 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Casbin\uc740 \ub9ac\ud50c\ub809\uc158\uc744 \uc0ac\uc6a9\ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4) \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \uba64\ubc84 \ubcc0\uc218\ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),"\uc758 \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4) \uc120\uc5b8\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,a.kt)("h2",{id:"abac-\uc0ac\uc6a9\ubc95"},"ABAC \uc0ac\uc6a9\ubc95"),(0,a.kt)("p",null,"\uac04\ub2e8\ud788, ABAC\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c 2\uac00\uc9c0\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc870\uac74\uc2dd\uc5d0 \uc18d\uc131\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"Casbin\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"Enforce()")," \ud568\uc218\uc5d0 \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4) \uc778\uc2a4\ud134\uc2a4\ub97c \uc778\uc790\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Currently, only request elements like ",(0,a.kt)("inlineCode",{parentName:"p"},"r.sub"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"r.obj"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"r.act")," and so on support ABAC. You cannot use it on policy elements like ",(0,a.kt)("inlineCode",{parentName:"p"},"p.sub")," \uac19\uc774 policy \ub780\uc5d0\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74, Casbin\uc758 \uc815\ucc45(Policy)\uc560\ub290 \uad6c\uc870\uccb4(\ud639\uc740 \ud074\ub798\uc2a4)\ub97c \uc120\uc5b8\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use multiple ABAC attributes in a matcher, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"m = r.sub.Domain == r.obj.Domain"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need to use comma in policy which conflicts with csv's separator and we need to escape it. Casbin parses policy file through ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/csv"},"csv library"),", you could surround statement with quotation marks. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},'"keyMatch("bob", r.sub.Role)"')," will not be split.")),(0,a.kt)("h2",{id:"scaling-the-model-for-complex-and-large-number-of-abac-rules"},"Scaling the model for complex and large number of ABAC rules."),(0,a.kt)("p",null,"The above instance of ABAC implementation is at its core very simple, but oftentimes the authorization system needs a very complex and large number of ABAC rules. To fit this necessity the above implementation will increase the verbosity of the model to a large extent. So, it\u2019s wise to add the rules in the policy instead of in the model. This is done by introducing a ",(0,a.kt)("inlineCode",{parentName:"p"},"eval()")," functional construct. Below is the example instance to manage such ABAC models."),(0,a.kt)("p",null,"This is the definition of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONF")," file used for defining the ABAC model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"p.sub_rule")," is of type struct or class(user-defined type) which consists of necessary attributes to be used in the policy."),(0,a.kt)("p",null,"This is the policy that is used against the model for ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcement"),". Now, you can use the object instance which is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"eval()")," as a parameter to define certain ABAC constraints."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))}u.isMDXComponent=!0}}]);