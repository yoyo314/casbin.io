"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[924],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return c}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),d=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(t),c=l,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||r;return t?n.createElement(g,o(o({ref:a},s),{},{components:t})):n.createElement(g,o({ref:a},s))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(7294),l=t(6010),r="tabItem_Ymn6";function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},a)}},5488:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(3117),l=t(7294),r=t(6010),o=t(2389),i=t(7392),u=t(7094),d=t(2466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var a,t,o=e.lazy,m=e.block,c=e.defaultValue,g=e.values,k=e.groupId,b=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,i.l)(h,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(a=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:f[0].props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),T=N.tabGroupChoices,x=N.setTabGroupChoices,Z=(0,l.useState)(v),P=Z[0],w=Z[1],G=[],j=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=T[k];null!=I&&I!==P&&h.some((function(e){return e.value===I}))&&w(I)}var M=function(e){var a=e.currentTarget,t=G.indexOf(a),n=h[t].value;n!==P&&(j(a),w(n),null!=k&&x(k,String(n)))},L=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,l=G.indexOf(e.currentTarget)+1;t=null!=(n=G[l])?n:G[0];break;case"ArrowLeft":var r,o=G.indexOf(e.currentTarget)-1;t=null!=(r=G[o])?r:G[G.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var a=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===a?0:-1,"aria-selected":P===a,key:a,ref:function(e){return G.push(e)},onKeyDown:L,onFocus:M,onClick:M},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":P===a})}),null!=t?t:a)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==P})}))))}function c(e){var a=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(a)},e))}},230:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),o=t(5488),i=t(5162),u=["components"],d={id:"rolemanager-api",title:"API RoleManager"},s=void 0,p={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"API RoleManager",description:"Responsable de r\xf4le",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/fr/docs/rolemanager-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagerApi.mdx",tags:[],version:"current",frontMatter:{id:"rolemanager-api",title:"API RoleManager"},sidebar:"docs",previous:{title:"RBAC avec API Domains",permalink:"/fr/docs/rbac-with-domains-api"},next:{title:"Autorisations des donn\xe9es",permalink:"/fr/docs/data-permissions"}},m={},c=[{value:"Responsable de r\xf4le",id:"responsable-de-r\xf4le",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],g={toc:c};function k(e){var a=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"responsable-de-r\xf4le"},"Responsable de r\xf4le"),(0,r.kt)("p",null,"RoleManager fournit une interface pour d\xe9finir les op\xe9rations de gestion des r\xf4les. L'ajout de la fonction correspondante au gestionnaire de r\xf4le permet d'utiliser des caract\xe8res g\xe9n\xe9riques dans le nom du r\xf4le et le domaine."),(0,r.kt)("h3",{id:"addnamedmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,r.kt)("p",null,"AddNamedMatchingFunc ajoute MatchingFunc par ptype RoleManager. MatchingFunc fonctionnera lors de la recherche de r\xf4les."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,r.kt)("p",null,"AddNamedDomainMatchingFunc ajoute MatchingFunc par ptype \xe0 RoleManager. ",(0,r.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," est similaire \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchingFunc")," list\xe9 ci-dessus."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"getrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,r.kt)("p",null,"GetRoleManager obtient le gestionnaire de r\xf4les actuel pour ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,r.kt)("p",null,"Efface toutes les donn\xe9es stock\xe9es et r\xe9initialise le gestionnaire de r\xf4le \xe0 l'\xe9tat initial."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,r.kt)("h3",{id:"addlink"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,r.kt)("p",null,"AddLink ajoute le lien d'h\xe9ritage entre deux r\xf4les. r\xf4le : nom1 et r\xf4le : nom2. Le domaine est un pr\xe9fixe des r\xf4les (peut \xeatre utilis\xe9 \xe0 d'autres fins)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"deletelink"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,r.kt)("p",null,"DeleteLink supprime le lien d'h\xe9ritage entre deux r\xf4les. r\xf4le : nom1 et r\xf4le : nom2. Le domaine est un pr\xe9fixe des r\xf4les (peut \xeatre utilis\xe9 \xe0 d'autres fins)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"haslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,r.kt)("p",null,"HasLink d\xe9termine si un lien existe entre deux r\xf4les. r\xf4le : nom1 h\xe9rite du r\xf4le : nom2. Le domaine est un pr\xe9fixe des r\xf4les (peut \xeatre utilis\xe9 \xe0 d'autres fins)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"getroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,r.kt)("p",null,"GetRoles r\xe9cup\xe8re les r\xf4les qu'un utilisateur h\xe9rite. Le domaine est un pr\xe9fixe des r\xf4les (peut \xeatre utilis\xe9 \xe0 d'autres fins)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,r.kt)("h3",{id:"getusers"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,r.kt)("p",null,"GetUsers r\xe9cup\xe8re les utilisateurs qui h\xe9ritent d'un r\xf4le. Le domaine est un pr\xe9fixe pour les utilisateurs (peut \xeatre utilis\xe9 \xe0 d'autres fins)."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,r.kt)("h3",{id:"printroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,r.kt)("p",null,"PrintRoles affiche tous les r\xf4les \xe0 enregistrer."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,r.kt)("h3",{id:"setlogger"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,r.kt)("p",null,"SetLogger d\xe9finit le journal du gestionnaire de r\xf4les."),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,r.kt)("h3",{id:"getdomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,r.kt)("p",null,"GetDomains r\xe9cup\xe8re les domaines qu'un utilisateur a"),(0,r.kt)("p",null,"Par exemple :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}k.isMDXComponent=!0}}]);