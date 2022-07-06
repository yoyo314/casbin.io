"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6767],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"frontend",title:"Frontend Usage"},l=void 0,c={unversionedId:"frontend",id:"frontend",title:"Frontend Usage",description:"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application.",source:"@site/docs/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",frontMatter:{id:"frontend",title:"Frontend Usage"},sidebar:"docs",previous:{title:"Log & Error Handling",permalink:"/docs/log-error"},next:{title:"Online Editor",permalink:"/docs/online-editor"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Frontend Middlewares",id:"frontend-middlewares",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"API List",id:"api-list",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"Why Casbin.js",id:"why-casbinjs",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," is a Casbin addon that facilites your access-control management in the frontend application."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,i.kt)("h2",{id:"frontend-middlewares"},"Frontend Middlewares"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Author"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"react-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"React"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"React wrapper for Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-react")),(0,i.kt)("td",{parentName:"tr",align:null},"React"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,i.kt)("td",{parentName:"tr",align:null},"Role Based Access Control in React using HOCs, CASL and Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"Vue"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Vue wrapper for Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"angular-authz")),(0,i.kt)("td",{parentName:"tr",align:null},"Angular"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Angular wrapper for Casbin.js")))),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"manual")," mode in your frontend application, and set the permission whenever you wish."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin.js");\n// Set the user\'s permission:\n// He/She can read `data1` and `data2` objects and can write `data1` object\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// Run casbin.js in manual mode, which requires you to set the permission manually.\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,i.kt)("p",null,"now we got an authorizer ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer"),". We can get permission rules from it by using the API ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer.can()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()"),". The return values of these 2 APIs are JavaScript Promises (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"details here"),"), so we should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"then()")," method of the return value like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you can write data1");\n    } else {\n        console.log("you cannot write data1");\n    }\n});\n// output: you can write data1\n')),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"cannot()")," is used in the same way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nresult.then((success, failed) => {\n    if (success) {\n        console.log("you cannot read data2");\n    } else {\n        console.log("you can read data2");\n    }\n});\n// output: you can read data2\n')),(0,i.kt)("p",null,"in the code above, variable ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," in parameters means the request get the result without throwing an error, and doesn't mean that the permission rule is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"failed")," is also unrelated to the permission rules. It only makes sense when something goes wrong in the process of the request."),(0,i.kt)("p",null,"You can refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"React example")," to see a practical usage of Casbin.js"),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,i.kt)("p",null,"Casbin.js provides a perfect solution to integrating your frontend access-control management with your backend Casbin service."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," mode and specify your endpoint when initializing the Casbin.js ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorizer"),", it will automatically sync the permission and manipulate the frontend status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// Set your backend casbin service url\nconst authorizer = new casbinjs.Authorizer(\n    'auto', // mode\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// Set your visitor. \n// Casbin.js will automatically sync the permission with your backend Casbin service.\nauthorizer.setUser(\"Tom\");\n\n// Evaluate the permission\nresult = authorizer.can(\"read\", \"data1\");\nresult.then((success, failed) => {\n    if (success) {\n        // Some frontend procedure ...\n    }\n});\n")),(0,i.kt)("p",null,"Correspondingly, you need to expose an interface (e.g. a RestAPI) to generate the permission object and pass it to the frontend. In your API controller, call ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," to construct the permission object. Here is an example in Beego:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your endpoint server should return something like"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Go"},'// Router\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// Controller\nfunc (c *APIController) GetFrontendPermission() {\n    // Get the visitor from the GET parameters. (The key is "casbin_subject")\n    visitor := c.Input().Get("casbin_subject")\n    // `e` is an initialized instance of Casbin Enforcer\n    c.Data["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) \n    // Pass the data to the fronend.\n    c.ServeJSON()\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," api is only supported in Go Casbin and Node-Casbin. If you want this api to be supported in other languages, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"raise an issue")," or leave a comment below."))),(0,i.kt)("h2",{id:"api-list"},"API List"),(0,i.kt)("h4",{id:"setpermissionpermission-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,i.kt)("p",null,"Set the permission object. Always used in ",(0,i.kt)("inlineCode",{parentName:"p"},"manual")," mode."),(0,i.kt)("h4",{id:"setuseruser-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,i.kt)("p",null,"Set the visitor identity and update the permission. Always used in ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," mode."),(0,i.kt)("h4",{id:"canaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,i.kt)("p",null,"Check if the user can perform ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,i.kt)("h4",{id:"cannotaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,i.kt)("p",null,"Check if the user ",(0,i.kt)("strong",{parentName:"p"},"cannot")," perform ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,i.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"Check if the user can perform ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,i.kt)("strong",{parentName:"p"},"all")," object in ",(0,i.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,i.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"Check if the user can perform ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,i.kt)("strong",{parentName:"p"},"any one")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"objects"),"."),(0,i.kt)("h2",{id:"why-casbinjs"},"Why Casbin.js"),(0,i.kt)("p",null,"People may wonder the difference between Node-Casbin and Casbin.js. In a word, Node-Casbin is the core of Casbin implemented in NodeJS environment, and it's normally used as an access-controlling management toolkit at the server ends. Casbin.js is an frontend library that help you use Casbin to authorize your webpage user at the client side."),(0,i.kt)("p",null,"Normally, it is not proper to directly build up a Casbin service and do the authorization/enforcement tasks at a web frontend application due to the following problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When someone turn on the client, the enforcer will be initialized, and it will pull all the policies from the backend persistent layers. A high concurrency could bring tough pressure on the databases and cost a lot of network throughput.\xa0"),(0,i.kt)("li",{parentName:"ol"},"Loading all policies to the client sides could bring secure risks."),(0,i.kt)("li",{parentName:"ol"},"Difficult for the seperation between client and server as well as the agile development.")),(0,i.kt)("p",null,"We wish a tool that eases the process of using Casbin at the frontend. Actually, the core of Casbin.js is the manipulation of current user's permission at the client side. As you mentioned, Casbin.js does a fetch from a specified endpoint. This procedure will sync the permission of the user with the backend Casbin service. After having the permission data, developers can use Casbin.js interfaces to manage the behaviors of the user at the frontend side."),(0,i.kt)("p",null,"Casbin.js avoid the two problems that mentioned above: Casbin service will no longer be pulled up repeatedly, and the size of passing messages between the client and the server are reduced. We also avoid to store all the policies at the frontend. User can only accessible to his own permission, but have no idea about anything about things like the access-control model and other users' permissions. Besides, Casbin.js can also efficiently decouple the client and the server in authorization management."))}m.isMDXComponent=!0}}]);