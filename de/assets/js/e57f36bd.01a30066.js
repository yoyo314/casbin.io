"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5578],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,b=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={id:"priority-model",title:"Priorit\xe4tsmodell",description:"Priority Model",keywords:["priority model"]},d=void 0,p={unversionedId:"priority-model",id:"priority-model",title:"Priorit\xe4tsmodell",description:"Priority Model",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/PriorityModel.mdx",sourceDirName:".",slug:"/priority-model",permalink:"/de/docs/priority-model",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PriorityModel.mdx",tags:[],version:"current",frontMatter:{id:"priority-model",title:"Priorit\xe4tsmodell",description:"Priority Model",keywords:["priority model"]},sidebar:"docs",previous:{title:"ABAC",permalink:"/de/docs/abac"},next:{title:"Super-Admin",permalink:"/de/docs/superadmin"}},c={},u=[{value:"Richtlinie mit Priorit\xe4t laden implizit",id:"richtlinie-mit-priorit\xe4t-laden-implizit",level:2},{value:"Richtlinien mit Priorit\xe4t explizit laden",id:"richtlinien-mit-priorit\xe4t-explizit-laden",level:2},{value:"Richtlinien mit Priorit\xe4t basierend auf Rolle und BenutzerHierarchie laden",id:"richtlinien-mit-priorit\xe4t-basierend-auf-rolle-und-benutzerhierarchie-laden",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casbin unterst\xfctzt Laststrategien mit Priorit\xe4t."),(0,a.kt)("h2",{id:"richtlinie-mit-priorit\xe4t-laden-implizit"},"Richtlinie mit Priorit\xe4t laden implizit"),(0,a.kt)("p",null,"Es ist ganz einfach, die Ordnung bestimmt die Priorit\xe4t, die Politik fr\xfcher erschienen hat h\xf6here Priorit\xe4t."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = priority(p.eft) || verweigern\n")),(0,a.kt)("h2",{id:"richtlinien-mit-priorit\xe4t-explizit-laden"},"Richtlinien mit Priorit\xe4t explizit laden"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Siehe: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/550"},"casbin#550"))),(0,a.kt)("p",null,"The smaller priority value will have a higher priority. If there's a non-numerical character in priority, it will be in the last, rather than throw an error."),(0,a.kt)("admonition",{title:"Token name convention",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'The priority token name in policy definition is  "priority" conventionally. A customized one requires invoking ',(0,a.kt)("inlineCode",{parentName:"p"},"e.SetFieldIndex()")," and reload policies (full example on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/1044"},"TestCustomizedFieldIndex")," )."),(0,a.kt)("p",{parentName:"admonition"},"model.conf:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = customized_priority, sub, obj, act, eft\n")),(0,a.kt)("p",{parentName:"admonition"},"Golang code example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example/priority_model_explicit_customized.conf",\n                    "./example/priority_policy_explicit_customized.csv")\n// Due to the customized priority token, the enforcer failed to handle the priority.\nok, err := e.Enforce("bob", "data2", "read") // the result will be `true, nil`\n// set PriorityIndex and reload\ne.SetFieldIndex("p", constant.PriorityIndex, 0)\nerr := e.LoadPolicy()\nif err != nil {\n    log.Fatalf("LoadPolicy: %v", err)\n}\nok, err := e.Enforce("bob", "data2", "read") // the result will be `false, nil`\n'))),(0,a.kt)("p",null,"Nun unterst\xfctzt explizite Priorit\xe4t nur ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicy")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"AddPolicies"),", falls ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdatePolicy")," aufgerufen wurde, sollten Sie das Priorit\xe4tsattribute nicht \xe4ndern."),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = Priorit\xe4t, sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = priority(p. ft) || lehne\n\n[matchers]\nm = g(r.sub, p. ub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"policy.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data1_deny_group, data1, read, deny\np, 10, data1_deny_group, data1, write, deny\np, 10, data2_allow_group, data2, read, allow\np, 10, data2_allow_group, data2, write, allow\n\n\np, 1, alice, data1, write, allow\np, 1, alice, data1, read, allow\np, 1, bob, data2, read, deny\n\ng, bob, data2_allow_group\ng, alice, data1_deny_group\n")),(0,a.kt)("p",null,"anfragen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"alice, data1, write --\x3e true // f\xfcr `p, 1, alice, data1, write, write allow` hat die h\xf6chste Priorit\xe4t\nbob, data2, read --\x3e false\nbob, data2, write --\x3e true // f\xfcr bob hat die Rolle von `data2_allow_group` welche das Recht hat, Daten zu schreiben, und es gibt keine leugnen Richtlinie mit h\xf6herer Priorit\xe4t \n")),(0,a.kt)("h2",{id:"richtlinien-mit-priorit\xe4t-basierend-auf-rolle-und-benutzerhierarchie-laden"},"Richtlinien mit Priorit\xe4t basierend auf Rolle und BenutzerHierarchie laden"),(0,a.kt)("p",null,"Die geerbte Struktur von Rollen und Benutzern kann nur mehrere B\xe4ume und nicht Graphen. Wenn ein Benutzer mehrere Rollen hat, m\xfcssen Sie sicherstellen, dass der Benutzer das gleiche Level in verschiedenen B\xe4umen hat. Wenn zwei Rollen die gleiche Ebene haben, hat die Politik (die Rolle korrespondierend) eine h\xf6here Priorit\xe4t. weitere Details siehe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/pull/833"},"casbin#833"),(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/831"},"casbin#831")),(0,a.kt)("p",null,"model.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = subjectPriority(p.eft) || deny\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act \n")),(0,a.kt)("p",null,"policy.csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, root, data1, read, deny\np, admin, data1, read, deny\n\np, editor, data1, read, deny\np, subscriber, data1, read, deny\n\np, jane, data1, read, allow\np, alice, data1, read, allow\n\ng, admin, root\n\ng, editor, admin\ng, subscriber, admin\n\ng, jane, editor\ng, alice, subscriber \n")),(0,a.kt)("p",null,"Anfrage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jane, data1, read --\x3e true // jane steht ganz unten. Die Priorit\xe4t ist also h\xf6her als der Editor, admin und root\nalice, data1, lesen --\x3e true\n")),(0,a.kt)("p",null," Die Rollenhierarchie wie folgt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"role: root\n \u2514\u2500 role: admin\n    \u251c\u2500 role editor\n    \u2502  \u2514\u2500 user: jane\n    \u2502\n    \u2514\u2500 role: subscriber\n       \u2514\u2500 user: john\n")),(0,a.kt)("p",null,"Die Priorit\xe4t automatisch folgenderma\xdfen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"role: root                 # auto priority: 30\n \u2514\u2500 role: admin            # auto priority: 20\n     \u251c\u2500 role: editor       # auto priority: 10\n     \u2514\u2500 role: subscriber   # auto priority: 10\n")))}m.isMDXComponent=!0}}]);