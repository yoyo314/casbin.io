"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc",author:"Zixuan Liu",authorTitle:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},i=void 0,c={permalink:"/ja/blog/2018/08/27/node-casbin",editUrl:"https://crowdin.com/project/casbin-website/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md",title:"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc",description:"\u4eca\u65e5\u3001Casbin \u3092 Node.js \u306b\u6b63\u5e38\u306b\u79fb\u690d\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306f node-Casbin \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002",date:"2018-08-27T00:00:00.000Z",formattedDate:"2018\u5e748\u670827\u65e5",tags:[],readingTime:.515,hasTruncateMarker:!1,authors:[{name:"Zixuan Liu",title:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",url:"http://github.com/nodece",imageURL:"https://avatars.githubusercontent.com/nodece"}],frontMatter:{title:"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc",author:"Zixuan Liu",authorTitle:"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},prevItem:{title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af",permalink:"/ja/blog/2018/09/23/new-website"},nextItem:{title:"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01",permalink:"/ja/blog/2018/08/07/launching-casbin-server"}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4eca\u65e5\u3001Casbin \u3092 Node.js \u306b\u6b63\u5e38\u306b\u79fb\u690d\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-Casbin")," \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"node-Casbin")," \u306f\u3001Casbin \u306e\u4ed6\u306e\u5b9f\u88c5\u3068\u540c\u69d8\u306e\u4f7f\u7528\u6cd5\u3068 API \u3092\u5171\u6709\u3057\u3066\u3044\u307e\u3059\u3002 Express\u3001Koa2\u3001Egg.js\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f \u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30b7\u30fc\u30b1\u30f3\u30b9\u7528\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30a2\u30c0\u30d7\u30bf\u3082\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u308c\u304c\u3042\u306a\u305f\u306e\u5fc5\u8981\u6027\u306b\u3088\u304f\u5f79\u7acb\u3064\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059:)"),(0,a.kt)("p",null,"GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"https://github.com/casbin/node-casbin")))}l.isMDXComponent=!0}}]);