"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6742],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"priority-model",title:"\u512a\u5148\u30e2\u30c7\u30eb",description:"Priority Model",keywords:["priority model"]},p=void 0,c={unversionedId:"priority-model",id:"priority-model",title:"\u512a\u5148\u30e2\u30c7\u30eb",description:"Priority Model",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/ja/docs/priority-model",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PriorityModel.mdx",tags:[],version:"current",frontMatter:{id:"priority-model",title:"\u512a\u5148\u30e2\u30c7\u30eb",description:"Priority Model",keywords:["priority model"]},sidebar:"docs",previous:{title:"ABAC",permalink:"/ja/docs/abac"},next:{title:"\u30b9\u30fc\u30d1\u30fc\u7ba1\u7406\u8005",permalink:"/ja/docs/superadmin"}},d={},s=[{value:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc",id:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc",level:2},{value:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc",id:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc-1",level:2},{value:"\u30ed\u30fc\u30eb\u3068\u30e6\u30fc\u30b6\u968e\u5c64\u306b\u57fa\u3065\u304f\u512a\u5148\u5ea6\u306e\u3042\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u8aad\u307f\u8fbc\u307f",id:"\u30ed\u30fc\u30eb\u3068\u30e6\u30fc\u30b6\u968e\u5c64\u306b\u57fa\u3065\u304f\u512a\u5148\u5ea6\u306e\u3042\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u8aad\u307f\u8fbc\u307f",level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casbin\u306f\u512a\u5148\u5ea6\u306e\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc"},"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc"),(0,i.kt)("p",null,"\u305d\u308c\u306f\u975e\u5e38\u306b\u7c21\u5358\u3067\u3059\u3001\u9806\u5e8f\u304c\u512a\u5148\u9806\u4f4d\u3092\u6c7a\u5b9a\u3057\u3001\u4ee5\u524d\u306b\u767b\u5834\u3057\u305f\u30dd\u30ea\u30b7\u30fc\u306f\u3088\u308a\u9ad8\u3044\u512a\u5148\u9806\u4f4d\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"model.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priority(p.eft) || \u5426\u5b9a\u3059\u308b\n")),(0,i.kt)("h2",{id:"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc-1"},"\u512a\u5148\u5ea6\u4ed8\u304d\u8ca0\u8377\u30dd\u30ea\u30b7\u30fc"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u307e\u305f\u53c2\u7167: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,i.kt)("p",null,"The smaller priority value will have a higher priority. If there's a non-numerical character in priority, it will be in the last, rather than throw an error."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Token name convention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The priority token name in policy definition is  "priority" conventionally. A customized one requires invoking ',(0,i.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," and reload policies (full example on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/1044"},"TestCustomizedFieldIndex")," )."),(0,i.kt)("p",{parentName:"div"},"model.conf:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = customized_priority, sub, obj, act, eft\n")),(0,i.kt)("p",{parentName:"div"},"Golang code example:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example/priority_model_explicit_customized.conf",\n                    "./example/priority_policy_explicit_customized.csv")\n// Due to the customized priority token, the enforcer failed to handle the priority.\nok, err := e.Enforce("bob", "data2", "read") // the result will be `true, nil`\n// set PriorityIndex and reload\ne.SetFieldIndex("p", constant.PriorityIndex, 0)\nerr := e.LoadPolicy()\nif err != nil {\n    log.Fatalf("LoadPolicy: %v", err)\n}\nok, err := e.Enforce("bob", "data2", "read") // the result will be `false, nil`\n')))),(0,i.kt)("p",null,"\u4eca\u3001\u660e\u793a\u7684\u306a\u512a\u5148\u5ea6\u306e\u307f\u30b5\u30dd\u30fc\u30c8 ",(0,i.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"AddPolicy"),", \u3082\u3057 ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdatePolicy")," \u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u5834\u5408\u3001priority \u5c5e\u6027\u3092\u5909\u66f4\u3059\u308b\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"model.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = priority, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"policy.csv"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,i.kt)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alice, data1, write --\x3e true // for `p, 1, alice, data1, write, allow` has highest priority\nbob, data2, read --\x3e false\nbob, data2, write --\x3e true // for bob has role of `data2_allow_group` which has right to write data2, and there's no deny policy with higher priority \n")),(0,i.kt)("h2",{id:"\u30ed\u30fc\u30eb\u3068\u30e6\u30fc\u30b6\u968e\u5c64\u306b\u57fa\u3065\u304f\u512a\u5148\u5ea6\u306e\u3042\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u8aad\u307f\u8fbc\u307f"},"\u30ed\u30fc\u30eb\u3068\u30e6\u30fc\u30b6\u968e\u5c64\u306b\u57fa\u3065\u304f\u512a\u5148\u5ea6\u306e\u3042\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u8aad\u307f\u8fbc\u307f"),(0,i.kt)("p",null,"\u30ed\u30fc\u30eb\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u7d99\u627f\u3055\u308c\u305f\u69cb\u9020\u306f\u3001\u30b0\u30e9\u30d5\u3067\u306f\u306a\u304f\u8907\u6570\u306e\u30c4\u30ea\u30fc\u306e\u307f\u3068\u306a\u308a\u307e\u3059\u3002 1\u3064\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u8907\u6570\u306e\u30ed\u30fc\u30eb\u3092\u6301\u3064\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u7570\u306a\u308b\u30c4\u30ea\u30fc\u3067\u540c\u3058\u30ec\u30d9\u30eb\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 2\u3064\u306e\u30ed\u30fc\u30eb\u304c\u540c\u3058\u30ec\u30d9\u30eb\u306b\u3042\u308b\u5834\u5408\u3001\u30dd\u30ea\u30b7\u30fc(\u30ed\u30fc\u30eb\u5bfe\u5fdc)\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831")),(0,i.kt)("p",null,"model.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,i.kt)("p",null,"policy.csv"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,i.kt)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jane, data1, read --\x3e true // jane is at the bottom,so priority is higher than editor, admin and root\nalice, data1, read --\x3e true\n")),(0,i.kt)("p",null," \u6b21\u306e\u3088\u3046\u306a\u30ed\u30fc\u30eb\u968e\u5c64:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u251c\u2500 user: jane\n    {\n    \u251c\u2500 role: subscriber\n       \u2514\u2500 user: John\n")),(0,i.kt)("p",null,"\u512a\u5148\u5ea6\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"role: root # auto priority: 30\n \u2514\u2500 role: admin # auto priority: 20\n     \u251c\u2500 role: editor # auto priority: 10\n     \u251c\u2500 role: subscriber # auto priority: 10\n")))}m.isMDXComponent=!0}}]);