"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"policy-subset-loading",title:"\u30dd\u30ea\u30b7\u30fc\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u8aad\u307f\u8fbc\u307f",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},a=void 0,l={unversionedId:"policy-subset-loading",id:"policy-subset-loading",title:"\u30dd\u30ea\u30b7\u30fc\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u8aad\u307f\u8fbc\u307f",description:"Loading filtered policy",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/PolicySubsetLoading.mdx",sourceDirName:".",slug:"/policy-subset-loading",permalink:"/ja/docs/policy-subset-loading",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"policy-subset-loading",title:"\u30dd\u30ea\u30b7\u30fc\u30b5\u30d6\u30bb\u30c3\u30c8\u306e\u8aad\u307f\u8fbc\u307f",description:"Loading filtered policy",keywords:["filtered policy","policy subset","performance optimization"]},sidebar:"docs",previous:{title:"\u30dd\u30ea\u30b7\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8",permalink:"/ja/docs/policy-storage"},next:{title:"Extensions",permalink:"/ja/docs/category/extensions"}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u7ba1\u7406\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30a2\u30c0\u30d7\u30bf\u3082\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001Casbin\u306b\u3088\u3063\u3066\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u304c\u3001\u4e0e\u3048\u3089\u308c\u305f\u30d5\u30a3\u30eb\u30bf\u306b\u57fa\u3065\u3044\u3066\u30b9\u30c8\u30ec\u30fc\u30b8\u5185\u306e\u30dd\u30ea\u30b7\u30fc\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3067\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u30dd\u30ea\u30b7\u30fc\u5168\u4f53\u3092\u89e3\u6790\u3059\u308b\u969b\u306b\u3001\u5927\u898f\u6a21\u306a\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u74b0\u5883\u3067\u306e\u52b9\u7387\u7684\u306a\u30dd\u30ea\u30b7\u30fc\u57f7\u884c\u304c\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30a2\u30c0\u30d7\u30bf\u30fc\u3067\u30d5\u30a3\u30eb\u30bf\u30fc\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadFilteredPolicy")," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u30d5\u30a3\u30eb\u30bf\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6709\u52b9\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u4f7f\u7528\u3059\u308b\u30a2\u30c0\u30d7\u30bf\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u5076\u767a\u7684\u306a\u30c7\u30fc\u30bf\u640d\u5931\u3092\u9632\u3050\u305f\u3081\u306b\u3001\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u30dd\u30ea\u30b7\u30fc\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"SavePolicy")," \u30e1\u30bd\u30c3\u30c9\u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u30b9\u30cb\u30da\u30c3\u30c8\u306f\u3001\u7d44\u307f\u8fbc\u307f\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30a2\u30c0\u30d7\u30bf\u3068\u30c9\u30e1\u30a4\u30f3\u306eRBAC\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u30d5\u30a3\u30eb\u30bf\u306f\u30dd\u30ea\u30b7\u30fc\u3092\u5358\u4e00\u30c9\u30e1\u30a4\u30f3\u306b\u5236\u9650\u3057\u307e\u3059\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},'"domain1"')," \u4ee5\u5916\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u30dd\u30ea\u30b7\u30fc\u884c\u306f\u3001\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u304b\u3089\u7701\u7565\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/casbin/casbin/v2"\n    fileadapter "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\nenforcer, _ := casbin.NewEnforcer()\n\nadapter := fileadapter.NewFilteredAdapter("examples/rbac_with_domains_policy.csv")\nenforcer.InitWithAdapter("examples/rbac_with_domains_model.conf", adapter)\n\nfilter := &fileadapter.Filter{\n    P: []string{"", "domain1"},\n    G: []string{"", "", "domain1"},\n}\nenforcer.LoadFilteredPolicy(filter)\n\n// The loaded policy now only contains the entries pertaining to "domain1".\n')),(0,i.kt)("p",null,"\u5225\u306e\u30e1\u30bd\u30c3\u30c9\u30b5\u30dd\u30fc\u30c8\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u8aad\u307f\u8fbc\u307f\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059: ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadIncrementalFilteredPolicy")," \u306f LoadFilteredPolicy \u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u524d\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u306f\u30af\u30ea\u30a2\u305b\u305a\u3001\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"))}d.isMDXComponent=!0}}]);