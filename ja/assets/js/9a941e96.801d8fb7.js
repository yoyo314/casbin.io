"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2709],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={id:"superadmin",title:"\u30b9\u30fc\u30d1\u30fc\u7ba1\u7406\u8005",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",keywords:["Super Admin"]},c=void 0,u={unversionedId:"superadmin",id:"superadmin",title:"\u30b9\u30fc\u30d1\u30fc\u7ba1\u7406\u8005",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/ja/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"\u30b9\u30fc\u30d1\u30fc\u7ba1\u7406\u8005",description:"Super Admin is the administrator of the whole system, we can use it in models like RBAC, ABAC and RBAC with domains etc",keywords:["Super Admin"]},sidebar:"docs",previous:{title:"\u512a\u5148\u30e2\u30c7\u30eb",permalink:"/ja/docs/priority-model"},next:{title:"\u30e2\u30c7\u30eb \u30b9\u30c8\u30ec\u30fc\u30b8",permalink:"/ja/docs/model-storage"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30b9\u30fc\u30d1\u30fc\u30a2\u30c9\u30df\u30f3\u306f\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u306e\u7ba1\u7406\u8005\u3067\u3042\u308a\u3001RBAC\u3001ABAC\u3001RBAC\u306a\u3069\u306e\u30e2\u30c7\u30eb\u3067\u30c9\u30e1\u30a4\u30f3\u306a\u3069\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306a\u4f8b\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,o.kt)("p",null,"It illustrates that as for the defined ",(0,o.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_effect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"matchers"),", Casbin judges if the request can match the policy, or most importantly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," is root. \u5224\u65ad\u304c\u6b63\u3057\u3051\u308c\u3070\u3001\u8a31\u53ef\u306f\u8a31\u53ef\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u3059\u3079\u3066\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Linux\u30b7\u30b9\u30c6\u30e0\u306e\u30eb\u30fc\u30c8\u3068\u540c\u69d8\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u304croot\u3068\u3057\u3066\u8a8d\u53ef\u3055\u308c\u305f\u5f8c\u3002 \u305d\u308c\u304b\u3089\u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u8a2d\u5b9a\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u6a29\u9650\u304c\u3042\u308a\u307e\u3059 So if we want ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," to have the full access to the whole system, we can let it become the super admin, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," has the permission to do everything."))}m.isMDXComponent=!0}}]);