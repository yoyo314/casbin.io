"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={id:"model-storage",title:"Modellspeicher",description:"Model storage",keywords:["model storage"]},l=void 0,o={unversionedId:"model-storage",id:"model-storage",title:"Modellspeicher",description:"Model storage",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/ModelStorage.mdx",sourceDirName:".",slug:"/model-storage",permalink:"/de/docs/model-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"model-storage",title:"Modellspeicher",description:"Model storage",keywords:["model storage"]},sidebar:"docs",previous:{title:"Storage",permalink:"/de/docs/category/storage"},next:{title:"Richtlinien-Speicher",permalink:"/de/docs/policy-storage"}},s={},d=[{value:"Modell aus .CONF-Datei laden",id:"modell-aus-conf-datei-laden",level:2},{value:"Modell aus Code laden",id:"modell-aus-code-laden",level:2},{value:"Modell aus String laden",id:"modell-aus-string-laden",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Anders als die Politik, kann das Modell nur geladen werden, es kann nicht gespeichert werden. Weil wir der Meinung sind, dass das Modell keine dynamische Komponente ist und nicht zur Laufzeit ge\xe4ndert werden sollte so dass wir keine API implementieren, um das Modell in einen Speicher zu speichern."),(0,a.kt)("p",null,"Die gute Nachricht ist, dass wir drei gleichwertige M\xf6glichkeiten bieten, ein Modell statisch oder dynamisch zu laden:"),(0,a.kt)("h2",{id:"modell-aus-conf-datei-laden"},"Modell aus .CONF-Datei laden"),(0,a.kt)("p",null,"Dies ist die h\xe4ufigste Art Casbin zu benutzen. Es ist einfach f\xfcr Anf\xe4nger zu verstehen und praktisch, wenn Sie das Casbin Team um Hilfe bitten."),(0,a.kt)("p",null,"Der Inhalt der ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," Datei ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_model.conf"},"examples/rbac_model.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"Dann k\xf6nnen Sie die Modelldatei laden als:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,a.kt)("h2",{id:"modell-aus-code-laden"},"Modell aus Code laden"),(0,a.kt)("p",null,"Das Modell kann dynamisch aus dem Code initialisiert werden anstatt mit der ",(0,a.kt)("inlineCode",{parentName:"p"},".CONF")," Datei. Hier ist ein Beispiel f\xfcr das RBAC-Modell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\n// Modell vom Go-Code initialisieren\nm := model.NewModel()\nm.AddDef("r", "r", "sub, obj, act")\nm.AddDef("p", "p", "sub, obj, act")\nm.AddDef("g", "g", "_, _")\nm.AddDef("e", "e", "some(where (p. ft == allow))")\nm.AddDef("m", "m", "g(r.sub, p.sub) && r.obj == p. bj && r.act == p.act")\n\n// Regeln aus dem .CSV-Datei-Adapter laden.\n// Ersetzen Sie es mit Ihrem Adapter, um Dateien zu vermeiden.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Erstellt den Durchsetzer.\ne := casbin.NewEnforcer(m, a)\n')),(0,a.kt)("h2",{id:"modell-aus-string-laden"},"Modell aus String laden"),(0,a.kt)("p",null,"Oder Sie laden den gesamten Modelltext aus einem mehrzeiligen String. Das Gute an diesem Weg ist, dass Sie keine Modelldatei pflegen m\xfcssen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n)\n\n// Initialize the model from a string.\ntext :=\n`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = irgendwo (p. ft == allow))\n\n[matchers]\nm = g(r.sub, p. ub) && r.obj == p.obj && r.act == p. ct\n`\nm, _ := model.NewModelFromString(text)\n\n// Richtlinien aus dem .CSV-Datei-Adapter laden.\n// Ersetzen Sie es mit Ihrem Adapter, um Dateien zu vermeiden.\na := fileadapter.NewAdapter("examples/rbac_policy.csv")\n\n// Erstellt den Durchsetzer.\ne := casbin.NewEnforcer(m, a)\n')))}p.isMDXComponent=!0}}]);