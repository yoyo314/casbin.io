"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9316],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7881:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],u={id:"superadmin",title:"Super-Admin"},s=void 0,l={unversionedId:"superadmin",id:"superadmin",title:"Super-Admin",description:"Super Admin ist der Administrator des gesamten Systems, wir k\xf6nnen es in Modellen wie RBAC, ABAC und RBAC mit Dom\xe4nen etc. verwenden. Das detaillierte Beispiel lautet wie folgt:",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/SuperAdmin.mdx",sourceDirName:".",slug:"/superadmin",permalink:"/de/docs/superadmin",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/SuperAdmin.mdx",tags:[],version:"current",frontMatter:{id:"superadmin",title:"Super-Admin"},sidebar:"docs",previous:{title:"Priorit\xe4tsmodell",permalink:"/de/docs/priority-model"},next:{title:"Modellspeicher",permalink:"/de/docs/model-storage"}},c={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Super Admin ist der Administrator des gesamten Systems, wir k\xf6nnen es in Modellen wie RBAC, ABAC und RBAC mit Dom\xe4nen etc. verwenden. Das detaillierte Beispiel lautet wie folgt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n')),(0,o.kt)("p",null,"Es veranschaulicht, dass wie f\xfcr die definierte ",(0,o.kt)("inlineCode",{parentName:"p"},"request_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_definition"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_effect")," und ",(0,o.kt)("inlineCode",{parentName:"p"},"Matcher"),", Kasbin beurteilt, ob die Anfrage mit der Richtlinie \xfcbereinstimmen kann, oder am wichtigsten, wenn der ",(0,o.kt)("inlineCode",{parentName:"p"},"Unter")," root ist. Sobald das Urteil richtig ist, ist die Genehmigung erlaubt, und der Benutzer hat die Erlaubnis, alles zu tun.",(0,o.kt)("br",{parentName:"p"}),"\n","Genau wie das Root von Linux-Systemen, nachdem die Benutzer als root autorisiert sind, dann haben wir die Berechtigung, auf alle Dateien und Einstellungen zuzugreifen. Also, wenn wir wollen, dass ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," den vollen Zugriff auf das gesamte System hat wir k\xf6nnen es zum Super-Admin werden lassen, dann hat der ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," die Erlaubnis, alles zu tun."))}m.isMDXComponent=!0}}]);