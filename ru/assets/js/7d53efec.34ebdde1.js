"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7575],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,b=e.values,f=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),C=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),g=y.tabGroupChoices,A=y.setTabGroupChoices,R=(0,r.useState)(N),w=R[0],B=R[1],O=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=g[f];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&B(E)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==w&&(x(t),B(a),null!=f&&A(f,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;n=null!=(i=O[l])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:T,onClick:T},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=(n(5488),n(5162),["components"]),o={id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},s=void 0,u={unversionedId:"rbac-96",id:"rbac-96",title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC and RBAC96",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/ru/docs/rbac-96",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},sidebar:"docs",previous:{title:"RBAC with Domains",permalink:"/ru/docs/rbac-with-domains"},next:{title:"ABAC",permalink:"/ru/docs/abac"}},c={},p=[{value:"Casbin RBAC and RBAC96",id:"casbin-rbac-and-rbac96",level:2},{value:"Difference between Casbin RBAC and RBAC96",id:"difference-between-casbin-rbac-and-rbac96",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"casbin-rbac-and-rbac96"},"Casbin RBAC and RBAC96"),(0,i.kt)("p",null,"In this document, we'll compare Casbin RBAC with ",(0,i.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"."),(0,i.kt)("p",null,"Casbin RBAC supports almost all the features of RBAC96, and added new features above that."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"RBAC version"),(0,i.kt)("th",{parentName:"tr",align:null},"Support Level"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,i.kt)("td",{parentName:"tr",align:null},"fully supported"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0 is the basic version of RBAC96. It clarified the relationship between Users, Roles and Permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,i.kt)("td",{parentName:"tr",align:null},"fully supported"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1 added role hierarchies on RBAC0, meaning if ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," has ",(0,i.kt)("inlineCode",{parentName:"td"},"role1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"role1")," has ",(0,i.kt)("inlineCode",{parentName:"td"},"role2"),", then ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," will also have ",(0,i.kt)("inlineCode",{parentName:"td"},"role2")," and inherit its permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,i.kt)("td",{parentName:"tr",align:null},"mutually exclusive handling is supported (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),"), but quantitative limits are not"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2 added constrains on RBAC0. So RBAC2 can handle mutually exclusions found in policies.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,i.kt)("td",{parentName:"tr",align:null},"mutually exclusive handling is supported (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),"), but quantitative limits are not"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3 is a combination of RBAC1 and RBAC2. RBAC3 supports role hierarchies and constrains in RBAC1 and RBAC2.")))),(0,i.kt)("h2",{id:"difference-between-casbin-rbac-and-rbac96"},"Difference between Casbin RBAC and RBAC96"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Casbin, the distinction between User and Role is not clear"),(0,i.kt)("p",{parentName:"li"},"In Casbin, both the User and the Role are treated as strings. If you wrote a policy file like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,i.kt)("p",{parentName:"li"},"and call method ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," like this (",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is an instance of Casbin Enforcer):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,i.kt)("p",{parentName:"li"},"then you will get the return value below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice]\n")),(0,i.kt)("p",{parentName:"li"},"Because in Casbin, Subjects included Users and Roles."),(0,i.kt)("p",{parentName:"li"},"However, if you call method ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllRoles()")," like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,i.kt)("p",{parentName:"li"},"then you will get the return value below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,i.kt)("p",{parentName:"li"},"And now you know there is a distinction between Users and Roles in Casbin, but is not as sharp as in RBAC96. Of course you can add some prefix to your policies like ",(0,i.kt)("inlineCode",{parentName:"p"},"user::alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"role::admin")," to clarify their relationships.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC provides more permissions than RBAC96"),(0,i.kt)("p",{parentName:"li"},"Only 7 permissions are defined in RBAC96: read, write, append, execute, credit, debit, inquiry."),(0,i.kt)("p",{parentName:"li"},"However, in Casbin, we treat permissions as strings. This way, you can create some permissions suit you better.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC supports domains"),(0,i.kt)("p",{parentName:"li"},"In Casbin, you can do authorizations by domains. This feature made your Access Control Model more flexible."))))}m.isMDXComponent=!0}}]);