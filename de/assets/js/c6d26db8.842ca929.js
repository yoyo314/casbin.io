"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3345],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"abac",title:"ABAC"},l=void 0,c={unversionedId:"abac",id:"abac",title:"ABAC",description:"What is the ABAC model actually?",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/ABAC.mdx",sourceDirName:".",slug:"/abac",permalink:"/de/docs/abac",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/ABAC.mdx",tags:[],version:"current",frontMatter:{id:"abac",title:"ABAC"},sidebar:"docs",previous:{title:"Casbin RBAC vs. RBAC96",permalink:"/de/docs/rbac-96"},next:{title:"Priority Model",permalink:"/de/docs/priority-model"}},p={},u=[{value:"What is the ABAC model actually?",id:"what-is-the-abac-model-actually",level:2},{value:"How to use ABAC?",id:"how-to-use-abac",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-abac-model-actually"},"What is the ABAC model actually?"),(0,i.kt)("p",null,"ABAC is ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute-Based Access Control"),", meaning you can use the attributes (properties) of the subject, object or action instead of themselves (the string) to control the access. You may already hear of a complicated ABAC access control language named XACML. Compared to XACML, Casbin's ABAC is very simple: in ABAC, you can use structs (or class instances based on the programming language) instead of string for model elements."),(0,i.kt)("p",null,"Use the official ABAC example for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == r.obj.Owner\n")),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj.Owner")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj")," in the matcher. The ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj")," passed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforce()")," function will be a struct or class instance instead of string. Casbin will use reflection to retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," member variable in that struct or class for you."),(0,i.kt)("p",null,"Here is a definition for the ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj")," struct or class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type testResource struct {\n    Name  string\n    Owner string\n}\n")),(0,i.kt)("h2",{id:"how-to-use-abac"},"How to use ABAC?"),(0,i.kt)("p",null,"Simply speaking, to use ABAC, you need to do two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Specify the attributes in the model matcher."),(0,i.kt)("li",{parentName:"ol"},"Pass in the struct or class instance for the element as the argument in Casbin's ",(0,i.kt)("inlineCode",{parentName:"li"},"Enforce()")," function.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Currently, only request elements like ",(0,i.kt)("inlineCode",{parentName:"h5"},"r.sub"),", ",(0,i.kt)("inlineCode",{parentName:"h5"},"r.obj"),", ",(0,i.kt)("inlineCode",{parentName:"h5"},"r.act")," and so on support ABAC. You cannot use it on policy elements like ",(0,i.kt)("inlineCode",{parentName:"h5"},"p.sub"),", because there is no way to define a struct or class in Casbin's policy. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"If you need to use comma in policy which conflicts with csv's separator and we need to escape it. Casbin parses policy file through ",(0,i.kt)("a",{parentName:"h5",href:"https://pkg.go.dev/encoding/csv"},"csv library"),", you could surround statement with quotation marks. For example, ",(0,i.kt)("inlineCode",{parentName:"h5"},'"keyMatch("bob", r.sub.Role)"')," will not be split. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h2",{parentName:"div",id:"scaling-the-model-for-complex-and-large-number-of-abac-rules"},"Scaling the model for complex and large number of ABAC rules."),(0,i.kt)("p",{parentName:"div"},"The above instance of ABAC implementation is at its core very simple, but oftentimes the authorization system needs a very complex and large number of ABAC rules. To fit this necessity the above implementation will increase the verbosity of the model to a large extent. So, it\u2019s wise to add the rules in the policy instead of in the model. This is done by introducing a ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," functional construct. Below is the example instance to manage such ABAC models."),(0,i.kt)("p",{parentName:"div"},"This is the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONF")," file used for defining the ABAC model."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub_rule, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = eval(p.sub_rule) && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",{parentName:"div"},"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"p.sub_rule")," is of type struct or class(user-defined type) which consists of necessary attributes to be used in the policy."),(0,i.kt)("p",{parentName:"div"},"This is the policy that is used against the model for ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforcement"),". Now, you can use the object instance which is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()")," as a parameter to define certain ABAC constraints."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"p, r.sub.Age > 18, /data1, read\np, r.sub.Age < 60, /data2, write\n")))))}m.isMDXComponent=!0}}]);