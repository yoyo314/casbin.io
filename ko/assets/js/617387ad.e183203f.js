"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3621],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),d=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),h=d(r),m=n,c=h["".concat(i,".").concat(m)]||h[m]||s[m]||l;return r?a.createElement(c,o(o({ref:e},u),{},{components:r})):a.createElement(c,o({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=h;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1622:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),o=["components"],p={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},i=void 0,d={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/ko/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},sidebar:"docs",previous:{title:"\ubbf8\ub4e4\uc6e8\uc5b4",permalink:"/ko/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/ko/docs/cloud-native"}},u={},s=[{value:"Supported GraphQL middlewares",id:"supported-graphql-middlewares",level:2}],h=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},m=h("Tabs"),c=h("TabItem"),g={toc:s};function b(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Casbin follows the officially suggested way to provide authorization for GraphQL endpoints by having a single source of truth for authorization: ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," . In another word, Casbin should be placed between GraphQL layer and your business logic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,l.kt)("h2",{id:"supported-graphql-middlewares"},"Supported GraphQL middlewares"),(0,l.kt)("p",null,"A complete list of Casbin GraphQL middlewares is provided as below. Any 3rd-party contribution on a new GraphQL middleware is welcomed, please inform us and we will put it in this list:)"),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"An authorization middleware for graphql-go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,l.kt)("td",{parentName:"tr",align:null},"An Implementation of using Graphql and Casbin together")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen_casbin_RBAC_example")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,l.kt)("td",{parentName:"tr",align:null},"(empty)"))))),(0,l.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"A Casbin authorization middleware for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,l.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,l.kt)("td",{parentName:"tr",align:null},"A Casbin authorization middleware for ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}b.isMDXComponent=!0}}]);