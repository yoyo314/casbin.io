"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7638],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(b,i(i({ref:e},s),{},{components:a})):n.createElement(b,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(t){var e=t.children,a=t.hidden,i=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},e)}},5488:function(t,e,a){a.d(e,{Z:function(){return d}});var n=a(3117),r=a(7294),l=a(6010),i=a(2389),o=a(7392),c=a(7094),u=a(2466),s="tabList__CuJ",p="tabItem_LNqP";function m(t){var e,a,i=t.lazy,m=t.block,d=t.defaultValue,b=t.values,k=t.groupId,h=t.className,f=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:f.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,o.l)(g,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(e=null!=d?d:null==(a=f.find((function(t){return t.props.default})))?void 0:a.props.value)?e:f[0].props.value;if(null!==N&&!g.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,c.U)(),_=v.tabGroupChoices,C=v.setTabGroupChoices,w=(0,r.useState)(N),x=w[0],O=w[1],L=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=_[k];null!=T&&T!==x&&g.some((function(t){return t.value===T}))&&O(T)}var j=function(t){var e=t.currentTarget,a=L.indexOf(e),n=g[a].value;n!==x&&(E(e),O(n),null!=k&&C(k,String(n)))},P=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=L.indexOf(t.currentTarget)+1;a=null!=(n=L[r])?n:L[0];break;case"ArrowLeft":var l,i=L.indexOf(t.currentTarget)-1;a=null!=(l=L[i])?l:L[L.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},g.map((function(t){var e=t.value,a=t.label,i=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return L.push(t)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===e})}),null!=a?a:e)}))),i?(0,r.cloneElement)(f.filter((function(t){return t.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function d(t){var e=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(e)},t))}},780:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=(a(5488),a(5162),["components"]),o={id:"function",title:"\ud568\uc218"},c=void 0,u={unversionedId:"function",id:"function",title:"\ud568\uc218",description:"Functions in matchers",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/ko/docs/function",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Function.mdx",tags:[],version:"current",frontMatter:{id:"function",title:"\ud568\uc218"},sidebar:"docs",previous:{title:"Effector",permalink:"/ko/docs/effector"},next:{title:"RBAC",permalink:"/ko/docs/rbac"}},s={},p=[{value:"Functions in matchers",id:"functions-in-matchers",level:2},{value:"How to add a customized function",id:"how-to-add-a-customized-function",level:2}],m={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions-in-matchers"},"Functions in matchers"),(0,l.kt)("p",null,"You can even specify functions in a matcher to make it more powerful. You can use the built-in functions or specify your own function. All built-in functions take such a format(except ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet2"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"bool function_name(string arg1, string arg2)\n")),(0,l.kt)("p",null,"It returns whether ",(0,l.kt)("inlineCode",{parentName:"p"},"arg1")," matches ",(0,l.kt)("inlineCode",{parentName:"p"},"arg2"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyGet")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"keyGet2")," will return the string which matching the wildcard, and return ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," if nothing was matched."),(0,l.kt)("p",null,"The supported built-in functions are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\ud568\uc218"),(0,l.kt)("th",{parentName:"tr",align:null},"arg1"),(0,l.kt)("th",{parentName:"tr",align:null},"arg2"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc0ac\ub840"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,l.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,l.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,l.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,l.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,l.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regexMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"any string"),(0,l.kt)("td",{parentName:"tr",align:null},"a regular expression pattern"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"an IP address like ",(0,l.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,l.kt)("td",{parentName:"tr",align:null},"an IP address or a CIDR like ",(0,l.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,l.kt)("td",{parentName:"tr",align:null},"a path-like path like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,l.kt)("td",{parentName:"tr",align:null},"a glob pattern like ",(0,l.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,l.kt)("p",null,"See details for above functions at: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,l.kt)("h2",{id:"how-to-add-a-customized-function"},"How to add a customized function"),(0,l.kt)("p",null,"First prepare your function. It takes several parameters and return a bool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,l.kt)("p",null,"Then wrap it with ",(0,l.kt)("inlineCode",{parentName:"p"},"interface{}")," types:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,l.kt)("p",null,"At last, register the function to the Casbin enforcer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,l.kt)("p",null,"Now, you can use the function in your model CONF like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}d.isMDXComponent=!0}}]);