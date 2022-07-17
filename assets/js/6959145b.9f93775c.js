"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6985],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},l=void 0,c={unversionedId:"abac",id:"abac",title:"ABAC",description:"ABAC based on Casbin",source:"@site/docs/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/docs/abac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ABAC.mdx",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC",description:"ABAC based on Casbin",keywords:["ABAC","ABAC model"]},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/docs/rbac-96"},next:{title:"Priority Model",permalink:"/docs/priority-model"}},p={},u=[{value:"What is the ABAC model actually?",id:"what-is-the-abac-model-actually",level:2},{value:"How to use ABAC?",id:"how-to-use-abac",level:2},{value:"Scaling the model for complex and large number of ABAC rules.",id:"scaling-the-model-for-complex-and-large-number-of-abac-rules",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-abac-model-actually"},"What is the ABAC model actually?"),(0,o.kt)("p",null,"ABAC is ",(0,o.kt)("inlineCode",{parentName:"p"},"Attribute-Based Access Control"),", meaning you can use the attributes (properties) of the subject, object or action instead of themselves (the string) to control the access. You may already hear of a complicated ABAC access control language named XACML. Compared to XACML, Casbin's ABAC is very simple: in ABAC, you can use structs (or class instances based on the programming language) instead of string for model elements."),(0,o.kt)("p",null,"Use the official ABAC example for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"r.obj.Owner")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"r.obj")," in the matcher. The ",(0,o.kt)("inlineCode",{parentName:"p"},"r.obj")," passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Enforce()")," function will be a struct or class instance instead of string. Casbin will use reflection to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," member variable in that struct or class for you."),(0,o.kt)("p",null,"Here is a definition for the ",(0,o.kt)("inlineCode",{parentName:"p"},"r.obj")," struct or class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,o.kt)("h2",{id:"how-to-use-abac"},"How to use ABAC?"),(0,o.kt)("p",null,"Simply speaking, to use ABAC, you need to do two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the attributes in the model matcher."),(0,o.kt)("li",{parentName:"ol"},"Pass in the struct or class instance for the element as the argument in Casbin's ",(0,o.kt)("inlineCode",{parentName:"li"},"Enforce()")," function.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Currently, only request elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"r.sub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"r.obj"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"r.act")," and so on support ABAC. You cannot use it on policy elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"p.sub"),", because there is no way to define a struct or class in Casbin's policy.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use multiple ABAC attributes in a matcher, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"m = r.sub.Domain == r.obj.Domain"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you need to use comma in policy which conflicts with csv's separator and we need to escape it. Casbin parses policy file through ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/csv"},"csv library"),", you could surround statement with quotation marks. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'"keyMatch("bob", r.sub.Role)"')," will not be split.")),(0,o.kt)("h2",{id:"scaling-the-model-for-complex-and-large-number-of-abac-rules"},"Scaling the model for complex and large number of ABAC rules."),(0,o.kt)("p",null,"The above instance of ABAC implementation is at its core very simple, but oftentimes the authorization system needs a very complex and large number of ABAC rules. To fit this necessity the above implementation will increase the verbosity of the model to a large extent. So, it\u2019s wise to add the rules in the policy instead of in the model. This is done by introducing a ",(0,o.kt)("inlineCode",{parentName:"p"},"eval()")," functional construct. Below is the example instance to manage such ABAC models."),(0,o.kt)("p",null,"This is the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONF")," file used for defining the ABAC model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"p.sub_rule")," is of type struct or class(user-defined type) which consists of necessary attributes to be used in the policy."),(0,o.kt)("p",null,"This is the policy that is used against the model for ",(0,o.kt)("inlineCode",{parentName:"p"},"Enforcement"),". Now, you can use the object instance which is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"eval()")," as a parameter to define certain ABAC constraints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))}d.isMDXComponent=!0}}]);