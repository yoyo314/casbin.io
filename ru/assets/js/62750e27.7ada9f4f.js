"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1006],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),b=s(n),m=a,f=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?r.createElement(f,o(o({ref:e},l),{},{components:n})):r.createElement(f,o({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=b;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4470:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],u={title:"\u0421\u0435\u0440\u0432\u0435\u0440 Casbin \u0437\u0430\u043f\u0443\u0449\u0435\u043d!",author:"\u0425\u0435\u043b\u043e\u043d\u0433 \u0427\u0436\u0430\u043d",authorTitle:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},c=void 0,s={permalink:"/ru/blog/2018/08/07/launching-casbin-server",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-07-launching-casbin-server.md",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md",title:"\u0421\u0435\u0440\u0432\u0435\u0440 Casbin \u0437\u0430\u043f\u0443\u0449\u0435\u043d!",description:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0430\u0448\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u041a\u0430\u0441\u0431\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u041e\u0442\u0432\u0435\u0442 \u0414\u0410. \u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 Casbin Server \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0421\u0435\u0440\u0432\u0438\u0441\u0430.",date:"2018-08-07T00:00:00.000Z",formattedDate:"7 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2018 \u0433.",tags:[],readingTime:.625,truncated:!1,authors:[{name:"\u0425\u0435\u043b\u043e\u043d\u0433 \u0427\u0436\u0430\u043d",title:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",url:"http://github.com/BetaCat0",imageURL:"https://avatars.githubusercontent.com/BetaCat0"}],frontMatter:{title:"\u0421\u0435\u0440\u0432\u0435\u0440 Casbin \u0437\u0430\u043f\u0443\u0449\u0435\u043d!",author:"\u0425\u0435\u043b\u043e\u043d\u0433 \u0427\u0436\u0430\u043d",authorTitle:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u044e\u0449\u0438\u0439 Casbin",authorURL:"http://github.com/BetaCat0",authorImageURL:"https://avatars.githubusercontent.com/BetaCat0"},prevItem:{title:"node-Casbin: \u041d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d Casbin Family",permalink:"/ru/blog/2018/08/27/node-casbin"}},l={authorsImageUrls:[void 0]},p=[],b={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0430\u0448\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u041a\u0430\u0441\u0431\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u041e\u0442\u0432\u0435\u0442 ",(0,i.kt)("strong",{parentName:"p"},"\u0414\u0410"),". \u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"Casbin Server")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f ",(0,i.kt)("strong",{parentName:"p"},"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0421\u0435\u0440\u0432\u0438\u0441\u0430"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Casbin Server")," \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043d\u0430\u0448\u0435\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u0423 \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0430\u0437\u0432\u0438\u0442\u043e \u043d\u0430 \u0413\u043e\u043b\u0430\u043d\u0433\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u044b\u0441\u044f\u0447\u0430\u043c\u0438 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u041a\u0430\u0441\u0431\u0438\u043d, \u0442\u0430\u043a \u0447\u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u0443\u0436\u0431 \u0432 \u043e\u0434\u0438\u043d \u0441\u0435\u0440\u0432\u0435\u0440 Casbin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gRPC")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 Casbin Server. \u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 ",(0,i.kt)("strong",{parentName:"li"},"RESTful")," \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f."),(0,i.kt)("li",{parentName:"ul"},"\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0441\u043a\u0438\u0439 \u043f\u043e\u0440\u0442\u0430\u043b \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043d\u0435\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u043c\u0438 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u044b \u043a\u0430\u0441\u0431\u0438\u043d, \u043c\u043e\u0434\u0435\u043b\u0438, \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438.")),(0,i.kt)("p",null,"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d \u043d\u0430 GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-server"},"https://github.com/casbin/casbin-server")),(0,i.kt)("p",null,"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f \u043b\u044e\u0431\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 Pull Request'\u044b :)"))}m.isMDXComponent=!0}}]);