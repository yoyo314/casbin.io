"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"frontend",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"]},s=void 0,o={unversionedId:"frontend",id:"frontend",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/ru/docs/frontend",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"frontend",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"]},sidebar:"docs",previous:{title:"\u0416\u0443\u0440\u043d\u0430\u043b & \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",permalink:"/ru/docs/log-error"},next:{title:"\u041e\u043d\u043b\u0430\u0439\u043d-\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440",permalink:"/ru/docs/online-editor"}},l={},c=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",level:2},{value:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442",id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439-\u0441\u0442\u0430\u0440\u0442",level:2},{value:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u0421\u043f\u0438\u0441\u043e\u043a API",id:"\u0441\u043f\u0438\u0441\u043e\u043a-api",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 Casbin.js",id:"\u043f\u043e\u0447\u0435\u043c\u0443-casbinjs",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0434\u0434\u043e\u043d\u043e\u043c Casbin, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,r.kt)("p",null,"\u0438\u043b\u0438"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,r.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0421\u0440\u0435\u0434\u043d\u0435\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"react-authz")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0420\u0435\u0430\u043a\u0446\u0438\u044f"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"React \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 \u0434\u043b\u044f Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"\u0440\u0431\u0430\u043a-\u0440\u0435\u0430\u043a\u0446\u0438\u044f")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0420\u0435\u0430\u043a\u0446\u0438\u044f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u043e\u043b\u0435\u0439 \u0432 React \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e HOC, CASL \u0438 Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 Vue \u0434\u043b\u044f Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"\u0443\u0433\u043b\u043e\u0432\u043e-\u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0439")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0433\u043b\u043e\u0432\u043e\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0433\u043b\u043e\u0432\u0430\u044f \u043e\u0431\u0435\u0440\u0442\u043a\u0430 \u0434\u043b\u044f Casbin.js")))),(0,r.kt)("h2",{id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0439-\u0441\u0442\u0430\u0440\u0442"},"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0442\u0430\u0440\u0442"),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0436\u0438\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0432\u0440\u0443\u0447\u043d\u0443\u044e")," \u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0432\u0441\u044f\u043a\u0438\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u0445\u043e\u0442\u0438\u0442\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin". s");\n// \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:\n// \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c `data1` \u0438 `data2` \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c `data1` \u043e\u0431\u044a\u0435\u043a\u0442\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c casbin. \u0432 \u0440\u0443\u0447\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e.\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,r.kt)("p",null,"\u0442\u0435\u043f\u0435\u0440\u044c \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0442\u043e\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0442\u043e\u0440"),". \u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442 \u043d\u0435\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f API ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizer.can()")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()"),". \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u044d\u0442\u0438\u0445 2 API \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f Promises JavaScript (",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0437\u0434\u0435\u0441\u044c"),"), \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,r.kt)("inlineCode",{parentName:"p"},"then()")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you can write data1");\n    } else {\n        console.log("you cannot write data1");\n    }\n});\n// output: you can write data1\n')),(0,r.kt)("p",null,"\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"cannot()")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you cannot read data2");\n    } else {\n        console.log("you can read data2");\n    }\n});\n// output: you can read data2\n')),(0,r.kt)("p",null,"\u0432 \u043a\u043e\u0434\u0435 \u0432\u044b\u0448\u0435, \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0443\u0441\u043f\u0435\u0445")," \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u043d\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0438\u0441\u0442\u0438\u043d\u043d\u043e"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c")," \u0442\u0430\u043a\u0436\u0435 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043a \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u042d\u0442\u043e \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u0433\u0434\u0430 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0439\u0434\u0435\u0442 \u043d\u0435 \u0442\u0430\u043a \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0448\u0435\u043c\u0443 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"\u043f\u0440\u0438\u043c\u0435\u0440\u0443 React")," , \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Casbin.js"),(0,r.kt)("h2",{id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("p",null,"Casbin.js \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0441 \u0432\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c Casbin."),(0,r.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0440\u0435\u0436\u0438\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," \u0438 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 Casbin. s ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorizer"),", \u043e\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// \u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c URL-\u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u044d\u043a\u044d\u043d\u0434\u0430\nconst authorizer = new casbinjs. uthorizer(\n    'auto', // mode\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f. \n// Casbin.js \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u0432\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c Casbin.\nauthorizer.setUser(\"\u0422\u043e\u043c\");\n\n// \u041e\u0446\u0435\u043d\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432\n= authorizer.can(\"read\", \"data1\");\n\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. ru(\u0443\u0441\u043f\u0435\u0445, failed) => {\n    if (success) {\n        // \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ...\n    }\n});\n")),(0,r.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, RestAPI) \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0435\u0433\u043e \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0443. \u0412 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0435 API \u0432\u044b\u0437\u043e\u0432\u0438\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f. \u0412\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0411\u0438\u0433\u043e:"),(0,r.kt)("p",null,"::note"),(0,r.kt)("p",null,"\u0412\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n')),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\nfunc (c *APIController) GetFrontendPermission() {\n    // \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f \u0441 GET \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. (\u041a\u043b\u044e\u0447 - "casbin_subject")\n    \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044c := c.Input(). et("casbin_subject")\n    // `e` \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043f\u0438\u0435\u0439 Casbin Enforcer\n    c. ata["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) \n    // \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043b\u0438\u0446\u0443.\n    c.ServeJSON()\n}\n')),(0,r.kt)("p",null,"::note"),(0,r.kt)("p",null,"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," api \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 Go Casbin \u0438 Node-Casbin. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0442 api \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043b\u0441\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u044f\u0437\u044b\u043a\u0430\u0445, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443")," \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043d\u0438\u0436\u0435."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-api"},"\u0421\u043f\u0438\u0441\u043e\u043a API"),(0,r.kt)("h4",{id:"setpermissionpermission-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,r.kt)("p",null,"\u0417\u0430\u0434\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. Always used in ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," mode."),(0,r.kt)("h4",{id:"setuseruser-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,r.kt)("p",null,"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f \u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435. \u0412\u0441\u0435\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,r.kt)("h4",{id:"canaction-string-object-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,r.kt)("p",null,"\u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435")," \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043e\u0431\u044a\u0435\u043a\u0442\u0435"),"."),(0,r.kt)("h4",{id:"cannotaction-string-object-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,r.kt)("p",null,"Check if the user ",(0,r.kt)("strong",{parentName:"p"},"cannot")," perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,r.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,r.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,r.kt)("p",null,"Check if the user can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("strong",{parentName:"p"},"all")," object in ",(0,r.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,r.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,r.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,r.kt)("p",null,"Check if the user can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("strong",{parentName:"p"},"any one")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,r.kt)("h2",{id:"\u043f\u043e\u0447\u0435\u043c\u0443-casbinjs"},"\u041f\u043e\u0447\u0435\u043c\u0443 Casbin.js"),(0,r.kt)("p",null,"\u041b\u044e\u0434\u0438 \u043c\u043e\u0433\u0443\u0442 \u0443\u0434\u0438\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 Node-Casbin \u0438 Casbin.js. \u041e\u0434\u043d\u0438\u043c \u0441\u043b\u043e\u0432\u043e\u043c, Node-Casbin \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044f\u0434\u0440\u043e\u043c Casbin, \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u0441\u0440\u0435\u0434\u0435 NodeJS, \u0438 \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. Casbin.js \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Casbin \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435."),(0,r.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e \u043d\u0435\u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 Casbin \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e \u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e/\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u0438\u0437-\u0437\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041a\u043e\u0433\u0434\u0430 \u043a\u0442\u043e-\u0442\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d, \u0438 \u0432\u0441\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u0437\u044f\u0442\u044b \u0438\u0437 \u0441\u0442\u043e\u0439\u043a\u0438\u0445 \u0441\u043b\u043e\u0435\u0432 \u0431\u044d\u043a\u044d\u043d\u0434\u0430. \u0412\u044b\u0441\u043e\u043a\u043e\u0435 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0436\u0435\u0441\u0442\u043a\u043e\u043c\u0443 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043d\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0442\u0438.\xa0"),(0,r.kt)("li",{parentName:"ol"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c \u0440\u0438\u0441\u043a\u0430\u043c."),(0,r.kt)("li",{parentName:"ol"},"\u0422\u0440\u0443\u0434\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 agile-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438.")),(0,r.kt)("p",null,"\u041c\u044b \u0436\u0435\u043b\u0430\u0435\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u043b\u0435\u0433\u0447\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f Casbin \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435. \u041d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435, \u044f\u0434\u0440\u043e\u043c Casbin.js \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u044f \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435. \u041a\u0430\u043a \u0432\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438, Casbin.js \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0438\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438. \u042d\u0442\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c Casbin. \u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b Casbin.js \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d. s \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0434\u0432\u0443\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0433\u043e\u0432\u043e\u0440\u0438\u043b\u043e\u0441\u044c \u0432\u044b\u0448\u0435: \u0441\u043b\u0443\u0436\u0431\u0430 \u041a\u0430\u0441\u0431\u0438\u043d \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e, \u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u0438\u0437\u0431\u0435\u0433\u0430\u0435\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e, \u043d\u043e \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u043e \u0442\u0430\u043a\u0438\u0445 \u0432\u0435\u0449\u0430\u0445, \u043a\u0430\u043a \u043c\u043e\u0434\u0435\u043b\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, Casbin.js \u043c\u043e\u0436\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439."))}u.isMDXComponent=!0}}]);