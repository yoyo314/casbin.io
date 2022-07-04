"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),i=n(6010),l=n(2389),o=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n,l=e.lazy,f=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),E=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,a.useState)(g),w=C[0],O=C[1],T=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var q=E[v];null!=q&&q!==w&&h.some((function(e){return e.value===q}))&&O(q)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==w&&(I(t),O(r),null!=v&&x(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var i,l=T.indexOf(e.currentTarget)-1;n=null!=(i=T[l])?i:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":f},b)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},3400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=n(5488),o=n(5162),u=["components"],s={id:"effector",title:"Effet"},c=void 0,p={unversionedId:"effector",id:"effector",title:"Effet",description:"L'effet est le r\xe9sultat d'une r\xe8gle politique. Et l' Effet est l'interface pour les effets Casbin.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/fr/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"Effet"},sidebar:"docs",previous:{title:"Syntaxe pour les mod\xe8les",permalink:"/fr/docs/syntax-for-models"},next:{title:"Fonction",permalink:"/fr/docs/function"}},f={},d=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"L'effet est le r\xe9sultat d'une r\xe8gle politique. Et l' ",(0,i.kt)("inlineCode",{parentName:"p"},"Effet")," est l'interface pour les effets Casbin."),(0,i.kt)("h3",{id:"mergeeffects"},(0,i.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,i.kt)("p",null,"FusionEffets fusionne tous les r\xe9sultats correspondants recueillis par le d\xe9tenteur en une seule d\xe9cision."),(0,i.kt)("p",null,"Par exemple :"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"Dans cet exemple :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L'effet")," est la d\xe9cision finale en cours de fusion par cette fonction(Initialis\xe9e en tant que ",(0,i.kt)("inlineCode",{parentName:"li"},"ind\xe9termin\xe9e"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"explainIndex")," est l'index de ",(0,i.kt)("inlineCode",{parentName:"li"},"eft")," qui est ",(0,i.kt)("inlineCode",{parentName:"li"},"Autoriser")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Refuser"),".(Initialis\xe9 comme ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"err")," est utilis\xe9 pour v\xe9rifier si l'effet est pris en charge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," est la politique d'effets stock\xe9e sous la forme d'une cha\xeene ``"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"effects")," is the array of the Effect which can be ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Indeterminate")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Deny")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"correspond \xe0")," la table montrant que si le r\xe9sultat correspond \xe0 la politique."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyIndex")," est l'indice de politique dans le mod\u010dle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policyLength")," est la longueur de la politique.")),(0,i.kt)("p",null,"Le code ci-dessus illustre comment passer les param\xe8tres \xe0 la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," et la fonction traitera les effets et correspondances bas\xe9s sur ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")),(0,i.kt)("p",null,"Pour d\xe9ployer un Effet, nous pouvons faire ceci :"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,i.kt)("p",null,"L'id\xe9e de base des ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeEffects")," indique que si l' ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," peut correspondre aux r\xe9sultats ce qui signifie que le ",(0,i.kt)("inlineCode",{parentName:"p"},"p_eft")," est ",(0,i.kt)("inlineCode",{parentName:"p"},"autoriser"),", alors nous pouvons fusionner tous les effets enfin. Et s'il n'y a pas de r\xe8gles de refus correspondantes, alors nous le permettons."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Si ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," ne peut pas correspondre \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || nier"')," et aussi ",(0,i.kt)("inlineCode",{parentName:"p"},"l'index de police")," est plus court que ",(0,i.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", il va ",(0,i.kt)("strong",{parentName:"p"},"court-circuit")," quelques effets au milieu."))))}v.isMDXComponent=!0}}]);