"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9278],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,b=m["".concat(l,".").concat(k)]||m[k]||p[k]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"k8s",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u041a\u0443\u0431\u0435\u0440\u043d\u0435\u0442\u043e\u0432",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["K8s-authz","Kubernetes","k8s"]},l=void 0,u={unversionedId:"k8s",id:"k8s",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u041a\u0443\u0431\u0435\u0440\u043d\u0435\u0442\u043e\u0432",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/ru/docs/k8s",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/K8sAuthz.mdx",tags:[],version:"current",frontMatter:{id:"k8s",title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u041a\u0443\u0431\u0435\u0440\u043d\u0435\u0442\u043e\u0432",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["K8s-authz","Kubernetes","k8s"]},sidebar:"docs",previous:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",permalink:"/ru/docs/performance"},next:{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0430\u043d\u043d\u0438\u043a\u0430",permalink:"/ru/docs/envoy"}},c={},p=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," \u044d\u0442\u043e Kubernetes (k8s) RBAC & ABAC authorization middleware \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Casbin. \u042d\u0442\u043e\u0442 middleware \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 K8s \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e webhook \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 casbin, \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 k8s \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u042d\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u043f\u0435\u0440\u0435\u0441\u043b\u0430\u043d api \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438 \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0435, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 api \u0441\u0435\u0440\u0432\u0435\u0440, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u043c, \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441. \u042d\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 Kubernetes \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook"),"."),(0,i.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 K8s \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u043d\u0430\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0443 \u043f\u0440\u0438\u0451\u043c\u0430. \u0421\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u043c\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043b\u0438 \u0432\u0435\u0431-\u0445\u0443\u043a \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430 K8s \u0440\u0435\u0441\u0443\u0440\u0441/\u043f\u043e\u0434\u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043b \u0438\u0445. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u044d\u0442\u0438\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c, \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043e\u043d \u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"\u041f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0440\u043e\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0445. \u042d\u0442\u043e\u0442 middleware \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442 \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 K8s."),(0,i.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 k8s Cluster. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0447\u0435\u0440\u0435\u0437 Docker, \u0432\u043a\u043b\u044e\u0447\u0438\u0432 \u0438\u0445 \u043d\u0430 Docker Desktop \u0438\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e K8s ytem \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u043c\u0443 ",(0,i.kt)("a",{parentName:"li",href:"https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226"},"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 k8 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0432 Windows \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443")," , \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043b\u044f Linux."),(0,i.kt)("li",{parentName:"ul"},"Kubectl CLI \u042d\u0442\u043e ",(0,i.kt)("a",{parentName:"li",href:"https://master--kubernetes-io-master-staging.netlify.app/docs/tasks/tools/install-kubectl-windows/"},"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e")," \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u0430 Windows \u0438 \u044d\u0442\u043e ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e")," \u0434\u043b\u044f Linux."),(0,i.kt)("li",{parentName:"ul"},"OpenSSL")),(0,i.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043a\u043b\u044e\u0447\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f openssl \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043a\u0440\u0438\u043f\u0442: -")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gen_cert.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043e\u0431\u0440\u0430\u0437 \u0434\u043e\u043a\u0435\u0440 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0438 \u0437\u0430\u0442\u0435\u043c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0432\u0435\u0440\u0441\u0438\u044e \u0441\u0431\u043e\u0440\u043a\u0438 \u0437\u0434\u0435\u0441\u044c \u0438 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"\u0444\u0430\u0439\u043b\u0430"),", \u043f\u043e \u0441\u0431\u043e\u0440\u043a\u0430\u043c.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," docker build -t casbin/k8s_authz:0.1 .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043a\u0430\u0441\u0431\u0438\u043d\u0430 \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")," , \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u044d\u0442\u0438\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u0442\u044b \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go")," , \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 webhook ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"},"\u0444\u0430\u0439\u043b\u0430")," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438 webhook \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 k8s \u043f\u0443\u0442\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430:-"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u043a\u0443\u0431\u0435\u043a\u0442\u043b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 -f deployment.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a production server, we need to create a k8s ",(0,i.kt)("inlineCode",{parentName:"li"},"secret")," to place the certificates for security purposes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043e\u0431\u0449\u0438\u0439 casbin -n \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041e\u0434\u043d\u0430\u0436\u0434\u044b, \u044d\u0442\u0430 \u0447\u0430\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},". o")," \u0438 \u0437\u0430\u0442\u0435\u043c \u0432 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0435")," \u0441 \u043c\u0435\u0442\u043a\u043e\u0439 ``.")),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0438 \u0433\u043e\u0442\u043e\u0432 \u043a \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 k8."),(0,i.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043b\u044e\u0431\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u043a\u0430\u043d\u0430\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/casbin/lobby"},"\u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435"),"."))}k.isMDXComponent=!0}}]);