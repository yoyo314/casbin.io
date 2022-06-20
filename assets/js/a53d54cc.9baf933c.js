"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9254],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3117),r=a(7294),i=a(2389),l=a(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(9558),u=a(6010),d="tabItem_1uMI";function c(e){var t,a,n,i=e.lazy,l=e.block,c=e.defaultValue,p=e.values,m=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==C&&!k.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),N=v.tabGroupChoices,A=v.setTabGroupChoices,R=(0,r.useState)(C),g=R[0],B=R[1],y=[],w=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=N[m];null!=x&&x!==g&&k.some((function(e){return e.value===x}))&&B(x)}var E=function(e){var t=e.currentTarget,a=y.indexOf(t),n=k[a].value;n!==g&&(w(t),B(n),null!=m&&A(m,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=y.indexOf(e.currentTarget)+1;a=y[n]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.currentTarget)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},b)},k.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:E,onClick:E},null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},9539:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=(a(5064),a(8215),["components"]),o={id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},s=void 0,u={unversionedId:"rbac-96",id:"rbac-96",isDocsHomePage:!1,title:"Casbin RBAC vs. RBAC96",description:"Casbin RBAC and RBAC96",source:"@site/docs/CasbinRBACAndRBAC96.mdx",sourceDirName:".",slug:"/rbac-96",permalink:"/docs/rbac-96",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/CasbinRBACAndRBAC96.mdx",tags:[],version:"current",frontMatter:{id:"rbac-96",title:"Casbin RBAC vs. RBAC96"},sidebar:"docs",previous:{title:"RBAC with Domains",permalink:"/docs/rbac-with-domains"},next:{title:"ABAC",permalink:"/docs/abac"}},d=[{value:"Casbin RBAC and RBAC96",id:"casbin-rbac-and-rbac96",children:[],level:2},{value:"Difference between Casbin RBAC and RBAC96",id:"difference-between-casbin-rbac-and-rbac96",children:[],level:2}],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"casbin-rbac-and-rbac96"},"Casbin RBAC and RBAC96"),(0,i.kt)("p",null,"In this document, we'll compare Casbin RBAC with ",(0,i.kt)("a",{parentName:"p",href:"https://profsandhu.com/cs6393_s12/lecture-rbac96.pdf"},"RBAC96"),"."),(0,i.kt)("p",null,"Casbin RBAC supports almost all the features of RBAC96, and added new features above that."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"RBAC version"),(0,i.kt)("th",{parentName:"tr",align:null},"Support Level"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0"),(0,i.kt)("td",{parentName:"tr",align:null},"fully supported"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC0 is the basic version of RBAC96. It clarified the relationship between Users, Roles and Permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1"),(0,i.kt)("td",{parentName:"tr",align:null},"fully supported"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC1 added role hierarchies on RBAC0, meaning if ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," has ",(0,i.kt)("inlineCode",{parentName:"td"},"role1"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"role1")," has ",(0,i.kt)("inlineCode",{parentName:"td"},"role2"),", then ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," will also have ",(0,i.kt)("inlineCode",{parentName:"td"},"role2")," and inherit its permissions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2"),(0,i.kt)("td",{parentName:"tr",align:null},"mutually exclusive handling is supported (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),"), but quantitative limits are not"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC2 added constrains on RBAC0. So RBAC2 can handle mutually exclusions found in policies.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3"),(0,i.kt)("td",{parentName:"tr",align:null},"mutually exclusive handling is supported (",(0,i.kt)("a",{parentName:"td",href:"/docs/syntax-for-models#policy-effect"},"like this"),"), but quantitative limits are not"),(0,i.kt)("td",{parentName:"tr",align:null},"RBAC3 is a combination of RBAC1 and RBAC2. RBAC3 supports role hierarchies and constrains in RBAC1 and RBAC2.")))),(0,i.kt)("h2",{id:"difference-between-casbin-rbac-and-rbac96"},"Difference between Casbin RBAC and RBAC96"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Casbin, the distinction between User and Role is not clear"),(0,i.kt)("p",{parentName:"li"},"In Casbin, both the User and the Role are treated as strings. If you wrote a policy file like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p, admin, book, read\np, alice, book, read\ng, amber, admin\n")),(0,i.kt)("p",{parentName:"li"},"and call method ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," like this (",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is an instance of Casbin Enforcer):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllSubjects()\n")),(0,i.kt)("p",{parentName:"li"},"then you will get the return value below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin alice]\n")),(0,i.kt)("p",{parentName:"li"},"Because in Casbin, Subjects included Users and Roles."),(0,i.kt)("p",{parentName:"li"},"However, if you call method ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllRoles()")," like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"e.GetAllRoles()\n")),(0,i.kt)("p",{parentName:"li"},"then you will get the return value below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"[admin]\n")),(0,i.kt)("p",{parentName:"li"},"And now you know there is a distinction between Users and Roles in Casbin, but is not as sharp as in RBAC96. Of course you can add some prefix to your policies like ",(0,i.kt)("inlineCode",{parentName:"p"},"user::alice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"role::admin")," to clarify their relationships.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC provides more permissions than RBAC96"),(0,i.kt)("p",{parentName:"li"},"Only 7 permissions are defined in RBAC96: read, write, append, execute, credit, debit, inquiry."),(0,i.kt)("p",{parentName:"li"},"However, in Casbin, we treat permissions as strings. This way, you can create some permissions suit you better.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casbin RBAC supports domains"),(0,i.kt)("p",{parentName:"li"},"In Casbin, you can do authorizations by domains. This feature made your Access Control Model more flexible."))))}p.isMDXComponent=!0}}]);