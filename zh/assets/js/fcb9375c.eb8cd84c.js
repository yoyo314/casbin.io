"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[147],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},c),{},{components:n})):a.createElement(s,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7202:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],p={id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",keywords:["\u7b56\u7565\u7684\u5b58\u50a8"]},o=void 0,d={unversionedId:"policy-storage",id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/zh/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Policy\u7684\u5b58\u50a8",description:"Policy\u7684\u5b58\u50a8",keywords:["\u7b56\u7565\u7684\u5b58\u50a8"]},sidebar:"docs",previous:{title:"Model \u7684\u5b58\u50a8",permalink:"/zh/docs/model-storage"},next:{title:"\u7b56\u7565\u5b50\u96c6\u52a0\u8f7d",permalink:"/zh/docs/policy-subset-loading"}},c={},m=[{value:"\u4ece CSV \u6587\u4ef6\u8f7d\u5165\u7b56\u7565",id:"\u4ece-csv-\u6587\u4ef6\u8f7d\u5165\u7b56\u7565",level:2},{value:"\u9002\u914d\u5668 API",id:"\u9002\u914d\u5668-api",level:2},{value:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f",id:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f",level:2},{value:"\u9002\u914d\u5668\u8be6\u60c5",id:"\u9002\u914d\u5668\u8be6\u60c5",level:2}],u={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728Cassbin\uff0c\u7b56\u7565\u5b58\u50a8\u4f5c\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapters"},"\u9002\u914d\u5668")," \u6765\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u4ece-csv-\u6587\u4ef6\u8f7d\u5165\u7b56\u7565"},"\u4ece CSV \u6587\u4ef6\u8f7d\u5165\u7b56\u7565"),(0,l.kt)("p",null,"\u8fd9\u662f\u4f7f\u7528Casbin\u7684\u6700\u5e38\u89c1\u65b9\u5f0f\u3002 \u5f53\u60a8\u8bf7\u6c42Casbin\u56e2\u961f\u5e2e\u52a9\u65f6\uff0c\u5bf9\u521d\u5b66\u8005\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u5e76\u4e14\u65b9\u4fbf\u5206\u4eab\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CSV")," \u6587\u4ef6\u793a\u4f8b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"rbac_policy.csv")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u6587\u4ef6\u5305\u542b\u9017\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},",")," , \u4f60\u5e94\u8be5\u7528\u53cc\u5f15\u53f7\u628a\u5b83\u5305\u88f9, \u4f8b\u5982:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'p, alice, "data1,data2", read --correcy\np, alice, data1,data2, read --insur ("data1,data2" \u5e94\u8be5\u662f\u4e00\u4e2a\u6574\u4f53)\n')),(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u7684\u6587\u4ef6\u5305\u542b\u9017\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},",")," \u548c\u53cc\u5f15\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},'"'),", \u4f60\u5e94\u8be5\u7528\u53cc\u5f15\u53f7\u5c06\u5b57\u6bb5\u653e\u5728\u4e00\u8d77, \u5e76\u5c06\u4efb\u4f55\u5d4c\u5165\u7684\u53cc\u5f15\u53f7\u52a0\u500d\u3002"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'p, alice, data, "r.act in (""get"", ""post"")" --correct\np, alice, data, "r.act in ("get", "post")" --insur --unction (should use "" to fescape "")\n')),(0,l.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u95ee\u9898: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"issue#886"))),(0,l.kt)("h2",{id:"\u9002\u914d\u5668-api"},"\u9002\u914d\u5668 API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u8bbe\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u4e2d\u52a0\u8f7dpolicy\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u8bbe\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06policy\u89c4\u5219\u4fdd\u5b58\u81f3\u6301\u4e45\u5c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5355\u6761policy\u89c4\u5219\u81f3\u6301\u4e45\u5c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u5220\u9664\u5355\u6761policy\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u6301\u4e45\u5c42\u5220\u9664\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684policy\u89c4\u5219")))),(0,l.kt)("h2",{id:"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f"},"\u6570\u636e\u5e93\u5b58\u50a8\u683c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u60a8\u7684\u7b56\u7565\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76f8\u5e94\u7684\u6570\u636e\u5e93\u7ed3\u6784(\u6bd4\u5982 MySQL)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"ptype"),(0,l.kt)("th",{parentName:"tr",align:null},"v0"),(0,l.kt)("th",{parentName:"tr",align:null},"v1"),(0,l.kt)("th",{parentName:"tr",align:null},"v2"),(0,l.kt)("th",{parentName:"tr",align:null},"v3"),(0,l.kt)("th",{parentName:"tr",align:null},"v4"),(0,l.kt)("th",{parentName:"tr",align:null},"v5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,l.kt)("td",{parentName:"tr",align:null},"data2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bfb"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,l.kt)("td",{parentName:"tr",align:null},"data2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u5199"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"g"),(0,l.kt)("td",{parentName:"tr",align:null},"alice"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u5217\u7684\u542b\u4e49")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"id"),": \u4ec5\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u4f5c\u4e3a\u4e3b\u952e\u3002 \u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ea7\u8054\u7b56\u7565")," \u7684\u4e00\u90e8\u5206\u3002 \u5b83\u751f\u6210\u7684\u65b9\u5f0f\u53d6\u51b3\u4e8e\u7279\u5b9a\u7684\u9002\u914d\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ptype"),": \u5b83\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g2"),", \u7b49\u7b49\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"v0-v5"),": \u5217\u540d\u79f0\u6ca1\u6709\u7279\u5b9a\u7684\u610f\u4e49, \u5e76\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"policy csv")," \u4ece\u5de6\u5230\u53f3\u7684\u503c\u3002 \u5217\u6570\u53d6\u51b3\u4e8e\u60a8\u81ea\u5df1\u5b9a\u4e49\u7684\u6570\u91cf\u3002 \u7406\u8bba\u4e0a\uff0c\u53ef\u4ee5\u6709\u65e0\u9650\u7684\u5217\u6570\u3002 \u4f46\u901a\u5e38\u5728\u9002\u914d\u5668\u4e2d\u53ea\u6709 ",(0,l.kt)("strong",{parentName:"p"},"6")," \u5217\u3002 \u5982\u679c\u60a8\u89c9\u5f97\u8fd8\u4e0d\u591f\uff0c\u8bf7\u5411\u76f8\u5e94\u7684\u9002\u914d\u5668\u4ed3\u5e93\u63d0\u4ea4\u95ee\u9898\u3002"))),(0,l.kt)("h2",{id:"\u9002\u914d\u5668\u8be6\u60c5"},"\u9002\u914d\u5668\u8be6\u60c5"),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e\u9002\u914d\u5668api\u548c\u6570\u636e\u5e93\u8868\u7ed3\u6784\u8bbe\u8ba1\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u8f6c\u5230\uff1a  ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}k.isMDXComponent=!0}}]);