/*! For license information please see ccc49370.006638fe.js.LICENSE.txt */
"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6103],{7870:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(5893),r=n(7294);function l({id:e,host:t,repo:l,repoId:o,category:i,categoryId:c,mapping:s,term:m,strict:d,reactionsEnabled:u,emitMetadata:g,inputPosition:f,theme:p,lang:v,loading:b}){const[h,E]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{h||(n.e(2891).then(n.bind(n,2891)),E(!0))}),[]),h?(0,a.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:o,category:i,categoryid:c,mapping:s,term:m,strict:d,reactionsenabled:u,emitmetadata:g,inputposition:f,theme:p,lang:v,loading:b}):null}},5628:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(7294),r=n(6010),l=n(833),o=n(5281),i=n(9460),c=n(9058),s=n(390),m=n(7462),d=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var f=n(7870),p=n(2949);function v(e){return a.createElement(a.Fragment,null,a.createElement(g,e),a.createElement("br",null),a.createElement(f.Z,{id:"comments",repo:"casbin/casbin",repoId:"MDEwOlJlcG9zaXRvcnk4NzYxNzUwOA==",category:"Docs comments",categoryId:"DIC_kwDOBTjv5M4CRIiA",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:(0,p.I)().colorMode,lang:"en",loading:"lazy"}))}function b(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:r,description:o,date:c,tags:s,authors:m,frontMatter:d}=n,{keywords:u}=d,g=null!=(e=t.image)?e:d.image;return a.createElement(l.d,{title:r,description:o,keywords:u,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var h=n(9407);function E(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:f}=d;return a.createElement(c.Z,{sidebar:t,toc:!u&&l.length>0?a.createElement(h.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(v,{nextItem:o,prevItem:m}))}function _(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(b,null),a.createElement(E,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>c(e).top>=a));if(r){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(l=e[e.indexOf(r)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const p=(0,l.L)(),v=null!=m?m:p.tableOfContents.minHeadingLevel,b=null!=u?u:p.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return d((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:b}}),[c,s,v,b])),r.createElement(g,(0,a.Z)({toc:h,className:n,linkClassName:c},f))}},7243:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2195),r=n(5488),l=n(5162);const o={...a.Z,Tabs:r.Z,TabItem:l.Z}},5251:(e,t,n)=>{n(7418);var a=n(7294),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),l("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,l={},s=null,m=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:s,ref:m,props:l,_owner:o.current}}t.jsx=s},5893:(e,t,n)=>{e.exports=n(5251)}}]);