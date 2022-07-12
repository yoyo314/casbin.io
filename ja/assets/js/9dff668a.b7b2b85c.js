"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2872],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},h=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),d=u(a),m=n,c=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?r.createElement(c,p(p({ref:e},h),{},{components:a})):r.createElement(c,p({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8400:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),p=["components"],o={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},i=void 0,u={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/ja/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},sidebar:"docs",previous:{title:"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2",permalink:"/ja/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/ja/docs/cloud-native"}},h={},s=[{value:"GraphQL \u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059",id:"graphql-\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059",level:2}],d=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},m=d("Tabs"),c=d("TabItem"),g={toc:s};function b(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Casbin\u306f\u516c\u5f0f\u306b\u63d0\u6848\u3055\u308c\u305f\u3001\u8a31\u53ef\u306e\u305f\u3081\u306e\u5358\u4e00\u306e\u30bd\u30fc\u30b9\u3092\u6301\u3064\u3053\u3068\u306b\u3088\u3063\u3066GraphQL\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u8a31\u53ef\u3092\u63d0\u4f9b\u3059\u308b\u65b9\u6cd5\u306b\u5f93\u3044\u307e\u3059:",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," \u3002 \u5225\u306e\u8a00\u3044\u65b9\u3092\u3059\u308c\u3070\u3001Casbin\u306fGraphQL\u30ec\u30a4\u30e4\u30fc\u3068\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u306e\u9593\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,l.kt)("h2",{id:"graphql-\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059"},"GraphQL \u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059"),(0,l.kt)("p",null,"Casbin GraphQL\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u4e00\u89a7\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002 \u65b0\u3057\u3044GraphQL\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306b\u5bfe\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8ca2\u732e\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30ea\u30b9\u30c8\u306b\u8a18\u8f09\u3057\u307e\u3059:)"),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL\u5b9f\u88c5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"graphql-go\u306e\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,l.kt)("td",{parentName:"tr",align:null},"Graphql\u3068Casbin\u3092\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u5b9f\u88c5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen_casbin_RBAC_example")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,l.kt)("td",{parentName:"tr",align:null},"(\u7a7a)"))))),(0,l.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL\u5b9f\u88c5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL.js ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"\u306e\u305f\u3081\u306e\u30ab\u30b9\u30d3\u30f3\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2")))))),(0,l.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30df\u30c9\u30eb\u30a6\u30a7\u30a2"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL\u5b9f\u88c5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3 \u7528\u306e\u30ab\u30b9\u30d3\u30f3\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2"))))))))}b.isMDXComponent=!0}}]);