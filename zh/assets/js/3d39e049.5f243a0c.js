"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6128],{3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},h=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),m=u(a),d=n,c=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return a?r.createElement(c,p(p({ref:e},h),{},{components:a})):r.createElement(c,p({ref:e},h))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9846:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),p=["components"],o={id:"graphql-middlewares",title:"Graphql-\u4e2d\u95f4\u4ef6"},i=void 0,u={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"Graphql-\u4e2d\u95f4\u4ef6",description:"Casbin\u91c7\u7528\u5b98\u65b9\u5efa\u8bae\u7684\u65b9\u5f0f\u4e3aGraphQL\u7ec8\u70b9\u63d0\u4f9b\u6388\u6743\uff0c\u65b9\u6cd5\u662f\u91c7\u7528\u5355\u4e00\u7684\u6388\u6743\u6765\u6e90\uff1ahttps://graphql.org/learn/authorization/ \u6362\u53e5\u8bdd\u8bf4\uff0cCasbin\u5e94\u8be5\u653e\u7f6e\u5728 GraphQL \u5c42\u548c\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4e4b\u95f4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/zh/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"Graphql-\u4e2d\u95f4\u4ef6"},sidebar:"docs",previous:{title:"\u4e2d\u95f4\u4ef6",permalink:"/zh/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/zh/docs/cloud-native"}},h={},s=[{value:"\u652f\u6301\u7684 GraphQL \u4e2d\u95f4\u4ef6",id:"\u652f\u6301\u7684-graphql-\u4e2d\u95f4\u4ef6",level:2}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},d=m("Tabs"),c=m("TabItem"),g={toc:s};function b(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Casbin\u91c7\u7528\u5b98\u65b9\u5efa\u8bae\u7684\u65b9\u5f0f\u4e3aGraphQL\u7ec8\u70b9\u63d0\u4f9b\u6388\u6743\uff0c\u65b9\u6cd5\u662f\u91c7\u7528\u5355\u4e00\u7684\u6388\u6743\u6765\u6e90\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," \u6362\u53e5\u8bdd\u8bf4\uff0cCasbin\u5e94\u8be5\u653e\u7f6e\u5728 GraphQL \u5c42\u548c\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4e4b\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,l.kt)("h2",{id:"\u652f\u6301\u7684-graphql-\u4e2d\u95f4\u4ef6"},"\u652f\u6301\u7684 GraphQL \u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u9762\u63d0\u4f9b\u4e86Casbin GraphQL \u4e2d\u95f4\u4ef6\u7684\u5b8c\u6574\u5217\u8868\u3002 \u6211\u4eec\u6b22\u8fce\u6765\u81ea\u7b2c\u4e09\u65b9\u7684\u4e2d\u95f4\u4ef6\uff0c\u8bf7\u901a\u77e5\u6211\u4eec\u4ee5\u5c06\u60a8\u7684\u4e2d\u95f4\u4ef6\u52a0\u5165\u5217\u8868\u4e2d:)"),(0,l.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2d\u95f4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL \u5b9e\u73b0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8egraphql-go \u7684\u6388\u6743\u4e2d\u95f4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Graphql \u548c Casbin \u5171\u540c\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen_casbin_RBAC_example")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,l.kt)("td",{parentName:"tr",align:null},"(empty)"))))),(0,l.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2d\u95f4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL \u5b9e\u73b0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u7528\u4e8e ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")," \u7684\u6388\u6743\u4e2d\u95f4\u4ef6"))))),(0,l.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2d\u95f4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL \u5b9e\u73b0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,l.kt)("td",{parentName:"tr",align:null},"A Casbin authorization middleware for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}b.isMDXComponent=!0}}]);