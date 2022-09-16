"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={id:"policy-subset-loading",title:"Policy Subset Loading",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},a=void 0,l={unversionedId:"policy-subset-loading",id:"policy-subset-loading",title:"Policy Subset Loading",description:"Loading filtered policy",source:"@site/docs/PolicySubsetLoading.mdx",sourceDirName:".",slug:"/policy-subset-loading",permalink:"/docs/policy-subset-loading",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/PolicySubsetLoading.mdx",tags:[],version:"current",frontMatter:{id:"policy-subset-loading",title:"Policy Subset Loading",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},sidebar:"docs",previous:{title:"Policy Storage",permalink:"/docs/policy-storage"},next:{title:"Extensions",permalink:"/docs/category/extensions"}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck."),(0,r.kt)("p",null,"To use filtered policies with a supported adapter, simply call the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadFilteredPolicy")," method. The valid format for the filter parameter depends on the adapter used. To prevent accidental data loss, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SavePolicy")," method is disabled when a filtered policy is loaded."),(0,r.kt)("p",null,"For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. Any policy lines for domains other than ",(0,r.kt)("inlineCode",{parentName:"p"},'"domain1"')," are omitted from the loaded policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    fileadapter "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\nenforcer, _ := casbin.NewEnforcer()\n\nadapter := fileadapter.NewFilteredAdapter("examples/rbac_with_domains_policy.csv")\nenforcer.InitWithAdapter("examples/rbac_with_domains_model.conf", adapter)\n\nfilter := &fileadapter.Filter{\n    P: []string{"", "domain1"},\n    G: []string{"", "", "domain1"},\n}\nenforcer.LoadFilteredPolicy(filter)\n\n// The loaded policy now only contains the entries pertaining to "domain1".\n')),(0,r.kt)("p",null,"There's another method support subset loading feature: ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy")," is similar to LoadFilteredPolicy, but it does not clear previous loaded policy, only append."))}d.isMDXComponent=!0}}]);