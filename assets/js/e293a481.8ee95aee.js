"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3878],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4494:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},l=void 0,o={unversionedId:"function",id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",source:"@site/docs/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/docs/function",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Function.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1663855807,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},sidebar:"docs",previous:{title:"Effector",permalink:"/docs/effector"},next:{title:"RBAC",permalink:"/docs/rbac"}},p={},c=[{value:"Functions in matchers",id:"functions-in-matchers",level:2},{value:"How to add a customized function",id:"how-to-add-a-customized-function",level:2}],s={toc:c};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions-in-matchers"},"Functions in matchers"),(0,r.kt)("p",null,"You can even specify functions in a matcher to make it more powerful. You can use the built-in functions or specify your own function.\nThe built-in key-matching functions take such a format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern)\n")),(0,r.kt)("p",null,"It returns a boolean indicating whether ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),"."),(0,r.kt)("p",null,"The supported built-in functions are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regexMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"a regular expression pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"an IP address like ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,r.kt)("td",{parentName:"tr",align:null},"an IP address or a CIDR like ",(0,r.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"a path-like path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a glob pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,r.kt)("p",null,"For key-getting functions, they usually take three parameters(except ",(0,r.kt)("inlineCode",{parentName:"p"},"keyGet"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern, string key_name)\n")),(0,r.kt)("p",null,"They will return the value of the key ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," if it matches the pattern, and return ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," if nothing is matched."),(0,r.kt)("p",null,"For example,  ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet2("/resource1/action", "/:res/action, "res")')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet3("/resource1_admin/action", "/{res}_admin/*", "res")')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1"'),".\nAs for ",(0,r.kt)("inlineCode",{parentName:"p"},"KetGet"),", which takes two parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},'KeyGet("/resource1/action", "/*)')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"resource1/action"'),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"key_name"),(0,r.kt)("th",{parentName:"tr",align:null},"example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/*")),(0,r.kt)("td",{parentName:"tr",align:null},"\\ "),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,r.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/prooj/:resource")),(0,r.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyGet3"),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/res3_admin/")),(0,r.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,r.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,r.kt)("inlineCode",{parentName:"td"},"/proj/{resource}_admin/*")),(0,r.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"},"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"))))),(0,r.kt)("p",null,"See details for above functions at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,r.kt)("h2",{id:"how-to-add-a-customized-function"},"How to add a customized function"),(0,r.kt)("p",null,"First prepare your function. It takes several parameters and return a bool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,r.kt)("p",null,"Then wrap it with ",(0,r.kt)("inlineCode",{parentName:"p"},"interface{}")," types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,r.kt)("p",null,"At last, register the function to the Casbin enforcer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,r.kt)("p",null,"Now, you can use the function in your model CONF like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}m.isMDXComponent=!0}}]);