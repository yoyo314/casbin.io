"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2329],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(n),f=o,y=v["".concat(u,".").concat(f)]||v[f]||s[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"envoy",title:"\u4f7f\u7528 Envoy \u5b9e\u73b0 Service Mesh \u6743\u9650\u7ba1\u7406"},u=void 0,c={unversionedId:"envoy",id:"envoy",title:"\u4f7f\u7528 Envoy \u5b9e\u73b0 Service Mesh \u6743\u9650\u7ba1\u7406",description:"Envoy-authz \u662f\u4f9b Envoy \u901a\u8fc7 Casbin \u6267\u884c\u5916\u90e8 RBAC \u548c ABAC \u6743\u9650\u7ba1\u7406\u7684\u4e2d\u95f4\u4ef6\u3002 \u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u901a\u8fc7 gRPC \u670d\u52a1\u5668\u4f7f\u7528 Envoy \u7684\u5916\u90e8\u6743\u9650 API\u3002 \u8be5\u4ee3\u7406\u53ef\u90e8\u7f72\u5728 Istio \u7b49\u57fa\u4e8e Envoy \u7684 Service Mesh \u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/zh/docs/envoy",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/EnvoyAuthz.mdx",tags:[],version:"current",frontMatter:{id:"envoy",title:"\u4f7f\u7528 Envoy \u5b9e\u73b0 Service Mesh \u6743\u9650\u7ba1\u7406"},sidebar:"docs",previous:{title:"Kubernetes\u7684\u6388\u6743",permalink:"/zh/docs/k8s"},next:{title:"Admin Portal",permalink:"/zh/docs/admin-portal"}},p={},s=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u4e2d\u95f4\u4ef6\u5de5\u4f5c\u539f\u7406",id:"\u4e2d\u95f4\u4ef6\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u96c6\u6210\u81f3 Istio",id:"\u96c6\u6210\u81f3-istio",level:2}],v={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," \u662f\u4f9b Envoy \u901a\u8fc7 Casbin \u6267\u884c\u5916\u90e8 RBAC \u548c ABAC \u6743\u9650\u7ba1\u7406\u7684\u4e2d\u95f4\u4ef6\u3002 \u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u901a\u8fc7 gRPC \u670d\u52a1\u5668\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"Envoy \u7684\u5916\u90e8\u6743\u9650 API"),"\u3002 \u8be5\u4ee3\u7406\u53ef\u90e8\u7f72\u5728 Istio \u7b49\u57fa\u4e8e Envoy \u7684 Service Mesh \u4e0a\u3002"),(0,i.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Envoy 1.17 \u4ee5\u4e0a\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"Istio \u6216 \u4efb\u610f Service Mesh \u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"gRPC \u4f9d\u8d56\u9879")),(0,i.kt)("p",null,"\u4f9d\u8d56\u9879\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod")," \u8fdb\u884c\u7ba1\u7406\u3002"),(0,i.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u5de5\u4f5c\u539f\u7406"},"\u4e2d\u95f4\u4ef6\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53d1\u8d77 http \u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"Envoy \u4ee3\u7406\u53d1\u9001\u8be5\u8bf7\u6c42\u81f3 grpc \u670d\u52a1\u5668"),(0,i.kt)("li",{parentName:"ul"},"gRPC \u670d\u52a1\u5668\u57fa\u4e8e Casbin \u7b56\u7565\u4e3a\u8bf7\u6c42\u8fdb\u884c\u6388\u6743"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6388\u6743\u540e\uff0c\u5c31\u4f1a\u53d1\u9001\u8bf7\u6c42\uff0c\u5426\u5219\u4f1a\u88ab\u7981\u6b62")),(0,i.kt)("p",null,"gRPC \u670d\u52a1\u5668\u57fa\u4e8e Envoy \u4e2d ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," \u7684\u901a\u4fe1\u6570\u636e\u534f\u8bae\uff08Protocol Buffer \uff0c\u7b80\u79f0\u4e3a Protobuf\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u5bf9\u4f20\u5165\u7f51\u7edc\u670d\u52a1\u7684\u8bf7\u6c42\n// \u6267\u884c\u6388\u6743\u68c0\u67e5\u7684\u901a\u7528\u63a5\u53e3\nservice Authorization {\n  // \u57fa\u4e8e\u4f20\u5165\u8bf7\u6c42\u7684\u5c5e\u6027\u6267\u884c\u6388\u6743\u68c0\u67e5\n  // \u5e76\u8fd4\u56de `OK` \u6216\u975e `OK` \u7684\u72b6\u6001\u3002\n  rpc Check(v2.CheckRequest) returns (v2.CheckResponse);\n}\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u534f\u8bae\u6587\u4ef6\u4e2d\uff0c\u5fc5\u987b\u4f7f\u7528\u6743\u9650\u670d\u52a1\u5668\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Check()")," \u670d\u52a1\u3002"),(0,i.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define the Casbin policies under config files by following this ",(0,i.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"guide"),".")),(0,i.kt)("p",null,"You can verify/test your policies on online ",(0,i.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"casbin-editor"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u6388\u6743\u670d\u52a1\u5668\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load the envoy configuration:-")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,i.kt)("p",null,"Envoy \u542f\u52a8\u540e\uff0c\u5c31\u4f1a\u5f00\u59cb\u62e6\u622a\u8bf7\u6c42\u4ee5\u8fdb\u884c\u6388\u6743\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"\u96c6\u6210\u81f3-istio"},"\u96c6\u6210\u81f3 Istio"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9\u6b64\u4e2d\u95f4\u4ef6\u987a\u5229\u8fd0\u884c\uff0c\u9700\u8981\u53d1\u9001 JWT \u7684 Token \u4e2d\u5305\u542b\u7528\u6237\u540d\u4fe1\u606f\u7684\u81ea\u5b9a\u4e49\u8bf7\u6c42\u5934\u3002 \u66f4\u591a\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u5934"),"\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio \u5b98\u65b9\u6587\u6863"),"\u3002"))}f.isMDXComponent=!0}}]);