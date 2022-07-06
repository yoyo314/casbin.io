"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5418],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return c}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,g=u["".concat(i,".").concat(c)]||u[c]||s[c]||r;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2711:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),o=["components"],d={id:"rolemanager-api",title:"RoleManager API"},i=void 0,p={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"RoleManager API",description:"RoleManager",source:"@site/docs/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/docs/rolemanager-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RoleManagerApi.mdx",tags:[],version:"current",frontMatter:{id:"rolemanager-api",title:"RoleManager API"},sidebar:"docs",previous:{title:"RBAC with Domains API",permalink:"/docs/rbac-with-domains-api"},next:{title:"Data Permissions",permalink:"/docs/data-permissions"}},m={},s=[{value:"RoleManager",id:"rolemanager",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],u=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},c=u("Tabs"),g=u("TabItem"),k={toc:s};function h(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rolemanager"},"RoleManager"),(0,r.kt)("p",null,"RoleManager provides interface to define the operations for managing roles.\nAdding matching function to rolemanager allows using wildcards in role name and domain."),(0,r.kt)("h3",{id:"addnamedmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,r.kt)("p",null,"AddNamedMatchingFunc add MatchingFunc by ptype RoleManager.\nMatchingFunc will work when operating role matching."),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,r.kt)("p",null,"AddNamedDomainMatchingFunc add MatchingFunc by ptype to RoleManager.\n",(0,r.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchingFunc")," listed above."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"getrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,r.kt)("p",null,"GetRoleManager gets the current role manager for ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,r.kt)("p",null,"Clear clears all stored data and resets the role manager to the initial state."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,r.kt)("h3",{id:"addlink"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,r.kt)("p",null,"AddLink adds the inheritance link between two roles. role: name1 and role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"deletelink"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,r.kt)("p",null,"DeleteLink deletes the inheritance link between two roles. role: name1 and role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"haslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,r.kt)("p",null,"HasLink determines whether a link exists between two roles. role: name1 inherits role: name2.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"getroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,r.kt)("p",null,"GetRoles gets the roles that a user inherits.\nDomain is a prefix to the roles (can be used for other purposes)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,r.kt)("h3",{id:"getusers"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,r.kt)("p",null,"GetUsers gets the users that inherits a role.\nDomain is a prefix to the users (can be used for other purposes)."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,r.kt)("h3",{id:"printroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,r.kt)("p",null,"PrintRoles prints all the roles to log."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,r.kt)("h3",{id:"setlogger"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,r.kt)("p",null,"SetLogger sets role manager's logger."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,r.kt)("h3",{id:"getdomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,r.kt)("p",null,"GetDomains gets domains that a user has"),(0,r.kt)("p",null,"For example:"),(0,r.kt)(c,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}h.isMDXComponent=!0}}]);