"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3116],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return g}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),m=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=m(e.components);return t.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(n),g=l,c=s["".concat(i,".").concat(g)]||s[g]||u[g]||r;return n?t.createElement(c,o(o({ref:a},p),{},{components:n})):t.createElement(c,o({ref:a},p))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var m=2;m<r;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1545:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});var t=n(3117),l=n(102),r=(n(7294),n(3905)),o=["components"],d={id:"rolemanager-api",title:"Rollen-Manager-API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},i=void 0,m={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"Rollen-Manager-API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/de/docs/rolemanager-api",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"rolemanager-api",title:"Rollen-Manager-API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},sidebar:"docs",previous:{title:"RBAC mit Domains API",permalink:"/de/docs/rbac-with-domains-api"},next:{title:"Datenberechtigungen",permalink:"/de/docs/data-permissions"}},p={},u=[{value:"Rollenmanager",id:"rollenmanager",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>GetNamedRoleManager()</code>",id:"getnamedrolemanager",level:3},{value:"<code>SetRoleManager()</code>",id:"setrolemanager",level:3},{value:"<code>SetNamedRoleManager()</code>",id:"setnamedrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},g=s("Tabs"),c=s("TabItem"),k={toc:u};function b(e){var a=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rollenmanager"},"Rollenmanager"),(0,r.kt)("p",null,"RoleManager stellt eine Schnittstelle zur Verf\xfcgung, um die Operationen zur Verwaltung von Rollen zu definieren. Das Hinzuf\xfcgen der passenden Funktion zum Rollenmanager erm\xf6glicht die Verwendung von Platzhaltern in Rollennamen und Domain."),(0,r.kt)("h3",{id:"addnamedmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,r.kt)("p",null,"AddNamedMatchingFunc add MatchingFunc by ptype to RoleManager. MatchingFunc funktioniert beim Abspielen von Rollen."),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,r.kt)("p",null,"AddNamedDomainMatchingFunc f\xfcgt MatchingFunc per ptype dem RoleManager hinzu. ",(0,r.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," ist \xe4hnlich wie ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchingFunc")," oben aufgelistet."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"getrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,r.kt)("p",null,"GetRoleManager holt den aktuellen Rollenmanager f\xfcr ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,r.kt)("h3",{id:"getnamedrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetNamedRoleManager()")),(0,r.kt)("p",null,"GetNamedRoleManager gets the role manager by named ptype."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm := e.GetNamedRoleManager("g2")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'    const rm = await e.getNamedRoleManager("g2");\n'))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm = e.get_named_role_manager("g2")\n')))),(0,r.kt)("h3",{id:"setrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetRoleManager()")),(0,r.kt)("p",null,"SetRoleManager sets the current role manager for ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    e.SetRoleManager(rm)\n"))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    e.setRoleManager(rm);\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.set_role_manager(rm)\n")))),(0,r.kt)("h3",{id:"setnamedrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetNamedRoleManager()")),(0,r.kt)("p",null,"SetNamedRoleManager sets the role manager by named ptype."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm := e.SetNamedRoleManager("g2", rm)\n'))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm = e.set_role_manager("g2", rm)\n')))),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,r.kt)("p",null,"Clear l\xf6scht alle gespeicherten Daten und setzt den Rollenmanager auf den Ausgangszustand."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,r.kt)("h3",{id:"addlink"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,r.kt)("p",null,"AddLink f\xfcgt die Vererbung zwischen zwei Rollen hinzu. Rolle: name1 und Rolle: name2. Domain ist ein Pr\xe4fix f\xfcr die Rollen (kann f\xfcr andere Zwecke verwendet werden)."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"deletelink"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,r.kt)("p",null,"DeleteLink l\xf6scht die Vererbung zwischen zwei Rollen. Rolle: name1 und Rolle: name2. Domain ist ein Pr\xe4fix f\xfcr die Rollen (kann f\xfcr andere Zwecke verwendet werden)."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"haslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,r.kt)("p",null,"HasLink bestimmt, ob eine Verbindung zwischen zwei Rollen besteht. Rolle: name1 vererbt die Rolle: name2. Domain ist ein Pr\xe4fix f\xfcr die Rollen (kann f\xfcr andere Zwecke verwendet werden)."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"getroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,r.kt)("p",null,"GetRoles erh\xe4lt die Rollen, die ein Benutzer vererbt hat. Domain ist ein Pr\xe4fix f\xfcr die Rollen (kann f\xfcr andere Zwecke verwendet werden)."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,r.kt)("h3",{id:"getusers"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,r.kt)("p",null,"Getusers bekommen die Benutzer, die eine Rolle erben. Domain ist ein Pr\xe4fix f\xfcr die Benutzer (kann f\xfcr andere Zwecke verwendet werden)."),(0,r.kt)("p",null,"Zum Beispiel:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,r.kt)("h3",{id:"printroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,r.kt)("p",null,"PrintRoles druckt alle Rollen zu protokollieren."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,r.kt)(c,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,r.kt)(c,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,r.kt)("h3",{id:"setlogger"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,r.kt)("p",null,"SetLogger setzt den Logger f\xfcr Rollenmanager."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,r.kt)("h3",{id:"getdomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,r.kt)("p",null,"GetDomains erhalten Dom\xe4nen, die ein Benutzer hat"),(0,r.kt)("p",null,"For example:"),(0,r.kt)(g,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(c,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}b.isMDXComponent=!0}}]);