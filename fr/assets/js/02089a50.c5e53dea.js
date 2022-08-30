"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"online-editor",title:"\xc9diteur en ligne",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},a=void 0,l={unversionedId:"online-editor",id:"online-editor",title:"\xc9diteur en ligne",description:"Writing Casbin model and policy in web browser",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/OnlineEditor.mdx",sourceDirName:".",slug:"/online-editor",permalink:"/fr/docs/online-editor",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/fr",tags:[],version:"current",frontMatter:{id:"online-editor",title:"\xc9diteur en ligne",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},sidebar:"docs",previous:{title:"Utilisation du frontend",permalink:"/fr/docs/frontend"},next:{title:"Plugins IDE",permalink:"/fr/docs/ide-plugins"}},s={},c=[{value:"Utiliser le mod\xe8le",id:"utiliser-le-mod\xe8le",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vous pouvez \xe9galement utiliser l'\xe9diteur en ligne (",(0,i.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"https://casbin.io/editor/"),") pour \xe9crire votre mod\xe8le et votre politique Casbin dans votre navigateur Web. Il fournit des fonctionnalit\xe9s telles que ",(0,i.kt)("inlineCode",{parentName:"p"},"la coloration syntaxique")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"la compl\xe9tion de code"),", tout comme un IDE pour un langage de programmation."),(0,i.kt)("h2",{id:"utiliser-le-mod\xe8le"},"Utiliser le mod\xe8le"),(0,i.kt)("p",null,"Si vous utilisez ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC avec le pattern")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC avec tout le pattern"),", il sp\xe9cifie la fonction de recherche de masques dans le coin inf\xe9rieur gauche."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"conseils-\xe9diteur",src:n(9523).Z,width:"480",height:"272"}),"."),(0,i.kt)("p",null,"Si vous voulez \xe9crire le code \xe9quivalent, vous devez sp\xe9cifier la fonction de masque \xe0 travers l'api appropri\xe9. Voir ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC avec le mod\xe8le")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"L'\xe9diteur est bas\xe9 sur ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-casbin"),". En raison du d\xe9lai de synchronisation entre les diff\xe9rentes langues de la casbine, le r\xe9sultat d'authentification de l'\xe9diteur `` peut \xeatre diff\xe9rent du r\xe9sultat d'authentification de la casbin que vous utilisez. Dans l'affirmative, veuillez soumettre des probl\xe8mes au d\xe9p\xf4t casbin que vous utilisez.")))}d.isMDXComponent=!0},9523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);