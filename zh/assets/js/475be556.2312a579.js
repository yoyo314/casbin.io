"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4708],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=m(a),s=r,b=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(b,o(o({ref:e},p),{},{components:a})):n.createElement(b,o({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return o}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function o(t){var e=t.children,a=t.hidden,o=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},5488:function(t,e,a){a.d(e,{Z:function(){return s}});var n=a(3117),r=a(7294),l=a(6010),o=a(2389),i=a(7392),u=a(7094),m=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(t){var e,a,o=t.lazy,c=t.block,s=t.defaultValue,b=t.values,h=t.groupId,g=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=b?b:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.l)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(e=null!=s?s:null==(a=k.find((function(t){return t.props.default})))?void 0:a.props.value)?e:k[0].props.value;if(null!==y&&!N.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,u.U)(),w=v.tabGroupChoices,O=v.setTabGroupChoices,x=(0,r.useState)(y),E=x[0],C=x[1],P=[],D=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=w[h];null!=T&&T!==E&&N.some((function(t){return t.value===T}))&&C(T)}var j=function(t){var e=t.currentTarget,a=P.indexOf(e),n=N[a].value;n!==E&&(D(e),C(n),null!=h&&O(h,String(n)))},M=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n,r=P.indexOf(t.currentTarget)+1;a=null!=(n=P[r])?n:P[0];break;case"ArrowLeft":var l,o=P.indexOf(t.currentTarget)-1;a=null!=(l=P[o])?l:P[P.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},N.map((function(t){var e=t.value,a=t.label,o=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(t){return P.push(t)},onKeyDown:M,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===e})}),null!=a?a:e)}))),o?(0,r.cloneElement)(k.filter((function(t){return t.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==E})}))))}function s(t){var e=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(e)},t))}},8235:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return s}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=a(5488),i=a(5162),u=["components"],m={id:"adopters",title:"Our Adopters"},p=void 0,d={unversionedId:"adopters",id:"adopters",title:"Our Adopters",description:"Direct integration",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Adopters.mdx",sourceDirName:".",slug:"/adopters",permalink:"/zh/docs/adopters",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Adopters.mdx",tags:[],version:"current",frontMatter:{id:"adopters",title:"Our Adopters"},sidebar:"docs",previous:{title:"IDE Plugins",permalink:"/zh/docs/ide-plugins"},next:{title:"Contributing",permalink:"/zh/docs/contributing"}},c={},s=[{value:"Direct integration",id:"direct-integration",level:2},{value:"Integration via plugin",id:"integration-via-plugin",level:2}],b={toc:s};function h(t){var e=t.components,a=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"direct-integration"},"Direct integration"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor"},"VMware Harbor")),(0,l.kt)("td",{parentName:"tr",align:null},"VMware's open source trusted cloud native registry project that stores, signs, and scans content."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor/blob/master/src/pkg/permission/evaluator/rbac/casbin.go#L24-L44"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/goharbor/harbor/blob/master/src/replication/dao/policy.go#L24-L26"},"Beego ORM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd"},"Intel RMD")),(0,l.kt)("td",{parentName:"tr",align:null},"Intel's resource management daemon."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/intel/rmd/blob/master/etc/rmd/acl/url/policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch"},"VMware Dispatch")),(0,l.kt)("td",{parentName:"tr",align:null},"A framework for deploying and managing serverless style applications."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers.go#L46-L55"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vmware/dispatch/blob/master/pkg/identity-manager/handlers_test.go#L35-L45"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive"},"Skydive")),(0,l.kt)("td",{parentName:"tr",align:null},"An open source real-time network topology and protocols analyzer."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive/blob/master/config/config.go#L136-L140"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/skydive-project/skydive/blob/master/rbac/policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress"},"Zenpress")),(0,l.kt)("td",{parentName:"tr",align:null},"A CMS system written in Golang."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress/blob/master/content/config/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/insionng/zenpress/blob/master/model/user.go#L53-L77"},"Gorm"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd"},"Argo CD")),(0,l.kt)("td",{parentName:"tr",align:null},"GitOps continuous delivery for Kubernetes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd/blob/master/util/rbac/model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/argoproj/argo-cd/blob/master/util/rbac/builtin-policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae"},"Muxi Cloud")),(0,l.kt)("td",{parentName:"tr",align:null},"PaaS of Muxi Cloud, an easier way to manage Kubernetes cluster."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae/blob/master/conf/casbinmodel.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/muxiyun/Mae/blob/master/pkg/casbin/initPolicy.go#L21-L95"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS"},"EngineerCMS")),(0,l.kt)("td",{parentName:"tr",align:null},"A CMS to manage knowledge for engineers."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS/blob/master/conf/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3xxx/EngineerCMS/blob/master/database/engineer.db"},"SQLite"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api"},"Cyber Auth API")),(0,l.kt)("td",{parentName:"tr",align:null},"A Golang authentication API project."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CyberlifeCN/cyber-auth-api/blob/master/conf/authz_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community"},"IRIS Community")),(0,l.kt)("td",{parentName:"tr",align:null},"Website for IRIS Community Activities."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community/blob/master/authz/authz_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/irisnet/iris-community/blob/master/authz/authz_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb"},"Metadata DB")),(0,l.kt)("td",{parentName:"tr",align:null},"BB archive metadata database."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Bnei-Baruch/mdb/blob/master/data/permissions_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/qilin.api"},"Qilin API")),(0,l.kt)("td",{parentName:"tr",align:null},"ProtocolONE's licenses managemen tool for game content."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/rbac/blob/master/model.go"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ProtocolONE/rbac/tree/master/conf"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron"},"Devtron Labs")),(0,l.kt)("td",{parentName:"tr",align:null},"Software Delivery Workflow For Kubernetes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron/blob/main/auth_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/devtron-labs/devtron/blob/main/internal/casbin/Adapter.go"},"Xorm")))))),(0,l.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/PantheonTechnologies/lighty-core"},"lighty.io")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenDaylight's solution for SDN controller."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/PantheonTechnologies/lighty-core/blob/6f2ceaae6a68e08c96d14d2fa8ee060ad9f61606/lighty-examples/lighty-controller-springboot-netconf/README.md#security"},"README")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"))))),(0,l.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd"},"Notadd")),(0,l.kt)("td",{parentName:"tr",align:null},"A micro-service development architecture based on Nest.js."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd/blob/e58d0a0cf5d691c3fe20170e94cdd8e2c627abd4/apps/nest-upms/src/casbin/rbac_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/notadd/notadd/blob/e58d0a0cf5d691c3fe20170e94cdd8e2c627abd4/apps/nest-upms/src/casbin/adapter.ts"},"DB adapter")))))),(0,l.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/EduScaled/dtrace"},"dtrace")),(0,l.kt)("td",{parentName:"tr",align:null},"EduScaled's tracing system."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/EduScaled/dtrace/commit/6e8d6b52ec2fa120e8ad63f84a4aecc3eae14c02"},"Commit")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,l.kt)("h2",{id:"integration-via-plugin"},"Integration via plugin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"Model"),(0,l.kt)("th",{parentName:"tr",align:null},"Policy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/docker/docker"},"Docker")),(0,l.kt)("td",{parentName:"tr",align:null},"The world's leading software container platform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin"},"casbin-authz-plugin")," (",(0,l.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins"},"recommended by Docker"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_model.conf"},".conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin-authz-plugin/blob/master/examples/basic_policy.csv"},".csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis"},"Gobis")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry"},"Orange"),"'s lightweight API Gateway written in go"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/tree/master/casbin"},"casbin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/model.go#L52-L65"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/orange-cloudfoundry/gobis-middlewares/blob/master/casbin/adapter.go#L46-L64"},"Request"))))))}h.isMDXComponent=!0}}]);