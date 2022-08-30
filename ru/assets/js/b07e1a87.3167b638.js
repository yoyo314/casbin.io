"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[130],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(a),k=r,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(s,p(p({ref:e},u),{},{components:a})):n.createElement(s,p({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8161:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"policy-storage",title:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",description:"Policy Storage",keywords:["policy storage"]},p=void 0,i={unversionedId:"policy-storage",id:"policy-storage",title:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",description:"Policy Storage",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/ru/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ru",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438",description:"Policy Storage",keywords:["policy storage"]},sidebar:"docs",previous:{title:"\u041c\u043e\u0434\u0435\u043b\u044c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430",permalink:"/ru/docs/model-storage"},next:{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a",permalink:"/ru/docs/policy-subset-loading"}},o={},d=[{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0438\u0437 .CSV \u0444\u0430\u0439\u043b\u0430",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0438\u0437-csv-\u0444\u0430\u0439\u043b\u0430",level:2},{value:"API \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",id:"api-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",id:"\u0434\u0435\u0442\u0430\u043b\u0438-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0412 \u041a\u0430\u0441\u0431\u0438\u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043a\u0430\u043a ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"\u0430\u0434\u0430\u043f\u0442\u0435\u0440"),"."),(0,r.kt)("h2",{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0438\u0437-csv-\u0444\u0430\u0439\u043b\u0430"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0438\u0437 .CSV \u0444\u0430\u0439\u043b\u0430"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u041a\u0430\u0441\u0431\u0438\u043d\u0430. \u042d\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u0434\u043b\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 Casbin \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e."),(0,r.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".CSV")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"\u043f\u0440\u0438\u043c\u0435\u0440\u044b/rbac_policy.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("p",null,"::note"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u043f\u044f\u0442\u044b\u0435",(0,r.kt)("inlineCode",{parentName:"p"},",")," , \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'p, alice, "data1,data2", \u0447\u0438\u0442\u0430\u0442\u044c --correct\np, alice, data1,data2, read --incorrect ("data1,data2" \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c)\n')),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u043f\u044f\u0442\u044b\u0435",(0,r.kt)("inlineCode",{parentName:"p"},",")," \u0438 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u0435 \u0432 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438 \u0438 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'p, \u0432\u043f\u0440\u043e\u0447\u0435\u043c, \u0434\u0430\u043d\u043d\u044b\u0435, "r.act \u0432 (""get"", ""post"")" --correct\np, \u0432\u043f\u0440\u043e\u0447\u0435\u043c, \u0434\u0430\u043d\u043d\u044b\u0435, "r.act \u0432 ("get", "post")" --incorrect (\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c "" \u0434\u043b\u044f \u0432\u044b\u0445\u043e\u0434\u0430 "")\n')),(0,r.kt)("p",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"api-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"},"API \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041c\u0435\u0442\u043e\u0434"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0431\u0430\u0437\u043e\u0432\u044b\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438\u0437 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 ()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0431\u0430\u0437\u043e\u0432\u044b\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438\u0437 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0434\u0430\u043b\u0438\u0442\u044cFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u0443")))),(0,r.kt)("h2",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0444\u0430\u0439\u043b \u0432\u0430\u0448\u0435\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, data2_admin, data2, \u0447\u0442\u0435\u043d\u0438\u0435\np, data2_admin, data2, \u0437\u0430\u043f\u0438\u0441\u044c\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 (Such as MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"\u04450"),(0,r.kt)("th",{parentName:"tr",align:null},"\u04321"),(0,r.kt)("th",{parentName:"tr",align:null},"\u04322"),(0,r.kt)("th",{parentName:"tr",align:null},"v3"),(0,r.kt)("th",{parentName:"tr",align:null},"v4"),(0,r.kt)("th",{parentName:"tr",align:null},"v5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043f"),(0,r.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0434\u0430\u043d\u043d\u044b\u04352"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0447\u0438\u0442\u0430\u0442\u044c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043f"),(0,r.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0434\u0430\u043d\u043d\u044b\u04352"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043f\u0438\u0441\u0430\u0442\u044c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0433"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0430\u043b\u044c\u0446\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0430\u0434\u043c\u0438\u043d"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": \u0422\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430. \u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043a\u0430\u0437\u0438\u043d\u043e,"),". \u0422\u043e, \u043a\u0430\u043a \u043e\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": \u042d\u0442\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2"),", \u0438 \u0442.\u0434.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043d\u0435 \u0438\u043c\u0435\u044e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0435 \u0441\u0435\u0431\u044f. \u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u041d\u043e \u043e\u0431\u044b\u0447\u043d\u043e \u0432 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("strong",{parentName:"p"},"6 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432"),". \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0441 \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430."))),(0,r.kt)("h2",{id:"\u0434\u0435\u0442\u0430\u043b\u0438-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 api \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435:  ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}m.isMDXComponent=!0}}]);