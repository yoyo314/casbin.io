"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3978],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5304:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={id:"service",title:"Casbin \uc11c\ube44\uc2a4",description:"Using Casbin as a service",keywords:["service"]},c=void 0,l={unversionedId:"service",id:"service",title:"Casbin \uc11c\ube44\uc2a4",description:"Using Casbin as a service",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Service.mdx",sourceDirName:".",slug:"/service",permalink:"/ko/docs/service",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"service",title:"Casbin \uc11c\ube44\uc2a4",description:"Using Casbin as a service",keywords:["service"]},sidebar:"docs",previous:{title:"\uad00\ub9ac\uc790 \ud3ec\ud0c8",permalink:"/ko/docs/admin-portal"},next:{title:"Log & Error Handling",permalink:"/ko/docs/log-error"}},u={},p=[{value:"How to use Casbin as a service?",id:"how-to-use-casbin-as-a-service",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-use-casbin-as-a-service"},"How to use Casbin as a service?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-server"},"Casbin Server")),(0,i.kt)("td",{parentName:"tr",align:null},"The official ",(0,i.kt)("inlineCode",{parentName:"td"},"Casbin as a Service")," solution based on ",(0,i.kt)("a",{parentName:"td",href:"https://grpc.io/"},"gRPC"),", both Management API and RBAC API are provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/paysuper/casbin-server"},"PaySuper Casbin Server")),(0,i.kt)("td",{parentName:"tr",align:null},"PaySuper's fork of the above official ",(0,i.kt)("inlineCode",{parentName:"td"},"Casbin-Server")," but more actively maintained. It provides ",(0,i.kt)("a",{parentName:"td",href:"https://micro.mu/"},"go-micro")," interface for Casbin authorization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/luk4z7/middleware-acl"},"middleware-acl")),(0,i.kt)("td",{parentName:"tr",align:null},"RESTful access control middleware based on Casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/merajsahebdar/buttress-server"},"Buttress")),(0,i.kt)("td",{parentName:"tr",align:null},"The Access Control as a Service solution based on Casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ZettaAI/auth-server"},"auth-server")),(0,i.kt)("td",{parentName:"tr",align:null},"Auth Server for proofreading services.")))))}m.isMDXComponent=!0}}]);