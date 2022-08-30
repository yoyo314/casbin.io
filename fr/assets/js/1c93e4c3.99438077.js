"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"policy-storage",title:"Stockage de la politique",description:"Policy Storage",keywords:["policy storage"]},i=void 0,o={unversionedId:"policy-storage",id:"policy-storage",title:"Stockage de la politique",description:"Policy Storage",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/fr/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"Stockage de la politique",description:"Policy Storage",keywords:["policy storage"]},sidebar:"docs",previous:{title:"Stockage du mod\xe8le",permalink:"/fr/docs/model-storage"},next:{title:"Chargement du sous-ensemble de la politique",permalink:"/fr/docs/policy-subset-loading"}},p={},d=[{value:"Charger la politique \xe0 partir du fichier .CSV",id:"charger-la-politique-\xe0-partir-du-fichier-csv",level:2},{value:"API de la carte",id:"api-de-la-carte",level:2},{value:"Format de stockage de la base de donn\xe9es",id:"format-de-stockage-de-la-base-de-donn\xe9es",level:2},{value:"D\xe9tails de l&#39;adaptateur",id:"d\xe9tails-de-ladaptateur",level:2}],u={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En Casbin, le stockage des politiques est impl\xe9ment\xe9 comme un ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"adaptateur"),"."),(0,r.kt)("h2",{id:"charger-la-politique-\xe0-partir-du-fichier-csv"},"Charger la politique \xe0 partir du fichier .CSV"),(0,r.kt)("p",null,"C'est la fa\xe7on la plus courante d'utiliser Casbin. Il est facile \xe0 comprendre pour les d\xe9butants et pratique \xe0 partager lorsque vous demandez de l'aide \xe0 l'\xe9quipe de Casbin."),(0,r.kt)("p",null,"Le contenu du fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".CSV")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"exemples/rbac_policy.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Si votre fichier contient des virgules",(0,r.kt)("inlineCode",{parentName:"p"},",")," , vous devriez l'envelopper entre guillemets, par exemple :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'p, alice, "data1,data2", read --correct\np, alice, data1,data2, read --incorrect ("data1,data2" devrait \xeatre un entier)\n')),(0,r.kt)("p",{parentName:"admonition"},"Si votre fichier contient des virgules",(0,r.kt)("inlineCode",{parentName:"p"},",")," et des guillemets doubles",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", vous devriez inclure le champ entre guillemets doubles et doubler les guillemets doubles int\xe9gr\xe9s."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'p, alice, data, "r.act in (""get"", ""post"")" --correct\np, alice, data, "r.act in ("get", "post")" --incorrect (devrait utiliser "" pour \xe9chapper "")\n')),(0,r.kt)("p",{parentName:"admonition"},"Probl\xe8me li\xe9 : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,r.kt)("h2",{id:"api-de-la-carte"},"API de la carte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,r.kt)("th",{parentName:"tr",align:null},"Type de texte"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format@@0 LoadPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"basique"),(0,r.kt)("td",{parentName:"tr",align:null},"Charger toutes les r\xe8gles de politique du stockage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnregistrerPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"basique"),(0,r.kt)("td",{parentName:"tr",align:null},"Enregistrer toutes les r\xe8gles de politique sur le stockage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"optionnel"),(0,r.kt)("td",{parentName:"tr",align:null},"Ajouter une r\xe8gle de politique au stockage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"optionnel"),(0,r.kt)("td",{parentName:"tr",align:null},"Supprimer une r\xe8gle de politique du stockage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,r.kt)("td",{parentName:"tr",align:null},"optionnel"),(0,r.kt)("td",{parentName:"tr",align:null},"Supprimer les r\xe8gles de politique qui correspondent au filtre du stockage")))),(0,r.kt)("h2",{id:"format-de-stockage-de-la-base-de-donn\xe9es"},"Format de stockage de la base de donn\xe9es"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"votre fichier politique")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"structure de base de donn\xe9es correspondante (Such comme MySQL)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"ptype"),(0,r.kt)("th",{parentName:"tr",align:null},"V0"),(0,r.kt)("th",{parentName:"tr",align:null},"V1"),(0,r.kt)("th",{parentName:"tr",align:null},"V2"),(0,r.kt)("th",{parentName:"tr",align:null},"V3"),(0,r.kt)("th",{parentName:"tr",align:null},"V4"),(0,r.kt)("th",{parentName:"tr",align:null},"contre 5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"administre_donn\xe9es"),(0,r.kt)("td",{parentName:"tr",align:null},"donn\xe9es2"),(0,r.kt)("td",{parentName:"tr",align:null},"Lu"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"p"),(0,r.kt)("td",{parentName:"tr",align:null},"administre_donn\xe9es"),(0,r.kt)("td",{parentName:"tr",align:null},"donn\xe9es2"),(0,r.kt)("td",{parentName:"tr",align:null},"\xe9crire"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"alice"),(0,r.kt)("td",{parentName:"tr",align:null},"Administrateur"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"La signification de chaque colonne")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"id"),": N'existe que dans la base de donn\xe9es comme cl\xe9 primaire. Pas dans le cadre de la politique ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin"),". La mani\xe8re dont elle est g\xe9n\xe9r\xe9e d\xe9pend de l'adaptateur sp\xe9cifique")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ptype"),": Il correspond \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"g2"),", etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v0-v5"),": Les noms de colonnes n'ont pas de sens sp\xe9cifique, et correspondent aux valeurs de la politique ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," de gauche \xe0 droite. Le nombre de colonnes d\xe9pend du nombre que vous d\xe9finissez vous-m\xeame. En th\xe9orie, il peut y avoir un nombre infini de colonnes. Mais g\xe9n\xe9ralement seulement ",(0,r.kt)("strong",{parentName:"p"},"6 colonnes")," sont impl\xe9ment\xe9es dans l'adaptateur. Si cela ne vous suffit pas, veuillez soumettre un probl\xe8me dans le r\xe9f\xe9rentiel de l'adaptateur correspondant."))),(0,r.kt)("h2",{id:"d\xe9tails-de-ladaptateur"},"D\xe9tails de l'adaptateur"),(0,r.kt)("p",null,"Plus de d\xe9tails sur l'utilisation de l'api adaptateur et la conception de la structure des tables de base de donn\xe9es, veuillez aller \xe0:  ",(0,r.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}s.isMDXComponent=!0}}]);