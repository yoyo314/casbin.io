"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8640],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),p=n(2466),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),x=v.tabGroupChoices,C=v.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],E=w[1],j=[],_=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=x[h];null!=P&&P!==T&&k.some((function(e){return e.value===P}))&&E(P)}var O=function(e){var t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==T&&(_(t),E(a),null!=h&&C(h,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var i,o=j.indexOf(e.currentTarget)-1;n=null!=(i=j[o])?i:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=["components"],p={id:"syntax-for-models",title:"Syntax for Models"},c=void 0,u={unversionedId:"syntax-for-models",id:"syntax-for-models",title:"Syntax for Models",description:"- A model CONF should have at least four sections: [requestdefinition], [policydefinition], [policy_effect], [matchers].",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/SyntaxForModels.mdx",sourceDirName:".",slug:"/syntax-for-models",permalink:"/ru/docs/syntax-for-models",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SyntaxForModels.mdx",tags:[],version:"current",frontMatter:{id:"syntax-for-models",title:"Syntax for Models"},sidebar:"docs",previous:{title:"Supported Models",permalink:"/ru/docs/supported-models"},next:{title:"Effector",permalink:"/ru/docs/effector"}},d={},m=[{value:"Request definition",id:"request-definition",level:2},{value:"Policy definition",id:"policy-definition",level:2},{value:"Matchers",id:"matchers",level:2},{value:"Multiple sections type",id:"multiple-sections-type",level:2},{value:"Special Grammer",id:"special-grammer",level:3},{value:"Expression evaluator",id:"expression-evaluator",level:3}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A model CONF should have at least four sections: ",(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition], [policy_definition], [policy_effect], [matchers]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a model uses RBAC, it should also add the ",(0,i.kt)("inlineCode",{parentName:"p"},"[role_definition]")," section.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A model CONF can contain comments. The comments start with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," will comment the rest of the line."))),(0,i.kt)("h2",{id:"request-definition"},"Request definition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[request_definition]")," is the definition for the access request. It defines the arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"e.Enforce(...)")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sub, obj, act")," represents the classic triple: accessing entity (Subject), accessed resource (Object) and the access method (Action). However, you can customize your own request form, like ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, act")," if you don't need to specify an particular resource, or ",(0,i.kt)("inlineCode",{parentName:"p"},"sub, sub2, obj, act")," if you somehow have two accessing entities."),(0,i.kt)("h2",{id:"policy-definition"},"Policy definition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[policy_definition]")," is the definition for the policy. It defines the meaning of the policy. For example, we have the following model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_definition]\np = sub, obj, act\np2 = sub, act\n")),(0,i.kt)("p",null,"And we have the following policy (if in a policy file)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, alice, data1, read\np2, bob, write-all-objects\n")),(0,i.kt)("p",null,"Each line in a policy is called a policy rule. Each policy rule starts with a ",(0,i.kt)("inlineCode",{parentName:"p"},"policy type"),", e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),". It is used to match the policy definition if there are multiple definitions. The above policy shows the following binding. The binding can be used in the matcher."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(alice, data1, read) -> (p.sub, p.obj, p.act)\n(bob, write-all-objects) -> (p2.sub, p2.act)\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The elements in a policy rule are always regarded as",(0,i.kt)("inlineCode",{parentName:"h5"},"string"),". If you have any question about this, please see the discussion at: ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/casbin/casbin/issues/113"},"https://github.com/casbin/casbin/issues/113")," :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h2",{parentName:"div",id:"policy-effect"},"Policy effect"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"[policy_effect]")," is the definition for the policy effect. It defines whether the access request should be approved if multiple policy rules match the request. For example, one rule permits and the other denies."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow))\n")),(0,i.kt)("p",{parentName:"div"},"The above policy effect means if there's any matched policy rule of ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", the final effect is ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," (aka allow-override). ",(0,i.kt)("inlineCode",{parentName:"p"},"p.eft")," is the effect for a policy, it can be ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),". It's optional and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),". So as we didn't specify it above, it uses the default value."),(0,i.kt)("p",{parentName:"div"},"Another example for policy effect is:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = !some(where (p.eft == deny))\n")),(0,i.kt)("p",{parentName:"div"},"It means if there's no matched policy rules of",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),", the final effect is ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," (aka deny-override). ",(0,i.kt)("inlineCode",{parentName:"p"},"some")," means: if there exists one matched policy rule. ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," means: all matched policy rules (not used here). The policy effect can even be connected with logic expressions:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[policy_effect]\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n")),(0,i.kt)("p",{parentName:"div"},"It means at least one matched policy rule of",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),", and there is no matched policy rule of",(0,i.kt)("inlineCode",{parentName:"p"},"deny"),". So in this way, both the allow and deny authorizations are supported, and the deny overrides."))),(0,i.kt)("p",null,"Although we designed the syntax of policy effect as above, the current implementations only use hard-coded policy effect, as we found there's no much need for that sort of flexibility. So for now, you must use one of the built-in policy effects instead of customizing your own one.\n:::"),(0,i.kt)("p",null,"The supported built-in policy effects are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Policy effect"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow))"),(0,i.kt)("td",{parentName:"tr",align:null},"allow-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"ACL, RBAC, etc."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"!some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"deny-override"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Deny-override"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"some(where (p.eft == allow)) && !some(where (p.eft == deny))"),(0,i.kt)("td",{parentName:"tr",align:null},"allow-and-deny"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Allow-and-deny"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"priority(p.eft) ","|","|"," deny"),(0,i.kt)("td",{parentName:"tr",align:null},"priority"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Priority"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subjectPriority(p.eft)"),(0,i.kt)("td",{parentName:"tr",align:null},"priority base on role"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/supported-models#examples"},"Subject-Priority"))))),(0,i.kt)("h2",{id:"matchers"},"Matchers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]")," is the definition for policy matchers. The matchers are expressions. It defines how the policy rules are evaluated against the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,"The above matcher is the simplest, it means that the subject, object and action in a request should match the ones in a policy rule."),(0,i.kt)("p",null,"You can use arithmetic like ",(0,i.kt)("inlineCode",{parentName:"p"},"+, -, *, /")," and logical operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"&&, ||, !")," in matchers."),(0,i.kt)("h2",{id:"multiple-sections-type"},"Multiple sections type"),(0,i.kt)("p",null,"If you need multiple policy definitions or multiple matcher, you can use like ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m2"),". In fact, all of the above four sections can use multiple types and the syntax is ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"+number, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"r2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e2"),". By default these four sections should correspond one to one. Such as your ",(0,i.kt)("inlineCode",{parentName:"p"},"r2")," will only use matcher ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," to match policies ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),"."),(0,i.kt)("p",null,"You can pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," as the first parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce")," method to specify the types, the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceContext")," is like this"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'EnforceContext{"r2","p2","e2","m2"}\ntype EnforceContext struct {\n    RType string\n    PType string\n    EType string\n    MType string\n}\n'))),(0,i.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const enforceContext = new EnforceContext('r2', 'p2', 'e2', 'm2');\nclass EnforceContext {\n  constructor(rType, pType, eType, mType) {\n    this.pType = pType;\n    this.eType = eType;\n    this.mType = mType;\n    this.rType = rType;\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'EnforceContext enforceContext = new EnforceContext("2");\npublic class EnforceContext {\n    private String pType;\n    private String eType;\n    private String mType;\n    private String rType;\n    public EnforceContext(String suffix) {\n      this.pType = "p" + suffix;\n      this.eType = "e" + suffix;\n      this.mType = "m" + suffix;\n      this.rType = "r" + suffix;\n    }\n}\n')))),(0,i.kt)("p",null,"Example usage, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_model.conf"},"model")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/multiple_policy_definitions_policy.csv"},"policy"),", the request is as follows"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nenforceContext := NewEnforceContext("2")\n// You can also specify a certain type individually\nenforceContext.EType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, struct{ Age int }{Age: 70}, "/data1", "read")     //false\ne.Enforce(enforceContext, struct{ Age int }{Age: 30}, "/data1", "read")     //true\n'))),(0,i.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2,p2,etc..\nconst enforceContext = new NewEnforceContext(\'2\');\n// You can also specify a certain type individually\nenforceContext.eType = "e"\n// Don\'t pass in EnforceContext,the default is r,p,e,m\ne.Enforce("alice", "data2", "read")     // true\n// pass in EnforceContext\ne.Enforce(enforceContext, {Age: 70}, "/data1", "read")      //false\ne.Enforce(enforceContext, {Age: 30}, "/data1", "read")      //true\n'))),(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Pass in a suffix as parameter to NewEnforceContext,such as 2 or 3 and it will create r2, p2, etc..\nEnforceContext enforceContext = new EnforceContext("2");\n// You can also specify a certain type individually\nenforceContext.seteType("e");\n// Don\'t pass in EnforceContext, the default is r, p, e, m\ne.enforce("alice", "data2", "read");  // true\n// Pass in EnforceContext\n// TestEvalRule is located in https://github.com/casbin/jcasbin/blob/master/src/test/java/org/casbin/jcasbin/main/AbacAPIUnitTest.java#L56\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 70), "/data1", "read"); // false\ne.enforce(enforceContext, new AbacAPIUnitTest.TestEvalRule("alice", 30), "/data1", "read"); // true\n')))),(0,i.kt)("h3",{id:"special-grammer"},"Special Grammer"),(0,i.kt)("p",null,"You could also use ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),", the only operator with a text name. This operator checks the right-hand side array to see if it contains a value that is equal to the left-side value. Equality is determined by the use of the == operator, and this library doesn't check types between the values. Any two values, when cast to interface{}, and can still be checked for equality with == will act as expected. Note that you can use a parameter for the array, but it must be an ",(0,i.kt)("inlineCode",{parentName:"p"},"[]interface{}"),"."),(0,i.kt)("p",null,"Also refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/rbac_model_matcher_using_in_op.conf"},"rbac_model_matcher_using_in_op"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget2_model.conf"},"keyget2_model")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/examples/keyget_model.conf"},"keyget_model")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj\n...\n[matchers]\nm = r.sub.Name in (r.obj.Admins)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.Enforce(Sub{Name: "alice"}, Obj{Name: "a book", Admins: []interface{}{"alice", "bob"}})\n')),(0,i.kt)("h3",{id:"expression-evaluator"},"Expression evaluator"),(0,i.kt)("p",null,"The matcher evaluation in Casbin is implemented by expression evaluators in each language. Casbin integrates their powers to provide the unified PERM language. Besides all the model syntax provided here, those expression evaluators may provide extra functionality, which may be not supported by another language or implementation. Use it at your own risk."),(0,i.kt)("p",null,"The expression evaluators used by each Casbin implementation are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Implementation"),(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Expression evaluator"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Golang"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knetic/govaluate"},"https://github.com/Knetic/govaluate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Java"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/killme2008/aviator"},"https://github.com/killme2008/aviator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/donmccurdy/expression-eval"},"https://github.com/donmccurdy/expression-eval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PHP-Casbin"),(0,i.kt)("td",{parentName:"tr",align:null},"PHP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/symfony/expression-language"},"https://github.com/symfony/expression-language"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PyCasbin"),(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/danthedeckie/simpleeval"},"https://github.com/danthedeckie/simpleeval"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin.NET"),(0,i.kt)("td",{parentName:"tr",align:null},"C#"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/davideicardi/DynamicExpresso"},"https://github.com/davideicardi/DynamicExpresso"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casbin4D"),(0,i.kt)("td",{parentName:"tr",align:null},"Delphi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"},"https://github.com/casbin4d/Casbin4D/tree/master/SourceCode/Common/Third%20Party/TExpressionParser"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-rs"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jonathandturner/rhai"},"https://github.com/jonathandturner/rhai"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"casbin-cpp"),(0,i.kt)("td",{parentName:"tr",align:null},"C++"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ArashPartow/exprtk"},"https://github.com/ArashPartow/exprtk"))))),(0,i.kt)("p",null,":::note If you encounter performance issue about Casbin, it's probably caused by the low efficiency of the expression evaluator. You can both send issue to Casbin or the expression evaluator directly for advice to speed up. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/benchmark"},"Benchmarks")," section for details. :::"))}h.isMDXComponent=!0}}]);