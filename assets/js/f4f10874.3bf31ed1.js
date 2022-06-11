"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[508],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,f=p["".concat(s,".").concat(u)]||p[u]||c[u]||t;return a?r.createElement(f,l(l({ref:n},m),{},{components:a})):r.createElement(f,l({ref:n},m))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=a.length,l=new Array(t);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<t;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9855:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=a(3117),o=a(102),t=(a(7294),a(3905)),l=["components"],i={id:"rbac-with-domains-api",title:"RBAC with Domains API"},s=void 0,d={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",isDocsHomePage:!1,title:"RBAC with Domains API",description:"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code.",source:"@site/docs/RBACWithDomainsAPI.md",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/docs/rbac-with-domains-api",editUrl:"https://github.com/casbin/casbin-website/edit/master/docs/docs/RBACWithDomainsAPI.md",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"RBAC with Domains API"}},m=[{value:"Reference",id:"reference",children:[{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",children:[],level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",children:[],level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",children:[],level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",children:[],level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",children:[],level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",children:[],level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",children:[],level:3},{value:"<code>DeleteAllUserByDomain()</code>",id:"deletealluserbydomain",children:[],level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",children:[],level:3}],level:2}],c={toc:m};function p(e){var n=e.components,a=(0,o.Z)(e,l);return(0,t.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A more friendly API for RBAC with domains. This API is a subset of Management API. The RBAC users could use this API to simplify the code. "),(0,t.kt)("h2",{id:"reference"},"Reference"),(0,t.kt)("p",null,"global variable ",(0,t.kt)("inlineCode",{parentName:"p"},"e")," is Enforcer instance."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv")\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv')\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_model.conf', 'examples/rbac_policy.csv');\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_model.conf", "examples/rbac_policy.csv").await?;\n')),(0,t.kt)("h3",{id:"getusersforroleindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,t.kt)("p",null,"GetUsersForRoleInDomain gets the users that has a role inside a domain."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("alice", "domain1")\n')),(0,t.kt)("h3",{id:"getrolesforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,t.kt)("p",null,"GetRolesForUserInDomain gets the roles that a user has inside a domain."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n')),(0,t.kt)("h3",{id:"getpermissionsforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,t.kt)("p",null,"GetPermissionsForUserInDomain gets permissions for a user or role inside a domain."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n')),(0,t.kt)("h3",{id:"addroleforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,t.kt)("p",null,"AddRoleForUserInDomain adds a role for a user inside a domain.\nReturns false if the user already has the role (aka not affected)."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n')),(0,t.kt)("h3",{id:"deleteroleforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,t.kt)("p",null,"DeleteRoleForUserInDomain deletes a role for a user inside a domain.\nReturns false if the user does not have the role (aka not affected)."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n')),(0,t.kt)("h3",{id:"deleterolesforuserindomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,t.kt)("p",null,"DeleteRolesForUserInDomain deletes all roles for a user inside a domain.\nReturns false if the user does not have any roles (aka not affected)."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')),(0,t.kt)("h3",{id:"getallusersbydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,t.kt)("p",null,"GetAllUsersByDomain would get all users associated with the domain.\nReturns empty string array if has no domain defined in model."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')),(0,t.kt)("h3",{id:"deletealluserbydomain"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteAllUserByDomain()")),(0,t.kt)("p",null,"DeleteAllUsersByDomain would delete all users associated with the domain.\nReturns false if has no domain defined in model."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.GetUsersForRoleInDomain("alice","domain1")\n')),(0,t.kt)("h3",{id:"deletedomains"},(0,t.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,t.kt)("p",null,"DeleteDomains would delete all associated users and roles.\nIt would delete all domains if parameter is not provided."),(0,t.kt)("p",null,"For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')),(0,t.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"If you are handling a domain like ",(0,t.kt)("inlineCode",{parentName:"p"},"name::domain"),", it may lead to unexpected behavior. In Casbin, ",(0,t.kt)("inlineCode",{parentName:"p"},"::")," is a reversed keyword, just like ",(0,t.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"if")," in a programming language, we should never put ",(0,t.kt)("inlineCode",{parentName:"p"},"::")," in a domain."))))}p.isMDXComponent=!0}}]);