"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6485],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2782:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={id:"rbac-with-domains",title:"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438",description:"RBAC with domains usage",keywords:["RBAC with domains"]},p=void 0,l={unversionedId:"rbac-with-domains",id:"rbac-with-domains",title:"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438",description:"RBAC with domains usage",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/RBACWithDomains.mdx",sourceDirName:".",slug:"/rbac-with-domains",permalink:"/ru/docs/rbac-with-domains",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomains.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains",title:"RBAC \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438",description:"RBAC with domains usage",keywords:["RBAC with domains"]},sidebar:"docs",previous:{title:"RBAC \u0441 \u0443\u0437\u043e\u0440\u043e\u043c",permalink:"/ru/docs/rbac-with-pattern"},next:{title:"RBAC \u043f\u0440\u043e\u0442\u0438\u0432 RBAC96",permalink:"/ru/docs/rbac-96"}},u={},s=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u0441 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430\u043c\u0438 \u0434\u043e\u043c\u0435\u043d\u043e\u0432",id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u0440\u043e\u043b\u0438-\u0441-\u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430\u043c\u0438-\u0434\u043e\u043c\u0435\u043d\u043e\u0432",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u0440\u043e\u043b\u0438-\u0441-\u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430\u043c\u0438-\u0434\u043e\u043c\u0435\u043d\u043e\u0432"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u0441 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430\u043c\u0438 \u0434\u043e\u043c\u0435\u043d\u043e\u0432"),(0,i.kt)("p",null,"\u0420\u043e\u043b\u0438 RBAC \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0435\u043d\u0430. \u0414\u043e\u043c\u0435\u043d-\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u043e\u043b\u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442, \u0447\u0442\u043e \u0440\u043e\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0434\u043e\u043c\u0435\u043d\u0430\u0445/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u0445. \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u043a\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u0445."),(0,i.kt)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u0438 \u0441 \u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _, _\n")),(0,i.kt)("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0438\u043c\u044f \u0434\u043e\u043c\u0435\u043d\u0430/\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u0440\u0430 \u044d\u0442\u0430 \u0447\u0430\u0441\u0442\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430. \u0422\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, tenant1, data1, read\np, admin, tenant2, data2, read\n\ng, alice, admin, tenant1\ng, alice, user, tenant2\n")),(0,i.kt)("p",null,"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u04401")," \u043c\u043e\u0433\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u0430\u043d\u043d\u044b\u04451"),". \u0418 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u04401"),", \u0438 \u0438\u043c\u0435\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0440\u043e\u043b\u044c")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0440\u0435\u043d\u0434\u0430\u0442\u043e\u04402"),". \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u0430\u043d\u043d\u044b\u04351"),". \u041e\u0434\u043d\u0430\u043a\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant2"),", \u043e\u043d\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0434\u0430\u043d\u043d\u044b\u04352"),"."),(0,i.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0432 \u043c\u0430\u0442\u0447\u0435, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u043e\u043b\u044c, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf"),"."))}m.isMDXComponent=!0}}]);