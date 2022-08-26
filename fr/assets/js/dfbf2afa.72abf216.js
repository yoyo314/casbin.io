"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[475],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return h}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(r),h=n,c=m["".concat(i,".").concat(h)]||m[h]||d[h]||l;return r?a.createElement(c,o(o({ref:e},s),{},{components:r})):a.createElement(c,o({ref:e},s))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7673:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),o=["components"],p={id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},i=void 0,u={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/fr/docs/graphql-middlewares",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},sidebar:"docs",previous:{title:"Moyens",permalink:"/fr/docs/middlewares"},next:{title:"Moyens natifs du Cloud",permalink:"/fr/docs/cloud-native"}},s={},d=[{value:"Moyens support\xe9s GraphQL",id:"moyens-support\xe9s-graphql",level:2}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},h=m("Tabs"),c=m("TabItem"),g={toc:d};function b(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Casbin suit la mani\xe8re officiellement sugg\xe9r\xe9e de fournir une autorisation pour les terminaux GraphQL en ayant une seule source de v\xe9rit\xe9 pour l\u2019autorisation : ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," . En un autre mot, Casbin devrait \xeatre plac\xe9 entre la couche GraphQL et votre logique commerciale."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// La logique d'autorisation Casbin vit dans postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  champs: {\n    body: {\n      type: GraphQLString,\n      r\xe9solve: (post, argus, contexte, { rootValue }) => {\n        return postRepository. etBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,l.kt)("h2",{id:"moyens-support\xe9s-graphql"},"Moyens support\xe9s GraphQL"),(0,l.kt)("p",null,"Une liste compl\xe8te des produits interm\xe9diaires Casbin GraphQL est fournie ci-dessous. Toute contribution tierce sur un nouveau middleware GraphQL est la bienvenue, veuillez nous en informer et nous la mettrons dans cette liste:)"),(0,l.kt)(h,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"auth-graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation pour graphql-go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,l.kt)("td",{parentName:"tr",align:null},"Une impl\xe9mentation de l'utilisation de Graphql et de Casbin ensemble")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"format@@0 gqlgen_casbin_RBAC_example")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"Gqlgen")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,l.kt)("td",{parentName:"tr",align:null},"(vide)"))))),(0,l.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"auth-graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation Casbin pour ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,l.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,l.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,l.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"auth-graphql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,l.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation Casbin pour ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}b.isMDXComponent=!0}}]);