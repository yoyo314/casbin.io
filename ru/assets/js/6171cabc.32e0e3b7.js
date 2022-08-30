"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},i=void 0,l={unversionedId:"envoy",id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/ru/docs/envoy",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"envoy",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},sidebar:"docs",previous:{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u041a\u0443\u0431\u0435\u0440\u043d\u0435\u0442\u043e\u0432",permalink:"/ru/docs/k8s"},next:{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043f\u043e\u0440\u0442\u0430\u043b\u0430",permalink:"/ru/docs/admin-portal"}},p={},u=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Middleware",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-middleware",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0432 \u0418\u0441\u0442\u0438\u043e",id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0432-\u0438\u0441\u0442\u0438\u043e",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u041f\u041e\u041b\u041e\u0416\u0415\u041d\u0418\u0415\u041c \u041f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 RBAC & ABAC \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u043a\u0430\u0437\u0438\u043d\u043e. \u042d\u0442\u043e\u0442 middleware \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 API \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")," \u0447\u0435\u0440\u0435\u0437 gRPC \u0441\u0435\u0440\u0432\u0435\u0440. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u043a\u0441\u0438 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442 \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0442\u0438\u043f\u0430\u0445 \u0441\u0435\u0442\u043e\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0442\u0438\u043f\u0430 Istio."),(0,o.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a 117 +"),(0,o.kt)("li",{parentName:"ul"},"\u0418\u0441\u0442\u0438\u043e \u0438\u043b\u0438 \u0441\u0435\u0442\u043a\u0430 \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("li",{parentName:"ul"},"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 grpc")),(0,o.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,o.kt)("h2",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-middleware"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041a\u043b\u0438\u0435\u043d\u0442 \u0441\u0434\u0435\u043b\u0430\u0435\u0442 http \u0437\u0430\u043f\u0440\u043e\u0441."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043f\u0440\u043e\u043a\u0441\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 grpc \u0441\u0435\u0440\u0432\u0435\u0440."),(0,o.kt)("li",{parentName:"ul"},"\u0417\u0430\u0442\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440 grpc \u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a\u0430\u0437\u0438\u043d\u043e."),(0,o.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u0430\u0447\u0435, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d.")),(0,o.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 grpc \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u0431\u0443\u0444\u0435\u0440\u0435 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," \u043e\u0442 Envoy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u041e\u0431\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0435\u043c\n// \u043a \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0441\u043b\u0443\u0436\u0431\u0435.\n\u0441\u0435\u0440\u0432\u0438\u0441 Authorization {\n  // \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441\n  // \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441 `OK` \u0438\u043b\u0438 \u043d\u0435 `OK`.\n  \u0412\u043e\u0437\u0432\u0440\u0430\u0442 rpc Check(v2.CheckRequest) (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."),(0,o.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 Casbin \u043f\u043e\u0434 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0444\u0430\u0439\u043b\u0430\u043c\u0438, \u0441\u043b\u0435\u0434\u0443\u044f ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443"),".")),(0,o.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c/\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0432 \u043e\u043d\u043b\u0430\u0439\u043d ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"\u043a\u0430\u0437\u0438\u043d\u043e-\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f, \u043e\u043d \u043d\u0430\u0447\u043d\u0435\u0442 \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e."),(0,o.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0432-\u0438\u0441\u0442\u0438\u043e"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0432 \u0418\u0441\u0442\u0438\u043e"),(0,o.kt)("p",null,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0438\u043c\u0435\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0442\u043e\u043a\u0435\u043d\u0435 JWT \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u044d\u0442\u043e\u0433\u043e middleware. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e Istio")," , \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0417\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),"."))}s.isMDXComponent=!0}}]);