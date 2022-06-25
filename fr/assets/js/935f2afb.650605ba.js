"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"The basics","items":[{"type":"link","label":"Overview","href":"/fr/docs/overview","docId":"overview"},{"type":"link","label":"Get Started","href":"/fr/docs/get-started","docId":"get-started"},{"type":"link","label":"How it Works","href":"/fr/docs/how-it-works","docId":"how-it-works"},{"type":"link","label":"Tutorials","href":"/fr/docs/tutorials","docId":"tutorials"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Model","items":[{"type":"link","label":"Supported Models","href":"/fr/docs/supported-models","docId":"supported-models"},{"type":"link","label":"Syntax for Models","href":"/fr/docs/syntax-for-models","docId":"syntax-for-models"},{"type":"link","label":"Effector","href":"/fr/docs/effector","docId":"effector"},{"type":"link","label":"Function","href":"/fr/docs/function","docId":"function"},{"type":"link","label":"RBAC","href":"/fr/docs/rbac","docId":"rbac"},{"type":"link","label":"RBAC with Pattern","href":"/fr/docs/rbac-with-pattern","docId":"rbac-with-pattern"},{"type":"link","label":"RBAC with Domains","href":"/fr/docs/rbac-with-domains","docId":"rbac-with-domains"},{"type":"link","label":"Casbin RBAC vs. RBAC96","href":"/fr/docs/rbac-96","docId":"rbac-96"},{"type":"link","label":"ABAC","href":"/fr/docs/abac","docId":"abac"},{"type":"link","label":"Priority Model","href":"/fr/docs/priority-model","docId":"priority-model"},{"type":"link","label":"Super Admin","href":"/fr/docs/superadmin","docId":"superadmin"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Storage","items":[{"type":"link","label":"Model Storage","href":"/fr/docs/model-storage","docId":"model-storage"},{"type":"link","label":"Policy Storage","href":"/fr/docs/policy-storage","docId":"policy-storage"},{"type":"link","label":"Policy Subset Loading","href":"/fr/docs/policy-subset-loading","docId":"policy-subset-loading"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Extensions","items":[{"type":"link","label":"Enforcers","href":"/fr/docs/enforcers","docId":"enforcers"},{"type":"link","label":"Adapters","href":"/fr/docs/adapters","docId":"adapters"},{"type":"link","label":"Watchers","href":"/fr/docs/watchers","docId":"watchers"},{"type":"link","label":"Dispatchers","href":"/fr/docs/dispatchers","docId":"dispatchers"},{"type":"link","label":"Role Managers","href":"/fr/docs/role-managers","docId":"role-managers"},{"type":"link","label":"Middlewares","href":"/fr/docs/middlewares","docId":"middlewares"},{"type":"link","label":"GraphQL Middlewares","href":"/fr/docs/graphql-middlewares","docId":"graphql-middlewares"},{"type":"link","label":"Cloud Native Middlewares","href":"/fr/docs/cloud-native","docId":"cloud-native"}],"collapsed":false,"collapsible":true},{"type":"category","label":"API","items":[{"type":"link","label":"API Overview","href":"/fr/docs/api-overview","docId":"api-overview"},{"type":"link","label":"Management API","href":"/fr/docs/management-api","docId":"management-api"},{"type":"link","label":"RBAC API","href":"/fr/docs/rbac-api","docId":"rbac-api"},{"type":"link","label":"RBAC with Domains API","href":"/fr/docs/rbac-with-domains-api","docId":"rbac-with-domains-api"},{"type":"link","label":"RoleManager API","href":"/fr/docs/rolemanager-api","docId":"rolemanager-api"},{"type":"link","label":"Data Permissions","href":"/fr/docs/data-permissions","docId":"data-permissions"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Advanced usage","items":[{"type":"link","label":"Multi-threading","href":"/fr/docs/multi-threading","docId":"multi-threading"},{"type":"link","label":"Benchmarks","href":"/fr/docs/benchmark","docId":"benchmark"},{"type":"link","label":"Performance Optimization","href":"/fr/docs/performance","docId":"performance"},{"type":"link","label":"Authorization of Kubernetes","href":"/fr/docs/k8s","docId":"k8s"},{"type":"link","label":"Authorization of Service Mesh through Envoy","href":"/fr/docs/envoy","docId":"envoy"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Management","items":[{"type":"link","label":"Admin Portal","href":"/fr/docs/admin-portal","docId":"admin-portal"},{"type":"link","label":"Casbin Service","href":"/fr/docs/service","docId":"service"},{"type":"link","label":"Log & Error Handling","href":"/fr/docs/log-error","docId":"log-error"},{"type":"link","label":"Frontend Usage","href":"/fr/docs/frontend","docId":"frontend"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Editor","items":[{"type":"link","label":"Online Editor","href":"/fr/docs/online-editor","docId":"online-editor"},{"type":"link","label":"IDE Plugins","href":"/fr/docs/ide-plugins","docId":"ide-plugins"}],"collapsed":false,"collapsible":true},{"type":"category","label":"More","items":[{"type":"link","label":"Our Adopters","href":"/fr/docs/adopters","docId":"adopters"},{"type":"link","label":"Contributing","href":"/fr/docs/contributing","docId":"contributing"},{"type":"link","label":"Privacy Policy","href":"/fr/docs/privacy-policy","docId":"privacy-policy"},{"type":"link","label":"Terms of Service","href":"/fr/docs/terms-of-service","docId":"terms-of-service"}],"collapsed":false,"collapsible":true}]},"docs":{"abac":{"id":"abac","title":"ABAC","description":"What is the ABAC model actually?","sidebar":"docs"},"adapters":{"id":"adapters","title":"Adapters","description":"In Casbin, the policy storage is implemented as an adapter (aka middleware for Casbin). A Casbin user can use an adapter to load policy rules from a storage (aka LoadPolicy()), or save policy rules to it (aka SavePolicy()). To keep light-weight, we don\'t put adapter code in the main library.","sidebar":"docs"},"admin-portal":{"id":"admin-portal","title":"Admin Portal","description":"We provide a web-based portal called Casdoor for model management and policy management:","sidebar":"docs"},"adopters":{"id":"adopters","title":"Our Adopters","description":"Direct integration","sidebar":"docs"},"api-overview":{"id":"api-overview","title":"API Overview","description":"This overview only shows you how to use Casbin APIs and doesn\'t explain how Casbin is installed and how it works. You can find those tutorials here: installation of Casbin and how Casbin works. So, when you start reading this tutorial, we assume that you have fully installed and imported Casbin into your code.","sidebar":"docs"},"benchmark":{"id":"benchmark","title":"Benchmarks","description":"The overhead of policy enforcement is benchmarked in modelbtest.go. The testbed is:","sidebar":"docs"},"cloud-native":{"id":"cloud-native","title":"Cloud Native Middlewares","description":"Cloud Native projects","sidebar":"docs"},"contributing":{"id":"contributing","title":"Contributing","description":"Casbin is a powerful authorization library supports access control models with many languages implementations, so long as you are good at one language, you can participate in the development of Casbin. New contributors are always welcomed.","sidebar":"docs"},"data-permissions":{"id":"data-permissions","title":"Data Permissions","description":"We have two solutions for data permissions (filtering). Using implicit assignment APIs. Or just use BatchEnforce() API.","sidebar":"docs"},"dispatchers":{"id":"dispatchers","title":"Dispatchers","description":"Dispatcher provide a way to synchronize incremental changes of policy. It should be based on consistency algorithms such as raft to ensure the consistency of all enforcer instances. Through dispatcher users can easily establish distributed clusters.","sidebar":"docs"},"effector":{"id":"effector","title":"Effector","description":"Effect is the result of a policy rule. And the Effector is the interface for Casbin effectors.","sidebar":"docs"},"enforcers":{"id":"enforcers","title":"Enforcers","description":"Enforcer is the main structure in Casbin. It acts as an interface for users to make operations on policy rules and models.","sidebar":"docs"},"envoy":{"id":"envoy","title":"Authorization of Service Mesh through Envoy","description":"Envoy-authz is a middleware of Envoy which performs external RBAC & ABAC authorization through casbin. This middleware uses Envoy\'s external authorization API through a gRPC server. This proxy would be deployed on any type of envoy-based service meshes like Istio.","sidebar":"docs"},"frontend":{"id":"frontend","title":"Frontend Usage","description":"Casbin.js is a Casbin addon that facilites your access-control management in the frontend application.","sidebar":"docs"},"function":{"id":"function","title":"Function","description":"Functions in matchers","sidebar":"docs"},"get-started":{"id":"get-started","title":"Get Started","description":"Installation","sidebar":"docs"},"graphql-middlewares":{"id":"graphql-middlewares","title":"GraphQL Middlewares","description":"Casbin follows the officially suggested way to provide authorization for GraphQL endpoints by having a single source of truth for authorization//graphql.org/learn/authorization/ . In another word, Casbin should be placed between GraphQL layer and your business logic.","sidebar":"docs"},"how-it-works":{"id":"how-it-works","title":"How it Works","description":"In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration. You can customize your own access control model by combining the available models. For example, you can combine RBAC roles and ABAC attributes together inside one model and share one set of policy rules.","sidebar":"docs"},"ide-plugins":{"id":"ide-plugins","title":"IDE Plugins","description":"We have plugins for these IDEs:","sidebar":"docs"},"k8s":{"id":"k8s","title":"Authorization of Kubernetes","description":"K8s-authz is a Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin. This middleware uses K8s validation admission webhook to check the policies defined by casbin, for every request of the k8s resources. These custom admission controllers perform some kind of validation on the request object that was forwarded by api server and based on a logic, sends back a response to api server that contains information on whether to allow or reject the request. These controllers are registered with Kubernetes using the ValidatingAdmissionWebhook.","sidebar":"docs"},"log-error":{"id":"log-error","title":"Log & Error Handling","description":"Logging","sidebar":"docs"},"management-api":{"id":"management-api","title":"Management API","description":"The primitive API that provides full support for Casbin policy management.","sidebar":"docs"},"middlewares":{"id":"middlewares","title":"Middlewares","description":"Web frameworks","sidebar":"docs"},"model-storage":{"id":"model-storage","title":"Model Storage","description":"Unlike the policy, the model can be loaded only, it cannot be saved. Because we think the model is not a dynamic component and should not be modified at run-time, so we don\'t implement an API to save the model into a storage.","sidebar":"docs"},"multi-threading":{"id":"multi-threading","title":"Multi-threading","description":"If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer//github.com/casbin/casbin/blob/master/enforcersynced.go (GoLang) and https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcersynced.cpp (C++).","sidebar":"docs"},"online-editor":{"id":"online-editor","title":"Online Editor","description":"You can also use the online editor (https://casbin.io/editor/) to write your Casbin model and policy in your web browser. It provides functionality such as syntax highlighting and code completion, just like an IDE for a programming language.","sidebar":"docs"},"overview":{"id":"overview","title":"Overview","description":"Casbin is a powerful and efficient open-source access control library. It provides support for enforcing authorization based on various access control models.","sidebar":"docs"},"performance":{"id":"performance","title":"Performance Optimization","description":"When applied in a production environment with millions of users or permissions, you may encounter performance downgrade in Casbin enforcement, there are usually two causes:","sidebar":"docs"},"policy-storage":{"id":"policy-storage","title":"Policy Storage","description":"In Casbin, the policy storage is implemented as an adapter.","sidebar":"docs"},"policy-subset-loading":{"id":"policy-subset-loading","title":"Policy Subset Loading","description":"Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.","sidebar":"docs"},"priority-model":{"id":"priority-model","title":"Priority Model","description":"Casbin support load policies with priority.","sidebar":"docs"},"privacy-policy":{"id":"privacy-policy","title":"Privacy Policy","description":"Your privacy is important to us. It is Casbin\'s policy to respect your privacy regarding any information we may collect from you across our website, https://casbin.io, and other sites we own and operate.","sidebar":"docs"},"rbac":{"id":"rbac","title":"RBAC","description":"Role definition","sidebar":"docs"},"rbac-96":{"id":"rbac-96","title":"Casbin RBAC vs. RBAC96","description":"Casbin RBAC and RBAC96","sidebar":"docs"},"rbac-api":{"id":"rbac-api","title":"RBAC API","description":"A more friendly API for RBAC. This API is a subset of Management API. The RBAC users could use this API to simplify the code.","sidebar":"docs"},"rbac-with-domains":{"id":"rbac-with-domains","title":"RBAC with Domains","description":"Role definition with domains tenants","sidebar":"docs"},"rbac-with-domains-api":{"id":"rbac-with-domains-api","title":"RBAC with Domains API","description":"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code.","sidebar":"docs"},"rbac-with-pattern":{"id":"rbac-with-pattern","title":"RBAC with Pattern","description":"Quick Start","sidebar":"docs"},"role-managers":{"id":"role-managers","title":"Role Managers","description":"The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don\'t put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as below. Any 3rd-party contribution on a new role manager is welcomed, please inform us and I will put it in this list:)","sidebar":"docs"},"rolemanager-api":{"id":"rolemanager-api","title":"RoleManager API","description":"RoleManager","sidebar":"docs"},"service":{"id":"service","title":"Casbin Service","description":"How to use Casbin as a service?","sidebar":"docs"},"superadmin":{"id":"superadmin","title":"Super Admin","description":"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:","sidebar":"docs"},"supported-models":{"id":"supported-models","title":"Supported Models","description":"1. ACL (Access Control List)","sidebar":"docs"},"syntax-for-models":{"id":"syntax-for-models","title":"Syntax for Models","description":"- A model CONF should have at least four sections: [requestdefinition], [policydefinition], [policy_effect], [matchers].","sidebar":"docs"},"terms-of-service":{"id":"terms-of-service","title":"Terms of Service","description":"1. Terms","sidebar":"docs"},"tutorials":{"id":"tutorials","title":"Tutorials","description":"Before reading, please note that some tutorials are for the Casbin\'s model and work for all Casbin implementations in different languages. Some other tutorials are language-specific.","sidebar":"docs"},"watchers":{"id":"watchers","title":"Watchers","description":"We support to use distributed messaging systems like etcd to keep consistence between multiple Casbin enforcer instances. So our users can concurrently use multiple Casbin enforcers to handle large number of permission checking requests.","sidebar":"docs"}}}')}}]);