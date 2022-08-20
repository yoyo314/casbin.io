"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2452:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"rbac-with-pattern",title:"RBAC avec motif",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},s=void 0,p={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC avec motif",description:"RBAC with Pattern",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/fr/docs/rbac-with-pattern",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC avec motif",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/fr/docs/rbac"},next:{title:"RBAC avec domaines",permalink:"/fr/docs/rbac-with-domains"}},u={},d=[{value:"D\xe9marrage rapide",id:"d\xe9marrage-rapide",level:2},{value:"Utiliser la correspondance de motif dans RBAC",id:"utiliser-la-correspondance-de-motif-dans-rbac",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=c("Tabs"),f=c("TabItem"),k={toc:d};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"d\xe9marrage-rapide"},"D\xe9marrage rapide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"utiliser le mod\xe8le dans ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"utiliser le mod\xe8le avec le domaine"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"utiliser tous les mod\xe8les"),(0,i.kt)("p",{parentName:"li"},"juste l'utilisation combin\xe9e de deux API"))),(0,i.kt)("p",null,"Comme indiqu\xe9 ci-dessus, apr\xe8s que vous ayez cr\xe9\xe9 l'instance ",(0,i.kt)("inlineCode",{parentName:"p"},"de contr\xf4le")," vous devez activer le pattern matching via ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API, qui d\xe9terminent la fa\xe7on dont le masque correspond."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Si vous utilisez l'\xe9diteur en ligne, il sp\xe9cifie la fonction de recherche de motifs dans le coin inf\xe9rieur gauche. ",(0,i.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"}))),(0,i.kt)("h2",{id:"utiliser-la-correspondance-de-motif-dans-rbac"},"Utiliser la correspondance de motif dans RBAC"),(0,i.kt)("p",null,"Parfois, vous voulez que certains sujets, objets ou domaines/locataires avec le mod\xe8le sp\xe9cifique soient automatiquement attribu\xe9s \xe0 un r\xf4le. Les fonctions de masquage dans RBAC peuvent vous aider \xe0 le faire. Une fonction de correspondance de patron partage les m\xeames param\xe8tres et la m\xeame valeur de retour que la fonction de recherche ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"pr\xe9c\xe9dente"),"."),(0,i.kt)("p",null,"La fonction de recherche de motifs supporte chaque param\xe8tre de g."),(0,i.kt)("p",null,"Nous savons que normalement RBAC est exprim\xe9 comme ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," dans le matcher. Ensuite, nous utiliserons une politique comme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,"Ainsi, ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," peut lire tous les livres y compris le ",(0,i.kt)("inlineCode",{parentName:"p"},"livre 1")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"livre 2"),". Mais il peut y avoir des milliers de livres et il est tr\xe8s ennuyeux d'ajouter chaque livre au r\xf4le (ou groupe) du livre avec une r\xe8gle de politique ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,i.kt)("p",null,"Mais avec les fonctions de recherche de masques, vous pouvez \xe9crire la politique avec une seule ligne :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"Casbin fera automatiquement correspondre ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2")," dans le patron ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id")," pour vous. Vous devez seulement enregistrer la fonction avec le responsable comme :"),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Lorsque vous utilisez une fonction de masquage dans les domaines/locataires, vous devez enregistrer la fonction pour la faire fonctionner et la mod\xe9liser."),(0,i.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,i.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Si vous ne comprenez pas ce que signifie ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," , veuillez lire ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". En bref, ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," v\xe9rifiera si l'utilisateur ",(0,i.kt)("inlineCode",{parentName:"p"},"r. ub")," a un r\xf4le ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," dans le domaine ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom"),". Voil\xe0 donc comment fonctionne le matcher. Vous pouvez voir l'exemple complet ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"ici"),"."),(0,i.kt)("p",null,"En dehors de la syntaxe de masques correspondant \xe0 la syntaxe ci-dessus, nous pouvons \xe9galement utiliser un motif de domaine pur."),(0,i.kt)("p",null,"Par exemple, si nous voulons que ",(0,i.kt)("inlineCode",{parentName:"p"},"sous")," ait acc\xe8s dans diff\xe9rents domaines, ",(0,i.kt)("inlineCode",{parentName:"p"},"domain1")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"domain2"),", nous pouvons utiliser le mod\xe8le de domaine pur :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"Dans cet exemple, nous voulons que ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," lise et \xe9crive des donn\xe9es `",(0,i.kt)("inlineCode",{parentName:"p"},"dans les domaines 1 et 2, le masque correspondant \xe0"),"*",(0,i.kt)("inlineCode",{parentName:"p"},"dans"),"g",(0,i.kt)("inlineCode",{parentName:"p"},"fait"),"alice` ont acc\xe8s \xe0 deux domaines."),(0,i.kt)("p",null,"En utilisant le masque de correspondance, surtout dans les sc\xe9narios qui sont plus compliqu\xe9s et il y a beaucoup de domaines ou d'objets que nous devons prendre en consid\xe9ration, nous pouvons impl\xe9menter la ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," plus \xe9l\xe9gante et efficace."))}g.isMDXComponent=!0},9523:function(e,t,n){t.Z=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);