"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5077],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],p={id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},o=void 0,c={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC\u548cRBAC96",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/zh/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},sidebar:"docs",previous:{title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236",permalink:"/zh/docs/rbac-with-domains"},next:{title:"ABAC",permalink:"/zh/docs/abac"}},m={},s=[{value:"Casbin RBAC\u548cRBAC96",id:"casbin-rbac\u548crbac96",level:2},{value:"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u5dee\u5f02",id:"casbin-rbac\u548crbac96\u4e4b\u95f4\u7684\u5dee\u5f02",level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"casbin-rbac\u548crbac96"},"Casbin RBAC\u548cRBAC96"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4f1a\u6bd4\u8f83Casbin RBAC\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"\u7684\u533a\u522b\u3002"),(0,i.kt)("p",null,"Casbin RBAC\u652f\u6301RBA96\u7684\u51e0\u4e4e\u6240\u6709\u7279\u70b9\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u65b0\u7684\u7279\u70b9\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"RBAC\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7ea7\u522b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u652f\u6301"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0\u662fRBAC96\u7684\u57fa\u672c\u7248\u672c\u3002 \u5b83\u6f84\u6e05\u4e86\u4f7f\u7528\u8005\u3001\u89d2\u8272\u548c\u6743\u9650\u4e4b\u95f4\u7684\u5173\u7cfb\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u652f\u6301"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin \u7684 RBAC \u652f\u6301 RBAC1 \u7684\u89d2\u8272\u5c42\u6b21\u7ed3\u6784\u529f\u80fd\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"td"},"alice"),"\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"td"},"role1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"role1"),"\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"td"},"role2"),"\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," \u4e5f\u5c06\u62e5\u6709 ",(0,i.kt)("inlineCode",{parentName:"td"},"role2")," \u5e76\u7ee7\u627f\u5176\u6743\u9650\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u76f8\u4e92\u4e13\u7528\u5904\u7406(",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u793a\u4f8b"),")\uff0c\u4f46\u91cf\u5316\u9650\u5236\u4e0d\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2\u5728RBAC0\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e86\u7ea6\u675f \u56e0\u6b64\uff0cRBAC2\u53ef\u4ee5\u5904\u7406\u653f\u7b56\u4e2d\u76f8\u4e92\u6392\u65a5\u7684\u95ee\u9898\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,i.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u76f8\u4e92\u4e13\u7528\u5904\u7406(",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u793a\u4f8b"),")\uff0c\u4f46\u91cf\u5316\u9650\u5236\u4e0d\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3\u662fRBAC1\u548cRBAC2\u7684\u7ec4\u5408\u3002 RBAC3\u652f\u6301RBAC1\u548cRBAC2\u4e2d\u7684\u89d2\u8272\u7b49\u7ea7\u548c\u5236\u7ea6\u56e0\u7d20\u3002")))),(0,i.kt)("h2",{id:"casbin-rbac\u548crbac96\u4e4b\u95f4\u7684\u5dee\u5f02"},"Casbin RBAC\u548cRBAC96\u4e4b\u95f4\u7684\u5dee\u5f02"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728Casbin\uff0c\u7528\u6237\u548c\u89d2\u8272\u4e4b\u95f4\u7684\u533a\u5206\u4e0d\u660e\u786e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728Casbin\u4e2d\uff0c\u7528\u6237\u548c\u89d2\u8272\u90fd\u88ab\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002 \u5982\u679c\u60a8\u5199\u4e86\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u7684\u7b56\u7565\u6587\u4ef6\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,i.kt)("p",{parentName:"li"},"\u5e76\u8c03\u7528\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," \u5c31\u50cf\u8fd9\u6837(",(0,i.kt)("inlineCode",{parentName:"p"},"e")," \u662f\u4e00\u4e2aCasbin Enforcer\u7684\u5b9e\u4f8b)\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\u60a8\u5c06\u5f97\u5230\u4e0b\u9762\u7684\u8fd4\u56de\u503c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice bob]\n")),(0,i.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u5728Casbin\uff0c\u4e3b\u4f53\u5305\u62ec\u7528\u6237\u548c\u89d2\u8272\u3002"),(0,i.kt)("p",{parentName:"li"},"\u7136\u800c\uff0c\u5982\u679c\u4f60\u8c03\u7528\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAlloles()")," \u5c31\u50cf\u8fd9\u6837\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\u60a8\u5c06\u5f97\u5230\u4e0b\u9762\u7684\u8fd4\u56de\u503c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,i.kt)("p",{parentName:"li"},"\u73b0\u5728\u4f60\u77e5\u9053\u5361\u65af\u5bbe\u7684\u7528\u6237\u548c\u89d2\u8272\u4e4b\u95f4\u6709\u533a\u522b\uff0c\u4f46\u5e76\u4e0d\u50cfRBAC96\u90a3\u6837\u5c16\u9510\u3002 \u5f53\u7136\uff0c\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u653f\u7b56\u6dfb\u52a0\u4e00\u4e9b\u524d\u7f00\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"user::alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"role::admin")," \u4ee5\u6f84\u6e05\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC\u6bd4RBAC96\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u6743\u9650"),(0,i.kt)("p",{parentName:"li"},"RBAC96\u4e2d\u53ea\u5b9a\u4e49\u4e867\u4e2a\u6743\u9650\uff1a\u8bfb\u3001\u5199\u3001\u6dfb\u52a0\u3001\u6267\u884c\u3001\u4fe1\u8d37\u3001\u501f\u8bb0\u3001\u67e5\u8be2\u3002"),(0,i.kt)("p",{parentName:"li"},"\u7136\u800c\uff0c\u5728Casbin\u4e2d\uff0c\u6211\u4eec\u5c06\u6743\u9650\u89c6\u4e3a\u5b57\u7b26\u4e32\u3002 \u8fd9\u79cd\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e9b\u66f4\u9002\u5408\u60a8\u7684\u6743\u9650\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC\u652f\u6301\u57df"),(0,i.kt)("p",{parentName:"li"},"\u5728 Casbin \u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u57df\u540d\u8fdb\u884c\u6388\u6743\u3002 \u6b64\u529f\u80fd\u4f7f\u60a8\u7684\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u66f4\u52a0\u7075\u6d3b\u3002"))))}d.isMDXComponent=!0}}]);