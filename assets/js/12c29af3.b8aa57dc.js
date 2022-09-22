"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"frontend",title:"Frontend Usage",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"]},o=void 0,s={unversionedId:"frontend",id:"frontend",title:"Frontend Usage",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",source:"@site/docs/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",lastUpdatedBy:"Fabio Ospitia Trujillo",lastUpdatedAt:1663871316,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"frontend",title:"Frontend Usage",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application",keywords:["Casbin.js","react-authz","rbac-react","vue-authz","angular-authz"]},sidebar:"docs",previous:{title:"Log & Error Handling",permalink:"/docs/log-error"},next:{title:"Editor",permalink:"/docs/category/editor"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Frontend Middlewares",id:"frontend-middlewares",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"API List",id:"api-list",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"Why Casbin.js",id:"why-casbinjs",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," is a Casbin addon that facilites your access-control management in the frontend application."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,r.kt)("h2",{id:"frontend-middlewares"},"Frontend Middlewares"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"react-authz")),(0,r.kt)("td",{parentName:"tr",align:null},"React"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"React wrapper for Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-react")),(0,r.kt)("td",{parentName:"tr",align:null},"React"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,r.kt)("td",{parentName:"tr",align:null},"Role Based Access Control in React using HOCs, CASL and Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,r.kt)("td",{parentName:"tr",align:null},"Vue"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Vue wrapper for Casbin.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"angular-authz")),(0,r.kt)("td",{parentName:"tr",align:null},"Angular"),(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Angular wrapper for Casbin.js")))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," mode in your frontend application, and set the permission whenever you wish."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin.js");\n// Set the user\'s permission:\n// He/She can read `data1` and `data2` objects and can write `data1` object\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// Run casbin.js in manual mode, which requires you to set the permission manually.\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,r.kt)("p",null,"now we got an authorizer ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizer"),". We can get permission rules from it by using the API ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizer.can()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()"),". The return values of these 2 APIs are JavaScript Promises (",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"details here"),"), so we should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"then()")," method of the return value like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you can write data1");\n    } else {\n        console.log("you cannot write data1");\n    }\n});\n// output: you can write data1\n')),(0,r.kt)("p",null,"and ",(0,r.kt)("inlineCode",{parentName:"p"},"cannot()")," is used in the same way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you cannot read data2");\n    } else {\n        console.log("you can read data2");\n    }\n});\n// output: you can read data2\n')),(0,r.kt)("p",null,"in the code above, variable ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," in parameters means the request get the result without throwing an error, and doesn't mean that the permission rule is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"failed")," is also unrelated to the permission rules. It only makes sense when something goes wrong in the process of the request."),(0,r.kt)("p",null,"You can refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"React example")," to see a practical usage of Casbin.js"),(0,r.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,r.kt)("p",null,"Casbin.js provides a perfect solution to integrating your frontend access-control management with your backend Casbin service."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," mode and specify your endpoint when initializing the Casbin.js ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorizer"),", it will automatically sync the permission and manipulate the frontend status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// Set your backend casbin service url\nconst authorizer = new casbinjs.Authorizer(\n    'auto', // mode\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// Set your visitor. \n// Casbin.js will automatically sync the permission with your backend Casbin service.\nauthorizer.setUser(\"Tom\");\n\n// Evaluate the permission\nresult = authorizer.can(\"read\", \"data1\");\nresult.then((success, failed) => {\n    if (success) {\n        // Some frontend procedure ...\n    }\n});\n")),(0,r.kt)("p",null,"Correspondingly, you need to expose an interface (e.g. a RestAPI) to generate the permission object and pass it to the frontend. In your API controller, call ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," to construct the permission object. Here is an example in Beego:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your endpoint server should return something like"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Router\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// Controller\nfunc (c *APIController) GetFrontendPermission() {\n    // Get the visitor from the GET parameters. (The key is "casbin_subject")\n    visitor := c.Input().Get("casbin_subject")\n    // `e` is an initialized instance of Casbin Enforcer\n    c.Data["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) \n    // Pass the data to the fronend.\n    c.ServeJSON()\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," api is only supported in Go Casbin and Node-Casbin. If you want this api to be supported in other languages, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"raise an issue")," or leave a comment below.")),(0,r.kt)("h2",{id:"api-list"},"API List"),(0,r.kt)("h4",{id:"setpermissionpermission-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,r.kt)("p",null,"Set the permission object. Always used in ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," mode."),(0,r.kt)("h4",{id:"setuseruser-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,r.kt)("p",null,"Set the visitor identity and update the permission. Always used in ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," mode."),(0,r.kt)("h4",{id:"canaction-string-object-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,r.kt)("p",null,"Check if the user can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,r.kt)("h4",{id:"cannotaction-string-object-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,r.kt)("p",null,"Check if the user ",(0,r.kt)("strong",{parentName:"p"},"cannot")," perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,r.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,r.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,r.kt)("p",null,"Check if the user can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("strong",{parentName:"p"},"all")," object in ",(0,r.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,r.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,r.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,r.kt)("p",null,"Check if the user can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,r.kt)("strong",{parentName:"p"},"any one")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,r.kt)("h2",{id:"why-casbinjs"},"Why Casbin.js"),(0,r.kt)("p",null,"People may wonder the difference between Node-Casbin and Casbin.js. In a word, Node-Casbin is the core of Casbin implemented in NodeJS environment, and it's normally used as an access-controlling management toolkit at the server ends. Casbin.js is an frontend library that help you use Casbin to authorize your webpage user at the client side."),(0,r.kt)("p",null,"Normally, it is not proper to directly build up a Casbin service and do the authorization/enforcement tasks at a web frontend application due to the following problems:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When someone turn on the client, the enforcer will be initialized, and it will pull all the policies from the backend persistent layers. A high concurrency could bring tough pressure on the databases and cost a lot of network throughput.\xa0"),(0,r.kt)("li",{parentName:"ol"},"Loading all policies to the client sides could bring secure risks."),(0,r.kt)("li",{parentName:"ol"},"Difficult for the seperation between client and server as well as the agile development.")),(0,r.kt)("p",null,"We wish a tool that eases the process of using Casbin at the frontend. Actually, the core of Casbin.js is the manipulation of current user's permission at the client side. As you mentioned, Casbin.js does a fetch from a specified endpoint. This procedure will sync the permission of the user with the backend Casbin service. After having the permission data, developers can use Casbin.js interfaces to manage the behaviors of the user at the frontend side."),(0,r.kt)("p",null,"Casbin.js avoid the two problems that mentioned above: Casbin service will no longer be pulled up repeatedly, and the size of passing messages between the client and the server are reduced. We also avoid to store all the policies at the frontend. User can only accessible to his own permission, but have no idea about anything about things like the access-control model and other users' permissions. Besides, Casbin.js can also efficiently decouple the client and the server in authorization management."))}p.isMDXComponent=!0}}]);