"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1396],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>c});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return n?t.createElement(k,r(r({ref:a},m),{},{components:n})):t.createElement(k,r({ref:a},m))}));function c(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1217:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(7462),o=(n(7294),n(3905));const l={id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"]},r=void 0,i={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",source:"@site/docs/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",lastUpdatedBy:"Xhy-5000",lastUpdatedAt:1664594950,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code",keywords:["RBAC with domains","API"]},sidebar:"docs",previous:{title:"RBAC API",permalink:"/docs/rbac-api"},next:{title:"RoleManager API",permalink:"/docs/rolemanager-api"}},s={},d=[{value:"Reference",id:"reference",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3}],m=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",a)},p=m("Tabs"),u=m("TabItem"),c={toc:d};function k(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code. "),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"global variable ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," is Enforcer instance."),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,o.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,o.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,o.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,o.kt)(u,{value:".NET",label:".NET",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,o.kt)(u,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,o.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,o.kt)("h3",{id:"getusersforroleindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,o.kt)("p",null,"GetUsersForRoleInDomain gets the users that has a role inside a domain."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,o.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,o.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,o.kt)("h3",{id:"getrolesforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,o.kt)("p",null,"GetRolesForUserInDomain gets the roles that a user has inside a domain."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,o.kt)(u,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,o.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,o.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,o.kt)("h3",{id:"getpermissionsforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,o.kt)("p",null,"GetPermissionsForUserInDomain gets permissions for a user or role inside a domain."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,o.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,o.kt)("h3",{id:"addroleforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,o.kt)("p",null,"AddRoleForUserInDomain adds a role for a user inside a domain.\nReturns false if the user already has the role (aka not affected)."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,o.kt)(u,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,o.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,o.kt)("h3",{id:"deleteroleforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,o.kt)("p",null,"DeleteRoleForUserInDomain deletes a role for a user inside a domain.\nReturns false if the user does not have the role (aka not affected)."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,o.kt)(u,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,o.kt)("h3",{id:"deleterolesforuserindomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,o.kt)("p",null,"DeleteRolesForUserInDomain deletes all roles for a user inside a domain.\nReturns false if the user does not have any roles (aka not affected)."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,o.kt)("h3",{id:"getallusersbydomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,o.kt)("p",null,"GetAllUsersByDomain would get all users associated with the domain.\nReturns empty string array if has no domain defined in model."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,o.kt)("h3",{id:"deleteallusersbydomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,o.kt)("p",null,"DeleteAllUsersByDomain would delete all users associated with the domain.\nReturns false if has no domain defined in model."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,o.kt)("h3",{id:"deletedomains"},(0,o.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,o.kt)("p",null,"DeleteDomains would delete all associated users and roles.\nIt would delete all domains if parameter is not provided."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,o.kt)("h3",{id:"getalldomains"},(0,o.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,o.kt)("p",null,"GetAllDomains would get all domains."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(p,{groupId:"langs",mdxType:"Tabs"},(0,o.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are handling a domain like ",(0,o.kt)("inlineCode",{parentName:"p"},"name::domain"),", it may lead to unexpected behavior. In Casbin, ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," is a reversed keyword, just like ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," in a programming language, we should never put ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," in a domain.")))}k.isMDXComponent=!0}}]);