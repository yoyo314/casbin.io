"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8950],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"syntax-for-models",title:"Model \u7684\u8bed\u6cd5"},p=void 0,s={unversionedId:"syntax-for-models",id:"syntax-for-models",title:"Model \u7684\u8bed\u6cd5",description:"- Model CONF \u81f3\u5c11\u5e94\u5305\u542b\u56db\u4e2a\u90e8\u5206: [requestdefinition], [policydefinition], [policy_effect], [matchers]\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/SyntaxForModels.mdx",sourceDirName:".",slug:"/syntax-for-models",permalink:"/zh/docs/syntax-for-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SyntaxForModels.mdx",tags:[],version:"current",frontMatter:{id:"syntax-for-models",title:"Model \u7684\u8bed\u6cd5"},sidebar:"docs",previous:{title:"\u652f\u6301\u7684\u6a21\u578b",permalink:"/zh/docs/supported-models"},next:{title:"Effector",permalink:"/zh/docs/effector"}},c={},d=[{value:"Request\u5b9a\u4e49",id:"request\u5b9a\u4e49",level:2},{value:"Policy\u5b9a\u4e49",id:"policy\u5b9a\u4e49",level:2},{value:"Policy effect\u5b9a\u4e49",id:"policy-effect\u5b9a\u4e49",level:2},{value:"\u5339\u914d\u5668",id:"\u5339\u914d\u5668",level:2},{value:"Multiple sections type",id:"multiple-sections-type",level:2},{value:"\u7279\u6b8a\u8bed\u6cd5",id:"\u7279\u6b8a\u8bed\u6cd5",level:3},{value:"\u8868\u8fbe\u5f0f\u8bc4\u4f30\u5668",id:"\u8868\u8fbe\u5f0f\u8bc4\u4f30\u5668",level:3}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},u=m("Tabs"),f=m("TabItem"),k={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Model CONF \u81f3\u5c11\u5e94\u5305\u542b\u56db\u4e2a\u90e8\u5206: ",(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition], [policy_definition], [policy_effect], [matchers]"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c model \u4f7f\u7528 RBAC, \u8fd8\u9700\u8981\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"[role_definition]"),"\u90e8\u5206\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A model CONF can contain comments. The comments start with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," will comment the rest of the line."))),(0,i.kt)("h2",{id:"request\u5b9a\u4e49"},"Request\u5b9a\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition]")," is the definition for the access request. It defines the arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"e.Enforce(...)")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sub, obj, act")," \u8868\u793a\u7ecf\u5178\u4e09\u5143\u7ec4: \u8bbf\u95ee\u5b9e\u4f53 (Subject)\uff0c\u8bbf\u95ee\u8d44\u6e90 (Object) \u548c\u8bbf\u95ee\u65b9\u6cd5 (Action)\u3002 \u4f46\u662f, \u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684\u8bf7\u6c42\u8868\u5355, \u5982\u679c\u4e0d\u9700\u8981\u6307\u5b9a\u7279\u5b9a\u8d44\u6e90\uff0c\u5219\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"sub\u3001act")," \uff0c\u6216\u8005\u5982\u679c\u6709\u4e24\u4e2a\u8bbf\u95ee\u5b9e\u4f53, \u5219\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"sub\u3001sub2\u3001obj\u3001act"),"\u3002"),(0,i.kt)("h2",{id:"policy\u5b9a\u4e49"},"Policy\u5b9a\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_definition]")," is the definition for the policy. It defines the meaning of the policy. For example, we have the following model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = sub, obj, act\np2 = sub, act\n")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u662f\u6211\u4eec\u5bf9policy\u89c4\u5219\u7684\u5177\u4f53\u63cf\u8ff0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, data1, read\np2, bob, write-all-objects\n")),(0,i.kt)("p",null,"policy\u90e8\u5206\u7684\u6bcf\u4e00\u884c\u79f0\u4e4b\u4e3a\u4e00\u4e2a\u7b56\u7565\u89c4\u5219\uff0c \u6bcf\u6761\u7b56\u7565\u89c4\u5219\u901a\u5e38\u4ee5\u5f62\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"policy type"),"\u5f00\u5934\u3002 \u5982\u679c\u5b58\u5728\u591a\u4e2apolicy\u5b9a\u4e49\uff0c\u90a3\u4e48\u6211\u4eec\u4f1a\u6839\u636e\u524d\u6587\u63d0\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"policy type"),"\u4e0e\u5177\u4f53\u7684\u67d0\u6761\u5b9a\u4e49\u5339\u914d\u3002 \u4e0a\u9762\u7684policy\u7684\u7ed1\u5b9a\u5173\u7cfb\u5c06\u4f1a\u5728matcher\u4e2d\u4f7f\u7528\uff0c \u7f57\u5217\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(alice, data1, read) -> (p.sub, p.obj, p.act)\n(bob, write-all-objects) -> (p2.sub, p2.act)\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The elements in a policy rule are always regarded as",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". If you have any question about this, please see the discussion at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/113"},"https://github.com/casbin/casbin/issues/113")))),(0,i.kt)("h2",{id:"policy-effect\u5b9a\u4e49"},"Policy effect\u5b9a\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_effect]")," \u90e8\u5206\u662f\u5bf9policy\u751f\u6548\u8303\u56f4\u7684\u5b9a\u4e49\uff0c \u539f\u8bed\u5b9a\u4e49\u4e86\u5f53\u591a\u4e2apolicy rule\u540c\u65f6\u5339\u914d\u8bbf\u95ee\u8bf7\u6c42request\u65f6,\u8be5\u5982\u4f55\u5bf9\u591a\u4e2a\u51b3\u7b56\u7ed3\u679c\u8fdb\u884c\u96c6\u6210\u4ee5\u5b9e\u73b0\u7edf\u4e00\u51b3\u7b56\u3002 \u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u4e00\u4e2a\u53ea\u6709\u4e00\u6761\u89c4\u5219\u751f\u6548\uff0c\u5176\u4f59\u90fd\u88ab\u62d2\u7edd\u7684\u60c5\u51b5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow))\n")),(0,i.kt)("p",null,"\u8be5Effect\u539f\u8bed\u8868\u793a\u5982\u679c\u5b58\u5728\u4efb\u610f\u4e00\u4e2a\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\u7684\u5339\u914d\u89c4\u5219\uff0c\u5219\u6700\u7ec8\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\uff0c\u5373allow-override\u3002 \u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"p.eft")," \u8868\u793a\u7b56\u7565\u89c4\u5219\u7684\u51b3\u7b56\u7ed3\u679c\uff0c\u53ef\u4ee5\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," \u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),"\uff0c\u5f53\u4e0d\u6307\u5b9a\u89c4\u5219\u7684\u51b3\u7b56\u7ed3\u679c\u65f6,\u53d6\u9ed8\u8ba4\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," \u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\uff0cpolicy\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"p.eft"),"\u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\uff0c \u56e0\u6b64\u524d\u9762\u4f8b\u5b50\u4e2d\u90fd\u4f7f\u7528\u4e86\u8fd9\u4e2a\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("p",null,"\u8fd9\u662f\u53e6\u4e00\u4e2apolicy effect\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"\u8be5Effect\u539f\u8bed\u8868\u793a\u4e0d\u5b58\u5728\u4efb\u4f55\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),"\u7684\u5339\u914d\u89c4\u5219\uff0c\u5219\u6700\u7ec8\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," \uff0c\u5373deny-override\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"some")," \u91cf\u8bcd\u5224\u65ad\u662f\u5426\u5b58\u5728\u4e00\u6761\u7b56\u7565\u89c4\u5219\u6ee1\u8db3\u5339\u914d\u5668\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," \u91cf\u8bcd\u5219\u5224\u65ad\u662f\u5426\u6240\u6709\u7684\u7b56\u7565\u89c4\u5219\u90fd\u6ee1\u8db3\u5339\u914d\u5668 (\u6b64\u5904\u672a\u4f7f\u7528)\u3002 policy effect\u8fd8\u53ef\u4ee5\u5229\u7528\u903b\u8f91\u8fd0\u7b97\u7b26\u8fdb\u884c\u8fde\u63a5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n")),(0,i.kt)("p",null,"\u8be5Effect\u539f\u8bed\u8868\u793a\u5f53\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\u7684\u5339\u914d\u89c4\u5219\uff0c\u4e14\u4e0d\u5b58\u5728\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),"\u7684\u5339\u914d\u89c4\u5219\u65f6\uff0c\u5219\u6700\u7ec8\u51b3\u7b56\u7ed3\u679c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\u3002 \u8fd9\u65f6",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),"\u6388\u6743\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),"\u6388\u6743\u540c\u65f6\u5b58\u5728\uff0c\u4f46\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),"\u4f18\u5148\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although we designed the syntax of policy effect as above, the current implementations only use hard-coded policy effect, as we found there's no much need for that sort of flexibility. \u76ee\u524d\u4e3a\u6b62\u4f60\u5fc5\u987b\u4f7f\u7528\u5185\u7f6e\u7684 policy effects\uff0c\u4e0d\u80fd\u81ea\u5b9a\u4e49\u3002"))),(0,i.kt)("p",null,"\u652f\u6301\u7684 policy effects \u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Policy effect\u5b9a\u4e49"),(0,i.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"),(0,i.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow))"),(0,i.kt)("td",{parentName:"tr",align:null},"allow-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"ACL, RBAC, etc."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"!some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"deny-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\u62d2\u7edd\u6539\u5199"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow)) && !some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"allow-and-deny"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\u540c\u610f\u4e0e\u62d2\u7edd"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"priority(p.eft) ","|","|"," deny"),(0,i.kt)("td",{parentName:"tr",align:null},"priority"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\u4f18\u5148\u7ea7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subjectPriority(p.eft)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u89d2\u8272\u7684\u4f18\u5148\u7ea7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"\u4e3b\u9898\u4f18\u5148\u7ea7"))))),(0,i.kt)("h2",{id:"\u5339\u914d\u5668"},"\u5339\u914d\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]")," is the definition for policy matchers. The matchers are expressions. It defines how the policy rules are evaluated against the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u8fd9\u4e2a\u5339\u914d\u5668\u662f\u6700\u7b80\u5355\u7684\uff0c\u5b83\u8868\u793a\u8bf7\u6c42\u7684\u4e09\u5143\u7ec4\uff1a\u4e3b\u9898\u3001\u5bf9\u8c61\u3001\u884c\u4e3a\u90fd\u5e94\u8be5\u5339\u914d\u7b56\u7565\u89c4\u5219\u4e2d\u7684\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("p",null,"\u5728\u5339\u914d\u5668\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b97\u672f\u8fd0\u7b97\u7b26\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"+, -, * , / "),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u903b\u8f91\u8fd0\u7b97\u7b26\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"&&\uff0c||\uff0c\uff01"),"\u3002"),(0,i.kt)("h2",{id:"multiple-sections-type"},"Multiple sections type"),(0,i.kt)("p",null,"If you need multiple policy definitions or multiple matcher, you can use like ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m2"),". In fact, all of the above four sections can use multiple types and the syntax is ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"+number, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"r2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e2"),". By default these four sections should correspond one to one. Such as your ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," will only use matcher ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," to match policies ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"."),(0,i.kt)("p",null,"You can pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," as the first parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce")," method to specify the types, the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," is like this"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'EnforceContext{"r2","p2","e2","m2"}\ntype EnforceContext struct {\n    RType string\n    PType string\n    EType string\n    MType string\n}\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const enforceContext = new EnforceContext('r2', 'p2', 'e2', 'm2');\nclass EnforceContext {\n  constructor(rType, pType, eType, mType) {\n    this.pType = pType;\n    this.eType = eType;\n    this.mType = mType;\n    this.rType = rType;\n  }\n}\n"))),(0,i.kt)(f,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'EnforceContext enforceContext = new EnforceContext("2");\npublic class EnforceContext {\n    private String pType;\n    private String eType;\n    private String mType;\n    private String rType;\n    public EnforceContext(String suffix) {\n      this.pType = "p" + suffix;\n      this.eType = "e" + suffix;\n      this.mType = "m" + suffix;\n      this.rType = "r" + suffix;\n    }\n}\n')))),(0,i.kt)("p",null,"Example usage, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_model.conf"},"model")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_policy.csv"},"policy"),", the request is as follows"),(0,i.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nenforceContext := NewEnforceContext("2")\n// You can also specify a certain type individually\nenforceContext.EType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, struct{ Age int }{Age: 70}, "/data1", "read")     //false\ne.Enforce(enforceContext, struct{ Age int }{Age: 30}, "/data1", "read")     //true\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nconst enforceContext = new NewEnforceContext(\'2\');\n// You can also specify a certain type individually\nenforceContext.eType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, {Age: 70}, "/data1", "read")      //false\ne.Enforce(enforceContext, {Age: 30}, "/data1", "read")      //true\n'))),(0,i.kt)(f,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2, p2, etc..\nEnforceContext enforceContext = new EnforceContext("2");\n// You can also specify a certain type individually\nenforceContext.seteType("e");\n// Don\'t pass in EnforceContext, the default is r, p, e, m\ne.enforce("alice", "data2", "read");  // true\n// Pass in EnforceContext\n// TestEvalRule is located in https://github.com/casbin/jcasbin/blob/master/src/test/java/org/casbin/jcasbin/main/AbacAPIUnitTest.java#L56\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 70), "/data1", "read"); // false\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 30), "/data1", "read"); // true\n')))),(0,i.kt)("h3",{id:"\u7279\u6b8a\u8bed\u6cd5"},"\u7279\u6b8a\u8bed\u6cd5"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),", \u8fd9\u662f\u552f\u4e00\u4e00\u4e2a\u6709\u6587\u672c\u540d\u79f0\u7684\u64cd\u4f5c\u7b26 \u6b64\u64cd\u4f5c\u7b26\u68c0\u67e5\u53f3\u4fa7\u6570\u7ec4\u4ee5\u67e5\u770b\u5b83\u662f\u5426\u5305\u542b\u7b49\u4e8e\u5de6\u4fa7\u6570\u503c\u7684\u503c\u3002 \u76f8\u7b49\u662f\u7531\u4f7f\u7528 == \u8fd0\u7b97\u7b26\u51b3\u5b9a\u7684\uff0c\u8fd9\u4e2a\u5e93\u4e0d\u68c0\u67e5\u503c\u4e4b\u95f4\u7684\u7c7b\u578b\u3002 \u4efb\u4f55\u4e24\u4e2a\u503c\u5728\u6295\u5c04\u5230 interface{} \u65f6\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528 == \u68c0\u67e5\u76f8\u7b49\uff0c\u5b83\u4eec\u662f\u5426\u6309\u9884\u671f\u7684\u90a3\u6837\u8d77\u4f5c\u7528\u3002 \u8bf7\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u7684\u53c2\u6570\uff0c\u4f46\u5b83\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"[]interface{}"),"\u3002"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf"},"rbac_model_matcher_using_in_op"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf"},"keyget2_model")," \u4ee5\u53ca ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf"},"keyget_model")),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj\n...\n[matchers]\nm = r.sub.Name in (r.obj.Admins)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})\n')),(0,i.kt)("h3",{id:"\u8868\u8fbe\u5f0f\u8bc4\u4f30\u5668"},"\u8868\u8fbe\u5f0f\u8bc4\u4f30\u5668"),(0,i.kt)("p",null,"Casbin\u7684\u5339\u914d\u5668\u8fd0\u7b97\u662f\u7531\u4e0d\u540c\u8bed\u8a00\u7684\u8868\u8fbe\u5f0f\u8fd0\u7b97\u5668\u5b9e\u73b0\u7684\u3002 Casbin\u6574\u5408\u4e86\u4ed6\u4eec\u7684\u80fd\u529b\u4ee5\u63d0\u4f9b\u7edf\u4e00\u7684PERM\u8bed\u8a00\u3002 \u9664\u4e86\u8fd9\u91cc\u63d0\u4f9b\u7684\u6240\u6709\u6a21\u578b\u8bed\u6cd5\u5916\uff0c\u90a3\u4e9b\u8868\u8fbe\u5f0f\u8fd0\u7b97\u5668\u53ef\u80fd\u63d0\u4f9b\u989d\u5916\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u80fd\u4e0d\u4f1a\u88ab\u53e6\u4e00\u79cd\u8bed\u8a00\u6216\u5b9e\u73b0\u6240\u652f\u6301\u3002 \u8bf7\u81ea\u5df1\u627f\u62c5\u4f7f\u7528\u7684\u540e\u679c\u3002"),(0,i.kt)("p",null,"\u4e0d\u540c\u8bed\u8a00\u7684Casbin\u5b9e\u73b0\u4f7f\u7528\u7684\u8868\u8fbe\u5f0f\u8fd0\u7b97\u5668\u6709\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b9e\u73b0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bed\u8a00"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f\u8fd0\u7b97\u5668"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Golang"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knetic/govaluate"},"https://github.com/Knetic/govaluate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/killme2008/aviator"},"https://github.com/killme2008/aviator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/donmccurdy/expression-eval"},"https://github.com/donmccurdy/expression-eval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PHP-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"PHP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/symfony/expression-language"},"https://github.com/symfony/expression-language"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PyCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/danthedeckie/simpleeval"},"https://github.com/danthedeckie/simpleeval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin.NET"),(0,i.kt)("td",{parentName:"tr",align:null},"C#"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/davideicardi/DynamicExpresso"},"https://github.com/davideicardi/DynamicExpresso"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin4D"),(0,i.kt)("td",{parentName:"tr",align:null},"Delphi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Conce/Third%20Party/TExpressionParser"},"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Conce/Third%20Party/TExpressionParser"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-rs"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jonathandturner/rhai"},"https://github.com/jonathandturner/rhai"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-cpp"),(0,i.kt)("td",{parentName:"tr",align:null},"C++"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ArashPartow/exprtk"},"https://github.com/ArashPartow/exprtk"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter performance issue about Casbin, it's probably caused by the low efficiency of the expression evaluator. \u60a8\u53ef\u4ee5\u76f4\u63a5\u53d1\u9001issue\u5230Casbin\u6216\u8868\u8fbe\u5f0f\u8fd0\u7b97\u5668\u7684\u5f00\u53d1\u56e2\u961f\u4ee5\u83b7\u5f97\u63d0\u9ad8\u6548\u7387\u7684\u5efa\u8bae\u3002 See ",(0,i.kt)("a",{parentName:"p",href:"/docs/benchmark"},"Benchmarks")," section for details."))))}h.isMDXComponent=!0}}]);