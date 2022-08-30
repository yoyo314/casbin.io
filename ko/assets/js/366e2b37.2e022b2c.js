"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(g,".").concat(c)]||u[c]||s[c]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"log-error",title:"Log & Error Handling",description:"Casbin log & error handling",keywords:["log","error","error handling"]},l=void 0,i={unversionedId:"log-error",id:"log-error",title:"Log & Error Handling",description:"Casbin log & error handling",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/LogError.mdx",sourceDirName:".",slug:"/log-error",permalink:"/ko/docs/log-error",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"log-error",title:"Log & Error Handling",description:"Casbin log & error handling",keywords:["log","error","error handling"]},sidebar:"docs",previous:{title:"Casbin \uc11c\ube44\uc2a4",permalink:"/ko/docs/service"},next:{title:"Frontend Usage",permalink:"/ko/docs/frontend"}},g={},p=[{value:"Logging",id:"logging",level:2},{value:"Use different logger for different enforcer",id:"use-different-logger-for-different-enforcer",level:3},{value:"Supported loggers",id:"supported-loggers",level:4},{value:"How to write a logger",id:"how-to-write-a-logger",level:4},{value:"Error handling",id:"error-handling",level:2},{value:"Enable &amp; disable",id:"enable--disable",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=d("Tabs"),u=d("TabItem"),c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Casbin uses the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," to print logs to console by default like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2017/07/15 19:43:56 [Request: alice, data1, read ---\x3e true]\n")),(0,a.kt)("p",null,"The logging is not enabled by default. You can toggle it via ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableLog()")," or the last parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We already support logging the model, enforce request, role, policy in Golang. You can define your own log for logging Casbin. If you are using Python, pycasbin leverages the default Python logging mechanism. The pycasbin package makes a call to logging.getLogger() to set the logger. No special logging configuration is needed other than initializing the logger in the parent application. If no logging is intitilized within the parent application you will not see any log messages from pycasbin.")),(0,a.kt)("h3",{id:"use-different-logger-for-different-enforcer"},"Use different logger for different enforcer"),(0,a.kt)("p",null,"Every enforcer could have its own logger to log info, and it could be changed at run-time."),(0,a.kt)("p",null,"And you could use a proper logger via the last paramter of ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),", if you using this way to initialize your enforcer, you needn't use the enabled parameter, cause the priority of the enabled field in logger is higher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Set a default logger as enforcer e1's logger.\n// This operation could also be seen as changing the logger of e1 at run-time.\ne1.SetLogger(&Log.DefaultLogger{})\n\n// Set another logger as enforcer e2's logger.\ne2.SetLogger(&YouOwnLogger)\n\n// Set your logger when initialize enforcer e3.\ne3, _ := casbin.NewEnforcer(\"examples/rbac_model.conf\", a, logger)\n")),(0,a.kt)("h4",{id:"supported-loggers"},"Supported loggers"),(0,a.kt)("p",null,"We provide some loggers to help you log information."),(0,a.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,a.kt)(u,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/log/default_logger.go"},"Defatule logger (built-in)")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"The default logger using golang log.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/zap-logger"},"Zap logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Using ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/uber-go/zap"},"zap"),", provide json encoded log and you could customize more with your own zap-logger."))))),(0,a.kt)(u,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Logger"),(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/psr3-bridge"},"psr3-bridge logger")),(0,a.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a ",(0,a.kt)("a",{parentName:"td",href:"https://www.php-fig.org/psr/psr-3/"},"PSR-3")," compliant bridge.")))))),(0,a.kt)("h4",{id:"how-to-write-a-logger"},"How to write a logger"),(0,a.kt)("p",null,"Your logger should implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/log/logger.go#L20"},"Logger")," interface."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EnableLog()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Control whether print the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsEnabled()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Show the current logger's enabled status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogModel()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogEnforce()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to enforce.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogRole()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to role.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogPolicy()"),(0,a.kt)("td",{parentName:"tr",align:null},"mandatory"),(0,a.kt)("td",{parentName:"tr",align:null},"Log info related to policy.")))),(0,a.kt)("p",null,"You can pass your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.SetLogger()"),"."),(0,a.kt)("p",null,"Here is an example about how to customize a logger for Golang:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "fmt"\n    "log"\n    "strings"\n)\n\n// DefaultLogger is the implementation for a Logger using golang log.\ntype DefaultLogger struct {\n    enabled bool\n}\n\nfunc (l *DefaultLogger) EnableLog(enable bool) {\n    l.enabled = enable\n}\n\nfunc (l *DefaultLogger) IsEnabled() bool {\n    return l.enabled\n}\n\nfunc (l *DefaultLogger) LogModel(model [][]string) {\n    if !l.enabled {\n        return\n    }\n    var str strings.Builder\n    str.WriteString("Model: ")\n    for _, v := range model {\n        str.WriteString(fmt.Sprintf("%v\\n", v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogEnforce(matcher string, request []interface{}, result bool, explains [][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var reqStr strings.Builder\n    reqStr.WriteString("Request: ")\n    for i, rval := range request {\n        if i != len(request)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", rval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v", rval))\n        }\n    }\n    reqStr.WriteString(fmt.Sprintf(" ---\x3e %t\\n", result))\n\n    reqStr.WriteString("Hit Policy: ")\n    for i, pval := range explains {\n        if i != len(explains)-1 {\n            reqStr.WriteString(fmt.Sprintf("%v, ", pval))\n        } else {\n            reqStr.WriteString(fmt.Sprintf("%v \\n", pval))\n        }\n    }\n\n    log.Println(reqStr.String())\n}\n\nfunc (l *DefaultLogger) LogPolicy(policy map[string][][]string) {\n    if !l.enabled {\n        return\n    }\n\n    var str strings.Builder\n    str.WriteString("Policy: ")\n    for k, v := range policy {\n        str.WriteString(fmt.Sprintf("%s : %v\\n", k, v))\n    }\n\n    log.Println(str.String())\n}\n\nfunc (l *DefaultLogger) LogRole(roles []string) {\n    if !l.enabled {\n        return\n    }\n\n    log.Println("Roles: ", roles)\n}\n\n')),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Error or panic may happen when you use Casbin for reasons like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Invalid syntax in model file (.conf)."),(0,a.kt)("li",{parentName:"ol"},"Invalid syntax in policy file (.csv)."),(0,a.kt)("li",{parentName:"ol"},"Custom error from storage adapters, e.g., MySQL fails to connect."),(0,a.kt)("li",{parentName:"ol"},"Casbin's bug.")),(0,a.kt)("p",null,"There are five main functions you may need to care about for error or panic:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ud568\uc218"),(0,a.kt)("th",{parentName:"tr",align:null},"Behavior on error"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#NewEnforcer"},"NewEnforcer()")),(0,a.kt)("td",{parentName:"tr",align:null},"Return error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadModel"},"LoadModel()")),(0,a.kt)("td",{parentName:"tr",align:null},"Return error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.LoadPolicy"},"LoadPolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Return error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.SavePolicy"},"SavePolicy()")),(0,a.kt)("td",{parentName:"tr",align:null},"Return error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://godoc.org/github.com/casbin/casbin#Enforcer.Enforce"},"Enforce()")),(0,a.kt)("td",{parentName:"tr",align:null},"Return error")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadModel()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadPolicy()")," inside. So you don't have to call the latter two calls when using ",(0,a.kt)("inlineCode",{parentName:"p"},"NewEnforcer()"),".")),(0,a.kt)("h2",{id:"enable--disable"},"Enable & disable"),(0,a.kt)("p",null,"The enforcer can be disabled via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.EnableEnforce()")," function. When it's disabled, ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer.Enforce()")," will always return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Other operations like adding or removing policy is not affected. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'e := casbin.NewEnforcer("examples/basic_model.conf", "examples/basic_policy.csv")\n\n// Will return false.\n// By default, the enforcer is enabled.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Disable the enforcer at run-time.\ne.EnableEnforce(false)\n\n// Will return true for any request.\ne.Enforce("non-authorized-user", "data1", "read")\n\n// Enable the enforcer again.\ne.EnableEnforce(true)\n\n// Will return false.\ne.Enforce("non-authorized-user", "data1", "read")\n')))}m.isMDXComponent=!0}}]);