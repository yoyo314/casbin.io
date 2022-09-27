"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4897],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=n,c=u["".concat(i,".").concat(m)]||u[m]||h[m]||l;return a?r.createElement(c,p(p({ref:e},s),{},{components:a})):r.createElement(c,p({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9155:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},p=void 0,o={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",source:"@site/docs/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/docs/graphql-middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GraphQLMiddlewares.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1664272028,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{id:"graphql-middlewares",title:"GraphQL Middlewares",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},sidebar:"docs",previous:{title:"Middlewares",permalink:"/docs/middlewares"},next:{title:"Cloud Native Middlewares",permalink:"/docs/cloud-native"}},i={},d=[{value:"Supported GraphQL middlewares",id:"supported-graphql-middlewares",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},h=s("Tabs"),u=s("TabItem"),m={toc:d};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casbin follows the officially suggested way to provide authorization for GraphQL endpoints by having a single source of truth for authorization: ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," . In another word, Casbin should be placed between GraphQL layer and your business logic."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Casbin authorization logic lives inside postRepository\nvar postRepository = require('postRepository');\n \nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  fields: {\n    body: {\n      type: GraphQLString,\n      resolve: (post, args, context, { rootValue }) => {\n        return postRepository.getBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,n.kt)("h2",{id:"supported-graphql-middlewares"},"Supported GraphQL middlewares"),(0,n.kt)("p",null,"A complete list of Casbin GraphQL middlewares is provided as below. Any 3rd-party contribution on a new GraphQL middleware is welcomed, please inform us and we will put it in this list:)"),(0,n.kt)(h,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"An authorization middleware for graphql-go")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,n.kt)("td",{parentName:"tr",align:null},"An Implementation of using Graphql and Casbin together")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"gqlgen_casbin_RBAC_example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"gqlgen")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,n.kt)("td",{parentName:"tr",align:null},"(empty)"))))),(0,n.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"A Casbin authorization middleware for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,n.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"GraphQL Implementation"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"graphql-authz")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,n.kt)("td",{parentName:"tr",align:null},"A Casbin authorization middleware for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}c.isMDXComponent=!0}}]);