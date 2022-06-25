"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5676],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"api-overview",title:"API Overview"},s=void 0,c={unversionedId:"api-overview",id:"api-overview",title:"API Overview",description:"This overview only shows you how to use Casbin APIs and doesn't explain how Casbin is installed and how it works. You can find those tutorials here: installation of Casbin and how Casbin works. So, when you start reading this tutorial, we assume that you have fully installed and imported Casbin into your code.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/APIOverview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/zh/docs/api-overview",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/APIOverview.mdx",tags:[],version:"current",frontMatter:{id:"api-overview",title:"API Overview"},sidebar:"docs",previous:{title:"Cloud Native Middlewares",permalink:"/zh/docs/cloud-native"},next:{title:"Management API",permalink:"/zh/docs/management-api"}},p={},d=[{value:"Enforce API",id:"enforce-api",level:2},{value:"EnforceEx API",id:"enforceex-api",level:2},{value:"Management API",id:"management-api",level:2},{value:"Get API",id:"get-api",level:3},{value:"Add, Delete, Update API",id:"add-delete-update-api",level:3},{value:"RBAC API",id:"rbac-api",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This overview only shows you how to use Casbin APIs and doesn't explain how Casbin is installed and how it works. You can find those tutorials here: ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started"},"installation of Casbin")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"how Casbin works"),". So, when you start reading this tutorial, we assume that you have fully installed and imported Casbin into your code."),(0,o.kt)("h2",{id:"enforce-api"},"Enforce API"),(0,o.kt)("p",null,"Let's start at the Enforce APIs of Casbin. We will load a RBAC model from ",(0,o.kt)("inlineCode",{parentName:"p"},"model.conf"),", and load policies from ",(0,o.kt)("inlineCode",{parentName:"p"},"policy.csv"),". You can learn the Model syntax ",(0,o.kt)("a",{parentName:"p",href:"/docs/syntax-for-models"},"here"),", and we won't talk about it in this tutorial. We assume that you can understand the config files given below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"model.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"policy.csv")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"p, admin, data1, read\np, admin, data1, write\np, admin, data2, read\np, admin, data2, write\np, alice, data1, read\np, bob, data2, write\ng, amber, admin\ng, abc, admin\n")),(0,o.kt)("p",null,"After reading the config files, please read the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// load information from files\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    log.Fatalf("error, detail: %s", err)\n}\nok, err := enforcer.Enforce("alice", "data1", "read")\n')),(0,o.kt)("p",null,"This code loads the access control model and policies from local files. Function ",(0,o.kt)("inlineCode",{parentName:"p"},"casbin.NewEnforcer()")," will return an enforcer. It will recognize its 2 parameters as file paths, and load the files from there. Errors occurred in the process are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"err"),". This code used the default adapter to load model and policies. And of course you can get the same result by using a third-party adapter."),(0,o.kt)("p",null,"Code ",(0,o.kt)("inlineCode",{parentName:"p"},'ok, err := enforcer.Enforce("alice", "data1", "read")'),"  is to confirm access permissions. If alice can access the data1 with the operation read, the returned value ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", otherwise it'll be ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". In this example, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h2",{id:"enforceex-api"},"EnforceEx API"),(0,o.kt)("p",null,"Sometimes you may wonder which policy allowed the request, so we prepared the function ",(0,o.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),". You can use it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")\nfmt.Println(ok, reason) // true [admin data1 read]\n')),(0,o.kt)("p",null,"function ",(0,o.kt)("inlineCode",{parentName:"p"},"EnforceEx()")," will return the exact policy string in the return value ",(0,o.kt)("inlineCode",{parentName:"p"},"reason"),". In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"amber")," is a role of ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", so policy ",(0,o.kt)("inlineCode",{parentName:"p"},"p, admin, data1, read")," made this request ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The out put of this code is in the comment."),(0,o.kt)("p",null,"Casbin prepared a lot of APIs like this. Those APIs added some extra functions on the basic one. They are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ok, err := enforcer.EnforceWithMatcher(matcher, request)")),(0,o.kt)("p",{parentName:"li"},"With a matcher.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)")),(0,o.kt)("p",{parentName:"li"},"A combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"EnforceWithMatcher()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"boolArray, err := enforcer.BatchEnforce(requests)")),(0,o.kt)("p",{parentName:"li"},"Do a list job, returns an array."))),(0,o.kt)("p",null,"This is a simple use of Casbin. You can use Casbin to start an authorization server via these APIs. We will show you some other types of APIs in the next paragraphs."),(0,o.kt)("h2",{id:"management-api"},"Management API"),(0,o.kt)("h3",{id:"get-api"},"Get API"),(0,o.kt)("p",null,"These APIs are used to get exact objects in policies. This time we loaded an enforcer like the last example and get something from it."),(0,o.kt)("p",null,"Please read the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\nallSubjects := enforcer.GetAllSubjects()\nfmt.Println(allSubjects)\n')),(0,o.kt)("p",null,"Same as the last example, the first 4 lines loaded some necessary information from local files. We won't talk about that here anymore."),(0,o.kt)("p",null,"Code ",(0,o.kt)("inlineCode",{parentName:"p"},"allSubjects := enforcer.GetAllSubjects()")," got all the subjects in the policy file and returned them as an array. Then we printed that array."),(0,o.kt)("p",null,"Normally, the output of the code should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[admin alice bob]\n")),(0,o.kt)("p",null,"You can also change the function ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAllNamedSubjects()")," \uff0cto get the list of subjects that show up in the current named policy."),(0,o.kt)("p",null,"Similarly, we prepared ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll")," functions for ",(0,o.kt)("inlineCode",{parentName:"p"},"Objects, Actions, Roles"),". The only thing you need to do is to change the word ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," in the function name to what you want if you want to access those functions."),(0,o.kt)("p",null,"Besides, we have more getters for policies. The call method and return value are similar to those above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"policy = e.GetPolicy()")," gets all the authorization rules in the policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'filteredPolicy := e.GetFilteredPolicy(0, "alice")')," gets all the authorization rules in the policy, field filters can be specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'namedPolicy := e.GetNamedPolicy("p")')," gets all the authorization rules in the named policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")')," gets all the authorization rules in the named policy, field filters can be specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupingPolicy := e.GetGroupingPolicy()")," gets all the role inheritance rules in the policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")')," gets all the role inheritance rules in the policy, field filters can be specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetNamedGroupingPolicy("g")')," gets all the role inheritance rules in the policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")')," gets all the role inheritance rules in the policy.")),(0,o.kt)("h3",{id:"add-delete-update-api"},"Add, Delete, Update API"),(0,o.kt)("p",null,"Casbin prepared a lot of APIs for policies. These APIs allow you to add, delete or edit policies dynamically at runtime."),(0,o.kt)("p",null,"This code shows you how to add, remove and update your policies, and told you how to confirm that a policy exists:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// load information from files\nenforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n   fmt.Printf("Error, details: %s\\n", err)\n}\n\n// add a policy, then use HasPolicy() to confirm that\nenforcer.AddPolicy("added_user", "data1", "read")\nhasPolicy := enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // true, we added that policy successfully\n\n// remove a policy, then use HasPolicy() to confirm that\nenforcer.RemovePolicy("alice", "data1", "read")\nhasPolicy = enforcer.HasPolicy("alice", "data1", "read")\nfmt.Println(hasPolicy) // false, we deleted that policy successfully\n\n// update a policy, then use HasPolicy() to confirm that\nenforcer.UpdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // false, the origin policy has lapsed\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "write")\nfmt.Println(hasPolicy) // true, the new policy is in use\n')),(0,o.kt)("p",null,"Using these four kinds of APIs can edit your policies. Like these, we prepared same kinds of APIs to ",(0,o.kt)("inlineCode",{parentName:"p"},"FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy"),". To use them, you only need to replace word ",(0,o.kt)("inlineCode",{parentName:"p"},"Policy")," in the function name to the words above."),(0,o.kt)("p",null,"Besides, if you change parameters to arrays, you can batch edit you policies."),(0,o.kt)("p",null,"For example, to functions like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})\n')),(0,o.kt)("p",null,"if we change ",(0,o.kt)("inlineCode",{parentName:"p"},"Policy")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Policies"),", and edit the parameter to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})\n')),(0,o.kt)("p",null,"then we can batch edit these policies."),(0,o.kt)("p",null,"Same operations also useful to ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupingPolicy, NamedGroupingPolicy"),"."),(0,o.kt)("h2",{id:"rbac-api"},"RBAC API"),(0,o.kt)("p",null,"Casbin provided come APIs for you to modify the RBAC model and policies. If you are familiar with RBAC, you can use these APIs easily."),(0,o.kt)("p",null,"Here we only show you how to use RBAC APIs of Casbin and won't talk about RBAC itself. You can get more details ",(0,o.kt)("a",{parentName:"p",href:"/docs/rbac"},"here"),"."),(0,o.kt)("p",null,"We use this code to load model and policies just like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n')),(0,o.kt)("p",null,"then, use a instance of Enforcer ",(0,o.kt)("inlineCode",{parentName:"p"},"enforcer")," to access these APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := enforcer.GetRolesForUser("amber")\nfmt.Println(roles) // [admin]\nusers, err := enforcer.GetUsersForRole("admin")\nfmt.Println(users) // [amber abc]\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," returned an array that contained all roles contained amber. In this example, amber has only one role admin, so array ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"[admin]"),". And similarly, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"GetUsersForRole()")," to get users belongs to the role. The return value of this function is also an array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.HasRoleForUser("amber", "admin") // true\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"HasRoleForUser()")," to confirm whether the user belongs to the role. In this example, amber is a member of admin, so the return value of the function is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true\nenforcer.DeletePermission("data2", "write")\nfmt.Println(enforcer.Enforce("bob", "data2", "write")) // false\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"DeletePermission()")," to delete a permission."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true\nenforcer.DeletePermissionForUser("alice", "data1", "read")\nfmt.Println(enforcer.Enforce("alice", "data1", "read")) // false\n')),(0,o.kt)("p",null,"And use ",(0,o.kt)("inlineCode",{parentName:"p"},"DeletePermissionForUser()")," to delete a permission for a user."),(0,o.kt)("p",null,"Casbin have a lot of APIs like this. Their call methods and return values have the same style as the above APIs. You can find these APIs in ",(0,o.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"next documents"),"."))}m.isMDXComponent=!0}}]);