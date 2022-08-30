"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=c(r),m=o,h=b["".concat(s,".").concat(m)]||b[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af",author:"Yang Luo",authorTitle:"Casbin \u306e\u4f5c\u6210",authorURL:"http://github.com/hsluoyz",authorImageURL:"https://avatars.githubusercontent.com/hsluoyz"},i=void 0,u={permalink:"/ja/blog/2018/09/23/new-website",editUrl:"https://crowdin.com/project/casbin-website/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2018-09-23-new-website.md",title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af",description:"Today, we migrated Casbin's documentation from GitHub Wiki to Docs of this website, which is powered by Docusaurus. Docusaurus\u306f\u3088\u308a\u826f\u3044 \u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30b9\u30bf\u30a4\u30eb\u3001\u5168\u6587\u691c\u7d22\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3001\u7ffb\u8a33\u306a\u3069\u306e\u7d20\u6674\u3089\u3057\u3044\u6a5f\u80fd\u3092\u305f\u304f\u3055\u3093\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",date:"2018-09-23T00:00:00.000Z",formattedDate:"2018\u5e749\u670823\u65e5",tags:[],readingTime:.475,hasTruncateMarker:!1,authors:[{name:"Yang Luo",title:"Casbin \u306e\u4f5c\u6210",url:"http://github.com/hsluoyz",imageURL:"https://avatars.githubusercontent.com/hsluoyz"}],frontMatter:{title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af",author:"Yang Luo",authorTitle:"Casbin \u306e\u4f5c\u6210",authorURL:"http://github.com/hsluoyz",authorImageURL:"https://avatars.githubusercontent.com/hsluoyz"},prevItem:{title:"Yang Luo - Google \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u53d7\u8cde",permalink:"/ja/blog/2020/04/21/google-award"},nextItem:{title:"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc",permalink:"/ja/blog/2018/08/27/node-casbin"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today, we migrated Casbin's documentation from GitHub Wiki to ",(0,o.kt)("inlineCode",{parentName:"p"},"Docs")," of this website, which is powered by Docusaurus. Docusaurus\u306f\u3088\u308a\u826f\u3044 \u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30b9\u30bf\u30a4\u30eb\u3001\u5168\u6587\u691c\u7d22\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3001\u7ffb\u8a33\u306a\u3069\u306e\u7d20\u6674\u3089\u3057\u3044\u6a5f\u80fd\u3092\u305f\u304f\u3055\u3093\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u307e\u3060\u5b8c\u74a7\u3067\u306f\u306a\u304f\u3001\u307e\u3060\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u304c\u5fc5\u8981\u3067\u3059\u3002 The source code is hosted on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-website"},"https://github.com/casbin/casbin-website"),"."),(0,o.kt)("p",null,"\u3069\u3093\u306a\u8ca2\u732e\u3082\u63d0\u6848\u3082\u6b53\u8fce\u3067\u3059!"))}p.isMDXComponent=!0}}]);