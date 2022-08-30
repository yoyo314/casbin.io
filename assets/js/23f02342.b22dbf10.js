"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5982],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>u});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var l=r.createContext({}),m=function(t){var a=r.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},s=function(t){var a=m(t.components);return r.createElement(l.Provider,{value:a},t.children)},h={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(e),u=n,k=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return e?r.createElement(k,p(p({ref:a},s),{},{components:e})):r.createElement(k,p({ref:a},s))}));function u(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,p=new Array(i);p[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var m=2;m<i;m++)p[m]=e[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},1831:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=e(7462),n=(e(7294),e(3905));const i={id:"middlewares",title:"Middlewares",description:"Casbin middlewares",keywords:["middleware"]},p=void 0,o={unversionedId:"middlewares",id:"middlewares",title:"Middlewares",description:"Casbin middlewares",source:"@site/docs/Middlewares.mdx",sourceDirName:".",slug:"/middlewares",permalink:"/docs/middlewares",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Middlewares.mdx",tags:[],version:"current",frontMatter:{id:"middlewares",title:"Middlewares",description:"Casbin middlewares",keywords:["middleware"]},sidebar:"docs",previous:{title:"Role Managers",permalink:"/docs/role-managers"},next:{title:"GraphQL Middlewares",permalink:"/docs/graphql-middlewares"}},l={},m=[{value:"Web frameworks",id:"web-frameworks",level:3},{value:"Cloud providers",id:"cloud-providers",level:3}],s=t=>function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},h=s("Tabs"),d=s("TabItem"),u={toc:m};function k(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"web-frameworks"},"Web frameworks"),(0,n.kt)(h,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(d,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gin-gonic/gin"},"Gin")),(0,n.kt)("td",{parentName:"tr",align:null},"A HTTP web framework featuring a Martini-like API with much better performance, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/gin-contrib/authz"},"authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/maxwellhertz/gin-casbin"},"gin-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/beego/beego"},"Beego")),(0,n.kt)("td",{parentName:"tr",align:null},"An open-source, high-performance web framework for Go, via built-in plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/astaxie/beego/blob/master/plugins/authz"},"plugins/authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/caddyserver/caddy"},"Caddy")),(0,n.kt)("td",{parentName:"tr",align:null},"Fast, cross-platform HTTP/2 web server with automatic HTTPS, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/caddy-authz"},"caddy-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik"},"Traefik")),(0,n.kt)("td",{parentName:"tr",align:null},"The cloud native application proxy, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/Knight-7/auth-plugin"},"traefik-auth-plugin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit"},"Go kit")),(0,n.kt)("td",{parentName:"tr",align:null},"A toolkit for microservices, via built-in plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit/tree/master/auth/casbin"},"plugins/authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber"},"Fiber")),(0,n.kt)("td",{parentName:"tr",align:null},"An Express inspired web framework written in Go, via middleware: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/arsmn/fiber-casbin"},"fiber-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/prongbang/fiber-casbinrest"},"fiber-casbinrest")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/sujit-baniya/fiber-boilerplate"},"fiber-boilerplate"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/revel/revel"},"Revel")),(0,n.kt)("td",{parentName:"tr",align:null},"A high productivity, full-stack web framework for the Go language, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/revel/modules/tree/master/auth/casbin"},"auth/casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo"},"Echo")),(0,n.kt)("td",{parentName:"tr",align:null},"High performance, minimalist Go web framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo-contrib/tree/master/casbin"},"echo-authz")," (thanks to ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/xqbumu"},"@xqbumu"),") or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/prongbang/casbinrest"},"casbinrest"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/kataras/iris"},"Iris")),(0,n.kt)("td",{parentName:"tr",align:null},"The fastest web framework for Go in (THIS) Earth. HTTP/2 Ready-To-GO, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/iris-contrib/middleware/tree/master/casbin"},"casbin")," (thanks to ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/hiveminded"},"@hiveminded"),") or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/kokobing/iris-middleware-casbin"},"iris-middleware-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gogf/gf"},"GoFrame")),(0,n.kt)("td",{parentName:"tr",align:null},"A modular, powerful, high-performance and enterprise-class application development framework of Golang, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/dobyte/gf-casbin"},"gf-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/urfave/negroni"},"Negroni")),(0,n.kt)("td",{parentName:"tr",align:null},"Idiomatic HTTP Middleware for Golang, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/negroni-authz"},"negroni-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pressly/chi"},"Chi")),(0,n.kt)("td",{parentName:"tr",align:null},"A lightweight, idiomatic and composable router for building HTTP services, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/chi-authz"},"chi-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/gobuffalo/buffalo"},"Buffalo")),(0,n.kt)("td",{parentName:"tr",align:null},"A Go web development eco-system, designed to make your life easier, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/kgosse/buffalo-mw-rbac"},"buffalo-mw-rbac"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/macaron"},"Macaron")),(0,n.kt)("td",{parentName:"tr",align:null},"A high productive and modular web framework in Go, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/authz"},"authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/devfeel/dotweb"},"DotWeb")),(0,n.kt)("td",{parentName:"tr",align:null},"Simple and easy go web micro framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/devfeel/middleware/tree/master/authz"},"authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/lunny/tango"},"Tango")),(0,n.kt)("td",{parentName:"tr",align:null},"Micro & pluggable web framework for Go, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://gitea.com/tango/authz"},"authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/go-baa/baa"},"Baa")),(0,n.kt)("td",{parentName:"tr",align:null},"An express Go web framework with routing, middleware, dependency injection and http context, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/baa-middleware/authz"},"authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/TykTechnologies/tyk"},"Tyk")),(0,n.kt)("td",{parentName:"tr",align:null},"An open source Enterprise API Gateway, supporting REST, GraphQL, TCP and gRPC protocols, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/tyk-authz"},"tyk-authz")))))),(0,n.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://projects.spring.io/spring-boot/"},"Spring Boot")),(0,n.kt)("td",{parentName:"tr",align:null},"Makes it easy to create Spring-powered applications and services, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/casbin-spring-boot-starter"},"casbin-spring-boot-starter")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jcasbin-springboot-plugin"},"jcasbin-springboot-plugin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jveverka/spring-examples/tree/master/spring-jcasbin"},"Simple SpringBoot security demo with jCasbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://shiro.apache.org/"},"Apache Shiro")),(0,n.kt)("td",{parentName:"tr",align:null},"A powerful and easy-to-use Java security framework that performs authentication, authorization, cryptography, and session management, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/shiro-casbin"},"shiro-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/shiro-jcasbin-spring-boot-starter"},"shiro-jcasbin-spring-boot-starter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://vertx.io/"},"Vert.x")),(0,n.kt)("td",{parentName:"tr",align:null},"A tool-kit for building reactive applications on the JVM, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/vert-x3/vertx-auth/pull/215"},"vertx-auth-jcasbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.jfinal.com/"},"JFinal")),(0,n.kt)("td",{parentName:"tr",align:null},"A simple, light, rapid, independent and extensible Java WEB + ORM framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jfinal-authz"},"jfinal-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nutzam.com/"},"Nutz")),(0,n.kt)("td",{parentName:"tr",align:null},"Web framework (MVC/IOC/AOP/DAO/JSON) for all Java developers, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/nutz-authz"},"nutz-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio"},"mangoo I/O")),(0,n.kt)("td",{parentName:"tr",align:null},"An intuitive, lightweight, high performance full stack Java web framework, via built-in plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio/blob/e8c647a3f7c427bce27377025bec074f6d767f50/mangooio-core/src/main/java/io/mangoo/services/AuthorizationService.java"},"AuthorizationService.java")))))),(0,n.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"Shield")),(0,n.kt)("td",{parentName:"tr",align:null},"An authZ server and authZ aware reverse-proxy built on top of casbin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/expressjs/express"},"Express")),(0,n.kt)("td",{parentName:"tr",align:null},"Fast, unopinionated, minimalist web framework for node, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/express-authz"},"express-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"Koa")),(0,n.kt)("td",{parentName:"tr",align:null},"Expressive middleware for node.js using ES2017 async functions, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/koa-authz"},"koa-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/djordjep/koajs-starter"},"koajs-starter")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/zcong1993/koa-casbin"},"koa-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"LoopBack 4")),(0,n.kt)("td",{parentName:"tr",align:null},"A highly extensible Node.js and TypeScript framework for building APIs and microservices, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/sourcefuse/loopback4-authorization"},"loopback4-authorization"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nestjs.com/"},"Nest")),(0,n.kt)("td",{parentName:"tr",align:null},"Progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript. via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/dreamdevil00/nest-authz"},"nest-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/pardjs/nest-casbin"},"nest-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/switchit-conseil/nestjs-casbin-module"},"NestJS Casbin Module")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/juicycleff/nestjs-casbin"},"nestjs-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/merajsahebdar/shanbe-api"},"shanbe-api")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/Twiddlle/acl-nest"},"acl-nest")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/0xb4lamx/nestjs-casbin-typeorm"},"nestjs-casbin-typeorm"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/fastify/fastify"},"Fastify")),(0,n.kt)("td",{parentName:"tr",align:null},"Fast and low overhead web framework, for Node.js. via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin"},"fastify-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin-rest"},"fastify-casbin-rest"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eggjs/egg"},"Egg")),(0,n.kt)("td",{parentName:"tr",align:null},"Born to build better enterprise frameworks and apps with Node.js & Koa, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/egg-authz"},"egg-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/klren0312/egg-zrole"},"egg-zrole"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hapi.dev/"},"hapi")),(0,n.kt)("td",{parentName:"tr",align:null},"The Simple, Secure Framework Developers Trust. via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/hapi-authz"},"hapi-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/tiagostutz/casbin-jwt-express"},"Casbin JWT Express")),(0,n.kt)("td",{parentName:"tr",align:null},"Authorization middleware that uses stateless JWT token to validate ACL rules using Casbin"))))),(0,n.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://laravel.com/"},"Laravel")),(0,n.kt)("td",{parentName:"tr",align:null},"The PHP framework for web artisans, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/laravel-authz"},"laravel-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.yiiframework.com/"},"Yii PHP Framework")),(0,n.kt)("td",{parentName:"tr",align:null},"A fast, secure, and efficient PHP framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-permission"},"yii-permission")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-casbin"},"yii-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://cakephp.org/"},"CakePHP")),(0,n.kt)("td",{parentName:"tr",align:null},"Build fast, grow solid PHP Framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/cake-permission"},"cake-permission"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codeigniter.com/"},"CodeIgniter")),(0,n.kt)("td",{parentName:"tr",align:null},"Associate users with roles and permissions in CodeIgniter4 Web Framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/codeigniter-permission"},"CodeIgniter Permission"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 5.1")),(0,n.kt)("td",{parentName:"tr",align:null},"The ThinkPHP 5.1 framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-casbin"},"think-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 6.0")),(0,n.kt)("td",{parentName:"tr",align:null},"The ThinkPHP 6.0 framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-authz"},"think-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://symfony.com/"},"Symfony")),(0,n.kt)("td",{parentName:"tr",align:null},"The Symfony PHP framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/symfony-permission"},"symfony-permission")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/videni/symfony-casbin"},"symfony-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hyperf/hyperf"},"Hyperf")),(0,n.kt)("td",{parentName:"tr",align:null},"A coroutine framework that focuses on hyperspeed and flexibility, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/hyperf-permission"},"hyperf-permission")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/donjan-deng/hyperf-casbin"},"hyperf-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.easyswoole.com/"},"EasySwoole")),(0,n.kt)("td",{parentName:"tr",align:null},"A distributed, persistent memory PHP framework based on the Swoole extension, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/easyswoole-permission"},"easyswoole-permission")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/ice-leng/easyswoole-hyperfOrm-permission"},"easyswoole-hyperfOrm-permission"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.slimframework.com/"},"Slim")),(0,n.kt)("td",{parentName:"tr",align:null},"A PHP micro framework that helps you quickly write simple yet powerful web applications and APIs, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/casbin-with-slim"},"casbin-with-slim"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://phalcon.io/"},"Phalcon")),(0,n.kt)("td",{parentName:"tr",align:null},"A full-stack PHP framework delivered as a C-extension, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/phalcon-permission"},"phalcon-permission"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman")),(0,n.kt)("td",{parentName:"tr",align:null},"High performance HTTP Service Framework for PHP based on Workerman, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/webman-permission"},"webman-permission"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman plugin")),(0,n.kt)("td",{parentName:"tr",align:null},"Webman for casbin plugin, Publish and subscribe Watcher based on Redis\uff0cvia plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"casbin")))))),(0,n.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.djangoproject.com/"},"Django")),(0,n.kt)("td",{parentName:"tr",align:null},"A high-level Python Web framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/django-casbin"},"django-casbin")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/django-authorization"},"django-authorization"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://flask.pocoo.org/"},"Flask")),(0,n.kt)("td",{parentName:"tr",align:null},"A microframework for Python based on Werkzeug, Jinja 2 and good intentions, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/flask-authz"},"flask-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/daymien/Flask-Casbin"},"Flask-Casbin (3rd-party, but maybe more friendly)")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-flask/tree/flask-casbin"},"rbac-flask"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/tiangolo/fastapi"},"FastAPI")),(0,n.kt)("td",{parentName:"tr",align:null},"A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/fastapi-authz"},"fastapi-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/lqmanh/fastapi-app"},"Fastapi-app"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.openstack.org/"},"OpenStack")),(0,n.kt)("td",{parentName:"tr",align:null},"The most widely deployed open source cloud software in the world, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-patron"},"openstack-patron")))))),(0,n.kt)(d,{value:".NET",label:".NET",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET Core")),(0,n.kt)("td",{parentName:"tr",align:null},"An open-source and cross-platform framework for building modern cloud based internet connected applications, such as web apps, IoT apps and mobile backends, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-net/Casbin.AspNetCore"},"Casbin.AspNetCore"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET Core")),(0,n.kt)("td",{parentName:"tr",align:null},"A simple demo of using Casbin at ASP.NET Core framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/MustafaMustafayev/CasbinACL-aspNetCore"},"CasbinACL-aspNetCore")))))),(0,n.kt)(d,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/actix/actix"},"Actix")),(0,n.kt)("td",{parentName:"tr",align:null},"A Rust actors framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin"},"actix-casbin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/actix/actix-web"},"Actix web")),(0,n.kt)("td",{parentName:"tr",align:null},"A small, pragmatic, and extremely fast rust web framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin-auth"},"actix-casbin-auth"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/SergioBenitez/Rocket"},"Rocket")),(0,n.kt)("td",{parentName:"tr",align:null},"a web framework for Rust that makes it simple to write fast, secure web applications without sacrificing flexibility, usability, or type safety, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/rocket-authz"},"rocket-authz")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/oiatz/rocket-casbin-auth"},"rocket-casbin-auth")," or ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/simoin/Rocket_Casbin_Demo"},"rocket-casbin-demo")))))),(0,n.kt)(d,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://openresty.org/"},"OpenResty")),(0,n.kt)("td",{parentName:"tr",align:null},"A dynamic web platform based on NGINX and LuaJIT, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/lua-resty-casbin"},"lua-resty-casbin")," and ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rushitote/casbin-openresty-example"},"casbin-openresty-example"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Kong/kong"},"Kong")),(0,n.kt)("td",{parentName:"tr",align:null},"A cloud-native, platform-agnostic, scalable API Gateway distinguished for its high performance and extensibility via plugins, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/kong-authz"},"kong-authz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix"},"APISIX")),(0,n.kt)("td",{parentName:"tr",align:null},"A dynamic, real-time, high-performance API gateway, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")))))),(0,n.kt)(d,{value:"Swift",label:"Swift",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/vapor/vapor"},"Vapor")),(0,n.kt)("td",{parentName:"tr",align:null},"A server-side Swift web framework, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/SwiftCasbin/vapor-authz"},"vapor-authz"))))))),(0,n.kt)("h3",{id:"cloud-providers"},"Cloud providers"),(0,n.kt)(h,{groupId:"langs",mdxType:"Tabs"},(0,n.kt)(d,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://okta.com/"},"Okta")),(0,n.kt)("td",{parentName:"tr",align:null},"One trusted platform to secure every identity, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/myriad-personal/casbin-spring-boot-demo"},"casbin-spring-boot-demo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0")),(0,n.kt)("td",{parentName:"tr",align:null},"An easy to implement, adaptable authentication and authorization platform, via plugin: ",(0,n.kt)("a",{parentName:"td",href:"https://auth0.com/"},"casbin-auth0-rbac"))))))))}k.isMDXComponent=!0}}]);