"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9075],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7121:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=["components"],l={id:"rbac-with-domains",title:"RBAC mit Dom\xe4nen"},c=void 0,s={unversionedId:"rbac-with-domains",id:"rbac-with-domains",title:"RBAC mit Dom\xe4nen",description:"Rollendefinition mit Dom\xe4neninstanzen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/RBACWithDomains.mdx",sourceDirName:".",slug:"/rbac-with-domains",permalink:"/de/docs/rbac-with-domains",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/RBACWithDomains.mdx",tags:[],version:"current",frontMatter:{id:"rbac-with-domains",title:"RBAC mit Dom\xe4nen"},sidebar:"docs",previous:{title:"RBAC mit Muster",permalink:"/de/docs/rbac-with-pattern"},next:{title:"Casbin RBAC vs. RBAC96",permalink:"/de/docs/rbac-96"}},d={},p=[{value:"Rollendefinition mit Dom\xe4neninstanzen",id:"rollendefinition-mit-dom\xe4neninstanzen",level:2}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rollendefinition-mit-dom\xe4neninstanzen"},"Rollendefinition mit Dom\xe4neninstanzen"),(0,a.kt)("p",null,"Die RBAC-Rollen in Casbin k\xf6nnen global oder dom\xe4nenspezifisch sein. Domain-spezifische Rollen bedeuten, dass die Rollen eines Benutzers unterschiedlich sein k\xf6nnen, wenn der Benutzer sich in verschiedenen Dom\xe4nen/Mietern befindet. Dies ist sehr n\xfctzlich f\xfcr gro\xdfe Systeme wie eine Cloud, da die Benutzer in der Regel in verschiedenen Mietern sind."),(0,a.kt)("p",null,"Die Rollendefinition mit Dom\xe4nen/Mietern sollte so etwas wie folgt sein:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[role_definition]\ng = _, _, _\n")),(0,a.kt)("p",null,"Der 3. ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," bedeutet den Namen der Domain/Mieter, dieser Teil sollte nicht ge\xe4ndert werden. Dann kann die Politik lauten:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"p, admin, tenant1, data1, read\np, admin, tenant2, data2, read\n\ng, alice, admin, tenant1\ng, alice, user, tenant2\n")),(0,a.kt)("p",null,"Es bedeutet ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," Rolle in ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant1")," kann ",(0,a.kt)("inlineCode",{parentName:"p"},"data1")," lesen. Und ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," hat ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," Rolle in ",(0,a.kt)("inlineCode",{parentName:"p"},"Tenant1"),"und hat ",(0,a.kt)("inlineCode",{parentName:"p"},"Benutzer")," Rolle in ",(0,a.kt)("inlineCode",{parentName:"p"},"Tenant2"),". So kann sie ",(0,a.kt)("inlineCode",{parentName:"p"},"Daten 1")," lesen. Da ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," jedoch kein ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Tenant2"),"ist, kann sie ",(0,a.kt)("inlineCode",{parentName:"p"},"data2")," nicht lesen."),(0,a.kt)("p",null,"Dann solltest du in einem Matcher die Rolle wie unten \xfcberpr\xfcfen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[matchers]\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,"Beispiele finden Sie in der ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/examples/rbac_with_domains_model.conf"},"rbac_with_domains_model.conf"),"."))}u.isMDXComponent=!0}}]);