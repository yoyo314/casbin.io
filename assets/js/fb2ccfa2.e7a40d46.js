"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6123],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),g=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=g(n),c=a,m=d["".concat(u,".").concat(c)]||d[c]||p[c]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),a=n(7294),l=n(6010),o=n(2389),i=n(7392),u=n(7094),g=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,c=e.defaultValue,m=e.values,f=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,E=y.setTabGroupChoices,L=(0,a.useState)(N),S=L[0],x=L[1],P=[],C=(0,g.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=w[f];null!=T&&T!==S&&k.some((function(e){return e.value===T}))&&x(T)}var O=function(e){var t=e.currentTarget,n=P.indexOf(t),r=k[n].value;r!==S&&(C(t),x(r),null!=f&&E(f,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;n=null!=(l=P[o])?l:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return g},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=n(5488),i=n(5162),u=["components"],g={id:"log-error",title:"Log & Error Handling"},s=void 0,p={unversionedId:"log-error",id:"log-error",title:"Log & Error Handling",description:"Logging",source:"@site/docs/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/docs/log-error",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/LogError.mdx",tags:[],version:"current",frontMatter:{id:"log-error",title:"Log & Error Handling"},sidebar:"docs",previous:{title:"Casbin Service",permalink:"/docs/service"},next:{title:"Frontend Usage",permalink:"/docs/frontend"}},d={},c=[{value:"Logging",id:"logging",level:2},{value:"Use different logger for different enforcer",id:"use-different-logger-for-different-enforcer",level:3},{value:"Supported loggers",id:"supported-loggers",level:4},{value:"How to write a logger",id:"how-to-write-a-logger",level:4},{value:"Error handling",id:"error-handling",level:2},{value:"Enable &amp; disable",id:"enable--disable",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("p",null,"Casbin uses the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," to print logs to console by default like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,l.kt)("p",null,"The logging is not enabled by default. You can toggle it via ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," or the last parameter of ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We already support logging the model, enforce request, role, policy in Golang. You can define your own log for logging Casbin.\nIf you are using Python, pycasbin leverages the default Python logging mechanism. The pycasbin package makes a call to logging.getLogger() to set the logger. No special logging configuration is needed other than initializing the logger in the parent application. If no logging is intitilized within the parent application you will not see any log messages from pycasbin. "))),(0,l.kt)("h3",{id:"use-different-logger-for-different-enforcer"},"Use different logger for different enforcer"),(0,l.kt)("p",null,"Every enforcer could have its own logger to log info, and it could be changed at run-time."),(0,l.kt)("p",null,"And you could use a proper logger via the last paramter of ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),", if you using this way to initialize your enforcer, you needn't use the enabled parameter, cause the priority of the enabled field in logger is higher."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// Set a default logger as enforcer e1's logger.\n// This operation could also be seen as changing the logger of e1 at run-time.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// Set another logger as enforcer e2's logger.\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initialize enforcer e3.\ne3, _ := casbin.NewEnforcer(\"examples/rbac_model.conf\", a, logger)\n")),(0,l.kt)("h4",{id:"supported-loggers"},"Supported loggers"),(0,l.kt)("p",null,"We provide some loggers to help you log information."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Logger"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"Defatule logger (built-in)")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"The default logger using golang log.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap logger")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Using ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", provide json encoded log and you could customize more with your own zap-logger."))))),(0,l.kt)(i.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Logger"),(0,l.kt)("th",{parentName:"tr",align:null},"Author"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"psr3-bridge logger")),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides a ",(0,l.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3")," compliant bridge.")))))),(0,l.kt)("h4",{id:"how-to-write-a-logger"},"How to write a logger"),(0,l.kt)("p",null,"Your logger should implement the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger")," interface."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Control whether print the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the current logger's enabled status.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Log info related to model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Log info related to enforce.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Log info related to role.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,l.kt)("td",{parentName:"tr",align:null},"Log info related to policy.")))),(0,l.kt)("p",null,"You can pass your custom ",(0,l.kt)("inlineCode",{parentName:"p"},"logger")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"."),(0,l.kt)("p",null,"Here is an example about how to customize a logger for Golang:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger is the implementation for a Logger using golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n\n')),(0,l.kt)("h2",{id:"error-handling"},"Error handling"),(0,l.kt)("p",null,"Error or panic may happen when you use Casbin for reasons like:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Invalid syntax in model file (.conf)."),(0,l.kt)("li",{parentName:"ol"},"Invalid syntax in policy file (.csv)."),(0,l.kt)("li",{parentName:"ol"},"Custom error from storage adapters, e.g., MySQL fails to connect."),(0,l.kt)("li",{parentName:"ol"},"Casbin's bug.")),(0,l.kt)("p",null,"There are five main functions you may need to care about for error or panic:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Behavior on error"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,l.kt)("td",{parentName:"tr",align:null},"Return error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,l.kt)("td",{parentName:"tr",align:null},"Return error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,l.kt)("td",{parentName:"tr",align:null},"Return error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,l.kt)("td",{parentName:"tr",align:null},"Return error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,l.kt)("td",{parentName:"tr",align:null},"Return error")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," calls ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadModel()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," inside. So you don't have to call the latter two calls when using ",(0,l.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."))),(0,l.kt)("h2",{id:"enable--disable"},"Enable & disable"),(0,l.kt)("p",null,"The enforcer can be disabled via the ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()")," function. When it's disabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," will always return ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". Other operations like adding or removing policy is not affected. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// Will return false.\n// By default, the enforcer is enabled.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at run-time.\ne.EnableEnforce(false)\n\n// Will return true for any request.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Enable the enforcer again.\ne.EnableEnforce(true)\n\n// Will return false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}f.isMDXComponent=!0}}]);