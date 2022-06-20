"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7076],{2629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var i=n(3117),s=n(102),o=(n(7294),n(3905)),r=["components"],a={id:"superadmin",title:"Super Admin"},d=void 0,p={unversionedId:"superadmin",id:"superadmin",isDocsHomePage:!1,title:"Super Admin",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:",source:"@site/docs/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/docs/superadmin",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super Admin"},sidebar:"docs",previous:{title:"Priority Model",permalink:"/docs/priority-model"},next:{title:"Model Storage",permalink:"/docs/model-storage"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc. The detailed example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,o.kt)("p",null,"It illustrates that as for the defined ",(0,o.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_effect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"matchers"),", Casbin judges if the request can match the policy, or most importantly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," is root. Once the judgment is correct, the authorization then is allowed, and the user has permission to do everything.",(0,o.kt)("br",{parentName:"p"}),"\n","Just like the root of Linux systems, after the users are authorized as root, then we have the permissions to access all the files and settings. So if we want ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," to have the full access to the whole system, we can let it become the super admin, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," has the permission to do everything."))}m.isMDXComponent=!0}}]);