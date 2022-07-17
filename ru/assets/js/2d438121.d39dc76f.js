"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6442],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),b=r,d=m["".concat(l,".").concat(b)]||m[b]||s[b]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3046:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],p={title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432 APISIX \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Casbin",author:"Rushikesh Tote",authorTitle:"\u0427\u043b\u0435\u043d \u041a\u0430\u0441\u0431\u0438\u043d\u0430",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},l=void 0,u={permalink:"/ru/blog/2021/08/19/apisix-casbin-authorization",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/blog/2021-08-19-apisix-casbin-authorization.md",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432 APISIX \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Casbin",description:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",date:"2021-08-19T00:00:00.000Z",formattedDate:"19 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2021 \u0433.",tags:[],readingTime:5.07,hasTruncateMarker:!1,authors:[{name:"Rushikesh Tote",title:"\u0427\u043b\u0435\u043d \u041a\u0430\u0441\u0431\u0438\u043d\u0430",url:"http://github.com/rushitote",imageURL:"https://avatars.githubusercontent.com/rushitote"}],frontMatter:{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432 APISIX \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Casbin",author:"Rushikesh Tote",authorTitle:"\u0427\u043b\u0435\u043d \u041a\u0430\u0441\u0431\u0438\u043d\u0430",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},nextItem:{title:"\u042f\u043d \u041b\u0443\u043e - Google Open Source Peer Bonus \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c",permalink:"/ru/blog/2020/04/21/google-award"}},c={authorsImageUrls:[void 0]},s=[{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043c\u043e\u0434\u0435\u043b\u0438",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",level:2},{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u043d\u0430-\u043c\u0430\u0440\u0448\u0440\u0443\u0442",level:2},{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438/\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",level:2},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:2}],m={toc:s};function b(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"APISIX")," \u044d\u0442\u043e \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 \u0448\u043b\u044e\u0437 API, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 Nginx \u0438 \u0442.\u0434.. \u042d\u0442\u043e \u043f\u0440\u043e\u0435\u043a\u0442 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u043e\u0442 Apache Software Foundation. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 APISIX \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433, \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0442.\u0434. \u0418 \u0442\u043e\u0442 \u0444\u0430\u043a\u0442, \u0447\u0442\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u0432 APISIX \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b (\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438) \u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u043d\u044b\u043c."),(0,i.kt)("p",null,"\u041d\u043e \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 APISIX \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u0433\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u0412\u043e\u0442 \u0433\u0434\u0435 authz-casbin \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0447\u044c, authz-casbin - \u044d\u0442\u043e APISIX \u043f\u043b\u0430\u0433\u0438\u043d, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0449\u043d\u0443\u044e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c. ",(0,i.kt)("a",{parentName:"p",href:"https://casbin.io/"},"Casbin")," \u044d\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ACL, RBAC, ABAC. \u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0413\u043e, \u043e\u043d \u0431\u044b\u043b \u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0435 \u044f\u0437\u044b\u043a\u0438, \u0430 \u041b\u0443\u0430 \u041a\u0430\u0441\u0431\u0438\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u041b\u0443\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 Casbin. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 authz-casbin \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c, \u043a\u043e\u0433\u0434\u0430 \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u0433\u0438\u043d \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 APISIX (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4674"},"#4674"),"), \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u043b\u0438\u0441\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438. \u0410 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0435\u043b\u0438 \u043a \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f\u043c, PR (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4710"},"#4710"),") \u043d\u0430\u043a\u043e\u043d\u0435\u0446 \u0431\u044b\u043b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d."),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0431\u043b\u043e\u0433\u0435, \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d authz-casbin \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u043e\u043b\u0435\u0439 (RBAC) \u0432 APISIX."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0420\u0418\u041c\u0415\u0427\u0410\u041d\u0418\u0415"),": \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u041a\u0430\u0441\u0431\u0438\u043d \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0438 \u043d\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e."),(0,i.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043c\u043e\u0434\u0435\u043b\u0438"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"),(0,i.kt)("p",null,"\u041f\u043b\u0430\u0433\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u0440\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 - \u0442\u0435\u043c\u0430, \u043e\u0431\u044a\u0435\u043a\u0442 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. \u0417\u0434\u0435\u0441\u044c \u0442\u0435\u043c\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"[username: alice]"),". \u0417\u0430\u0442\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 - \u044d\u0442\u043e \u043f\u0443\u0442\u044c \u043a URL, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043e\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("p",null,"\u0421\u043a\u0430\u0436\u0435\u043c, \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0442\u0440\u0435\u043c\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 \u043d\u0430 \u043f\u0443\u0442\u044f\u0445 - ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/res1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"/res2"),". \u0418 \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0438\u043c\u0435\u0442\u044c \u0442\u0430\u043a\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/7BlvBNR.png",alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})),(0,i.kt)("p",null,"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"), \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0414\u0436\u0435\u043a")," \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 (",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"). \u0410 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")," , \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"p"},"res1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"res2"),"). \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0431\u0435\u0437 \u043f\u0440\u0430\u0432 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = \u0433\u0434\u0435-\u0442\u043e (\u0441\u0442\u0440. ft == allow))\n\n[matchers]\n\u043c = (g(r.sub, p.sub) || keyMatch(r.sub, p. ub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,i.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044b\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u043c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin\n")),(0,i.kt)("p",null,"\u041c\u0430\u0442\u0447\u0435\u0440 \u0438\u0437 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))"),": \u0422\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0442\u0435\u043c\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438\u043b\u0438 \u0442\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0442\u0435\u043c\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"keyMatch"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"keyMatch")," \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 Lua Casbin, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"\u0437\u0434\u0435\u0441\u044c"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": \u041e\u0431\u044a\u0435\u043a\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 (\u043f\u0443\u0442\u044c \u043a URL \u0437\u0434\u0435\u0441\u044c)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 (\u043c\u0435\u0442\u043e\u0434 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0434\u0435\u0441\u044c).")),(0,i.kt)("h2",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u043d\u0430-\u043c\u0430\u0440\u0448\u0440\u0443\u0442"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0432 \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0435 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e APISIX Admin API. \u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0433\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0443\u0442\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model. onf",\n            "policy_path": "/path/to/policy. sv",\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,i.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f - \u044d\u0442\u043e \u0438\u043c\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432 \u0442\u0435\u043c\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: alice"),", \u0432\u044b \u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},'"username": "user"'),"."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u0438/\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043c\u043e\u0434\u0435\u043b\u044c")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443")," \u043f\u043e\u043b\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = \u0433\u0434\u0435-\u0442\u043e (\u0441\u0442\u0440. f== \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c))\n\n            [matchers]\n            \u043c = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, \u0443\u0433\u043b\u0430, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430\n            g, bob, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440",\n\n            "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,i.kt)("h2",{id:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u043b\u0430\u0433\u0438\u043d\u0430-\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438/\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u041c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0445\u043e\u0442\u0435\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e, \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0432 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043b\u0430\u0433\u0438\u043d\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = \u0433\u0434\u0435-\u0442\u043e (\u0441\u0442\u0440. ft == allow))\n\n[matchers]\n\u043c = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,i.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0447\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u0445, \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0434\u043c\u0438\u043d-API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/route1/*"\n}\'\n')),(0,i.kt)("p",null,"\u042d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0432 \u043c\u0430\u0440\u0448\u0440\u0443\u0442. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u0430, \u043f\u0435\u0440\u0435\u0441\u043b\u0430\u0432 \u0437\u0430\u043f\u0440\u043e\u0441 \u043a \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u043f\u043b\u0430\u0433\u0438\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442 \u0432\u0441\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u0430."),(0,i.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0432\u0430\u0448\u0438\u0445 API. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u043b\u0430\u0433\u0438\u043d \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 API \u043c\u0430\u0440\u0448\u0440\u0443\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u0448\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0430\u0448\u0438\u0445 API, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438/\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u044b\u043c\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0438 \u0442.\u0434."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430. \u042d\u0442\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b API \u0438\u043c\u0435\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043d\u0430\u0431\u043e\u0440\u044b \u043f\u0440\u0430\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0435\u0441\u043b\u0438 \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c.")))}b.isMDXComponent=!0}}]);