"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3878],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4494:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},c=void 0,p={unversionedId:"function",id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",source:"@site/docs/Function.mdx",sourceDirName:".",slug:"/function",permalink:"/ja/docs/function",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"function",title:"Function",description:"Using the built-in functions or specifying your own function",keywords:["function","customize"]},sidebar:"docs",previous:{title:"Effector",permalink:"/ja/docs/effector"},next:{title:"RBAC",permalink:"/ja/docs/rbac"}},u={},s=[{value:"Functions in matchers",id:"functions-in-matchers",level:2},{value:"How to add a customized function",id:"how-to-add-a-customized-function",level:2}],m={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions-in-matchers"},"Functions in matchers"),(0,i.kt)("p",null,"You can even specify functions in a matcher to make it more powerful. You can use the built-in functions or specify your own function.\nThe built-in key-matching functions take such a format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern)\n")),(0,i.kt)("p",null,"It returns a boolean indicating whether ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," matches ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),"."),(0,i.kt)("p",null,"The supported built-in functions are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"url"),(0,i.kt)("th",{parentName:"tr",align:null},"pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,i.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,i.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/:resource")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_model.conf"},"keymatch2_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,i.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/{resource}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L171-L196"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/123/book/123")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,i.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/{id}/book/{id}")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L208-L222"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"regexMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"any string"),(0,i.kt)("td",{parentName:"tr",align:null},"a regular expression pattern"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_model.conf"},"keymatch_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"an IP address like ",(0,i.kt)("inlineCode",{parentName:"td"},"192.168.2.123")),(0,i.kt)("td",{parentName:"tr",align:null},"an IP address or a CIDR like ",(0,i.kt)("inlineCode",{parentName:"td"},"192.168.2.0/24")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_model.conf"},"ipmatch_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/ipmatch_policy.csv"},"ipmatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"a path-like path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a glob pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/alice_data/*")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"},"https://github.com/casbin/casbin/blob/277c1a2b85698272f764d71a94d2595a8d425915/util/builtin_operators_test.go#L426-L466"))))),(0,i.kt)("p",null,"For key-getting functions, they usually take three parameters(except ",(0,i.kt)("inlineCode",{parentName:"p"},"keyGet"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"bool function_name(string url, string pattern, string key_name)\n")),(0,i.kt)("p",null,"They will return the value of the key ",(0,i.kt)("inlineCode",{parentName:"p"},"key_name")," if it matches the pattern, and return ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," if nothing is matched."),(0,i.kt)("p",null,"For example,  ",(0,i.kt)("inlineCode",{parentName:"p"},'KeyGet2("/resource1/action", "/:res/action, "res")')," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'"resource1"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'KeyGet3("/resource1_admin/action", "/{res}_admin/*", "res")')," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'"resource1"'),".\nAs for ",(0,i.kt)("inlineCode",{parentName:"p"},"KetGet"),", which takes two parameters, ",(0,i.kt)("inlineCode",{parentName:"p"},'KeyGet("/resource1/action", "/*)')," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'"resource1/action"'),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"url"),(0,i.kt)("th",{parentName:"tr",align:null},"pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"key_name"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or a ",(0,i.kt)("inlineCode",{parentName:"td"},"*")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/proj/*")),(0,i.kt)("td",{parentName:"tr",align:null},"\\ "),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget_model.conf"},"keyget_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch_policy.csv"},"keymatch_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/proj/resource1")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,i.kt)("inlineCode",{parentName:"td"},":")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/prooj/:resource")),(0,i.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keyget2_model.conf"},"keyget2_model.conf"),"/",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/master/examples/keymatch2_policy.csv"},"keymatch2_policy.csv"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyGet3"),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path like ",(0,i.kt)("inlineCode",{parentName:"td"},"/proj/res3_admin/")),(0,i.kt)("td",{parentName:"tr",align:null},"a URL path or ",(0,i.kt)("inlineCode",{parentName:"td"},"{}")," pattern like ",(0,i.kt)("inlineCode",{parentName:"td"},"/proj/{resource}_admin/*")),(0,i.kt)("td",{parentName:"tr",align:null},"key name specified in the pattern"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"},"https://github.com/casbin/casbin/blob/7bd496f94f5a2739a392d333a9aaaa10ae397673/util/builtin_operators_test.go#L209-L247"))))),(0,i.kt)("p",null,"See details for above functions at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go")),(0,i.kt)("h2",{id:"how-to-add-a-customized-function"},"How to add a customized function"),(0,i.kt)("p",null,"First prepare your function. It takes several parameters and return a bool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func KeyMatch(key1 string, key2 string) bool {\n    i := strings.Index(key2, "*")\n    if i == -1 {\n        return key1 == key2\n    }\n\n    if len(key1) > i {\n        return key1[:i] == key2[:i]\n    }\n    return key1 == key2[:i]\n}\n')),(0,i.kt)("p",null,"Then wrap it with ",(0,i.kt)("inlineCode",{parentName:"p"},"interface{}")," types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func KeyMatchFunc(args ...interface{}) (interface{}, error) {\n    name1 := args[0].(string)\n    name2 := args[1].(string)\n\n    return (bool)(KeyMatch(name1, name2)), nil\n}\n")),(0,i.kt)("p",null,"At last, register the function to the Casbin enforcer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'e.AddFunction("my_func", KeyMatchFunc)\n')),(0,i.kt)("p",null,"Now, you can use the function in your model CONF like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act\n")))}d.isMDXComponent=!0}}]);