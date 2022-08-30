"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2915],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,m=p["".concat(o,".").concat(f)]||p[f]||c[f]||a;return t?i.createElement(m,s(s({ref:n},u),{},{components:t})):i.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={id:"how-it-works",title:"So funktioniert es",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"]},s=void 0,l={unversionedId:"how-it-works",id:"how-it-works",title:"So funktioniert es",description:"How Casbin works",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/de/docs/how-it-works",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"So funktioniert es",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"]},sidebar:"docs",previous:{title:"Los geht's",permalink:"/de/docs/get-started"},next:{title:"Anleitungen",permalink:"/de/docs/tutorials"}},o={},d=[{value:"Anfrage",id:"anfrage",level:3},{value:"Richtlinien",id:"richtlinien",level:3},{value:"Matcher",id:"matcher",level:3},{value:"Effekt",id:"effekt",level:3}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Casbin wird ein Zugriffskontrollmodell in eine CONF-Datei abstrahiert, basierend auf der ",(0,r.kt)("strong",{parentName:"p"},"PERM-Metamodel (Policy, Effect, Request, Matchers)"),". Das Umschalten oder Aktualisieren des Autorisierungsmechanismus f\xfcr ein Projekt ist daher genauso einfach wie das \xc4ndern einer Konfiguration. Sie k\xf6nnen Ihr eigenes Zugangskontrollmodell anpassen, indem Sie die verf\xfcgbaren Modelle kombinieren. Zum Beispiel k\xf6nnen RBAC-Rollen und ABAC-Attribute in einem Modell kombiniert werden und eine Reihe von Richtlinien-Regeln gemeinsam genutzt werden."),(0,r.kt)("p",null,"Das PERM-Modell besteht aus vier Stiftungen (Policy, Effect, Request, Matchers), die die Beziehung zwischen Ressourcen und Nutzern beschreiben."),(0,r.kt)("h3",{id:"anfrage"},"Anfrage"),(0,r.kt)("p",null,"Definieren Sie die Abfrageparameter. Eine grundlegende Anfrage ist ein Tuple-Objekt, das mindestens einen Betreff (zugegriffene Entit\xe4t), Objekt (aufgerufene Ressource) und Aktion (Zugriffsmethode) ben\xf6tigt"),(0,r.kt)("p",null,"Zum Beispiel kann eine Anfragedefinition so aussehen: ",(0,r.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,r.kt)("p",null,"Er definiert den Namen und die Reihenfolge der Parameter, die wir f\xfcr die Zugriffskontrolle zur Verf\xfcgung stellen sollten."),(0,r.kt)("h3",{id:"richtlinien"},"Richtlinien"),(0,r.kt)("p",null,"Definieren Sie das Modell der Zugriffsstrategie. Tats\xe4chlich definiert er den Namen und die Reihenfolge der Felder im Richtlinien-Regeldokument."),(0,r.kt)("p",null,"Zum Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,r.kt)("p",null,"Hinweis: Wenn eft (Richtlinienergebnis) nicht definiert ist, wird das Ergebnisfeld in der Richtlinien-Datei nicht gelesen, und das \xfcbereinstimmende Ergebnis wird standardm\xe4\xdfig erlaubt."),(0,r.kt)("h3",{id:"matcher"},"Matcher"),(0,r.kt)("p",null,"Passende Regeln f\xfcr Anfrage und Richtlinie."),(0,r.kt)("p",null,"Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p. bj")," Diese einfache und gemeinsame Regel bedeutet, dass wenn die angeforderten Parameter (Entit\xe4ten, -Resourcen und -Methoden) sind gleich, das hei\xdft, wenn sie in der Richtlinie gefunden werden k\xf6nnen, dann das Endergebnis (",(0,r.kt)("inlineCode",{parentName:"p"},"p. ft"),") wird zur\xfcckgegeben. Das Ergebnis der Strategie wird in ",(0,r.kt)("inlineCode",{parentName:"p"},"p.eft")," gespeichert."),(0,r.kt)("h3",{id:"effekt"},"Effekt"),(0,r.kt)("p",null,"Es kann als Modell verstanden werden, in dem ein logisches Kombinationsurteil erneut \xfcber die \xfcbereinstimmenden Ergebnisse von Matchern durchgef\xfchrt wird."),(0,r.kt)("p",null,"Zum Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"e = irgendwe(wo(p.eft == erlaubt))")),(0,r.kt)("p",null,"Dieser Satz bedeutet, dass, wenn das \xfcbereinstimmende Strategieergebnis p.eft das Ergebnis von (einige) erlaubt, das Endergebnis wahr ist"),(0,r.kt)("p",null,"Werfen wir einen Blick auf ein anderes Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"e = some(where (p.eft == allow)) && !some(where (p. ft == deny))")," Die logische Bedeutung dieser Beispiel-Kombination ist: Wenn es eine Strategie gibt, die mit dem Ergebnis der Erlaubnis \xfcbereinstimmt, und keine Strategie, die mit dem Ergebnis der Ablehnung \xfcbereinstimmt, das Ergebnis ist wahr. Mit anderen Worten, es ist wahr, wenn alle \xfcbereinstimmenden Strategien erlaubt sind, wenn es leugnet wird. beide sind falsch (einfacher, wenn gleichzeitig erlaubt und verweigert wird, wird verweigert)"),(0,r.kt)("p",null,"Das einfachste und einfachste Modell in Casbin ist ACL. ACL's Modell CONF ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Anforderungsdefinition\n[request_definition]\nr = sub, obj, act\n\n# Richtlinien-Definition\n[policy_definition]\np = sub, obj, act\n\n# Policy-Effekt\n[policy_effect]\ne = some(where (p. ft == allow))\n\n# Matcher\n[matchers]\nm = r. ub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,r.kt)("p",null,"Eine Beispielrichtlinie f\xfcr das ACL-Modell ist wie folgt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, alice, data1, lesen\np, bob, data2, schreiben\n")),(0,r.kt)("p",null,"Es bedeutet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alice kann Daten 1 lesen"),(0,r.kt)("li",{parentName:"ul"},"bob kann Daten 2 schreiben")),(0,r.kt)("p",null,"Wir unterst\xfctzen auch den Mehrzeiligen-Modus durch Anh\xe4ngen von '","\\","' am Ende:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matcher\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\ \n  && r.act == p.act\n")),(0,r.kt)("p",null,"Au\xdferdem, wenn Sie ABAC verwenden, Sie k\xf6nnen Operator ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," probieren, wie folgt in Casbin ",(0,r.kt)("strong",{parentName:"p"},"golang")," Edition (jCasbin und Node-Casbin werden noch nicht unterst\xfctzt):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Matcher\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,r.kt)("p",null,"Aber Sie ",(0,r.kt)("strong",{parentName:"p"},"SHOULD")," stellen sicher, dass die L\xe4nge des Arrays ",(0,r.kt)("strong",{parentName:"p"},"MEHR")," als ",(0,r.kt)("strong",{parentName:"p"},"1"),"ist, andernfalls wird es zu Panik f\xfchren."),(0,r.kt)("p",null,"F\xfcr mehr Operatoren k\xf6nnen Sie einen Blick auf ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"werfen")))}c.isMDXComponent=!0}}]);