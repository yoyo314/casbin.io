"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[716],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(v,s(s({ref:t},c),{},{components:n})):a.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),s=n(2389),o=n(7392),l=n(7094),u=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,s=e.lazy,p=e.block,m=e.defaultValue,v=e.values,b=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,l.U)(),C=j.tabGroupChoices,y=j.setTabGroupChoices,w=(0,r.useState)(N),z=w[0],q=w[1],P=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var O=C[b];null!=O&&O!==z&&h.some((function(e){return e.value===O}))&&q(O)}var x=function(e){var t=e.currentTarget,n=P.indexOf(t),a=h[n].value;a!==z&&(E(t),q(a),null!=b&&y(b,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var i,s=P.indexOf(e.currentTarget)-1;n=null!=(i=P[s])?i:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:function(e){return P.push(e)},onKeyDown:A,onFocus:x,onClick:x},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})}))))}function m(e){var t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=(n(5488),n(5162),["components"]),o={id:"frontend",title:"Utilisation du frontend"},l=void 0,u={unversionedId:"frontend",id:"frontend",title:"Utilisation du frontend",description:"Casbin.js est un addon Casbin qui facilite votre gestion du contr\xf4le d'acc\xe8s dans l'application frontend.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/FrontendUsage.mdx",sourceDirName:".",slug:"/frontend",permalink:"/fr/docs/frontend",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/FrontendUsage.mdx",tags:[],version:"current",frontMatter:{id:"frontend",title:"Utilisation du frontend"},sidebar:"docs",previous:{title:"Log & gestion des erreurs",permalink:"/fr/docs/log-error"},next:{title:"\xc9diteur en ligne",permalink:"/fr/docs/online-editor"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Middlewares du frontend",id:"middlewares-du-frontend",level:2},{value:"D\xe9marrage rapide",id:"d\xe9marrage-rapide",level:2},{value:"Utilisation avanc\xe9e",id:"utilisation-avanc\xe9e",level:2},{value:"Liste des API",id:"liste-des-api",level:2},{value:"<code>setPermission(permission: string)</code>",id:"setpermissionpermission-string",level:4},{value:"<code>setUser(user: string)</code>",id:"setuseruser-string",level:4},{value:"<code>can(action: string, object: string)</code>",id:"canaction-string-object-string",level:4},{value:"<code>cannot(action: string, object: string)</code>",id:"cannotaction-string-object-string",level:4},{value:"<code>canAll(action: string, objects: Array&lt;object&gt;)</code>",id:"canallaction-string-objects-arrayobject",level:4},{value:"<code>canAny(action: string, objects: Array&lt;object&gt;)</code>",id:"cananyaction-string-objects-arrayobject",level:4},{value:"Pourquoi Casbin.js",id:"pourquoi-casbinjs",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js"},"Casbin.js")," est un addon Casbin qui facilite votre gestion du contr\xf4le d'acc\xe8s dans l'application frontend."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install casbin.js\nnpm install casbin\n")),(0,i.kt)("p",null,"ou"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin.js\n")),(0,i.kt)("h2",{id:"middlewares-du-frontend"},"Middlewares du frontend"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,i.kt)("th",{parentName:"tr",align:null},"Type de texte"),(0,i.kt)("th",{parentName:"tr",align:null},"Auteur"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/react-authz"},"authentification-r\xe9action")),(0,i.kt)("td",{parentName:"tr",align:null},"R\xe9agir"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"React wrapper pour Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-react"},"rbac-r\xe9action")),(0,i.kt)("td",{parentName:"tr",align:null},"R\xe9agir"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng"},"@daobeng")),(0,i.kt)("td",{parentName:"tr",align:null},"Contr\xf4le d'acc\xe8s bas\xe9 sur les r\xf4les dans React \xe0 l'aide de HOCs, CASL et Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/vue-authz"},"authentification-Vie")),(0,i.kt)("td",{parentName:"tr",align:null},"Vue"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Gestionnaire de vue pour Casbin.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-js/angular-authz"},"identificateur-angulaire")),(0,i.kt)("td",{parentName:"tr",align:null},"Angulaire"),(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Enveloppe Angulaire pour Casbin.js")))),(0,i.kt)("h2",{id:"d\xe9marrage-rapide"},"D\xe9marrage rapide"),(0,i.kt)("p",null,"Vous pouvez utiliser le mode ",(0,i.kt)("inlineCode",{parentName:"p"},"manuel")," dans votre application en frontend et d\xe9finir la permission quand vous le souhaitez."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const casbinjs = require("casbin. s");\n// D\xe9finit la permission de l\'utilisateur :\n// Il/She peut lire les objets `data1` et `data2` et peut \xe9crire l\'objet `data1`\nconst permission = {\n    "read": ["data1", "data2"],\n    "write": ["data1"]\n}\n\n// Ex\xe9cute la casbine. s en mode manuel, ce qui vous oblige \xe0 d\xe9finir les permissions manuellement.\nconst authorizer = new casbinjs.Authorizer("manuel");\n')),(0,i.kt)("p",null,"maintenant nous avons un autorisateur ",(0,i.kt)("inlineCode",{parentName:"p"},"autorisateur"),". Nous pouvons en obtenir les r\xe8gles de permission en utilisant l'API ",(0,i.kt)("inlineCode",{parentName:"p"},"authorzer.can()")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizzer.cannot()"),". Les valeurs de retour de ces 2 API sont des promesses JavaScript (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"d\xe9tails ici"),"), donc nous devrions utiliser la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"then()")," de la valeur retourn\xe9e comme ceci :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.can("write", "data1");\nr\xe9sultat. hen((succ\xe8s, \xe9chec) => {\n    if (success) {\n        console. og("vous pouvez \xe9crire data1");\n    } autre {\n        console. og("vous ne pouvez pas \xe9crire des donn\xe9es1");\n    }\n});\n// sortie: vous pouvez \xe9crire des donn\xe9es1\n')),(0,i.kt)("p",null,"et ",(0,i.kt)("inlineCode",{parentName:"p"},"cannot()")," est utilis\xe9 de la m\xeame mani\xe8re :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'result = authorizer.cannot("read", "data2");\nr\xe9sultat. hen((succ\xe8s, \xe9chec) => {\n    if (success) {\n        console. og("vous ne pouvez pas lire les donn\xe9es2");\n    } autre {\n        console. og("vous pouvez lire data2");\n    }\n});\n// output: you can read data2\n')),(0,i.kt)("p",null,"dans le code ci-dessus, la variable ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," dans les param\xe8tres signifie que la requ\xeate obtient le r\xe9sultat sans \xe9mettre d'erreur, et ne veut pas dire que la r\xe8gle de permission est ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9chec")," n'est pas aussi li\xe9 aux r\xe8gles d'autorisation. Cela n'a de sens que lorsque quelque chose ne va pas dans le processus de la demande."),(0,i.kt)("p",null,"Vous pouvez vous r\xe9f\xe9rer \xe0 notre ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin-js/examples"},"exemple React")," pour voir une utilisation pratique de Casbin.js"),(0,i.kt)("h2",{id:"utilisation-avanc\xe9e"},"Utilisation avanc\xe9e"),(0,i.kt)("p",null,"Casbin.js offre une solution parfaite pour int\xe9grer votre gestion du contr\xf4le d\u2019acc\xe8s frontal \xe0 votre service Casbin d\u2019arri\xe8re-plan."),(0,i.kt)("p",null,"Utilisez le mode ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," et sp\xe9cifiez votre point de terminaison lors de l'initialisation de la Casbin. s ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorizer"),", il synchronisera automatiquement les permissions et manipulera l'\xe9tat du frontend."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const casbinjs = require('casbin.js');\n\n// D\xe9finissez votre adresse de service casbin d'arri\xe8re-plan\nconst authorizer = new casbinjs. uthorizer(\n    'auto', // mode\n    {endpoint: 'http://your_endpoint/api/casbin'}\n);\n\n// D\xe9finit votre visiteur. \n// Casbin.js synchronisera automatiquement la permission avec votre service Casbin backend.\nauthorizer.setUser(\"Tom\");\n\n// \xc9valuer la permission\nr\xe9sultat = authorizzer.can(\"read\", \"data1\");\nr\xe9sultat. hen(succ\xe8s, failed) => {\n    if (success) {\n        // Proc\xe9dure du frontend ...\n    }\n});\n")),(0,i.kt)("p",null,"En cons\xe9quence, vous devez exposer une interface (par exemple un RestAPI) pour g\xe9n\xe9rer l'objet de permission et le passer au frontend. Dans votre contr\xf4leur API, appelez ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetUserPermission")," pour construire l'objet de permission. Voici un exemple dans Beego:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Votre serveur de point de terminaison devrait renvoyer quelque chose comme"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "other":"other",\n    "data": "What you get from `CasbinJsGetPermissionForUser`"\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Go"},'// Router\nbeego.Router("api/casbin", &controllers.APIController{}, "GET:GetFrontendPermission")\n\n// Controller\nfunc (c *APIController) GetFrontendPermission() {\n    // R\xe9cup\xe8re le visiteur depuis les param\xe8tres GET. (La cl\xe9 est "casbin_subject")\n    visiteur := c.Input(). et("casbin_subject")\n    // `e` est une instance initialis\xe9e de Casbin Enforcer\n    c. ata["perm"] = casbin.CasbinJsGetPermissionForUser(e, visitor) \n    // Transmet les donn\xe9es au front-end.\n    c.ServeJSON()\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Actuellement, l'api ",(0,i.kt)("inlineCode",{parentName:"p"},"CasbinJsGetPermissionForUser")," n'est pris en charge que dans Go Casbin et Node-Casbin. Si vous voulez que cet api soit pris en charge dans d'autres langues, veuillez ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin.js/issues"},"soulever un probl\xe8me")," ou laisser un commentaire ci-dessous."))),(0,i.kt)("h2",{id:"liste-des-api"},"Liste des API"),(0,i.kt)("h4",{id:"setpermissionpermission-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setPermission(permission: string)")),(0,i.kt)("p",null,"D\xe9finir l'objet de permission. Toujours utilis\xe9 en mode ",(0,i.kt)("inlineCode",{parentName:"p"},"manuel"),"."),(0,i.kt)("h4",{id:"setuseruser-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"setUser(user: string)")),(0,i.kt)("p",null,"D\xe9finissez l'identit\xe9 du visiteur et mettez \xe0 jour la permission. Toujours utilis\xe9 en mode ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,i.kt)("h4",{id:"canaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"can(action: string, object: string)")),(0,i.kt)("p",null,"V\xe9rifie si l'utilisateur peut effectuer l'action ",(0,i.kt)("inlineCode",{parentName:"p"},"sur l'objet"),"."),(0,i.kt)("h4",{id:"cannotaction-string-object-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"cannot(action: string, object: string)")),(0,i.kt)("p",null,"V\xe9rifie si l'utilisateur ",(0,i.kt)("strong",{parentName:"p"},"ne peut pas")," effectuer l'action ",(0,i.kt)("inlineCode",{parentName:"p"},"sur l'objet"),"."),(0,i.kt)("h4",{id:"canallaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAll(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"V\xe9rifie si l'utilisateur peut effectuer l'action ",(0,i.kt)("inlineCode",{parentName:"p"},"sur **tout l'objet** dans les objets"),"."),(0,i.kt)("h4",{id:"cananyaction-string-objects-arrayobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"canAny(action: string, objects: Array<object>)")),(0,i.kt)("p",null,"V\xe9rifie si l'utilisateur peut effectuer l'action ",(0,i.kt)("inlineCode",{parentName:"p"},"sur **n'importe lequel** des objets"),"."),(0,i.kt)("h2",{id:"pourquoi-casbinjs"},"Pourquoi Casbin.js"),(0,i.kt)("p",null,"Les gens peuvent se demander la diff\xe9rence entre Node-Casbin et Casbin.js. En un mot, Node-Casbin est le c\u0153ur de Casbin impl\xe9ment\xe9 dans l'environnement NodeJS, et il est normalement utilis\xe9 comme outil de gestion d'acc\xe8s \xe0 la fin du serveur. Casbin.js est une biblioth\xe8que en frontend qui vous aide \xe0 utiliser Casbin pour autoriser l'utilisateur de votre page Web du c\xf4t\xe9 client."),(0,i.kt)("p",null,"Normalement, il n'est pas appropri\xe9 de construire directement un service Casbin et de faire les t\xe2ches d'autorisation/mise en application sur une application du site web en raison des probl\xe8mes suivants :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Quand quelqu'un allume le client, le responsable est initialis\xe9, et il retirera toutes les r\xe8gles des couches persistantes du backend. Une forte concurrence pourrait entra\xeener une forte pression sur les bases de donn\xe9es et co\xfbter beaucoup de d\xe9bit au r\xe9seau.\xa0"),(0,i.kt)("li",{parentName:"ol"},"Le chargement de toutes les politiques aupr\xe8s des clients pourrait entra\xeener des risques s\xfbrs."),(0,i.kt)("li",{parentName:"ol"},"Difficile pour la s\xe9paration entre le client et le serveur ainsi que pour le d\xe9veloppement agile .")),(0,i.kt)("p",null,"Nous souhaitons un outil qui facilite le processus d'utilisation de Casbin sur le frontend. En fait, le c\u0153ur de Casbin.js est la manipulation de la permission de l'utilisateur actuel du c\xf4t\xe9 client. Comme vous l'avez mentionn\xe9, Casbin.js fait une r\xe9cup\xe9ration \xe0 partir d'un point de terminaison sp\xe9cifi\xe9. Cette proc\xe9dure synchronisera la permission de l'utilisateur avec le service backend Casbin. Apr\xe8s avoir les donn\xe9es d'autorisation, les d\xe9veloppeurs peuvent utiliser les interfaces Casbin.js pour g\xe9rer les comportements de l'utilisateur du c\xf4t\xe9 du frontend."),(0,i.kt)("p",null,"Casbin. s \xe9vitent les deux probl\xe8mes mentionn\xe9s ci-dessus: le service Casbin ne sera plus retir\xe9 \xe0 plusieurs reprises, et la taille des messages pass\xe9s entre le client et le serveur est r\xe9duite. Nous \xe9vitons \xe9galement de stocker toutes les politiques en frontend. L'utilisateur ne peut acc\xe9der qu'\xe0 sa propre autorisation, mais n'a aucune id\xe9e des choses telles que le mod\xe8le de contr\xf4le d'acc\xe8s et les autorisations des autres utilisateurs. De plus, Casbin.js peut \xe9galement d\xe9coupler efficacement le client et le serveur dans la gestion des autorisations."))}m.isMDXComponent=!0}}]);