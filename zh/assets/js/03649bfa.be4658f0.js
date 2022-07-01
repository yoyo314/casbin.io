"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2488],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||l;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(6010),i=n(2389),o=n(7392),c=n(7094),u=n(2466),f="tabList__CuJ",p="tabItem_LNqP";function s(e){var t,n,i=e.lazy,s=e.block,d=e.defaultValue,m=e.values,h=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),C=N.tabGroupChoices,E=N.setTabGroupChoices,w=(0,a.useState)(g),x=w[0],O=w[1],T=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=C[h];null!=j&&j!==x&&k.some((function(e){return e.value===j}))&&O(j)}var Z=function(e){var t=e.currentTarget,n=T.indexOf(t),r=k[n].value;r!==x&&(I(t),O(r),null!=h&&E(h,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",f)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},5170:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=n(5488),o=n(5162),c=["components"],u={id:"effector",title:"Effector"},f=void 0,p={unversionedId:"effector",id:"effector",title:"Effector",description:"Effect is the result of a policy rule. And the Effector is the interface for Casbin effectors.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Effector.mdx",sourceDirName:".",slug:"/effector",permalink:"/zh/docs/effector",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Effector.mdx",tags:[],version:"current",frontMatter:{id:"effector",title:"Effector"},sidebar:"docs",previous:{title:"Model \u7684\u8bed\u6cd5",permalink:"/zh/docs/syntax-for-models"},next:{title:"\u51fd\u6570",permalink:"/zh/docs/function"}},s={},d=[{value:"<code>MergeEffects()</code>",id:"mergeeffects",level:3}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Effect is the result of a policy rule. And the ",(0,l.kt)("inlineCode",{parentName:"p"},"Effector")," is the interface for Casbin effectors."),(0,l.kt)("h3",{id:"mergeeffects"},(0,l.kt)("inlineCode",{parentName:"h3"},"MergeEffects()")),(0,l.kt)("p",null,"MergeEffects\u5c06 enforcer \u6536\u96c6\u7684\u6240\u6709\u5339\u914d\u7ed3\u679c\u5408\u5e76\u4e3a\u4e00\u9879\u51b3\u5b9a\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"Effect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,l.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Effect")," is the final decision being merged by this function(Initialized as ",(0,l.kt)("inlineCode",{parentName:"li"},"Indeterminate"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"explainIndex")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"eft")," \u7684\u7d22\u5f15\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"eft")," \u7684\u503c\u53ef\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Allow")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"Deny"),".(\u521d\u59cb\u503c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"err")," \u7528\u4e8e\u68c0\u67e5",(0,l.kt)("inlineCode",{parentName:"li"},"effect"),"\u662f\u5426\u53d7\u5230\u652f\u6301\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u662f\u88ab\u5b58\u50a8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"policy_effects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"effects")," \u662f Effect \u7684\u6570\u7ec4\uff0c\u5176\u4e2d\u503c\u53ef\u4ee5\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"Allow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Indeterminate")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"Deny")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"matchers")," \u662f\u663e\u793a\u7ed3\u679c\u662f\u5426\u7b26\u5408\u7b56\u7565\u7684\u6570\u7ec4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"policyIndex")," \u662f\u6a21\u578b\u4e2d\u7684\u7b56\u7565\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"policyLength")," \u662f\u7b56\u7565\u7684\u957f\u5ea6\u3002")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u8bf4\u660e\u4e86\u6211\u4eec\u5982\u4f55\u5c06\u53c2\u6570\u4f20\u9012\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeEffects")," \u51fd\u6570\uff0c\u5e76\u4e14\u8be5\u51fd\u6570\u5c06\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," \u5904\u7406\u6548\u679c\u548c\u5339\u914d\u3002"),(0,l.kt)("p",null,"\u8981\u90e8\u7f72\u4e00\u4e2aEffector\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var e Effector\nEffect, explainIndex, err = e.MergeEffects(expr, effects, matches, policyIndex, policyLength)\n")))),(0,l.kt)("p",null,"The basic idea of the ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeEffects")," indicates that if the ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," can match the results which means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"p_eft")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"allow"),", then we can merge all effects at last. And if there are no deny rules are matched, then we allow."),(0,l.kt)("p",null,":::note If the ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," can not match ",(0,l.kt)("inlineCode",{parentName:"p"},'"priority(p_eft) || deny"')," and also the ",(0,l.kt)("inlineCode",{parentName:"p"},"policyIndex")," is shorter than ",(0,l.kt)("inlineCode",{parentName:"p"},"policyLength-1"),", it will ",(0,l.kt)("strong",{parentName:"p"},"short-circuit")," some effects in the middle. :::"))}h.isMDXComponent=!0}}]);