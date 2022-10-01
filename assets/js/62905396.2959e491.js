"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[7789],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(a),h=n,u=m["".concat(p,".").concat(h)]||m[h]||s[h]||l;return a?r.createElement(u,i(i({ref:e},d),{},{components:a})):r.createElement(u,i({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3328:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={id:"watchers",title:"Watchers",description:"Keeping consistence between multiple Casbin enforcer instances",keywords:["watcher","multiple Casbin enforcer","WatcherEx"]},i=void 0,o={unversionedId:"watchers",id:"watchers",title:"Watchers",description:"Keeping consistence between multiple Casbin enforcer instances",source:"@site/docs/Watchers.mdx",sourceDirName:".",slug:"/watchers",permalink:"/docs/watchers",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Watchers.mdx",tags:[],version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1664628059,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"watchers",title:"Watchers",description:"Keeping consistence between multiple Casbin enforcer instances",keywords:["watcher","multiple Casbin enforcer","WatcherEx"]},sidebar:"docs",previous:{title:"Adapters",permalink:"/docs/adapters"},next:{title:"Dispatchers",permalink:"/docs/dispatchers"}},p={},c=[{value:"WatcherEx",id:"watcherex",level:2}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=d("Tabs"),m=d("TabItem"),h={toc:c};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We support to use distributed messaging systems like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/coreos/etcd"},"etcd")," to keep consistence between multiple Casbin enforcer instances. So our users can concurrently use multiple Casbin enforcers to handle large number of permission checking requests."),(0,n.kt)("p",null,"Similar to policy storage adapters, we don't put watcher code in the main library. Any support for a new messaging system should be implemented as a watcher. A complete list of Casbin watchers is provided as below. Any 3rd-party contribution on a new watcher is welcomed, please inform us and I will put it in this list:)"),(0,n.kt)(s,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(m,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/etcd-watcher"},"Etcd Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/billcobbler/casbin-redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/billcobbler"},"@billcobbler")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/tikv-watcher"},"TiKV Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/tikv/tikv"},"TiKV"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/wgarunap/casbin-kafka-watcher"},"Kafka Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/wgarunap"},"@wgarunap")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Apache Kafka"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Soluto/casbin-nats-watcher"},"NATS Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Soluto"},"Soluto")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://nats.io/"},"NATS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/grepsr/casbin-zk-watcher"},"ZooKeeper Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/grepsr"},"Grepsr")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://zookeeper.apache.org/"},"Apache ZooKeeper"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rusenask/casbin-go-cloud-watcher"},"NATS, RabbitMQ, GCP Pub/Sub, AWS SNS & SQS, Kafka, InMemory")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging System"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rusenask/"},"@rusenask")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher based on ",(0,n.kt)("a",{parentName:"td",href:"https://gocloud.dev/"},"Go Cloud Dev Kit")," that works with leading cloud providers and self-hosted infrastructure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz/casbin-rocketmq-watcher"},"RocketMQ Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/fmyxyz"},"@fmyxyz")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://rocketmq.apache.org/"},"Apache RocketMQ")))))),(0,n.kt)(m,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/jcasbin-extra"},"Etcd Adapter")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo"},"@mapleafgo")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/kafka-watcher"},"Kafka Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Apache Kafka")))))),(0,n.kt)(m,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/etcd-watcher"},"Etcd Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/pubsub-watcher"},"Pub/Sub Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub/docs"},"Google Cloud Pub/Sub"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/mcollina/casbin-pg-watcher"},"Postgres Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Database"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/mcollina/"},"Matteo Collina")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")))))),(0,n.kt)(m,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/etcd-watcher"},"Etcd Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/coreos/etcd"},"etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic/flask-casbin-redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ScienceLogic"},"ScienceLogic")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/postgresql-watcher"},"PostgreSQL Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Database"),(0,n.kt)("td",{parentName:"tr",align:null},"Casbin"),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL")))))),(0,n.kt)(m,{value:".NET",label:".NET",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Sbou/Casbin.NET-Redis-Watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Sbou"},"@Sbou")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis")))))),(0,n.kt)(m,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-redis-watcher"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby/casbin-ruby-rabbitmq-watcher"},"RabbitMQ Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"Messaging system"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/CasbinRuby"},"CasbinRuby")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com/"},"RabbitMQ")))))),(0,n.kt)(m,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Watcher"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"Redis Watcher")),(0,n.kt)("td",{parentName:"tr",align:null},"KV store"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Tinywan"},"Tinywan")),(0,n.kt)("td",{parentName:"tr",align:null},"Watcher for ",(0,n.kt)("a",{parentName:"td",href:"http://redis.io/"},"Redis"))))))),(0,n.kt)("h2",{id:"watcherex"},"WatcherEx"),(0,n.kt)("p",null,"In order to support incremental synchronization between multiple instances, we provide the ",(0,n.kt)("inlineCode",{parentName:"p"},"WatcherEx")," interface. We hope it can notify other instances when the policy changes, but there is currently no implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"WatcherEx"),". We recommend that you use dispatcher to achieve this. "),(0,n.kt)("p",null,"Compared with ",(0,n.kt)("inlineCode",{parentName:"p"},"Watcher")," interface, ",(0,n.kt)("inlineCode",{parentName:"p"},"WatcherEx")," can distinguish what type of update action is received, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"AddPolicy")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"RemovePolicy"),". "),(0,n.kt)("p",null,"WatcherEx Apis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"API"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback(func(string)) error"),(0,n.kt)("td",{parentName:"tr",align:null},"SetUpdateCallback sets the callback function that the watcher will call, when the policy in DB has been changed by other instances. A classic callback is Enforcer.LoadPolicy().")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update() error"),(0,n.kt)("td",{parentName:"tr",align:null},"Update calls the update callback of other instances to synchronize their policy. It is usually called after changing the policy in DB, like Enforcer.SavePolicy(), Enforcer.AddPolicy(), Enforcer.RemovePolicy(), etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Close()"),(0,n.kt)("td",{parentName:"tr",align:null},"Close stops and releases the watcher, the callback function will not be called any more.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy(sec, ptype string, params ...string) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicy calls the update callback of other instances to synchronize their policy. It is called after a policy is added via Enforcer.AddPolicy(), Enforcer.AddNamedPolicy(), Enforcer.AddGroupingPolicy() and Enforcer.AddNamedGroupingPolicy().")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicy(sec, ptype string, params ...string) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UPdateForRemovePolicy calls the update callback of other instances to synchronize their policy. It is called after a policy is removed by Enforcer.RemovePolicy(), Enforcer.RemoveNamedPolicy(), Enforcer.RemoveGroupingPolicy() and Enforcer.RemoveNamedGroupingPolicy().")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy(sec, ptype string, fieldIndex int, fieldValues ...string) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForRemoveFilteredPolicy calls the update callback of other instances to synchronize their policy. It is called after Enforcer.RemoveFilteredPolicy(), Enforcer.RemoveFilteredNamedPolicy(), Enforcer.RemoveFilteredGroupingPolicy() and Enforcer.RemoveFilteredNamedGroupingPolicy().")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy(model model.Model) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForSavePolicy calls the update callback of other instances to synchronize their policy. It is called after Enforcer.SavePolicy()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies(sec string, ptype string, rules ...[]string) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForAddPolicies calls the update callback of other instances to synchronize their policy. It is called after Enforcer.AddPolicies(), Enforcer.AddNamedPolicies(), Enforcer.AddGroupingPolicies() and Enforcer.AddNamedGroupingPolicies().")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies(sec string, ptype string, rules ...[]string) error"),(0,n.kt)("td",{parentName:"tr",align:null},"UpdateForRemovePolicies calls the update callback of other instances to synchronize their policy. It is called after  Enforcer.RemovePolicies(), Enforcer.RemoveNamedPolicies(), Enforcer.RemoveGroupingPolicies() and Enforcer.RemoveNamedGroupingPolicies().")))))}u.isMDXComponent=!0}}]);