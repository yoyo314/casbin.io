"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9058],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),l=n(6010),i=n(2389),o=n(7392),c=n(7094),u=n(2466),p="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,b=e.values,k=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,c.U)(),_=v.tabGroupChoices,C=v.setTabGroupChoices,w=(0,r.useState)(y),O=w[0],x=w[1],L=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=_[k];null!=E&&E!==O&&g.some((function(e){return e.value===E}))&&x(E)}var T=function(e){var t=e.currentTarget,n=L.indexOf(t),a=g[n].value;a!==O&&(j(t),x(a),null!=k&&C(k,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=L.indexOf(e.currentTarget)+1;n=null!=(a=L[r])?a:L[0];break;case"ArrowLeft":var l,i=L.indexOf(e.currentTarget)-1;n=null!=(l=L[i])?l:L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return L.push(e)},onKeyDown:P,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=(n(5488),n(5162),["components"]),o={id:"function",title:"\u95a2\u6570"},c=void 0,u={unversionedId:"function",id:"function",title:"\u95a2\u6570",description:"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/ja/docs/function",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Function.mdx",tags:[],version:"current",frontMatter:{id:"function",title:"\u95a2\u6570"},sidebar:"docs",previous:{title:"\u30a8\u30d5\u30a7\u30af\u30c8",permalink:"/ja/docs/effector"},next:{title:"RBAC",permalink:"/ja/docs/rbac"}},p={},s=[{value:"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570",id:"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570",level:2},{value:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5",id:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570"},"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570"),(0,l.kt)("p",null,"\u30de\u30c3\u30c1\u30e3\u30fc\u5185\u306e\u95a2\u6570\u3092\u6307\u5b9a\u3057\u3066\u3001\u3088\u308a\u30d1\u30ef\u30d5\u30eb\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u7d44\u307f\u8fbc\u307f\u95a2\u6570\u3092\u4f7f\u7528\u3057\u305f\u308a\u3001\u72ec\u81ea\u306e\u95a2\u6570\u3092\u6307\u5b9a\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002 \u3059\u3079\u3066\u306e\u7d44\u307f\u8fbc\u307f\u95a2\u6570\u306f\u305d\u306e\u3088\u3046\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u3068\u308a\u307e\u3059( ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet2")," \u3092\u9664\u304f):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"bool function_name(string arg1, string arg2)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"arg1")," \u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"arg2")," \u3068\u4e00\u81f4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyGet")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet2")," will return the string which matching the wildcard, and return ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," if nothing was matched."),(0,l.kt)("p",null,"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u7d44\u307f\u8fbc\u307f\u95a2\u6570\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u95a2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"arg1"),(0,l.kt)("th",{parentName:"tr",align:null},"arg2"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a URL \u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," \u30d1\u30bf\u30fc\u30f3\u3002 ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a URL \u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," \u30d1\u30bf\u30fc\u30f3\u3002 ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a URL \u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},":")," ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource \u306e\u3088\u3046\u306a\u30d1\u30bf\u30fc\u30f3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a URL \u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},":")," ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource \u306e\u3088\u3046\u306a\u30d1\u30bf\u30fc\u30f3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a URL \u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}\u306e\u3088\u3046\u306a\u30d1\u30bf\u30fc\u30f3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123 \u306eURL\u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},"URL \u30d1\u30b9\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"{}")," \u30d1\u30bf\u30fc\u30f3\u306e\u3088\u3046\u306a ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u898f\u8868\u73fe\u4e00\u81f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u3059\u3079\u3066\u306e\u6587\u5b57\u5217"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u898f\u8868\u73fe\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u3059"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"192.168.2.123")," \u306e\u3088\u3046\u306aIP \u30a2\u30c9\u30ec\u30b9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24 \u306e\u3088\u3046\u306aIP\u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306fCIDR")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1 \u306e\u3088\u3046\u306a\u30d1\u30b9")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")," \u306e\u3088\u3046\u306a\u30b0\u30ed\u30fc\u30d6\u30d1\u30bf\u30fc\u30f3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u95a2\u6570\u306e\u8a73\u7d30\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,l.kt)("h2",{id:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5"},"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5"),(0,l.kt)("p",null,"\u307e\u305a\u3001\u95a2\u6570\u3092\u6e96\u5099\u3057\u307e\u3059\u3002 \u3044\u304f\u3064\u304b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u308a\u3001bool\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,l.kt)("p",null,"\u6b21\u306b\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"interface{}")," \u30bf\u30a4\u30d7\u3067\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,l.kt)("p",null,"\u6700\u5f8c\u306b\u3001Casbin enforcer\u306b\u3053\u306e\u95a2\u6570\u3092\u767b\u9332\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,l.kt)("p",null,"\u3053\u308c\u3067\u3001\u30e2\u30c7\u30ebCONF\u306e\u95a2\u6570\u3092\u6b21\u306e\u3088\u3046\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}d.isMDXComponent=!0}}]);