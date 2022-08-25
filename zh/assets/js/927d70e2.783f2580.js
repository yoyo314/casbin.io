"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1045],{2190:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/08/19/apisix-casbin-authorization","metadata":{"permalink":"/zh/blog/2021/08/19/apisix-casbin-authorization","editUrl":"https://crowdin.com/project/casbin-website/zh-CN","source":"@site/blog/2021-08-19-apisix-casbin-authorization.md","title":"Authorization in APISIX using Casbin","description":"Introduction","date":"2021-08-19T00:00:00.000Z","formattedDate":"2021\u5e748\u670819\u65e5","tags":[],"readingTime":5.51,"hasTruncateMarker":false,"authors":[{"name":"Rushikesh Tote","title":"Member of Casbin","url":"http://github.com/rushitote","imageURL":"https://avatars.githubusercontent.com/rushitote"}],"frontMatter":{"title":"Authorization in APISIX using Casbin","author":"Rushikesh Tote","authorTitle":"Member of Casbin","authorURL":"http://github.com/rushitote","authorImageURL":"https://avatars.githubusercontent.com/rushitote"},"nextItem":{"title":"Yang Luo - Google Open Source Peer Bonus Winner","permalink":"/zh/blog/2020/04/21/google-award"}},"content":"## Introduction\\n\\n[APISIX](https://apisix.apache.org/) is a high performance and scalable cloud native API gateway based on Nginx and etcd. It is an open source project by the Apache Software Foundation. Besides that, what makes APISIX so good is the support of many great built in plugins that could be used to implement features like authentication, monitoring, routing, etc. And the fact that plugins in APISIX are hot-reloaded (without restarts) makes it very dynamic.\\n\\nBut while using APISIX, there may be scenarios where you might want to add complex authorization logic in your application. This is where authz-casbin might help you, authz-casbin is an APISIX plugin based on [Lua Casbin](https://github.com/casbin/lua-casbin/) that enables powerful authorization based on various access control models. [Casbin](https://casbin.io/) is an authorization library which supports access control models like ACL, RBAC, ABAC. Originally written in Go, it has been ported to many languages and Lua Casbin is the Lua implementation of Casbin. The development of authz-casbin started when we proposed a new plugin for authorization in the APISIX repository ([#4674](https://github.com/apache/apisix/issues/4674)) to which the core members agreed. And after the helpful reviews which led to some major changes and improvements, the PR ([#4710](https://github.com/apache/apisix/pull/4710)) was finally merged. \\n\\nIn this blog, we will use the authz-casbin plugin to show how you can implement an authorization model based on Role Based Access Control (RBAC) in APISIX.\\n\\n**NOTE**: You will need to use some other plugin or custom workflow for authenticating the user since Casbin will only do authorization and not authentication.\\n\\n## Creating a model\\n\\nThe plugin uses three parameters for authorizing any request - subject, object and action. Here, subject is the value of  the username header, which could be something like `[username: alice]`. Then, the object is the URL path that is being accessed and the action is request method being used.\\n\\nLet\'s say we want to create a model with three resources at the paths - `/`, `/res1` and `/res2`. And we want to have a model like this:\\n\\n![image](https://i.imgur.com/7BlvBNR.png)\\n\\nThis would mean that all users (`*`) like for example `jack` can access the homepage (`/`). And users with `admin` permissions like `alice` and `bob` can access all the pages and resources (like `res1` and `res2`). Also, let\'s restrict users without any admin permissions to using only `GET` request method. For this scenario, we could define the model as:\\n\\n```ini\\n[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\n```\\n\\n## Creating a policy\\n\\nFrom the above scenario, the policy would be:\\n\\n```csv\\np, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\n```\\n\\nThe matcher from the model means:\\n\\n1. `(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))`: Either the request\'s subject has a role as the policy\'s subject or the request\'s subject matches the policy\'s subject in `keyMatch`. `keyMatch` is built in function in Lua Casbin, you can take a look at the function\'s description and more such functions that could be useful [here](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).\\n2. `keyMatch(r.obj, p.obj)`: The request\'s object matches the policy\'s object (URL path here).\\n3. `keyMatch(r.act, p.act)`: The request\'s action matches the policy\'s action (HTTP request method here).\\n\\n## Enabling the plugin on route\\n\\nOnce you have created the model and policy, you can enable it on a route using the APISIX Admin API. To enable it using model and policy file paths:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model_path\\": \\"/path/to/model.conf\\",\\n            \\"policy_path\\": \\"/path/to/policy.csv\\",\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\nHere, the username field is the header name that you will be using to pass in the subject. For example, if you will be passing the username header as `user: alice`, you would use `\\"username\\": \\"user\\"`.\\n\\nFor using model/policy text instead of files, you can use the `model` and `policy` fields instead:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model\\": \\"[request_definition]\\n            r = sub, obj, act\\n\\n            [policy_definition]\\n            p = sub, obj, act\\n\\n            [role_definition]\\n            g = _, _\\n\\n            [policy_effect]\\n            e = some(where (p.eft == allow))\\n\\n            [matchers]\\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n            \\"policy\\": \\"p, *, /, GET\\n            p, admin, *, *\\n            g, alice, admin\\n            g, bob, admin\\",\\n\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\n## Enabling the plugin using a global model/policy\\n\\nThere may be situations where you might want to use a single model and policy configuration across multiple routes. You can do that by first by sending a `PUT` request to add the model and policy configuration to the plugin\'s metadata by:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\\n{\\n\\"model\\": \\"[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n\\"policy\\": \\"p, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\"\\n}\'\\n```\\n\\nAnd then to enable the same configuration on some route, send a request using the Admin API:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/route1/*\\"\\n}\'\\n```\\n\\nThis will add the plugin metadata configuration to the route. You can also easily update the plugin metadata configuration by resending the request to plugin\'s metadata with updated model and policy configuration, the plugin will automatically update all the routes using the plugin metadata. \\n\\n## Use Cases\\n\\n- The primary use case of this plugin would be in implementing authorization in your APIs. You can easily add this plugin on any API route that you are using with your authorization model and policy configuration. \\n- If you want to have a single authorization model for all your APIs, you can use global model/policy method. This makes updating the policy easy for all routes, since you only need to update the metadata in etcd.\\n- While if you would like to use a different model for every different route, you can use the route method. This is helpful when different API routes have different sets of user permissions. You can also use this when you are dealing with larger policies, since it will make the authorization faster when filtered into multiple routes."},{"id":"/2020/04/21/google-award","metadata":{"permalink":"/zh/blog/2020/04/21/google-award","editUrl":"https://crowdin.com/project/casbin-website/zh-CN","source":"@site/blog/2020-04-21-google-award.md","title":"Yang Luo - Google Open Source Peer Bonus Winner","description":"Today, we are pleased to announce that Casbin\'s founder, Yang Luo is awarded the \\"Google Open Source Peer Bonus winners\\" for his work on Casbin, Npcap and Nmap in 2019 Q3.","date":"2020-04-21T00:00:00.000Z","formattedDate":"2020\u5e744\u670821\u65e5","tags":[],"readingTime":0.765,"hasTruncateMarker":false,"authors":[{"name":"Casbin","title":"Official Account","url":"http://github.com/casbin","imageURL":"https://avatars.githubusercontent.com/casbin"}],"frontMatter":{"title":"Yang Luo - Google Open Source Peer Bonus Winner","author":"Casbin","authorTitle":"Official Account","authorURL":"http://github.com/casbin","authorImageURL":"https://avatars.githubusercontent.com/casbin"},"prevItem":{"title":"Authorization in APISIX using Casbin","permalink":"/zh/blog/2021/08/19/apisix-casbin-authorization"},"nextItem":{"title":"Reworking our Documentation","permalink":"/zh/blog/2018/09/23/new-website"}},"content":"Today, we are pleased to announce that Casbin\'s founder, [Yang Luo](https://github.com/hsluoyz) is awarded the \\"Google Open Source Peer Bonus winners\\" for his work on [Casbin](https://casbin.io/), [Npcap](https://nmap.org/npcap/) and [Nmap](https://nmap.org/) in 2019 Q3.\\n\\n![ospb](https://hsluoyz.github.io/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.png)\\n\\n> The original award letter can be accessed [here](https://github.com/hsluoyz/hsluoyz.github.io/blob/master/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.pdf).\\n\\nThe [Google Open Source Peer Bonus](https://opensource.google.com/docs/growing/peer-bonus/) program is described as:\\n\\n> _In the same way that a Google Peer Bonus is used to recognize a fellow Googler who has gone above and beyond, an Open Source Peer Bonus recognizes external people who have made exceptional contributions to open source._\\n\\nThe [announcement for the 2019 winners](https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html) is available at:\\n\\n> https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html\\n\\nYang and Casbin are listed among open source developers and projects that have a relevant impact out there, like Git, TensorFlow, V8, CPython, LLVM, Apache projects, Angular or Jenkins.\\n\\nWe are glad to see Casbin recognized in this way for its contribution to open source and cloud security!\\n\\n_Thanks for flying Casbin!_"},{"id":"/2018/09/23/new-website","metadata":{"permalink":"/zh/blog/2018/09/23/new-website","editUrl":"https://crowdin.com/project/casbin-website/zh-CN","source":"@site/blog/2018-09-23-new-website.md","title":"Reworking our Documentation","description":"Today, we migrated Casbin\'s documentation from GitHub Wiki to `Docs` of this website,","date":"2018-09-23T00:00:00.000Z","formattedDate":"2018\u5e749\u670823\u65e5","tags":[],"readingTime":0.28,"hasTruncateMarker":false,"authors":[{"name":"Yang Luo","title":"Creator of Casbin","url":"http://github.com/hsluoyz","imageURL":"https://avatars.githubusercontent.com/hsluoyz"}],"frontMatter":{"title":"Reworking our Documentation","author":"Yang Luo","authorTitle":"Creator of Casbin","authorURL":"http://github.com/hsluoyz","authorImageURL":"https://avatars.githubusercontent.com/hsluoyz"},"prevItem":{"title":"Yang Luo - Google Open Source Peer Bonus Winner","permalink":"/zh/blog/2020/04/21/google-award"},"nextItem":{"title":"node-Casbin: New Member of Casbin Family","permalink":"/zh/blog/2018/08/27/node-casbin"}},"content":"Today, we migrated Casbin\'s documentation from GitHub Wiki to ``Docs`` of this website,\\nwhich is powered by Docusaurus. Docusaurus provides lots of awesome features like better\\nMarkdown styles, full-text search, versioning, translation.\\n\\nThe documentation is not perfect yet and still needs tuning. The source code is hosted\\non GitHub: https://github.com/casbin/casbin-website.\\n\\nAny contribution or suggestion is welcome!"},{"id":"/2018/08/27/node-casbin","metadata":{"permalink":"/zh/blog/2018/08/27/node-casbin","editUrl":"https://crowdin.com/project/casbin-website/zh-CN","source":"@site/blog/2018-08-27-node-casbin.md","title":"node-Casbin: New Member of Casbin Family","description":"Today, we successfully ported Casbin to Node.js, which is named as:","date":"2018-08-27T00:00:00.000Z","formattedDate":"2018\u5e748\u670827\u65e5","tags":[],"readingTime":0.265,"hasTruncateMarker":false,"authors":[{"name":"Zixuan Liu","title":"Casbin Maintainer","url":"http://github.com/nodece","imageURL":"https://avatars.githubusercontent.com/nodece"}],"frontMatter":{"title":"node-Casbin: New Member of Casbin Family","author":"Zixuan Liu","authorTitle":"Casbin Maintainer","authorURL":"http://github.com/nodece","authorImageURL":"https://avatars.githubusercontent.com/nodece"},"prevItem":{"title":"Reworking our Documentation","permalink":"/zh/blog/2018/09/23/new-website"},"nextItem":{"title":"Casbin Server is Launched!","permalink":"/zh/blog/2018/08/07/launching-casbin-server"}},"content":"Today, we successfully ported Casbin to Node.js, which is named as:\\n[node-Casbin](https://github.com/casbin/node-casbin).\\n \\n**node-Casbin** shares the similar usage and API\\nwith other implementations of Casbin. The middlewares for Express, Koa2 and Egg.js are ready\\nto use. The storage adapter for Sequelize is also prepared.\\n\\nHope it can serve your need well :)\\n\\nGitHub: https://github.com/casbin/node-casbin"},{"id":"/2018/08/07/launching-casbin-server","metadata":{"permalink":"/zh/blog/2018/08/07/launching-casbin-server","editUrl":"https://crowdin.com/project/casbin-website/zh-CN","source":"@site/blog/2018-08-07-launching-casbin-server.md","title":"Casbin Server is Launched!","description":"Some of our customers ask if Casbin can be used as a service instead of a library. The","date":"2018-08-07T00:00:00.000Z","formattedDate":"2018\u5e748\u67087\u65e5","tags":[],"readingTime":0.69,"hasTruncateMarker":false,"authors":[{"name":"Helong Zhang","title":"Casbin Maintainer","url":"http://github.com/BetaCat0","imageURL":"https://avatars.githubusercontent.com/BetaCat0"}],"frontMatter":{"title":"Casbin Server is Launched!","author":"Helong Zhang","authorTitle":"Casbin Maintainer","authorURL":"http://github.com/BetaCat0","authorImageURL":"https://avatars.githubusercontent.com/BetaCat0"},"prevItem":{"title":"node-Casbin: New Member of Casbin Family","permalink":"/zh/blog/2018/08/27/node-casbin"}},"content":"Some of our customers ask if Casbin can be used as a service instead of a library. The\\nanswer is **YES**. Today, we launched the [Casbin Server](https://github.com/casbin/casbin-server) project as a concrete solution for\\n**Access Control as a Service**.\\n\\n**Casbin Server** is under active development by our core team. It has several features:\\n\\n- Purely developed in Golang.\\n- Can manage thousands of Casbin instances, so you can move policy enforcement logic from multiple services into one Casbin Server.\\n- **gRPC** is used to communicated with Casbin Server. We also consider to add the **RESTful** support in near future.\\n- A friendly web administrator portal is provided for non-developer administrators to manage all details like Casbin instances, models, policy storage and load balancing.\\n\\n\\n\\nThe source code is hosted on GitHub: https://github.com/casbin/casbin-server\\n\\nAny issues or pull requests are welcome :)"}]}')}}]);