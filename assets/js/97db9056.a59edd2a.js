"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"node-Casbin: New Member of Casbin Family",author:"Zixuan Liu",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},i=void 0,s={permalink:"/blog/2018/08/27/node-casbin",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-27-node-casbin.md",source:"@site/blog/2018-08-27-node-casbin.md",title:"node-Casbin: New Member of Casbin Family",description:"Today, we successfully ported Casbin to Node.js, which is named as:",date:"2018-08-27T00:00:00.000Z",formattedDate:"August 27, 2018",tags:[],readingTime:.265,hasTruncateMarker:!1,authors:[{name:"Zixuan Liu",title:"Casbin Maintainer",url:"http://github.com/nodece",imageURL:"https://avatars.githubusercontent.com/nodece"}],frontMatter:{title:"node-Casbin: New Member of Casbin Family",author:"Zixuan Liu",authorTitle:"Casbin Maintainer",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},prevItem:{title:"Reworking our Documentation",permalink:"/blog/2018/09/23/new-website"},nextItem:{title:"Casbin Server is Launched!",permalink:"/blog/2018/08/07/launching-casbin-server"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today, we successfully ported Casbin to Node.js, which is named as:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-Casbin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"node-Casbin")," shares the similar usage and API\nwith other implementations of Casbin. The middlewares for Express, Koa2 and Egg.js are ready\nto use. The storage adapter for Sequelize is also prepared."),(0,a.kt)("p",null,"Hope it can serve your need well :)"),(0,a.kt)("p",null,"GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"https://github.com/casbin/node-casbin")))}p.isMDXComponent=!0}}]);