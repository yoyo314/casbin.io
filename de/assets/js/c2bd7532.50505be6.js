"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8413],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(b,l(l({ref:n},d),{},{components:t})):a.createElement(b,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),r=t(6010),i="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),r=t(7294),i=t(6010),l=t(2389),o=t(7392),u=t(7094),s=t(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,l=e.lazy,p=e.block,m=e.defaultValue,b=e.values,k=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),y=w.tabGroupChoices,M=w.setTabGroupChoices,C=(0,r.useState)(N),T=C[0],O=C[1],x=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=y[k];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==T&&(D(n),O(a),null!=k&&M(k,String(a)))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;t=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var i,l=x.indexOf(e.currentTarget)-1;t=null!=(i=x[l])?i:x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},2964:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=t(5488),o=t(5162),u=["components"],s={id:"rbac-with-pattern",title:"RBAC mit Muster"},d=void 0,c={unversionedId:"rbac-with-pattern",id:"rbac-with-pattern",title:"RBAC mit Muster",description:"Schnellstart",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RBACWithPattern.mdx",sourceDirName:".",slug:"/rbac-with-pattern",permalink:"/de/docs/rbac-with-pattern",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithPattern.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-pattern",title:"RBAC mit Muster"},sidebar:"docs",previous:{title:"RBAC",permalink:"/de/docs/rbac"},next:{title:"RBAC mit Dom\xe4nen",permalink:"/de/docs/rbac-with-domains"}},p={},m=[{value:"Schnellstart",id:"schnellstart",level:2},{value:"Verwende Musterpassung in RBAC",id:"verwende-musterpassung-in-rbac",level:2}],b={toc:m};function k(e){var n=e.components,s=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},b,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"schnellstart"},"Schnellstart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"verwende Muster in ",(0,i.kt)("inlineCode",{parentName:"p"},"g(_,_)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e, _ := NewEnforcer("./example.conf", "./example.csv")\ne.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"benutze Muster mit Dom\xe4ne"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"benutze alle Muster"),(0,i.kt)("p",{parentName:"li"},"nur kombinierte Verwendung von zwei APIs"))),(0,i.kt)("p",null,"Wie oben angegeben, nachdem Sie den ",(0,i.kt)("inlineCode",{parentName:"p"},"Vollstrecker")," erstellt haben du musst die Patternpassung \xfcber ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"AddNamedMatchingFunc")," API aktivieren die bestimmt, wie das Muster \xfcbereinstimmt."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wenn Sie den Online-Editor verwenden, gibt er die Funktion Muster \xfcbereinstimmend in der unteren linken Ecke an. ",(0,i.kt)("img",{alt:"editor-tips",src:t(9523).Z,width:"480",height:"272"})))),(0,i.kt)("h2",{id:"verwende-musterpassung-in-rbac"},"Verwende Musterpassung in RBAC"),(0,i.kt)("p",null,"Manchmal m\xf6chten Sie, dass bestimmte Subjekte, Objekte oder Dom\xe4nen/Mieter mit dem spezifischen Muster automatisch einer Rolle zugewiesen werden. Dabei helfen Ihnen die Funktionen zum Musterabgleich in RBAC. Eine Funktion teilt die gleichen Parameter und den R\xfcckgabewert wie die vorherige ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models#functions-in-matchers"},"Trefferfunktion"),"."),(0,i.kt)("p",null,"Die Pattern-Matching-Funktion unterst\xfctzt jeden Parameter von g."),(0,i.kt)("p",null,"Wir wissen, dass RBAC normalerweise als ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub)")," im Matcher ausgedr\xfcckt wird. Dann werden wir Richtlinien wie folgt anwenden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, book_group, read\ng, /book/1, book_group\ng, /book/2, book_group\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Alice")," kann also alle B\xfccher lesen, einschlie\xdflich ",(0,i.kt)("inlineCode",{parentName:"p"},"Buch 1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Buch 2"),". Aber es kann Tausende von B\xfcchern geben und es ist sehr langweilig, jedes Buch zur Buchrolle (oder zur Gruppe) mit einer ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," Richtlinieregel hinzuzuf\xfcgen."),(0,i.kt)("p",null,"Aber mit den Pattern-passenden Funktionen k\xf6nnen Sie die Richtlinie mit nur einer Zeile schreiben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"g, /book/:id, book_group\n")),(0,i.kt)("p",null,"Kasbin passt automatisch ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/2")," in Muster ",(0,i.kt)("inlineCode",{parentName:"p"},"/book/:id")," f\xfcr Sie. Sie m\xfcssen die Funktion nur beim Vollstrecker registrieren, wie:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(o.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Wenn Sie eine Pattern-Matching-Funktion in Dom\xe4nen/Mietern verwenden, m\xfcssen Sie die Funktion registrieren, um das Modell durchzusetzen."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddNamedDomainMatchingFunc("g","KeyMatch2",util.KeyMatch2)\n'))),(0,i.kt)(o.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await e.addNamedDomainMatchingFunc('g', Util.keyMatch2Func);\n")))),(0,i.kt)("p",null,"Wenn Sie nicht verstehen, was ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," bedeutet, lesen Sie bitte ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-domains"},"rbac-with-domains"),". Kurzum, ",(0,i.kt)("inlineCode",{parentName:"p"},"g(r.sub, p.sub, r.dom)")," wird pr\xfcfen, ob der Benutzer ",(0,i.kt)("inlineCode",{parentName:"p"},"r. ub")," hat eine Rolle ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub")," in der Dom\xe4ne ",(0,i.kt)("inlineCode",{parentName:"p"},"r.dom"),". So funktioniert der Matcher. Sie k\xf6nnen das komplette Beispiel ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/dbdb6cbe2e7a80863e4951f9ff36da07fef01b75/model_test.go#L278-L307"},"hier sehen"),"."),(0,i.kt)("p",null,"Neben der obigen Pattern-Matching-Syntax k\xf6nnen wir auch reine Domain-Muster verwenden."),(0,i.kt)("p",null,"Zum Beispiel, wenn wir wollen, dass ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," Zugang in verschiedenen Dom\xe4nen hat, ",(0,i.kt)("inlineCode",{parentName:"p"},"domain1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"domain2"),", wir k\xf6nnen das reine Domainmuster verwenden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, domain1, data1, read\np, admin, domain1, data1, write\np, admin, domain2, data2, read\np, admin, domain2, data2, write\n\ng, alice, admin, *\ng, bob, admin, domain2\n")),(0,i.kt)("p",null,"In this example, we want ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," to read and write ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in domain1 and domain2, pattern matching ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," have the access to two domains."),(0,i.kt)("p",null,"Durch Verwendung von Muster-\xdcbereinstimmung, vor allem in den Szenarien, die komplizierter sind und es gibt viele Dom\xe4nen oder Objekte, die wir ber\xfccksichtigen m\xfcssen, wir k\xf6nnen die ",(0,i.kt)("inlineCode",{parentName:"p"},"policy_definition")," eleganter und effektiver umsetzen."))}k.isMDXComponent=!0},9523:function(e,n,t){n.Z=t.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);