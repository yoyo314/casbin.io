"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7918],{7337:function(e,t,a){a.r(t),a.d(t,{default:function(){return ce}});var n=a(7294),r=a(6010),l=a(833),i=a(7524),s=a(5281),c=a(3117),o=a(5999),d=a(2244);function m(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,c.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,c.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(3944);function v(e){return n.createElement(n.Fragment,null,n.createElement(m,e),n.createElement(u.qw,{shortname:"casbin",config:{language:"en"}}))}var b=a(2263),f=a(9960),p=a(143),h=a(373),E=a(4477);var g={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){var t=g[e.versionMetadata.banner];return n.createElement(t,e)}function N(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(f.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){var t,a=e.className,l=e.versionMetadata,i=(0,b.Z)().siteConfig.title,c=(0,p.gA)({failfast:!0}).pluginId,o=(0,h.J)(c).savePreferredVersionName,d=(0,p.Jo)(c),m=d.latestDocSuggestion,u=d.latestVersionSuggestion,v=null!=m?m:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(N,{versionLabel:u.label,to:v.path,onClick:function(){return o(u.name)}})))}function k(e){var t=e.className,a=(0,E.E)();return a.banner?n.createElement(Z,{className:t,versionMetadata:a}):null}function C(e){var t=e.className,a=(0,E.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function H(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function x(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:s.k.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(H,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var T=a(6114),U=a(6233),A="lastUpdated_vbeJ";function y(e){return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U.Z,e)))}function w(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",A)},(a||l)&&n.createElement(x,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function I(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,o=t.tags,d=o.length>0,m=!!(a||l||c);return d||m?n.createElement("footer",{className:(0,r.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(y,{tags:o}),m&&n.createElement(w,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var M=a(9407),B=a(6043),O=a(3743),S=a(102),V="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E",D=["collapsed"];function R(e){var t=e.collapsed,a=(0,S.Z)(e,D);return n.createElement("button",(0,c.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",V,!t&&P,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var j="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",q="tocCollapsibleExpanded_sAul";function z(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,B.u)({initialState:!0}),c=s.collapsed,o=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(j,!c&&q,a)},n.createElement(R,{collapsed:c,onClick:o}),n.createElement(B.z,{lazy:!0,className:F,collapsed:c},n.createElement(O.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var J=a(7955),G=a(4575),K=a(8596),Q=a(4996);function W(e){return n.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var X={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Y(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(f.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function $(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return n.createElement("li",(0,c.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ee(){var e=(0,Q.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(f.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",X.breadcrumbsItemLink),href:e},n.createElement(W,{className:X.breadcrumbHomeIcon})))}function te(){var e=(0,G.s1)(),t=(0,K.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ee,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement($,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(Y,{href:t.href,isLast:r},t.label))})))):null}var ae=a(5042),ne="docItemContainer_Adtb",re="docItemCol_GujU",le="tocMobile_aoJ5";function ie(e){var t,a=e.content,r=a.metadata,i=a.frontMatter,s=a.assets,c=i.keywords,o=r.description,d=r.title,m=null!=(t=s.image)?t:i.image;return n.createElement(l.d,{title:d,description:o,keywords:c,image:m})}function se(e){var t=e.content,a=t.metadata,l=t.frontMatter,c=l.hide_title,o=l.hide_table_of_contents,d=l.toc_min_heading_level,m=l.toc_max_heading_level,u=a.title,b=!c&&void 0===t.contentTitle,f=(0,i.i)(),p=!o&&t.toc&&t.toc.length>0,h=p&&("desktop"===f||"ssr"===f);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!o&&re)},n.createElement(k,null),n.createElement("div",{className:ne},n.createElement("article",null,n.createElement(te,null),n.createElement(C,null),p&&n.createElement(z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,r.Z)(s.k.docs.docTocMobile,le)}),n.createElement("div",{className:(0,r.Z)(s.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(J.Z,{as:"h1"},u)),n.createElement(ae.Z,null,n.createElement(t,null))),n.createElement(I,e)),n.createElement(v,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(M.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:s.k.docs.docTocDesktop})))}function ce(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(ie,e),n.createElement(se,e))}},9407:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),r=a(102),l=a(7294),i=a(6010),s=a(3743),c="tableOfContents_bqdL",o=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,o);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),r=a(102),l=a(7294),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,i);a>=0?t[a].children.push(l):n.push(l)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var o=a(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(s,{anchorTopOffset:a.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var f=l.memo(b),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),L=(0,o.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,b,N,Z])),l.createElement(f,(0,n.Z)({toc:k,className:i,linkClassName:m},g))}},4477:function(e,t,a){a.d(t,{E:function(){return s},q:function(){return i}});var n=a(7294),r=a(4700),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7243:function(e,t,a){a(7294);var n=a(5058),r=a(5488),l=a(5162);t.Z=Object.assign({},n.Z,{Tabs:r.Z,TabItem:l.Z})}}]);