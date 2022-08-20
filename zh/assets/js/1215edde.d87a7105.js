"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9898],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),b=s(n),m=a,f=b["".concat(u,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},880:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",author:"Helong Zhang",authorTitle:"Casbin \u7ef4\u62a4\u8005",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},u=void 0,s={permalink:"/zh/blog/2018/08/07/launching-casbin-server",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-07-launching-casbin-server.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",description:"\u6211\u4eec\u7684\u4e00\u4e9b\u5ba2\u6237\u8be2\u95eeCasbin\u662f\u5426\u53ef\u4ee5\u7528\u4f5c\u670d\u52a1\u800c\u4e0d\u662f\u56fe\u4e66\u9986\u3002 \u7b54\u6848\u662f \u5f53\u7136\u53ef\u4ee5\u3002 \u4eca\u5929\uff0c\u6211\u4eec\u542f\u52a8\u4e86 Cassbin Server \u9879\u76ee\uff0c\u4f5c\u4e3a \u8bbf\u95ee\u63a7\u5236\u4f5c\u4e3a\u670d\u52a1 \u7684\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u3002",date:"2018-08-07T00:00:00.000Z",formattedDate:"2018\u5e748\u67087\u65e5",tags:[],readingTime:1.115,hasTruncateMarker:!1,authors:[{name:"Helong Zhang",title:"Casbin \u7ef4\u62a4\u8005",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"Casbin \u670d\u52a1\u5668\u5df2\u542f\u52a8\uff01",author:"Helong Zhang",authorTitle:"Casbin \u7ef4\u62a4\u8005",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin\uff1aCasbin\u5bb6\u5ead\u65b0\u6210\u5458",permalink:"/zh/blog/2018/08/27/node-casbin"}},l={authorsImageUrls:[void 0]},p=[],b={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u4e00\u4e9b\u5ba2\u6237\u8be2\u95eeCasbin\u662f\u5426\u53ef\u4ee5\u7528\u4f5c\u670d\u52a1\u800c\u4e0d\u662f\u56fe\u4e66\u9986\u3002 \u7b54\u6848\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u5f53\u7136\u53ef\u4ee5"),"\u3002 \u4eca\u5929\uff0c\u6211\u4eec\u542f\u52a8\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Cassbin Server")," \u9879\u76ee\uff0c\u4f5c\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u63a7\u5236\u4f5c\u4e3a\u670d\u52a1")," \u7684\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cassbin Server")," \u6b63\u5728\u7531\u6211\u4eec\u7684\u6838\u5fc3\u56e2\u961f\u79ef\u6781\u5f00\u53d1\u3002 \u5b83\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7eaf\u7cb9\u662f\u7531Golang\u5f00\u53d1\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7ba1\u7406\u6570\u4ee5\u5343\u8ba1\u7684 Casbin \u5b9e\u4f8b\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u5c06\u7b56\u7565\u6267\u884c\u903b\u8f91\u4ece\u591a\u4e2a\u670d\u52a1\u79fb\u52a8\u5230\u4e00\u4e2aCasbin \u670d\u52a1\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"gRPC")," \u88ab\u7528\u4e8e\u4e0e Casbin \u670d\u52a1\u5668\u901a\u4fe1\u3002 \u6211\u4eec\u8fd8\u8003\u8651\u5728\u4e0d\u4e45\u7684\u5c06\u6765\u6dfb\u52a0 ",(0,o.kt)("strong",{parentName:"li"},"RESTTful")," \u652f\u6301\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u975e\u5f00\u53d1\u8005\u7ba1\u7406\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53cb\u597d\u7684\u7f51\u7ad9\u7ba1\u7406\u5458\u95e8\u6237\uff0c\u7528\u4e8e\u7ba1\u7406\u6240\u6709\u7ec6\u8282\uff0c\u5982Casbin\u5b9e\u4f8b\u3001\u6a21\u578b\u3001\u653f\u7b56\u5b58\u50a8\u548c\u8d1f\u8f7d\u5e73\u8861\u3002")),(0,o.kt)("p",null,"\u6e90\u4ee3\u7801\u6258\u7ba1\u5728 GitHub \u4e0a\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,o.kt)("p",null,"\u6b22\u8fce\u4efb\u4f55\u95ee\u9898\u6216\u5408\u5e76\u8bf7\u6c42 :)"))}m.isMDXComponent=!0}}]);