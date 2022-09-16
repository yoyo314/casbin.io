"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(n),m=o,y=v["".concat(p,".").concat(m)]||v[m]||s[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"envoy",title:"Envoy\u306b\u3088\u308b\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5\u306e\u627f\u8a8d",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},i=void 0,l={unversionedId:"envoy",id:"envoy",title:"Envoy\u306b\u3088\u308b\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5\u306e\u627f\u8a8d",description:"Authorization of Service Mesh through Envoy",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/ja/docs/envoy",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"envoy",title:"Envoy\u306b\u3088\u308b\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5\u306e\u627f\u8a8d",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},sidebar:"docs",previous:{title:"Admission Webhook For K8s",permalink:"/ja/docs/k8s-gatekeeper"},next:{title:"Management",permalink:"/ja/docs/category/management"}},p={},c=[{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:2},{value:"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u4f5c\u696d",id:"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u4f5c\u696d",level:2},{value:"\u4f7f\u7528\u6cd5",id:"\u4f7f\u7528\u6cd5",level:2},{value:"Istio\u3068\u306e\u7d71\u5408",id:"istio\u3068\u306e\u7d71\u5408",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," \u306fEnvoy\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3067\u3001\u30ab\u30b7\u30f3\u3092\u4ecb\u3057\u3066\u5916\u90e8RBAC & ABAC\u8a8d\u8a3c\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f\u3001gRPC\u30b5\u30fc\u30d0\u30fc\u3092\u4ecb\u3057\u3066 ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"Envoy\u306e\u5916\u90e8\u8a8d\u8a3c API")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30ad\u30b7\u306f\u3001Istio \u306e\u3088\u3046\u306a\u4efb\u610f\u306e\u30bf\u30a4\u30d7\u306eenvey \u30d9\u30fc\u30b9\u306e\u30b5\u30fc\u30d3\u30b9 \u30e1\u30c3\u30b7\u30e5\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u8981\u4ef6"},"\u8981\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7279\u4f7f1.17+"),(0,o.kt)("li",{parentName:"ul"},"Istio\u307e\u305f\u306f\u4efb\u610f\u306e\u30bf\u30a4\u30d7\u306e\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5"),(0,o.kt)("li",{parentName:"ul"},"grpc\u4f9d\u5b58\u95a2\u4fc2")),(0,o.kt)("p",null,"\u4f9d\u5b58\u95a2\u4fc2\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," \u3092\u901a\u3058\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u4f5c\u696d"},"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u4f5c\u696d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306fhttp\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Envoy\u30d7\u30ed\u30ad\u30b7\u306f\u305d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092grpc\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"grpc\u30b5\u30fc\u30d0\u30fc\u306f\u30ab\u30b9\u30d3\u30f3\u30dd\u30ea\u30b7\u30fc\u306b\u57fa\u3065\u3044\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u627f\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u627f\u8a8d\u3055\u308c\u308b\u3068\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u901a\u904e\u307e\u305f\u306f\u4ed6\u306e\u65b9\u6cd5\u3067\u9001\u4fe1\u3055\u308c\u307e\u3059\u304c\u3001\u62d2\u5426\u3055\u308c\u307e\u3059\u3002")),(0,o.kt)("p",null,"grpc\u30b5\u30fc\u30d0\u306fEnvoy\u306e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," \u304b\u3089\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// A generic interface for perform authorization check on incoming\n// requests to a networked service.\nservice Authorization {\n  // Performs authorization check based on the attributes associated with the\n  // incoming request. \u3092\u9078\u629e\u3059\u308b\u3068\u3001\u72b6\u614b\u3092`OK` \u304b\u3069\u3046\u304b\u3092\u8fd4\u3057\u307e\u3059\u3002\n  rpc Check(v2.CheckRequest) returns (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"\u4e0a\u8a18\u306eproto\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u3001\u8a8d\u8a3c\u30b5\u30fc\u30d0\u30fc\u3067 ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," \u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u6cd5"},"\u4f7f\u7528\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u3053\u306e ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"\u30ac\u30a4\u30c9")," \u306b\u5f93\u3063\u3066\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u4e0b\u306b\u3042\u308bCasbin \u30dd\u30ea\u30b7\u30fc\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,"\u30aa\u30f3\u30e9\u30a4\u30f3\u306e ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"\u30ab\u30b9\u30d3\u30f3\u30a8\u30c7\u30a3\u30bf"),"\u3067\u30dd\u30ea\u30b7\u30fc\u3092\u78ba\u8a8d/\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u3057\u3066\u8a8d\u8a3c\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u307e\u3059:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528\u8005\u306e\u69cb\u6210\u3092\u8aad\u307f\u8fbc\u3080:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"\u4f7f\u7bc0\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3001\u8a31\u53ef\u30d7\u30ed\u30bb\u30b9\u306e\u8981\u6c42\u304c\u508d\u53d7\u3055\u308c\u59cb\u3081\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"istio\u3068\u306e\u7d71\u5408"},"Istio\u3068\u306e\u7d71\u5408"),(0,o.kt)("p",null,"\u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u52d5\u4f5c\u3055\u305b\u308b\u306b\u306f\u3001JWT \u30c8\u30fc\u30af\u30f3 OF \u30d8\u30c3\u30c0\u30fc\u306b\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u542b\u3080\u30ab\u30b9\u30bf\u30e0\u30d8\u30c3\u30c0\u30fc\u3092\u9001\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u516c\u5f0f\u306e ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")," \u3092\u78ba\u8a8d\u3057\u3066\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc")," \u306e\u5909\u66f4\u306b\u95a2\u3059\u308b\u8a73\u7d30\u60c5\u5831\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);