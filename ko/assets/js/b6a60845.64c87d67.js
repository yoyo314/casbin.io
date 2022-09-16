"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"online-editor",title:"\uc628\ub77c\uc778 \ud3b8\uc9d1\uae30",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},a=void 0,c={unversionedId:"online-editor",id:"online-editor",title:"\uc628\ub77c\uc778 \ud3b8\uc9d1\uae30",description:"Writing Casbin model and policy in web browser",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/OnlineEditor.mdx",sourceDirName:".",slug:"/online-editor",permalink:"/ko/docs/online-editor",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ko",tags:[],version:"current",frontMatter:{id:"online-editor",title:"\uc628\ub77c\uc778 \ud3b8\uc9d1\uae30",description:"Writing Casbin model and policy in web browser",keywords:["online editor","Casbin editor"]},sidebar:"docs",previous:{title:"Editor",permalink:"/ko/docs/category/editor"},next:{title:"IDE Plugins",permalink:"/ko/docs/ide-plugins"}},s={},p=[{value:"Use Pattern",id:"use-pattern",level:2}],l={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc628\ub77c\uc778 \ud3b8\uc9d1\uae30(",(0,i.kt)("a",{parentName:"p",href:"https://casbin.io/editor/)%EB%A5%BC"},"https://casbin.io/editor/)\ub97c")," \uc0ac\uc6a9\ud574\uc11c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c Casbin \ubaa8\ub378(model)\uacfc \uc815\ucc45(policy)\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub97c \uc704\ud55c \ud1b5\ud569 \uac1c\ubc1c \ud658\uacbd(IDE) \ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"\uad6c\ubb38 \uac15\uc870(syntax highlighting)")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"\ucf54\ub4dc \uc790\ub3d9 \uc644\uc131(code completion)")," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"use-pattern"},"Use Pattern"),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC with pattern")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC with all pattern"),", it specifies the pattern matching function in the lower left corner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"editor-tips",src:n(9523).Z,width:"480",height:"272"}),"."),(0,i.kt)("p",null,"If you want to write the equivalent code, you need to specify the pattern matching function through the relevant api. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbac-with-pattern"},"RBAC with Pattern")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The editor is based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/node-casbin"},"node-casbin"),". Due to the synchronization delay between different language of casbin, the authentication result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," may be different from the authentication result of the casbin you are using. If so, please submit issues to the casbin repository you are using.")))}d.isMDXComponent=!0},9523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/editor-tips-4f3fd45a1ea048f308e3e31da355ff79.png"}}]);