"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={id:"k8s",title:"Authorization of Kubernetes"},l=void 0,u={unversionedId:"k8s",id:"k8s",title:"Authorization of Kubernetes",description:"K8s-authz is a Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin. This middleware uses K8s validation admission webhook to check the policies defined by casbin, for every request of the k8s resources. These custom admission controllers perform some kind of validation on the request object that was forwarded by api server and based on a logic, sends back a response to api server that contains information on whether to allow or reject the request. These controllers are registered with Kubernetes using the ValidatingAdmissionWebhook.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/K8sAuthz.mdx",sourceDirName:".",slug:"/k8s",permalink:"/fr/docs/k8s",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/K8sAuthz.mdx",tags:[],version:"current",frontMatter:{id:"k8s",title:"Authorization of Kubernetes"},sidebar:"docs",previous:{title:"Performance Optimization",permalink:"/fr/docs/performance"},next:{title:"Authorization of Service Mesh through Envoy",permalink:"/fr/docs/envoy"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz"},"K8s-authz")," is a Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin. This middleware uses K8s validation admission webhook to check the policies defined by casbin, for every request of the k8s resources. These custom admission controllers perform some kind of validation on the request object that was forwarded by api server and based on a logic, sends back a response to api server that contains information on whether to allow or reject the request. These controllers are registered with Kubernetes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingAdmissionWebhook"),"."),(0,a.kt)("p",null,"The K8s API server needs to know when to send the incoming request to our admission controller. For this part, we have defined a validation webhook which would proxy the requests for any type of K8s resource/sub-resource and perform policy verification on it. The user would be allowed to perform the operations on these resources, only if the casbin enforcer authorizes it. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started#new-a-casbin-enforcer"},"enforcer")," checks the roles of the user defined in the policies. This middleware would be deployed on the K8s cluster."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before proceeding, make sure to have the following-"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running k8s Cluster. You can either run the clusters through Docker by enabling it on the Docker Desktop or you can setup the complete K8s ecosytem locally or on your server. You can follow this detailed ",(0,a.kt)("a",{parentName:"li",href:"https://rominirani.com/tutorial-getting-started-with-kubernetes-on-your-windows-laptop-with-minikube-3269b54a226"},"guide")," to setup the k8s cluster locally on Windows or this ",(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04"},"guide")," if want to setup for Linux."),(0,a.kt)("li",{parentName:"ul"},"Kubectl CLI This is the ",(0,a.kt)("a",{parentName:"li",href:"https://master--kubernetes-io-master-staging.netlify.app/docs/tasks/tools/install-kubectl-windows/"},"guide")," to setup it on Windows and this ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"guide")," for Linux."),(0,a.kt)("li",{parentName:"ul"},"OpenSSL")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate the certificates and keys for every user by using openssl and running the following script:-")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./gen_cert.sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build the docker image from the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/master/Dockerfile"},"Dockerfile")," manually by running the following command and then change the build version here and at the deployment ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/casbin/k8s-authz/blob/718f58c46e3dbf79063b5b1c18348c2fee5de9e9/manifests/deployment.yaml#L18"},"file"),", as per the builds.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," docker build -t casbin/k8s_authz:0.1 .\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define the casbin policies in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/model.conf"},"model.conf")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/config/policy.csv"},"policy.csv"),". You can refer the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"docs")," to get to know more about the working of these policies.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Before deploying, you can change the ports in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/main.go"},"main.go")," and also in the validation webhook configuration ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-authz/blob/master/manifests/deployment.yaml"},"file")," depending on your usage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy the validation controller and the webhook on k8s cluster by running:-"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f deployment.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a production server, we need to create a k8s ",(0,a.kt)("inlineCode",{parentName:"li"},"secret")," to place the certificates for security purposes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret generic casbin -n default \\\n  --from-file=key.pem=certs/casbin-key.pem \\\n  --from-file=cert.pem=certs/casbin-crt.pem\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once, this part is done we need to change the directory of the certs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/main.go#L26"},"main.go")," and then in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ashish493/k8s-authz/blob/3560551427c0431a9d4594ad1206f084ede37c49/manifests/deployment.yaml#L22"},"manifests")," with that of the ",(0,a.kt)("inlineCode",{parentName:"li"},"secret"),".")),(0,a.kt)("p",null,"Now the server should be running and ready to validate the requests for the operations on the k8s resources."),(0,a.kt)("p",null,"In case of any query, you can ask on on our gitter ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/casbin/lobby"},"channel"),"."))}d.isMDXComponent=!0}}]);