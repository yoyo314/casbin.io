"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9220],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(a),s=r,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return a?n.createElement(k,o(o({ref:e},c),{},{components:a})):n.createElement(k,o({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8545:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={id:"policy-storage",title:"\uc815\ucc45(Policy) \uc800\uc7a5",description:"Policy Storage",keywords:["policy storage"]},p=void 0,d={unversionedId:"policy-storage",id:"policy-storage",title:"\uc815\ucc45(Policy) \uc800\uc7a5",description:"Policy Storage",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/PolicyStorage.mdx",sourceDirName:".",slug:"/policy-storage",permalink:"/ko/docs/policy-storage",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"policy-storage",title:"\uc815\ucc45(Policy) \uc800\uc7a5",description:"Policy Storage",keywords:["policy storage"]},sidebar:"docs",previous:{title:"\ubaa8\ub378(Model) \uc800\uc7a5",permalink:"/ko/docs/model-storage"},next:{title:"\uc815\ucc45(Policy) \ubd80\ubd84 \uc9d1\ud569 \ubd88\ub7ec\uc624\uae30",permalink:"/ko/docs/policy-subset-loading"}},c={},m=[{value:"Load policy from .CSV file",id:"load-policy-from-csv-file",level:2},{value:"Adapter API",id:"adapter-api",level:2},{value:"Database Storage Format",id:"database-storage-format",level:2},{value:"Adapter Details",id:"adapter-details",level:2}],u={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In Casbin, the policy storage is implemented as an ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapters"},"adapter"),"."),(0,l.kt)("h2",{id:"load-policy-from-csv-file"},"Load policy from .CSV file"),(0,l.kt)("p",null,"This is the most common way to use Casbin. It's easy to understand for beginners and convenient for sharing when you ask Casbin team for help."),(0,l.kt)("p",null,"The content of the ",(0,l.kt)("inlineCode",{parentName:"p"},".CSV")," file ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_policy.csv"},"examples/rbac_policy.csv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"p, alice, data1, read\np, bob, data2, write\np, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, data2_admin\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If your file contains commas",(0,l.kt)("inlineCode",{parentName:"p"},",")," , you should wrap it in double quotes, for example:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'p, alice, "data1,data2", read   --correct\np, alice, data1,data2, read     --incorrect ("data1,data2" should be a whole)\n')),(0,l.kt)("p",{parentName:"admonition"},"If your file contains commas",(0,l.kt)("inlineCode",{parentName:"p"},",")," and double quotes",(0,l.kt)("inlineCode",{parentName:"p"},'"'),", you should enclose the field in double quotes and double any embedded double quotes."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'p, alice, data, "r.act in (""get"", ""post"")"      --correct\np, alice, data, "r.act in ("get", "post")"          --incorrect (should use "" to escape "")\n')),(0,l.kt)("p",{parentName:"admonition"},"Related issue: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/issues/886"},"casbin#886"))),(0,l.kt)("h2",{id:"adapter-api"},"Adapter API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LoadPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"basic"),(0,l.kt)("td",{parentName:"tr",align:null},"Load all policy rules from the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SavePolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"basic"),(0,l.kt)("td",{parentName:"tr",align:null},"Save all policy rules to the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AddPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Add a policy rule to the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemovePolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a policy rule from the storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveFilteredPolicy()"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove policy rules that match the filter from the storage")))),(0,l.kt)("h2",{id:"database-storage-format"},"Database Storage Format"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"your policy file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"p, data2_admin, data2, read\np, data2_admin, data2, write\ng, alice, admin\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"corresponding database structure (Such as MySQL)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"ptype"),(0,l.kt)("th",{parentName:"tr",align:null},"v0"),(0,l.kt)("th",{parentName:"tr",align:null},"v1"),(0,l.kt)("th",{parentName:"tr",align:null},"v2"),(0,l.kt)("th",{parentName:"tr",align:null},"v3"),(0,l.kt)("th",{parentName:"tr",align:null},"v4"),(0,l.kt)("th",{parentName:"tr",align:null},"v5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,l.kt)("td",{parentName:"tr",align:null},"data2"),(0,l.kt)("td",{parentName:"tr",align:null},"read"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},"data2_admin"),(0,l.kt)("td",{parentName:"tr",align:null},"data2"),(0,l.kt)("td",{parentName:"tr",align:null},"write"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"g"),(0,l.kt)("td",{parentName:"tr",align:null},"alice"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The meaning of each column")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"id"),": Only exists in the database as the primary key. Not as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin policy"),". The way it is generated depends on the specific adapter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ptype"),": It corresponds to ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g2"),", etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"v0-v5"),": The column names have no specific meaning, and correspond to the values in the ",(0,l.kt)("inlineCode",{parentName:"p"},"policy csv")," from left to right. The number of columns depends on how many you define yourself. In theory, there can be an infinite number of columns. But generally only ",(0,l.kt)("strong",{parentName:"p"},"6")," columns are implemented in adapter. If it is not enough for you, please submit an issue to the corresponding adapter repository."))),(0,l.kt)("h2",{id:"adapter-details"},"Adapter Details"),(0,l.kt)("p",null,"More details about the use of adapter api and database table structure design,  Please go to:  ",(0,l.kt)("a",{parentName:"p",href:"/docs/adapters"},"/docs/adapters")))}s.isMDXComponent=!0}}]);