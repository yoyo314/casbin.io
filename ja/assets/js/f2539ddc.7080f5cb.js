"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7287],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(o,".").concat(c)]||d[c]||p[c]||l;return n?r.createElement(k,u(u({ref:e},m),{},{components:n})):r.createElement(k,u({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function u(t){var e=t.children,n=t.hidden,u=t.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,u),hidden:n},e)}},5488:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(3117),a=n(7294),l=n(6010),u=n(2389),i=n(7392),o=n(7094),s=n(2466),m="tabList__CuJ",p="tabItem_LNqP";function d(t){var e,n,u=t.lazy,d=t.block,c=t.defaultValue,k=t.values,N=t.groupId,g=t.className,b=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.l)(h,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(e=null!=c?c:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:b[0].props.value;if(null!==y&&!h.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.U)(),C=v.tabGroupChoices,T=v.setTabGroupChoices,w=(0,a.useState)(y),A=w[0],O=w[1],R=[],B=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var E=C[N];null!=E&&E!==A&&h.some((function(t){return t.value===E}))&&O(E)}var P=function(t){var e=t.currentTarget,n=R.indexOf(e),r=h[n].value;r!==A&&(B(e),O(r),null!=N&&T(N,String(r)))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r,a=R.indexOf(t.currentTarget)+1;n=null!=(r=R[a])?r:R[0];break;case"ArrowLeft":var l,u=R.indexOf(t.currentTarget)-1;n=null!=(l=R[u])?l:R[R.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},h.map((function(t){var e=t.value,n=t.label,u=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:function(t){return R.push(t)},onKeyDown:j,onFocus:P,onClick:P},u,{className:(0,l.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":A===e})}),null!=n?n:e)}))),u?(0,a.cloneElement)(b.filter((function(t){return t.props.value===A}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==A})}))))}function c(t){var e=(0,u.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},2082:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),u=n(5488),i=n(5162),o=["components"],s={id:"benchmark",title:"Benchmarks"},m=void 0,p={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"The overhead of policy enforcement is benchmarked in modelbtest.go. The testbed is:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/ja/docs/benchmark",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Benchmark.mdx",tags:[],version:"current",frontMatter:{id:"benchmark",title:"Benchmarks"},sidebar:"docs",previous:{title:"Multi-threading",permalink:"/ja/docs/multi-threading"},next:{title:"Performance Optimization",permalink:"/ja/docs/performance"}},d={},c=[],k={toc:c};function N(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"The overhead of policy enforcement is benchmarked in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin/blob/master/model_b_test.go"},"model_b_test.go"),". The testbed is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2601 Mhz, 4 Core(s), 8 Logical Processor(s)\n")),(0,l.kt)("p",null,"The benchmarking result of ",(0,l.kt)("inlineCode",{parentName:"p"},"go test -bench=. -benchmem")," is as follows (op = an ",(0,l.kt)("inlineCode",{parentName:"p"},"Enforce()")," call, ms = millisecond, KB = kilo bytes):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test case"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,l.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory overhead (KB)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.015493"),(0,l.kt)("td",{parentName:"tr",align:null},"5.649")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021738"),(0,l.kt)("td",{parentName:"tr",align:null},"7.522")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.164309"),(0,l.kt)("td",{parentName:"tr",align:null},"80.620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.258262"),(0,l.kt)("td",{parentName:"tr",align:null},"765.152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"23.916776"),(0,l.kt)("td",{parentName:"tr",align:null},"7,606")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.021146"),(0,l.kt)("td",{parentName:"tr",align:null},"7.906")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.032696"),(0,l.kt)("td",{parentName:"tr",align:null},"10.755")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.007510"),(0,l.kt)("td",{parentName:"tr",align:null},"2.328")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.045398"),(0,l.kt)("td",{parentName:"tr",align:null},"91.774")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.023281"),(0,l.kt)("td",{parentName:"tr",align:null},"8.370")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.016389"),(0,l.kt)("td",{parentName:"tr",align:null},"5.313"))))),(0,l.kt)(i.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("p",null,"The overhead of policy enforcement of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp"},"Casbin CPP")," is benchmarked in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/casbin-cpp/tree/master/tests/benchmarks"},(0,l.kt)("inlineCode",{parentName:"a"},"tests/benchmarks"))," directory with the help of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/benchmark"},"Google's benchmarking tool"),". The testbed for these benchmarks is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz, 4 cores, 4 threads\n")),(0,l.kt)("p",null,"Here is the benchmarking result of executing ",(0,l.kt)("inlineCode",{parentName:"p"},"casbin_benchmark")," target built in ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," configuration (op = an ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test case"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,l.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.113")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"21.450")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.041")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0246")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.035"))))),(0,l.kt)(i.Z,{value:"Lua (JIT)",label:"Lua (JIT)",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"Lua Casbin's")," overhead of policy enforcement is benchmarked in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/blob/master/bench.lua"},"bench.lua"),". The testbed was a Ubuntu VM with the CPU:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AMD Ryzen(TM) 5 4600H CPU @ 3.0GHz, 6 Cores, 12 Threads\n")),(0,l.kt)("p",null,"The benchmarking result of ",(0,l.kt)("inlineCode",{parentName:"p"},"luajit bench.lua")," is as follows (op = an ",(0,l.kt)("inlineCode",{parentName:"p"},"enforce()")," call, ms = millisecond):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Test case"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule size"),(0,l.kt)("th",{parentName:"tr",align:null},"Time overhead (ms/op)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null},"2 rules (2 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0533")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0972")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (small)"),(0,l.kt)("td",{parentName:"tr",align:null},"1100 rules (1000 users, 100 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8598")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (medium)"),(0,l.kt)("td",{parentName:"tr",align:null},"11000 rules (10000 users, 1000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC (large)"),(0,l.kt)("td",{parentName:"tr",align:null},"110000 rules (100000 users, 10000 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"90.3217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with resource roles"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1124")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBAC with domains/tenants"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role, 2 domains)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABAC"),(0,l.kt)("td",{parentName:"tr",align:null},"0 rule (0 user)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESTful"),(0,l.kt)("td",{parentName:"tr",align:null},"5 rules (3 users)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1085")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deny-override"),(0,l.kt)("td",{parentName:"tr",align:null},"6 rules (2 users, 1 role)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"9 rules (2 users, 2 roles)"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1437")))))))}N.isMDXComponent=!0}}]);