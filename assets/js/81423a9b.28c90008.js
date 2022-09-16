"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3524],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||r;return a?i.createElement(d,l(l({ref:t},u),{},{components:a})):i.createElement(d,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={id:"tutorials",title:"Tutorials",description:"Casbin Tutorials",keywords:["tutorials"]},l=void 0,o={unversionedId:"tutorials",id:"tutorials",title:"Tutorials",description:"Casbin Tutorials",source:"@site/docs/Tutorial.mdx",sourceDirName:".",slug:"/tutorials",permalink:"/docs/tutorials",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Tutorial.mdx",tags:[],version:"current",frontMatter:{id:"tutorials",title:"Tutorials",description:"Casbin Tutorials",keywords:["tutorials"]},sidebar:"docs",previous:{title:"How it Works",permalink:"/docs/how-it-works"},next:{title:"Model",permalink:"/docs/category/model"}},s={},p=[{value:"Our Papers",id:"our-papers",level:3},{value:"Videos",id:"videos",level:3},{value:"PERM Meta-Model (Policy, Effect, Request, Matchers)",id:"perm-meta-model-policy-effect-request-matchers",level:3},{value:"HTTP &amp; RESTful",id:"http--restful",level:3},{value:"Watcher",id:"watcher",level:3},{value:"Beego",id:"beego",level:3},{value:"Gin",id:"gin",level:3},{value:"Echo",id:"echo",level:3},{value:"Iris",id:"iris",level:3},{value:"VMware Harbor",id:"vmware-harbor",level:3},{value:"Argo CD",id:"argo-cd",level:3},{value:"GShark",id:"gshark",level:3},{value:"SpringBoot",id:"springboot",level:3},{value:"Express",id:"express",level:3},{value:"Koa",id:"koa",level:3},{value:"Nest",id:"nest",level:3},{value:"Fastify",id:"fastify",level:3},{value:"Laravel",id:"laravel",level:3},{value:"APISIX",id:"apisix",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=u("Tabs"),m=u("TabItem"),c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before reading, please note that some tutorials are for the Casbin's model and work for all Casbin implementations in different languages. Some other tutorials are language-specific."),(0,n.kt)("h3",{id:"our-papers"},"Our Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1903.09756"},"PML: An Interpreter-Based Access Control Policy Language for Web Services"))),(0,n.kt)("p",null,"This paper digs deeply into the design details about Casbin. Please cite the following BibTex if you use Casbin/PML as a reference in your paper:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{luo2019pml,\n  title={PML: An Interpreter-Based Access Control Policy Language for Web Services},\n  author={Luo, Yang and Shen, Qingni and Wu, Zhonghai},\n  journal={arXiv preprint arXiv:1903.09756},\n  year={2019}\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.jos.org.cn/1000-9825/5624.htm"},"Access Control Policy Specification Language Based on Metamodel (in Chinese)"))),(0,n.kt)("p",null,"This is another longer-version paper published in Journal of Software. The citation for different formats (Refworks, EndNote, etc.) can be found at: ",(0,n.kt)("a",{parentName:"p",href:"https://kns.cnki.net/kcms/detail/Detail.aspx?dbname=CJFDLAST2020&filename=RJXB202002012&v="},"(another version) Access Control Policy Specification Language Based on Metamodel (in Chinese)")),(0,n.kt)("h3",{id:"videos"},"Videos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OTT84oplR9o"},"A Secure Vault - implementing authorization middleware with Casbin - JuniorDevSG")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Z5dUxH4PqYM"},"Sharing user permissions in a micro-service architecture based on Casbin (in Russian)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mWlPNrCgVdE"},"Nest.js - Casbin RESTful RBAC authorization midleware")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1qz4y167XP"},"Gin Tutorial Chapter 10: Learn Casbin basic models in 30 minutes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV13r4y1M7AC"},"Gin Tutorial Chapter 11: Coding, API and custom function in Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jtthink.com/course/132"},"Gin + Casbin: Learning Permissions in Action (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jtthink.com/course/play/2706"},"jCasbin Basics: A simple RBAC example (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Kf4y1U7iJ"},"Golang's RBAC based on Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1bp4y1a7je"},"Learning Gin + Casbin (1): Opening & Overview (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1kz4y1Z7vd"},"ThinkPHP 5.1 + Casbin: Introduction (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1A541187M4"},"ThinkPHP 5.1 + Casbin: RBAC authorization (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1uk4y117up"},"ThinkPHP 5.1 + Casbin: RESTful & Middleware (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1dK4y1L7xy"},"Quick Start for PHP-Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1dq4y1Z78g"},"ThinkPHP 5.1 + Casbin:How to use custom matching functions (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1X34y1Q7ZH"},"Webman + Casbin: How to use Webman Casbin Plugin  (in Chinese)"))),(0,n.kt)("h3",{id:"perm-meta-model-policy-effect-request-matchers"},"PERM Meta-Model (Policy, Effect, Request, Matchers)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/wesionary-team/understanding-casbin-with-different-access-control-model-configurations-faebc60f6da5"},"Understanding Casbin with different Access Control Model Configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.narendraj9.dev/posts/generalized-authz.html"},"Modeling Authorization with PERM in Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/silo-blog/designing-a-flexible-permissions-system-with-casbin-f5d97fef17b8"},"Designing a Flexible Permissions System with Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/pragmatic-programmers/authorize-with-access-control-lists-92fbec57a920"},"Authorize with Access Control Lists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vrgl.ir/npwoy"},"Access control with PERM and Casbin (in Persian)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://habr.com/ru/post/539778/"},"RBAC? ABAC? .. PERM! New Way of Authorization for Cloud-Based Web Services and Apps (in Russian)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://habr.com/ru/post/540454/"},"Practice & Examples of Flexible Authorization Using Casbin & PERM (in Russian)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.cnblogs.com/wang_yb/archive/2018/11/20/9987397.html"},"Permission management with Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/xiaohunshi/p/10372881.html"},"Analysis of Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xizhibei/blog/issues/101"},"Design of System Permissions (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xizhibei/blog/issues/102"},"Casbin: A Permission Engine (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/studyzy/p/11380736.html"},"Implementing ABAC with Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/yjf512/p/12200206.html"},"Source code analysis of Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1534674"},"Permission evaluation with Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://juejin.im/post/5ee6c93ce51d45787d3484a1"},"Casbin: Library of the day for Go (in Chinese)"))),(0,n.kt)(h,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("h3",{id:"http--restful"},"HTTP & RESTful"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zupzup.org/casbin-http-role-auth"},"Basic Role-Based HTTP Authorization in Go with Casbin")," (or ",(0,n.kt)("a",{parentName:"li",href:"https://studygolang.com/articles/12323"},"Chinese translation"),")")),(0,n.kt)("h3",{id:"watcher"},"Watcher"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hongker.github.io/2021/02/19/golang-rbac-watcher/"},"RBAC Distributed Synchronization via Casbin Watcher (in Chinese)"))),(0,n.kt)("h3",{id:"beego"},"Beego"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78460385"},"Using Casbin with Beego: 1. Get started and test (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78571240"},"Using Casbin with Beego: 2. Policy storage (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78992250"},"Using Casbin with Beego: 3. Policy query (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/80032538"},"Using Casbin with Beego: 4. Policy update (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/80092285"},"Using Casbin with Beego: 5. Policy update (continued) (in Chinese)"))),(0,n.kt)("h3",{id:"gin"},"Gin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/wesionary-team/authorization-in-golang-projects-using-casbin-f8fad744dae5"},"Authorization in Golang Projects using Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/maxwellhertz/tutorial-integrate-gin-with-cabsin-56m0"},"Tutorial: Integrate Gin with Cabsin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://banzaicloud.com/blog/policy-enforcement-k8s/"},"Policy enforcements on K8s with Pipeline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@tienbm90/authentication-and-authorization-in-gin-application-with-jwt-and-casbin-a56bbbdec90b"},"Authentication and authorization in Gin application with JWT and Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://studygolang.com/topics/6998"},"Backend API with Go: 1. Authentication based on JWT (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://studygolang.com/topics/6999"},"Backend API with Go: 2. Authorization based on Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zaneli.com/blog/20181203"},"Using Go's authorization library Casbin with Gin and GORM (in Japanese)"))),(0,n.kt)("h3",{id:"echo"},"Echo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://klotzandrew.com/blog/authorization-with-casbin"},"Web authorization with Casbin"))),(0,n.kt)("h3",{id:"iris"},"Iris"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zxc0328.github.io/2018/05/14/casbin-iris/"},"Iris + Casbin: Practice for permission management (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://studyiris.com/example/exper/casbin.html"},"Role-based access control for HTTP based on Casbin (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learnku.com/articles/41416"},"Learning iris + Casbin from scratch"))),(0,n.kt)("h3",{id:"vmware-harbor"},"VMware Harbor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.growingdev.com/articles/2020/01/12/1578838858526.html"},"Casbin: Golang access control framework (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.growingdev.com/articles/2020/01/10/1578670203670.html"},"Access control in Harbor (in Chinese)"))),(0,n.kt)("h3",{id:"argo-cd"},"Argo CD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/rbac/"},"Organizational RBAC in Argo CD with Casbin"))),(0,n.kt)("h3",{id:"gshark"},"GShark"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s?__biz=MzI3MjA3MTY3Mw==&mid=2247483770&idx=1&sn=9f02c2803e1c946e8c23b16ff3eba757&chksm=eb396fecdc4ee6fa2f378e846f354f45acf6e6f540cfd54190e9353df47c7707e3a2aadf714f&token=115330850&lang=zh_CN#rd"},"GShark: Scan for sensitive information in Github easily and effectively (in Chinese)")))),(0,n.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("h3",{id:"springboot"},"SpringBoot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/waynelee0809/article/details/85702551"},"jCasbin: a more light-weight permission management solution (in Chinese)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.jfinal.com/share/842"},"Integrating jCasbin with JFinal (in Chinese)")))),(0,n.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("h3",{id:"express"},"Express"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/matttyler/how-to-add-role-based-access-control-to-your-serverless-http-api-on-aws-17bk"},"How to Add Role-Based-Access-Control to Your Serverless HTTP API on AWS"))),(0,n.kt)("h3",{id:"koa"},"Koa"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/gerybbg/authorisation-with-casbin-and-koa-part-1-2gh"},"Authorisation with Casbin and Koa Part 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/gerybbg/authorisation-with-casbin-and-koa-part-2-2io5"},"Authorisation with Casbin and Koa Part 2"))),(0,n.kt)("h3",{id:"nest"},"Nest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/dwipr/how-to-create-role-based-authorization-middleware-with-casbin-and-nest-js-52gm"},"How to Create Role based Authorization Middleware with Casbin and Nest.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mWlPNrCgVdE"},"nest.js: Casbin RESTful RBAC authorization middleware (Video)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Jarvie8176/casbin-example"},"A Demo App of Attribute-based Access Control in Node.js Based on Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juicycleff/ultimate-backend"},"Multi tenant SaaS starter kit with cqrs graphql microservice architecture"))),(0,n.kt)("h3",{id:"fastify"},"Fastify"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nearform.com/blog/access-control-node-js-fastify-and-casbin/"},"Access Control in Node.js with Fastify and Casbin")))),(0,n.kt)(m,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://phpmagazine.net/2018/11/casbin-powerful-and-efficient-acl-for-your-projects.html"},"Casbin, Powerful and Efficient ACL for Your Projects"))),(0,n.kt)("h3",{id:"laravel"},"Laravel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developpaper.com/laravel-authorization-authorization-library-supporting-acl-rbac-abac-and-other-models/"},"Laravel authorization: authorization library supporting ACL, RBAC, ABAC and other models")))),(0,n.kt)(m,{value:".NET",label:".NET",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://krishnamohan.dev/blog/using-casbin-for-authorization-in-dotnet"},"Using Casbin for authorization in dotnet")))),(0,n.kt)(m,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zupzup.org/rust-casbin-example/"},"Basic Role-Based HTTP Authorization in Rust with Casbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/smrpn/how-to-use-casbin-authorization-in-your-rust-web-app-part-1-4f8f"},"How to use casbin authorization in your rust web-app [Part - 1]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/smrpn/how-to-use-casbin-authorization-in-your-rust-web-app-part-2-1bnm"},"How to use casbin authorization in your rust web-app [Part - 2]"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'</TabItem>\n<TabItem value="Lua" label="Lua">\n')),(0,n.kt)("h3",{id:"apisix"},"APISIX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@rushitote/authorization-in-apisix-using-casbin-59b693669d6d"},"Authorization in APISIX using Casbin"))))))}d.isMDXComponent=!0}}]);