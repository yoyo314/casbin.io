"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1340],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],c={id:"multi-threading",title:"Multi-threading",description:"Using Casbin in a multi-threading manner",keywords:["multi-threading"]},s=void 0,l={unversionedId:"multi-threading",id:"multi-threading",title:"Multi-threading",description:"Using Casbin in a multi-threading manner",source:"@site/docs/MultiThreading.mdx",sourceDirName:".",slug:"/multi-threading",permalink:"/ja/docs/multi-threading",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"multi-threading",title:"Multi-threading",description:"Using Casbin in a multi-threading manner",keywords:["multi-threading"]},sidebar:"docs",previous:{title:"Data Permissions",permalink:"/ja/docs/data-permissions"},next:{title:"Benchmarks",permalink:"/ja/docs/benchmark"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you use Casbin in a multi-threading manner, you can use the synchronized wrapper of the Casbin enforcer: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/enforcer_synced.go"},"https://github.com/casbin/casbin/blob/master/enforcer_synced.go")," (GoLang) and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp"},"https://github.com/casbin/casbin-cpp/blob/master/casbin/enforcer_synced.cpp")," (C++)."),(0,a.kt)("p",null,"It also supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoLoad")," feature, which means the Casbin enforcer will automatically load the latest policy rules from DB if it has changed. Call ",(0,a.kt)("inlineCode",{parentName:"p"},"StartAutoLoadPolicy()")," to start automatically loading policy periodically and call ",(0,a.kt)("inlineCode",{parentName:"p"},"StopAutoLoadPolicy()")," to stop it."))}m.isMDXComponent=!0}}]);