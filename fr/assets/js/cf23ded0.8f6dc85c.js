"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1375],{441:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/08/19/apisix-casbin-authorization","metadata":{"permalink":"/fr/blog/2021/08/19/apisix-casbin-authorization","editUrl":"https://crowdin.com/project/casbin-website/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md","title":"Autorisation dans APISIX \xe0 l\'aide de Casbin","description":"Introduction","date":"2021-08-19T00:00:00.000Z","formattedDate":"19 ao\xfbt 2021","tags":[],"readingTime":6.055,"hasTruncateMarker":false,"authors":[{"name":"Rushikesh Tote","title":"Membre de Casbin","url":"http://github.com/rushitote","imageURL":"https://avatars.githubusercontent.com/rushitote"}],"frontMatter":{"title":"Autorisation dans APISIX \xe0 l\'aide de Casbin","author":"Rushikesh Tote","authorTitle":"Membre de Casbin","authorURL":"http://github.com/rushitote","authorImageURL":"https://avatars.githubusercontent.com/rushitote"},"nextItem":{"title":"Yang Luo - Gagnant du bonus Google Open Source par les pairs","permalink":"/fr/blog/2020/04/21/google-award"}},"content":"## Introduction\\n\\n[APISIX](https://apisix.apache.org/) est une passerelle native de nuage haute performance et \xe9volutive bas\xe9e sur Nginx et etcd. C\'est un projet open source de la Fondation du logiciel Apache. En plus de cela, ce qui rend APISIX si bon est le support de nombreux plugins qui pourraient \xeatre utilis\xe9s pour impl\xe9menter des fonctionnalit\xe9s comme l\'authentification, surveillance, routage, etc. Et le fait que les plugins d\'APISIX soient recharg\xe9s \xe0 chaud (sans red\xe9marrage) le rend tr\xe8s dynamique.\\n\\nMais lorsque vous utilisez APISIX, il peut y avoir des sc\xe9narios o\xf9 vous pourriez vouloir ajouter une logique d\'autorisation complexe dans votre application. C\'est l\xe0 que authz-casbin pourrait vous aider, authz-casbin est un plugin APISIX bas\xe9 sur [Lua Casbin](https://github.com/casbin/lua-casbin/) qui permet une autorisation puissante bas\xe9e sur diff\xe9rents mod\xe8les de contr\xf4le d\'acc\xe8s. [Casbin](https://casbin.io/) est une biblioth\xe8que d\'autorisation qui supporte le mod\u010dle de pilotage d\'acc\xe8s comme ACL, RBAC, ABAC. Initialement \xe9crit en Go, il a \xe9t\xe9 port\xe9 dans de nombreuses langues et Lua Casbin est l\'impl\xe9mentation Lua de Casbin. Le d\xe9veloppement de authz-casbin a commenc\xe9 quand nous avons propos\xe9 un nouveau plugin d\'autorisation dans le d\xe9p\xf4t APISIX ([#4674](https://github.com/apache/apisix/issues/4674)) auquel les membres du noyau se sont mis d\'accord. And after the helpful reviews which led to some major changes and improvements, the PR ([#4710](https://github.com/apache/apisix/pull/4710)) was finally merged.\\n\\nDans ce blog, nous utiliserons le plugin authz-casbin pour montrer comment vous pouvez impl\xe9menter un mod\xe8le d\'autorisation bas\xe9 sur le contr\xf4le d\'acc\xe8s bas\xe9 sur les r\xf4les (RBAC) dans APISIX.\\n\\n**NOTE**: Vous devrez utiliser un autre plugin ou un workflow personnalis\xe9 pour l\'authentification de l\'utilisateur puisque Casbin ne fera que l\'autorisation et non l\'authentification.\\n\\n## Cr\xe9ation d\'un mod\xe8le\\n\\nLe plugin utilise trois param\xe8tres pour autoriser toute requ\xeate - sujet, objet et action. Ici, le sujet est la valeur de l\'en-t\xeate du nom d\'utilisateur, qui pourrait \xeatre quelque chose comme `[username: alice]`. Ensuite, l\'objet est le chemin URL auquel on acc\xe8de et l\'action est la m\xe9thode de requ\xeate utilis\xe9e.\\n\\nDisons que nous voulons cr\xe9er un mod\xe8le avec trois ressources dans les chemins - `/`, `/res1` et `/res2`. Et nous voulons avoir un mod\xe8le comme celui-ci :\\n\\n![image](https://i.imgur.com/7BlvBNR.png)\\n\\nCela signifierait que tous les utilisateurs (`*`) comme par exemple `jack` peuvent acc\xe9der \xe0 la page d\'accueil (`/`). Et les utilisateurs avec les permissions `admin` comme `alice` et `bob` peuvent acc\xe9der \xe0 toutes les pages et toutes les ressources (comme `res1` et `res2`). Aussi, limitons les utilisateurs qui n\'ont pas les permissions d\'administration \xe0 utiliser uniquement la m\xe9thode de requ\xeate `GET`. Pour ce sc\xe9nario, nous pourrions d\xe9finir le mod\xe8le comme:\\n\\n```ini\\n[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\n```\\n\\n## Cr\xe9er une politique\\n\\n\xc0 partir du sc\xe9nario ci-dessus, la politique serait:\\n\\n```csv\\np, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\n```\\n\\nLa correspondance du mod\xe8le signifie :\\n\\n1. `(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))`: Soit le sujet de la requ\xeate a un r\xf4le en tant que sujet de la r\xe8gle ou celui de la requ\xeate correspond au sujet de la r\xe8gle dans `keyMatch`. `keyMatch` est inclus dans la fonction Lua Casbin, vous pouvez jeter un \u0153il \xe0 la description de la fonction et plus de fonctions qui pourraient \xeatre utiles [ici](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).\\n2. `keyMatch(r.obj, p.obj)`: l\'objet de la requ\xeate correspond \xe0 l\'objet de la politique (chemin URL ici).\\n3. `keyMatch(r.act, p.act)`: l\'action de la requ\xeate correspond \xe0 l\'action de la politique (m\xe9thode de requ\xeate HTTP ici).\\n\\n## Activation du plugin sur la route\\n\\nUne fois que vous avez cr\xe9\xe9 le mod\xe8le et la politique, vous pouvez l\'activer sur une route en utilisant l\'API Admin APISIX. Pour l\'activer en utilisant les chemins du mod\xe8le et des fichiers de r\xe9gulation :\\n\\n```sh\\ncurl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model_path\\": \\"/path/to/model. onf\\",\\n            \\"policy_path\\": \\"/path/to/policy. sv\\",\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"amon\\": {\\n        \\"nodes\\": {\\n            \\"127. 0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\nIci, le champ nom d\'utilisateur est le nom d\'en-t\xeate que vous utiliserez pour passer dans le sujet. Par exemple, si vous passez l\'en-t\xeate du nom d\'utilisateur en tant qu\'utilisateur `: alice`, vous utiliserez `\\"username\\": \\"user\\"`.\\n\\nPour utiliser le texte mod\xe8le/politique au lieu de fichiers, vous pouvez utiliser les champs `mod\xe8le` et `politique` \xe0 la place:\\n\\n```sh\\ncurl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model\\": \\"[request_definition]\\n            r = sub, obj, act\\n\\n            [policy_definition]\\n            p = sub, obj, act\\n\\n            [role_definition]\\n            g = _, _\\n\\n            [policy_effect]\\n            e = quelque part (o\xf9 (p. ft == allow))\\n\\n            [matchers]\\n            m = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)\\",\\n\\n            \\"polices\\": \\"p, *, /, GET\\n            p, admin, *, *\\n            g, alice, admin\\n            g, bob, admin\\",\\n\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"amon\\": {\\n        \\"nodes\\": {\\n            \\"127. 0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\n## Activer le plugin en utilisant un mod\xe8le/politique global\\n\\nIl peut y avoir des situations o\xf9 vous pourriez vouloir utiliser un mod\xe8le unique et une configuration de r\xe8gles sur plusieurs routes. Vous pouvez le faire d\'abord en envoyant une requ\xeate `PUT` pour ajouter le mod\xe8le et la configuration de la politique aux m\xe9tadonn\xe9es du plugin par:\\n\\n```sh\\ncurl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\\n{\\n\\"mod\xe8le\\": \\"[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = quelque part (o\xf9 (p. ft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)\\",\\n\\n\\"policy\\": \\"p, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\"\\n}\'\\n```\\n\\nEt puis pour activer la m\xeame configuration sur une certaine route, envoyez une requ\xeate en utilisant l\'API Admin :\\n\\n```sh\\ncurl http://127.0.0. :9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"amon\\": {\\n        \\"nodes\\": {\\n            \\"127. 0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/route1/*\\"\\n}\'\\n```\\n\\nCeci ajoutera la configuration des m\xe9tadonn\xe9es du plugin \xe0 la route. Vous pouvez aussi facilement mettre \xe0 jour la configuration des m\xe9tadonn\xe9es du plugin en renvoyant la demande vers les m\xe9tadonn\xe9es du plugin avec la mise \xe0 jour du mod\xe8le et la configuration de la politique, le plugin mettra \xe0 jour automatiquement toutes les routes en utilisant les m\xe9tadonn\xe9es du plugin.\\n\\n## Cas d\'utilisation\\n\\n- Le cas d\'utilisation principal de ce plugin serait l\'impl\xe9mentation de l\'autorisation dans vos API. Vous pouvez facilement ajouter ce plugin sur n\'importe quelle route API que vous utilisez avec votre mod\xe8le d\'autorisation et la configuration de la politique.\\n- Si vous voulez avoir un mod\xe8le d\'autorisation unique pour toutes vos API, vous pouvez utiliser la m\xe9thode du mod\xe8le global. Cela rend la mise \xe0 jour de la politique facile pour tous les itin\xe9raires, car vous n\'avez qu\'\xe0 mettre \xe0 jour les m\xe9tadonn\xe9es dans etcd.\\n- Si vous souhaitez utiliser un mod\xe8le diff\xe9rent pour chaque itin\xe9raire, vous pouvez utiliser la m\xe9thode de l\'itin\xe9raire. Ceci est utile lorsque les diff\xe9rentes routes de l\'API ont diff\xe9rents ensembles de permissions d\'utilisateur. Vous pouvez \xe9galement utiliser cela lorsque vous avez affaire \xe0 des politiques plus importantes, car cela rendra l\u2019autorisation plus rapide lorsque filtr\xe9e sur plusieurs routes."},{"id":"/2020/04/21/google-award","metadata":{"permalink":"/fr/blog/2020/04/21/google-award","editUrl":"https://crowdin.com/project/casbin-website/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2020-04-21-google-award.md","title":"Yang Luo - Gagnant du bonus Google Open Source par les pairs","description":"Aujourd\'hui, nous sommes heureux d\'annoncer que le fondateur de Casbin, Yang Luo re\xe7oit le \\"Google Open Source Peer Bonus gagnants\\" pour son travail sur Casbin, Npcap et Nmap en 2019 Q3.","date":"2020-04-21T00:00:00.000Z","formattedDate":"21 avril 2020","tags":[],"readingTime":0.805,"hasTruncateMarker":false,"authors":[{"name":"Casbin","title":"Compte Officiel","url":"http://github.com/casbin","imageURL":"https://avatars.githubusercontent.com/casbin"}],"frontMatter":{"title":"Yang Luo - Gagnant du bonus Google Open Source par les pairs","author":"Casbin","authorTitle":"Compte Officiel","authorURL":"http://github.com/casbin","authorImageURL":"https://avatars.githubusercontent.com/casbin"},"prevItem":{"title":"Autorisation dans APISIX \xe0 l\'aide de Casbin","permalink":"/fr/blog/2021/08/19/apisix-casbin-authorization"},"nextItem":{"title":"Refonte de notre documentation","permalink":"/fr/blog/2018/09/23/new-website"}},"content":"Aujourd\'hui, nous sommes heureux d\'annoncer que le fondateur de Casbin, [Yang Luo](https://github.com/hsluoyz) re\xe7oit le \\"Google Open Source Peer Bonus gagnants\\" pour son travail sur [Casbin](https://casbin.io/), [Npcap](https://nmap.org/npcap/) et [Nmap](https://nmap.org/) en 2019 Q3.\\n\\n![ospb](https://hsluoyz.github.io/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.png)\\n\\n> La lettre originale de r\xe9compense peut \xeatre consult\xe9e [ici](https://github.com/hsluoyz/hsluoyz.github.io/blob/master/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.pdf).\\n\\nLe programme [Google Open Source Peer Bonus](https://opensource.google.com/docs/growing/peer-bonus/) est d\xe9crit comme :\\n\\n> _De la m\xeame mani\xe8re qu\'un bonus Google Pair est utilis\xe9 pour reconna\xeetre un autre Googler qui a d\xe9pass\xe9 et au-del\xe0, un bonus de pair Open Source reconna\xeet les personnes externes qui ont apport\xe9 des contributions exceptionnelles \xe0 l\'open source._\\n\\nL\'annonce [pour les gagnants de 2019](https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html) est disponible \xe0 :\\n\\n> https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html\\n\\nYang et Casbin sont list\xe9s parmi les d\xe9veloppeurs et les projets open source qui ont un impact pertinent l\xe0-bas, comme Git, TensorFlow, V8, CPython, LLVM, projets Apache, Angular ou Jenkins.\\n\\nNous sommes heureux de voir que Casbin est ainsi reconnu pour sa contribution \xe0 la s\xe9curit\xe9 de l\'open source et du cloud!\\n\\n_Merci d\'avoir vol\xe9 Casbin!_"},{"id":"/2018/09/23/new-website","metadata":{"permalink":"/fr/blog/2018/09/23/new-website","editUrl":"https://crowdin.com/project/casbin-website/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2018-09-23-new-website.md","title":"Refonte de notre documentation","description":"Aujourd\'hui, nous avons migr\xe9 la documentation de Casbin depuis le Wiki GitHub vers les Docs de ce site, qui est propuls\xe9 par Docusaurus. Docusaurus fournit beaucoup de fonctionnalit\xe9s g\xe9niales comme de meilleurs styles Markdown, recherche plein texte, versioning, traduction.","date":"2018-09-23T00:00:00.000Z","formattedDate":"23 septembre 2018","tags":[],"readingTime":0.33,"hasTruncateMarker":false,"authors":[{"name":"Yang Luo","title":"Cr\xe9ateur de Casbin","url":"http://github.com/hsluoyz","imageURL":"https://avatars.githubusercontent.com/hsluoyz"}],"frontMatter":{"title":"Refonte de notre documentation","author":"Yang Luo","authorTitle":"Cr\xe9ateur de Casbin","authorURL":"http://github.com/hsluoyz","authorImageURL":"https://avatars.githubusercontent.com/hsluoyz"},"prevItem":{"title":"Yang Luo - Gagnant du bonus Google Open Source par les pairs","permalink":"/fr/blog/2020/04/21/google-award"},"nextItem":{"title":"node-Casbin: Nouveau membre de la famille Casbin","permalink":"/fr/blog/2018/08/27/node-casbin"}},"content":"Aujourd\'hui, nous avons migr\xe9 la documentation de Casbin depuis le Wiki GitHub vers les `Docs` de ce site, qui est propuls\xe9 par Docusaurus. Docusaurus fournit beaucoup de fonctionnalit\xe9s g\xe9niales comme de meilleurs styles Markdown, recherche plein texte, versioning, traduction.\\n\\nLa documentation n\'est pas encore parfaite et a encore besoin d\'\xeatre am\xe9lior\xe9e. Le code source est h\xe9berg\xe9 sur GitHub: https://github.com/casbin/casbin-website.\\n\\nToute contribution ou suggestion est la bienvenue!"},{"id":"/2018/08/27/node-casbin","metadata":{"permalink":"/fr/blog/2018/08/27/node-casbin","editUrl":"https://crowdin.com/project/casbin-website/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md","title":"node-Casbin: Nouveau membre de la famille Casbin","description":"Aujourd\'hui, nous avons port\xe9 Casbin sur Node.js, qui est nomm\xe9 comme: node-Casbin.","date":"2018-08-27T00:00:00.000Z","formattedDate":"27 ao\xfbt 2018","tags":[],"readingTime":0.275,"hasTruncateMarker":false,"authors":[{"name":"Zixuan Liu","title":"Mainteneur de Casbin","url":"http://github.com/nodece","imageURL":"https://avatars.githubusercontent.com/nodece"}],"frontMatter":{"title":"node-Casbin: Nouveau membre de la famille Casbin","author":"Zixuan Liu","authorTitle":"Mainteneur de Casbin","authorURL":"http://github.com/nodece","authorImageURL":"https://avatars.githubusercontent.com/nodece"},"prevItem":{"title":"Refonte de notre documentation","permalink":"/fr/blog/2018/09/23/new-website"},"nextItem":{"title":"Le serveur Casbin est lanc\xe9 !","permalink":"/fr/blog/2018/08/07/launching-casbin-server"}},"content":"Aujourd\'hui, nous avons port\xe9 Casbin sur Node.js, qui est nomm\xe9 comme: [node-Casbin](https://github.com/casbin/node-casbin).\\n\\n**node-Casbin** partage l\'utilisation et l\'API similaires avec d\'autres impl\xe9mentations de Casbin. Les produits du milieu pour Express, Koa2 et Egg.js sont pr\xeats \xe0 \xeatre utilis\xe9s. L\'adaptateur de stockage pour Sequelize est \xe9galement pr\xe9par\xe9.\\n\\nJ\'esp\xe8re qu\'il pourra bien servir votre besoin :)\\n\\nGitHub: https://github.com/casbin/node-casbin"},{"id":"/2018/08/07/launching-casbin-server","metadata":{"permalink":"/fr/blog/2018/08/07/launching-casbin-server","editUrl":"https://crowdin.com/project/casbin-website/fr","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md","title":"Le serveur Casbin est lanc\xe9 !","description":"Certains de nos clients demandent si Casbin peut \xeatre utilis\xe9 comme un service au lieu d\'une biblioth\xe8que. La r\xe9ponse est OUI. Aujourd\'hui, nous avons lanc\xe9 le projet Casbin Server en tant que solution concr\xe8te pour Le contr\xf4le d\'acc\xe8s en tant que service.","date":"2018-08-07T00:00:00.000Z","formattedDate":"7 ao\xfbt 2018","tags":[],"readingTime":0.815,"hasTruncateMarker":false,"authors":[{"name":"Helong Zhang","title":"Mainteneur de Casbin","url":"http://github.com/BetaCat0","imageURL":"https://avatars.githubusercontent.com/BetaCat0"}],"frontMatter":{"title":"Le serveur Casbin est lanc\xe9 !","author":"Helong Zhang","authorTitle":"Mainteneur de Casbin","authorURL":"http://github.com/BetaCat0","authorImageURL":"https://avatars.githubusercontent.com/BetaCat0"},"prevItem":{"title":"node-Casbin: Nouveau membre de la famille Casbin","permalink":"/fr/blog/2018/08/27/node-casbin"}},"content":"Certains de nos clients demandent si Casbin peut \xeatre utilis\xe9 comme un service au lieu d\'une biblioth\xe8que. La r\xe9ponse est **OUI**. Aujourd\'hui, nous avons lanc\xe9 le projet [Casbin Server](https://github.com/casbin/casbin-server) en tant que solution concr\xe8te pour **Le contr\xf4le d\'acc\xe8s en tant que service**.\\n\\n**Le serveur Casbin** est en cours de d\xe9veloppement par notre \xe9quipe de base. Il a plusieurs caract\xe9ristiques :\\n\\n- Purement d\xe9velopp\xe9 \xe0 Golang.\\n- Peut g\xe9rer des milliers d\'instances Casbin, de sorte que vous pouvez d\xe9placer la logique d\'application de la politique de plusieurs services vers un seul serveur Casbin.\\n- **gRPC** est utilis\xe9 pour communiquer avec le serveur Casbin. Nous envisageons \xe9galement d\'ajouter le support **RESTful** dans un avenir proche.\\n- Un portail administrateur web convivial est fourni aux administrateurs non-d\xe9veloppeurs pour g\xe9rer tous les d\xe9tails tels que les instances, les mod\xe8les, les politiques de stockage et l\'\xe9quilibrage de charge.\\n\\n\\n\\nLe code source est h\xe9berg\xe9 sur GitHub : https://github.com/casbin/casbin-server\\n\\nTous les probl\xe8mes ou demandes de fusion sont les bienvenus :)"}]}')}}]);