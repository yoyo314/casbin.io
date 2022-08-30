"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=s(r),m=o,f=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e",author:"Yang Luo",authorTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u041a\u0430\u0441\u0431\u0438\u043d\u0430",authorURL:"http://github.com/hsluoyz",authorImageURL:"https://avatars.githubusercontent.com/hsluoyz"},u=void 0,i={permalink:"/ru/blog/2018/09/23/new-website",editUrl:"https://crowdin.com/project/casbin-website/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2018-09-23-new-website.md",title:"\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e",description:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u043c\u0438\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e Casbin'\u0430 \u0438\u0437 GitHub \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 Docusaurus. Docusaurus \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u0440\u044f\u0441\u0430\u044e\u0449\u0438\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u0442\u0438\u043b\u0438 Markdown, \u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u043e\u0438\u0441\u043a, \u0432\u0435\u0440\u0441\u0438\u044f, \u043f\u0435\u0440\u0435\u0432\u043e\u0434.",date:"2018-09-23T00:00:00.000Z",formattedDate:"23 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2018 \u0433.",tags:[],readingTime:.25,hasTruncateMarker:!1,authors:[{name:"Yang Luo",title:"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u041a\u0430\u0441\u0431\u0438\u043d\u0430",url:"http://github.com/hsluoyz",imageURL:"https://avatars.githubusercontent.com/hsluoyz"}],frontMatter:{title:"\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e",author:"Yang Luo",authorTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u041a\u0430\u0441\u0431\u0438\u043d\u0430",authorURL:"http://github.com/hsluoyz",authorImageURL:"https://avatars.githubusercontent.com/hsluoyz"},prevItem:{title:"\u042f\u043d \u041b\u0443\u043e - Google Open Source Peer Bonus \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c",permalink:"/ru/blog/2020/04/21/google-award"},nextItem:{title:"node-Casbin: \u041d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d Casbin Family",permalink:"/ru/blog/2018/08/27/node-casbin"}},c={authorsImageUrls:[void 0]},s=[],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u043c\u0438\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e Casbin'\u0430 \u0438\u0437 GitHub \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e")," \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 Docusaurus. Docusaurus \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u0440\u044f\u0441\u0430\u044e\u0449\u0438\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u0442\u0438\u043b\u0438 Markdown, \u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u043e\u0438\u0441\u043a, \u0432\u0435\u0440\u0441\u0438\u044f, \u043f\u0435\u0440\u0435\u0432\u043e\u0434."),(0,o.kt)("p",null,"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0435\u0449\u0435 \u043d\u0435 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u0438 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435. \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d \u043d\u0430 GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-website"},"https://github.com/casbin/casbin-website"),"."),(0,o.kt)("p",null,"\u041b\u044e\u0431\u043e\u0439 \u0432\u043a\u043b\u0430\u0434 \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f!"))}p.isMDXComponent=!0}}]);