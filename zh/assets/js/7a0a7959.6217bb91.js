"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1405],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),o=n(6010),i=n(2389),l=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,f=e.defaultValue,m=e.values,b=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),E=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,a.useState)(g),O=C[0],T=C[1],x=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=E[b];null!=I&&I!==O&&k.some((function(e){return e.value===I}))&&T(I)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==O&&(j(t),T(r),null!=b&&w(b,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;n=null!=(o=x[i])?o:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function f(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(5488),l=n(5162),u=["components"],s={id:"enforcers",title:"\u6267\u884c\u5668"},c=void 0,d={unversionedId:"enforcers",id:"enforcers",title:"\u6267\u884c\u5668",description:"Enforcer is the main structure in Casbin. It acts as an interface for users to make operations on policy rules and models.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Enforcers.mdx",sourceDirName:".",slug:"/enforcers",permalink:"/zh/docs/enforcers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Enforcers.mdx",tags:[],version:"current",frontMatter:{id:"enforcers",title:"\u6267\u884c\u5668"},sidebar:"docs",previous:{title:"\u7b56\u7565\u5b50\u96c6\u52a0\u8f7d",permalink:"/zh/docs/policy-subset-loading"},next:{title:"\u9002\u914d\u5668",permalink:"/zh/docs/adapters"}},p={},f=[{value:"\u652f\u6301\u7684\u6267\u884c\u5668",id:"\u652f\u6301\u7684\u6267\u884c\u5668",level:2}],m={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Enforcer")," is the main structure in Casbin. It acts as an interface for users to make operations on policy rules and models."),(0,o.kt)("h2",{id:"\u652f\u6301\u7684\u6267\u884c\u5668"},"\u652f\u6301\u7684\u6267\u884c\u5668"),(0,o.kt)("p",null,"A complete list of Casbin enforcers is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and we will put it in this list:)"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Enforcer"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer.go"},"Enforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," is the basic structure for users to interact with Casbin policies and models. You can find more details of ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s API at ",(0,o.kt)("a",{parentName:"td",href:"/docs/management-api"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_cached.go"},"CachedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer")," is based on ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),". It supports to cache the evaluation result of a request in memory by a map and clear caches in a specified expire time. Moreover, it is guaranted to be thread-safe by a Read-Write lock. You can use ",(0,o.kt)("inlineCode",{parentName:"td"},"EnableCache")," to enable to cache evaluation results (default is enabled). ",(0,o.kt)("inlineCode",{parentName:"td"},"CachedEnforcer"),"'s other API is the same as ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer"),"'s.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_distributed.go"},"DistributedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DistributedEnforcer")," supports multiple instances in distributed clusters. It wraps ",(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforcer")," for dispatcher. You can find more details about dispather at ",(0,o.kt)("a",{parentName:"td",href:"/docs/dispatchers#distributedenforcer"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"SyncedEnforcer")),(0,o.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SyncedEnforer")," is based on ",(0,o.kt)("inlineCode",{parentName:"td"},"Enforcer")," and provides synchronized access. It is thread-safe.")))))))}b.isMDXComponent=!0}}]);