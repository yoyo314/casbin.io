"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[5982],{8215:function(t,a,e){var r=e(7294);a.Z=function(t){var a=t.children,e=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:e,className:n},a)}},5064:function(t,a,e){e.d(a,{Z:function(){return u}});var r=e(3117),n=e(7294),i=e(2389),l=e(9443);var p=function(){var t=(0,n.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=e(9558),m=e(6010),s="tabItem_1uMI";function h(t){var a,e,r,i=t.lazy,l=t.block,h=t.defaultValue,u=t.values,d=t.groupId,k=t.className,b=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&"string"==typeof t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),c=null!=u?u:b.map((function(t){var a=t.props;return{value:a.value,label:a.label}})),g=(0,o.lx)(c,(function(t,a){return t.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(a=null!=h?h:null==(e=b.find((function(t){return t.props.default})))?void 0:e.props.value)?a:null==(r=b[0])?void 0:r.props.value;if(null!==N&&!c.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+c.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=p(),y=f.tabGroupChoices,v=f.setTabGroupChoices,w=(0,n.useState)(N),T=w[0],x=w[1],z=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var A=y[d];null!=A&&A!==T&&c.some((function(t){return t.value===A}))&&x(A)}var j=function(t){var a=t.currentTarget,e=z.indexOf(a),r=c[e].value;r!==T&&(P(a),x(r),null!=d&&v(d,r))},C=function(t){var a,e=null;switch(t.key){case"ArrowRight":var r=z.indexOf(t.currentTarget)+1;e=z[r]||z[0];break;case"ArrowLeft":var n=z.indexOf(t.currentTarget)-1;e=z[n]||z[z.length-1]}null==(a=e)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":l},k)},c.map((function(t){var a=t.value,e=t.label;return n.createElement("li",{role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,className:(0,m.Z)("tabs__item",s,{"tabs__item--active":T===a}),key:a,ref:function(t){return z.push(t)},onKeyDown:C,onFocus:j,onClick:j},null!=e?e:a)}))),i?(0,n.cloneElement)(b.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(t,a){return(0,n.cloneElement)(t,{key:a,hidden:t.props.value!==T})}))))}function u(t){var a=(0,i.Z)();return n.createElement(h,(0,r.Z)({key:String(a)},t))}},4061:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return u},default:function(){return k}});var r=e(3117),n=e(102),i=(e(7294),e(3905)),l=e(5064),p=e(8215),o=["components"],m={id:"middlewares",title:"Middlewares"},s=void 0,h={unversionedId:"middlewares",id:"middlewares",isDocsHomePage:!1,title:"Middlewares",description:"Web frameworks",source:"@site/docs/Middlewares.mdx",sourceDirName:".",slug:"/middlewares",permalink:"/docs/middlewares",editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/Middlewares.mdx",tags:[],version:"current",frontMatter:{id:"middlewares",title:"Middlewares"},sidebar:"docs",previous:{title:"Role Managers",permalink:"/docs/role-managers"},next:{title:"GraphQL Middlewares",permalink:"/docs/graphql-middlewares"}},u=[{value:"Web frameworks",id:"web-frameworks",children:[],level:3},{value:"Cloud providers",id:"cloud-providers",children:[],level:3}],d={toc:u};function k(t){var a=t.components,e=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"web-frameworks"},"Web frameworks"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gin-gonic/gin"},"Gin")),(0,i.kt)("td",{parentName:"tr",align:null},"A HTTP web framework featuring a Martini-like API with much better performance, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/gin-contrib/authz"},"authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/maxwellhertz/gin-casbin"},"gin-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/beego/beego"},"Beego")),(0,i.kt)("td",{parentName:"tr",align:null},"An open-source, high-performance web framework for Go, via built-in plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/astaxie/beego/blob/master/plugins/authz"},"plugins/authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/caddyserver/caddy"},"Caddy")),(0,i.kt)("td",{parentName:"tr",align:null},"Fast, cross-platform HTTP/2 web server with automatic HTTPS, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/caddy-authz"},"caddy-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/traefik/traefik"},"Traefik")),(0,i.kt)("td",{parentName:"tr",align:null},"The cloud native application proxy, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Knight-7/auth-plugin"},"traefik-auth-plugin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit"},"Go kit")),(0,i.kt)("td",{parentName:"tr",align:null},"A toolkit for microservices, via built-in plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-kit/kit/tree/master/auth/casbin"},"plugins/authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber"},"Fiber")),(0,i.kt)("td",{parentName:"tr",align:null},"An Express inspired web framework written in Go, via middleware: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/arsmn/fiber-casbin"},"fiber-casbin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/prongbang/fiber-casbinrest"},"fiber-casbinrest")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sujit-baniya/fiber-boilerplate"},"fiber-boilerplate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/revel/revel"},"Revel")),(0,i.kt)("td",{parentName:"tr",align:null},"A high productivity, full-stack web framework for the Go language, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/revel/modules/tree/master/auth/casbin"},"auth/casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo"},"Echo")),(0,i.kt)("td",{parentName:"tr",align:null},"High performance, minimalist Go web framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/labstack/echo-contrib/tree/master/casbin"},"echo-authz")," (thanks to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/xqbumu"},"@xqbumu"),") or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/prongbang/casbinrest"},"casbinrest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kataras/iris"},"Iris")),(0,i.kt)("td",{parentName:"tr",align:null},"The fastest web framework for Go in (THIS) Earth. HTTP/2 Ready-To-GO, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/iris-contrib/middleware/tree/master/casbin"},"casbin")," (thanks to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/hiveminded"},"@hiveminded"),") or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/kokobing/iris-middleware-casbin"},"iris-middleware-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gogf/gf"},"GoFrame")),(0,i.kt)("td",{parentName:"tr",align:null},"A modular, powerful, high-performance and enterprise-class application development framework of Golang, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dobyte/gf-casbin"},"gf-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/urfave/negroni"},"Negroni")),(0,i.kt)("td",{parentName:"tr",align:null},"Idiomatic HTTP Middleware for Golang, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/negroni-authz"},"negroni-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pressly/chi"},"Chi")),(0,i.kt)("td",{parentName:"tr",align:null},"A lightweight, idiomatic and composable router for building HTTP services, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/chi-authz"},"chi-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/gobuffalo/buffalo"},"Buffalo")),(0,i.kt)("td",{parentName:"tr",align:null},"A Go web development eco-system, designed to make your life easier, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/kgosse/buffalo-mw-rbac"},"buffalo-mw-rbac"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/macaron"},"Macaron")),(0,i.kt)("td",{parentName:"tr",align:null},"A high productive and modular web framework in Go, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-macaron/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/devfeel/dotweb"},"DotWeb")),(0,i.kt)("td",{parentName:"tr",align:null},"Simple and easy go web micro framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/devfeel/middleware/tree/master/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/lunny/tango"},"Tango")),(0,i.kt)("td",{parentName:"tr",align:null},"Micro & pluggable web framework for Go, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://gitea.com/tango/authz"},"authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/go-baa/baa"},"Baa")),(0,i.kt)("td",{parentName:"tr",align:null},"An express Go web framework with routing, middleware, dependency injection and http context, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/baa-middleware/authz"},"authz")))))),(0,i.kt)(p.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://projects.spring.io/spring-boot/"},"Spring Boot")),(0,i.kt)("td",{parentName:"tr",align:null},"Makes it easy to create Spring-powered applications and services, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/casbin-spring-boot-starter"},"casbin-spring-boot-starter")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jcasbin-springboot-plugin"},"jcasbin-springboot-plugin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jveverka/spring-examples/tree/master/spring-jcasbin"},"Simple SpringBoot security demo with jCasbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://shiro.apache.org/"},"Apache Shiro")),(0,i.kt)("td",{parentName:"tr",align:null},"A powerful and easy-to-use Java security framework that performs authentication, authorization, cryptography, and session management, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/shiro-casbin"},"shiro-casbin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/mapleafgo/shiro-jcasbin-spring-boot-starter"},"shiro-jcasbin-spring-boot-starter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://vertx.io/"},"Vert.x")),(0,i.kt)("td",{parentName:"tr",align:null},"A tool-kit for building reactive applications on the JVM, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/vert-x3/vertx-auth/pull/215"},"vertx-auth-jcasbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.jfinal.com/"},"JFinal")),(0,i.kt)("td",{parentName:"tr",align:null},"A simple, light, rapid, independent and extensible Java WEB + ORM framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/jfinal-authz"},"jfinal-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://nutzam.com/"},"Nutz")),(0,i.kt)("td",{parentName:"tr",align:null},"Web framework (MVC/IOC/AOP/DAO/JSON) for all Java developers, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/jcasbin/nutz-authz"},"nutz-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio"},"mangoo I/O")),(0,i.kt)("td",{parentName:"tr",align:null},"An intuitive, lightweight, high performance full stack Java web framework, via built-in plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/svenkubiak/mangooio/blob/e8c647a3f7c427bce27377025bec074f6d767f50/mangooio-core/src/main/java/io/mangoo/services/AuthorizationService.java"},"AuthorizationService.java")))))),(0,i.kt)(p.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/odpf/shield"},"Shield")),(0,i.kt)("td",{parentName:"tr",align:null},"An authZ server and authZ aware reverse-proxy built on top of casbin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/expressjs/express"},"Express")),(0,i.kt)("td",{parentName:"tr",align:null},"Fast, unopinionated, minimalist web framework for node, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/express-authz"},"express-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"Koa")),(0,i.kt)("td",{parentName:"tr",align:null},"Expressive middleware for node.js using ES2017 async functions, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/koa-authz"},"koa-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/djordjep/koajs-starter"},"koajs-starter")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/zcong1993/koa-casbin"},"koa-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/koajs/koa"},"LoopBack 4")),(0,i.kt)("td",{parentName:"tr",align:null},"A highly extensible Node.js and TypeScript framework for building APIs and microservices, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sourcefuse/loopback4-authorization"},"loopback4-authorization"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://nestjs.com/"},"Nest")),(0,i.kt)("td",{parentName:"tr",align:null},"Progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript. via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dreamdevil00/nest-authz"},"nest-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pardjs/nest-casbin"},"nest-casbin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/switchit-conseil/nestjs-casbin-module"},"NestJS Casbin Module")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/juicycleff/nestjs-casbin"},"nestjs-casbin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/merajsahebdar/shanbe-api"},"shanbe-api")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Twiddlle/acl-nest"},"acl-nest")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/0xb4lamx/nestjs-casbin-typeorm"},"nestjs-casbin-typeorm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/fastify/fastify"},"Fastify")),(0,i.kt)("td",{parentName:"tr",align:null},"Fast and low overhead web framework, for Node.js. via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin"},"fastify-casbin")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/nearform/fastify-casbin-rest"},"fastify-casbin-rest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eggjs/egg"},"Egg")),(0,i.kt)("td",{parentName:"tr",align:null},"Born to build better enterprise frameworks and apps with Node.js & Koa, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/egg-authz"},"egg-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/klren0312/egg-zrole"},"egg-zrole"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://hapi.dev/"},"hapi")),(0,i.kt)("td",{parentName:"tr",align:null},"The Simple, Secure Framework Developers Trust. via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/node-casbin/hapi-authz"},"hapi-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/tiagostutz/casbin-jwt-express"},"Casbin JWT Express")),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization middleware that uses stateless JWT token to validate ACL rules using Casbin"))))),(0,i.kt)(p.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://laravel.com/"},"Laravel")),(0,i.kt)("td",{parentName:"tr",align:null},"The PHP framework for web artisans, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/laravel-authz"},"laravel-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.yiiframework.com/"},"Yii PHP Framework")),(0,i.kt)("td",{parentName:"tr",align:null},"A fast, secure, and efficient PHP framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-permission"},"yii-permission")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/yii-casbin"},"yii-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cakephp.org/"},"CakePHP")),(0,i.kt)("td",{parentName:"tr",align:null},"Build fast, grow solid PHP Framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/cake-permission"},"cake-permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://codeigniter.com/"},"CodeIgniter")),(0,i.kt)("td",{parentName:"tr",align:null},"Associate users with roles and permissions in CodeIgniter4 Web Framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/codeigniter-permission"},"CodeIgniter Permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 5.1")),(0,i.kt)("td",{parentName:"tr",align:null},"The ThinkPHP 5.1 framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-casbin"},"think-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.thinkphp.cn/"},"ThinkPHP 6.0")),(0,i.kt)("td",{parentName:"tr",align:null},"The ThinkPHP 6.0 framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/think-authz"},"think-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://symfony.com/"},"Symfony")),(0,i.kt)("td",{parentName:"tr",align:null},"The Symfony PHP framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/symfony-permission"},"symfony-permission")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/videni/symfony-casbin"},"symfony-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hyperf/hyperf"},"Hyperf")),(0,i.kt)("td",{parentName:"tr",align:null},"A coroutine framework that focuses on hyperspeed and flexibility, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/hyperf-permission"},"hyperf-permission")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/donjan-deng/hyperf-casbin"},"hyperf-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.easyswoole.com/"},"EasySwoole")),(0,i.kt)("td",{parentName:"tr",align:null},"A distributed, persistent memory PHP framework based on the Swoole extension, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/easyswoole-permission"},"easyswoole-permission")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ice-leng/easyswoole-hyperfOrm-permission"},"easyswoole-hyperfOrm-permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.slimframework.com/"},"Slim")),(0,i.kt)("td",{parentName:"tr",align:null},"A PHP micro framework that helps you quickly write simple yet powerful web applications and APIs, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/casbin-with-slim"},"casbin-with-slim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://phalcon.io/"},"Phalcon")),(0,i.kt)("td",{parentName:"tr",align:null},"A full-stack PHP framework delivered as a C-extension, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/php-casbin/phalcon-permission"},"phalcon-permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman")),(0,i.kt)("td",{parentName:"tr",align:null},"High performance HTTP Service Framework for PHP based on Workerman, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/webman-permission"},"webman-permission"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/walkor/webman"},"webman plugin")),(0,i.kt)("td",{parentName:"tr",align:null},"Webman for casbin plugin, Publish and subscribe Watcher based on Redis\uff0cvia plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Tinywan/casbin"},"casbin")))))),(0,i.kt)(p.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.djangoproject.com/"},"Django")),(0,i.kt)("td",{parentName:"tr",align:null},"A high-level Python Web framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/django-casbin"},"django-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://flask.pocoo.org/"},"Flask")),(0,i.kt)("td",{parentName:"tr",align:null},"A microframework for Python based on Werkzeug, Jinja 2 and good intentions, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/flask-authz"},"flask-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/daymien/Flask-Casbin"},"Flask-Casbin (3rd-party, but maybe more friendly)")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/daobeng/rbac-flask/tree/flask-casbin"},"rbac-flask"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/tiangolo/fastapi"},"FastAPI")),(0,i.kt)("td",{parentName:"tr",align:null},"A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pycasbin/fastapi-authz"},"fastapi-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lqmanh/fastapi-app"},"Fastapi-app"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.openstack.org/"},"OpenStack")),(0,i.kt)("td",{parentName:"tr",align:null},"The most widely deployed open source cloud software in the world, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/openstack-patron"},"openstack-patron")))))),(0,i.kt)(p.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET Core")),(0,i.kt)("td",{parentName:"tr",align:null},"An open-source and cross-platform framework for building modern cloud based internet connected applications, such as web apps, IoT apps and mobile backends, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-net/Casbin.AspNetCore"},"Casbin.AspNetCore"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core"},"ASP.NET Core")),(0,i.kt)("td",{parentName:"tr",align:null},"A simple demo of using Casbin at ASP.NET Core framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/MustafaMustafayev/CasbinACL-aspNetCore"},"CasbinACL-aspNetCore")))))),(0,i.kt)(p.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/actix/actix"},"Actix")),(0,i.kt)("td",{parentName:"tr",align:null},"A Rust actors framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin"},"actix-casbin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/actix/actix-web"},"Actix web")),(0,i.kt)("td",{parentName:"tr",align:null},"A small, pragmatic, and extremely fast rust web framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/actix-casbin-auth"},"actix-casbin-auth"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/SergioBenitez/Rocket"},"Rocket")),(0,i.kt)("td",{parentName:"tr",align:null},"a web framework for Rust that makes it simple to write fast, secure web applications without sacrificing flexibility, usability, or type safety, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-rs/rocket-authz"},"rocket-authz")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/oiatz/rocket-casbin-auth"},"rocket-casbin-auth")," or ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/simoin/Rocket_Casbin_Demo"},"rocket-casbin-demo")))))),(0,i.kt)(p.Z,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://openresty.org/"},"OpenResty")),(0,i.kt)("td",{parentName:"tr",align:null},"A dynamic web platform based on NGINX and LuaJIT, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/lua-resty-casbin"},"lua-resty-casbin")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rushitote/casbin-openresty-example"},"casbin-openresty-example"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Kong/kong"},"Kong")),(0,i.kt)("td",{parentName:"tr",align:null},"A cloud-native, platform-agnostic, scalable API Gateway distinguished for its high performance and extensibility via plugins, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin-lua/kong-authz"},"kong-authz"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix"},"APISIX")),(0,i.kt)("td",{parentName:"tr",align:null},"A dynamic, real-time, high-performance API gateway, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")))))),(0,i.kt)(p.Z,{value:"Swift",label:"Swift",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/vapor/vapor"},"Vapor")),(0,i.kt)("td",{parentName:"tr",align:null},"A server-side Swift web framework, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/SwiftCasbin/vapor-authz"},"vapor-authz"))))))),(0,i.kt)("h3",{id:"cloud-providers"},"Cloud providers"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://okta.com/"},"Okta")),(0,i.kt)("td",{parentName:"tr",align:null},"One trusted platform to secure every identity, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/myriad-personal/casbin-spring-boot-demo"},"casbin-spring-boot-demo"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://auth0.com/"},"Auth0")),(0,i.kt)("td",{parentName:"tr",align:null},"An easy to implement, adaptable authentication and authorization platform, via plugin: ",(0,i.kt)("a",{parentName:"td",href:"https://auth0.com/"},"casbin-auth0-rbac"))))))))}k.isMDXComponent=!0}}]);