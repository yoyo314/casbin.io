"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[8154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,b=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"k8s",title:"Kubernetes \u306e\u627f\u8a8d",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["K8s-authz","Kubernetes","k8s"]},o=void 0,s={unversionedId:"k8s",id:"k8s",title:"Kubernetes \u306e\u627f\u8a8d",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/ja/docs/k8s",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"k8s",title:"Kubernetes \u306e\u627f\u8a8d",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["K8s-authz","Kubernetes","k8s"]},sidebar:"docs",previous:{title:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316",permalink:"/ja/docs/performance"},next:{title:"Envoy\u306b\u3088\u308b\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5\u306e\u627f\u8a8d",permalink:"/ja/docs/envoy"}},l={},c=[{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:2},{value:"\u4f7f\u7528\u6cd5",id:"\u4f7f\u7528\u6cd5",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," \u306f Kubernetes (k8s) RBAC & Casbin\u306b\u57fa\u3065\u304fABAC\u8a8d\u8a3c\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3067\u3059\u3002 \u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306f\u3001K8s\u691c\u8a3c\u30a2\u30c9\u30df\u30c3\u30b7\u30e7\u30f3\u306eWebhook\u3092\u4f7f\u7528\u3057\u3066\u3001k8s\u30ea\u30bd\u30fc\u30b9\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3054\u3068\u306bcasbin\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u30dd\u30ea\u30b7\u30fc\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30ab\u30b9\u30bf\u30e0\u30a2\u30c9\u30df\u30c3\u30b7\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001API \u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u8ee2\u9001\u3055\u308c\u30ed\u30b8\u30c3\u30af\u306b\u57fa\u3065\u3044\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u4f55\u3089\u304b\u306e\u691c\u8a3c\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u8981\u6c42\u3092\u8a31\u53ef\u3059\u308b\u304b\u62d2\u5426\u3059\u308b\u304b\u306e\u60c5\u5831\u3092\u542b\u3080API\u30b5\u30fc\u30d0\u30fc\u306b\u5fdc\u7b54\u3092\u9001\u308a\u8fd4\u3057\u307e\u3059 \u3053\u308c\u3089\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook")," \u3092\u4f7f\u7528\u3057\u3066 Kubernetes \u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"K8s API\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u30a2\u30c9\u30df\u30c3\u30b7\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u53d7\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u30d1\u30fc\u30c8\u306b\u3064\u3044\u3066 \u6211\u3005\u306f\u3001K8s\u30ea\u30bd\u30fc\u30b9/\u30b5\u30d6\u30ea\u30bd\u30fc\u30b9\u306e\u3042\u3089\u3086\u308b\u7a2e\u985e\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30d7\u30ed\u30ad\u30b7\u3057\u3001\u305d\u306e\u4e0a\u3067\u30dd\u30ea\u30b7\u30fc\u691c\u8a3c\u3092\u884c\u3046\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3Webhook\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u305f\u3002 \u30e6\u30fc\u30b6\u306f\u3001\u3053\u308c\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002 ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"enforcers")," \u306f\u3001\u30dd\u30ea\u30b7\u30fc\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30fc\u30eb\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002 \u3053\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306fK8s\u30af\u30e9\u30b9\u30bf\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u8981\u4ef6"},"\u8981\u4ef6"),(0,a.kt)("p",null,"\u7d9a\u884c\u3059\u308b\u524d\u306b\u3001\u4ee5\u4e0b\u3092\u5fc5\u305a\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u4e2d\u306e k8s \u30af\u30e9\u30b9\u30bf\u3002 Docker\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u4e0a\u3067\u30af\u30e9\u30b9\u30bf\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3001\u30ed\u30fc\u30ab\u30eb\u307e\u305f\u306f\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b8c\u5168\u306aK8s\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u8a73\u7d30\u306a ",(0,a.kt)("a",{parentName:"li",href:"https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226"},"\u30ac\u30a4\u30c9")," \u306b\u5f93\u3063\u3066\u3001Windows\u4e0a\u3067k8s\u30af\u30e9\u30b9\u30bf\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002Linux\u7528\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u3053\u306e ",(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"\u30ac\u30a4\u30c9"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"Kubectl CLI \u3053\u308c\u306f ",(0,a.kt)("a",{parentName:"li",href:"https://master--kubernetes-io-master-staging.netlify.app/docs/tasks/tools/install-kubectl-windows/"},"\u30ac\u30a4\u30c9")," \u3067 Windows \u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001\u3053\u306e ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"\u30ac\u30a4\u30c9")," \u3067 Linux \u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"OpenSSL")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6cd5"},"\u4f7f\u7528\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"openssl \u3092\u4f7f\u7528\u3057\u3066\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u8a3c\u660e\u66f8\u3068\u9375\u3092\u751f\u6210\u3057\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./gen_cert.sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," \u304b\u3089docker \u30a4\u30e1\u30fc\u30b8\u3092\u624b\u52d5\u3067\u30d3\u30eb\u30c9\u3057\u3001\u3053\u3053\u3068\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"\u30d5\u30a1\u30a4\u30eb"),"\u3067\u30d3\u30eb\u30c9\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5909\u66f4\u3057\u307e\u3059\u3002 \u5efa\u7269\u306b\u3088\u308c\u3070")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," docker build -t casbin/k8s_authz:0.1 .\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," \u3068 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv")," \u3067\u30ab\u30b9\u30d3\u30f3\u30dd\u30ea\u30b7\u30fc\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30dd\u30ea\u30b7\u30fc\u306e\u52d5\u4f5c\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u77e5\u308b\u306b\u306f\u3001 ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u524d\u306b\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go")," \u3067\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3057\u3001\u4f7f\u7528\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u691c\u8a3c\u306e webhook \u8a2d\u5b9a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"},"\u30d5\u30a1\u30a4\u30eb")," \u3067\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001\u691c\u8a3c\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068 k8s \u30af\u30e9\u30b9\u30bf\u306e webhook \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f deployment.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u756a\u30b5\u30fc\u30d0\u30fc\u306b\u3064\u3044\u3066\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u76ee\u7684\u3067\u8a3c\u660e\u66f8\u3092\u914d\u7f6e\u3059\u308b\u305f\u3081\u306b\u3001k8s ",(0,a.kt)("inlineCode",{parentName:"li"},"secret")," \u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret generic casbin -n default \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once, this part is done we need to change the directory of the certs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},"main.go")," and then in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"manifests")," with that of the ",(0,a.kt)("inlineCode",{parentName:"li"},"secret"),".")),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001\u30b5\u30fc\u30d0\u306f\u5b9f\u884c\u4e2d\u3067\u3001k8s \u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u64cd\u4f5c\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u3044\u305a\u308c\u304b\u306e\u30af\u30a8\u30ea\u304c\u3042\u308b\u5834\u5408\u306f\u3001gitter ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/casbin/lobby"},"\u30c1\u30e3\u30f3\u30cd\u30eb")," \u3067\u554f\u3044\u5408\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);