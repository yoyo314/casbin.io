"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2020],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],l={id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},o=void 0,c={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC et RBAC96",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/fr/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},sidebar:"docs",previous:{title:"RBAC avec domaines",permalink:"/fr/docs/rbac-with-domains"},next:{title:"ABAC",permalink:"/fr/docs/abac"}},p={},u=[{value:"Casbin RBAC et RBAC96",id:"casbin-rbac-et-rbac96",level:2},{value:"Diff\xe9rence entre Casbin RBAC et RBAC96",id:"diff\xe9rence-entre-casbin-rbac-et-rbac96",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"casbin-rbac-et-rbac96"},"Casbin RBAC et RBAC96"),(0,i.kt)("p",null,"Dans ce document, nous comparerons Casbin RBAC avec ",(0,i.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"."),(0,i.kt)("p",null,"Casbin RBAC prend en charge presque toutes les fonctionnalit\xe9s de RBAC96, et a ajout\xe9 de nouvelles fonctionnalit\xe9s au-dessus."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version RBAC"),(0,i.kt)("th",{parentName:"tr",align:null},"Niveau de support"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,i.kt)("td",{parentName:"tr",align:null},"enti\xe8rement pris en charge"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0 est la version de base de RBAC96. Il a clarifi\xe9 la relation entre les utilisateurs, les r\xf4les et les permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,i.kt)("td",{parentName:"tr",align:null},"enti\xe8rement pris en charge"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1 a ajout\xe9 des hi\xe9rarchies de r\xf4le sur RBAC0, ce qui signifie que si ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," a ",(0,i.kt)("inlineCode",{parentName:"td"},"r\xf4le 1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"r\xf4le1")," a ",(0,i.kt)("inlineCode",{parentName:"td"},"r\xf4le2"),", puis ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," aura \xe9galement ",(0,i.kt)("inlineCode",{parentName:"td"},"r\xf4le2")," et h\xe9ritera de ses permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,i.kt)("td",{parentName:"tr",align:null},"la gestion mutuellement exclusive est prise en charge (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"comme ceci"),"), mais les limites quantitatives ne sont pas"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2 ajoute des contraintes \xe0 RBAC0. Ainsi, RBAC2 peut g\xe9rer les exclusions mutuelles contenues dans les politiques.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,i.kt)("td",{parentName:"tr",align:null},"la gestion mutuellement exclusive est prise en charge (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"comme ceci"),"), mais les limites quantitatives ne sont pas"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3 est une combinaison de RBAC1 et RBAC2. RBAC3 supporte les hi\xe9rarchies de r\xf4les et les contraintes dans RBAC1 et RBAC2.")))),(0,i.kt)("h2",{id:"diff\xe9rence-entre-casbin-rbac-et-rbac96"},"Diff\xe9rence entre Casbin RBAC et RBAC96"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"En casbin, la distinction entre l'utilisateur et le r\xf4le n'est pas claire"),(0,i.kt)("p",{parentName:"li"},"En Casbin, l'Utilisateur et le r\xf4le sont trait\xe9s comme des cha\xeenes. Si vous avez \xe9crit un fichier de r\xe9gulation comme ceci :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,i.kt)("p",{parentName:"li"},"et appeler la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," comme \xe7a (",(0,i.kt)("inlineCode",{parentName:"p"},"e")," est une instance de Casbin Enforcer) :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,i.kt)("p",{parentName:"li"},"vous obtiendrez la valeur de retour ci-dessous:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice]\n")),(0,i.kt)("p",{parentName:"li"},"Parce qu'en Casbin, les sujets comprenaient des utilisateurs et des r\xf4les."),(0,i.kt)("p",{parentName:"li"},"Cependant, si vous appelez la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllRoles()")," comme ceci:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,i.kt)("p",{parentName:"li"},"vous obtiendrez la valeur de retour ci-dessous:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,i.kt)("p",{parentName:"li"},"Et maintenant vous savez qu'il ya une distinction entre les utilisateurs et les r\xf4les dans le Casbin, mais n'est pas aussi nette que dans RBAC96. Bien s\xfbr, vous pouvez ajouter un pr\xe9fixe \xe0 vos politiques comme ",(0,i.kt)("inlineCode",{parentName:"p"},"user::alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"role::admin")," pour clarifier leurs relations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC fournit plus d'autorisations que RBAC96"),(0,i.kt)("p",{parentName:"li"},"Seules 7 autorisations sont d\xe9finies dans RBAC96: lecture, \xe9criture, ajout, ex\xe9cution, cr\xe9dit, d\xe9bit, requ\xeate."),(0,i.kt)("p",{parentName:"li"},"Cependant, dans Casbin, nous traitons les permissions comme des cha\xeenes. De cette fa\xe7on, vous pouvez cr\xe9er des permissions qui vous conviennent mieux.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC prend en charge les domaines"),(0,i.kt)("p",{parentName:"li"},"En Casbin, vous pouvez faire des autorisations par domaines. Cette fonction rend votre mod\xe8le de contr\xf4le d'acc\xe8s plus flexible."))))}d.isMDXComponent=!0}}]);