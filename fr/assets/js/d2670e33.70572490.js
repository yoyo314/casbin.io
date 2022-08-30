"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(b,u(u({ref:t},p),{},{components:n})):i.createElement(b,u({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,u[1]=r;for(var s=2;s<o;s++)u[s]=n[s];return i.createElement.apply(null,u)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={title:"Autorisation dans APISIX \xe0 l'aide de Casbin",author:"Rushikesh Tote",authorTitle:"Membre de Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},u=void 0,r={permalink:"/fr/blog/2021/08/19/apisix-casbin-authorization",editUrl:"https://crowdin.com/project/casbin-website/fr",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md",title:"Autorisation dans APISIX \xe0 l'aide de Casbin",description:"Introduction",date:"2021-08-19T00:00:00.000Z",formattedDate:"19 ao\xfbt 2021",tags:[],readingTime:6.055,hasTruncateMarker:!1,authors:[{name:"Rushikesh Tote",title:"Membre de Casbin",url:"http://github.com/rushitote",imageURL:"https://avatars.githubusercontent.com/rushitote"}],frontMatter:{title:"Autorisation dans APISIX \xe0 l'aide de Casbin",author:"Rushikesh Tote",authorTitle:"Membre de Casbin",authorURL:"http://github.com/rushitote",authorImageURL:"https://avatars.githubusercontent.com/rushitote"},nextItem:{title:"Yang Luo - Gagnant du bonus Google Open Source par les pairs",permalink:"/fr/blog/2020/04/21/google-award"}},l={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Cr\xe9ation d&#39;un mod\xe8le",id:"cr\xe9ation-dun-mod\xe8le",level:2},{value:"Cr\xe9er une politique",id:"cr\xe9er-une-politique",level:2},{value:"Activation du plugin sur la route",id:"activation-du-plugin-sur-la-route",level:2},{value:"Activer le plugin en utilisant un mod\xe8le/politique global",id:"activer-le-plugin-en-utilisant-un-mod\xe8lepolitique-global",level:2},{value:"Cas d&#39;utilisation",id:"cas-dutilisation",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"APISIX")," est une passerelle native de nuage haute performance et \xe9volutive bas\xe9e sur Nginx et etcd. C'est un projet open source de la Fondation du logiciel Apache. En plus de cela, ce qui rend APISIX si bon est le support de nombreux plugins qui pourraient \xeatre utilis\xe9s pour impl\xe9menter des fonctionnalit\xe9s comme l'authentification, surveillance, routage, etc. Et le fait que les plugins d'APISIX soient recharg\xe9s \xe0 chaud (sans red\xe9marrage) le rend tr\xe8s dynamique."),(0,a.kt)("p",null,"Mais lorsque vous utilisez APISIX, il peut y avoir des sc\xe9narios o\xf9 vous pourriez vouloir ajouter une logique d'autorisation complexe dans votre application. C'est l\xe0 que authz-casbin pourrait vous aider, authz-casbin est un plugin APISIX bas\xe9 sur ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," qui permet une autorisation puissante bas\xe9e sur diff\xe9rents mod\xe8les de contr\xf4le d'acc\xe8s. ",(0,a.kt)("a",{parentName:"p",href:"https://casbin.io/"},"Casbin")," est une biblioth\xe8que d'autorisation qui supporte le mod\u010dle de pilotage d'acc\xe8s comme ACL, RBAC, ABAC. Initialement \xe9crit en Go, il a \xe9t\xe9 port\xe9 dans de nombreuses langues et Lua Casbin est l'impl\xe9mentation Lua de Casbin. Le d\xe9veloppement de authz-casbin a commenc\xe9 quand nous avons propos\xe9 un nouveau plugin d'autorisation dans le d\xe9p\xf4t APISIX (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4674"},"#4674"),") auquel les membres du noyau se sont mis d'accord. And after the helpful reviews which led to some major changes and improvements, the PR (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4710"},"#4710"),") was finally merged."),(0,a.kt)("p",null,"Dans ce blog, nous utiliserons le plugin authz-casbin pour montrer comment vous pouvez impl\xe9menter un mod\xe8le d'autorisation bas\xe9 sur le contr\xf4le d'acc\xe8s bas\xe9 sur les r\xf4les (RBAC) dans APISIX."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Vous devrez utiliser un autre plugin ou un workflow personnalis\xe9 pour l'authentification de l'utilisateur puisque Casbin ne fera que l'autorisation et non l'authentification."),(0,a.kt)("h2",{id:"cr\xe9ation-dun-mod\xe8le"},"Cr\xe9ation d'un mod\xe8le"),(0,a.kt)("p",null,"Le plugin utilise trois param\xe8tres pour autoriser toute requ\xeate - sujet, objet et action. Ici, le sujet est la valeur de l'en-t\xeate du nom d'utilisateur, qui pourrait \xeatre quelque chose comme ",(0,a.kt)("inlineCode",{parentName:"p"},"[username: alice]"),". Ensuite, l'objet est le chemin URL auquel on acc\xe8de et l'action est la m\xe9thode de requ\xeate utilis\xe9e."),(0,a.kt)("p",null,"Disons que nous voulons cr\xe9er un mod\xe8le avec trois ressources dans les chemins - ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/res1")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"/res2"),". Et nous voulons avoir un mod\xe8le comme celui-ci :"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/7BlvBNR.png",alt:"image"})),(0,a.kt)("p",null,"Cela signifierait que tous les utilisateurs (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") comme par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"jack")," peuvent acc\xe9der \xe0 la page d'accueil (",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"). Et les utilisateurs avec les permissions ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," comme ",(0,a.kt)("inlineCode",{parentName:"p"},"alice")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"bob")," peuvent acc\xe9der \xe0 toutes les pages et toutes les ressources (comme ",(0,a.kt)("inlineCode",{parentName:"p"},"res1")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"res2"),"). Aussi, limitons les utilisateurs qui n'ont pas les permissions d'administration \xe0 utiliser uniquement la m\xe9thode de requ\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),". Pour ce sc\xe9nario, nous pourrions d\xe9finir le mod\xe8le comme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,a.kt)("h2",{id:"cr\xe9er-une-politique"},"Cr\xe9er une politique"),(0,a.kt)("p",null,"\xc0 partir du sc\xe9nario ci-dessus, la politique serait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin\n")),(0,a.kt)("p",null,"La correspondance du mod\xe8le signifie :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))"),": Soit le sujet de la requ\xeate a un r\xf4le en tant que sujet de la r\xe8gle ou celui de la requ\xeate correspond au sujet de la r\xe8gle dans ",(0,a.kt)("inlineCode",{parentName:"li"},"keyMatch"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"keyMatch")," est inclus dans la fonction Lua Casbin, vous pouvez jeter un \u0153il \xe0 la description de la fonction et plus de fonctions qui pourraient \xeatre utiles ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"ici"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": l'objet de la requ\xeate correspond \xe0 l'objet de la politique (chemin URL ici)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": l'action de la requ\xeate correspond \xe0 l'action de la politique (m\xe9thode de requ\xeate HTTP ici).")),(0,a.kt)("h2",{id:"activation-du-plugin-sur-la-route"},"Activation du plugin sur la route"),(0,a.kt)("p",null,"Une fois que vous avez cr\xe9\xe9 le mod\xe8le et la politique, vous pouvez l'activer sur une route en utilisant l'API Admin APISIX. Pour l'activer en utilisant les chemins du mod\xe8le et des fichiers de r\xe9gulation :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model. onf",\n            "policy_path": "/path/to/policy. sv",\n            "username": "username"\n        }\n    },\n    "amon": {\n        "nodes": {\n            "127. 0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,a.kt)("p",null,"Ici, le champ nom d'utilisateur est le nom d'en-t\xeate que vous utiliserez pour passer dans le sujet. Par exemple, si vous passez l'en-t\xeate du nom d'utilisateur en tant qu'utilisateur ",(0,a.kt)("inlineCode",{parentName:"p"},": alice"),", vous utiliserez ",(0,a.kt)("inlineCode",{parentName:"p"},'"username": "user"'),"."),(0,a.kt)("p",null,"Pour utiliser le texte mod\xe8le/politique au lieu de fichiers, vous pouvez utiliser les champs ",(0,a.kt)("inlineCode",{parentName:"p"},"mod\xe8le")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"politique")," \xe0 la place:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = quelque part (o\xf9 (p. ft == allow))\n\n            [matchers]\n            m = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)",\n\n            "polices": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin\n            g, bob, admin",\n\n            "username": "username"\n        }\n    },\n    "amon": {\n        "nodes": {\n            "127. 0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,a.kt)("h2",{id:"activer-le-plugin-en-utilisant-un-mod\xe8lepolitique-global"},"Activer le plugin en utilisant un mod\xe8le/politique global"),(0,a.kt)("p",null,"Il peut y avoir des situations o\xf9 vous pourriez vouloir utiliser un mod\xe8le unique et une configuration de r\xe8gles sur plusieurs routes. Vous pouvez le faire d'abord en envoyant une requ\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," pour ajouter le mod\xe8le et la configuration de la politique aux m\xe9tadonn\xe9es du plugin par:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"mod\xe8le": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = quelque part (o\xf9 (p. ft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,a.kt)("p",null,"Et puis pour activer la m\xeame configuration sur une certaine route, envoyez une requ\xeate en utilisant l'API Admin :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "username"\n        }\n    },\n    "amon": {\n        "nodes": {\n            "127. 0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/route1/*"\n}\'\n')),(0,a.kt)("p",null,"Ceci ajoutera la configuration des m\xe9tadonn\xe9es du plugin \xe0 la route. Vous pouvez aussi facilement mettre \xe0 jour la configuration des m\xe9tadonn\xe9es du plugin en renvoyant la demande vers les m\xe9tadonn\xe9es du plugin avec la mise \xe0 jour du mod\xe8le et la configuration de la politique, le plugin mettra \xe0 jour automatiquement toutes les routes en utilisant les m\xe9tadonn\xe9es du plugin."),(0,a.kt)("h2",{id:"cas-dutilisation"},"Cas d'utilisation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le cas d'utilisation principal de ce plugin serait l'impl\xe9mentation de l'autorisation dans vos API. Vous pouvez facilement ajouter ce plugin sur n'importe quelle route API que vous utilisez avec votre mod\xe8le d'autorisation et la configuration de la politique."),(0,a.kt)("li",{parentName:"ul"},"Si vous voulez avoir un mod\xe8le d'autorisation unique pour toutes vos API, vous pouvez utiliser la m\xe9thode du mod\xe8le global. Cela rend la mise \xe0 jour de la politique facile pour tous les itin\xe9raires, car vous n'avez qu'\xe0 mettre \xe0 jour les m\xe9tadonn\xe9es dans etcd."),(0,a.kt)("li",{parentName:"ul"},"Si vous souhaitez utiliser un mod\xe8le diff\xe9rent pour chaque itin\xe9raire, vous pouvez utiliser la m\xe9thode de l'itin\xe9raire. Ceci est utile lorsque les diff\xe9rentes routes de l'API ont diff\xe9rents ensembles de permissions d'utilisateur. Vous pouvez \xe9galement utiliser cela lorsque vous avez affaire \xe0 des politiques plus importantes, car cela rendra l\u2019autorisation plus rapide lorsque filtr\xe9e sur plusieurs routes.")))}c.isMDXComponent=!0}}]);