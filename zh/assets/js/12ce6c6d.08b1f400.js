"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9865],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return p}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),p=l,k=c["".concat(s,".").concat(p)]||c[p]||u[p]||r;return n?t.createElement(k,o(o({ref:a},d),{},{components:n})):t.createElement(k,o({ref:a},d))}));function p(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(6010),r="tabItem_Ymn6";function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},a)}},5488:function(e,a,n){n.d(a,{Z:function(){return p}});var t=n(3117),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),m=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var a,n,o=e.lazy,c=e.block,p=e.defaultValue,k=e.values,b=e.groupId,v=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,i.l)(g,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(a=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:f[0].props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),T=N.tabGroupChoices,I=N.setTabGroupChoices,D=(0,l.useState)(h),x=D[0],_=D[1],w=[],Z=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=T[b];null!=P&&P!==x&&g.some((function(e){return e.value===P}))&&_(P)}var G=function(e){var a=e.currentTarget,n=w.indexOf(a),t=g[n].value;t!==x&&(Z(a),_(t),null!=b&&I(b,String(t)))},U=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t,l=w.indexOf(e.currentTarget)+1;n=null!=(t=w[l])?t:w[0];break;case"ArrowLeft":var r,o=w.indexOf(e.currentTarget)-1;n=null!=(r=w[o])?r:w[w.length-1]}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var a=e.value,n=e.label,o=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:function(e){return w.push(e)},onKeyDown:U,onFocus:G,onClick:G},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===a})}),null!=n?n:a)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})}))))}function p(e){var a=(0,o.Z)();return l.createElement(c,(0,t.Z)({key:String(a)},e))}},1027:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return p}});var t=n(3117),l=n(102),r=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],m={id:"rbac-with-domains-api",title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 API"},d=void 0,u={unversionedId:"rbac-with-domains-api",id:"rbac-with-domains-api",title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 API",description:"\u4e00\u4e2a\u66f4\u53cb\u597d\u7684\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u7684API\u3002 \u8fd9\u4e2aAPI\u662fManagement API\u7684\u5b50\u96c6\u3002 RBAC\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2aAPI\u6765\u7b80\u5316\u4ee3\u7801\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/RBACWithDomainsAPI.mdx",sourceDirName:".",slug:"/rbac-with-domains-api",permalink:"/zh/docs/rbac-with-domains-api",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomainsAPI.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains-api",title:"\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 API"},sidebar:"docs",previous:{title:"RBAC API",permalink:"/zh/docs/rbac-api"},next:{title:"\u89d2\u8272\u7ba1\u7406\u5668API",permalink:"/zh/docs/rolemanager-api"}},c={},p=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"<code>GetUsersForRoleInDomain()</code>",id:"getusersforroleindomain",level:3},{value:"<code>GetRolesForUserInDomain()</code>",id:"getrolesforuserindomain",level:3},{value:"<code>GetPermissionsForUserInDomain()</code>",id:"getpermissionsforuserindomain",level:3},{value:"<code>AddRoleForUserInDomain()</code>",id:"addroleforuserindomain",level:3},{value:"<code>DeleteRoleForUserInDomain()</code>",id:"deleteroleforuserindomain",level:3},{value:"<code>DeleteRolesForUserInDomain()</code>",id:"deleterolesforuserindomain",level:3},{value:"<code>GetAllUsersByDomain()</code>",id:"getallusersbydomain",level:3},{value:"<code>DeleteAllUsersByDomain()</code>",id:"deleteallusersbydomain",level:3},{value:"<code>DeleteDomains()</code>",id:"deletedomains",level:3},{value:"<code>GetAllDomains()</code>",id:"getalldomains",level:3}],k={toc:p};function b(e){var a=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e00\u4e2a\u66f4\u53cb\u597d\u7684\u57df\u5185\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u7684API\u3002 \u8fd9\u4e2aAPI\u662fManagement API\u7684\u5b50\u96c6\u3002 RBAC\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2aAPI\u6765\u7b80\u5316\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,"\u5168\u5c40\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," \u662f Enforcer \u5b9e\u4f8b\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e, err := NewEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const e = await newEnforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv')\n"))),(0,r.kt)(i.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$e = new Enforcer('examples/rbac_with_domains_model.conf', 'examples/rbac_with_domains_policy.csv');\n"))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'e = casbin.Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv")\n'))),(0,r.kt)(i.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n'))),(0,r.kt)(i.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut e = Enforcer::new("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv").await?;\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Enforcer e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv");\n')))),(0,r.kt)("h3",{id:"getusersforroleindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetUsersForRoleInDomain()")),(0,r.kt)("p",null,"GetUsersForRoleInDomain \u83b7\u53d6\u5177\u6709\u57df\u5185\u89d2\u8272\u7684\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetUsersForRoleInDomain("admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getUsersForRoleInDomain("admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_users_for_role_in_domain("admin", "domain1")\n')))),(0,r.kt)("h3",{id:"getrolesforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetRolesForUserInDomain()")),(0,r.kt)("p",null,"GetRolesForUserInDomain \u83b7\u53d6\u57df\u5185\u7528\u6237\u7684\u89d2\u8272"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetRolesForUserInDomain("admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = e.getRolesForUserInDomain("alice", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'res = e.get_roles_for_user_in_domain("alice", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> res = e.getRolesForUserInDomain("admin", "domain1");\n')))),(0,r.kt)("h3",{id:"getpermissionsforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetPermissionsForUserInDomain()")),(0,r.kt)("p",null,"GetPermissionsForUserInDomain \u83b7\u53d6\u57df\u5185\u7528\u6237\u6216\u89d2\u8272\u7684\u6743\u9650\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetPermissionsForUserInDomain("alice", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<List<String>> res = e.getPermissionsForUserInDomain("alice", "domain1");\n')))),(0,r.kt)("h3",{id:"addroleforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"AddRoleForUserInDomain()")),(0,r.kt)("p",null,"AddRoleForUserInDomain \u5728\u57df\u5185\u4e3a\u7528\u6237\u6dfb\u52a0\u89d2\u8272 \u5982\u679c\u7528\u6237\u5df2\u7ecf\u62e5\u6709\u8be5\u89d2\u8272\uff0c\u5219\u8fd4\u56defalse\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.AddRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ok = e.add_role_for_user_in_domain("alice", "admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.addRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,r.kt)("h3",{id:"deleteroleforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteRoleForUserInDomain()")),(0,r.kt)("p",null,"DeleteRoleForUserInDomain \u5728\u57df\u5185\u5220\u9664\u7528\u6237\u7684\u89d2\u8272 \u5982\u679c\u7528\u6237\u6ca1\u6709\u8be5\u89d2\u8272\uff0c\u5219\u8fd4\u56defalse\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRoleForUserInDomain("alice", "admin", "domain1")\n'))),(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean ok = e.deleteRoleForUserInDomain("alice", "admin", "domain1");\n')))),(0,r.kt)("h3",{id:"deleterolesforuserindomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteRolesForUserInDomain()")),(0,r.kt)("p",null,"DeleteRolesForUserInDomain \u5220\u9664\u57df\u5185\u7528\u6237\u7684\u6240\u6709\u89d2\u8272 \u5982\u679c\u7528\u6237\u6ca1\u6709\u4efb\u4f55\u89d2\u8272\uff0c\u5219\u8fd4\u56defalse\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteRolesForUserInDomain("alice", "domain1")\n')))),(0,r.kt)("h3",{id:"getallusersbydomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetAllUsersByDomain()")),(0,r.kt)("p",null,"GetAllUsersByDomain\u5c06\u83b7\u5f97\u6240\u6709\u4e0e\u8be5\u57df\u76f8\u5173\u8054\u7684\u7528\u6237\u3002 \u5982\u679c\u6a21\u578b\u4e2d\u6ca1\u6709\u5b9a\u4e49\u57df\u540d\uff0c\u5c06\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'res := e.GetAllUsersByDomain("domain1")\n')))),(0,r.kt)("h3",{id:"deleteallusersbydomain"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteAllUsersByDomain()")),(0,r.kt)("p",null,"DeleteAllUsersByDomain \u5c06\u5220\u9664\u4e0e\u8be5\u57df\u76f8\u5173\u7684\u6240\u6709\u7528\u6237 \u5982\u679c\u6a21\u578b\u4e2d\u6ca1\u6709\u5b9a\u4e49\u57df\u540d\uff0c\u5219\u8fd4\u56de false\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteAllUsersByDomain("domain1")\n')))),(0,r.kt)("h3",{id:"deletedomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"DeleteDomains()")),(0,r.kt)("p",null,"DeleteDomains \u5c06\u5220\u9664\u6240\u6709\u76f8\u5173\u7684\u7528\u6237\u548c\u89d2\u8272\u3002 \u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\uff0c\u5b83\u4f1a\u5220\u9664\u6240\u6709\u57df\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ok, err := e.DeleteDomains("domain1", "domain2")\n')))),(0,r.kt)("h3",{id:"getalldomains"},(0,r.kt)("inlineCode",{parentName:"h3"},"GetAllDomains()")),(0,r.kt)("p",null,"GetAllDomains would get all domains."),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"res, _ := e.GetAllDomains()\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are handling a domain like ",(0,r.kt)("inlineCode",{parentName:"p"},"name::domain"),", it may lead to unexpected behavior. \u5728 Casbin\u91cc, ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," \u662f\u4e00\u4e2a\u5012\u7f6e\u7684\u5173\u952e\u8bcd, \u5c31\u50cf\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u5173\u952e\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u4e00\u6837\uff0c\u6211\u4eec\u4e0d\u5e94\u8be5\u5728\u4e00\u4e2a\u57df\u4e2d\u653e\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"::")))))}b.isMDXComponent=!0}}]);