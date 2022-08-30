"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"how-it-works",title:"Comment \xe7a marche",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"]},l=void 0,s={unversionedId:"how-it-works",id:"how-it-works",title:"Comment \xe7a marche",description:"How Casbin works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/HowItWorks.mdx",sourceDirName:".",slug:"/how-it-works",permalink:"/fr/docs/how-it-works",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"Comment \xe7a marche",description:"How Casbin works",keywords:["PERM","request","policy","matcher","effect"]},sidebar:"docs",previous:{title:"Commencer",permalink:"/fr/docs/get-started"},next:{title:"Tutoriels",permalink:"/fr/docs/tutorials"}},i={},u=[{value:"Demander",id:"demander",level:3},{value:"Politique de confidentialit\xe9",id:"politique-de-confidentialit\xe9",level:3},{value:"Correspondant",id:"correspondant",level:3},{value:"Effet",id:"effet",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"En Casbin, un mod\xe8le de contr\xf4le d'acc\xe8s est r\xe9sum\xe9 dans un fichier CONF bas\xe9 sur le ",(0,a.kt)("strong",{parentName:"p"},"m\xe9tamodel PERM (Politique, Effect, Demande, Matchers)"),". Donc changer ou mettre \xe0 jour le m\xe9canisme d'autorisation d'un projet est aussi simple que modifier une configuration. Vous pouvez personnaliser votre propre mod\xe8le de contr\xf4le d'acc\xe8s en combinant les mod\xe8les disponibles. Par exemple, vous pouvez combiner les r\xf4les RBAC et les attributs ABAC ensemble dans un mod\xe8le et partager un ensemble de r\xe8gles de politique."),(0,a.kt)("p",null,"Le mod\xe8le PERM est compos\xe9 de quatre fondations (Politiques, Effets, Demandes, Matchers) d\xe9crivant la relation entre ressources et utilisateurs."),(0,a.kt)("h3",{id:"demander"},"Demander"),(0,a.kt)("p",null,"D\xe9finissez les param\xe8tres de la requ\xeate. Une requ\xeate basique est un objet tuple n\xe9cessitant au moins un sujet (entit\xe9 acc\xe9d\xe9e), un objet (ressource acc\xe9d\xe9e) et une action (m\xe9thode d'acc\xe8s)"),(0,a.kt)("p",null,"Par exemple, une d\xe9finition de requ\xeate peut ressembler \xe0 ceci : ",(0,a.kt)("inlineCode",{parentName:"p"},"r={sub,obj,act}")),(0,a.kt)("p",null,"Il d\xe9finit en fait le nom et l'ordre des param\xe8tres que nous devons fournir pour la fonction de contr\xf4le d'acc\xe8s."),(0,a.kt)("h3",{id:"politique-de-confidentialit\xe9"},"Politique de confidentialit\xe9"),(0,a.kt)("p",null,"D\xe9finissez le mod\xe8le de la strat\xe9gie d'acc\xe8s. En fait, il d\xe9finit le nom et l'ordre des champs dans le document de la r\xe8gle de police."),(0,a.kt)("p",null,"Par exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act}")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"p={sub, obj, act, eft}")),(0,a.kt)("p",null,"Note: Si eft (r\xe9sultat de la politique) n'est pas d\xe9fini, alors le champ r\xe9sultat dans le fichier de r\xe9gulation ne sera pas lu, et le r\xe9sultat de la r\xe8gle correspondante sera autoris\xe9 par d\xe9faut."),(0,a.kt)("h3",{id:"correspondant"},"Correspondant"),(0,a.kt)("p",null,"R\xe8gles correspondantes de la requ\xeate et de la politique."),(0,a.kt)("p",null,"Par exemple: ",(0,a.kt)("inlineCode",{parentName:"p"},"m = r.sub == p.sub && r.act == p.act && r.obj == p. bj")," Cette r\xe8gle de correspondance simple et commune signifie que si les param\xe8tres demand\xe9s (entit\xe9s, les ressources, et les m\xe9thodes) sont \xe9gales, c'est-\xe0-dire si elles peuvent \xeatre trouv\xe9es dans la politique, alors le r\xe9sultat de la politique (",(0,a.kt)("inlineCode",{parentName:"p"},"p. ft"),") est retourn\xe9. Le r\xe9sultat de la strat\xe9gie sera sauvegard\xe9 dans ",(0,a.kt)("inlineCode",{parentName:"p"},"p.eft"),"."),(0,a.kt)("h3",{id:"effet"},"Effet"),(0,a.kt)("p",null,"Il peut \xeatre compris comme un mod\xe8le dans lequel un jugement de combinaison logique est effectu\xe9 \xe0 nouveau sur les r\xe9sultats correspondants de Matchers."),(0,a.kt)("p",null,"Par exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},"e = quelque(o\xf9(p.eft == allow))")),(0,a.kt)("p",null,"Cette phrase signifie que si le r\xe9sultat de la strat\xe9gie correspondante p.eft a le r\xe9sultat de (certains) autoriser, alors le r\xe9sultat final est vrai"),(0,a.kt)("p",null,"Regardons un autre exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},"e = quelque part (p.eft == allow)) && !some(o\xf9 (p. ft == niy))")," La signification logique de cette combinaison d'exemple est : s'il y a une strat\xe9gie qui correspond au r\xe9sultat de l'autorisation, et aucune strat\xe9gie ne correspond au r\xe9sultat de la n\xe9gation, le r\xe9sultat est vrai. En d'autres termes, il est vrai que toutes les strat\xe9gies d'appariement sont autoris\xe9es, s'il y a un quelconque n\xe9gligence, tous les deux sont faux (plus simplement, lorsque la permission et le refus existent en m\xeame temps, le refus prend la priorit\xe9)"),(0,a.kt)("p",null,"Le mod\xe8le le plus basique et le plus simple de Casbin est ACL. La CONF du mod\xe8le ACL est :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# D\xe9finition de la requ\xeate\n[request_definition]\nr = sub, obj, act\n\n# D\xe9finition de la politique\n[policy_definition]\np = sub, obj, acte\n\n# Effet de police\n[policy_effect]\ne = quelque part (o\xf9 (p. ft == allow))\n\n# correspondances\n[matchers]\nm = r. ub == p.sub && r.obj == p.obj && r.act == p.act\n\n")),(0,a.kt)("p",null,"Un exemple de politique pour le mod\xe8le ACL est comme :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\n")),(0,a.kt)("p",null,"Cela signifie :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alice peut lire les donn\xe9es1"),(0,a.kt)("li",{parentName:"ul"},"bob peut \xe9crire des donn\xe9es2")),(0,a.kt)("p",null,"Nous supportons \xe9galement le mode multi-lignes en ajoutant '","\\","' \xe0 la fin :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj \\ \n  && r.act == p.act\n")),(0,a.kt)("p",null,"De plus, si vous utilisez ABAC, vous pouvez essayer l'op\xe9rateur ",(0,a.kt)("inlineCode",{parentName:"p"},"dans")," comme dans Casbin ",(0,a.kt)("strong",{parentName:"p"},"golang")," \xe9dition (jCasbin et Node-Casbin ne sont pas encore support\xe9s) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Matchs\n[matchers]\nm = r.obj == p.obj && r.act == p.act || r.obj in ('data2', 'data3')\n")),(0,a.kt)("p",null,"Mais vous ",(0,a.kt)("strong",{parentName:"p"},"DEVRIEZ")," vous assurer que la longueur de la table est ",(0,a.kt)("strong",{parentName:"p"},"PLUS")," que ",(0,a.kt)("strong",{parentName:"p"},"1"),", sinon il provoquera la panique."),(0,a.kt)("p",null,"Pour plus d'op\xe9rateurs, vous pouvez jeter un coup d'\u0153il \xe0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Knetic/govaluate"},"la valeur de la ch\xe8vre")))}c.isMDXComponent=!0}}]);