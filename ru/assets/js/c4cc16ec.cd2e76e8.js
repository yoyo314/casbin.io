"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3833],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},l=void 0,s={unversionedId:"enforcers",id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/ru/docs/enforcers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Enforcers.mdx",tags:[],version:"current",frontMatter:{id:"enforcers",title:"Enforcers",description:"Enforcer is the main structure in Casbin, It acts as an interface for users to make operations on policy rules and models",keywords:["enforcer","supported enforcers"]},sidebar:"docs",previous:{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a",permalink:"/ru/docs/policy-subset-loading"},next:{title:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u044b",permalink:"/ru/docs/adapters"}},p={},d=[{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0438\u043b\u043e\u0432\u0438\u043a\u0438",id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u0441\u0438\u043b\u043e\u0432\u0438\u043a\u0438",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=u("Tabs"),m=u("TabItem"),b={toc:d};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Enforcer")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0432 \u041a\u0430\u0441\u0431\u0438\u043d\u0435. \u041e\u043d \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c."),(0,o.kt)("h2",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u0441\u0438\u043b\u043e\u0432\u0438\u043a\u0438"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0438\u043b\u043e\u0432\u0438\u043a\u0438"),(0,o.kt)("p",null,"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0438\u043b\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u041a\u0430\u0441\u0431\u0438\u043d\u0430 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0438\u0436\u0435. Any 3rd-party contribution on a new enforcer is welcomed, please inform us and we will put it in this list:)"),(0,o.kt)(f,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Enforcer"),(0,o.kt)("th",{parentName:"tr",align:null},"\u0410\u0432\u0442\u043e\u0440"),(0,o.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"Enforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 Casbin \u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s API \u043d\u0430 ",(0,o.kt)("a",{parentName:"td",href:"/docs/management-api"},"\u0437\u0434\u0435\u0441\u044c"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),". \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438 \u043a\u0430\u0440\u0442\u043e\u0439 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0430\u0439\u043d\u0438\u043a\u043e\u0432 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u043f\u0438\u0448\u0443\u0449\u0435\u0439 \u043f\u043e\u0447\u0442\u044b \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0442\u043e\u043a\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"td"},"EnableCache")," \u0434\u043b\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e). ",(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer"),"API \u044d\u0442\u043e \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e \u0438 ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"s.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"DistributedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u0445. \u041e\u043d\u043e \u043e\u0431\u0435\u0440\u0442\u044b\u0432\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," \u0434\u043b\u044f \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430. \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0440\u0430\u0441\u043f\u0430\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 ",(0,o.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"\u0437\u0434\u0435\u0441\u044c"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f. \u042d\u0442\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u043d\u0438\u0442\u044c.")))))))}k.isMDXComponent=!0}}]);