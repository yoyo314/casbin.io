"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5181],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),i=a(6010),r="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),i=a(7294),r=a(6010),l=a(2389),o=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a,l=e.lazy,c=e.block,h=e.defaultValue,d=e.values,b=e.groupId,f=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(w,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===h?h:null!=(t=null!=h?h:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),C=v.tabGroupChoices,y=v.setTabGroupChoices,P=(0,i.useState)(g),T=P[0],A=P[1],x=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var z=C[b];null!=z&&z!==T&&w.some((function(e){return e.value===z}))&&A(z)}var B=function(e){var t=e.currentTarget,a=x.indexOf(t),n=w[a].value;n!==T&&(j(t),A(n),null!=b&&y(b,String(n)))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,i=x.indexOf(e.currentTarget)+1;a=null!=(n=x[i])?n:x[0];break;case"ArrowLeft":var r,l=x.indexOf(e.currentTarget)-1;a=null!=(r=x[l])?r:x[x.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},f)},w.map((function(e){var t=e.value,a=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:B,onClick:B},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,l.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},4332:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=a(5488),o=a(5162),s=["components"],u={id:"tutorials",title:"\u4f7f\u7528\u6307\u5357"},p=void 0,m={unversionedId:"tutorials",id:"tutorials",title:"\u4f7f\u7528\u6307\u5357",description:"Before reading, please note that some tutorials are for the Casbin's model and work for all Casbin implementations in different languages. Some other tutorials are language-specific.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Tutorial.mdx",sourceDirName:".",slug:"/tutorials",permalink:"/zh/docs/tutorials",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Tutorial.mdx",tags:[],version:"current",frontMatter:{id:"tutorials",title:"\u4f7f\u7528\u6307\u5357"},sidebar:"docs",previous:{title:"\u5de5\u4f5c\u539f\u7406",permalink:"/zh/docs/how-it-works"},next:{title:"\u652f\u6301\u7684\u6a21\u578b",permalink:"/zh/docs/supported-models"}},c={},h=[{value:"Our Papers",id:"our-papers",level:3},{value:"\u89c6\u9891",id:"\u89c6\u9891",level:3},{value:"PERM\u5143\u6a21\u578b(\u7b56\u7565\u3001\u6548\u679c\u3001\u8bf7\u6c42\u3001\u5339\u914d\u5668)",id:"perm\u5143\u6a21\u578b\u7b56\u7565\u6548\u679c\u8bf7\u6c42\u5339\u914d\u5668",level:3},{value:"HTTP &amp; RESTful",id:"http--restful",level:3},{value:"\u76d1\u89c6\u5668",id:"\u76d1\u89c6\u5668",level:3},{value:"Beego",id:"beego",level:3},{value:"Gin",id:"gin",level:3},{value:"Echo",id:"echo",level:3},{value:"Iris",id:"iris",level:3},{value:"VMware Harbor",id:"vmware-harbor",level:3},{value:"Argo CD",id:"argo-cd",level:3},{value:"GShark",id:"gshark",level:3},{value:"SpringBoot",id:"springboot",level:3},{value:"Express",id:"express",level:3},{value:"Koa",id:"koa",level:3},{value:"Nest",id:"nest",level:3},{value:"Fastify",id:"fastify",level:3},{value:"Laravel",id:"laravel",level:3},{value:"APISIX",id:"apisix",level:3}],d={toc:h};function b(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before reading, please note that some tutorials are for the Casbin's model and work for all Casbin implementations in different languages. Some other tutorials are language-specific."),(0,r.kt)("h3",{id:"our-papers"},"Our Papers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1903.09756"},"PML: An Interpreter-Based Access Control Policy Language for Web Services"))),(0,r.kt)("p",null,"This paper digs deeply into the design details about Casbin. Please cite the following BibTex if you use Casbin/PML as a reference in your paper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{luo2019pml,\n  title={PML: An Interpreter-Based Access Control Policy Language for Web Services},\n  author={Luo, Yang and Shen, Qingni and Wu, Zhonghai},\n  journal={arXiv preprint arXiv:1903.09756},\n  year={2019}\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.jos.org.cn/1000-9825/5624.htm"},"\u4e00\u79cd\u57fa\u4e8e\u5143\u6a21\u578b\u7684\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\u63cf\u8ff0\u8bed\u8a00"))),(0,r.kt)("p",null,"This is another longer-version paper published in Journal of Software. The citation for different formats (Refworks, EndNote, etc.) can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://kns.cnki.net/kcms/detail/Detail.aspx?dbname=CJFDLAST2020&filename=RJXB202002012&v="},"(another version) Access Control Policy Specification Language Based on Metamodel (in Chinese)")),(0,r.kt)("h3",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OTT84oplR9o"},"A Secure Vault - implementing authorization middleware with Casbin - JuniorDevSG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Z5dUxH4PqYM"},"\u57fa\u4e8eCasbin\u7684\u5fae\u578b\u670d\u52a1\u67b6\u6784\u5206\u4eab\u7528\u6237\u6743\u9650(\u4fc4\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mWlPNrCgVdE"},"Nest.js - Casbin RESTful RBAC\u6388\u6743\u4e2d\u95f4\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1qz4y167XP"},"Gin \u6559\u7a0b \u7b2c10\u7ae0\uff1a30\u5206\u949f\u5185\u5b66\u4e60 Casbin \u57fa\u7840\u6a21\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV13r4y1M7AC"},"Gin \u6559\u7a0b\u7b2c11\u7ae0\uff1a\u7f16\u7801, API \u548cCasbin\u4e2d\u7684\u81ea\u5b9a\u4e49\u529f\u80fd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jtthink.com/course/132"},"Gin+Casbin\u6743\u9650\u5b9e\u6218\u901f\u5b66(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jtthink.com/course/play/2706"},"jCasbin \u57fa\u7840\uff1a\u4e00\u4e2a\u7b80\u5355\u7684RBAC\u793a\u4f8b(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Kf4y1U7iJ"},"\u57fa\u4e8eCasbin\u7684Golang RBAC\u6a21\u578b(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1bp4y1a7je"},"\u5b66\u4e60Gin + Casbin(1)\uff1a\u901a\u8def& \u6982\u8ff0(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1kz4y1Z7vd"},"ThinkPHP 5.1 + Casbin\uff1a\u5bfc\u8a00(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1A541187M4"},"ThinkPHP 5.1 + Casbin\uff1aRBAC\u6388\u6743 (\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1uk4y117up"},"ThinkPHP 5.1 + Casbin: RESTfull & \u4e2d\u95f4\u4ef6(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1dK4y1L7xy"},"PHP-Casbin \u5feb\u901f\u4e0a\u624b(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1dq4y1Z78g"},"ThinkPHP 5.1 + Casbin:How to use custom matching functions (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1X34y1Q7ZH"},"Webman\u5b9e\u6218\u6559\u7a0b\uff1a\u5982\u4f55\u4f7f\u7528casbin\u6743\u9650\u63a7\u5236 (\u4e2d\u6587)"))),(0,r.kt)("h3",{id:"perm\u5143\u6a21\u578b\u7b56\u7565\u6548\u679c\u8bf7\u6c42\u5339\u914d\u5668"},"PERM\u5143\u6a21\u578b(\u7b56\u7565\u3001\u6548\u679c\u3001\u8bf7\u6c42\u3001\u5339\u914d\u5668)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/wesionary-team/understanding-casbin-with-different-access-control-model-configurations-faebc60f6da5"},"Understanding Casbin with different Access Control Model Configurations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.narendraj9.dev/posts/generalized-authz.html"},"\u5229\u7528Casbin\u7684PERM\u6a21\u578b\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/silo-blog/designing-a-flexible-permissions-system-with-casbin-f5d97fef17b8"},"\u4f7f\u7528 Casbin \u8bbe\u8ba1\u4e00\u4e2a\u7075\u6d3b\u7684\u6743\u9650\u7cfb\u7edf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/pragmatic-programmers/authorize-with-access-control-lists-92fbec57a920"},"\u6388\u6743\u8bbf\u95ee\u63a7\u5236\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vrgl.ir/npwoy"},"\u4f7f\u7528PERM\u548cCasbin\u7684\u8bbf\u95ee\u63a7\u5236(\u6ce2\u65af\u8bed)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://habr.com/ru/post/539778/"},"RBAC? ABAC? .. PERM! New Way of Authorization for Cloud-Based Web Services and Apps (in Russian)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://habr.com/ru/post/540454/"},"\u7ec3\u4e60 & \u4f7f\u7528 Casbin & PERM \u7684\u7075\u6d3b\u6388\u6743\u5b9e\u4f8b (\u4fc4\u8bed)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.cnblogs.com/wang_yb/archive/2018/11/20/9987397.html"},"Casbin\u6743\u9650\u7ba1\u7406\uff08\u4e2d\u6587\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/xiaohunshi/p/10372881.html"},"Casbin\u5206\u6790\uff08\u4e2d\u6587\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xizhibei/blog/issues/101"},"\u7cfb\u7edf\u6743\u9650\u8bbe\u8ba1\uff08\u4e2d\u6587\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xizhibei/blog/issues/102"},"Casbin\uff1a\u4e00\u4e2a\u6743\u9650\u5f15\u64ce(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/studyzy/p/11380736.html"},"\u4f7f\u7528 Casbin \u5b9e\u73b0ABAC (\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/yjf512/p/12200206.html"},"Casbin \u6e90\u4ee3\u7801\u5206\u6790(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1534674"},"Casbin \u7684\u6743\u9650\u8bc4\u4f30(\u4e2d\u6587)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.im/post/5ee6c93ce51d45787d3484a1"},"Casbin\uff1aGo\u4eca\u65e5\u7684\u5e93(\u4e2d\u6587)"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"http--restful"},"HTTP & RESTful"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zupzup.org/casbin-http-role-auth"}," \u5728Go\u4e2d\u4f7f\u7528 Casbin \u5b9e\u73b0\u57fa\u7840\u7684\u57fa\u4e8e\u89d2\u8272\u7684 HTTP \u6388\u6743")," (\u6216 ",(0,r.kt)("a",{parentName:"li",href:"https://studygolang.com/articles/12323"},"\u4e2d\u6587\u7ffb\u8bd1"),")")),(0,r.kt)("h3",{id:"\u76d1\u89c6\u5668"},"\u76d1\u89c6\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hongker.github.io/2021/02/19/golang-rbac-watcher/"},"RBAC \u901a\u8fc7Casbin Watcher\u5206\u53d1\u540c\u6b65(\u4e2d\u6587)"))),(0,r.kt)("h3",{id:"beego"},"Beego"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78460385"},"Using Casbin with Beego: 1. Get started and test (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78571240"},"Using Casbin with Beego: 2. Policy storage (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/78992250"},"Using Casbin with Beego: 3. Policy query (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/80032538"},"Using Casbin with Beego: 4. Policy update (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hotqin888/article/details/80092285"},"Using Casbin with Beego: 5. Policy update (continued) (in Chinese)"))),(0,r.kt)("h3",{id:"gin"},"Gin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/wesionary-team/authorization-in-golang-projects-using-casbin-f8fad744dae5"},"Authorization in Golang Projects using Casbin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/maxwellhertz/tutorial-integrate-gin-with-cabsin-56m0"},"\u6559\u7a0b\uff1aGin\u4e0eCasbin\u96c6\u6210")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://banzaicloud.com/blog/policy-enforcement-k8s/"},"\u5e26Pipeline\u7684 K8s \u4e0a\u7684\u7b56\u7565\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@tienbm90/authentication-and-authorization-in-gin-application-with-jwt-and-casbin-a56bbbdec90b"},"\u4f7f\u7528 JWT \u548c Casbin \u5728Gin \u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studygolang.com/topics/6998"},"Backend API with Go: 1. Authentication based on JWT (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studygolang.com/topics/6999"},"Backend API with Go: 2. Authorization based on Casbin (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zaneli.com/blog/20181203"},"\u5728Gin\u548cGORM\u4f7f\u7528Go\u7684\u6388\u6743\u5e93Casbin\uff08\u65e5\u8bed\uff09"))),(0,r.kt)("h3",{id:"echo"},"Echo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://klotzandrew.com/blog/authorization-with-casbin"},"Casbin \u7f51\u7edc\u6388\u6743"))),(0,r.kt)("h3",{id:"iris"},"Iris"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zxc0328.github.io/2018/05/14/casbin-iris/"},"Iris + Casbin: Practice for permission management (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studyiris.com/example/exper/casbin.html"},"\u57fa\u4e8eCasbin\u7684HTTP\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff08\u4e2d\u6587\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learnku.com/articles/41416"},"\u4ece\u5934\u5b66\u4e60 iris + Casbin"))),(0,r.kt)("h3",{id:"vmware-harbor"},"VMware Harbor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.growingdev.com/articles/2020/01/12/1578838858526.html"},"Casbin: Golang access control framework (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.growingdev.com/articles/2020/01/10/1578670203670.html"},"Harbor \u8bbf\u95ee\u63a7\u5236 (\u4e2d\u6587)"))),(0,r.kt)("h3",{id:"argo-cd"},"Argo CD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/rbac/"},"Argo CD \u4e2d\u4f7f\u7528 Casbin \u5efa\u7acb RBAC \u6743\u9650\u4f53\u7cfb"))),(0,r.kt)("h3",{id:"gshark"},"GShark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s?__biz=MzI3MjA3MTY3Mw==&mid=2247483770&idx=1&sn=9f02c2803e1c946e8c23b16ff3eba757&chksm=eb396fecdc4ee6fa2f378e846f354f45acf6e6f540cfd54190e9353df47c7707e3a2aadf714f&token=115330850&lang=zh_CN#rd"},"GShark\uff1a\u8f7b\u677e\u6709\u6548\u5730\u626b\u63cfGithub\u4e2d\u7684\u654f\u611f\u4fe1\u606f")))),(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("h3",{id:"springboot"},"SpringBoot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/waynelee0809/article/details/85702551"},"jCasbin: a more light-weight permission management solution (in Chinese)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.jfinal.com/share/842"},"JCasbin\u4e0eJFinal\u7684\u96c6\u6210\uff08\u4e2d\u6587\uff09")))),(0,r.kt)(o.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("h3",{id:"express"},"Express"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/matttyler/how-to-add-role-based-access-control-to-your-serverless-http-api-on-aws-17bk"},"\u5982\u4f55\u5c06\u57fa\u4e8e\u89d2\u8272\u8bbf\u95ee\u63a7\u5236\u6dfb\u52a0\u5230\u60a8\u7684AWS\u4e0a\u7684\u670d\u52a1\u5668"))),(0,r.kt)("h3",{id:"koa"},"Koa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/gerybbg/authorisation-with-casbin-and-koa-part-1-2gh"},"Authorisation with Casbin and Koa Part 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/gerybbg/authorisation-with-casbin-and-koa-part-2-2io5"},"Casbin and Koa\u6388\u6743 Part 2"))),(0,r.kt)("h3",{id:"nest"},"Nest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/dwipr/how-to-create-role-based-authorization-middleware-with-casbin-and-nest-js-52gm"},"How to Create Role based Authorization Middleware with Casbin and Nest.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mWlPNrCgVdE"},"nest.js\uff1aCasbin RESTful RBAC\u6388\u6743\u63d2\u4ef6\uff08\u89c6\u9891\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Jarvie8176/casbin-example"},"\u57fa\u4e8e Casbin \u7684 Node.js \u57fa\u4e8e\u5c5e\u6027\u7684\u8bbf\u95ee\u63a7\u5236\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/juicycleff/ultimate-backend"},"\u591a\u79df\u6237SaaS \u542f\u52a8\u5de5\u5177\u5305\uff0c\u5e26\u6709cqrs graphql microservice \u67b6\u6784"))),(0,r.kt)("h3",{id:"fastify"},"Fastify"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nearform.com/blog/access-control-node-js-fastify-and-casbin/"},"\u4f7f\u7528 Fastify \u548c Casbin \u5728 Node.js \u4e2d\u7684\u8bbf\u95ee\u63a7\u5236")))),(0,r.kt)(o.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://phpmagazine.net/2018/11/casbin-powerful-and-efficient-acl-for-your-projects.html"},"Casbin, \u60a8\u7684\u9879\u76ee\u4e2d\u5f3a\u5927\u548c\u9ad8\u6548\u7684 ACL"))),(0,r.kt)("h3",{id:"laravel"},"Laravel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developpaper.com/laravel-authorization-authorization-library-supporting-acl-rbac-abac-and-other-models/"},"Laravel\u6388\u6743\uff1a\u652f\u6301ACL\u3001RBAC\u3001ABAC\u548c\u5176\u4ed6\u6a21\u578b\u7684\u6388\u6743\u5e93")))),(0,r.kt)(o.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://krishnamohan.dev/blog/using-casbin-for-authorization-in-dotnet"},"\u5728 .Net \u4e2d\u4f7f\u7528 Casbin \u6388\u6743")))),(0,r.kt)(o.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.zupzup.org/rust-casbin-example/"},"Basic Role-Based HTTP Authorization in Rust with Casbin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/smrpn/how-to-use-casbin-authorization-in-your-rust-web-app-part-1-4f8f"},"\u5982\u4f55\u5728\u60a8\u7684rust web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528cassbin \u6388\u6743 [Part - 1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/smrpn/how-to-use-casbin-authorization-in-your-rust-web-app-part-2-1bnm"},"\u5982\u4f55\u5728\u60a8\u7684rust web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528casbin \u6388\u6743 [Part - 2]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'</TabItem>\n<TabItem value="Lua" label="Lua">\n')),(0,r.kt)("h3",{id:"apisix"},"APISIX"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@rushitote/authorization-in-apisix-using-casbin-59b693669d6d"},"Authorization in APISIX using Casbin"))))))}b.isMDXComponent=!0}}]);