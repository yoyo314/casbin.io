"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"policy-subset-loading",title:"\uc815\ucc45(Policy) \ubd80\ubd84 \uc9d1\ud569 \ubd88\ub7ec\uc624\uae30",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},a=void 0,l={unversionedId:"policy-subset-loading",id:"policy-subset-loading",title:"\uc815\ucc45(Policy) \ubd80\ubd84 \uc9d1\ud569 \ubd88\ub7ec\uc624\uae30",description:"Loading filtered policy",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/PolicySubsetLoading.mdx",sourceDirName:".",slug:"/policy-subset-loading",permalink:"/ko/docs/policy-subset-loading",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"policy-subset-loading",title:"\uc815\ucc45(Policy) \ubd80\ubd84 \uc9d1\ud569 \ubd88\ub7ec\uc624\uae30",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},sidebar:"docs",previous:{title:"\uc815\ucc45(Policy) \uc800\uc7a5",permalink:"/ko/docs/policy-storage"},next:{title:"Enforcers",permalink:"/ko/docs/enforcers"}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck."),(0,o.kt)("p",null,"To use filtered policies with a supported adapter, simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadFilteredPolicy")," method. The valid format for the filter parameter depends on the adapter used. To prevent accidental data loss, the ",(0,o.kt)("inlineCode",{parentName:"p"},"SavePolicy")," method is disabled when a filtered policy is loaded."),(0,o.kt)("p",null,"For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. Any policy lines for domains other than ",(0,o.kt)("inlineCode",{parentName:"p"},'"domain1"')," are omitted from the loaded policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    fileadapter "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\nenforcer, _ := casbin.NewEnforcer()\n\nadapter := fileadapter.NewFilteredAdapter("examples/rbac_with_domains_policy.csv")\nenforcer.InitWithAdapter("examples/rbac_with_domains_model.conf", adapter)\n\nfilter := &fileadapter.Filter{\n    P: []string{"", "domain1"},\n    G: []string{"", "", "domain1"},\n}\nenforcer.LoadFilteredPolicy(filter)\n\n// The loaded policy now only contains the entries pertaining to "domain1".\n')),(0,o.kt)("p",null,"There's another method support subset loading feature: ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy")," is similar to LoadFilteredPolicy, but it does not clear previous loaded policy, only append."))}d.isMDXComponent=!0}}]);