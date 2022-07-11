"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8683],{6241:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"/2021/08/19/apisix-casbin-authorization","metadata":{"permalink":"/ja/blog/2021/08/19/apisix-casbin-authorization","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/blog/2021-08-19-apisix-casbin-authorization.md","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2021-08-19-apisix-casbin-authorization.md","title":"Casbin \u3092\u4f7f\u7528\u3057\u3066 APISIX \u3067\u306e\u627f\u8a8d","description":"\u306f\u3058\u3081\u306b","date":"2021-08-19T00:00:00.000Z","formattedDate":"2021\u5e748\u670819\u65e5","tags":[],"readingTime":8.315,"truncated":false,"authors":[{"name":"Rushikesh Tote","title":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30d0\u30fc","url":"http://github.com/rushitote","imageURL":"https://avatars.githubusercontent.com/rushitote"}],"frontMatter":{"title":"Casbin \u3092\u4f7f\u7528\u3057\u3066 APISIX \u3067\u306e\u627f\u8a8d","author":"Rushikesh Tote","authorTitle":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30d0\u30fc","authorURL":"http://github.com/rushitote","authorImageURL":"https://avatars.githubusercontent.com/rushitote"},"nextItem":{"title":"Yang Luo - Google \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u53d7\u8cde","permalink":"/ja/blog/2020/04/21/google-award"}},"content":"## \u306f\u3058\u3081\u306b\\n\\n[APISIX](https://apisix.apache.org/) \u306f Nginx \u3084 etcd \u306b\u57fa\u3065\u304f\u9ad8\u6027\u80fd\u3067\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u306a\u30af\u30e9\u30a6\u30c9 \u30cd\u30a4\u30c6\u30a3\u30d6 API \u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3067\u3059\u3002 \u3053\u308c\u306f\u3001Apache Software Foundation\u306b\u3088\u308b\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002 \u305d\u308c\u306b\u52a0\u3048\u3066\u3001APISIX\u304c\u3068\u3066\u3082\u826f\u3044\u306e\u306f\u3001\u8a8d\u8a3c\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u591a\u304f\u306e\u5049\u5927\u306a\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b5\u30dd\u30fc\u30c8\u3067\u3059\u3002 \u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u306a\u3069 APISIX \u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u304c(\u518d\u8d77\u52d5\u306a\u3057\u3067)\u30db\u30c3\u30c8\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u4e8b\u5b9f\u306f\u3001\u305d\u308c\u3092\u975e\u5e38\u306b\u52d5\u7684\u306b\u3057\u307e\u3059\u3002\\n\\n\u3057\u304b\u3057\u3001APISIX\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u9593\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8907\u96d1\u306a\u8a8d\u53ef\u30ed\u30b8\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 \u3053\u3053\u3067\u3001authz-casbin\u304c\u3042\u306a\u305f\u3092\u52a9\u3051\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 authz-casbin \u306f [Lua Casbin](https://github.com/casbin/lua-casbin/) \u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f APISIX \u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3001\u3055\u307e\u3056\u307e\u306a\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb\u306b\u57fa\u3065\u3044\u305f\u5f37\u529b\u306a\u8a8d\u8a3c\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002 [Casbin](https://casbin.io/) \u306f\u3001ACL\u3001RBAC\u3001ABAC\u306a\u3069\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u8a8d\u53ef\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002 \u3082\u3068\u3082\u3068\u306fGo\u3067\u66f8\u304b\u308c\u3066\u304a\u308a\u3001\u305d\u308c\u306f\u591a\u304f\u306e\u8a00\u8a9e\u306b\u79fb\u690d\u3055\u308c\u3066\u304a\u308a\u3001Lua Casbin\u306fCasbin\u306eLua\u5b9f\u88c5\u3067\u3059\u3002 authz-casbin\u306e\u958b\u767a\u306f\u3001\u30b3\u30a2\u30e1\u30f3\u30d0\u30fc\u304c\u5408\u610f\u3057\u305fAPISIX\u30ea\u30dd\u30b8\u30c8\u30ea([#4674](https://github.com/apache/apisix/issues/4674))\u3067\u627f\u8a8d\u306e\u305f\u3081\u306e\u65b0\u3057\u3044\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u63d0\u6848\u3057\u305f\u6642\u306b\u59cb\u307e\u308a\u307e\u3057\u305f\u3002 \u305d\u3057\u3066\u3001\u5927\u304d\u306a\u5909\u66f4\u3068\u6539\u5584\u306b\u3064\u306a\u304c\u3063\u305f\u5f79\u7acb\u3064\u30ec\u30d3\u30e5\u30fc\u306e\u5f8c\u3001PR ([#4710](https://github.com/apache/apisix/pull/4710)) \u304c\u6700\u7d42\u7684\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3057\u305f\u3002\\n\\n\u3053\u306e\u30d6\u30ed\u30b0\u3067 APISIX\u306e\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u30a2\u30af\u30bb\u30b9\u5236\u5fa1(RBAC)\u306b\u57fa\u3065\u3044\u3066\u8a8d\u8a3c\u30e2\u30c7\u30eb\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3059\u305f\u3081\u306b\u3001authz-casbin\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\\n\\n**\u6ce8\u610f**: Casbin\u306f\u8a8d\u8a3c\u306e\u307f\u3092\u884c\u3044\u3001\u8a8d\u8a3c\u3057\u306a\u3044\u306e\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u3001\u4ed6\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u307e\u305f\u306f\u30ab\u30b9\u30bf\u30e0\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\n\\n## \u30e2\u30c7\u30eb\u306e\u4f5c\u6210\\n\\n\u3053\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001\u3059\u3079\u3066\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u627f\u8a8d\u3059\u308b\u305f\u3081\u306b3\u3064\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u307e\u3059 - \u4ef6\u540d\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u304a\u3088\u3073\u30a2\u30af\u30b7\u30e7\u30f3\u3002 \u3053\u3053\u3067\u3001subject \u306f\u30e6\u30fc\u30b6\u30fc\u540d\u30d8\u30c3\u30c0\u30fc\u306e\u5024\u3067\u3001 `[username: alice]` \u306e\u3088\u3046\u306a\u3082\u306e\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306b\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30a2\u30af\u30bb\u30b9\u3055\u308c\u3066\u3044\u308bURL\u30d1\u30b9\u3067\u3042\u308a\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u30e1\u30bd\u30c3\u30c9\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\n\\nLet\'s say we want to create a model with three resources at the paths - `/`, `/res1` and `/res2`. \u6b21\u306e\u3088\u3046\u306a\u30e2\u30c7\u30eb\u304c\u5fc5\u8981\u3067\u3059\\n\\n![\u753b\u50cf](https://i.imgur.com/7BlvBNR.png)\\n\\n\u4f8b\u3048\u3070\u3001`jack`\u306e\u3088\u3046\u306a\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc( `*` )\u304c\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059(`/`)\u3002 `alice` \u3084 `bob` \u306e\u3088\u3046\u306a `\u7ba1\u7406\u8005` \u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001( `res1` \u3084 `res2` \u306e\u3088\u3046\u306a) \u3059\u3079\u3066\u306e\u30da\u30fc\u30b8\u3068\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001 `GET` \u30ea\u30af\u30a8\u30b9\u30c8\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u3001\u7ba1\u7406\u8005\u6a29\u9650\u306e\u306a\u3044\u30e6\u30fc\u30b6\u30fc\u3092\u5236\u9650\u3057\u307e\u3057\u3087\u3046\u3002 \u3053\u306e\u30b7\u30ca\u30ea\u30aa\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u30e2\u30c7\u30eb\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\\n\\n```ini\\n[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\n```\\n\\n## \u30dd\u30ea\u30b7\u30fc\u306e\u4f5c\u6210\\n\\n\u4e0a\u8a18\u306e\u30b7\u30ca\u30ea\u30aa\u304b\u3089\u3001\u30dd\u30ea\u30b7\u30fc\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n```csv\\np, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\n```\\n\\n\u30e2\u30c7\u30eb\u304b\u3089\u306e\u30de\u30c3\u30c1\u30e3\u306f\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059:\\n\\n1. `(g(r.sub, p.sub) || keyMatch(r.sub, p. ub)) <code>`: \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4ef6\u540d\u306f\u3001\u30dd\u30ea\u30b7\u30fc\u306e\u4ef6\u540d\u3068\u3057\u3066\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4ef6\u540d\u306f\u3001 `keyMatch` \u5185\u306e\u30dd\u30ea\u30b7\u30fc\u306e\u4ef6\u540d\u3068\u4e00\u81f4\u3057\u307e\u3059\u3002 `keyMatch` is built in function in Lua Casbin, you can take a look at the function\'s description and more such functions that could be useful [here](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).\\n2. `keyMatch(r.obj, p.obj)`: \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30dd\u30ea\u30b7\u30fc\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (URL\u30d1\u30b9\u306f\u3053\u3061\u3089) \u306b\u4e00\u81f4\u3057\u307e\u3059\u3002\\n3. `keyMatch(r.act, p.act)`: \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u30dd\u30ea\u30b7\u30fc\u306e\u30a2\u30af\u30b7\u30e7\u30f3 (HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u30e1\u30bd\u30c3\u30c9\u306f\u3053\u3061\u3089) \u3068\u4e00\u81f4\u3057\u307e\u3059\u3002\\n\\n## \u30eb\u30fc\u30c8\u4e0a\u3067\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3057\u3066\u3044\u307e\u3059\\n\\n\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001APISIX Admin API \u3092\u4f7f\u7528\u3057\u3066\u30eb\u30fc\u30c8\u4e0a\u3067\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002 \u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528\u3057\u3066\u6709\u52b9\u306b\u3059\u308b\u306b\u306f:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model_path\\": \\"/path/to/model.conf\\",\\n            \\"policy_path\\": \\"/path/to/policy.csv\\",\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\n\u3053\u3053\u3067\u3001username \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001subject \u306b\u6e21\u3059\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30d8\u30c3\u30c0\u30fc\u540d\u3067\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u30d8\u30c3\u30c0\u30fc\u3092 `user: alice`\u3068\u3057\u3066\u6e21\u3059\u5834\u5408\u306f\u3001 `\\"username\\": \\"user\\"` \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\\n\\n\u30d5\u30a1\u30a4\u30eb\u306e\u4ee3\u308f\u308a\u306b\u30e2\u30c7\u30eb/\u30dd\u30ea\u30b7\u30fc\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u4ee3\u308f\u308a\u306b `\u30e2\u30c7\u30eb` \u3068 `\u30dd\u30ea\u30b7\u30fc` \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"model\\": \\"[request_definition]\\n            r = sub, obj, act\\n\\n            [policy_definition]\\n            p = sub, obj, act\\n\\n            [role_definition]\\n            g = _, _\\n\\n            [policy_effect]\\n            e = some(where (p.eft == allow))\\n\\n            [matchers]\\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n            \\"policy\\": \\"p, *, /, GET\\n            p, admin, *, *\\n            g, alice, admin\\n            g, bob, admin\\",\\n\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/*\\"\\n}\'\\n```\\n\\n## \u30b0\u30ed\u30fc\u30d0\u30eb\u30e2\u30c7\u30eb/\u30dd\u30ea\u30b7\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\\n\\n\u8907\u6570\u306e\u30eb\u30fc\u30c8\u3067\u5358\u4e00\u306e\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u69cb\u6210\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u307e\u305a\u3001 `PUT` \u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3066\u3001\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u306e\u8a2d\u5b9a\u3092\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059:\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\\n{\\n\\"model\\": \\"[request_definition]\\nr = sub, obj, act\\n\\n[policy_definition]\\np = sub, obj, act\\n\\n[role_definition]\\ng = _, _\\n\\n[policy_effect]\\ne = some(where (p.eft == allow))\\n\\n[matchers]\\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\\",\\n\\n\\"policy\\": \\"p, *, /, GET\\np, admin, *, *\\ng, alice, admin\\ng, bob, admin\\"\\n}\'\\n```\\n\\n\u305d\u3057\u3066\u3001\u3044\u304f\u3064\u304b\u306e\u30eb\u30fc\u30c8\u3067\u540c\u3058\u8a2d\u5b9a\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001Admin API \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\\n\\n```sh\\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\\n{\\n    \\"plugins\\": {\\n        \\"authz-casbin\\": {\\n            \\"username\\": \\"username\\"\\n        }\\n    },\\n    \\"upstream\\": {\\n        \\"nodes\\": {\\n            \\"127.0.0.1:1980\\": 1\\n        },\\n        \\"type\\": \\"roundrobin\\"\\n    },\\n    \\"uri\\": \\"/route1/*\\"\\n}\'\\n```\\n\\n\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u8a2d\u5b9a\u304c\u30eb\u30fc\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001\u66f4\u65b0\u3055\u308c\u305f\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u518d\u9001\u3059\u308b\u3053\u3068\u3067\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u8a2d\u5b9a\u3092\u7c21\u5358\u306b\u66f4\u65b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4f7f\u3063\u3066\u30eb\u30fc\u30c8\u3092\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3057\u307e\u3059\\n\\n## \u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\\n\\n- \u3053\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4e3b\u306a\u4f7f\u7528\u4f8b\u306f\u3001API \u3067\u306e\u8a8d\u8a3c\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001\u8a8d\u8a3c\u30e2\u30c7\u30eb\u3068\u30dd\u30ea\u30b7\u30fc\u306e\u8a2d\u5b9a\u3067\u4f7f\u7528\u3057\u3066\u3044\u308bAPI\u30eb\u30fc\u30c8\u306b\u7c21\u5358\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\\n- \u3059\u3079\u3066\u306e API \u306b\u5bfe\u3057\u3066\u5358\u4e00\u306e\u8a8d\u53ef\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30e2\u30c7\u30eb/\u30dd\u30ea\u30b7\u30fc\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001etcd \u5185\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u307f\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u3059\u3079\u3066\u306e\u30eb\u30fc\u30c8\u3067\u30dd\u30ea\u30b7\u30fc\u306e\u66f4\u65b0\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002\\n- \u7570\u306a\u308b\u30eb\u30fc\u30c8\u3054\u3068\u306b\u7570\u306a\u308b\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u306f\u3001route (\u30eb\u30fc\u30c8)\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u7570\u306a\u308bAPI\u30eb\u30fc\u30c8\u304c\u7570\u306a\u308b\u30e6\u30fc\u30b6\u6a29\u9650\u30bb\u30c3\u30c8\u3092\u6301\u3064\u5834\u5408\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u3088\u308a\u5927\u304d\u306a\u30dd\u30ea\u30b7\u30fc\u3092\u6271\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u3082\u3053\u308c\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u306e\u30eb\u30fc\u30c8\u306b\u30d5\u30a3\u30eb\u30bf\u3055\u308c\u308b\u3068\u8a8d\u53ef\u304c\u901f\u304f\u306a\u308a\u307e\u3059\u306e\u3067\u3002"},{"id":"/2020/04/21/google-award","metadata":{"permalink":"/ja/blog/2020/04/21/google-award","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/blog/2020-04-21-google-award.md","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2020-04-21-google-award.md","title":"Yang Luo - Google \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u53d7\u8cde","description":"Today, we are pleased to announce that Casbin\'s founder, Yang Luo is awarded the \\"Google Open Source Peer Bonus winners\\" for his work on Casbin, Npcap and Nmap in 2019 Q3.","date":"2020-04-21T00:00:00.000Z","formattedDate":"2020\u5e744\u670821\u65e5","tags":[],"readingTime":1.07,"truncated":false,"authors":[{"name":"Casbin","title":"\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8","url":"http://github.com/casbin","imageURL":"https://avatars.githubusercontent.com/casbin"}],"frontMatter":{"title":"Yang Luo - Google \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u53d7\u8cde","author":"Casbin","authorTitle":"\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8","authorURL":"http://github.com/casbin","authorImageURL":"https://avatars.githubusercontent.com/casbin"},"prevItem":{"title":"Casbin \u3092\u4f7f\u7528\u3057\u3066 APISIX \u3067\u306e\u627f\u8a8d","permalink":"/ja/blog/2021/08/19/apisix-casbin-authorization"},"nextItem":{"title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af","permalink":"/ja/blog/2018/09/23/new-website"}},"content":"Today, we are pleased to announce that Casbin\'s founder, [Yang Luo](https://github.com/hsluoyz) is awarded the \\"Google Open Source Peer Bonus winners\\" for his work on [Casbin](https://casbin.io/), [Npcap](https://nmap.org/npcap/) and [Nmap](https://nmap.org/) in 2019 Q3.\\n\\n![spb](https://hsluoyz.github.io/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.png)\\n\\n> \u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u8cde\u72b6\u306f\u3053\u3061\u3089 [](https://github.com/hsluoyz/hsluoyz.github.io/blob/master/download/Open%20Source%20Peer%20Bonus%20Q3%202019%20-%20Yang%20Luo%20-%20OSPB%20Award%20Letter.pdf) \u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\\n\\n[Google Open Source Peer Bonus](https://opensource.google.com/docs/growing/peer-bonus/) \u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u6b21\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\n\\n> _Google \u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u306f\u3001\u4e0a\u8a18\u4ee5\u964d\u306eGoogle\u306e\u4ef2\u9593\u3092\u8a8d\u8b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u306e\u3068\u540c\u3058\u3088\u3046\u306b\u3002 \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306b\u5353\u8d8a\u3057\u305f\u8ca2\u732e\u3092\u3057\u305f\u5916\u90e8\u306e\u4eba\u3092\u8a8d\u8b58\u3057\u307e\u3059\u3002_\\n\\nThe [announcement for the 2019 winners](https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html) is available at:\\n\\n> https://opensource.googleblog.com/2020/01/announcing-2019-second-cycle-google.html\\n\\n\u30e4\u30f3\u6c0f\u3068\u30ab\u30b9\u30d3\u30f3\u6c0f\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u958b\u767a\u8005\u3084\u305d\u3053\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 Git\u3001TensorFlow\u3001V8\u3001CPython\u3001LLVM\u3001Apache\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001Angular\u3001Jenkins\u306a\u3069\u3002\\n\\n\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3068\u30af\u30e9\u30a6\u30c9\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3078\u306e\u8ca2\u732e\u306b\u3088\u308a\u3001Casbin\u304c\u3053\u306e\u3088\u3046\u306b\u8a8d\u8b58\u3055\u308c\u305f\u3053\u3068\u3092\u5b09\u3057\u304f\u601d\u3044\u307e\u3059\u3002\\n\\n_\u3054\u5229\u7528\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01_"},{"id":"/2018/09/23/new-website","metadata":{"permalink":"/ja/blog/2018/09/23/new-website","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-09-23-new-website.md","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2018-09-23-new-website.md","title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af","description":"Today, we migrated Casbin\'s documentation from GitHub Wiki to Docs of this website, which is powered by Docusaurus. Docusaurus\u306f\u3088\u308a\u826f\u3044 \u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30b9\u30bf\u30a4\u30eb\u3001\u5168\u6587\u691c\u7d22\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3001\u7ffb\u8a33\u306a\u3069\u306e\u7d20\u6674\u3089\u3057\u3044\u6a5f\u80fd\u3092\u305f\u304f\u3055\u3093\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002","date":"2018-09-23T00:00:00.000Z","formattedDate":"2018\u5e749\u670823\u65e5","tags":[],"readingTime":0.475,"truncated":false,"authors":[{"name":"Yang Luo","title":"Casbin \u306e\u4f5c\u6210","url":"http://github.com/hsluoyz","imageURL":"https://avatars.githubusercontent.com/hsluoyz"}],"frontMatter":{"title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af","author":"Yang Luo","authorTitle":"Casbin \u306e\u4f5c\u6210","authorURL":"http://github.com/hsluoyz","authorImageURL":"https://avatars.githubusercontent.com/hsluoyz"},"prevItem":{"title":"Yang Luo - Google \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d4\u30a2\u30dc\u30fc\u30ca\u30b9\u53d7\u8cde","permalink":"/ja/blog/2020/04/21/google-award"},"nextItem":{"title":"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc","permalink":"/ja/blog/2018/08/27/node-casbin"}},"content":"Today, we migrated Casbin\'s documentation from GitHub Wiki to `Docs` of this website, which is powered by Docusaurus. Docusaurus\u306f\u3088\u308a\u826f\u3044 \u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30b9\u30bf\u30a4\u30eb\u3001\u5168\u6587\u691c\u7d22\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3001\u7ffb\u8a33\u306a\u3069\u306e\u7d20\u6674\u3089\u3057\u3044\u6a5f\u80fd\u3092\u305f\u304f\u3055\u3093\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\\n\\n\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u307e\u3060\u5b8c\u74a7\u3067\u306f\u306a\u304f\u3001\u307e\u3060\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u304c\u5fc5\u8981\u3067\u3059\u3002 The source code is hosted on GitHub: https://github.com/casbin/casbin-website.\\n\\n\u3069\u3093\u306a\u8ca2\u732e\u3082\u63d0\u6848\u3082\u6b53\u8fce\u3067\u3059!"},{"id":"/2018/08/27/node-casbin","metadata":{"permalink":"/ja/blog/2018/08/27/node-casbin","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-27-node-casbin.md","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2018-08-27-node-casbin.md","title":"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc","description":"\u4eca\u65e5\u3001Casbin \u3092 Node.js \u306b\u6b63\u5e38\u306b\u79fb\u690d\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306f node-Casbin \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002","date":"2018-08-27T00:00:00.000Z","formattedDate":"2018\u5e748\u670827\u65e5","tags":[],"readingTime":0.515,"truncated":false,"authors":[{"name":"Zixuan Liu","title":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc","url":"http://github.com/nodece","imageURL":"https://avatars.githubusercontent.com/nodece"}],"frontMatter":{"title":"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc","author":"Zixuan Liu","authorTitle":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc","authorURL":"http://github.com/nodece","authorImageURL":"https://avatars.githubusercontent.com/nodece"},"prevItem":{"title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30ea\u30ef\u30fc\u30af","permalink":"/ja/blog/2018/09/23/new-website"},"nextItem":{"title":"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01","permalink":"/ja/blog/2018/08/07/launching-casbin-server"}},"content":"\u4eca\u65e5\u3001Casbin \u3092 Node.js \u306b\u6b63\u5e38\u306b\u79fb\u690d\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306f [node-Casbin](https://github.com/casbin/node-casbin) \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002\\n\\n**node-Casbin** \u306f\u3001Casbin \u306e\u4ed6\u306e\u5b9f\u88c5\u3068\u540c\u69d8\u306e\u4f7f\u7528\u6cd5\u3068 API \u3092\u5171\u6709\u3057\u3066\u3044\u307e\u3059\u3002 Express\u3001Koa2\u3001Egg.js\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f \u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30b7\u30fc\u30b1\u30f3\u30b9\u7528\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30a2\u30c0\u30d7\u30bf\u3082\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\n\\n\u305d\u308c\u304c\u3042\u306a\u305f\u306e\u5fc5\u8981\u6027\u306b\u3088\u304f\u5f79\u7acb\u3064\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059:)\\n\\nGitHub: https://github.com/casbin/node-casbin"},{"id":"/2018/08/07/launching-casbin-server","metadata":{"permalink":"/ja/blog/2018/08/07/launching-casbin-server","editUrl":"https://github.com/casbin/casbin-website-v2/edit/master/blog/2018-08-07-launching-casbin-server.md","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2018-08-07-launching-casbin-server.md","title":"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01","description":"\u4e00\u90e8\u306e\u304a\u5ba2\u69d8\u306f\u3001Casbin\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4ee3\u308f\u308a\u306b\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5c0b\u306d\u3066\u3044\u307e\u3059\u3002 \u306e\u7b54\u3048\u306f \u306f\u3044 \u3067\u3059\u3002 \u672c\u65e5\u3001 Casbin Server \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3001 Access Control as a Service \u306e\u5177\u4f53\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u958b\u59cb\u3057\u307e\u3057\u305f\u3002","date":"2018-08-07T00:00:00.000Z","formattedDate":"2018\u5e748\u67087\u65e5","tags":[],"readingTime":1.26,"truncated":false,"authors":[{"name":"Helong Zhang","title":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc","url":"http://github.com/BetaCat0","imageURL":"https://avatars.githubusercontent.com/BetaCat0"}],"frontMatter":{"title":"Casbin Server \u304c\u8d77\u52d5\u3057\u307e\u3057\u305f\uff01","author":"Helong Zhang","authorTitle":"\u30ab\u30b9\u30d3\u30f3\u30e1\u30f3\u30c6\u30ca\u30fc","authorURL":"http://github.com/BetaCat0","authorImageURL":"https://avatars.githubusercontent.com/BetaCat0"},"prevItem":{"title":"node-Casbin: Casbin \u30d5\u30a1\u30df\u30ea\u30fc\u306e\u65b0\u3057\u3044\u30e1\u30f3\u30d0\u30fc","permalink":"/ja/blog/2018/08/27/node-casbin"}},"content":"\u4e00\u90e8\u306e\u304a\u5ba2\u69d8\u306f\u3001Casbin\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4ee3\u308f\u308a\u306b\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5c0b\u306d\u3066\u3044\u307e\u3059\u3002 \u306e\u7b54\u3048\u306f **\u306f\u3044** \u3067\u3059\u3002 \u672c\u65e5\u3001 [Casbin Server](https://github.com/casbin/casbin-server) \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u3001 **Access Control as a Service** \u306e\u5177\u4f53\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u958b\u59cb\u3057\u307e\u3057\u305f\u3002\\n\\n**Casbin Server** \u306f\u30b3\u30a2\u30c1\u30fc\u30e0\u306b\u3088\u3063\u3066\u7a4d\u6975\u7684\u306b\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3044\u304f\u3064\u304b\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059:\\n\\n- \u7d14\u7c8b\u306b\u30b4\u30e9\u30f3\u3067\u958b\u767a\u3055\u308c\u307e\u3057\u305f\u3002\\n- \u6570\u5343\u306eCasbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7ba1\u7406\u3067\u304d\u308b\u305f\u3081\u3001\u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u30ed\u30b8\u30c3\u30af\u3092\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u304b\u30891\u3064\u306eCasbin\u30b5\u30fc\u30d0\u30fc\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002\\n- **gRPC** \u306fCasbin Server \u3068\u306e\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001\u8fd1\u3044\u5c06\u6765\u3001 **RESTful** \u306e\u30b5\u30dd\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u691c\u8a0e\u3057\u3066\u3044\u307e\u3059\u3002\\n- \u958b\u767a\u8005\u4ee5\u5916\u306e\u7ba1\u7406\u8005\u306f\u3001Casbin\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u30e2\u30c7\u30eb\u3001\u30dd\u30ea\u30b7\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b7\u30f3\u30b0\u306a\u3069\u306e\u3059\u3079\u3066\u306e\u8a73\u7d30\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306aWeb\u7ba1\u7406\u8005\u30dd\u30fc\u30bf\u30eb\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\n\\n\\n\\n\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f GitHub \u3067\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059: https://github.com/casbin/casbin-server\\n\\n\u554f\u984c\u3084\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u6b53\u8fce\u3057\u307e\u3059:)"}]}')}}]);