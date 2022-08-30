"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5684],{3905:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>m});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function u(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),o=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},d=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=o(i),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return i?t.createElement(h,l(l({ref:n},d),{},{components:i})):t.createElement(h,l({ref:n},d))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<a;o++)l[o]=i[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4514:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var t=i(7462),r=(i(7294),i(3905));const a={title:"Autorisierung in APISIX mit Casbin",author:"Rushikesh Tote",authorTitle:"Mitglied von Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},l=void 0,u={permalink:"/de/blog/2021/08/19/apisix-casbin-authorization",editUrl:"https://crowdin.com/project/casbin-website/de",source:"@site/i18n/de/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md",title:"Autorisierung in APISIX mit Casbin",description:"Einf\xfchrung",date:"2021-08-19T00:00:00.000Z",formattedDate:"19. August 2021",tags:[],readingTime:5.425,hasTruncateMarker:!1,authors:[{name:"Rushikesh Tote",title:"Mitglied von Casbin",url:"http://github.com/rushitote",imageURL:"https://avatars.githubusercontent.com/rushitote"}],frontMatter:{title:"Autorisierung in APISIX mit Casbin",author:"Rushikesh Tote",authorTitle:"Mitglied von Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},nextItem:{title:"Yang Luo - Google Open Source Peer Bonus Gewinner",permalink:"/de/blog/2020/04/21/google-award"}},s={authorsImageUrls:[void 0]},o=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Erstellen eines Modells",id:"erstellen-eines-modells",level:2},{value:"Richtlinien erstellen",id:"richtlinien-erstellen",level:2},{value:"Aktiviere das Plugin auf der Route",id:"aktiviere-das-plugin-auf-der-route",level:2},{value:"Aktiviere das Plugin mit einem globalen Modell/Richtlinie",id:"aktiviere-das-plugin-mit-einem-globalen-modellrichtlinie",level:2},{value:"Verwende F\xe4lle",id:"verwende-f\xe4lle",level:2}],d={toc:o};function c(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"einf\xfchrung"},"Einf\xfchrung"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"APISIX")," ist ein hochleistungsf\xe4higes und skalierbares natives API Gateway basierend auf Nginx und etc. Es ist ein Open-Source-Projekt der Apache Software Foundation. Au\xdferdem ist das, was APISIX so gut macht, die Unterst\xfctzung vieler gro\xdfartiger Plugins, die verwendet werden k\xf6nnten, um Funktionen wie Authentifizierung zu implementieren, \xfcberwachen, routing, etc. Und die Tatsache, dass Plugins in APISIX hei\xdf neu geladen werden (ohne Neustart) macht es sehr dynamisch."),(0,r.kt)("p",null,"Bei Verwendung von APISIX kann es jedoch zu Szenarien kommen, bei denen Sie m\xf6glicherweise komplexe Autorisierungslogik in Ihrer Anwendung hinzuf\xfcgen m\xf6chten. Hier k\xf6nnte Ihnen authz-casbin helfen authz-casbin ist ein APISIX-Plugin, das auf ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," basiert, das eine leistungsstarke Autorisierung basierend auf verschiedenen Zugriffskontrollmodellen erm\xf6glicht. ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.io/"},"Casbin")," ist eine Autorisierungsbibliothek, die Zugriffskontrollmodelle wie ACL, RBAC, ABAC unterst\xfctzt. Urspr\xfcnglich in Go geschrieben, wurde es in viele Sprachen portiert und Lua Casbin ist die Lua-Implementierung von Casbin. Die Entwicklung von authz-casbin startete, als wir ein neues Plugin f\xfcr die Autorisierung im APISIX-Repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4674"},"#4674"),"), dem die Kernmitglieder zugestimmt haben, vorschlugen. Und nach den hilfreichen Bewertungen, die zu einigen wesentlichen \xc4nderungen und Verbesserungen gef\xfchrt haben, wurde die PR (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4710"},"#4710"),") schlie\xdflich zusammengef\xfchrt."),(0,r.kt)("p",null,"In diesem Blog, wir werden das authz-casbin Plugin verwenden, um zu zeigen, wie Sie ein Autorisierungsmodell basierend auf der Role Based Access Control (RBAC) in APISIX implementieren k\xf6nnen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HINWEIS"),": Sie m\xfcssen ein anderes Plugin oder einen benutzerdefinierten Workflow verwenden, um den Benutzer zu authentifizieren, da Casbin nur die Autorisierung und keine Authentifizierung durchf\xfchrt."),(0,r.kt)("h2",{id:"erstellen-eines-modells"},"Erstellen eines Modells"),(0,r.kt)("p",null,"Das Plugin verwendet drei Parameter, um jede Anfrage zu autorisieren - Subjekt, Objekt und Aktion. Betreff ist hier der Wert des Benutzernamen-Headers, der so etwas wie ",(0,r.kt)("inlineCode",{parentName:"p"},"[Benutzername: alice]")," sein k\xf6nnte. Dann ist das Objekt der URL-Pfad, auf den zugegriffen wird und die Aktion ist die Anfragemethode, die verwendet wird."),(0,r.kt)("p",null,"Nehmen wir an, wir wollen ein Modell mit drei Ressourcen an den Pfaden erstellen - ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/res1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"/res2"),". Und wir wollen ein Modell wie dies:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7BlvBNR.png",alt:"bild"})),(0,r.kt)("p",null,"Dies w\xfcrde bedeuten, dass alle Benutzer (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") wie zum Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"jack")," auf die Homepage zugreifen k\xf6nnen (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"). Und Benutzer mit ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," Berechtigungen wie ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," k\xf6nnen auf alle Seiten und Ressourcen zugreifen (wie ",(0,r.kt)("inlineCode",{parentName:"p"},"res1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"res2"),"). Lass uns Benutzer ohne Administratorrechte auf nur ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," Anfragemethode beschr\xe4nken. F\xfcr dieses Szenario k\xf6nnten wir das Modell definieren als:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, handeln\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = irgendwo (p. ft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p. ub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,r.kt)("h2",{id:"richtlinien-erstellen"},"Richtlinien erstellen"),(0,r.kt)("p",null,"Aus dem oben genannten Szenario w\xe4re die Politik folgende:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin\n")),(0,r.kt)("p",null,"Der Matcher des Modells bedeutet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))"),": Entweder hat der Betreff des Antrags eine Rolle als Betreff der Richtlinie, oder der Betreff des Antrags passt in ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch")," ist in Funktion in Lua Kasbin Sie k\xf6nnen einen Blick auf die Beschreibung der Funktion werfen und mehr solche Funktionen, die hier ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"n\xfctzlich sein k\xf6nnten"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": Das Objekt der Anfrage entspricht dem Objekt der Richtlinie (URL-Pfad hier)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": Die Aktion des Requests stimmt mit der Aktion der Richtlinie \xfcberein (HTTP-Request-Methode hier).")),(0,r.kt)("h2",{id:"aktiviere-das-plugin-auf-der-route"},"Aktiviere das Plugin auf der Route"),(0,r.kt)("p",null,"Sobald Sie das Modell und die Richtlinie erstellt haben, k\xf6nnen Sie es auf einer Route mit der APISIX Admin API aktivieren. Um es mit Modell- und Richtlinien-Datei-Pfaden zu aktivieren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model". onf",\n            "policy_path": "/path/to/policy. sv",\n            "Benutzername": "Benutzername"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,"Hier ist das Feld Benutzername der Headername, den Sie im Betreff \xfcbergeben werden. Wenn Sie zum Beispiel den Benutzernamen als ",(0,r.kt)("inlineCode",{parentName:"p"},"Benutzer \xfcbergeben werden: Alice"),", w\xfcrden Sie ",(0,r.kt)("inlineCode",{parentName:"p"},'"Benutzername": "Benutzer"')," verwenden."),(0,r.kt)("p",null,"Um Modell-/Richtlinien-Text anstelle von Dateien zu verwenden, k\xf6nnen Sie stattdessen das ",(0,r.kt)("inlineCode",{parentName:"p"},"-Modell")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"Richtlinie")," Felder verwenden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, Akt\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = irgendwo (p. ft == allow))\n\n            [matchers]\n            m = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin\n            g, bob, admin",\n\n            "Benutzername": "Benutzername"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("h2",{id:"aktiviere-das-plugin-mit-einem-globalen-modellrichtlinie"},"Aktiviere das Plugin mit einem globalen Modell/Richtlinie"),(0,r.kt)("p",null,"Es kann Situationen geben, in denen Sie ein einzelnes Modell und die Richtlinien-Konfiguration \xfcber mehrere Routen hinweg verwenden m\xf6chten. Sie k\xf6nnen dies tun, indem Sie zuerst eine ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," Anfrage senden, um das Modell und die Richtlinien-Konfiguration zu den Metadaten des Plugins hinzuzuf\xfcgen von:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = irgendwo (p. ft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,r.kt)("p",null,"Und um dann die gleiche Konfiguration auf einer Route zu aktivieren, senden Sie eine Anfrage mit der Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "username"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127. .0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/route1/*"\n}\'\n')),(0,r.kt)("p",null,"Dies wird die Plugin-Metadatenkonfiguration zur Route hinzuf\xfcgen. Sie k\xf6nnen die Metadatenkonfiguration des Plugins auch ganz einfach aktualisieren, indem Sie die Anfrage an die Metadaten des Plugins mit aktualisiertem Modell und Richtlinien-Konfiguration erneut schicken, das Plugin aktualisiert automatisch alle Routen mit dem Plugin Metadata."),(0,r.kt)("h2",{id:"verwende-f\xe4lle"},"Verwende F\xe4lle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der prim\xe4re Anwendungsfall dieses Plugins w\xe4re die Implementierung der Autorisierung in Ihren APIs. Sie k\xf6nnen dieses Plugin ganz einfach auf jeder API-Route hinzuf\xfcgen, die Sie mit Ihrem Autorisierungsmodell und Ihrer Richtlinien-Konfiguration verwenden."),(0,r.kt)("li",{parentName:"ul"},"Wenn Sie ein einziges Autorisierungsmodell f\xfcr alle Ihre APIs haben m\xf6chten, k\xf6nnen Sie globale Modelle/Richtlinien-Methode verwenden. Dies erleichtert die Aktualisierung der Richtlinie f\xfcr alle Routen, da Sie nur die Metadaten in etcd aktualisieren m\xfcssen."),(0,r.kt)("li",{parentName:"ul"},"Wenn Sie f\xfcr jede Route ein anderes Modell verwenden m\xf6chten, k\xf6nnen Sie die Routenmethode verwenden. Dies ist hilfreich, wenn verschiedene API-Routen unterschiedliche Benutzerberechtigungen haben. Sie k\xf6nnen dies auch verwenden, wenn Sie sich mit gr\xf6\xdferen Richtlinien befassen, da es die Autorisierung beschleunigen wird, wenn Sie in mehrere Routen gefiltert werden.")))}c.isMDXComponent=!0}}]);