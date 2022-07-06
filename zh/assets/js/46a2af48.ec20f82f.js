"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6888],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(b,s(s({ref:n},p),{},{components:t})):a.createElement(b,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2974:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),s=["components"],o={id:"frontend",title:"\u524d\u7aef\u4f7f\u7528"},l=void 0,c={unversionedId:"frontend",id:"frontend",title:"\u524d\u7aef\u4f7f\u7528",description:"Casbin.js\u662f\u4e00\u4e2a\u80fd\u591f\u5e2e\u52a9\u4f60\u5728\u524d\u7aef\u5e94\u7528\u4e2d\u7ba1\u7406\u8bbf\u95ee\u63a7\u5236\u6743\u9650\u7684Casbin\u524d\u7aef\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/zh/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",frontMatter:{id:"frontend",title:"\u524d\u7aef\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u65e5\u5fd7 & \u9519\u8bef\u5904\u7406",permalink:"/zh/docs/log-error"},next:{title:"Online Editor",permalink:"/zh/docs/online-editor"}},p={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Frontend Middlewares",id:"frontend-middlewares",level:2},{value:"\u5feb\u901f\u5165\u95e8",id:"\u5feb\u901f\u5165\u95e8",level:2},{value:"\u9ad8\u7ea7\u7528\u6cd5",id:"\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"API \u5217\u8868",id:"api-\u5217\u8868",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Casbin.js",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-casbinjs",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js"),"\u662f\u4e00\u4e2a\u80fd\u591f\u5e2e\u52a9\u4f60\u5728\u524d\u7aef\u5e94\u7528\u4e2d\u7ba1\u7406\u8bbf\u95ee\u63a7\u5236\u6743\u9650\u7684Casbin\u524d\u7aef\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,i.kt)("p",null,"\u6216\u8005"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,i.kt)("h2",{id:"frontend-middlewares"},"Frontend Middlewares"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u4e2d\u95f4\u4ef6"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"react-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"React"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"React wrapper for Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-react")),(0,i.kt)("td",{parentName:"tr",align:null},"React"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,i.kt)("td",{parentName:"tr",align:null},"React \u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236, \u4f7f\u7528 HOCs, CASL \u548c Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"Vue"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Vue wrapper for Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"angular-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"Angular"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Angular wrapper for Casbin.js")))),(0,i.kt)("h2",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u60a8\u7684\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"manual")," \u6a21\u5f0f\uff0c\u5e76\u968f\u65f6\u8bbe\u7f6e\u6743\u9650\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin.js");\n// \u8bbe\u7f6e\u7528\u6237\u6743\u9650\n// \u4ed6/\u5979\u53ef\u4ee5\u53ef\u4ee5\u8bfb\u53d6data1\u548cdata2\u5e76\u4e14\u53ef\u4ee5\u5199\u5165data1\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// \u5728manual\u6a21\u5f0f\u4f7f\u7528Casbin.js\u9700\u8981\u60a8\u624b\u52a8\u8bbe\u7f6e\u6743\u9650\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e00\u4e2a\u6388\u6743\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer"),"\u3002 \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528API ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer.can()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()"),"\u83b7\u5f97\u5f97\u8bb8\u53ef\u89c4\u5219\u3002 \u8fd92\u4e2aAPI\u7684\u8fd4\u56de\u503c\u662fJavaScript Promise (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"\u8be6\u7ec6\u4fe1\u606f"),") \u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"then()")," \u8fd4\u56de\u503c\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you can write data1");\n    } else {\n        console.log("you cannot write data1");\n    }\n});\n// \u8f93\u51fa\uff1a\u60a8\u53ef\u4ee5\u5199\u5165data1\n')),(0,i.kt)("p",null,"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"cannnot()")," \u4ee5\u540c\u6837\u65b9\u5f0f\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you cannot read data2");\n    } else {\n        console.log("you can read data2");\n    }\n});\n// \u8f93\u51fa\uff1a\u60a8\u53ef\u4ee5\u8bfb\u53d6data2\n')),(0,i.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," \u610f\u5473\u7740\u8bf7\u6c42\u83b7\u5f97\u7ed3\u679c\u800c\u4e0d\u4ea7\u751f\u9519\u8bef\uff0c \u800c\u4e0d\u610f\u5473\u7740\u6743\u9650\u89c4\u5219\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," ",(0,i.kt)("inlineCode",{parentName:"p"},"failed")," \u4e5f\u548c\u6743\u9650\u89c4\u5219\u65e0\u5173 \u53ea\u6709\u5728\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\u65f6\u624d\u6709\u610f\u4e49\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u8003\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"React\u793a\u4f8b"),"\u6765\u67e5\u770bCasbin.js\u7684\u5b9e\u9645\u7528\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u9ad8\u7ea7\u7528\u6cd5"},"\u9ad8\u7ea7\u7528\u6cd5"),(0,i.kt)("p",null,"Casbin.js\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b8c\u7f8e\u7684\u89e3\u51b3\u65b9\u6848\u6765\u5c06\u60a8\u7684\u524d\u7aef\u8bbf\u95ee\u63a7\u5236\u7ba1\u7406\u548c\u540e\u7aefCasbin\u670d\u52a1\u4e00\u4f53\u5316\u3002"),(0,i.kt)("p",null,"\u5728\u521d\u59cb\u5316 Casbin.js ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorizer"),"\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," \u6a21\u5f0f\u5e76\u6307\u5b9a\u4f60\u7684\u540e\u7aef\u5730\u5740\uff0c\u5b83\u4f1a\u81ea\u52a8\u540c\u6b65\u6743\u9650\u5e76\u8c03\u6574\u524d\u7aef\u72b6\u6001\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// \u8bbe\u7f6e\u60a8\u7684\u540e\u7aefCasbin\u670d\u52a1url\nconst authorizer = new casbinjs.Authorizer(\n    'auto', // \u6a21\u5f0f\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// \u8bbe\u7f6e\u60a8\u7684\u8bbf\u5ba2 \n// Casbin.js \u4f1a\u81ea\u52a8\u4e0e\u4f60\u7684\u540e\u7aefCasbin\u670d\u52a1\u540c\u6b65\u6743\u9650\u3002\nauthorizer.setUser(\"Tom\");\n\n// \u8bc4\u4f30\u6743\u9650\nresult = authorizer.can(\"read\", \"data1\");\nresult.then((success, failed) => {\n    if (success) {\n        // \u4e00\u4e9b\u524d\u7aef\u64cd\u4f5c\n    }\n});\n")),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u9700\u8981\u5f00\u653e\u4e00\u4e2a\u63a5\u53e3(\u4f8b\u5982\u4e00\u4e2a RestAPI)\u6765\u521b\u5efa\u6743\u9650\u5bf9\u8c61\u5e76\u5c06\u5176\u8fd4\u56de\u524d\u7aef\u3002 \u5728\u4f60\u7684 API \u63a7\u5236\u5668\u4e2d\uff0c\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," \u4ee5\u521b\u5efa\u6743\u9650\u5bf9\u8c61\u3002 \u4e0b\u9762\u662f\u4e00\u4e2a Beego \u6846\u67b6\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your endpoint server should return something like"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Go"},'// \u8def\u7531\u5668\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// \u63a7\u5236\u5668\nfunc (c *APIController) GetFrontendPermission() {\n    // \u5728 GET \u8bf7\u6c42\u7684\u53c2\u6570\u4e2d\u83b7\u53d6\u8bbf\u5ba2\u3002 (\u5176\u4e2d\u7684\u952e\u662f"casbin_subject")\n    visitor := c.Input().Get("casbin_subject")\n    // `e`\u662f\u4e00\u4e2a\u521d\u59cb\u5316\u7684Casbin Enforcer\u5b9e\u4f8b\n    c.Data["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) \n    // \u5c06\u6570\u636e\u4f20\u5230\u524d\u7aef\n    c.ServeJSON()\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," api is only supported in Go Casbin and Node-Casbin. \u5982\u679c\u60a8\u5e0c\u671b\u8fd9\u4e2aapi\u652f\u6301\u5176\u5b83\u8bed\u8a00\uff0c\u8bf7\u5728\u6b64",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"\u63d0\u4ea4issue")," \u6216\u8005\u7559\u4e0b\u8bc4\u8bba\u3002"))),(0,i.kt)("h2",{id:"api-\u5217\u8868"},"API \u5217\u8868"),(0,i.kt)("h4",{id:"setpermissionpermission-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u6743\u9650\u5bf9\u8c61\u3002 \u59cb\u7ec8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"manual")," \u6a21\u5f0f\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("h4",{id:"setuseruser-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u8bbf\u5ba2\u8eab\u4efd\u5e76\u66f4\u65b0\u6743\u9650\u3002 \u59cb\u7ec8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),"\u6a21\u5f0f\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("h4",{id:"canaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,i.kt)("p",null,"\u68c0\u67e5\u7528\u6237\u662f\u5426\u80fd\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u3002"),(0,i.kt)("h4",{id:"cannotaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,i.kt)("p",null,"\u68c0\u67e5\u7528\u6237\u662f\u5426",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u80fd"),"\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," \u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u3002"),(0,i.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"\u68c0\u67e5\u7528\u6237\u662f\u5426\u80fd\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"objects"),"\u5bf9",(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u5bf9\u8c61\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u3002"),(0,i.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"\u68c0\u67e5\u7528\u6237\u662f\u5426\u80fd\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"objects")," \u4e2d\u7684",(0,i.kt)("strong",{parentName:"p"},"\u4efb\u610f\u4e00\u4e2a"),"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-casbinjs"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Casbin.js"),(0,i.kt)("p",null,"\u4eba\u4eec\u53ef\u80fd\u4f1a\u60f3\u77e5\u9053Node-Casbin\u548cCasbin.js\u4e4b\u95f4\u7684\u533a\u522b\u3002 \u603b\u7684\u6765\u8bf4\uff0cNode-Casbin \u662f\u4e00\u4e2a\u7528 NodeJS \u73af\u5883\u5b9e\u73b0\u7684 Casbin \u6838\u5fc3\uff0c\u5b83\u901a\u5e38\u5728\u670d\u52a1\u7aef\u7528\u4f5c\u4e00\u4e2a\u8bbf\u95ee\u63a7\u5236\u5de5\u5177\u5305\u3002 Casbin.js \u662f\u4e00\u4e2a\u80fd\u5e2e\u52a9\u60a8\u5728\u5ba2\u6237\u7aef\u4f7f\u7528Casbin\u4e3a\u4f60\u7f51\u9875\u91cc\u7684\u7528\u6237\u6388\u6743\u7684\u524d\u7aef\u5e93\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u7531\u4e8e\u4ee5\u4e0b\u95ee\u9898\uff0c\u76f4\u63a5\u6784\u5efa\u4e00\u4e2a Casbin \u670d\u52a1\u5e76\u5728\u7f51\u9875\u524d\u7aef\u6267\u884c\u6388\u6743/\u6267\u884c\u662f\u4e0d\u59a5\u5f53\u7684\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f53\u6709\u4eba\u542f\u52a8\u5ba2\u6237\u7aef\u65f6\uff0c\u6267\u884c\u5668\u4f1a\u88ab\u521d\u59cb\u5316\uff0c\u968f\u540e\u5728\u540e\u7aef\u6301\u4e45\u5c42\u4e2d\u62c9\u53d6\u6240\u6709\u7b56\u7565\u3002 \u9ad8\u5e76\u53d1\u4f1a\u4e3a\u6570\u636e\u5e93\u5e26\u6765\u5de8\u5927\u7684\u538b\u529b\u5e76\u5e26\u6765\u6781\u9ad8\u7684\u7f51\u7edc\u6210\u672c\u3002\xa0"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u7b56\u7565\u6089\u6570\u52a0\u8f7d\u8fdb\u5ba2\u6237\u7aef\u4f1a\u5e26\u6765\u5b89\u5168\u98ce\u9669\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u533a\u5206\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4ee5\u53ca\u7075\u6d3b\u7684\u5f00\u53d1\u6709\u56f0\u96be\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u6709\u4e00\u79cd\u80fd\u591f\u7b80\u5316 Casbin \u524d\u7aef\u5f00\u53d1\u7684\u5de5\u5177\u3002 \u5b9e\u9645\u4e0a\uff0cCasbin.js \u7684\u6838\u5fc3\u662f\u5728\u5ba2\u6237\u7aef\u64cd\u7eb5\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\u3002 \u6b63\u5982\u4f60\u63d0\u5230\u7684\uff0cCasbin.js \u4ece\u4e00\u4e2a\u6307\u5b9a\u7684\u540e\u7aef\u83b7\u53d6\u6570\u636e\u3002 \u8fd9\u4e2a\u7a0b\u5e8f\u4f1a\u4e0e Casbin \u540e\u7aef\u670d\u52a1\u540c\u6b65\u6743\u9650\u3002 \u53d6\u5f97\u6743\u9650\u6570\u636e\u4e4b\u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 Casbin.js \u63d0\u4f9b\u7684\u63a5\u53e3\u6765\u5728\u524d\u7aef\u7ba1\u7406\u7528\u6237\u884c\u4e3a\u3002"),(0,i.kt)("p",null,"Casbin.js \u907f\u514d\u4e86\u4ee5\u4e0a\u63d0\u53ca\u7684\u4e24\u4e2a\u95ee\u9898\uff1aCasbin \u670d\u52a1\u5c06\u4e0d\u518d\u88ab\u53cd\u590d\u8bf7\u6c42\u6570\u636e\uff0c\u5e76\u4e14\u51cf\u5c11\u4e86\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u91cf\u3002 \u6211\u4eec\u4e5f\u907f\u514d\u4e86\u5c06\u6240\u6709\u7684\u7b56\u7565\u90fd\u50a8\u5b58\u5728\u524d\u7aef\u7684\u95ee\u9898\u3002 \u7528\u6237\u4ec5\u80fd\u64cd\u4f5c\u4e0e\u4e4b\u76f8\u5173\u7684\u6743\u9650\uff0c\u5bf9\u5176\u5b83\u8bf8\u5982\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u3001\u5176\u4ed6\u7528\u6237\u7684\u6743\u9650\u7684\u5185\u5bb9\u5c06\u4e00\u65e0\u6240\u77e5\u3002 \u6b64\u5916\uff0cCasbin.js \u8fd8\u80fd\u6709\u6548\u5730\u5728\u6388\u6743\u7ba1\u7406\u65b9\u9762\u5206\u79bb\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002"))}m.isMDXComponent=!0}}]);