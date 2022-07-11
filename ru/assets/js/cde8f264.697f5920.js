"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[1958],{3905:function(e,a,n){n.d(a,{Zo:function(){return i},kt:function(){return m}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?t.createElement(b,o(o({ref:a},i),{},{components:n})):t.createElement(b,o({ref:a},i))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5481:function(e,a,n){n.r(a),n.d(a,{assets:function(){return i},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var t=n(3117),l=n(102),r=(n(7294),n(3905)),o=["components"],c={id:"get-started",title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c"},s=void 0,p={unversionedId:"get-started",id:"get-started",title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/ru/docs/get-started",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GetStarted.mdx",tags:[],version:"current",frontMatter:{id:"get-started",title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c"},sidebar:"docs",previous:{title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",permalink:"/ru/docs/overview"},next:{title:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",permalink:"/ru/docs/how-it-works"}},i={},u=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041d\u043e\u0432\u044b\u0439 \u0441\u0438\u043b\u0443\u044d\u0442 \u041a\u0430\u0441\u0431\u0438\u043d\u0430",id:"\u043d\u043e\u0432\u044b\u0439-\u0441\u0438\u043b\u0443\u044d\u0442-\u043a\u0430\u0441\u0431\u0438\u043d\u0430",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u043f\u0440\u0430\u0432\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",level:3}],d=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},m=d("Tabs"),b=d("TabItem"),k={toc:u};function f(e){var a=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go get github.com/casbin/casbin/v2\n"))),(0,r.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"Maven:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,r.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,r.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("p",null,"PHP. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0430\u043a\u0435\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e composer. \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require casbin/casbin\n"))),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install casbin\n"))),(0,r.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casbin.NET\n"))),(0,r.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434\ngit clone https://github.com/casbin/casbin-cpp. \u043e\u043d\n\n# \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,r.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-edit\nadd casbin\n\n// \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 async-std \u043a\u0430\u043a async executor\ncargo add async-std\n\n// \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 tokio as async executor\ncargo add tokio // \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0435\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044e `macros`\n"))),(0,r.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("p",null,"Delphi: Casbin4D \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u043a\u0435\u0442\u0435 (\u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u043b\u044f Delphi 10.3 Rio) \u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 IDE. \u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u0442\u0430\u043c \u043d\u0435\u0442 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442\u0435  \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. \u041f\u0440\u043e\u0441\u0442\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 (\u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0435 \u0432\u0430\u0436\u043d\u043e \u0438\u0445 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e)")),(0,r.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c casbin  \n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0430: \u0412\u0430\u0448 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u0432 /usr/local/lib/luarocks/rocks -- \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u0441 --local. \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c --local \u0437\u0430 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c casbin --local\n")))),(0,r.kt)("h2",{id:"\u043d\u043e\u0432\u044b\u0439-\u0441\u0438\u043b\u0443\u044d\u0442-\u043a\u0430\u0441\u0431\u0438\u043d\u0430"},"\u041d\u043e\u0432\u044b\u0439 \u0441\u0438\u043b\u0443\u044d\u0442 \u041a\u0430\u0441\u0431\u0438\u043d\u0430"),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430."),(0,r.kt)("p",null,"\u041e\u043d \u0438\u043c\u0435\u0435\u0442 \u0434\u0432\u0430 \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438: ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),". \u0421\u0440\u0435\u0434\u0438 \u043d\u0438\u0445 ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0445\u0440\u0430\u043d\u0438\u0442 \u043d\u0430\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u0445\u0440\u0430\u043d\u0438\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u041a\u0430\u0441\u0431\u0438\u043d\u0430 \u043e\u0447\u0435\u043d\u044c \u0438\u0437\u044b\u0441\u043a\u0430\u043d\u043d\u043e. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u0430 \u043e\u0434\u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430: ",(0,r.kt)("strong",{parentName:"p"},"\u044d\u043d\u0441\u0438\u043b"),". \u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0438 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv"),"."),(0,r.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u043c \u0441\u043b\u043e\u0432\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0440\u0442\u0435\u043f\u0438\u0430\u0442\u0435\u043b\u044c \u041a\u0430\u0441\u0431\u0438\u043d\u0430, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,r.kt)("a",{parentName:"p",href:"supported-models"},"\u043c\u043e\u0434\u0435\u043b\u044c")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"\u0430\u0434\u0430\u043f\u0442\u0435\u0440"),"."),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d ",(0,r.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter"),", \u0441\u043c. ",(0,r.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," \u043e\u0442 \u0431\u043e\u043b\u0435\u0435 \u0430\u0434\u0430\u043f\u0442\u0435\u0440."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter"),":")),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,r.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,r.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,r.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Create an Enforcer\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // \u0432\u0430\u0448 \u043a\u043e\u0434 ..\n}\n'))),(0,r.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,r.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0437\u0438\u043d\u043e::prelude::*;\n\n// \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 async_td \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c async\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model. onf", "path/to/policy.csv"). \u041e\u0436\u0434\u0438\u0442\u0435?;\n    Ok())\n}\n\n// \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 tokio as async \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\n#[cfg(feature = "runtime-tokio")]\n#[tokio:main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model. onf", "path/to/policy.csv").await?;\n    Ok())\n}\n'))),(0,r.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0421\u0438\u043b\u043e\u0440 = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- \u0421\u0438\u043b\u043e\u0432\u0438\u043a \u041a\u0430\u0441\u0431\u0438\u043d\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u043c:")),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f Xorm \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 MySQL.\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0. :3306)/casbin")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model. ewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p. ft == allow))\n\n[matchers]\n\u043c = r.sub == p.sub && r.obj == p. bj && r.act == p.act\n`)\nif err != nil {\n    log. atalf("error: model: %s", err)\n}\n\ne, err := casbin. ewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("\u043e\u0448\u0438\u0431\u043a\u0430: enforcer: %s", err)\n}\n'))),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 SQLAlchemy Casbin \u0441 SQLLite DB\n\u0430\u0434\u0430\u043f\u0442\u0435\u0440 = casbin_sqlalchemy_adapter. dapter(\'sqlite:///test.db\')\n\n# \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\n\u0441 open("rbac_example_model.conf", "w") \u043a\u0430\u043a f:\n    f. rite("""\n    [request_definition]\n    r = sub, obj, \u0430\u043a\u0442\n\n    [policy_definition]\n    p = sub, obj, \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\n\n    [policy_effect]\n    e = \u0433\u0434\u0435-\u0442\u043e (\u0441\u0442\u0440. f== \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c))\n\n    [matchers]\n    \u043c = r. ub == p.sub && r.obj == p.obj && r.act == p. ct\n    """)\n\n# \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u044d\u043d\u0441\u0438\u043b\u044f\u0442\u043e\u0440 \u0438\u0437 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\ne = casbin.Enforcer(\'rbac_example_model.conf\', \u0430\u0434\u0430\u043f\u0442\u0435\u0440)\n')))),(0,r.kt)("h3",{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u043f\u0440\u0430\u0432\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u044b\u0437\u043e\u0432 \u044d\u043d\u0444\u043e\u0440\u0441\u0435\u0440\u0430 \u0432 \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0442\u0430\u043c, \u0433\u0434\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f:"),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\nobj := "data1" // \u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\nact := "read" // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c.\n\nok, err := e. nforce(sub, obj, act)\n\n\u0435\u0441\u043b\u0438 err ! nil {\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 err\n}\n\nif ok == true {\n    // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice \u043a \u0447\u0442\u0435\u043d\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445 1\n} else {\n    // \u043e\u0442\u0440\u0438\u0446\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n}\n\n// \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c BatchEnforce() \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043f\u0430\u043a\u0435\u0442\u0430\u0445.\n// \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u043a\u0443 \u0431\u0443\u043b\u044f, \u0438 \u044d\u0442\u043e\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 \u043b\u043e\u043c\u0442\u0438\u043a\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0441\u0442\u0440\u043e\u043a \u0434\u0432\u0443\u0445\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430.\n// \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b[0] \u2014 \u044d\u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 {"alice", "data1", "read"}\nresults, err := e.BatchEnforce([][][]interface{}{"alice", "data1", "read"}, {"bob", "data2", "write"}, {"jack", "data3", "read"}})\n'))),(0,r.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\nString obj = "data1"; // \u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\nString act = "read"; // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c.\n\nif (e. nforce(sub, obj, act) == true) {\n    // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice to read data1\n} else {\n    // \u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n}\n'))),(0,r.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\nconst obj = 'data1'; // \u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\nconst act = 'read'; // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c.\n\nif (\u0436\u0434\u0443\u0442 e. nforce(sub, obj, act)) === true) {\n    // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice to read data1\n} else {\n    // \u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n}\n"))),(0,r.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\n$obj = "data1"; // \u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\n$act = "read"; // \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c.\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice1 \u0447\u0438\u0442\u0430\u0442\u044c (read) \u0440\u0435\u0441\u0443\u0440\u0441 data1\n} else {\n    // \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n}\n'))),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice"  # \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\nobj = "data1"  # \u0440\u0435\u0441\u0443\u0440\u0441, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\nact = "read"  # \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c.\n\nif e.enforce(sub, obj, act):\n    # \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice1 \u0447\u0438\u0442\u0430\u0442\u044c (read) \u0440\u0435\u0441\u0443\u0440\u0441 data1\n    pass\nelse:\n    # \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice1 \u0447\u0438\u0442\u0430\u0442\u044c (read) \u0440\u0435\u0441\u0443\u0440\u0441 data1\n    pass\n'))),(0,r.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice"; # \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\n# \u0440\u0435\u0441\u0443\u0440\u0441 var obj = "data1".\nvar act = "read"; # \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u0430\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0435.\n\nif (\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 e. nforceAsync(sub, obj, act)) \n{\n    // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice to read data1\n}\nelse\n{\n    // \u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n}\n'))),(0,r.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e. nforce({"alice", "/alice_data/hello", "GET"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n\n    if (e. nforce({"alice", "/alice_data/hello", "POST"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n}\n'))),(0,r.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice \u0441\u0443\u043f\u0435\u0440 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c data1\nelse\n  // Alice \u0440\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430\n"))),(0,r.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443.\n  let obj = "data1"; // \u0440\u0435\u0441\u0443\u0440\u0441, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f.\n  let act = "read"; // \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u0430\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0435.\n\n  if e.enforce(sub, obj, act)).await? {\n      // \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice to read data1\n  } else {\n      // \u043e\u0448\u0438\u0431\u043a\u0430\n}\n'))),(0,r.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'\u0435\u0441\u043b\u0438 e:enforce("alice", "data1", "read") \u0437\u0430\u0442\u0435\u043c\n   -- \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c alice to read data1\nelse\n   -- \u043e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441, \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443\n\u043a\u043e\u043d\u0446\u0430\n\n')))),(0,r.kt)("p",null,"\u041a\u0430\u0441\u0431\u0438\u043d \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 API \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u0440\u043e\u043b\u0438, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043a\u0430\u043a \u043d\u0438\u0436\u0435:"),(0,r.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,r.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,r.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Roles roles = e.getRolesForUser("alice");\n'))),(0,r.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const roles = await e.getRolesForUser('alice');\n"))),(0,r.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,r.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,r.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,r.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,r.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,r.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,r.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f."),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0442\u0435\u0441\u0442 \u043a\u0435\u0439\u0441\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f."))}f.isMDXComponent=!0}}]);