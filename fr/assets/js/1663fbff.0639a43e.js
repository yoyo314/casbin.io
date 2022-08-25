"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3202],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],u={id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},s=void 0,l={unversionedId:"envoy",id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"Authorization of Service Mesh through Envoy",source:"@site/docs/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/fr/docs/envoy",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"envoy",title:"Authorization of Service Mesh through Envoy",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},sidebar:"docs",previous:{title:"Authorization of Kubernetes",permalink:"/fr/docs/k8s"},next:{title:"Admin Portal",permalink:"/fr/docs/admin-portal"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Working of Middleware",id:"working-of-middleware",level:2},{value:"Usage",id:"usage",level:2},{value:"Integrating to Istio",id:"integrating-to-istio",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," is a middleware of Envoy which performs external RBAC & ABAC authorization through casbin. This middleware uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"Envoy's external authorization API")," through a gRPC server. This proxy would be deployed on any type of envoy-based service meshes like Istio."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Envoy 1.17+ "),(0,i.kt)("li",{parentName:"ul"},"Istio or any type of service mesh"),(0,i.kt)("li",{parentName:"ul"},"grpc dependencies")),(0,i.kt)("p",null,"Dependencies are managed through ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,i.kt)("h2",{id:"working-of-middleware"},"Working of Middleware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A client would make a http request."),(0,i.kt)("li",{parentName:"ul"},"Envoy proxy would send that request to grpc server."),(0,i.kt)("li",{parentName:"ul"},"The grpc server would then authorize the request based on casbin policies."),(0,i.kt)("li",{parentName:"ul"},"If authorized, the request would be sent through or else, it gets denied.")),(0,i.kt)("p",null,"The grpc server is based on protocol buffer from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," from Envoy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// A generic interface for performing authorization check on incoming\n// requests to a networked service.\nservice Authorization {\n  // Performs authorization check based on the attributes associated with the\n  // incoming request, and returns status `OK` or not `OK`.\n  rpc Check(v2.CheckRequest) returns (v2.CheckResponse);\n}\n")),(0,i.kt)("p",null,"From the above proto file, we have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Check()")," service in the authorization server."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define the Casbin policies under config files by following this ",(0,i.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"guide"),".")),(0,i.kt)("p",null,"You can verify/test your policies on online ",(0,i.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"casbin-editor"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the authorizing server by running:-")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load the envoy configuration:-")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,i.kt)("p",null,"Once the envoy starts, it will start intercepting requests for the authorization process."),(0,i.kt)("h2",{id:"integrating-to-istio"},"Integrating to Istio"),(0,i.kt)("p",null,"You need to send custom headers, which would contain usernames in the JWT token OF headers for this middleware to work. You can check the official ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio docs")," to get more info on modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"Request Headers"),"."))}d.isMDXComponent=!0}}]);