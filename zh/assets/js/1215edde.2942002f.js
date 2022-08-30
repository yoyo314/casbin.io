"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",author:"Helong Zhang",authorTitle:"Casbin \u7ef4\u62a4\u8005",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},i=void 0,s={permalink:"/zh/blog/2018/08/07/launching-casbin-server",editUrl:"https://crowdin.com/project/casbin-website/zh-CN",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",description:"\u6211\u4eec\u7684\u4e00\u4e9b\u5ba2\u6237\u8be2\u95eeCasbin\u662f\u5426\u53ef\u4ee5\u7528\u4f5c\u670d\u52a1\u800c\u4e0d\u662f\u56fe\u4e66\u9986\u3002 \u7b54\u6848\u662f \u5f53\u7136\u53ef\u4ee5\u3002 \u4eca\u5929\uff0c\u6211\u4eec\u542f\u52a8\u4e86 Cassbin Server \u9879\u76ee\uff0c\u4f5c\u4e3a \u8bbf\u95ee\u63a7\u5236\u4f5c\u4e3a\u670d\u52a1 \u7684\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u3002",date:"2018-08-07T00:00:00.000Z",formattedDate:"2018\u5e748\u67087\u65e5",tags:[],readingTime:1.115,hasTruncateMarker:!1,authors:[{name:"Helong Zhang",title:"Casbin \u7ef4\u62a4\u8005",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",author:"Helong Zhang",authorTitle:"Casbin \u7ef4\u62a4\u8005",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin\uff1aCasbin\u5bb6\u5ead\u65b0\u6210\u5458",permalink:"/zh/blog/2018/08/27/node-casbin"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u4e00\u4e9b\u5ba2\u6237\u8be2\u95eeCasbin\u662f\u5426\u53ef\u4ee5\u7528\u4f5c\u670d\u52a1\u800c\u4e0d\u662f\u56fe\u4e66\u9986\u3002 \u7b54\u6848\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u7136\u53ef\u4ee5"),"\u3002 \u4eca\u5929\uff0c\u6211\u4eec\u542f\u52a8\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Cassbin Server")," \u9879\u76ee\uff0c\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u63a7\u5236\u4f5c\u4e3a\u670d\u52a1")," \u7684\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cassbin Server")," \u6b63\u5728\u7531\u6211\u4eec\u7684\u6838\u5fc3\u56e2\u961f\u79ef\u6781\u5f00\u53d1\u3002 \u5b83\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7eaf\u7cb9\u662f\u7531Golang\u5f00\u53d1\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7ba1\u7406\u6570\u4ee5\u5343\u8ba1\u7684 Casbin \u5b9e\u4f8b\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u5c06\u7b56\u7565\u6267\u884c\u903b\u8f91\u4ece\u591a\u4e2a\u670d\u52a1\u79fb\u52a8\u5230\u4e00\u4e2aCasbin \u670d\u52a1\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gRPC")," \u88ab\u7528\u4e8e\u4e0e Casbin \u670d\u52a1\u5668\u901a\u4fe1\u3002 \u6211\u4eec\u8fd8\u8003\u8651\u5728\u4e0d\u4e45\u7684\u5c06\u6765\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"li"},"RESTTful")," \u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u975e\u5f00\u53d1\u8005\u7ba1\u7406\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53cb\u597d\u7684\u7f51\u7ad9\u7ba1\u7406\u5458\u95e8\u6237\uff0c\u7528\u4e8e\u7ba1\u7406\u6240\u6709\u7ec6\u8282\uff0c\u5982Casbin\u5b9e\u4f8b\u3001\u6a21\u578b\u3001\u653f\u7b56\u5b58\u50a8\u548c\u8d1f\u8f7d\u5e73\u8861\u3002")),(0,a.kt)("p",null,"\u6e90\u4ee3\u7801\u6258\u7ba1\u5728 GitHub \u4e0a\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,a.kt)("p",null,"\u6b22\u8fce\u4efb\u4f55\u95ee\u9898\u6216\u5408\u5e76\u8bf7\u6c42 :)"))}p.isMDXComponent=!0}}]);