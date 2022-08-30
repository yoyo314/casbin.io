"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"node-Casbin: \u041d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d Casbin Family",author:"Zixuan Liu",authorTitle:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},i=void 0,c={permalink:"/ru/blog/2018/08/27/node-casbin",editUrl:"https://crowdin.com/project/casbin-website/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md",title:"node-Casbin: \u041d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d Casbin Family",description:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438 Casbin \u0432 Node.js, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f node-Casbin.",date:"2018-08-27T00:00:00.000Z",formattedDate:"27 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2018 \u0433.",tags:[],readingTime:.23,hasTruncateMarker:!1,authors:[{name:"Zixuan Liu",title:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",url:"http://github.com/nodece",imageURL:"https://avatars.githubusercontent.com/nodece"}],frontMatter:{title:"node-Casbin: \u041d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d Casbin Family",author:"Zixuan Liu",authorTitle:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",authorURL:"http://github.com/nodece",authorImageURL:"https://avatars.githubusercontent.com/nodece"},prevItem:{title:"\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e",permalink:"/ru/blog/2018/09/23/new-website"},nextItem:{title:"\u0421\u0435\u0440\u0432\u0435\u0440 Casbin \u0437\u0430\u043f\u0443\u0449\u0435\u043d!",permalink:"/ru/blog/2018/08/07/launching-casbin-server"}},s={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438 Casbin \u0432 Node.js, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-Casbin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"node-Casbin")," \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 API \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\u043c\u0438 Casbin. middlewares for Express, Koa2 and Egg.js \u0433\u043e\u0442\u043e\u0432\u044b \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e . \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0430\u043c\u044f\u0442\u0438."),(0,a.kt)("p",null,"\u041d\u0430\u0434\u0435\u0435\u043c\u0441\u044f, \u0447\u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c :)"),(0,a.kt)("p",null,"GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"https://github.com/casbin/node-casbin")))}p.isMDXComponent=!0}}]);