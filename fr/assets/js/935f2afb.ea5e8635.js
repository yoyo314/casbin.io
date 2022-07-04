"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Suivant","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Les bases","items":[{"type":"link","label":"Aper\xe7u","href":"/fr/docs/overview","docId":"overview"},{"type":"link","label":"Commencer","href":"/fr/docs/get-started","docId":"get-started"},{"type":"link","label":"Comment \xe7a marche","href":"/fr/docs/how-it-works","docId":"how-it-works"},{"type":"link","label":"Tutoriels","href":"/fr/docs/tutorials","docId":"tutorials"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Mod\xe9lisation","items":[{"type":"link","label":"Mod\xe8les pris en charge","href":"/fr/docs/supported-models","docId":"supported-models"},{"type":"link","label":"Syntaxe pour les mod\xe8les","href":"/fr/docs/syntax-for-models","docId":"syntax-for-models"},{"type":"link","label":"Effet","href":"/fr/docs/effector","docId":"effector"},{"type":"link","label":"Fonction","href":"/fr/docs/function","docId":"function"},{"type":"link","label":"RBAC","href":"/fr/docs/rbac","docId":"rbac"},{"type":"link","label":"RBAC avec motif","href":"/fr/docs/rbac-with-pattern","docId":"rbac-with-pattern"},{"type":"link","label":"RBAC avec domaines","href":"/fr/docs/rbac-with-domains","docId":"rbac-with-domains"},{"type":"link","label":"Casbin RBAC vs. RBAC96","href":"/fr/docs/rbac-96","docId":"rbac-96"},{"type":"link","label":"ABAC","href":"/fr/docs/abac","docId":"abac"},{"type":"link","label":"Mod\xe8le de priorit\xe9","href":"/fr/docs/priority-model","docId":"priority-model"},{"type":"link","label":"Super Admin","href":"/fr/docs/superadmin","docId":"superadmin"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Stockage","items":[{"type":"link","label":"Stockage du mod\xe8le","href":"/fr/docs/model-storage","docId":"model-storage"},{"type":"link","label":"Stockage de la politique","href":"/fr/docs/policy-storage","docId":"policy-storage"},{"type":"link","label":"Chargement du sous-ensemble de la politique","href":"/fr/docs/policy-subset-loading","docId":"policy-subset-loading"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Extensions","items":[{"type":"link","label":"Enforcers","href":"/fr/docs/enforcers","docId":"enforcers"},{"type":"link","label":"Adaptateurs","href":"/fr/docs/adapters","docId":"adapters"},{"type":"link","label":"Observateurs","href":"/fr/docs/watchers","docId":"watchers"},{"type":"link","label":"R\xe9partiteurs","href":"/fr/docs/dispatchers","docId":"dispatchers"},{"type":"link","label":"Responsables des r\xf4les","href":"/fr/docs/role-managers","docId":"role-managers"},{"type":"link","label":"Moyens","href":"/fr/docs/middlewares","docId":"middlewares"},{"type":"link","label":"Moyens GraphQL","href":"/fr/docs/graphql-middlewares","docId":"graphql-middlewares"},{"type":"link","label":"Moyens natifs du Cloud","href":"/fr/docs/cloud-native","docId":"cloud-native"}],"collapsed":false,"collapsible":true},{"type":"category","label":"API","items":[{"type":"link","label":"Aper\xe7u de l\'API","href":"/fr/docs/api-overview","docId":"api-overview"},{"type":"link","label":"API de gestion","href":"/fr/docs/management-api","docId":"management-api"},{"type":"link","label":"RBAC API","href":"/fr/docs/rbac-api","docId":"rbac-api"},{"type":"link","label":"RBAC avec API Domains","href":"/fr/docs/rbac-with-domains-api","docId":"rbac-with-domains-api"},{"type":"link","label":"API RoleManager","href":"/fr/docs/rolemanager-api","docId":"rolemanager-api"},{"type":"link","label":"Autorisations des donn\xe9es","href":"/fr/docs/data-permissions","docId":"data-permissions"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Utilisation avanc\xe9e","items":[{"type":"link","label":"Multi-threads","href":"/fr/docs/multi-threading","docId":"multi-threading"},{"type":"link","label":"Benchmarks","href":"/fr/docs/benchmark","docId":"benchmark"},{"type":"link","label":"Optimisation des performances","href":"/fr/docs/performance","docId":"performance"},{"type":"link","label":"Autorisation de Kubernetes","href":"/fr/docs/k8s","docId":"k8s"},{"type":"link","label":"Autorisation de maillage de service par l\'envoy\xe9","href":"/fr/docs/envoy","docId":"envoy"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Gestion","items":[{"type":"link","label":"Portail Admin","href":"/fr/docs/admin-portal","docId":"admin-portal"},{"type":"link","label":"Service Casbin","href":"/fr/docs/service","docId":"service"},{"type":"link","label":"Log & gestion des erreurs","href":"/fr/docs/log-error","docId":"log-error"},{"type":"link","label":"Utilisation du frontend","href":"/fr/docs/frontend","docId":"frontend"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Editeur","items":[{"type":"link","label":"\xc9diteur en ligne","href":"/fr/docs/online-editor","docId":"online-editor"},{"type":"link","label":"Plugins IDE","href":"/fr/docs/ide-plugins","docId":"ide-plugins"}],"collapsed":false,"collapsible":true},{"type":"category","label":"En savoir plus","items":[{"type":"link","label":"Nos Adopteurs","href":"/fr/docs/adopters","docId":"adopters"},{"type":"link","label":"Contribuer","href":"/fr/docs/contributing","docId":"contributing"},{"type":"link","label":"Politique de confidentialit\xe9","href":"/fr/docs/privacy-policy","docId":"privacy-policy"},{"type":"link","label":"Conditions d\'utilisation","href":"/fr/docs/terms-of-service","docId":"terms-of-service"}],"collapsed":false,"collapsible":true}]},"docs":{"abac":{"id":"abac","title":"ABAC","description":"Qu\'est ce que le mod\xe8le ABAC?","sidebar":"docs"},"adapters":{"id":"adapters","title":"Adaptateurs","description":"\xc0 Casbin, le stockage des politiques est impl\xe9ment\xe9 en tant qu\'adaptateur (aka middleware pour Casbin). A Casbin user can use an adapter to load policy rules from a storage (aka LoadPolicy()), or save policy rules to it (aka SavePolicy()). Pour garder le poids l\xe9ger, nous ne pla\xe7ons pas le code de l\'adaptateur dans la biblioth\xe8que principale.","sidebar":"docs"},"admin-portal":{"id":"admin-portal","title":"Portail Admin","description":"Nous fournissons un portail web appel\xe9 Casdoor pour la gestion des mod\xe8les et la gestion des politiques :","sidebar":"docs"},"adopters":{"id":"adopters","title":"Nos Adopteurs","description":"Int\xe9gration directe","sidebar":"docs"},"api-overview":{"id":"api-overview","title":"Aper\xe7u de l\'API","description":"Cette vue d\'ensemble vous montre seulement comment utiliser les API Casbin et n\'explique pas comment Casbin est install\xe9 et comment il fonctionne. Vous pouvez trouver ces tutoriels ici : installation de Casbin et fonctionnement de Casbin. Ainsi, lorsque vous commencez \xe0 lire ce tutoriel, nous supposons que vous avez compl\xe8tement install\xe9 et import\xe9 Casbin dans votre code.","sidebar":"docs"},"benchmark":{"id":"benchmark","title":"Benchmarks","description":"Les frais de mise en application de la politique sont compar\xe9s dans modelbtest.go. Le lit de test est :","sidebar":"docs"},"cloud-native":{"id":"cloud-native","title":"Moyens natifs du Cloud","description":"Projets natifs du Cloud","sidebar":"docs"},"contributing":{"id":"contributing","title":"Contribuer","description":"Casbin est une biblioth\xe8que d\'autorisation puissante supporte les mod\xe8les de contr\xf4le d\'acc\xe8s avec de nombreuses impl\xe9mentations de langues, aussi longtemps que vous \xeates bon dans une langue, vous pouvez participer au d\xe9veloppement de Casbin. Les nouveaux contributeurs sont toujours les bienvenus.","sidebar":"docs"},"data-permissions":{"id":"data-permissions","title":"Autorisations des donn\xe9es","description":"Nous avons deux solutions pour les autorisations de donn\xe9es (filtrage). Utilisation des API d\'affectation implicite. Ou utilisez simplement l\'API BatchEnforce() .","sidebar":"docs"},"dispatchers":{"id":"dispatchers","title":"R\xe9partiteurs","description":"Le r\xe9partiteur fournit un moyen de synchroniser les changements incr\xe9mentaux de la politique. Il devrait \xeatre bas\xe9 sur des algorithmes de coh\xe9rence tels que raft pour assurer la coh\xe9rence de toutes les instances de contr\xf4le. Les utilisateurs du r\xe9partiteur peuvent facilement \xe9tablir des grappes distribu\xe9es.","sidebar":"docs"},"effector":{"id":"effector","title":"Effet","description":"L\'effet est le r\xe9sultat d\'une r\xe8gle politique. Et l\' Effet est l\'interface pour les effets Casbin.","sidebar":"docs"},"enforcers":{"id":"enforcers","title":"Enforcers","description":"Enforcer est la structure principale de Casbin. Il sert d\'interface pour permettre aux utilisateurs de faire des op\xe9rations sur des r\xe8gles et des mod\xe8les de politique.","sidebar":"docs"},"envoy":{"id":"envoy","title":"Autorisation de maillage de service par l\'envoy\xe9","description":"Envoy-authz est un middleware d\'Envoy\xe9 qui effectue une autorisation externe RBAC & ABAC via casbin. Ce middleware utilise l\'API d\'autorisation externe Envoy\xe9 via un serveur gRPC. Ce proxy serait d\xe9ploy\xe9 sur n\'importe quel type de mailles de service bas\xe9es sur l\'envoi comme Istio.","sidebar":"docs"},"frontend":{"id":"frontend","title":"Utilisation du frontend","description":"Casbin.js est un addon Casbin qui facilite votre gestion du contr\xf4le d\'acc\xe8s dans l\'application frontend.","sidebar":"docs"},"function":{"id":"function","title":"Fonction","description":"Fonctions dans les matchers","sidebar":"docs"},"get-started":{"id":"get-started","title":"Commencer","description":"Installation","sidebar":"docs"},"graphql-middlewares":{"id":"graphql-middlewares","title":"Moyens GraphQL","description":"Casbin suit la mani\xe8re officiellement sugg\xe9r\xe9e de fournir une autorisation pour les terminaux GraphQL en ayant une seule source de v\xe9rit\xe9 pour l\u2019autorisation//graphql.org/learn/authorization/ . En un autre mot, Casbin devrait \xeatre plac\xe9 entre la couche GraphQL et votre logique commerciale.","sidebar":"docs"},"how-it-works":{"id":"how-it-works","title":"Comment \xe7a marche","description":"En Casbin, un mod\xe8le de contr\xf4le d\'acc\xe8s est r\xe9sum\xe9 dans un fichier CONF bas\xe9 sur le m\xe9tamodel PERM (Politique, Effect, Demande, Matchers). Donc changer ou mettre \xe0 jour le m\xe9canisme d\'autorisation d\'un projet est aussi simple que modifier une configuration. Vous pouvez personnaliser votre propre mod\xe8le de contr\xf4le d\'acc\xe8s en combinant les mod\xe8les disponibles. Par exemple, vous pouvez combiner les r\xf4les RBAC et les attributs ABAC ensemble dans un mod\xe8le et partager un ensemble de r\xe8gles de politique.","sidebar":"docs"},"ide-plugins":{"id":"ide-plugins","title":"Plugins IDE","description":"Nous avons des plugins pour ces IDE :","sidebar":"docs"},"k8s":{"id":"k8s","title":"Autorisation de Kubernetes","description":"K8s-authz est un middleware d\'autorisation Kubernetes (k8s) RBAC & ABAC bas\xe9 sur Casbin. Ce middleware utilise le webhook de validation K8s pour v\xe9rifier les politiques d\xe9finies par casbin, pour chaque requ\xeate des ressources k8s. Ces contr\xf4leurs d\'admission personnalis\xe9s effectuent une sorte de validation sur l\'objet de requ\xeate qui a \xe9t\xe9 transf\xe9r\xe9 par le serveur api et bas\xe9 sur une logique, renvoie une r\xe9ponse au serveur api qui contient des informations sur l\'autoriser ou rejeter la requ\xeate. Ces contr\xf4leurs sont enregistr\xe9s aupr\xe8s de Kubernetes en utilisant le ValidatingAdmissionWebhook.","sidebar":"docs"},"log-error":{"id":"log-error","title":"Log & gestion des erreurs","description":"Journalisation","sidebar":"docs"},"management-api":{"id":"management-api","title":"API de gestion","description":"L\'API primitive qui fournit un support complet pour la gestion des politiques de Casbin.","sidebar":"docs"},"middlewares":{"id":"middlewares","title":"Moyens","description":"Web frameworks","sidebar":"docs"},"model-storage":{"id":"model-storage","title":"Stockage du mod\xe8le","description":"Contrairement \xe0 la politique, le mod\xe8le peut \xeatre charg\xe9 seulement, il ne peut pas \xeatre sauvegard\xe9. Parce que nous pensons que le mod\xe8le n\'est pas un composant dynamique et ne devrait pas \xeatre modifi\xe9 \xe0 l\'ex\xe9cution, donc nous n\'impl\xe9mentons pas une API pour sauvegarder le mod\xe8le dans un stockage.","sidebar":"docs"},"multi-threading":{"id":"multi-threading","title":"Multi-threads","description":"Si vous utilisez Casbin de mani\xe8re multithread, vous pouvez utiliser le wrapper synchronis\xe9 de l\'agent de s\xe9curit\xe9 Casbin//github.com/casbin/casbin/blob/master/enforcersynced.go (GoLang) et https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcersynced.cpp (C+++).","sidebar":"docs"},"online-editor":{"id":"online-editor","title":"\xc9diteur en ligne","description":"Vous pouvez \xe9galement utiliser l\'\xe9diteur en ligne (https://casbin.io/editor/) pour \xe9crire votre mod\xe8le et votre politique Casbin dans votre navigateur Web. Il fournit des fonctionnalit\xe9s telles que la coloration syntaxique et la compl\xe9tion de code, tout comme un IDE pour un langage de programmation.","sidebar":"docs"},"overview":{"id":"overview","title":"Aper\xe7u","description":"Casbin est une biblioth\xe8que de contr\xf4le d\'acc\xe8s open-source puissante et efficace qui prend en charge divers mod\xe8les de contr\xf4le d\'acc\xe8s pour faire respecter l\'autorisation sur toute la carte.","sidebar":"docs"},"performance":{"id":"performance","title":"Optimisation des performances","description":"Lorsqu\'il est appliqu\xe9 dans un environnement de production avec des millions d\'utilisateurs ou des autorisations, vous pouvez rencontrer un downgrade de performance dans l\'application de Casbin, il y a g\xe9n\xe9ralement deux causes:","sidebar":"docs"},"policy-storage":{"id":"policy-storage","title":"Stockage de la politique","description":"En Casbin, le stockage des politiques est impl\xe9ment\xe9 comme un adaptateur.","sidebar":"docs"},"policy-subset-loading":{"id":"policy-subset-loading","title":"Chargement du sous-ensemble de la politique","description":"Certains adaptateurs prennent en charge la gestion des politiques filtr\xe9es. Cela signifie que la politique charg\xe9e par Casbin est un sous-ensemble de la politique de stockage bas\xe9e sur un filtre donn\xe9. Cela permet une application efficace des politiques dans de grands environnements multilocataires lors de l\'analyse de l\'ensemble de la politique devient un goulot d\'\xe9tranglement de performance.","sidebar":"docs"},"priority-model":{"id":"priority-model","title":"Mod\xe8le de priorit\xe9","description":"Casbin supporte les politiques de chargement avec priorit\xe9.","sidebar":"docs"},"privacy-policy":{"id":"privacy-policy","title":"Politique de confidentialit\xe9","description":"Votre vie priv\xe9e est importante pour nous. La politique de Casbin est de respecter votre vie priv\xe9e \xe0 l\'\xe9gard de toute information que nous pourrions recueillir sur notre site Web, https://casbin. o et d\'autres sites que nous poss\xe9dons et que nous exploitons.","sidebar":"docs"},"rbac":{"id":"rbac","title":"RBAC","description":"D\xe9finition du r\xf4le","sidebar":"docs"},"rbac-96":{"id":"rbac-96","title":"Casbin RBAC vs. RBAC96","description":"Casbin RBAC et RBAC96","sidebar":"docs"},"rbac-api":{"id":"rbac-api","title":"RBAC API","description":"Une API plus conviviale pour RBAC. Cette API est un sous-ensemble de Management API. Les utilisateurs de RBAC peuvent utiliser cette API pour simplifier le code.","sidebar":"docs"},"rbac-with-domains":{"id":"rbac-with-domains","title":"RBAC avec domaines","description":"D\xe9finition du r\xf4le avec les locataires de domaines","sidebar":"docs"},"rbac-with-domains-api":{"id":"rbac-with-domains-api","title":"RBAC avec API Domains","description":"Une API plus conviviale pour RBAC avec les domaines. Cette API est un sous-ensemble de Management API. Les utilisateurs de RBAC peuvent utiliser cette API pour simplifier le code.","sidebar":"docs"},"rbac-with-pattern":{"id":"rbac-with-pattern","title":"RBAC avec motif","description":"D\xe9marrage rapide","sidebar":"docs"},"role-managers":{"id":"role-managers","title":"Responsables des r\xf4les","description":"Le gestionnaire de r\xf4le est utilis\xe9 pour g\xe9rer la hi\xe9rarchie des r\xf4les RBAC (cartographie des r\xf4les utilisateurs) dans Casbin. Un gestionnaire de r\xf4le peut r\xe9cup\xe9rer les donn\xe9es du r\xf4le \xe0 partir des r\xe8gles de politique de Casbin ou de sources externes telles que LDAP, Okta, Auth0, Azure AD, etc. Nous supportons diff\xe9rentes impl\xe9mentations d\'un gestionnaire de r\xf4les. Pour rester l\xe9ger, nous ne pla\xe7ons pas le code du gestionnaire de r\xf4le dans la biblioth\xe8que principale (\xe0 l\'exception du gestionnaire de r\xf4le par d\xe9faut). Une liste compl\xe8te des gestionnaires de r\xf4le de Casbin est fournie ci-dessous. Toute contribution de tierce partie sur un nouveau gestionnaire de r\xf4le est la bienvenue, merci de nous en informer et je la mettrai dans cette liste:)","sidebar":"docs"},"rolemanager-api":{"id":"rolemanager-api","title":"API RoleManager","description":"Responsable de r\xf4le","sidebar":"docs"},"service":{"id":"service","title":"Service Casbin","description":"Comment utiliser Casbin comme service?","sidebar":"docs"},"superadmin":{"id":"superadmin","title":"Super Admin","description":"Super Admin est l\'administrateur de tout le syst\xe8me, nous pouvons l\'utiliser dans des mod\xe8les comme RBAC, ABAC et RBAC avec des domaines etc. L\'exemple d\xe9taill\xe9 est le suivant:","sidebar":"docs"},"supported-models":{"id":"supported-models","title":"Mod\xe8les pris en charge","description":"1. ACL (liste de contr\xf4le d\'acc\xe8s)","sidebar":"docs"},"syntax-for-models":{"id":"syntax-for-models","title":"Syntaxe pour les mod\xe8les","description":"- Un mod\xe8le CONF doit avoir au moins quatre sections : [requestdefinition], [policydefinition], [policy_effect], [matchers].","sidebar":"docs"},"terms-of-service":{"id":"terms-of-service","title":"Conditions d\'utilisation","description":"1. Conditions g\xe9n\xe9rales de vente","sidebar":"docs"},"tutorials":{"id":"tutorials","title":"Tutoriels","description":"Avant de lire, veuillez noter que certains tutoriels sont pour le mod\xe8le de Casbin et fonctionnent pour toutes les impl\xe9mentations de Casbin dans diff\xe9rentes langues. D\'autres tutoriels sont sp\xe9cifiques \xe0 la langue.","sidebar":"docs"},"watchers":{"id":"watchers","title":"Observateurs","description":"Nous prenons en charge l\'utilisation de syst\xe8mes de messagerie distribu\xe9s comme etcd pour garder la coh\xe9rence entre plusieurs instances de contr\xf4le de Casbin. Ainsi, nos utilisateurs peuvent utiliser simultan\xe9ment plusieurs ex\xe9cuteurs Casbin pour g\xe9rer un grand nombre de demandes de v\xe9rification des permissions.","sidebar":"docs"}}}')}}]);