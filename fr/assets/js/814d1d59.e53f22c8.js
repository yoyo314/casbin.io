"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2460],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),o=n(6010),l=n(2389),i=n(7392),c=n(7094),u=n(2466),s="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,d=e.defaultValue,b=e.values,f=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,c.U)(),_=v.tabGroupChoices,C=v.setTabGroupChoices,x=(0,r.useState)(y),O=x[0],w=x[1],L=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=_[f];null!=j&&j!==O&&g.some((function(e){return e.value===j}))&&w(j)}var T=function(e){var t=e.currentTarget,n=L.indexOf(t),a=g[n].value;a!==O&&(E(t),w(a),null!=f&&C(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=L.indexOf(e.currentTarget)+1;n=null!=(a=L[r])?a:L[0];break;case"ArrowLeft":var o,l=L.indexOf(e.currentTarget)-1;n=null!=(o=L[l])?o:L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return L.push(e)},onKeyDown:P,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=(n(5488),n(5162),["components"]),i={id:"function",title:"Fonction"},c=void 0,u={unversionedId:"function",id:"function",title:"Fonction",description:"Fonctions dans les matchers",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/fr/docs/function",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Function.mdx",tags:[],version:"current",frontMatter:{id:"function",title:"Fonction"},sidebar:"docs",previous:{title:"Effet",permalink:"/fr/docs/effector"},next:{title:"RBAC",permalink:"/fr/docs/rbac"}},s={},m=[{value:"Fonctions dans les matchers",id:"fonctions-dans-les-matchers",level:2},{value:"Comment ajouter une fonction personnalis\xe9e",id:"comment-ajouter-une-fonction-personnalis\xe9e",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fonctions-dans-les-matchers"},"Fonctions dans les matchers"),(0,o.kt)("p",null,"Vous pouvez m\xeame sp\xe9cifier des fonctions dans un matcher pour le rendre plus puissant. Vous pouvez utiliser les fonctions int\xe9gr\xe9es ou sp\xe9cifier votre propre fonction. Toutes les fonctions int\xe9gr\xe9es prennent un tel format (sauf ",(0,o.kt)("inlineCode",{parentName:"p"},"keyGet")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"keyGet2")," ) :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C"},"bool function_name(string arg1, string arg2)\n")),(0,o.kt)("p",null,"Il retourne si ",(0,o.kt)("inlineCode",{parentName:"p"},"arg1")," correspond \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"arg2"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"keyGet")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"keyGet2")," retourneront la cha\xeene qui correspond \xe0 la carte joker et retourneront ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," si rien ne correspondait."),(0,o.kt)("p",null,"Les fonctions int\xe9gr\xe9es support\xe9es sont :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fonction"),(0,o.kt)("th",{parentName:"tr",align:null},"arg1"),(0,o.kt)("th",{parentName:"tr",align:null},"arg2"),(0,o.kt)("th",{parentName:"tr",align:null},"Exemple"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,o.kt)("inlineCode",{parentName:"td"},"*")," comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,o.kt)("inlineCode",{parentName:"td"},"*")," comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch2"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,o.kt)("inlineCode",{parentName:"td"},":")," comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin d'URL ou ",(0,o.kt)("inlineCode",{parentName:"td"},":")," mod\xe8le comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch3"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,o.kt)("inlineCode",{parentName:"td"},"{}")," comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format@@0 keyMatch4"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin URL ou un motif ",(0,o.kt)("inlineCode",{parentName:"td"},"{}")," comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Correspondance regexe"),(0,o.kt)("td",{parentName:"tr",align:null},"toute cha\xeene de caract\xe8res"),(0,o.kt)("td",{parentName:"tr",align:null},"un motif d'expression r\xe9guli\xe8re"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,o.kt)("td",{parentName:"tr",align:null},"une adresse IP comme ",(0,o.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,o.kt)("td",{parentName:"tr",align:null},"une adresse IP ou un CIDR comme ",(0,o.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,o.kt)("td",{parentName:"tr",align:null},"un chemin semblable \xe0 un chemin comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,o.kt)("td",{parentName:"tr",align:null},"un mod\xe8le de glob comme ",(0,o.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,o.kt)("p",null,"Voir les d\xe9tails pour les fonctions ci-dessus \xe0 : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,o.kt)("h2",{id:"comment-ajouter-une-fonction-personnalis\xe9e"},"Comment ajouter une fonction personnalis\xe9e"),(0,o.kt)("p",null,"Pr\xe9parez d'abord votre fonction. Il prend plusieurs param\xe8tres et retourne un bool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,o.kt)("p",null,"Ensuite enveloppez-le avec les types ",(0,o.kt)("inlineCode",{parentName:"p"},"interface{}"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,o.kt)("p",null,"Enfin enregistrez la fonction aupr\xe8s de l'agent de contr\xf4le de Casbin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,o.kt)("p",null,"Maintenant, vous pouvez utiliser la fonction dans votre mod\xe8le CONF comme ceci :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}d.isMDXComponent=!0}}]);