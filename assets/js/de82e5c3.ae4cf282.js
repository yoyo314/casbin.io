"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5418],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>u});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),g=p(t),u=l,c=g["".concat(m,".").concat(u)]||g[u]||s[u]||r;return t?n.createElement(c,o(o({ref:a},i),{},{components:t})):n.createElement(c,o({ref:a},i))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=g;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2711:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const r={id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},o=void 0,d={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",source:"@site/docs/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/docs/rolemanager-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagerApi.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1663855807,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},sidebar:"docs",previous:{title:"RBAC with Domains API",permalink:"/docs/rbac-with-domains-api"},next:{title:"Data Permissions",permalink:"/docs/data-permissions"}},m={},p=[{value:"RoleManager",id:"rolemanager",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>GetNamedRoleManager()</code>",id:"getnamedrolemanager",level:3},{value:"<code>SetRoleManager()</code>",id:"setrolemanager",level:3},{value:"<code>SetNamedRoleManager()</code>",id:"setnamedrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},s=i("Tabs"),g=i("TabItem"),u={toc:p};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"rolemanager"},"RoleManager"),(0,l.kt)("p",null,"RoleManager provides interface to define the operations for managing roles.\nAdding matching function to rolemanager allows using wildcards in role name and domain."),(0,l.kt)("h3",{id:"addnamedmatchingfunc"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,l.kt)("p",null,"AddNamedMatchingFunc add MatchingFunc by ptype to RoleManager.\nMatchingFunc will work when operating role matching."),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,l.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,l.kt)("p",null,"AddNamedDomainMatchingFunc add MatchingFunc by ptype to RoleManager.\n",(0,l.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"MatchingFunc")," listed above."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,l.kt)("h3",{id:"getrolemanager"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,l.kt)("p",null,"GetRoleManager gets the current role manager for ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,l.kt)("h3",{id:"getnamedrolemanager"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetNamedRoleManager()")),(0,l.kt)("p",null,"GetNamedRoleManager gets the role manager by named ptype."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm := e.GetNamedRoleManager("g2")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'    const rm = await e.getNamedRoleManager("g2");\n'))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm = e.get_named_role_manager("g2")\n')))),(0,l.kt)("h3",{id:"setrolemanager"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetRoleManager()")),(0,l.kt)("p",null,"SetRoleManager sets the current role manager for ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    e.SetRoleManager(rm)\n"))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    e.setRoleManager(rm);\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.set_role_manager(rm)\n")))),(0,l.kt)("h3",{id:"setnamedrolemanager"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetNamedRoleManager()")),(0,l.kt)("p",null,"SetNamedRoleManager sets the role manager by named ptype."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm := e.SetNamedRoleManager("g2", rm)\n'))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm = e.set_role_manager("g2", rm)\n')))),(0,l.kt)("h3",{id:"clear"},(0,l.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,l.kt)("p",null,"Clear clears all stored data and resets the role manager to the initial state."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,l.kt)("h3",{id:"addlink"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,l.kt)("p",null,"AddLink adds the inheritance link between two roles. role: name1 and role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,l.kt)("h3",{id:"deletelink"},(0,l.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,l.kt)("p",null,"DeleteLink deletes the inheritance link between two roles. role: name1 and role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,l.kt)("h3",{id:"haslink"},(0,l.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,l.kt)("p",null,"HasLink determines whether a link exists between two roles. role: name1 inherits role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,l.kt)("h3",{id:"getroles"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,l.kt)("p",null,"GetRoles gets the roles that a user inherits.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,l.kt)("h3",{id:"getusers"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,l.kt)("p",null,"GetUsers gets the users that inherits a role.\nDomain is a prefix to the users (can be used for other purposes)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,l.kt)("h3",{id:"printroles"},(0,l.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,l.kt)("p",null,"PrintRoles prints all the roles to log."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,l.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,l.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,l.kt)("h3",{id:"setlogger"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,l.kt)("p",null,"SetLogger sets role manager's logger."),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,l.kt)("h3",{id:"getdomains"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,l.kt)("p",null,"GetDomains gets domains that a user has"),(0,l.kt)("p",null,"For example:"),(0,l.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}c.isMDXComponent=!0}}]);