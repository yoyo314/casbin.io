"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5508],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),s=["components"],o={id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},l=void 0,u={unversionedId:"abac",id:"abac",title:"ABAC",description:"ABAC based on Casbin",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/fr/docs/abac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ABAC.mdx",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/fr/docs/rbac-96"},next:{title:"Mod\xe8le de priorit\xe9",permalink:"/fr/docs/priority-model"}},c={},p=[{value:"Qu&#39;est ce que le mod\xe8le ABAC?",id:"quest-ce-que-le-mod\xe8le-abac",level:2},{value:"Comment utiliser ABAC?",id:"comment-utiliser-abac",level:2},{value:"Mise \xe0 l&#39;\xe9chelle du mod\xe8le pour les r\xe8gles complexes et un grand nombre de r\xe8gles ABAC.",id:"mise-\xe0-l\xe9chelle-du-mod\xe8le-pour-les-r\xe8gles-complexes-et-un-grand-nombre-de-r\xe8gles-abac",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quest-ce-que-le-mod\xe8le-abac"},"Qu'est ce que le mod\xe8le ABAC?"),(0,i.kt)("p",null,"ABAC signifie ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute-Based Access Control")," (contr\xf4le d'acc\xe8s bas\xe9 sur l'attribut), ce qui signifie que vous pouvez utiliser les attributs (propri\xe9t\xe9s) du sujet, objet ou de l'action plut\xf4t qu'eux-m\xeame (la cha\xeene de caract\xe8re) pour contr\xf4ler l'acc\xe8s. Vous avez peut-\xeatre d\xe9j\xe0 entendu parler d'un langage de contr\xf4le d'acc\xe8s ABAC compliqu\xe9 nomm\xe9 XACML. Compar\xe9 \xe0 XACML, l'ABAC de Casbin est tr\xe8s simple : en ABAC, vous pouvez utiliser des structs (ou des instances de classe bas\xe9es sur le langage de programmation) au lieu de cha\xeene de caract\xe8res pour les \xe9l\xe9ments du mod\xe8le."),(0,i.kt)("p",null,"Utilisez l'exemple officiel ABAC par exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,i.kt)("p",null,"Nous utilisons ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj.Owner")," au lieu de ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj")," dans le matcher. La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj")," pass\xe9e dans la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforce()")," sera une structure ou une instance de classe au lieu de cha\xeene. Casbin utilisera la r\xe9flexion pour r\xe9cup\xe9rer la variable membre ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," dans cette struct ou classe pour vous."),(0,i.kt)("p",null,"Voici une d\xe9finition pour la classe ou la structure ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,i.kt)("h2",{id:"comment-utiliser-abac"},"Comment utiliser ABAC?"),(0,i.kt)("p",null,"Simplement parler, pour utiliser ABAC, vous devez faire deux choses:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sp\xe9cifiez les attributs dans le mod\xe8le de correspondance."),(0,i.kt)("li",{parentName:"ol"},"Passe dans l'instance struct ou class pour l'\xe9l\xe9ment comme argument dans la fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"Enforce()")," de Casbin.")),(0,i.kt)("p",null,":::avertissement"),(0,i.kt)("p",null,"Actuellement, seulement demander des \xe9l\xe9ments comme ",(0,i.kt)("inlineCode",{parentName:"p"},"r.sub"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"r.act")," et ainsi de suite sur le support ABAC. Vous ne pouvez pas l'utiliser sur des \xe9l\xe9ments de politique comme ",(0,i.kt)("inlineCode",{parentName:"p"},"p. ub"),", car il n'y a aucun moyen de d\xe9finir une structure ou une classe dans la politique de Casbin."),(0,i.kt)("p",null,":::"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous pouvez utiliser plusieurs attributs ABAC dans un matcher, par exemple : ",(0,i.kt)("inlineCode",{parentName:"p"},"m = r.sub.Domain == r.obj.Domain"),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Si vous avez besoin d'utiliser des virgules dans la charte, qui entre en conflit avec le s\xe9parateur de csv et nous devons l'\xe9chappe. Casbin analyse le fichier de r\xe9gulation \xe0 travers la biblioth\xe8que ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/csv"},"csv"),", vous pouvez entourer l'instruction avec des guillemets. Par exemple, ",(0,i.kt)("inlineCode",{parentName:"p"},'"keyMatch("bob", r.sub.Role)"')," ne sera pas divis\xe9."))),(0,i.kt)("h2",{id:"mise-\xe0-l\xe9chelle-du-mod\xe8le-pour-les-r\xe8gles-complexes-et-un-grand-nombre-de-r\xe8gles-abac"},"Mise \xe0 l'\xe9chelle du mod\xe8le pour les r\xe8gles complexes et un grand nombre de r\xe8gles ABAC."),(0,i.kt)("p",null,"L'instance ci-dessus de l'impl\xe9mentation d'ABAC est tr\xe8s simple, mais souvent le syst\xe8me d'autorisation a besoin d'un tr\xe8s grand nombre de r\xe8gles ABAC. Pour r\xe9pondre \xe0 cette n\xe9cessit\xe9, l'impl\xe9mentation ci-dessus augmentera la verbosit\xe9 du mod\xe8le dans une large mesure. Il est donc judicieux d\u2019ajouter les r\xe8gles dans la politique plut\xf4t que dans le mod\xe8le. Ceci est fait en introduisant une construction fonctionnelle ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()"),". Voici l'exemple de gestion de tels mod\xe8les ABAC."),(0,i.kt)("p",null,"Ceci est la d\xe9finition du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"CONF")," utilis\xe9 pour d\xe9finir le mod\xe8le ABAC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"Ici, ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub_rule")," est de type struct ou class(type d\xe9fini par l'utilisateur) qui se compose d'attributs n\xe9cessaires \xe0 utiliser dans la politique."),(0,i.kt)("p",null,"C'est la politique qui est utilis\xe9e contre le mod\xe8le de ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforcement"),". Maintenant, vous pouvez utiliser l'instance d'objet qui est pass\xe9e \xe0 la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," comme param\xe8tre pour d\xe9finir certaines contraintes ABAC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))}m.isMDXComponent=!0}}]);