"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6058],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),l=n(6010),i=n(2389),o=n(7392),u=n(7094),c=n(2466),p="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,b=e.values,f=e.groupId,C=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),A=h.tabGroupChoices,y=h.setTabGroupChoices,R=(0,r.useState)(g),B=R[0],w=R[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=A[f];null!=j&&j!==B&&v.some((function(e){return e.value===j}))&&w(j)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==B&&(E(t),w(a),null!=f&&y(f,String(a)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;n=null!=(l=O[i])?l:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},C)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":B===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},5505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=(n(5488),n(5162),["components"]),o={id:"rbac-96",title:"Casbin RBAC vs RBAC96"},u=void 0,c={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs RBAC96",description:"Casbin RBAC \u3068 RBAC96",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/ja/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs RBAC96"},sidebar:"docs",previous:{title:"\u30c9\u30e1\u30a4\u30f3\u4ed8\u304dRBAC",permalink:"/ja/docs/rbac-with-domains"},next:{title:"ABAC",permalink:"/ja/docs/abac"}},p={},s=[{value:"Casbin RBAC \u3068 RBAC96",id:"casbin-rbac-\u3068-rbac96",level:2},{value:"Casbin RBAC \u3068 RBAC96 \u306e\u9055\u3044",id:"casbin-rbac-\u3068-rbac96-\u306e\u9055\u3044",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"casbin-rbac-\u3068-rbac96"},"Casbin RBAC \u3068 RBAC96"),(0,l.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001Casbin RBAC \u3068 ",(0,l.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96")," \u3092\u6bd4\u8f03\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"Casbin RBAC \u306f\u3001RBAC96 \u306e\u307b\u307c\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u305d\u306e\u4e0a\u306b\u65b0\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"RBAC \u30d0\u30fc\u30b8\u30e7\u30f3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30b5\u30dd\u30fc\u30c8\u30ec\u30d9\u30eb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC0 \u306f RBAC96 \u306e\u57fa\u672c\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u3059\u3002 \u30e6\u30fc\u30b6\u3001\u30ed\u30fc\u30eb\u3001\u6a29\u9650\u306e\u95a2\u4fc2\u3092\u660e\u78ba\u306b\u3057\u307e\u3057\u305f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC1 added role hierarchies on RBAC0, meaning if ",(0,l.kt)("inlineCode",{parentName:"td"},"alice")," has ",(0,l.kt)("inlineCode",{parentName:"td"},"role1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"role1")," has ",(0,l.kt)("inlineCode",{parentName:"td"},"role2"),", then ",(0,l.kt)("inlineCode",{parentName:"td"},"alice")," will also have ",(0,l.kt)("inlineCode",{parentName:"td"},"role2")," and inherit its permissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u4e92\u6392\u4ed6\u7684\u306a\u51e6\u7406\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059 (",(0,l.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u3053\u306e\u3088\u3046\u306a"),") \u304c\u3001\u91cf\u7684\u306a\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC2 \u306f RBAC0 \u306b\u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002 \u3057\u305f\u304c\u3063\u3066\u3001RBAC2\u306f\u30dd\u30ea\u30b7\u30fc\u306b\u3042\u308b\u76f8\u4e92\u6392\u9664\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u4e92\u6392\u4ed6\u7684\u306a\u51e6\u7406\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059 (",(0,l.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"\u3053\u306e\u3088\u3046\u306a"),") \u304c\u3001\u91cf\u7684\u306a\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093"),(0,l.kt)("td",{parentName:"tr",align:null},"RBAC3 \u306f RBAC1 \u3068 RBAC2 \u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u3059\u3002 RBAC3 \u306f RBAC1 \u3068 RBAC2 \u306e\u30ed\u30fc\u30eb\u968e\u5c64\u3068\u5236\u7d04\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"casbin-rbac-\u3068-rbac96-\u306e\u9055\u3044"},"Casbin RBAC \u3068 RBAC96 \u306e\u9055\u3044"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Casbin\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3068\u30ed\u30fc\u30eb\u306e\u533a\u5225\u304c\u660e\u78ba\u3067\u306f\u3042\u308a\u307e\u305b\u3093"),(0,l.kt)("p",{parentName:"li"},"Casbin\u3067\u306f\u3001User\u3068Role\u306e\u4e21\u65b9\u304c\u6587\u5b57\u5217\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30dd\u30ea\u30b7\u30fc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,l.kt)("p",{parentName:"li"},"\u305d\u3057\u3066\u3001\u30e1\u30bd\u30c3\u30c9 ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," \u3092\u3053\u306e\u3088\u3046\u306b\u547c\u3073\u51fa\u3057\u307e\u3059(",(0,l.kt)("inlineCode",{parentName:"p"},"e")," \u306f Casbin Enforcer\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3059):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,l.kt)("p",{parentName:"li"},"\u623b\u308a\u5024\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"[adminalice]\n")),(0,l.kt)("p",{parentName:"li"},"\u30ab\u30b9\u30d3\u30f3\u3067\u306f\u3001\u79d1\u76ee\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3068\u30ed\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u3002"),(0,l.kt)("p",{parentName:"li"},"\u3057\u304b\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30e1\u30bd\u30c3\u30c9 ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAllRoles()")," \u3092\u547c\u3073\u51fa\u3057\u305f\u5834\u5408:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,l.kt)("p",{parentName:"li"},"\u623b\u308a\u5024\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,l.kt)("p",{parentName:"li"},"\u305d\u3057\u3066\u4eca\u3001\u3042\u306a\u305f\u306fCasbin\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u5f79\u5272\u306e\u9593\u306b\u9055\u3044\u304c\u3042\u308b\u3053\u3068\u3092\u77e5\u3063\u3066\u3044\u307e\u3059\u304c\u3001RBAC96\u307b\u3069\u30b7\u30e3\u30fc\u30d7\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3082\u3061\u308d\u3093\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"user::alice"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"role::admin")," \u306a\u3069\u306e\u30dd\u30ea\u30b7\u30fc\u306b\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3057\u3066\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30b7\u30c3\u30d7\u3092\u660e\u78ba\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Casbin RBAC \u306f\u3001RBAC96 \u3088\u308a\u591a\u304f\u306e\u6a29\u9650\u3092\u63d0\u4f9b\u3057\u307e\u3059"),(0,l.kt)("p",{parentName:"li"},"RBAC96\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u6a29\u9650\u306f7\u3064\u3060\u3051\u3067\u3059: read, write, append, execute, credit, debit, quiry"),(0,l.kt)("p",{parentName:"li"},"\u3057\u304b\u3057\u3001Casbin\u3067\u306f\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u6587\u5b57\u5217\u3068\u3057\u3066\u6271\u3044\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u3044\u304f\u3064\u304b\u306e\u6a29\u9650\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Casbin RBAC \u304c\u30c9\u30e1\u30a4\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059"),(0,l.kt)("p",{parentName:"li"},"Casbin\u3067\u306f\u3001\u30c9\u30e1\u30a4\u30f3\u3054\u3068\u306b\u8a8d\u8a3c\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb\u304c\u3088\u308a\u67d4\u8edf\u306b\u306a\u308a\u307e\u3057\u305f\u3002"))))}d.isMDXComponent=!0}}]);