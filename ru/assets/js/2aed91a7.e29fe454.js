"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7365],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),g=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=g(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=g(n),m=a,s=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2042:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return g},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={id:"log-error",title:"\u0416\u0443\u0440\u043d\u0430\u043b & \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",description:"Casbin log & error handling",keywords:["log","error","error handling"]},p=void 0,g={unversionedId:"log-error",id:"log-error",title:"\u0416\u0443\u0440\u043d\u0430\u043b & \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",description:"Casbin log & error handling",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/ru/docs/log-error",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"log-error",title:"\u0416\u0443\u0440\u043d\u0430\u043b & \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",description:"Casbin log & error handling",keywords:["log","error","error handling"]},sidebar:"docs",previous:{title:"\u0421\u043b\u0443\u0436\u0431\u0430 \u041a\u0430\u0441\u0431\u0438\u043d\u0430",permalink:"/ru/docs/service"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",permalink:"/ru/docs/frontend"}},u={},d=[{value:"\u0412\u0435\u0434\u0435\u043d\u0438\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0430",id:"\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0436\u0443\u0440\u043d\u0430\u043b\u0430",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043b\u043e\u0433\u0433\u0435\u0440 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0442\u0435\u043b\u0435\u0439",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0434\u0440\u0443\u0433\u043e\u0439-\u043b\u043e\u0433\u0433\u0435\u0440-\u0434\u043b\u044f-\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445-\u0443\u0441\u0438\u043b\u0438\u0442\u0435\u043b\u0435\u0439",level:3},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043b\u043e\u0433\u0433\u0435\u0440\u044b",id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u043b\u043e\u0433\u0433\u0435\u0440\u044b",level:4},{value:"\u041a\u0430\u043a \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043b\u043e\u0433\u0433\u0435\u0440",id:"\u043a\u0430\u043a-\u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c-\u043b\u043e\u0433\u0433\u0435\u0440",level:4},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a",level:2},{value:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c &amp; \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c",id:"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c--\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c",level:2}],c=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},m=c("Tabs"),s=c("TabItem"),k={toc:d};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u0436\u0443\u0440\u043d\u0430\u043b\u0430"},"\u0412\u0435\u0434\u0435\u043d\u0438\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0430"),(0,l.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043b\u043e\u0433")," \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438 \u0436\u0443\u0440\u043d\u0430\u043b\u043e\u0432 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [\u0417\u0430\u043f\u0440\u043e\u0441: \u0430\u043b\u044c, \u0434\u0430\u043d\u043d\u044b\u04351, \u0447\u0442\u0435\u043d\u0438\u0435 ---\x3e true]\n")),(0,l.kt)("p",null,"\u0416\u0443\u0440\u043d\u0430\u043b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,l.kt)("p",null,"::note"),(0,l.kt)("p",null,"\u041c\u044b \u0443\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c \u043b\u0435\u0441\u043e\u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0440\u043e\u043b\u0438, \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0432 \u0413\u043e\u043b\u0430\u043d\u0433\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043b\u043e\u0433 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 Casbin. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Python, pycasbin \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0437\u0430\u043f\u0438\u0441\u0438 \u043b\u043e\u0433\u043e\u0432 Python. \u041f\u0430\u043a\u0435\u0442 pycasbin \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c logging.getLogger(), \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u043e\u0433\u0433\u0435\u0440. \u041d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0430, \u043a\u0440\u043e\u043c\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u043e\u0433\u0433\u0435\u0440\u0430 \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u0415\u0441\u043b\u0438 \u043d\u0438 \u043e\u0434\u0438\u043d \u0432\u0445\u043e\u0434 \u043d\u0435 \u0438\u043d\u0442\u0438\u0446\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0432\u044b \u043d\u0435 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0430 \u0438\u0437 pycasbin."),(0,l.kt)("p",null,":::"),(0,l.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0434\u0440\u0443\u0433\u043e\u0439-\u043b\u043e\u0433\u0433\u0435\u0440-\u0434\u043b\u044f-\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445-\u0443\u0441\u0438\u043b\u0438\u0442\u0435\u043b\u0435\u0439"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043b\u043e\u0433\u0433\u0435\u0440 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0442\u0435\u043b\u0435\u0439"),(0,l.kt)("p",null,"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0438\u043b\u043e\u0432\u0438\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043b\u043e\u0433\u0433\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0438 \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b."),(0,l.kt)("p",null,"\u0418 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043b\u043e\u0433\u0433\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),", \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u044d\u0442\u043e\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u043e\u0440\u0443\u043c\u0430, \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u0447\u0442\u043e \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043b\u043e\u0433\u0433\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043a\u0430\u043a \u043b\u043e\u0433\u0433\u0435\u0440 e1.\n// \u042d\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0433\u0435\u0440\u0430 e1 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043b\u043e\u0433\u0433\u0435\u0440 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442\u0430 e2.\ne2.SetLogger(&YouOwnLogger)\n\n// \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043b\u043e\u0433\u0433\u0435\u0440\u0430 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 enforcer e3.\ne3, _ := casbin.NewEnforcer("\u041f\u0440\u0438\u043c\u0435\u0440/rbac_model.conf", a, logger)\n')),(0,l.kt)("h4",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u043b\u043e\u0433\u0433\u0435\u0440\u044b"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043b\u043e\u0433\u0433\u0435\u0440\u044b"),(0,l.kt)("p",null,"\u041c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043b\u043e\u0433\u0433\u0435\u0440\u044b, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(s,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Logger"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"\u0417\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043b\u043e\u0433\u0433\u0435\u0440 (\u0432\u0441\u0442\u0440\u043e\u0435\u043d)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041b\u043e\u0433\u0433\u0435\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f golang log.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap logger")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0436\u0443\u0440\u043d\u0430\u043b \u0441 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u043e\u0439 json \u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0432\u043e\u0435\u0433\u043e zap-logger."))))),(0,l.kt)(s,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Logger"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"logger psr3-bridge")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0439 \u0441 ",(0,l.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3")," \u043c\u043e\u0441\u0442.")))))),(0,l.kt)("h4",{id:"\u043a\u0430\u043a-\u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c-\u043b\u043e\u0433\u0433\u0435\u0440"},"\u041a\u0430\u043a \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043b\u043e\u0433\u0433\u0435\u0440"),(0,l.kt)("p",null,"\u0412\u0430\u0448 \u043b\u043e\u0433\u0433\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041c\u0435\u0442\u043e\u0434"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 \u043b\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e ()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043b\u043e\u0433\u0433\u0435\u0440\u0430.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0436\u0443\u0440\u043d\u0430\u043b\u0435 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u043e\u0434\u0435\u043b\u0438.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0416\u0443\u0440\u043d\u0430\u043b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0438.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041b\u043e\u0433 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0435\u0439\u0441\u044f \u043a \u0440\u043e\u043b\u0438.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041b\u043e\u0433 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439.")))),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043b\u043e\u0433")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"."),(0,l.kt)("p",null,"\u0412\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043b\u043e\u0433\u0433\u0435\u0440\u044b \u0434\u043b\u044f Golang:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'\u0438\u043c\u043f\u043e\u0440\u0442 (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger - \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l. nabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l. nabled {\n        return\n    }\n    var str strings.Builder\n    str. riteString("\u041c\u043e\u0434\u0435\u043b\u044c: ")\n    \u0434\u043b\u044f _, v := range model {\n        str. riteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str. tring())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l. nabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr. riteString("\u0417\u0430\u043f\u0440\u043e\u0441: ")\n    \u0434\u043b\u044f i, rval := request {\n        if i ! len(request)-1 {\n            reqStr. riteString(fmt. printf("%v, ", rval))\n        } else {\n            reqStr. riteString(fmt. printf("%v", rval))\n        }\n    }\n    reqStr. riteString(fmt.Sprintf(" ---\x3e %t\\n", \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442))\n\n    reqStr. riteString("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0445\u0438\u0442\u043e\u0432: ")\n    \u0434\u043b\u044f i, pval := range \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442 {\n        if i ! len(explains)-1 {\n            reqStr. riteString(fmt. printf("%v, ", pval))\n        } else {\n            reqStr. riteString(fmt. printf("%v \\n", pval))\n        }\n    }\n\n    log. rintln(reqStr. tring())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l. nabled {\n        return\n    }\n\n    var str \u0441\u0442\u0440\u043e\u043a. uilder\n    str. riteString("\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430: ")\n    \u0434\u043b\u044f k, v := range policy {\n        str.WriteString(fmt. printf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str. tring())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l. nabled {\n        return\n    }\n\n    log.Println("\u0420\u043e\u043b\u0438: ", \u0440\u043e\u043b\u0438)\n}\n\n')),(0,l.kt)("h2",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"),(0,l.kt)("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u043b\u0438 \u043f\u0430\u043d\u0438\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 Casbin \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0432 \u0444\u0430\u0439\u043b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 (.conf)."),(0,l.kt)("li",{parentName:"ol"},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0432 \u0444\u0430\u0439\u043b\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 (.csv)."),(0,l.kt)("li",{parentName:"ol"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, MySQL \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f."),(0,l.kt)("li",{parentName:"ol"},"Casbin's bug.")),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u044f\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438 \u0438\u043b\u0438 \u043f\u0430\u043d\u0438\u043a\u0438:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u043e\u0448\u0438\u0431\u043a\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 ()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")))),(0,l.kt)("p",null,"::note"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadModel()")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," \u0432\u043d\u0443\u0442\u0440\u0438. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," \u0432\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0432\u044b\u0437\u043e\u0432\u0430."),(0,l.kt)("p",null,":::"),(0,l.kt)("h2",{id:"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c--\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c"},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c & \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),(0,l.kt)("p",null,"\u0421\u0438\u043b\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()"),". \u041a\u043e\u0433\u0434\u0430 \u043e\u043d \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d, ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". \u0414\u0440\u0443\u0433\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u043d\u0435 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044e\u0442\u0441\u044f. \u0412\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// \u0432\u0435\u0440\u043d\u0435\u0442 false.\n// \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u044d\u043d\u0441\u0438\u043b\u0438\u0430\u0440 \u0432\u043a\u043b\u044e\u0447\u0435\u043d.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0441\u0438\u043b\u0438\u0442\u0435\u043b\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430.\ne.EnableEnforce(false)\n\n// \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0441\u0442\u0438\u043d\u0443 \u0437\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// \u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0439\u0442\u0435 \u0432\u043a\u043b.\ne.EnableEnforce(true)\n\n// \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}f.isMDXComponent=!0}}]);