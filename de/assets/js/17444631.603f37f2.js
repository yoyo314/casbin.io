"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9498],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,v=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return t?r.createElement(v,a(a({ref:n},d),{},{components:t})):r.createElement(v,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2974:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],u={id:"envoy",title:"Genehmigung des Service-Mesh durch den Gesandten",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},l=void 0,s={unversionedId:"envoy",id:"envoy",title:"Genehmigung des Service-Mesh durch den Gesandten",description:"Authorization of Service Mesh through Envoy",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/EnvoyAuthz.mdx",sourceDirName:".",slug:"/envoy",permalink:"/de/docs/envoy",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/EnvoyAuthz.mdx",tags:[],version:"current",frontMatter:{id:"envoy",title:"Genehmigung des Service-Mesh durch den Gesandten",description:"Authorization of Service Mesh through Envoy",keywords:["Envoy","Envoy-authz","Istio"]},sidebar:"docs",previous:{title:"Autorisierung von Kubernetes",permalink:"/de/docs/k8s"},next:{title:"Admin-Portal",permalink:"/de/docs/admin-portal"}},d={},c=[{value:"Anforderungen",id:"anforderungen",level:2},{value:"Arbeiten von Middleware",id:"arbeiten-von-middleware",level:2},{value:"Auslastung",id:"auslastung",level:2},{value:"Integration in Istio",id:"integration-in-istio",level:2}],p={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/envoy-authz"},"Envoy-authz")," ist eine Middleware von Envoy, die externe RBAC & ABAC-Autorisierung durch Kasbin durchf\xfchrt. Diese Middleware verwendet ",(0,o.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"},"die externe Autorisierungs-API des Envoy")," \xfcber einen gRPC-Server. Dieser Proxy w\xfcrde in jeder Art von Gesandtennetzen wie Istio eingesetzt werden."),(0,o.kt)("h2",{id:"anforderungen"},"Anforderungen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gesandte 1.17+"),(0,o.kt)("li",{parentName:"ul"},"Istio oder jede Art von Service-Netz"),(0,o.kt)("li",{parentName:"ul"},"grpc Abh\xe4ngigkeiten")),(0,o.kt)("p",null,"Abh\xe4ngigkeiten werden durch ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," verwaltet."),(0,o.kt)("h2",{id:"arbeiten-von-middleware"},"Arbeiten von Middleware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ein Client w\xfcrde eine http-Anfrage stellen."),(0,o.kt)("li",{parentName:"ul"},"Envoy-Proxy w\xfcrde diese Anfrage an den grpc-Server senden."),(0,o.kt)("li",{parentName:"ul"},"Der grpc Server autorisiert dann die Anfrage basierend auf Casbin-Richtlinien."),(0,o.kt)("li",{parentName:"ul"},"Wenn die Anfrage autorisiert wird, wird sie durch oder anderweitig versandt, sie wird abgelehnt.")),(0,o.kt)("p",null,"Der grpc Server basiert auf Protokollpuffer von ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/envoy/blob/master/api/envoy/service/auth/v2alpha/external_auth.proto"},"external_auth.proto")," von Envoy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Eine generische Schnittstelle, um Autorisierungspr\xfcfung bei eingehenden\n// Anfragen an einen vernetzten Dienst durchzuf\xfchren.\nservice Authorization {\n  // Autorisierungspr\xfcfung basierend auf den Attributen der\n  // eingehenden Anfrage durchf\xfchren und gibt den Status `OK` oder nicht `OK` zur\xfcck.\n  rpc Check(v2.CheckRequest) liefert (v2.CheckResponse);\n}\n")),(0,o.kt)("p",null,"Aus der obigen Proto-Datei m\xfcssen wir ",(0,o.kt)("inlineCode",{parentName:"p"},"Check()")," Dienst im Autorisierungsserver verwenden."),(0,o.kt)("h2",{id:"auslastung"},"Auslastung"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Definieren Sie die Casbin-Richtlinien unter Konfigurationsdateien, indem Sie diesem ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-it-works"},"Leitfaden")," folgen.")),(0,o.kt)("p",null,"Sie k\xf6nnen Ihre Richtlinien im ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.io/editor/"},"Casbin-Editor")," \xfcberpr\xfcfen/testen."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Starte den Autorisierungsserver indem du l\xe4uft:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go build .\n$ ./authz \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lade die Gesandte Konfiguration:-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$  envoy -c authz.yaml -l info\n")),(0,o.kt)("p",null,"Sobald der Gesandte beginnt, f\xe4ngt er an, Anfragen f\xfcr den Genehmigungsprozess abzufangen."),(0,o.kt)("h2",{id:"integration-in-istio"},"Integration in Istio"),(0,o.kt)("p",null,"Sie m\xfcssen benutzerdefinierte Kopfzeilen senden, die Benutzernamen in den JWT Token OF Headern enthalten, damit diese Middleware funktioniert. Sie k\xf6nnen die offiziellen ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/v1.4/docs/tasks/policy-enforcement/control-headers/"},"Istio Docs")," \xfcberpr\xfcfen, um weitere Informationen \xfcber die \xc4nderung ",(0,o.kt)("inlineCode",{parentName:"p"},"Anfrage-Header")," zu erhalten."))}f.isMDXComponent=!0}}]);