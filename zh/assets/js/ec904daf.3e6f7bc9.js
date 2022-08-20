"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4351],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return s}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=i(t),s=l,g=c["".concat(p,".").concat(s)]||c[s]||u[s]||r;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function s(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8751:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return u}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),o=["components"],d={id:"rolemanager-api",title:"\u89d2\u8272\u7ba1\u7406\u5668API",description:"RoleManager\u63d0\u4f9b\u63a5\u53e3\u6765\u5b9a\u4e49\u7ba1\u7406\u89d2\u8272\u7684\u64cd\u4f5c\u3002 \u5c06\u5339\u914d\u51fd\u6570\u6dfb\u52a0\u5230\u89d2\u8272\u540d\u79f0\u548c\u57df\u540d\u4e2d\u4f7f\u7528\u901a\u914d\u7b26",keywords:["\u89d2\u8272\u7ba1\u7406\u5668","API"]},p=void 0,i={unversionedId:"rolemanager-api",id:"rolemanager-api",title:"\u89d2\u8272\u7ba1\u7406\u5668API",description:"RoleManager\u63d0\u4f9b\u63a5\u53e3\u6765\u5b9a\u4e49\u7ba1\u7406\u89d2\u8272\u7684\u64cd\u4f5c\u3002 \u5c06\u5339\u914d\u51fd\u6570\u6dfb\u52a0\u5230\u89d2\u8272\u540d\u79f0\u548c\u57df\u540d\u4e2d\u4f7f\u7528\u901a\u914d\u7b26",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/RoleManagerApi.mdx",sourceDirName:".",slug:"/rolemanager-api",permalink:"/zh/docs/rolemanager-api",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"rolemanager-api",title:"\u89d2\u8272\u7ba1\u7406\u5668API",description:"RoleManager\u63d0\u4f9b\u63a5\u53e3\u6765\u5b9a\u4e49\u7ba1\u7406\u89d2\u8272\u7684\u64cd\u4f5c\u3002 \u5c06\u5339\u914d\u51fd\u6570\u6dfb\u52a0\u5230\u89d2\u8272\u540d\u79f0\u548c\u57df\u540d\u4e2d\u4f7f\u7528\u901a\u914d\u7b26",keywords:["\u89d2\u8272\u7ba1\u7406\u5668","API"]},sidebar:"docs",previous:{title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 API",permalink:"/zh/docs/rbac-with-domains-api"},next:{title:"\u6570\u636e\u6743\u9650",permalink:"/zh/docs/data-permissions"}},m={},u=[{value:"\u89d2\u8272\u7ba1\u7406\u5668",id:"\u89d2\u8272\u7ba1\u7406\u5668",level:2},{value:"<code>AddNamedMatchingFunc()</code>",id:"addnamedmatchingfunc",level:3},{value:"<code>AddNamedDomainMatchingFunc()</code>",id:"addnameddomainmatchingfunc",level:3},{value:"<code>GetRoleManager()</code>",id:"getrolemanager",level:3},{value:"<code>Clear()</code>",id:"clear",level:3},{value:"<code>AddLink()</code>",id:"addlink",level:3},{value:"<code>DeleteLink()</code>",id:"deletelink",level:3},{value:"<code>HasLink()</code>",id:"haslink",level:3},{value:"<code>GetRoles()</code>",id:"getroles",level:3},{value:"<code>GetUsers()</code>",id:"getusers",level:3},{value:"<code>PrintRoles()</code>",id:"printroles",level:3},{value:"<code>SetLogger()</code>",id:"setlogger",level:3},{value:"<code>GetDomains()</code>",id:"getdomains",level:3}],c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},s=c("Tabs"),g=c("TabItem"),k={toc:u};function y(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u89d2\u8272\u7ba1\u7406\u5668"},"\u89d2\u8272\u7ba1\u7406\u5668"),(0,r.kt)("p",null,"RoleManager\u63d0\u4f9b\u63a5\u53e3\u6765\u5b9a\u4e49\u7ba1\u7406\u89d2\u8272\u7684\u64cd\u4f5c\u3002 \u6dfb\u52a0\u5339\u914d\u51fd\u6570\u5230\u89d2\u8272\u7ba1\u7406\u5668\u5141\u8bb8\u5728\u89d2\u8272\u540d\u79f0\u548c\u57df\u4e2d\u4f7f\u7528\u901a\u914d\u7b26\u3002"),(0,r.kt)("h3",{id:"addnamedmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedMatchingFunc()")),(0,r.kt)("p",null,"AddNamedMatchingFunc \u901a\u8fc7 ptype \u89d2\u8272\u7ba1\u7406\u5668\u6dfb\u52a0MatchingFunc MatchingFunc\u5c06\u5728\u64cd\u4f5c\u89d2\u8272\u5339\u914d\u65f6\u5de5\u4f5c\u3002"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e.AddNamedMatchingFunc("g", "", util.KeyMatch)\n    _, _ = e.AddGroupingPolicies([][]string{{"*", "admin", "domain1"}})\n    _, _ = e.GetRoleManager().HasLink("bob", "admin", "domain1") // -> true, nil\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n    await e.addGroupingPolicies([['*', 'admin', 'domain1']]);\n    await e.getRoleManager().hasLink('bob', 'admin', 'domain1');\n")))),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"addnameddomainmatchingfunc"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddNamedDomainMatchingFunc()")),(0,r.kt)("p",null,"AddNamedDomainMatchingFunc \u901a\u8fc7 ptype \u628aMatchingFunc \u6dfb\u52a0\u5230 RoleManager\u4e2d\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"DomainMatchingFunc")," \u7c7b\u4f3c\u4e8e\u4e0a\u9762\u5217\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchingFunc")),(0,r.kt)("p",null,"For example:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    e, _ := casbin.NewEnforcer("path/to/model", "path/to/policy")\n    e.AddNamedDomainMatchingFunc("g", "", util.MatchKey)\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const e = await newEnforcer('path/to/model', 'path/to/policy');\n    await e.addNamedDomainMatchingFunc('g', Util.keyMatchFunc);\n")))),(0,r.kt)("h3",{id:"getrolemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoleManager()")),(0,r.kt)("p",null,"GetRoleManager \u83b7\u53d6\u73b0\u5b58\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," \u7684role manager\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm := e.GetRoleManager()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    const rm = await e.getRoleManager();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm = e.get_role_manager()\n")))),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"Clear()")),(0,r.kt)("p",null,"Clear\u6e05\u9664\u6240\u6709\u5b58\u50a8\u7684\u6570\u636e\u5e76\u5c06\u89d2\u8272\u7ba1\u7406\u5668\u91cd\u7f6e\u5230\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.Clear()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.clear();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.clear()\n")))),(0,r.kt)("h3",{id:"addlink"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddLink()")),(0,r.kt)("p",null,"AddLink\u6dfb\u52a0\u4e86\u4e24\u4e2a\u89d2\u8272\u4e4b\u95f4\u7684\u7ee7\u627f\u94fe\u63a5\u3002 \u89d2\u8272\uff1a \u540d\u79f01 \u548c \u89d2\u8272\uff1a \u540d\u79f02 \u57df\u662f\u89d2\u8272\u7684\u524d\u7f00(\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684)\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.AddLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.addLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.add_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"deletelink"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteLink()")),(0,r.kt)("p",null,"DeleteLink \u5220\u9664\u4e24\u4e2a\u89d2\u8272\u4e4b\u95f4\u7684\u7ee7\u627f\u94fe\u63a5\u3002 \u89d2\u8272\uff1a \u540d\u79f01 \u548c \u89d2\u8272\uff1a \u540d\u79f02 \u57df\u662f\u89d2\u8272\u7684\u524d\u7f00(\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684)\u3002"),(0,r.kt)("p",null,"For example:"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.DeleteLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.deleteLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.delete_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"haslink"},(0,r.kt)("inlineCode",{parentName:"h3"},"HasLink()")),(0,r.kt)("p",null,"HasLink \u51b3\u5b9a\u4e24\u79cd\u89d2\u8272\u4e4b\u95f4\u662f\u5426\u5b58\u5728\u8054\u7cfb\u3002 role: name1 \u7ee7\u627f\u81ea role: name2. \u57df\u662f\u89d2\u8272\u7684\u524d\u7f00(\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684)\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.HasLink("u1", "g1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.hasLink('u1', 'g1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.has_link("u1", "g1", "domain1")\n')))),(0,r.kt)("h3",{id:"getroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRoles()")),(0,r.kt)("p",null,"GetRoles \u83b7\u53d6\u4e00\u4e2a\u7528\u6237\u6240\u7ee7\u627f\u7684\u89d2\u8272 \u57df\u662f\u89d2\u8272\u7684\u524d\u7f00(\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684)\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetRoles("u1", "domain1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getRoles('u1', 'domain1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_roles("u1", "domain")\n')))),(0,r.kt)("h3",{id:"getusers"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsers()")),(0,r.kt)("p",null,"GetUsers \u83b7\u53d6\u7ee7\u627f\u81ea\u4e00\u4e2a\u89d2\u8272\u7684\u7528\u6237 \u57df\u662f\u7528\u6237\u7684\u524d\u7f00(\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u76ee\u7684)\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    rm.GetUsers("g1")\n'))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.getUsers('g1');\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    rm.get_users("g1")\n')))),(0,r.kt)("h3",{id:"printroles"},(0,r.kt)("inlineCode",{parentName:"h3"},"PrintRoles()")),(0,r.kt)("p",null,"PrintRoles \u6253\u5370\u6240\u6709\u7684\u89d2\u8272\u5230\u65e5\u5fd7\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    rm.PrintRoles()\n"))),(0,r.kt)(g,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    await rm.printRoles();\n"))),(0,r.kt)(g,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    rm.print_roles()\n")))),(0,r.kt)("h3",{id:"setlogger"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetLogger()")),(0,r.kt)("p",null,"SetLogger\u8bbe\u7f6e\u89d2\u8272\u7ba1\u7406\u5668\u7684\u65e5\u5fd7\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    logger := log.DefaultLogger{}\n    logger.EnableLog(true)\n    rm.SetLogger(&logger)\n    _ = rm.PrintRoles()\n")))),(0,r.kt)("h3",{id:"getdomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetDomains()")),(0,r.kt)("p",null,"GetDomains \u83b7\u53d6\u7528\u6237\u62e5\u6709\u7684\u57df"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(g,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    result, err := rm.GetDomains(name)\n")))))}y.isMDXComponent=!0}}]);