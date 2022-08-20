"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5676],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return u}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return r?t.createElement(f,l(l({ref:n},d),{},{components:r})):t.createElement(f,l({ref:n},d))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8207:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var t=r(3117),a=r(102),i=(r(7294),r(3905)),l=["components"],o={id:"api-overview",title:"API\u6982\u8ff0",description:"Casbin API \u4f7f\u7528",keywords:["API \u6982\u8ff0","API","API\u4f7f\u7528\u65b9\u6cd5"]},p=void 0,c={unversionedId:"api-overview",id:"api-overview",title:"API\u6982\u8ff0",description:"Casbin API \u4f7f\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/APIOverview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/zh/docs/api-overview",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"api-overview",title:"API\u6982\u8ff0",description:"Casbin API \u4f7f\u7528",keywords:["API \u6982\u8ff0","API","API\u4f7f\u7528\u65b9\u6cd5"]},sidebar:"docs",previous:{title:"\u4e91\u7aef\u539f\u751f\u4e2d\u95f4\u4ef6",permalink:"/zh/docs/cloud-native"},next:{title:"\u7ba1\u7406 API",permalink:"/zh/docs/management-api"}},d={},s=[{value:"\u7528\u4e8e\u5f3a\u5236\u6267\u884c\u7684API(Enforce API)",id:"\u7528\u4e8e\u5f3a\u5236\u6267\u884c\u7684apienforce-api",level:2},{value:"EnforceEx API",id:"enforceex-api",level:2},{value:"\u7ba1\u7406 API",id:"\u7ba1\u7406-api",level:2},{value:"Get API",id:"get-api",level:3},{value:"\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u66f4\u65b0 API",id:"\u6dfb\u52a0\u5220\u9664\u66f4\u65b0-api",level:3},{value:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u63a5\u53e3",id:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u63a5\u53e3",level:2}],m={toc:s};function u(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6982\u8ff0\u53ea\u544a\u8bc9\u4f60\u5982\u4f55\u4f7f\u7528Casbin\u7684API\uff0c\u5e76\u6ca1\u6709\u89e3\u91caCasbin\u662f\u5982\u4f55\u5b89\u88c5\u548c\u5982\u4f55\u5de5\u4f5c\u7684\u3002 \u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u8fd9\u4e9b\u6559\u7a0b\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started"},"Casbin\u7684\u5b89\u88c5"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"Casbin\u5982\u4f55\u5de5\u4f5c"),"\u3002 \u56e0\u6b64\uff0c\u5f53\u4f60\u5f00\u59cb\u9605\u8bfb\u672c\u6559\u7a0b\u65f6\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b8c\u5168\u5b89\u88c5\u5e76\u5c06Casbin\u5bfc\u5165\u4f60\u7684\u4ee3\u7801\u4e2d\u3002"),(0,i.kt)("h2",{id:"\u7528\u4e8e\u5f3a\u5236\u6267\u884c\u7684apienforce-api"},"\u7528\u4e8e\u5f3a\u5236\u6267\u884c\u7684API(Enforce API)"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u4eceCasbin\u7684Enforce API\u5f00\u59cb\u3002 \u6211\u4eec\u5c06\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"model.conf"),"\u52a0\u8f7d\u4e00\u4e2aRBAC\u6a21\u578b\uff0c\u5e76\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"policy.csv"),"\u52a0\u8f7d\u7b56\u7565\u3002 \u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-for-models"},"\u5b66\u4e60\u6a21\u578b\u7684\u8bed\u6cd5"),"\uff0c\u5728\u672c\u6559\u7a0b\u4e2d\u6211\u4eec\u5c06\u4e0d\u8c08\u8fd9\u4e2a\u95ee\u9898\u3002 \u6211\u4eec\u5047\u8bbe\u4f60\u80fd\u7406\u89e3\u4e0b\u9762\u7ed9\u51fa\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"model.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"policy.csv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"p, admin, data1, read\np, admin, data1, write\np, admin, data2, read\np, admin, data2, write\np, alice, data1, read\np, bob, data2, write\ng, amber, admin\ng, abc, admin\n")),(0,i.kt)("p",null,"\u9605\u8bfb\u5b8c\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \u4ece\u6587\u4ef6\u4e2d\u52a0\u8f7d\u4fe1\u606f\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    log.Fatalf("error, detail: %s", err)\n}\nok, err := enforcer.Enforce("alice", "data1", "read")\n')),(0,i.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u4ece\u672c\u5730\u6587\u4ef6\u52a0\u8f7d\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u548c\u7b56\u7565\u3002 \u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"casbin.NewEnforcer()"),"\u5c06\u8fd4\u56de\u4e00\u4e2a\u6267\u884c\u8005\u3002 \u5b83\u5c06\u8bc6\u522b\u5176\u4e24\u4e2a\u53c2\u6570\u4e3a\u6587\u4ef6\u8def\u5f84\uff0c\u5e76\u4ece\u90a3\u91cc\u52a0\u8f7d\u6587\u4ef6\u3002 \u8fc7\u7a0b\u4e2d\u53d1\u751f\u7684\u9519\u8bef\u88ab\u5b58\u50a8\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"err"),"\u4e2d\u3002 \u8fd9\u6bb5\u4ee3\u7801\u4f7f\u7528\u9ed8\u8ba4\u7684\u9002\u914d\u5668\u6765\u52a0\u8f7d\u6a21\u578b\u548c\u7b56\u7565\u3002 \u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7b2c\u4e09\u65b9\u9002\u914d\u5668\u5f97\u5230\u540c\u6837\u7684\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801",(0,i.kt)("inlineCode",{parentName:"p"},'ok, err := enforcer.Enforce("alice", "data1", "read")'),"\u662f\u4e3a\u4e86\u786e\u8ba4\u8bbf\u95ee\u6743\u9650\u3002 \u5982\u679calice\u53ef\u4ee5\u901a\u8fc7read\u64cd\u4f5c\u8bbf\u95eedata1\uff0c\u8fd4\u56de\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"ok"),"\u5c06\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u5c06\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ok"),"\u7684\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,i.kt)("h2",{id:"enforceex-api"},"EnforceEx API"),(0,i.kt)("p",null,"\u6709\u65f6\u4f60\u53ef\u80fd\u60f3\u77e5\u9053\u54ea\u4e2a\u653f\u7b56\u5141\u8bb8\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u6240\u4ee5\u6211\u4eec\u51c6\u5907\u4e86\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),"\u3002 \u4f60\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")\nfmt.Println(ok, reason) // true [admin data1 read]\n')),(0,i.kt)("p",null,"\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),"\u5c06\u5728\u8fd4\u56de\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"reason"),"\u4e2d\u8fd4\u56de\u51c6\u786e\u7684\u7b56\u7565\u5b57\u7b26\u4e32\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"amber"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"\u7684\u4e00\u4e2a\u89d2\u8272\uff0c\u6240\u4ee5\u7b56\u7565",(0,i.kt)("inlineCode",{parentName:"p"},"p, admin, data1, read"),"\u4f7f\u5f97\u8fd9\u4e2a\u8bf7\u6c42",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002 \u8fd9\u6bb5\u4ee3\u7801\u7684\u8f93\u51fa\u5728\u6ce8\u91ca\u4e2d\u3002"),(0,i.kt)("p",null,"Casbin\u51c6\u5907\u4e86\u5f88\u591a\u8fd9\u6837\u7684API\u3002 \u8fd9\u4e9bAPI\u5728\u57fa\u672c\u7684\u529f\u80fd\u4e0a\u589e\u52a0\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\u3002 \u5b83\u4eec\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ok, err := enforcer.EnforceWithMatcher(matcher, request)")),(0,i.kt)("p",{parentName:"li"},"\u4e0e\u4e00\u4e2a\u5339\u914d\u5668\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EnforceWithMatcher()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),"\u7684\u7ec4\u5408\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"boolArray, err := enforcer.BatchEnforce(requests)")),(0,i.kt)("p",{parentName:"li"},"\u505a\u4e00\u4e2a\u5217\u8868\u5de5\u4f5c(list job)\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u3002"))),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684Casbin\u4f7f\u7528\u6848\u4f8b\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528Casbin\u901a\u8fc7\u8fd9\u4e9bAPI\u6765\u542f\u52a8\u4e00\u4e2a\u6388\u6743\u670d\u52a1\u5668\u3002 \u6211\u4eec\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u6bb5\u843d\u4e2d\u5411\u4f60\u5c55\u793a\u4e00\u4e9b\u5176\u4ed6\u7c7b\u578b\u7684API\u3002"),(0,i.kt)("h2",{id:"\u7ba1\u7406-api"},"\u7ba1\u7406 API"),(0,i.kt)("h3",{id:"get-api"},"Get API"),(0,i.kt)("p",null,"\u8fd9\u4e9bAPI\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u7684\u786e\u5207\u5bf9\u8c61\u3002 \u8fd9\u4e00\u6b21\uff0c\u6211\u4eec\u50cf\u6700\u540e\u4e00\u4e2a\u4f8b\u5b50\u4e00\u6837\u52a0\u8f7d\u4e86\u4e00\u4e2a enforcer \u5e76\u4ece\u5b83\u4e2d\u83b7\u5f97\u4e00\u4e9b\u4e1c\u897f\u3002"),(0,i.kt)("p",null,"\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\nallSubjects := enforcer.GetAllSubjects()\nfmt.Println(allSubjects)\n')),(0,i.kt)("p",null,"\u5c31\u884c\u4e0a\u4e00\u4e2a\u4f8b\u5b50\u4e00\u6837\uff0c\u524d\u56db\u884c\u4ee3\u7801\u4ece\u672c\u5730\u6587\u6863\u4e2d\u8f7d\u5165\u4e86\u4e00\u4e9b\u5fc5\u8981\u7684\u4fe1\u606f\u3002 \u6211\u4eec\u5c06\u4e0d\u518d\u5728\u8fd9\u91cc\u8c08\u8fd9\u4e00\u70b9\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801",(0,i.kt)("inlineCode",{parentName:"p"},"allSubjects := enforcer.GetAllSubjects()")," \u628a\u7b56\u7565\u6587\u6863\u91cc\u7684\u6240\u6709 subjects \u63d0\u53d6\u51fa\u6765\uff0c\u5e76\u4e14\u5c06\u5b83\u4eec\u4f5c\u4e3a\u4e00\u4e2a\u6570\u7ec4\u8fd4\u56de\u3002 \u7136\u540e\u6211\u4eec\u6253\u5370\u8fd9\u4e2a\u6570\u7ec4"),(0,i.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u8f93\u51fa\u4f1a\u662f\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[admin alice bob]\n")),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u66f4\u6539\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAllNamedSubjects()"),", \u4ee5\u83b7\u53d6\u5f53\u524d\u547d\u540d\u7b56\u7565\u4e2d\u663e\u793a\u7684 subjects \u5217\u8868\u3002"),(0,i.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Objects, Actions, Roles")," \u51c6\u5907\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll")," \u51fd\u6570 \u4f60\u552f\u4e00\u9700\u8981\u505a\u7684\u662f\uff0c\u5982\u679c\u4f60\u60f3\u8bbf\u95ee\u8fd9\u4e9b\u51fd\u6570\uff0c\u5c06\u51fd\u6570\u540d\u79f0\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Subject"),"\u4e00\u8bcd\u6539\u4e3a\u4f60\u60f3\u8981\u7684\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u6709\u66f4\u591a\u7528\u4e8e\u7b56\u7565\u83b7\u53d6\u7684API\u3002 \u5b83\u4eec\u7684\u8c03\u7528\u65b9\u6cd5\u548c\u8fd4\u56de\u7684\u503c\uff0c\u90fd\u548c\u4e0a\u9762\u63d0\u5230\u7684\u975e\u5e38\u76f8\u4f3c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policy = e.GetPolicy()"),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u7684\u6388\u6743\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'filteredPolicy := e.GetFilteredPolicy(0, "alice")'),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u7684\u6388\u6743\u7684\u89c4\u5219\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u201c\u57df\u8fc7\u6ee4\u5668\u201d(field filters)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'namedPolicy := e.GetNamedPolicy("p")')," \u7528\u4e8e\u83b7\u53d6\u88ab\u547d\u540d\u7684\u7b56\u7565\u4e2d\u6240\u6709\u88ab\u6388\u6743\u7684\u89c4\u5219"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")'),"\u7528\u4e8e\u83b7\u53d6\u88ab\u547d\u540d\u7684\u7b56\u7565\u4e2d\u6240\u6709\u88ab\u6388\u6743\u7684\u89c4\u5219\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u201c\u57df\u8fc7\u6ee4\u5668\u201d(field filters)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"groupingPolicy := e.GetGroupingPolicy()"),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u6240\u6709\u4efb\u52a1\u7ee7\u627f\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")'),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u6240\u6709\u4efb\u52a1\u7ee7\u627f\u89c4\u5219\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u201c\u57df\u8fc7\u6ee4\u5668\u201d(field filters)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetNamedGroupingPolicy("g")'),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u6240\u6709\u4efb\u52a1\u7ee7\u627f\u89c4\u5219\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")'),"\u7528\u4e8e\u83b7\u53d6\u7b56\u7565\u4e2d\u6240\u6709\u4efb\u52a1\u7ee7\u627f\u89c4\u5219\u3002")),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u5220\u9664\u66f4\u65b0-api"},"\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u66f4\u65b0 API"),(0,i.kt)("p",null,"Casbin\u4e3a\u7b56\u7565\u51c6\u5907\u4e86\u5f88\u591aAPI\u3002 \u8fd9\u4e9bAPI\u5141\u8bb8\u60a8\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u5730\u6dfb\u52a0\u3001\u5220\u9664\u6216\u7f16\u8f91\u7b56\u7565\u3002"),(0,i.kt)("p",null,"\u6b64\u4ee3\u7801\u5411\u60a8\u5c55\u793a\u4e86\u5982\u4f55\u6dfb\u52a0\u3001\u5220\u9664\u548c\u66f4\u65b0\u60a8\u7684\u653f\u7b56\uff0c\u5e76\u544a\u8bc9\u60a8\u5982\u4f55\u786e\u8ba4\u653f\u7b56\u5b58\u5728\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \u4ece\u6587\u4ef6\u4e2d\u52a0\u8f7d\u4fe1\u606f\nenforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n   fmt.Printf("Error, details: %s\\n", err)\n}\n\n// \u6dfb\u52a0\u4e00\u6761\u7b56\u7565\uff0c\u7136\u540e\u4f7f\u7528 HasPolicy() \u6765\u786e\u8ba4\nenforcer.AddPolicy("added_user", "data1", "read")\nhasPolicy := enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // \u82e5\u663e\u793a\u4e3a true\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u6210\u529f\u6dfb\u52a0\u4e86\u7b56\u7565\n\n// \u79fb\u9664\u4e00\u6761\u7b56\u7565\uff0c\u7136\u540e\u4f7f\u7528 HasPolicy() \u6765\u786e\u8ba4\nenforcer.RemovePolicy("alice", "data1", "read")\nhasPolicy = enforcer.HasPolicy("alice", "data1", "read")\nfmt.Println(hasPolicy) // \u82e5\u663e\u793a\u4e3a false\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u6210\u529f\u5220\u9664\u4e86\u7b56\u7565\n\n// \u66f4\u65b0\u4e00\u6761\u7b56\u7565\uff0c\u7136\u540e\u4f7f\u7528 HasPolicy() \u6765\u786e\u8ba4\nenforcer.UpdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "read")\nfmt.Println(hasPolicy) // \u82e5\u663e\u793a\u4e3a false \u539f\u6765\u7684\u7b56\u7565\u5df2\u5931\u6548\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "write")\nfmt.Println(hasPolicy) // \u82e5\u663e\u793a\u4e3atrue\uff0c\u5219\u7b56\u7565\u88ab\u6210\u529f\u66f4\u65b0\n')),(0,i.kt)("p",null,"\u4f7f\u7528\u8fd9\u56db\u79cdAPI\u53ef\u4ee5\u7f16\u8f91\u7b56\u7565\u3002 \u50cf\u8fd9\u4e9b\u4e00\u6837\uff0c\u6211\u4eec\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy"),"\u51c6\u5907\u4e86\u540c\u6837\u79cd\u7c7b\u7684API\u3002 \u8981\u4f7f\u7528\u5b83\u4eec\uff0c\u60a8\u53ea\u9700\u8981\u628a\u51fd\u6570\u540d\u4e2d\u7684\u5355\u8bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"Policy"),"\u66ff\u6362\u4e3a\u4e0a\u9762\u63d0\u5230\u7684\u5355\u8bcd\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u4f60\u5c06\u53c2\u6570\u66f4\u6539\u4e3a\u6570\u7ec4\uff0c\u4f60\u53ef\u4ee5\u6279\u91cf\u7f16\u8f91\u4f60\u7684\u7b56\u7565\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e\u8fd9\u6837\u7684\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})\n')),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"Policy")," \u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Policies"),"\uff0c\u5e76\u7f16\u8f91\u53c2\u6570\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})\n')),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u6279\u91cf\u7f16\u8f91\u8fd9\u4e9b\u7b56\u7565\u3002"),(0,i.kt)("p",null,"\u540c\u6837\u7684\u64cd\u4f5c\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"GroupingPolicy\u3001NamedGroupingPolicy"),"\u4e5f\u6709\u7528\u3002"),(0,i.kt)("h2",{id:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u63a5\u53e3"},"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u63a5\u53e3"),(0,i.kt)("p",null,"Casbin\u4e3a\u4f60\u63d0\u4f9b\u4e86\u6765API\u6765\u4fee\u6539RBAC\u6a21\u578b\u548c\u7b56\u7565\u3002 \u5982\u679c\u4f60\u719f\u6089RBAC\uff0c\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4f7f\u7528\u8fd9\u4e9bAPI\uff1a"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ea\u544a\u8bc9\u4f60\u5982\u4f55\u4f7f\u7528Casbin\u7684RBAC APIs\uff0c\u800c\u4e0d\u4f1a\u8c08\u8bbaRBAC\u672c\u8eab\u3002 \u60a8\u53ef\u4ee5\u4ece",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac"},"\u8fd9\u91cc"),"\u83b7\u53d6\u8be6\u60c5\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u8fd9\u6bb5\u4ee3\u7801\u6765\u52a0\u8f7d\u6a21\u578b\u548c\u653f\u7b56\uff0c\u5c31\u50cf\u4ee5\u524d\u4e00\u6837\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528Enforcer ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer")," \u6765\u8bbf\u95ee\u8fd9\u4e9bAPI\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := enforcer.GetRolesForUser("amber")\nfmt.Println(roles) // [admin]\nusers, err := enforcer.GetUsersForRole("admin")\nfmt.Println(users) // [amber abc]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()"),"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u7684\u89d2\u8272\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0camber\u53ea\u6709\u4e00\u4e2a\u7ba1\u7406\u5458\u89d2\u8272\uff0c\u6240\u4ee5\u6570\u7ec4",(0,i.kt)("inlineCode",{parentName:"p"},"roles"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"[admin]"),"\u3002 \u5e76\u4e14\u76f8\u4f3c\u5730\uff0c\u4f60\u53ef\u4ee5\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"GetUsersForRole()"),"\uff0c\u6765\u83b7\u5f97\u6240\u6709\u5f52\u5c5e\u4e8e\u8fd9\u4e2a\u89d2\u8272\u7684\u7528\u6237\u3002 \u6b64\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e5f\u662f\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.HasRoleForUser("amber", "admin") // true\n')),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"HasRoleForUser()"),"\u6765\u786e\u8ba4\u7528\u6237\u662f\u5426\u5c5e\u4e8e\u8be5\u89d2\u8272\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0camber\u662f\u7ba1\u7406\u5458\u7684\u6210\u5458\uff0c\u6240\u4ee5\u8fd9\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true\nenforcer.DeletePermission("data2", "write")\nfmt.Println(enforcer.Enforce("bob", "data2", "write")) // false\n')),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeletePermission()")," \u6765\u5220\u9664\u6743\u9650\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true\nenforcer.DeletePermissionForUser("alice", "data1", "read")\nfmt.Println(enforcer.Enforce("alice", "data1", "read")) // false\n')),(0,i.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeletePermissionForUser()")," \u6765\u5220\u9664\u7528\u6237\u7684\u6743\u9650\u3002"),(0,i.kt)("p",null,"Casbin\u6709\u5f88\u591a\u8fd9\u6837\u7684API\u3002 \u5b83\u4eec\u7684\u8c03\u7528\u65b9\u5f0f\u548c\u8fd4\u56de\u503c\uff0c\u90fd\u4e0e\u4e0a\u6587\u63d0\u5230\u7684API\u6709\u540c\u6837\u7684\u6837\u5f0f\u3002 \u4f60\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"\u968f\u540e\u7684\u6587\u6863"),"\u4e2d\u627e\u5230\u8fd9\u4e9bAPI\u3002"))}u.isMDXComponent=!0}}]);