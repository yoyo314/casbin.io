"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2532],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"cloud-native",title:"Moyens natifs du Cloud",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},u=void 0,d={unversionedId:"cloud-native",id:"cloud-native",title:"Moyens natifs du Cloud",description:"Cloud Native Middlewares",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/CloudNative.mdx",sourceDirName:".",slug:"/cloud-native",permalink:"/fr/docs/cloud-native",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CloudNative.mdx",tags:[],version:"current",frontMatter:{id:"cloud-native",title:"Moyens natifs du Cloud",description:"Cloud Native Middlewares",keywords:["cloud native","authorization middleware","middlewares"]},sidebar:"docs",previous:{title:"Moyens GraphQL",permalink:"/fr/docs/graphql-middlewares"},next:{title:"Aper\xe7u de l'API",permalink:"/fr/docs/api-overview"}},p={},s=[{value:"Projets natifs du Cloud",id:"projets-natifs-du-cloud",level:3}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=c("Tabs"),f=c("TabItem"),b={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"projets-natifs-du-cloud"},"Projets natifs du Cloud"),(0,o.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(f,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Projet"),(0,o.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/k8s-authz"},"k8s-authz")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},"Autorisation middleware pour ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/"},"Kubernetes"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/envoy-authz"},"authentification-exp\xe9diteur")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},"Autorisation middleware pour ",(0,o.kt)("a",{parentName:"td",href:"https://istio.io/"},"Istio")," et ",(0,o.kt)("a",{parentName:"td",href:"https://envoyproxy.io/"},"Envoy\xe9"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/kubesphere-authz"},"Authentification par mot de passe")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},"Autorisation middleware pour ",(0,o.kt)("a",{parentName:"td",href:"https://kubesphere.io/"},"kubeSphere")))))),(0,o.kt)(f,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Projet"),(0,o.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"Bouclier ODPF")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/odpf"},"Plateforme de donn\xe9es ouverte")),(0,o.kt)("td",{parentName:"tr",align:null},"ODPF Shield est une autorisation nuageuse bas\xe9e sur des r\xf4les bas\xe9s sur le service reverse proxy (proxy invers\xe9).")))))))}h.isMDXComponent=!0}}]);