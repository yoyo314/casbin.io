"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[9883],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={id:"k8s-gatekeeper",title:"Admission Webhook For K8s",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["k8s-gatekeeper","Kubernetes","k8s"]},s="Kubernetes + Casbin Plugin: K8s-Gatekeeper",l={unversionedId:"k8s-gatekeeper",id:"k8s-gatekeeper",title:"Admission Webhook For K8s",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",source:"@site/docs/K8sGateKeeper.mdx",sourceDirName:".",slug:"/k8s-gatekeeper",permalink:"/docs/k8s-gatekeeper",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/K8sGateKeeper.mdx",tags:[],version:"current",lastUpdatedBy:"Aarav Arora",lastUpdatedAt:1664369368,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"k8s-gatekeeper",title:"Admission Webhook For K8s",description:"Kubernetes (k8s) RBAC & ABAC authorization middleware based on Casbin",keywords:["k8s-gatekeeper","Kubernetes","k8s"]},sidebar:"docs",previous:{title:"Authorization of Kubernetes",permalink:"/docs/k8s"},next:{title:"Authorization of Service Mesh through Envoy",permalink:"/docs/envoy"}},r={},p=[{value:"1. Overview &amp; Documents for Casbin K8s-Gatekeeper",id:"1-overview--documents-for-casbin-k8s-gatekeeper",level:2},{value:"0.1 A simple example",id:"01-a-simple-example",level:3},{value:"1.1 How Casbin K8s-gatekeeper works?",id:"11-how-casbin-k8s-gatekeeper-works",level:3},{value:"1.2 An example illustrating how it works.",id:"12-an-example-illustrating-how-it-works",level:3},{value:"2 Install K8s-gatekeeper",id:"2-install-k8s-gatekeeper",level:2},{value:"2.1 Internal webhook",id:"21-internal-webhook",level:3},{value:"2.1.1 Step 1: Build image",id:"211-step-1-build-image",level:4},{value:"2.1.2 Step 2: Set up services and deployments for K8s-gatekeeper",id:"212-step-2-set-up-services-and-deployments-for-k8s-gatekeeper",level:4},{value:"2.1.3 Step3: Install Crd Resources for K8s-gatekeeper",id:"213-step3-install-crd-resources-for-k8s-gatekeeper",level:4},{value:"2.2 External webhook",id:"22-external-webhook",level:3},{value:"2.3 Install K8s-gatekeeper via helm",id:"23-install-k8s-gatekeeper-via-helm",level:3},{value:"2.3.1 Step 1: Build image",id:"231-step-1-build-image",level:4},{value:"2.3.2 helm install",id:"232-helm-install",level:4},{value:"3. Try K8s-gatekeeper",id:"3-try-k8s-gatekeeper",level:2},{value:"3.1 Create Casbin Model and Policy",id:"31-create-casbin-model-and-policy",level:3},{value:"3.1.1 Create/Update Casbin Model and Policy via kubectl",id:"311-createupdate-casbin-model-and-policy-via-kubectl",level:4},{value:"3.1.2 Create /Updata Casbin Model and Policy via go-client we provide",id:"312-create-updata-casbin-model-and-policy-via-go-client-we-provide",level:4},{value:"3.1.2 Try whether K8s-gatekeeper works",id:"312-try-whether-k8s-gatekeeper-works",level:3},{value:"4. How to write Model and Policy K8s-gatekeeper",id:"4-how-to-write-model-and-policy-k8s-gatekeeper",level:2},{value:"4.1 Request Definition of Model",id:"41-request-definition-of-model",level:3},{value:"4.2 Matchers of Model",id:"42-matchers-of-model",level:3},{value:"4.2.1 Externsion functions",id:"421-externsion-functions",level:3},{value:"4.2.1.1 access",id:"4211-access",level:4},{value:"4.2.1.2 accessWithWildcard",id:"4212-accesswithwildcard",level:4},{value:"4.2.1.3 Functions Supporting Variable-length Argument",id:"4213-functions-supporting-variable-length-argument",level:3},{value:"4.2.1.2 Type conversion functions",id:"4212-type-conversion-functions",level:4},{value:"5. Advanced Settings",id:"5-advanced-settings",level:2},{value:"5.1 About Certificates",id:"51-about-certificates",level:3},{value:"5.1.1 Self-signed certificates",id:"511-self-signed-certificates",level:4},{value:"5.1.2 Legal certificates",id:"512-legal-certificates",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubernetes--casbin-plugin-k8s-gatekeeper"},"Kubernetes + Casbin Plugin: K8s-Gatekeeper"),(0,i.kt)("h2",{id:"1-overview--documents-for-casbin-k8s-gatekeeper"},"1. Overview & Documents for Casbin K8s-Gatekeeper"),(0,i.kt)("p",null,"Casbin K8s-GateKeeper is an Kubernetes admission webhook which integrates Casbin as the Access Control tool. By using Casbin K8s-GateKeeper, you can establish flexible rules to authorize or intercept any operation on K8s resources, WITHOUT writting any piece of code but several lines of declerative configurations of Casbin models and policies, which are part of Casbin ACL(Access Control List) language."),(0,i.kt)("p",null,"Casbin K8s-GateKeeper is developed and maintained by Casbin community. Repository of this project is here. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casbin/k8s-gatekeeper"},"https://github.com/casbin/k8s-gatekeeper")),(0,i.kt)("h3",{id:"01-a-simple-example"},"0.1 A simple example"),(0,i.kt)("p",null,'For example, you dont need to write any code, but using the following lines of configuration to achieve this function: "Forbid images with some specified tags to be used in any deployments":'),(0,i.kt)("p",null,"Model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr =  obj\n\n[policy_definition]\np =  obj,eft\n\n[policy_effect]\ne = !some(where (p.eft == deny))\n\n[matchers]\nm = r.obj.Request.Namespace == "default" && r.obj.Request.Resource.Resource =="deployments" && \\\ncontain(split(accessWithWildcard(${OBJECT}.Spec.Template.Spec.Containers , "*", "Image"),":",1) , p.obj)\n')),(0,i.kt)("p",null,"And Policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},'p, "1.14.1",deny\n')),(0,i.kt)("p",null,"These are in ordinary Casbin ACL language. Suppose you have already read chapters about them, it will be very easy to understand."),(0,i.kt)("p",null,"Casbin K8s-Gatekeeper has the following advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to use. Writting several lines of ACL is far better than writting lots of codes."),(0,i.kt)("li",{parentName:"ul"},"It allows hot update of configurations. You don't need to shut down the whole plugin to modify configurations."),(0,i.kt)("li",{parentName:"ul"},"It is fledxible. Arbitrary rules can be made on any k8s resource which can be explored with kubectl gatekeeper"),(0,i.kt)("li",{parentName:"ul"},"It screened the impelementation of k8s admission webhook, which is very complicated. You don't need to really know what K8s admission webhook is, or how to write code for it. What you need to do is to know the resource on which you want to put constraints, and then write Casbin ACL. Everyone knows that K8s is complex, but by using Casbin K8s-Gatekeeper your time can be saved."),(0,i.kt)("li",{parentName:"ul"},"It is maintained by Casbin Community. Feel free to contact us if anything about this plugin confuses you, or if you encounter any problem when trying this.")),(0,i.kt)("h3",{id:"11-how-casbin-k8s-gatekeeper-works"},"1.1 How Casbin K8s-gatekeeper works?"),(0,i.kt)("p",null,"K8s-gatekeeper is an admission webhook for k8s, using ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview"},"Casbin")," to apply arbitrary user-defined access control rules to help prevent any operation on k8s which administrator doesn't want."),(0,i.kt)("p",null,"Casbin is a powerful and efficient open-source access control library. It provides support for enforcing authorization based on various access control models. For more detail about Casbin, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview"},"Overview"),"."),(0,i.kt)("p",null,"Admission webhooks in K8s are HTTP callbacks that receive 'admission requests' and do something with them. In particular, K8s-gatekeeper is a special type of admission webhoook: 'ValidatingAdmissionWebhook', which can decide whether to accept or reject this admission request or not. As for admission requests, they are HTTP requests describing an operation on specified resources of K8s (for example, creating/deleting a deployment). For more about admission webhooks, see  ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#what-are-admission-webhooks"},"K8s official doc")),(0,i.kt)("h3",{id:"12-an-example-illustrating-how-it-works"},"1.2 An example illustrating how it works."),(0,i.kt)("p",null,"For example, when somebody wants to create a deployment containing a pod running nginx (using kubectl or k8s clients), K8s will generate an admission request, which (if translated into yaml format) can be something like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.1\n        ports:\n        - containerPort: 80\n")),(0,i.kt)("p",null,"This request will go through the process of all the middleware shown in the picture, including our K8s-gatekeeper. K8s-gatekeeper can detected all the Casbin enforcers stored in K8s's etcd, which is created and maintained by user(via kubectl or go-client we provide). Each enforcer contains a Casbin model and a Casbin policy. The admission request will be processed by every enforcer, one by one, and only by passing all enforcers can a request be accepted by this K8s-gatekeeper."),(0,i.kt)("p",null,"(If you do not understand what is Casbin enforcer, model or policy, see this document see: ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started"},"Get Started"),")"),(0,i.kt)("p",null,"For example, for some reason, the administrator want to forbid the apperance of image 'nginx:1.14.1' while allowing  'nginx:1.3.1', an enforcer containing the following rule and policy can be created: (We will explain how to create an enforcer, what these models and policies and how to write them in following chapters.)"),(0,i.kt)("p",null,"model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[request_definition]\nr =  obj\n\n[policy_definition]\np =  obj,eft\n\n[policy_effect]\ne = !some(where (p.eft == deny))\n\n[matchers]\nm = r.obj.Request.Namespace == "default" && r.obj.Request.Resource.Resource =="deployments" && \\\naccess(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Image") == p.obj\n\n')),(0,i.kt)("p",null,"policy: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},'p, "nginx:1.13.1",allow\np, "nginx:1.14.1",deny\n')),(0,i.kt)("p",null,"By creating an enforcer containg model and policy above, the previous admission request will be reject by this enforcer, which means K8s won't create this deployment."),(0,i.kt)("h2",{id:"2-install-k8s-gatekeeper"},"2 Install K8s-gatekeeper"),(0,i.kt)("p",null,"Three methods are provided for installing K8s-gatekeeper: External webhook, Internal webhook and helm."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note: these methods are only for user to try K8s-gatekeeper, and it is not secure. If you want to use it in productive environment, please make sure you read  ",(0,i.kt)("a",{parentName:"p",href:"#5-advanced-settings"},"Chapter 5. Advanced setting")," and make modifications accordingly when necessary before installation ")),(0,i.kt)("h3",{id:"21-internal-webhook"},"2.1 Internal webhook"),(0,i.kt)("h4",{id:"211-step-1-build-image"},"2.1.1 Step 1: Build image"),(0,i.kt)("p",null,"Internal webhook means the webhook itself will be implmented as a service inside k8s. Creating a service as well as deployment requires a image of K8s-gatekeeper. You can should build your own image."),(0,i.kt)("p",null,"Run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker build --target webhook -t k8s-gatekeeper .\n")),(0,i.kt)("p",null,"Then there will be a local image called 'k8s-gatekeeper:latest'."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note: if you are using minikube, please execute ",(0,i.kt)("inlineCode",{parentName:"p"},"eval $(minikube -p minikube docker-env)")," before running docker build*")),(0,i.kt)("h4",{id:"212-step-2-set-up-services-and-deployments-for-k8s-gatekeeper"},"2.1.2 Step 2: Set up services and deployments for K8s-gatekeeper"),(0,i.kt)("p",null,"Run following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f config/rbac.yaml\nkubectl apply -f config/webhook_deployment.yaml \nkubectl apply -f config/webhook_internal.yaml \n")),(0,i.kt)("p",null,"Soon K8s-gatekeeper should be running, and you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," to confirm that."),(0,i.kt)("h4",{id:"213-step3-install-crd-resources-for-k8s-gatekeeper"},"2.1.3 Step3: Install Crd Resources for K8s-gatekeeper"),(0,i.kt)("p",null,"Run following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f config/auth.casbin.org_casbinmodels.yaml \nkubectl apply -f config/auth.casbin.org_casbinpolicies.yaml\n")),(0,i.kt)("h3",{id:"22-external-webhook"},"2.2 External webhook"),(0,i.kt)("p",null,"External webhook means K8s-gatekeeper will be running outside the K8s, and K8s will visit K8s-gatekeeper like visiting a ordinary website. K8s has mandatory requirement that admission webhook must be HTTPS. For the sake of user's experience in trying K8s-gatekeeper, we have provided you a set of certificate as well as private key (though it is not secure). If you prefer to use your own certificate, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#5-advanced-settings"},"Chapter 5. Advanced setting")," to make adjustments to the certificate and private key."),(0,i.kt)("p",null,"The certificate we provide is issued for 'webhook.domain.local', so please modify the host (like /etc/hosts), point webhook.domain.local to the ip address on which K8s-gatekeeper is running."),(0,i.kt)("p",null,"Then execute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go mod tidy\ngo mod vendor\ngo run cmd/webhook/main.go\nkubectl apply -f config/auth.casbin.org_casbinmodels.yaml \nkubectl apply -f config/auth.casbin.org_casbinpolicies.yaml\nkubectl apply -f config/webhook_external.yaml \n")),(0,i.kt)("h3",{id:"23-install-k8s-gatekeeper-via-helm"},"2.3 Install K8s-gatekeeper via helm"),(0,i.kt)("h4",{id:"231-step-1-build-image"},"2.3.1 Step 1: Build image"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#211-step-1-build-image"},"Chapter 2.1.1")),(0,i.kt)("h4",{id:"232-helm-install"},"2.3.2 helm install"),(0,i.kt)("p",null,"Run\n",(0,i.kt)("inlineCode",{parentName:"p"},"helm install k8sgatekeeper ./k8sgatekeeper ")),(0,i.kt)("h2",{id:"3-try-k8s-gatekeeper"},"3. Try K8s-gatekeeper"),(0,i.kt)("h3",{id:"31-create-casbin-model-and-policy"},"3.1 Create Casbin Model and Policy"),(0,i.kt)("p",null,"You have 2 methods to create a model and policy: via kubectl or via go-client we provide."),(0,i.kt)("h4",{id:"311-createupdate-casbin-model-and-policy-via-kubectl"},"3.1.1 Create/Update Casbin Model and Policy via kubectl"),(0,i.kt)("p",null,"In K8s-gatekeeper, Casbin model is stored in a kind of CRD Resource called 'CasbinModel'. Its definition is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/auth.casbin.org_casbinmodels.yaml")),(0,i.kt)("p",null,"There are examples in ",(0,i.kt)("inlineCode",{parentName:"p"},"example/allowed_repo/model.yaml"),". You are supposed to pay attention to the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"metadata.name: name of the model. This name MUST be same with the name of CasbinPolicy object related to this model, so that K8s-gatekeeper can pair them and create an enforcer."),(0,i.kt)("li",{parentName:"ul"},'spec.enable: if this field is set to "false", this model(as well as CasbinPolicy object related to this model) will be ignored.'),(0,i.kt)("li",{parentName:"ul"},"spec.modelText: a string which contains the model text of a casbin model. ")),(0,i.kt)("p",null,"Casbin Policy is stored in another kind of CRD Resource called 'CasbinPolicy', whose definition can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/auth.casbin.org_casbinpolicies.yaml")),(0,i.kt)("p",null,"There are examples in ",(0,i.kt)("inlineCode",{parentName:"p"},"example/allowed_repo/policy.yaml"),". You are supposed to pay attention to the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"metadata.name: name of the policy. This name MUST be same with the name of CasbinModel object related to this policy, so that K8s-gatekeeper can pair them and create an enforcer."),(0,i.kt)("li",{parentName:"ul"},"spec.policyItem: a string which contains the policy text of a casbin model.")),(0,i.kt)("p",null,"After creating your own CasbinModel and CasbinPolicy files, use "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f <filename>\n")),(0,i.kt)("p",null,"to put them into effect."),(0,i.kt)("p",null,"Once a pair of CasbinModel and CasbinPolicy is created, within at most 5 seconds K8s-gatekeeper will be able to detect it."),(0,i.kt)("h4",{id:"312-create-updata-casbin-model-and-policy-via-go-client-we-provide"},"3.1.2 Create /Updata Casbin Model and Policy via go-client we provide"),(0,i.kt)("p",null,"It has been taken into consideration that there may be situation that it is not convenient to use shell to execute command directly on a node of K8s cluster, for example, when you are building a automatic cloud platform for your corporation. Therefore we have developed a go-client to create maintain CasbinModel and CasbinPolicy."),(0,i.kt)("p",null,"The go-client library is located in pkg/client. "),(0,i.kt)("p",null,"In client.go we provide a function to create a client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func NewK8sGateKeeperClient(externalClient bool) (*K8sGateKeeperClient, error) \n")),(0,i.kt)("p",null,"parameter externalClient means whether K8s-gatekeeper is running inside the K8s cluster or not."),(0,i.kt)("p",null,"In model.go we provide various functions to create/delete/modify CasbinModel. You can find out how to use there interfaces in model_test.go."),(0,i.kt)("p",null,"In policy.go we provide various functions to create/delete/modify CasbiPolicy. You can find out how to use there interfaces in policy_test.go."),(0,i.kt)("h3",{id:"312-try-whether-k8s-gatekeeper-works"},"3.1.2 Try whether K8s-gatekeeper works"),(0,i.kt)("p",null,"Suppose you have already created exactly the model and policy in example/allowed_repo, now try this "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f example/allowed_repo/testcase/reject_1.yaml\n")),(0,i.kt)("p",null,"you are supposed to find that k8s will reject this request, and mentioning that this webhook was the reason why this request is rejected. However, when you tries to apply example/allowed_repo/testcase/approve_2.yaml, it will be accepted."),(0,i.kt)("h2",{id:"4-how-to-write-model-and-policy-k8s-gatekeeper"},"4. How to write Model and Policy K8s-gatekeeper"),(0,i.kt)("p",null,"First of all, you are supposed to know the basic grammar of Casbin Models and Policies. If you haven't acknowledged it, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started"},"Get Started")," first. In this chapter we will assume that you have known what are Casbin Models and Policies."),(0,i.kt)("h3",{id:"41-request-definition-of-model"},"4.1 Request Definition of Model"),(0,i.kt)("p",null,"When K8s-gatekeeper is authorizing a request, the input is always one object: the go object of the Admission Request. Which means the enforcer will always be used like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"  ok, err := enforcer.Enforce(admission)\n")),(0,i.kt)("p",null,"in which admission is an ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," object defined by K8s's official go api ",(0,i.kt)("inlineCode",{parentName:"p"},'"k8s.io/api/admission/v1"'),". You can see the definition of this struct is this repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/api/blob/master/admission/v1/types.go"},"https://github.com/kubernetes/api/blob/master/admission/v1/types.go"),". Or see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-request-and-response"},"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-request-and-response")," for more information"),(0,i.kt)("p",null,"Therefore for any model used by K8s-gatekeeper, the definitiion of request_definition should always be like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"    [request_definition]\n    r =  obj\n")),(0,i.kt)("p",null,"Name 'obj' is not mandatory, as long as the name is consistent with the name used in ",(0,i.kt)("inlineCode",{parentName:"p"},"[matchers]")," part."),(0,i.kt)("h3",{id:"42-matchers-of-model"},"4.2 Matchers of Model"),(0,i.kt)("p",null,"You are supposed to use the ABAC feature of Casbin to write down your rule. However, the expression evaluator integrated in Casbin supports neither indexing in maps or arrays(slices), nor the expansion of array. Therefore K8s-gatekeeper provide various 'Casbin functions' as extension to impelement these features. If you still find that your demand cannot be fulfilled by these extensions, it is welcomed to start a issue, or pr directly."),(0,i.kt)("p",null,"If you don't know what is casbin funtion, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/function"},"Function")," for more information."),(0,i.kt)("p",null,"Here are the extension functions"),(0,i.kt)("h3",{id:"421-externsion-functions"},"4.2.1 Externsion functions"),(0,i.kt)("h4",{id:"4211-access"},"4.2.1.1 access"),(0,i.kt)("p",null,"Access is used to solve the problem that Casbin doesn't support indexing in map or array. ",(0,i.kt)("inlineCode",{parentName:"p"},"example/allowed_repo/model.yaml")," is the example of this function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[matchers]\nm = r.obj.Request.Namespace == "default" && r.obj.Request.Resource.Resource =="deployments" && \\\naccess(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Image") == p.obj\n')),(0,i.kt)("p",null,'In this matcher, access(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Image") is equal to ',(0,i.kt)("inlineCode",{parentName:"p"},"r.obj.Request.Object.Object.Spec.Template.Spec.Containers[0].Image"),", in which ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj.Request.Object.Object.Spec.Template.Spec.Containers")," is obviously a slice."),(0,i.kt)("p",null,"Access is also able to call simple funtion which has not parameters and one single return value. ",(0,i.kt)("inlineCode",{parentName:"p"},"example/container_resource_limit/model.yaml")," is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[matchers]\n  m = r.obj.Request.Namespace == "default" && r.obj.Request.Resource.Resource =="deployments" && \\\n  parseFloat(access(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Resources","Limits","cpu","Value")) >= parseFloat(p.cpu) && \\\n  parseFloat(access(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Resources","Limits","memory","Value")) >= parseFloat(p.memory)\n')),(0,i.kt)("p",null,"In this matcher, ",(0,i.kt)("inlineCode",{parentName:"p"},'access(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , 0, "Resources","Limits","cpu","Value")')," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},'r.obj.Request.Object.Object.Spec.Template.Spec.Containers[0].Resources.Limits["cpu"].Value()'),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"r.obj.Request.Object.Object.Spec.Template.Spec.Containers[0].Resources.Limits")," is a map, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Value()")," is a simple funtion which has not parameters and one single return value."),(0,i.kt)("h4",{id:"4212-accesswithwildcard"},"4.2.1.2 accessWithWildcard"),(0,i.kt)("p",null,'Sometimes it is natural to have demand like this: all elements in an array must have prefix "aaa". However, Casbin doesn\'t support ',(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop. However with ",(0,i.kt)("inlineCode",{parentName:"p"},"accessWithWildcard"),' and the "map/slice expansion" feature, such demand can be easily implemented. '),(0,i.kt)("p",null,"For example, suppose ",(0,i.kt)("inlineCode",{parentName:"p"},"a.b.c")," is an array ",(0,i.kt)("inlineCode",{parentName:"p"},"[aaa,bbb,ccc,ddd,eee]"),", then result of ",(0,i.kt)("inlineCode",{parentName:"p"},'accessWithWildcard(a,"b","c","*")')," will be a slice ",(0,i.kt)("inlineCode",{parentName:"p"},"[aaa,bbb,ccc,ddd,eee]"),". See? with wildcard ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," this slice is expanded."),(0,i.kt)("p",null,"Similarly, wildcard can be used more than once. For example, result of ",(0,i.kt)("inlineCode",{parentName:"p"},'accessWithWildcard(a,"b","c","*","*")')," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"[a.b.c[0][0], a.b.c[0][1]... a.b.c[1][0], a.b.c[1][1]...]")),(0,i.kt)("h3",{id:"4213-functions-supporting-variable-length-argument"},"4.2.1.3 Functions Supporting Variable-length Argument"),(0,i.kt)("p",null,"In the expression evaluator of Casbin, when a parameter is an array, it will be automatically expanded as the variable-length argument. Utilizing this feature to support the array/slice/map expansion, we also integrated serveral functions accepting an array/slice as parameter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contain(), accept multiple parameters, and returns whether there is an parameter other than the last parameter equals the last parameter "),(0,i.kt)("li",{parentName:"ul"},"split(a,b,c...,sep,index) it returns a slice which contains",(0,i.kt)("inlineCode",{parentName:"li"},"[splits(a,sep)[index], splits(b,sep)[index], splits(a,sep)[index]...]")),(0,i.kt)("li",{parentName:"ul"},"len() return the length of the variable-length argument"),(0,i.kt)("li",{parentName:"ul"},"matchRegex(a,b,c...regex) return whether a,b,c... all of them matches the given regex")),(0,i.kt)("p",null,"Here is an example in ",(0,i.kt)("inlineCode",{parentName:"p"},"example/disallowed_tag/model.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'    [matchers]\n    m = r.obj.Request.Namespace == "default" && r.obj.Request.Resource.Resource =="deployments" && \\\n    contain(split(accessWithWildcard(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , "*", "Image"),":",1) , p.obj)\n')),(0,i.kt)("p",null,"Assume ",(0,i.kt)("inlineCode",{parentName:"p"},'accessWithWildcard(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , "*", "Image")'),"returns ",(0,i.kt)("inlineCode",{parentName:"p"},'["a:b", "c:d", "e:f", "g:h"]')," then because splits supports variable-length argument, and splits operation is applied on each element, and eventualy element whose index is 1 will be selected and return, so ",(0,i.kt)("inlineCode",{parentName:"p"},'split(accessWithWildcard(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , "*", "Image"),":",1)')," returns ",(0,i.kt)("inlineCode",{parentName:"p"},'["b","d","f","h"]'),". And ",(0,i.kt)("inlineCode",{parentName:"p"},'contain(split(accessWithWildcard(r.obj.Request.Object.Object.Spec.Template.Spec.Containers , "*", "Image"),":",1) , p.obj)')," returns whether",(0,i.kt)("inlineCode",{parentName:"p"},"p.obj")," is contained in ",(0,i.kt)("inlineCode",{parentName:"p"},'["b","d","f","h"]')),(0,i.kt)("h4",{id:"4212-type-conversion-functions"},"4.2.1.2 Type conversion functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ParseFloat(): parse an integer to a float. (It is because that any number in comparsion must be converted into float)."),(0,i.kt)("li",{parentName:"ul"},"ToString(): convert an object to string. This object must have a basic type of string. (for example, an object of type ",(0,i.kt)("inlineCode",{parentName:"li"},"XXX")," when there is a statement ",(0,i.kt)("inlineCode",{parentName:"li"},"type XXX string"),")"),(0,i.kt)("li",{parentName:"ul"},"IsNil(): return whether the parameter is nil")),(0,i.kt)("h2",{id:"5-advanced-settings"},"5. Advanced Settings"),(0,i.kt)("h3",{id:"51-about-certificates"},"5.1 About Certificates"),(0,i.kt)("p",null,"In k8s, it is mandatory that a webhook should use HTTPS. There are two approaches to achieve that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use self-signed certificates(examples in this repo use this method )"),(0,i.kt)("li",{parentName:"ul"},"Use a normal certificate")),(0,i.kt)("h4",{id:"511-self-signed-certificates"},"5.1.1 Self-signed certificates"),(0,i.kt)("p",null,"Using a self-signed certificate means that the CA issuing the certificate is not one of the well-known CAs, therefore you must let k8s know this CA. "),(0,i.kt)("p",null,"Current the example in this repo uses a self-made CA, whose private key and certificate is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/certificate/ca.crt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config/certificate/ca.key"),". Certificate for the webhook is ",(0,i.kt)("inlineCode",{parentName:"p"},"config/certificate/server.crt"),', issued by the self-made CA. The domains of this certificate is "webhook.domain.local"(for external webhook) and "casbin-webhook-svc.default.svc"(for internal webhook)'),(0,i.kt)("p",null,"Information about CA is passed to k8s via webhook configuration files. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_external.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_internal.yaml"),' have a field called "CABundle", whose content is base64 encoded string of the certificate of the CA.'),(0,i.kt)("p",null,"In case that you need to change the certificate/domain (for example, maybe you want to put this webhook into another namespace of k8s while using internal webhook; or maybe you want to change a domain while using external webhook), the following procedures should be taken:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate a new CA")),(0,i.kt)("p",null,"Generate the private key for the fake CA"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"openssl genrsa -des3 -out ca.key 2048\n")),(0,i.kt)("p",null,"Remove the password protection of the private key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"openssl rsa -in ca.key -out ca.key\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Generate a private key for webhook server")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"openssl genrsa -des3 -out server.key 2048\nopenssl rsa -in server.key  -out server.key \n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Use the self-generate CA to sign the certificate for webhook")),(0,i.kt)("p",null,"Copy your system's openssl config file for temporary use. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl version -a")," to find out the location of the config file, ususally called  ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl.cnf"),"."),(0,i.kt)("p",null,"Find the ","[","req","]"," paragraph and add the following line: ",(0,i.kt)("inlineCode",{parentName:"p"},"req_extensions = v3_req")),(0,i.kt)("p",null,"Find the ","[","v3_req","]"," paragraph and add the following line: ",(0,i.kt)("inlineCode",{parentName:"p"},"subjectAltName = @alt_names")),(0,i.kt)("p",null,"Append following lines to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[alt_names]\nDNS.2=<The domain you want>\n")),(0,i.kt)("p",null,"The 'casbin-webhook-svc.default.svc' should be replaced with the real service name of your own service (if you decide to modify the service name)"),(0,i.kt)("p",null,"Use the modified config file to generate a certificate request file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"openssl req -new -nodes -keyout server.key -out server.csr -config openssl.cnf \n")),(0,i.kt)("p",null,"Use the self-made CA to respond the request and sign the certificate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -req -days 3650 -in server.csr -out server.crt -CA ca.crt  -CAkey ca.key -CAcreateserial -extensions v3_req -extensions SAN  -extfile openssl.cnf \n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Replace the 'CABundle' field")),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_external.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_internal.yaml"),' have a field called "CABundle", whose content is base64 encoded string of the  certificate of the CA.'),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"If you are using helm, similar changes need to be applied to helm charts.")),(0,i.kt)("h4",{id:"512-legal-certificates"},"5.1.2 Legal certificates"),(0,i.kt)("p",null,'If you uses legal certificates, you just don\'t need all these procedures. Remove "CABundle" field in ',(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_external.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config/webhook_internal.yaml"),", and change the domain in these files to the domain you own."))}d.isMDXComponent=!0}}]);