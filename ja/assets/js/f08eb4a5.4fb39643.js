"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5622],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),m=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(a),s=n,h=c["".concat(u,".").concat(s)]||c[s]||o[s]||l;return a?r.createElement(h,i(i({ref:e},d),{},{components:a})):r.createElement(h,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return i}});var r=a(7294),n=a(6010),l="tabItem_Ymn6";function i(t){var e=t.children,a=t.hidden,i=t.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},e)}},5488:function(t,e,a){a.d(e,{Z:function(){return s}});var r=a(3117),n=a(7294),l=a(6010),i=a(2389),p=a(7392),u=a(7094),m=a(2466),d="tabList__CuJ",o="tabItem_LNqP";function c(t){var e,a,i=t.lazy,c=t.block,s=t.defaultValue,h=t.values,k=t.groupId,N=t.className,b=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,p.l)(g,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(e=null!=s?s:null==(a=b.find((function(t){return t.props.default})))?void 0:a.props.value)?e:b[0].props.value;if(null!==y&&!g.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,u.U)(),w=v.tabGroupChoices,S=v.setTabGroupChoices,C=(0,n.useState)(y),T=C[0],x=C[1],P=[],E=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var R=w[k];null!=R&&R!==T&&g.some((function(t){return t.value===R}))&&x(R)}var W=function(t){var e=t.currentTarget,a=P.indexOf(e),r=g[a].value;r!==T&&(E(e),x(r),null!=k&&S(k,String(r)))},O=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r,n=P.indexOf(t.currentTarget)+1;a=null!=(r=P[n])?r:P[0];break;case"ArrowLeft":var l,i=P.indexOf(t.currentTarget)-1;a=null!=(l=P[i])?l:P[P.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},g.map((function(t){var e=t.value,a=t.label,i=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return P.push(t)},onKeyDown:O,onFocus:W,onClick:W},i,{className:(0,l.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":T===e})}),null!=a?a:e)}))),i?(0,n.cloneElement)(b.filter((function(t){return t.props.value===T}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function s(t){var e=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(e)},t))}},3140:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return s}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),i=a(5488),p=a(5162),u=["components"],m={id:"watchers",title:"Watchers"},d=void 0,o={unversionedId:"watchers",id:"watchers",title:"Watchers",description:"etcd \u306e\u3088\u3046\u306a\u5206\u6563\u578b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306eCasbin \u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u3067\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u8907\u6570\u306eCasbin\u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u3092\u540c\u6642\u306b\u4f7f\u7528\u3057\u3066\u3001\u5927\u91cf\u306e\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Watchers.mdx",sourceDirName:".",slug:"/watchers",permalink:"/ja/docs/watchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Watchers.mdx",tags:[],version:"current",frontMatter:{id:"watchers",title:"Watchers"},sidebar:"docs",previous:{title:"\u30a2\u30c0\u30d7\u30bf\u30fc",permalink:"/ja/docs/adapters"},next:{title:"\u6d3e\u9063\u8005",permalink:"/ja/docs/dispatchers"}},c={},s=[{value:"WatcherEx",id:"watcherex",level:2}],h={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/coreos/etcd"},"etcd")," \u306e\u3088\u3046\u306a\u5206\u6563\u578b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306eCasbin \u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u3067\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u8907\u6570\u306eCasbin\u30a8\u30f3\u30d5\u30a9\u30fc\u30b5\u30fc\u3092\u540c\u6642\u306b\u4f7f\u7528\u3057\u3066\u3001\u5927\u91cf\u306e\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30dd\u30ea\u30b7\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8\u30a2\u30c0\u30d7\u30bf\u3068\u540c\u69d8\u306b\u3001\u79c1\u305f\u3061\u306f\u30e1\u30a4\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u30b3\u30fc\u30c9\u3092\u5165\u308c\u307e\u305b\u3093\u3002 \u65b0\u3057\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306e\u30b5\u30dd\u30fc\u30c8\u306f\u3001\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u3068\u3057\u3066\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 Casbin\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u65b0\u3057\u3044\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc\u306b\u5bfe\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u8ca2\u732e\u3092\u6b53\u8fce\u3057\u307e\u3059\u3002\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30ea\u30b9\u30c8\u306b\u8a18\u8f09\u3057\u307e\u3059:)"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/etcd-watcher"},"Etcd Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd")," \u306e\u76e3\u8996\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/billcobbler/casbin-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/billcobbler"},"@billcobbler")),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/casbin/tikv-watcher"},"TiKV\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tikv/tikv"},"TiKV")," \u306e\u76e3\u8996\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/wgarunap/casbin-kafka-watcher"},"Kafka Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/wgarunap"},"@wgarunap")),(0,l.kt)("td",{parentName:"tr",align:null},"Apache Kafka ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"\u306e\u8155\u6642\u8a08"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Soluto/casbin-nats-watcher"},"NATS Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Soluto"},"Soluto")),(0,l.kt)("td",{parentName:"tr",align:null},"NATS ",(0,l.kt)("a",{parentName:"td",href:"https://nats.io/"})," \u306e\u76e3\u8996\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/grepsr/casbin-zk-watcher"},"ZooKeeper\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/grepsr"},"Grepsr")),(0,l.kt)("td",{parentName:"tr",align:null},"Apache ZooKeeper ",(0,l.kt)("a",{parentName:"td",href:"https://zookeeper.apache.org/"},"\u306e")," \u306e\u8155\u6642\u8a08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rusenask/casbin-go-cloud-watcher"},"NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rusenask/"},"@rusenask")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u306a\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u81ea\u5df1\u30db\u30b9\u30c8\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3067\u52d5\u4f5c\u3059\u308b ",(0,l.kt)("a",{parentName:"td",href:"https://gocloud.dev/"},"Go Cloud Dev Kit")," \u306b\u57fa\u3065\u304f\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz/casbin-rocketmq-watcher"},"RocketMQ\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz"},"@fmyxyz")),(0,l.kt)("td",{parentName:"tr",align:null},"Apache RocketMQ ",(0,l.kt)("a",{parentName:"td",href:"https://rocketmq.apache.org/"},"\u306e\u8155\u6642\u8a08")))))),(0,l.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/jcasbin-extra"},"Etcd \u30a2\u30c0\u30d7\u30bf\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo"},"@mapleafgo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd")," \u306e\u76e3\u8996\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/kafka-watcher"},"Kafka Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache Kafka ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"\u306e\u8155\u6642\u8a08")))))),(0,l.kt)(p.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/etcd-watcher"},"Etcd Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd")," \u306e\u76e3\u8996\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/pubsub-watcher"},"Pub/Sub Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud Pub/Sub ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub/docs"},"\u306e\u30a6\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mcollina/casbin-pg-watcher"},"Postgres Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mcollina/"},"Matteo Collina")),(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")))))),(0,l.kt)(p.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/etcd-watcher"},"Etcd Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd")," \u306e\u76e3\u8996\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic/flask-casbin-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic"},"ScienceLogic")),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/postgresql-watcher"},"PostgreSQL\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")))))),(0,l.kt)(p.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Sbou/Casbin.NET-Redis-Watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Sbou"},"@Sbou")),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")))))),(0,l.kt)(p.Z,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-redis-watcher"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher"},"RabbitMQ \u30a6\u30a9\u30c3\u30c1\u30e3\u30fc")),(0,l.kt)("td",{parentName:"tr",align:null},"SMS\u30b7\u30b9\u30c6\u30e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com/"},"RabbitMQ")," \u306e\u76e3\u8996\u4eba"))))),(0,l.kt)(p.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u6210\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"Redis Watcher")),(0,l.kt)("td",{parentName:"tr",align:null},"KV \u30b9\u30c8\u30a2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"Tinywan")),(0,l.kt)("td",{parentName:"tr",align:null},"Redis ",(0,l.kt)("a",{parentName:"td",href:"http://redis.io/"},"\u306e\u30a6\u30a9\u30c3\u30c1\u30e3\u30fc"))))))),(0,l.kt)("h2",{id:"watcherex"},"WatcherEx"),(0,l.kt)("p",null,"\u8907\u6570\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u306e\u5897\u5206\u540c\u671f\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx")," \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30dd\u30ea\u30b7\u30fc\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u4ed6\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u901a\u77e5\u3067\u304d\u308b\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u304c\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx")," \u306e\u5b9f\u88c5\u306f\u73fe\u5728\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u308c\u3092\u9054\u6210\u3059\u308b\u305f\u3081\u306b\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"Compared with ",(0,l.kt)("inlineCode",{parentName:"p"},"Watcher")," interface, ",(0,l.kt)("inlineCode",{parentName:"p"},"WatcherEx")," can distinguish what type of update action is received, e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"AddPolicy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"RemovePolicy"),"."),(0,l.kt)("p",null,"WatcherEx Apis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback(func(string)) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Update() error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Close()")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy(sec, ptype string, params ...string) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy(sec, ptype string, params ...string) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy(sec, ptype string, fieldIndex int, fieldValues ...string) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy(model.Model) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies(sec\u6587\u5b57\u5217\u3001ptype\u6587\u5b57\u5217\u3001\u30eb\u30fc\u30eb...[]string) error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies(sec\u6587\u5b57\u5217\u3001ptype\u6587\u5b57\u5217\u3001\u30eb\u30fc\u30eb...[]string) error")))))}k.isMDXComponent=!0}}]);