"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4145],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9369:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),s=["components"],o={id:"frontend",title:"Frontend-Nutzung"},l=void 0,d={unversionedId:"frontend",id:"frontend",title:"Frontend-Nutzung",description:"Casbin.js ist ein Casbin-Addon, das Ihr Zugriffskontrollmanagement in der Frontend-Anwendung erleichtert.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/de/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",frontMatter:{id:"frontend",title:"Frontend-Nutzung"},sidebar:"docs",previous:{title:"Log- & Fehlerbehandlung",permalink:"/de/docs/log-error"},next:{title:"Online-Editor",permalink:"/de/docs/online-editor"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Frontend Middlewares",id:"frontend-middlewares",level:2},{value:"Schnellstart",id:"schnellstart",level:2},{value:"Erweiterte Nutzung",id:"erweiterte-nutzung",level:2},{value:"API-Liste",id:"api-liste",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"Warum Casbin.js",id:"warum-casbinjs",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," ist ein Casbin-Addon, das Ihr Zugriffskontrollmanagement in der Frontend-Anwendung erleichtert."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,a.kt)("p",null,"oder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,a.kt)("h2",{id:"frontend-middlewares"},"Frontend Middlewares"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,a.kt)("th",{parentName:"tr",align:null},"Typ"),(0,a.kt)("th",{parentName:"tr",align:null},"Autor"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"reakt-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"Reagieren"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Reagiere Wrapper f\xfcr Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-Reaktion")),(0,a.kt)("td",{parentName:"tr",align:null},"Reagieren"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,a.kt)("td",{parentName:"tr",align:null},"Rollenbasierte Zugriffskontrolle in React mit HOCs, CASL und Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"vue-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"Vue"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Vue wrapper f\xfcr Casbin.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"angular-authz")),(0,a.kt)("td",{parentName:"tr",align:null},"Winkel"),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Winkelwickeln f\xfcr Casbin.js")))),(0,a.kt)("h2",{id:"schnellstart"},"Schnellstart"),(0,a.kt)("p",null,"Du kannst den ",(0,a.kt)("inlineCode",{parentName:"p"},"manuellen")," Modus in deiner Frontend-Anwendung verwenden und die Berechtigung festlegen, wann immer du m\xf6chtest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin. s");\n// Benutzerberechtigung:\n// Er/Sie kann `data1` und `data2` Objekte lesen und `data1` Objekt schreiben\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// Casbin ausf\xfchren. s im manuellen Modus, was erfordert, dass Sie die Berechtigung manuell festlegen.\nconst authorizer = new casbinjs.Authorizer("manual");\n')),(0,a.kt)("p",null,"jetzt haben wir einen Autorisierer ",(0,a.kt)("inlineCode",{parentName:"p"},"Autorisierer")," bekommen. Wir k\xf6nnen die Berechtigungsregeln \xfcber die API ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizer.can()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizer.cannot()")," erhalten. Die R\xfcckgabewerte dieser 2 APIs sind JavaScript-Versprechen (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"Details hier"),"), also sollten wir die ",(0,a.kt)("inlineCode",{parentName:"p"},"then()")," Methode des R\xfcckgabewertes wie folgt verwenden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nErgebnis. hen(Erfolg, fehlgeschlagen) => {\n    if (success) {\n        console. og("Sie k\xf6nnen data1");\n    } else {\n        console. og("Sie k\xf6nnen Daten nicht schreiben1");\n    }\n});\n// Ausgabe: Sie k\xf6nnen Daten 1 schreiben\n')),(0,a.kt)("p",null,"und ",(0,a.kt)("inlineCode",{parentName:"p"},"cannot()")," wird auf die gleiche Weise verwendet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nErgebnis. hen(Erfolg, fehlgeschlagen) => {\n    if (success) {\n        console. og("Sie k\xf6nnen nicht data2");\n    } else {\n        console. og("Sie k\xf6nnen data2");\n    }\n});\n// Ausgabe: Sie k\xf6nnen data2 lesen\n')),(0,a.kt)("p",null,"im obigen Code, Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"Erfolg")," in Parametern bedeutet, dass die Anfrage das Ergebnis erh\xe4lt, ohne einen Fehler zu werfen, und bedeutet nicht, dass die Berechtigungsregel ",(0,a.kt)("inlineCode",{parentName:"p"},"wahr ist"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"fehlgeschlagen")," steht auch nicht mit den Berechtigungsregeln in Verbindung. Das macht nur Sinn, wenn im Antragsprozess etwas schief l\xe4uft."),(0,a.kt)("p",null,"Sie k\xf6nnen auf unser ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"Reaktionsbeispiel")," verweisen, um eine praktische Nutzung von Casbin.js zu sehen"),(0,a.kt)("h2",{id:"erweiterte-nutzung"},"Erweiterte Nutzung"),(0,a.kt)("p",null,"Casbin.js bietet eine perfekte L\xf6sung zur Integration Ihres Frontend Access-Control-Managements in Ihren Backend Casbin Service."),(0,a.kt)("p",null,"Verwenden Sie den ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto-")," Modus und geben Sie Ihren Endpunkt bei der Initialisierung des Kasbins an. s ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorizer"),"wird automatisch die Berechtigung synchronisieren und den Frontend-Status manipulieren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// Setzen Sie Ihre Backend casbin Service url\nconst authorizer = new casbinjs. uthorizer(\n    'auto', // Modus\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// Besucher einstellen. \n// Casbin.js wird die Berechtigung automatisch mit Ihrem Backend Casbin Service synchronisieren.\nauthorizer.setUser(\"Tom\");\n\n// Berechtigung auswerten\nresult = authorizer.can(\"read\", \"data1\");\nErgebnis. Sie(Erfolgreich fehlgeschlagen) => {\n    if (success) {\n        // Einige Frontend-Prozeduren ...\n    }\n});\n")),(0,a.kt)("p",null,"Entsprechend m\xfcssen Sie eine Schnittstelle (z.B. eine RestAPI), um das Berechtigungsobjekt zu generieren und an das Frontend zu \xfcbergeben. Rufen Sie in Ihrem API-Controller ",(0,a.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," auf, um das Berechtigungsobjekt zu erstellen. Hier ist ein Beispiel in Beego:"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Dein Endpunkt-Server sollte so etwas wie"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'// Router\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// Controller\nfunc (c *APIController) GetFrontendPermission() {\n    // Besucher von den GET-Parametern holen. (Der Schl\xfcssel ist "casbin_subject")\n    Besucher := c.Input(). et("casbin_subject")\n    // `e` ist eine initialisierte Instanz von Casbin Enforcer\n    c. ata["perm"] = casbin.CasbinJsGetPermissionForUser(e, Besucher) \n    // Daten an das Frontend \xfcbergeben.\n    c.ServeJSON()\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Derzeit wird ",(0,a.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," api nur in Go Casbin und Node-Casbin unterst\xfctzt. Wenn Sie m\xf6chten, dass diese Api in anderen Sprachen unterst\xfctzt wird, rufen Sie bitte ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"ein Problem an")," oder hinterlassen Sie einen Kommentar unten."))),(0,a.kt)("h2",{id:"api-liste"},"API-Liste"),(0,a.kt)("h4",{id:"setpermissionpermission-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,a.kt)("p",null,"Berechtigungsobjekt festlegen. Immer im ",(0,a.kt)("inlineCode",{parentName:"p"},"manuellen")," Modus verwendet."),(0,a.kt)("h4",{id:"setuseruser-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,a.kt)("p",null,"Legen Sie die Besucheridentit\xe4t fest und aktualisieren Sie die Berechtigung. Immer im ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto-")," Modus verwendet."),(0,a.kt)("h4",{id:"canaction-string-object-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,a.kt)("p",null,"Pr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"Aktion")," auf ",(0,a.kt)("inlineCode",{parentName:"p"},"Objekt")," ausf\xfchren kann."),(0,a.kt)("h4",{id:"cannotaction-string-object-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,a.kt)("p",null,"Check if the user ",(0,a.kt)("strong",{parentName:"p"},"cannot")," perform ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,a.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,a.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,a.kt)("p",null,"Pr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"Aktion")," auf ",(0,a.kt)("strong",{parentName:"p"},"allen")," Objekten in ",(0,a.kt)("inlineCode",{parentName:"p"},"Objekten")," ausf\xfchren kann."),(0,a.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,a.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,a.kt)("p",null,"Pr\xfcfen Sie, ob der Benutzer ",(0,a.kt)("inlineCode",{parentName:"p"},"Aktion")," auf ",(0,a.kt)("strong",{parentName:"p"},"eines")," der ",(0,a.kt)("inlineCode",{parentName:"p"},"Objekte")," ausf\xfchren kann."),(0,a.kt)("h2",{id:"warum-casbinjs"},"Warum Casbin.js"),(0,a.kt)("p",null,"Die Leute fragen sich vielleicht, was zwischen Node-Casbin und Casbin.js liegt. Mit einem Wort: Node-Casbin ist der Kern von Casbin in NodeJS-Umgebung implementiert und wird normalerweise als Access-Control-Management-Toolkit am Serverende verwendet. Casbin.js ist eine Frontend-Bibliothek, die Ihnen hilft, Casbin zu nutzen, um Ihren Website-Benutzer auf der Client-Seite zu autorisieren."),(0,a.kt)("p",null,"Normalerweise es ist nicht angemessen, direkt einen Casbin-Dienst aufzubauen und die Autorisierung/Vollstreckungsaufgaben an einer Web-Frontend-Anwendung zu erledigen, da folgende Probleme auftreten:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Wenn jemand den Client aktiviert, wird der Vollstrecker initialisiert und er wird alle Richtlinien aus dem Backend persistente Ebenen ziehen. Eine hohe Koncurrenz k\xf6nnte die Datenbanken stark unter Druck setzen und einen hohen Netzwerkdurchsatz kosten.\xa0"),(0,a.kt)("li",{parentName:"ol"},"Das Laden aller Richtlinien auf die Kundenseite k\xf6nnte sichere Risiken mit sich bringen."),(0,a.kt)("li",{parentName:"ol"},"Schwierig f\xfcr die Trennung zwischen Client und Server sowie die agile Entwicklung.")),(0,a.kt)("p",null,"Wir w\xfcnschen Ihnen ein Werkzeug, das die Verwendung von Casbin im Frontend erleichtert. Tats\xe4chlich ist der Kern von Casbin.js die Manipulation der aktuellen Benutzerberechtigung auf der Client-Seite. Wie Sie bereits erw\xe4hnt haben, holt Casbin.js einen bestimmten Endpunkt. Diese Prozedur wird die Berechtigung des Benutzers mit dem Backend Casbin Service synchronisieren. Nachdem die Berechtigungsdaten vorliegen, k\xf6nnen Entwickler Casbin.js Schnittstellen verwenden, um das Verhalten des Benutzers auf der Frontend-Seite zu verwalten."),(0,a.kt)("p",null,"Kasbin s vermeiden die beiden oben genannten Probleme: Der Casbin-Service wird nicht mehr wiederholt in Anspruch genommen, und die Gr\xf6\xdfe der \xdcbertragung von Nachrichten zwischen dem Client und dem Server wird reduziert. Wir vermeiden auch, alle Politiken an der Front zu speichern. Der Benutzer kann nur auf seine eigene Berechtigung zugreifen, hat aber keine Ahnung von Dingen wie dem Zugriffskontrollmodell und den Berechtigungen anderer Benutzer. Au\xdferdem kann Casbin.js auch den Client und den Server im Autorisierungsmanagement effizient entkoppeln."))}m.isMDXComponent=!0}}]);