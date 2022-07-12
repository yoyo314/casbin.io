"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3286],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),o=s(a),k=r,g=o["".concat(p,".").concat(k)]||o[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2318:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],u={id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},p=void 0,s={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/fr/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement of Casbin",keywords:["benchmarks","overhead"]},sidebar:"docs",previous:{title:"Multi-threads",permalink:"/fr/docs/multi-threading"},next:{title:"Optimisation des performances",permalink:"/fr/docs/performance"}},m={},d=[],o=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},k=o("Tabs"),g=o("TabItem"),c={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(k,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Les frais de mise en application de la politique sont compar\xe9s dans ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". Le lit de test est :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Processeur(s) logique(s)\n")),(0,l.kt)("p",null,"Le r\xe9sultat du benchmarking de ",(0,l.kt)("inlineCode",{parentName:"p"},"va test -bench=. -benchmem")," est comme suit (op = un appel ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," , ms = milliseconde, KB = kilo octets):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cas de test"),(0,l.kt)("th",{parentName:"tr",align:null},"Taille de la r\xe8gle"),(0,l.kt)("th",{parentName:"tr",align:null},"Temps au dessus (ms/op)"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 r\xe8gles (2 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (petit)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 r\xe8gles (1000 utilisateurs, 100 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80.620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (moyen)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 r\xe8gles (10000 utilisateurs, 1000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765.152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (grand)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 r\xe8gles (100000 utilisateurs, 10000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7,606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec les r\xf4les de ressource"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7.906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec domaines/locataires"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le, 2 domaines)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10.755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 r\xe8gle (0 utilisateur)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTANT"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (3 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Refuser la substitution"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priorit\xe9"),(0,l.kt)("td",{parentName:"tr",align:null},"9 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(g,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,"Les frais d'ex\xe9cution de la politique de ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," sont compar\xe9s dans le r\xe9pertoire ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," \xe0 l'aide de ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"l'outil de benchmarking de Google"),". Le lit de test pour ces rep\xe8res est :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2,30GHz, 4 c\u0153urs, 4 threads\n")),(0,l.kt)("p",null,"Voici le r\xe9sultat du benchmarking de l'ex\xe9cution de la cible ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," construite dans la configuration ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," (op = un appel ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," ms = milliseconde):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cas de test"),(0,l.kt)("th",{parentName:"tr",align:null},"Taille de la r\xe8gle"),(0,l.kt)("th",{parentName:"tr",align:null},"Temps au dessus (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 r\xe8gles (2 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (petit)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 r\xe8gles (1000 utilisateurs, 100 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (moyen)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 r\xe8gles (10000 utilisateurs, 1000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (grand)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 r\xe8gles (100000 utilisateurs, 10000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec les r\xf4les de ressource"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec domaines/locataires"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le, 2 domaines)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 r\xe8gle (0 utilisateur)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTANT"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (3 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Refuser la substitution"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priorit\xe9"),(0,l.kt)("td",{parentName:"tr",align:null},"9 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,l.kt)(g,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," overhead of policy enforcement est compar\xe9 dans ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". Le lit test\xe9 \xe9tait une VM Ubuntu avec le CPU:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,l.kt)("p",null,"Le r\xe9sultat de benchmarking de ",(0,l.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," est le suivant (op = un appel ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," , ms = millisecond):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cas de test"),(0,l.kt)("th",{parentName:"tr",align:null},"Taille de la r\xe8gle"),(0,l.kt)("th",{parentName:"tr",align:null},"Temps au dessus (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 r\xe8gles (2 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (petit)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 r\xe8gles (1000 utilisateurs, 100 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (moyen)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 r\xe8gles (10000 utilisateurs, 1000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (grand)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 r\xe8gles (100000 utilisateurs, 10000 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec les r\xf4les de ressource"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC avec domaines/locataires"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le, 2 domaines)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 r\xe8gle (0 utilisateur)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTANT"),(0,l.kt)("td",{parentName:"tr",align:null},"5 r\xe8gles (3 utilisateurs)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Refuser la substitution"),(0,l.kt)("td",{parentName:"tr",align:null},"6 r\xe8gles (2 utilisateurs, 1 r\xf4le)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priorit\xe9"),(0,l.kt)("td",{parentName:"tr",align:null},"9 r\xe8gles (2 utilisateurs, 2 r\xf4les)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}N.isMDXComponent=!0}}]);