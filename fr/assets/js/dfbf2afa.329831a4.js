"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[475],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(a),h=n,c=m["".concat(i,".").concat(h)]||m[h]||d[h]||l;return a?r.createElement(c,p(p({ref:e},u),{},{components:a})):r.createElement(c,p({ref:e},u))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7673:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},p=void 0,o={unversionedId:"graphql-middlewares",id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/GraphQLMiddlewares.mdx",sourceDirName:".",slug:"/graphql-middlewares",permalink:"/fr/docs/graphql-middlewares",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"graphql-middlewares",title:"Moyens GraphQL",description:"authorization for GraphQL endpoints",keywords:["GraphQL","GraphQL Middlewares"]},sidebar:"docs",previous:{title:"Moyens",permalink:"/fr/docs/middlewares"},next:{title:"Moyens natifs du Cloud",permalink:"/fr/docs/cloud-native"}},i={},s=[{value:"Moyens support\xe9s GraphQL",id:"moyens-support\xe9s-graphql",level:2}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=u("Tabs"),m=u("TabItem"),h={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casbin suit la mani\xe8re officiellement sugg\xe9r\xe9e de fournir une autorisation pour les terminaux GraphQL en ayant une seule source de v\xe9rit\xe9 pour l\u2019autorisation : ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization/"},"https://graphql.org/learn/authorization/")," . En un autre mot, Casbin devrait \xeatre plac\xe9 entre la couche GraphQL et votre logique commerciale."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// La logique d'autorisation Casbin vit dans postRepository\nvar postRepository = require('postRepository');\n\nvar postType = new GraphQLObjectType({\n  name: 'Post',\n  champs: {\n    body: {\n      type: GraphQLString,\n      r\xe9solve: (post, argus, contexte, { rootValue }) => {\n        return postRepository. etBody(context.user, post);\n      }\n    }\n  }\n});\n")),(0,n.kt)("h2",{id:"moyens-support\xe9s-graphql"},"Moyens support\xe9s GraphQL"),(0,n.kt)("p",null,"Une liste compl\xe8te des produits interm\xe9diaires Casbin GraphQL est fournie ci-dessous. Toute contribution tierce sur un nouveau middleware GraphQL est la bienvenue, veuillez nous en informer et nous la mettrons dans cette liste:)"),(0,n.kt)(d,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/graphql-authz"},"auth-graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation pour graphql-go")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour/graphql-casbin"},"graphql-casbin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-go/graphql"},"graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/esmaeilpour"},"@esmaeilpour")),(0,n.kt)("td",{parentName:"tr",align:null},"Une impl\xe9mentation de l'utilisation de Graphql et de Casbin ensemble")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu/gqlgen_casbin_RBAC_example"},"format@@0 gqlgen_casbin_RBAC_example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/99designs/gqlgen"},"Gqlgen")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/WenyXu"},"@WenyXu")),(0,n.kt)("td",{parentName:"tr",align:null},"(vide)"))))),(0,n.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/graphql-authz"},"auth-graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation Casbin pour ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")))))),(0,n.kt)(m,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,n.kt)("th",{parentName:"tr",align:null},"Impl\xe9mentation GraphQL"),(0,n.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388/graphql-authz"},"auth-graphql")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Checho3388"},"@Checho3388")),(0,n.kt)("td",{parentName:"tr",align:null},"Un middleware d'autorisation Casbin pour ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/graphql-python/graphql-core"},"GraphQL-core 3"))))))))}c.isMDXComponent=!0}}]);