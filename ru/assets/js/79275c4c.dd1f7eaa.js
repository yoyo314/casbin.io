"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),b=a,m=s["".concat(p,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"priority-model",title:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c"},p=void 0,c={unversionedId:"priority-model",id:"priority-model",title:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",description:"\u041a\u0430\u0441\u0431\u0438\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/ru/docs/priority-model",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PriorityModel.mdx",tags:[],version:"current",frontMatter:{id:"priority-model",title:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c"},sidebar:"docs",previous:{title:"\u0410\u0414\u0410\u0422",permalink:"/ru/docs/abac"},next:{title:"\u0421\u0443\u043f\u0435\u0440 \u0430\u0434\u043c\u0438\u043d",permalink:"/ru/docs/superadmin"}},u={},d=[{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u043c \u043d\u0435\u044f\u0432\u043a\u043e\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u043c-\u043d\u0435\u044f\u0432\u043a\u043e\u0439",level:2},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c",level:2},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u043e\u043b\u0438 \u0438 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0440\u043e\u043b\u0438-\u0438-\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",level:2}],s={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c."),(0,o.kt)("h2",{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u043c-\u043d\u0435\u044f\u0432\u043a\u043e\u0439"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u043c \u043d\u0435\u044f\u0432\u043a\u043e\u0439"),(0,o.kt)("p",null,"\u042d\u0442\u043e \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e, \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442, \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0440\u0430\u043d\u044c\u0448\u0435, \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442."),(0,o.kt)("p",null,"\u043c\u043e\u0434\u0435\u043b\u044c.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priority(p.eft) || \u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c\n")),(0,o.kt)("h2",{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,o.kt)("p",null,"\u0418\u043c\u044f \u043c\u0430\u0440\u043a\u0435\u0440\u0430 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \xab\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\xbb, \u0430 \u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442. \u0415\u0441\u043b\u0438 \u0432 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b, \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c, \u0430 \u043d\u0435 \u0431\u0440\u043e\u0441\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443. \u0422\u0435\u043f\u0435\u0440\u044c \u044f\u0432\u043d\u044b\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"AddPolicies"),", \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u0432\u044b\u0437\u0432\u0430\u043d\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdatePolicy")," , \u0432\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430."),(0,o.kt)("p",null,"\u043c\u043e\u0434\u0435\u043b\u044c.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = \u043f\u043e\u0434, obj, \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\n\n[policy_definition]\np = \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(\u0441\u0442\u0440. ft) || \u041e\u0442\u0440\u0438\u0446\u0430\u0442\u044c\n\n[matchers]\n\u043c = g(r.sub, p. ub) && r.obj == p.obj && r.act == p.act\n")),(0,o.kt)("p",null,"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430.csv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,o.kt)("p",null,"\u0437\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alice, data1, write --\x3e true // for `p, 1, alice, data1, write, allow` \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\nbob, data2, read --\x3e false\nbob, data2, \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 --\x3e true // \u0434\u043b\u044f bob \u0438\u043c\u0435\u0435\u0442 \u0440\u043e\u043b\u044c `data2_allow_group`, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0430\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c data2, \u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f \u0441 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \n")),(0,o.kt)("h2",{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443-\u0441-\u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0440\u043e\u043b\u0438-\u0438-\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u043e\u043b\u0438 \u0438 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,o.kt)("p",null,"\u0423\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u043e\u043b\u0435\u0439 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0434\u0435\u0440\u0435\u0432\u044c\u044f\u043c\u0438, \u0430 \u043d\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0430\u043c\u0438. \u0415\u0441\u043b\u0438 \u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u043e\u043b\u0435\u0439, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u044f\u0445. \u0415\u0441\u043b\u0438 \u0434\u0432\u0435 \u0440\u043e\u043b\u0438 \u0438\u043c\u0435\u044e\u0442 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0442\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 (\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0440\u043e\u043b\u044c) \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0440\u0430\u043d\u044c\u0448\u0435, \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442. more details also see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831")),(0,o.kt)("p",null,"\u043c\u043e\u0434\u0435\u043b\u044c.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,o.kt)("p",null,"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430.csv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jane, data1, read --\x3e true // jane is at the bottom,so priority is higher than editor, admin and root\nalice, data1, read --\x3e true\n")),(0,o.kt)("p",null," \u0420\u043e\u043b\u044c \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0432\u0440\u043e\u0434\u0435 \u044d\u0442\u043e\u0433\u043e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"role: root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u2502  \u2514\u2500 user: jane\n    \u2502\n    \u2514\u2500 role: subscriber\n       \u2514\u2500 user: john\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"role: root                 # auto priority: 30\n \u2514\u2500 role: admin            # auto priority: 20\n     \u251c\u2500 role: editor       # auto priority: 10\n     \u2514\u2500 role: subscriber   # auto priority: 10\n")))}b.isMDXComponent=!0}}]);