"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={id:"rbac-with-pattern",title:"RBAC mit Muster",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},o=void 0,l={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC mit Muster",description:"RBAC with Pattern",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/de/docs/rbac-with-pattern",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC mit Muster",description:"RBAC with Pattern",keywords:["RBAC with pattern","pattern matching"]},sidebar:"docs",previous:{title:"RBAC",permalink:"/de/docs/rbac"},next:{title:"RBAC mit Dom\xe4nen",permalink:"/de/docs/rbac-with-domains"}},d={},p=[{value:"Schnellstart",id:"schnellstart",level:2},{value:"Verwende Musterpassung in RBAC",id:"verwende-musterpassung-in-rbac",level:2}],s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=s("Tabs"),c=s("TabItem"),m={toc:p};function k(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"schnellstart"},"Schnellstart"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"verwende Muster in ",(0,r.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"benutze Muster mit Dom\xe4ne"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"benutze alle Muster"),(0,r.kt)("p",{parentName:"li"},"nur kombinierte Verwendung von zwei APIs"))),(0,r.kt)("p",null,"Wie oben angegeben, nachdem Sie den ",(0,r.kt)("inlineCode",{parentName:"p"},"Vollstrecker")," erstellt haben du musst die Patternpassung \xfcber ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API aktivieren die bestimmt, wie das Muster \xfcbereinstimmt."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wenn Sie den Online-Editor verwenden, gibt er die Funktion Muster \xfcbereinstimmend in der unteren linken Ecke an. ",(0,r.kt)("img",{alt:"editor-tips",src:t(9523).Z,width:"480",height:"272"}))),(0,r.kt)("h2",{id:"verwende-musterpassung-in-rbac"},"Verwende Musterpassung in RBAC"),(0,r.kt)("p",null,"Manchmal m\xf6chten Sie, dass bestimmte Subjekte, Objekte oder Dom\xe4nen/Mieter mit dem spezifischen Muster automatisch einer Rolle zugewiesen werden. Dabei helfen Ihnen die Funktionen zum Musterabgleich in RBAC. Eine Funktion teilt die gleichen Parameter und den R\xfcckgabewert wie die vorherige ",(0,r.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"Trefferfunktion"),"."),(0,r.kt)("p",null,"Die Pattern-Matching-Funktion unterst\xfctzt jeden Parameter von g."),(0,r.kt)("p",null,"Wir wissen, dass RBAC normalerweise als ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," im Matcher ausgedr\xfcckt wird. Dann werden wir Richtlinien wie folgt anwenden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Alice")," kann also alle B\xfccher lesen, einschlie\xdflich ",(0,r.kt)("inlineCode",{parentName:"p"},"Buch 1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"Buch 2"),". Aber es kann Tausende von B\xfcchern geben und es ist sehr langweilig, jedes Buch zur Buchrolle (oder zur Gruppe) mit einer ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," Richtlinieregel hinzuzuf\xfcgen."),(0,r.kt)("p",null,"Aber mit den Pattern-passenden Funktionen k\xf6nnen Sie die Richtlinie mit nur einer Zeile schreiben:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,r.kt)("p",null,"Kasbin passt automatisch ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/2")," in Muster ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/:id")," f\xfcr Sie. Sie m\xfcssen die Funktion nur beim Vollstrecker registrieren, wie:"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,"Wenn Sie eine Pattern-Matching-Funktion in Dom\xe4nen/Mietern verwenden, m\xfcssen Sie die Funktion registrieren, um das Modell durchzusetzen."),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,r.kt)("p",null,"Wenn Sie nicht verstehen, was ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," bedeutet, lesen Sie bitte ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". Kurzum, ",(0,r.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," wird pr\xfcfen, ob der Benutzer ",(0,r.kt)("inlineCode",{parentName:"p"},"r. ub")," hat eine Rolle ",(0,r.kt)("inlineCode",{parentName:"p"},"p.sub")," in der Dom\xe4ne ",(0,r.kt)("inlineCode",{parentName:"p"},"r.dom"),". So funktioniert der Matcher. Sie k\xf6nnen das komplette Beispiel ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"hier sehen"),"."),(0,r.kt)("p",null,"Neben der obigen Pattern-Matching-Syntax k\xf6nnen wir auch reine Domain-Muster verwenden."),(0,r.kt)("p",null,"Zum Beispiel, wenn wir wollen, dass ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," Zugang in verschiedenen Dom\xe4nen hat, ",(0,r.kt)("inlineCode",{parentName:"p"},"domain1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"domain2"),", wir k\xf6nnen das reine Domainmuster verwenden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,r.kt)("p",null,"In this example, we want ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," to read and write ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in domain1 and domain2, pattern matching ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," makes ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," have the access to two domains."),(0,r.kt)("p",null,"Durch Verwendung von Muster-\xdcbereinstimmung, vor allem in den Szenarien, die komplizierter sind und es gibt viele Dom\xe4nen oder Objekte, die wir ber\xfccksichtigen m\xfcssen, wir k\xf6nnen die ",(0,r.kt)("inlineCode",{parentName:"p"},"policy_definition")," eleganter und effektiver umsetzen."))}k.isMDXComponent=!0},9523:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);