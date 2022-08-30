"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[811],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"]},l=void 0,o={unversionedId:"rbac",id:"rbac",title:"RBAC",description:"Casbin RBAC usage",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/RBAC.mdx",sourceDirName:".",slug:"/rbac",permalink:"/ru/docs/rbac",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"rbac",title:"RBAC",description:"Casbin RBAC usage",keywords:["RBAC","role definition","role hierarchy"]},sidebar:"docs",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f",permalink:"/ru/docs/function"},next:{title:"RBAC \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",permalink:"/ru/docs/rbac-with-pattern"}},p={},c=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438",id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u0440\u043e\u043b\u0438",level:2},{value:"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u044f \u0440\u043e\u043b\u0435\u0439",id:"\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044f-\u0440\u043e\u043b\u0435\u0439",level:2},{value:"\u041a\u0430\u043a \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u044c \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?",id:"\u043a\u0430\u043a-\u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c-\u0440\u043e\u043b\u044c-\u043e\u0442-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",level:2},{value:"\u041a\u0430\u043a \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u044f\u0432\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0438\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f?",id:"\u043a\u0430\u043a-\u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c-\u043d\u0435\u044f\u0432\u043d\u044b\u0435-\u0440\u043e\u043b\u0438-\u0438\u043b\u0438-\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0432 RBAC",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439-\u0448\u0430\u0431\u043b\u043e\u043d-\u0432-rbac",level:2},{value:"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",id:"\u0440\u043e\u043b\u044c-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u0440\u043e\u043b\u0438"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[role_definition]")," - \u044d\u0442\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u043f\u0440\u0430\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u043e\u043b\u0438 RBAC. Casbin \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c RBAC, \u043d\u0430\u043f\u0440. \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0440\u043e\u043b\u0438 \u0438 \u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0442\u044c \u0440\u043e\u043b\u0438 \u0438 \u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u043c. \u042d\u0442\u0438 \u0434\u0432\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b RBAC \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043c\u0435\u0448\u0430\u0442\u044c \u044d\u0442\u043e\u043c\u0443."),(0,r.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0440\u043e\u043b\u0438 RBAC \u0432 \u043c\u043e\u0434\u0435\u043b\u0438, \u0442\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _\ng2 = _, _\n")),(0,r.kt)("p",null,"\u0412\u044b\u0448\u0435\u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0433")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 RBAC \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 RBAC. ",(0,r.kt)("inlineCode",{parentName:"p"},"_, _")," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u0434\u0432\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u041a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439, \u0432\u044b \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u043e\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439.  \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"g2")," , \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0440\u043e\u043b\u0438 (\u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u044b) \u043a\u0430\u043a \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"rbac_model.conf")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_resource_roles_model.conf"},"rbac_model_with_resource_roles.conf"),"."),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u0445\u0440\u0430\u043d\u0438\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 (\u0438\u043b\u0438 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0440\u043e\u043b\u0438 \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445) \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, data2_admin, data2, read\ng, alice, data2_admin\n")),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," inherits/\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u043b\u0435\u043d\u043e\u043c \u0440\u043e\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"data2_admin"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c \u0438\u043b\u0438 \u0440\u043e\u043b\u044c\u044e. \u041a\u0430\u0441\u0431\u0438\u043d \u043f\u0440\u0438\u0437\u043d\u0430\u0435\u0442 \u0435\u0433\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,r.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0432 \u043c\u0430\u0442\u0447\u0435, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u043e\u043b\u044c, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0447\u0430\u0441\u0442\u044c")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0440\u043e\u043b\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u0434")," \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435."),(0,r.kt)("p",null,"::note"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041a\u0430\u0441\u0431\u0438\u043d \u0445\u0440\u0430\u043d\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,r.kt)("li",{parentName:"ol"},"\u041a\u0430\u0441\u0431\u0438\u043d \u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0438\u043b\u0438 \u0440\u043e\u043b\u044c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u043e\u043b\u044c\u044e. \u042d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u043f\u0443\u0442\u0435\u043c \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."),(0,r.kt)("li",{parentName:"ol"},"\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0440\u043e\u043b\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b RBAC, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u041a\u0430\u0441\u0431\u0438\u043d \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0440\u043e\u043b\u0438 \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0438, \u0438 \u0434\u043b\u044f \u041a\u0430\u0441\u0431\u0438\u043d\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0437\u043d\u0430\u0442\u044c, \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u043b\u0438 \u0432\u044b ",(0,r.kt)("inlineCode",{parentName:"li"},"alice")," \u0438\u043b\u0438 \u0440\u043e\u043b\u044c ",(0,r.kt)("inlineCode",{parentName:"li"},"alice"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("inlineCode",{parentName:"li"},"role_alice"),"."),(0,r.kt)("li",{parentName:"ol"},"\u0415\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),", \u0437\u0430\u0442\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),". \u0421\u0435\u0439\u0447\u0430\u0441 \u044d\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0438\u0442\u043d\u043e\u0441\u0442\u044c \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u0430.")),(0,r.kt)("p",null,":::"),(0,r.kt)("admonition",{title:"Token name convention",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Conventionally subject token name in policy definition is ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," and placed in the beginning. Now Golang Casbin supports customized token name & place. If the subject token name is ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", the subject token can be placed at an arbitrary place and no extra action needs.  If the subject token name is not ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"constant.SubjectIndex")," should be called after the enforcer is initialized regardless of its position."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# `subject` here for sub\n[policy_definition]\np =  obj, act, subject\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.SetFieldIndex("p", constant.SubjectIndex, 2) // index start from 0\nok, err := e.DeleteUser("alice") // without SetFieldIndex, it will raise an error\n'))),(0,r.kt)("h2",{id:"\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044f-\u0440\u043e\u043b\u0435\u0439"},"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u044f \u0440\u043e\u043b\u0435\u0439"),(0,r.kt)("p",null,"RBAC \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e \u0440\u043e\u043b\u0435\u0439 RBAC1, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0438\u043c\u0435\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c1")," \u0438\u043c\u0435\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c2"),", \u0437\u0430\u0442\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c2")," \u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043f\u0440\u0430\u0432\u0430."),(0,r.kt)("p",null,"\u0412\u043e\u0442 \u043f\u043e\u043d\u044f\u0442\u0438\u0435 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 - 2. \u0414\u043b\u044f \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u043e\u043b\u0435\u0432\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 10. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," , \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e 10 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0440\u043e\u043b\u0435\u0439."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// NewRoleManager \u2014 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\n// \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e RoleManager.\nfunc NewRoleManager(maxHierarchyLevel int) rbac.RoleManager {\n    rm := RoleManager{}\n    rm.allRoles = &sync. ap{}\n    maxHierarchyLevel = maxHierarchyLevel\n    rm. asPattern = false\n\n    return &rm\n}\n")),(0,r.kt)("h2",{id:"\u043a\u0430\u043a-\u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c-\u0440\u043e\u043b\u044c-\u043e\u0442-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},"\u041a\u0430\u043a \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u044c \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?"),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u043d\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442 \u0440\u043e\u043b\u044c \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0432\u043e\u0435\u0439 RBAC. \u0412\u0441\u0435 \u043e\u043d\u0438 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0439 RBAC (\u0440\u043e\u043b\u044c \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0447\u043b\u0435\u043d\u043e\u043c \u0434\u0440\u0443\u0433\u043e\u0439 \u0440\u043e\u043b\u0438). \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllSubjects()")," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"e.GetAllRoles()")," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0440\u043e\u043b\u0435\u0439. \u041e\u043d\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u044f\u044e\u0442 \u0432\u0441\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"U")," \u0438 \u0432\u0441\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e. ",(0,r.kt)("inlineCode",{parentName:"p"},"g, u, r")," \u043f\u0440\u0430\u0432\u0438\u043b\u0430."),(0,r.kt)("p",null,"\u041d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043c\u043d\u043e\u0433\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0439 RBAC (\u0441 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0435\u0439 \u0440\u043e\u043b\u0435\u0439), \u0438 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0438\u043c\u044f (\u0441\u0442\u0440\u043e\u043a\u0430) \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0438\u043b\u0438 \u0440\u043e\u043b\u044c\u044e, \u0438\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438 \u0440\u043e\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u0438\u043c\u0435\u043d\u0435\u043c. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u043a \u0440\u043e\u043b\u0438, \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c::admin")," \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u0432 Casbin. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u044d\u0442\u043e \u0440\u043e\u043b\u044c\u044e, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044f \u044d\u0442\u043e\u0442 \u043f\u0440\u0435\u0444\u0438\u043a\u0441."),(0,r.kt)("h2",{id:"\u043a\u0430\u043a-\u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c-\u043d\u0435\u044f\u0432\u043d\u044b\u0435-\u0440\u043e\u043b\u0438-\u0438\u043b\u0438-\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f"},"\u041a\u0430\u043a \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u044f\u0432\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0438\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f?"),(0,r.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e RBAC \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0440\u044f\u043c\u043e\u0433\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0445 \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u043c\u044b \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0442\u0430\u043a\u043e\u0439 \u0442\u0438\u043f \u0437\u0430\u0434\u0430\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043d\u0435\u044f\u0432\u043d\u044b\u043c"),". \u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u044f\u0432\u043d\u044b\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 2 API: ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitRolesForUser()")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetImplicitPermissionsForUser()")," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPermissionsForUser()"),". \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/137"},"\u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435 GitHub"),"."),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439-\u0448\u0430\u0431\u043b\u043e\u043d-\u0432-rbac"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0432 RBAC"),(0,r.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c")),(0,r.kt)("h2",{id:"\u0440\u043e\u043b\u044c-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"},"\u0420\u043e\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430"),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.kt)("a",{parentName:"p",href:"/docs/role-managers"},"Role Managers"),"."))}d.isMDXComponent=!0}}]);