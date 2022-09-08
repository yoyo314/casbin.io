"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[2420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,b=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"k8s",title:"Kubernetes\u7684\u6388\u6743",description:"Kubernetes (k8s) RBAC & ABAC\u6388\u6743\u57fa\u4e8eCasbin \u7684\u4e2d\u95f4\u4ef6",keywords:["K8s-authz","Kubernetes","k8s"]},s=void 0,o={unversionedId:"k8s",id:"k8s",title:"Kubernetes\u7684\u6388\u6743",description:"Kubernetes (k8s) RBAC & ABAC\u6388\u6743\u57fa\u4e8eCasbin \u7684\u4e2d\u95f4\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/zh/docs/k8s",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/zh-CN",tags:[],version:"current",frontMatter:{id:"k8s",title:"Kubernetes\u7684\u6388\u6743",description:"Kubernetes (k8s) RBAC & ABAC\u6388\u6743\u57fa\u4e8eCasbin \u7684\u4e2d\u95f4\u4ef6",keywords:["K8s-authz","Kubernetes","k8s"]},sidebar:"docs",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/performance"},next:{title:"Admission Webhook For K8s",permalink:"/zh/docs/k8s-gatekeeper"}},l={},c=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," \u662f\u57fa\u4e8eCasbin\u5b9e\u73b0\u7684 Kubernetes (k8s) RBAC & ABAC\u6388\u6743\u4e2d\u95f4\u4ef6 \u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u4f7f\u7528 K8s \u9a8c\u8bc1\u8bbf\u95ee webhook \u6765\u68c0\u67e5 casbin \u5b9a\u4e49\u7684\u7b56\u7565\uff0c\u4e86\u89e3\u6bcf\u4e2a K8s \u8d44\u6e90\u7684\u8bf7\u6c42\u3002 \u8fd9\u4e9b\u81ea\u5b9a\u4e49\u63a5\u5165\u63a7\u5236\u5668\u5728\u7531 api \u670d\u52a1\u5668\u8f6c\u53d1\u5e76\u57fa\u4e8e\u903b\u8f91\u7684\u8bf7\u6c42\u5bf9\u8c61\u4e0a\u6267\u884c\u67d0\u79cd\u9a8c\u8bc1\uff0c \u5411\u5305\u542b\u5141\u8bb8\u6216\u62d2\u7edd\u8bf7\u6c42\u4fe1\u606f\u7684 api \u670d\u52a1\u5668\u53d1\u9001\u56de\u590d\u3002 \u8fd9\u4e9b\u63a7\u5236\u5668\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook")," \u5728 Kubernetes \u6ce8\u518c\u3002"),(0,a.kt)("p",null,"K8s API\u670d\u52a1\u5668\u9700\u8981\u77e5\u9053\u4f55\u65f6\u5c06\u4f20\u5165\u8bf7\u6c42\u53d1\u9001\u5230\u6211\u4eec\u7684\u63a5\u5165\u63a7\u5236\u5668\u3002 \u8fd9\u65b9\u9762\uff0c \u6211\u4eec\u5df2\u7ecf\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9a8c\u8bc1 webhook\uff0c\u5b83\u5c06\u4ee3\u7406\u4efb\u4f55\u7c7b\u578b\u7684 K8s \u8d44\u6e90/\u5b50\u8d44\u6e90\u7684\u8bf7\u6c42\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u7b56\u7565\u6838\u67e5\u3002 \u53ea\u6709\u5728casbin enforcer \u6388\u6743\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u5141\u8bb8\u7528\u6237\u5229\u7528\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u3002 ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"enforcer")," \u68c0\u67e5\u7b56\u7565\u4e2d\u5b9a\u4e49\u7684\u7528\u6237\u7684\u89d2\u8272\u3002 \u8fd9\u79cd\u4e2d\u95f4\u4ef6\u5c06\u90e8\u7f72\u5728K8s\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,a.kt)("p",null,"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u5404\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b63\u5728\u8fd0\u884c\u7684 k8s \u96c6\u7fa4\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7 Docker \u684c\u9762\u4e0a\u542f\u7528\u5b83\u6765\u8fd0\u884c\u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u5728\u672c\u5730\u6216\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8bbe\u7f6e\u5b8c\u6574\u7684 K8s \u751f\u6001\u7cfb\u7edf\u3002 \u60a8\u53ef\u4ee5\u6309\u7167\u8fd9\u4e2a\u8be6\u7ec6\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226"},"\u6307\u5357")," \u6765\u8bbe\u7f6e\u672c\u5730\u5728 Windows \u4e0a\u7684 k8s \u96c6\u7fa4\uff0c\u5982\u679c\u60f3\u8981\u4e3a Linux \u8bbe\u7f6e\uff0c\u8bf7\u70b9\u51fb\u8fd9\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"\u6307\u5357"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"Kubectl CLI \u8fd9\u662f\u5728Windows\u4e0a\u8bbe\u7f6e\u5b83\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://master--kubernetes-io-master-staging.netlify.app/docs/tasks/tools/install-kubectl-windows/"},"\u6307\u5357")," \u3002\u8fd8\u6709\u8fd9\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"Linux\u7684\u6307\u5357"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"OpenSSL")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4f7f\u7528 openssl \u5e76\u8fd0\u884c make certs \u6216\u4ee5\u4e0b\u811a\u672c\u4e3a\u6bcf\u4e2a\u7528\u6237\u751f\u6210\u8bc1\u4e66\u548c\u5bc6\u94a5\uff1a-")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./gen_cert.sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," \u624b\u52a8\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6784\u5efaDockerfile\uff0c\u7136\u540e\u6839\u636ebuild\u5728 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"\u90e8\u7f72\u6587\u4ef6\u4e0a\u66f4\u6539\u6784\u5efa\u7248\u672c"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," docker build-t casbin/k8s_authz:0.1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv")," \u4e2d\u5b9a\u4e49 casbin \u7b56\u7565\u3002 \u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"docs")," \u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8fd9\u4e9b\u7b56\u7565\u5de5\u4f5c\u7684\u4fe1\u606f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u90e8\u7f72\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u60a8\u7684\u7528\u6cd5\u66f4\u6539 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go")," \u7684\u7aef\u53e3\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u66f4\u6539\u9a8c\u8bc1webhook \u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"})," \u4e2d\u7684\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u7a0b\u5e8f\u6765\u5728 k8s \u96c6\u7fa4\u4e0a\u90e8\u7f72\u9a8c\u8bc1\u63a7\u5236\u5668\u548c webhook \ufe30 -"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f deployment.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u751f\u4ea7\u670d\u52a1\u5668\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a k8s ",(0,a.kt)("inlineCode",{parentName:"li"},"secret")," \u6765\u653e\u7f6e\u8bc1\u4e66\u4ee5\u4fdd\u8bc1\u5b89\u5168\u6027\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret generic casbin -n default \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981\u5b8c\u6210\u4e86\u8fd9\u4e00\u90e8\u5206\u6211\u4eec\u9700\u8981\u66f4\u6539 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},"\u8bc1\u4e66\u76ee\u5f55")," \uff0c\u7136\u540e\u5728 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"manifest"),"\u4e2d\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"secret")," \u663e\u793a")),(0,a.kt)("p",null,"\u73b0\u5728\u670d\u52a1\u5668\u5e94\u8be5\u8fd0\u884c\u5e76\u51c6\u5907\u9a8c\u8bc1\u5728 k8s \u8d44\u6e90\u4e0a\u64cd\u4f5c\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u60a8\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/casbin/lobby"}," Gitter\u9891\u9053 ")," \u4e0a\u8be2\u95ee\u3002"))}u.isMDXComponent=!0}}]);