"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6975],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?i.createElement(h,l(l({ref:n},p),{},{components:t})):i.createElement(h,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1178:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),l=["components"],o={id:"syntax-for-models",title:"Syntax f\xfcr Modelle",description:"Syntax for Models",keywords:["syntax"]},s=void 0,d={unversionedId:"syntax-for-models",id:"syntax-for-models",title:"Syntax f\xfcr Modelle",description:"Syntax for Models",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/SyntaxForModels.mdx",sourceDirName:".",slug:"/syntax-for-models",permalink:"/de/docs/syntax-for-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SyntaxForModels.mdx",tags:[],version:"current",frontMatter:{id:"syntax-for-models",title:"Syntax f\xfcr Modelle",description:"Syntax for Models",keywords:["syntax"]},sidebar:"docs",previous:{title:"Unterst\xfctzte Modelle",permalink:"/de/docs/supported-models"},next:{title:"Effektor",permalink:"/de/docs/effector"}},p={},c=[{value:"Anforderungsdefinition",id:"anforderungsdefinition",level:2},{value:"Richtlinien-Definition",id:"richtlinien-definition",level:2},{value:"Richtlinien-Effekt",id:"richtlinien-effekt",level:2},{value:"Matcher",id:"matcher",level:2},{value:"Typ mehrerer Abschnitte",id:"typ-mehrerer-abschnitte",level:2},{value:"Special Grammer",id:"special-grammer",level:3},{value:"Ausdruck-Auswerter",id:"ausdruck-auswerter",level:3}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}},u=m("Tabs"),h=m("TabItem"),k={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ein Modell CONF sollte mindestens vier Bereiche haben: ",(0,r.kt)("inlineCode",{parentName:"p"},"[request_definition], [policy_definition], [policy_effect], [matchers]"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wenn ein Modell RBAC verwendet, sollte es auch den ",(0,r.kt)("inlineCode",{parentName:"p"},"[role_definition]")," Bereich hinzuf\xfcgen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ein Modell CONF kann Kommentare enthalten. Die Kommentare beginnen mit ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),", und ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," wird den Rest der Zeile kommentieren."))),(0,r.kt)("h2",{id:"anforderungsdefinition"},"Anforderungsdefinition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[request_definition]")," ist die Definition f\xfcr die Zugriffsanfrage. Es definiert die Argumente in der ",(0,r.kt)("inlineCode",{parentName:"p"},"e.Enforce(...)")," Funktion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, handeln\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sub, obj, act")," repr\xe4sentiert das klassische Dreieck: Zugriff auf Entit\xe4t (Betreff), auf Ressource (Objekt) und Zugriffsmethode (Aktion). Sie k\xf6nnen jedoch Ihr eigenes Anfrageformular anpassen, wie zum Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"sub, handeln")," wenn Sie keine bestimmte Ressource angeben m\xfcssen, oder ",(0,r.kt)("inlineCode",{parentName:"p"},"sub, sub2, obj, handeln Sie")," , wenn Sie irgendwie zwei Zugriffseinheiten haben."),(0,r.kt)("h2",{id:"richtlinien-definition"},"Richtlinien-Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[policy_definition]")," ist die Definition f\xfcr die Richtlinie. Er definiert die Bedeutung der Politik. Zum Beispiel haben wir folgendes Modell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = sub, obj, act\np2 = sub, act\n")),(0,r.kt)("p",null,"Und wir haben folgende Richtlinien (falls in einer Richtlinien-Datei)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, data1, read\np2, bob, write-all-objects\n")),(0,r.kt)("p",null,"Jede Zeile in einer Politik wird als politische Regel bezeichnet. Jede Richtlinien-Regel beginnt mit einem ",(0,r.kt)("inlineCode",{parentName:"p"},"Richtlinientyp"),", z. B. ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p2"),". Es wird verwendet, um der Richtlinien-Definition zu entsprechen, wenn es mehrere Definitionen gibt. Die obige Richtlinie zeigt die folgende Verbindung. Die Bindung kann im Matcher verwendet werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(alice, data1, read) -> (p.sub, p.obj, p.act)\n(bob, write-all-objects) -> (p2.sub, p2.act)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Die Elemente einer Regelregel werden immer als",(0,r.kt)("inlineCode",{parentName:"p"},"Zeichenfolge")," betrachtet. Wenn Sie dazu Fragen haben, lesen Sie bitte die Diskussion unter: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/113"},"https://github.com/casbin/casbin/issues/113")))),(0,r.kt)("h2",{id:"richtlinien-effekt"},"Richtlinien-Effekt"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[policy_effect]")," ist die Definition f\xfcr den Policy-Effekt. Es legt fest, ob die Zugriffsanfrage genehmigt werden soll, wenn mehrere Richtlinien-Regeln mit der Anfrage \xfcbereinstimmen. Zum Beispiel erlaubt eine Regel und die andere verweigert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow))\n")),(0,r.kt)("p",null,"Der obige Richtlinien-Effekt bedeutet, wenn es eine \xfcbereinstimmende Richtlinien-Regel von ",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),"gibt, der endg\xfcltige Effekt ist ",(0,r.kt)("inlineCode",{parentName:"p"},"allow")," (aka allow-override). ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft")," ist der Effekt f\xfcr eine Richtlinie, es kann ",(0,r.kt)("inlineCode",{parentName:"p"},"erlauben")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"verweigern"),". Es ist optional und der Standardwert ",(0,r.kt)("inlineCode",{parentName:"p"},"erlaubt"),". Da wir es nicht oben angegeben haben, verwendet es den Standardwert."),(0,r.kt)("p",null,"Ein weiteres Beispiel f\xfcr die politische Wirkung ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = !some(where (p.eft == deny))\n")),(0,r.kt)("p",null,"Es bedeutet, wenn es keine \xfcbereinstimmenden Regeln f\xfcr",(0,r.kt)("inlineCode",{parentName:"p"},"leugnen"),"gibt, der endg\xfcltige Effekt ist ",(0,r.kt)("inlineCode",{parentName:"p"},"allow")," (aka deny-override). ",(0,r.kt)("inlineCode",{parentName:"p"},"einige")," bedeutet: wenn es eine \xfcbereinstimmende Regel gibt. ",(0,r.kt)("inlineCode",{parentName:"p"},"irgendein")," bedeutet: alle \xfcbereinstimmenden Richtlinien-Regeln (nicht hier verwendet). Der politische Effekt kann sogar mit logischen Ausdr\xfccken verbunden werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n")),(0,r.kt)("p",null,"Es bedeutet mindestens eine \xfcbereinstimmende Richtlinien-Regel von",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", und es gibt keine \xfcbereinstimmende Richtlinien-Regel von",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),". Auf diese Weise werden sowohl die Genehmigungen als auch die Verweigerung von Genehmigungen unterst\xfctzt, und das Leugnen \xfcberschreibt."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Obwohl wir die Syntax des Policy-Effekts wie oben konzipiert haben, verwenden die aktuellen Implementierungen nur hart-kodierte Policy-Effekte, da wir festgestellt haben, dass diese Art von Flexibilit\xe4t nicht sehr notwendig ist. Daher m\xfcssen Sie vorerst einen der integrierten Policy-Effekte verwenden, anstatt Ihren eigenen zu personalisieren."))),(0,r.kt)("p",null,"Die unterst\xfctzten Richtlinien-Effekte sind:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Richtlinien-Effekt"),(0,r.kt)("th",{parentName:"tr",align:null},"Bedeutung"),(0,r.kt)("th",{parentName:"tr",align:null},"Beispiel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow))"),(0,r.kt)("td",{parentName:"tr",align:null},"zulassen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"ACL, RBAC, etc."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!some(where (p.eft == deny))"),(0,r.kt)("td",{parentName:"tr",align:null},"verweigeren-\xfcberschreiben"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Verweigerung \xfcberschreiben"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow)) && !some(where (p.eft == deny))"),(0,r.kt)("td",{parentName:"tr",align:null},"zulassen und ablehnen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Zulassen und verweigern"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority(p.eft) ","|","|"," deny"),(0,r.kt)("td",{parentName:"tr",align:null},"priorit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Priorit\xe4t"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subjectPriority(p.eft)"),(0,r.kt)("td",{parentName:"tr",align:null},"priorit\xe4re Basis f\xfcr Rolle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Betreff-Priorit\xe4t"))))),(0,r.kt)("h2",{id:"matcher"},"Matcher"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[matchers]")," ist die Definition f\xfcr Policy-Matcher. Die Matcher sind Ausdr\xfccke. Er legt fest, wie die Regeln der Politik anhand des Antrags bewertet werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,r.kt)("p",null,"Der obige Matcher ist der einfachste, es bedeutet, dass Subjekt, Objekt und Aktion in einer Anfrage die in einer Regel der Richtlinie entsprechen sollten."),(0,r.kt)("p",null,"Sie k\xf6nnen die Arithmetik wie ",(0,r.kt)("inlineCode",{parentName:"p"},"+, -, *, /")," und logische Operatoren wie ",(0,r.kt)("inlineCode",{parentName:"p"},"&&, |, |, verwenden!")," in \xdcbereinstimmungen."),(0,r.kt)("h2",{id:"typ-mehrerer-abschnitte"},"Typ mehrerer Abschnitte"),(0,r.kt)("p",null,"Wenn Sie mehrere Richtlinien-Definitionen oder mehrere \xdcbereinstimmungen ben\xf6tigen, k\xf6nnen Sie wie ",(0,r.kt)("inlineCode",{parentName:"p"},"p2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," verwenden. Tats\xe4chlich k\xf6nnen alle oben genannten vier Abschnitte mehrere Typen verwenden und die Syntax ist ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),"+number, wie ",(0,r.kt)("inlineCode",{parentName:"p"},"r2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"e2"),". Standardm\xe4\xdfig sollten diese vier Abschnitte einem entsprechen. So wie Ihr ",(0,r.kt)("inlineCode",{parentName:"p"},"r2")," verwendet nur einen Matcher ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," , um Richtlinien ",(0,r.kt)("inlineCode",{parentName:"p"},"p2")," abzugleichen."),(0,r.kt)("p",null,"Sie k\xf6nnen ",(0,r.kt)("inlineCode",{parentName:"p"},"EnforceContext")," als ersten Parameter von ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce")," Methode durchf\xfchren, um die Typen anzugeben, der ",(0,r.kt)("inlineCode",{parentName:"p"},"Vollstreckungskontext")," ist wie folgt"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(h,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'EnforceContext{"r2","p2","e2","m2"}\ntype EnforceContext struct {\n    RType string\n    PType string\n    EType string\n    MType string\n}\n'))),(0,r.kt)(h,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const enforceContext = new EnforceContext('r2', 'p2', 'e2', 'm2');\nclass EnforceContext {\n  constructor(rType, pType, eType, mType) {\n    this.pType = pType;\n    this.eType = eType;\n    this.mType = mType;\n    this.rType = rType;\n  }\n}\n"))),(0,r.kt)(h,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'EnforceContext enforceContext = new EnforceContext("2");\npublic class EnforceContext {\n    private String pType;\n    private String eType;\n    private String mType;\n    private String rType;\n    public EnforceContext(String suffix) {\n      this.pType = "p" + suffix;\n      this.eType = "e" + suffix;\n      this.mType = "m" + suffix;\n      this.rType = "r" + suffix;\n    }\n}\n')))),(0,r.kt)("p",null,"Beispiel Verwendung, siehe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_model.conf"},"Modell")," und ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_policy.csv"},"Richtlinie"),", die Anfrage ist wie folgt"),(0,r.kt)(u,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(h,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Pass in einem Suffix als Parameter an NewEnforceContext,wie 2 oder 3 und es wird r2,p2,etc..\nenforceContext := NewEnforceContext("2")\n// Sie k\xf6nnen auch einen bestimmten Typ individuell\nenforceContext angeben. Typ = "e"\n// Nicht in EnforceContext,die Standardeinstellung ist r,p,e,m\ne. nforce("alice", "data2", "read") // true\n// durchlaufen in EnforceContext\ne. nforce(enforceContext, struct{ Age int }{Age: 70}, "/data1", "read") //false\ne. nforce(enforceContext, struct{ Age int }{Age: 30}, "/data1", "read") //true\n'))),(0,r.kt)(h,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\n// Pass in einem Suffix als Parameter an NewEnforceContext,wie 2 oder 3 und es wird r2,p2,etc..\nconst enforceContext = new NewEnforceContext(\'2\');\n\n// You can also specify a certain type individually\nenforceContext.eType = "e"\n\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n\n// pass in EnforceContext\ne.Enforce(enforceContext, {Age: 70}, "/data1", "read")      //false\ne.Enforce(enforceContext, {Age: 30}, "/data1", "read")      //true\n'))),(0,r.kt)(h,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Pass in einem Suffix als Parameter an NewEnforceContext,wie 2 oder 3 und es wird r2, p2, etc..\nEnforceContext enforceContext = new EnforceContext("2");\n// Sie k\xf6nnen auch einen bestimmten Typ individuell\nenforceContext angeben. eteType("e");\n// EnforceContext nicht \xfcbergeben, Standard ist r, p, e, m\ne. nforce("alice", "data2", "read"); // true\n// EnforceContext \xfcbergeben\n// TestEvalRule befindet sich in https://github. om/casbin/jcasbin/blob/master/src/test/java/org/casbin/jcasbin/main/AbacAPIUnitTest.java#L56\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 70), "/data1", "read"); // false\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 30), "/data1", "read"); // true true \n e.enforce(enforceContext, new AbacAPIUnitTestEval.TestEvalRule("alice", 30), "/data1", "read"); // true true true true\n')))),(0,r.kt)("h3",{id:"special-grammer"},"Special Grammer"),(0,r.kt)("p",null,"Sie k\xf6nnen auch ",(0,r.kt)("inlineCode",{parentName:"p"},"in"),"verwenden, der einzige Operator mit einem Textnamen. Dieser Operator pr\xfcft das Array auf der rechten Seite, um zu sehen, ob es einen Wert enth\xe4lt, der gleich dem linken Wert ist. Die Gleichberechtigung wird durch den Operator == bestimmt und diese Bibliothek pr\xfcft nicht die Typen zwischen den Werten. Alle zwei Werte, wenn sie an die Schnittstelle gewirkt werden {}, und immer noch auf die Gleichberechtigung mit == \xfcberpr\xfcft werden k\xf6nnen, werden wie erwartet funktionieren. Beachten Sie, dass Sie einen Parameter f\xfcr das Array verwenden k\xf6nnen, aber es muss eine ",(0,r.kt)("inlineCode",{parentName:"p"},"[]Schnittstelle sein{}")," sein."),(0,r.kt)("p",null,"Verweisen Sie auch auf ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf"},"rbac_model_matcher_using_in_op"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf"},"keyget2_model")," und ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf"},"keyget_model")),(0,r.kt)("p",null,"Beispiel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj\n...\n[matchers]\nm = r.sub.Name in (r.obj.Admins)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})\n')),(0,r.kt)("h3",{id:"ausdruck-auswerter"},"Ausdruck-Auswerter"),(0,r.kt)("p",null,"Die Matcher-Auswertung in Casbin wird von Auswertern in jeder Sprache implementiert. Casbin integriert ihre Kompetenzen zur Bereitstellung der einheitlichen PERM-Sprache. Abgesehen von all der hier zur Verf\xfcgung gestellten Modellsyntax k\xf6nnen diese Auswerter zus\xe4tzliche Funktionalit\xe4t bieten, die m\xf6glicherweise nicht von einer anderen Sprache oder Implementierung unterst\xfctzt wird. Die Nutzung erfolgt auf eigene Gefahr."),(0,r.kt)("p",null,"Die Auswerter f\xfcr jede Casbin-Implementierung sind:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Implementierung"),(0,r.kt)("th",{parentName:"tr",align:null},"Sprache"),(0,r.kt)("th",{parentName:"tr",align:null},"Ausdruck-Auswerter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Golang"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Knetic/govaluate"},"https://github.com/Knetic/govaluate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jCasbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Jalta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/killme2008/aviator"},"https://github.com/killme2008/aviator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node-Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://de.github.com/donmccurdy/expression-eval"},"https://de.github.com/donmccurdy/expression-eval"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PHP-Casbin"),(0,r.kt)("td",{parentName:"tr",align:null},"PHP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/symfony/expression-language"},"https://github.com/symfony/expression-language"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PyCasbin"),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/danthedeckie/simpleeval"},"https://github.com/danthedeckie/simpleeval"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Casbin.NET"),(0,r.kt)("td",{parentName:"tr",align:null},"C#"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/davideicardi/DynamicExpresso"},"https://github.com/davideicardi/DynamicExpresso"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Casbin4D"),(0,r.kt)("td",{parentName:"tr",align:null},"Jennifer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"},"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"casbin-rs"),(0,r.kt)("td",{parentName:"tr",align:null},"Rost"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://de.github.com/jonathandturner/rhai"},"https://de.github.com/jonathandturner/rhai"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"casbin-cpp"),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ArashPartow/exprtk"},"https://github.com/ArashPartow/exprtk"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wenn Sie Probleme mit der Leistung von Casbin haben, wird dies wahrscheinlich durch die geringe Effizienz des Ausdrucks Auswerter verursacht. Sie k\xf6nnen sowohl Probleme an Kasbin oder den Ausdruck-Auswerter direkt senden um Ratschl\xe4ge zu beschleunigen. Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/benchmark"},"Benchmarks")," Abschnitt f\xfcr Details."))))}f.isMDXComponent=!0}}]);