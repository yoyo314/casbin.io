"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[491],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return s}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=p(t),s=l,g=c["".concat(i,".").concat(s)]||c[s]||u[s]||r;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function s(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},651:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),o=["components"],d={id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},i=void 0,p={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/ja/docs/rolemanager-api",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"rolemanager-api",title:"RoleManager API",description:"RoleManager provides interface to define the operations for managing roles. Adding matching function to rolemanager allows using wildcards in role name and domain",keywords:["rolemanager","API"]},sidebar:"docs",previous:{title:"Domains API \u306b\u3088\u308b RBAC",permalink:"/ja/docs/rbac-with-domains-api"},next:{title:"\u30c7\u30fc\u30bf\u6a29\u9650",permalink:"/ja/docs/data-permissions"}},m={},u=[{value:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",id:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},s=c("Tabs"),g=c("TabItem"),k={toc:u};function y(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"},"\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,r.kt)("p",null,"RoleManager \u306f\u3001\u30ed\u30fc\u30eb\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u64cd\u4f5c\u3092\u5b9a\u7fa9\u3059\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 rolemanager\u306b\u4e00\u81f4\u3059\u308b\u95a2\u6570\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30ed\u30fc\u30eb\u540d\u3068\u30c9\u30e1\u30a4\u30f3\u3067\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"addnamedmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,r.kt)("p",null,"AddNamedMatchingFunc ptype RoleManager \u306b\u3088\u3063\u3066 MatchingFunc \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 MatchingFunc \u306f\u3001\u30ed\u30fc\u30eb\u306e\u30de\u30c3\u30c1\u30f3\u30b0\u3092\u64cd\u4f5c\u3059\u308b\u3068\u304d\u306b\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,r.kt)("p",null,"AddNamedDomainMatchingFunc ptype \u3067 RoleManager \u306bMatchingFunc \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," \u306f\u4e0a\u8a18\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchingFunc")," \u306b\u4f3c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"getrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,r.kt)("p",null,"GetRoleManager \u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u306e\u73fe\u5728\u306e\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306e\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30af\u30ea\u30a2\u3057\u3001\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u521d\u671f\u72b6\u614b\u306b\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,r.kt)("h3",{id:"addlink"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,r.kt)("p",null,"AddLink\u306f2\u3064\u306e\u30ed\u30fc\u30eb\u9593\u3067\u7d99\u627f\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 role: name1 \u3068 role: name2 \u30c9\u30e1\u30a4\u30f3\u306f\u3001\u30ed\u30fc\u30eb\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059(\u4ed6\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"deletelink"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,r.kt)("p",null,"DeleteLink\u306f2\u3064\u306e\u30ed\u30fc\u30eb\u9593\u306e\u7d99\u627f\u30ea\u30f3\u30af\u3092\u524a\u9664\u3057\u307e\u3059\u3002 role: name1 \u3068 role: name2 \u30c9\u30e1\u30a4\u30f3\u306f\u3001\u30ed\u30fc\u30eb\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059(\u4ed6\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"haslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,r.kt)("p",null,"HasLink\u306f\u30012\u3064\u306e\u30ed\u30fc\u30eb\u9593\u306b\u30ea\u30f3\u30af\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002 role: name1 \u306f role \u3092\u7d99\u627f\u3057\u307e\u3059: name2 \u30c9\u30e1\u30a4\u30f3\u306f\u3001\u30ed\u30fc\u30eb\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059(\u4ed6\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"getroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,r.kt)("p",null,"GetRoles \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u7d99\u627f\u3059\u308b\u30ed\u30fc\u30eb\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002 \u30c9\u30e1\u30a4\u30f3\u306f\u3001\u30ed\u30fc\u30eb\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059(\u4ed6\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,r.kt)("h3",{id:"getusers"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,r.kt)("p",null,"GetUsers \u306f\u3001\u30ed\u30fc\u30eb\u3092\u7d99\u627f\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002 \u30c9\u30e1\u30a4\u30f3\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3067\u3059(\u4ed6\u306e\u76ee\u7684\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,r.kt)("h3",{id:"printroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,r.kt)("p",null,"PrintRoles\u306f\u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u3092\u30ed\u30b0\u306b\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,r.kt)("h3",{id:"setlogger"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,r.kt)("p",null,"SetLogger \u306f\u30ed\u30fc\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u30ed\u30ac\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,r.kt)("h3",{id:"getdomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,r.kt)("p",null,"GetDomains \u306f\u30e6\u30fc\u30b6\u30fc\u304c\u6301\u3064\u30c9\u30e1\u30a4\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}y.isMDXComponent=!0}}]);