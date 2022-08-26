"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[6787],{3905:function(e,a,n){n.d(a,{Zo:function(){return i},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(b,o(o({ref:a},i),{},{components:n})):t.createElement(b,o({ref:a},i))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8346:function(e,a,n){n.r(a),n.d(a,{assets:function(){return i},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var t=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],c={id:"get-started",title:"\u306f\u3058\u3081\u306b",description:"Getting started with Casbin",keywords:["Casbin","get started","installation","usage"]},s=void 0,p={unversionedId:"get-started",id:"get-started",title:"\u306f\u3058\u3081\u306b",description:"Getting started with Casbin",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/ja/docs/get-started",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/ja",tags:[],version:"current",frontMatter:{id:"get-started",title:"\u306f\u3058\u3081\u306b",description:"Getting started with Casbin",keywords:["Casbin","get started","installation","usage"]},sidebar:"docs",previous:{title:"\u6982\u8981",permalink:"/ja/docs/overview"},next:{title:"\u4ed5\u7d44\u307f",permalink:"/ja/docs/how-it-works"}},i={},u=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Casbin Enforcer\u3092\u4f5c\u6210\u3059\u308b",id:"casbin-enforcer\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u6a29\u9650\u306e\u30c1\u30a7\u30c3\u30af\u3059\u308b",id:"\u6a29\u9650\u306e\u30c1\u30a7\u30c3\u30af\u3059\u308b",level:3}],d=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)}},m=d("Tabs"),b=d("TabItem"),k={toc:u};function f(e){var a=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go get github.com/casbin/casbin/v2\n"))),(0,l.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"For Maven:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,l.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,l.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"composer.json")," \u3067\u3053\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"composer require casbin/casbin\n"))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install casbin\n"))),(0,l.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casbin.NET\n"))),(0,l.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# download source\ngit clone https://github.com/casbin/casbin-cpp.git\n\n# generate project files\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,l.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-edit\ncargo add casbin\n\n// If you use async-std as async executor\ncargo add async-std\n\n// If you use tokio as async executor\ncargo add tokio // make sure you activate its `macros` feature\n"))),(0,l.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("p",null,"Casbin4D\u306f\u30d1\u30c3\u30b1\u30fc\u30b8(\u73fe\u5728\u306fDelphi 10.3 Rio\u7528) \u5185\u306b\u3042\u308a\u3001IDE\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30d3\u30b8\u30e5\u30a2\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u306a\u3044\u305f\u3081\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u72ec\u7acb\u3057\u305f\u5f62\u3067\u305d\u306e\u30e6\u30cb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30e6\u30cb\u30c3\u30c8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3060\u3051\u3067\u3059(\u6570\u5b57\u3092\u6c17\u306b\u3057\u306a\u3044\u3068\u4eee\u5b9a\u3057\u307e\u3059)\u3002")),(0,l.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin  \n")),(0,l.kt)("p",null,"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\uff1a/usr/local/lib/luarocks/rocks\u3078\u306e\u66f8\u304d\u8fbc\u307f\u6a29\u9650\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u7279\u6a29\u30e6\u30fc\u30b6\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u304b\u3001--local\u3092\u6307\u5b9a\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u30c4\u30ea\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002 \u6b21\u306e\u3088\u3046\u306b\u30b3\u30de\u30f3\u30c9\u306e\u5f8c\u308d\u306b --local \u3092\u4ed8\u3051\u3066\u4fee\u6b63\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"luarocks install casbin  --local\n")))),(0,l.kt)("h2",{id:"casbin-enforcer\u3092\u4f5c\u6210\u3059\u308b"},"Casbin Enforcer\u3092\u4f5c\u6210\u3059\u308b"),(0,l.kt)("p",null,"Casbin\u306f\u3001\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30e2\u30c7\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u306e2\u3064\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u306f\u30a2\u30af\u30bb\u30b9\u30e2\u30c7\u30eb\u3092\u4fdd\u5b58\u3057\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u306f\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002 Casbin\u306e\u5229\u7528\u65b9\u6cd5\u306f\u975e\u5e38\u306b\u6d17\u7df4\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u57fa\u672c\u7684\u306b\u306f\u30011\u3064\u306e\u4e3b\u8981\u3068\u306a\u308b\u69cb\u9020\u4f53\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u308c\u304c ",(0,l.kt)("strong",{parentName:"p"},"enforcer")," \u3067\u3059\u3002 \u3053\u306e\u69cb\u9020\u4f53\u3092\u69cb\u7bc9\u3059\u308b\u3068\u304d\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u8a00\u3044\u63db\u3048\u308b\u3068\u3001Casbin Enforcer \u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"supported-models"},"Model")," \u3068 ",(0,l.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," \u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"Casbin \u306b\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter")," \u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,l.kt)("a",{parentName:"p",href:"adapters"},"Adapter")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model\u30d5\u30a1\u30a4\u30eb\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,l.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter")," \u3092\u4f7f\u7528\u3059\u308b:")),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,l.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,l.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,l.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Create an Enforcer\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // your code ..\n}\n'))),(0,l.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,l.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use casbin::prelude::*;\n\n// If you use async_td as async executor\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n\n// If you use tokio as async executor\n#[cfg(feature = "runtime-tokio")]\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n'))),(0,l.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local Enforcer = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- The Casbin Enforcer\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ed6\u306eAdapter\u3068\u3068\u3082\u306bModel\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b:")),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// Initialize a Xorm adapter with MySQL database.\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/casbin")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model.NewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n`)\nif err != nil {\n    log.Fatalf("error: model: %s", err)\n}\n\ne, err := casbin.NewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("error: enforcer: %s", err)\n}\n'))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# Use SQLAlchemy Casbin adapter with SQLLite DB\nadapter = casbin_sqlalchemy_adapter.Adapter(\'sqlite:///test.db\')\n\n# Create a config model policy\nwith open("rbac_example_model.conf", "w") as f:\n    f.write("""\n    [request_definition]\n    r = sub, obj, act\n\n    [policy_definition]\n    p = sub, obj, act\n\n    [policy_effect]\n    e = some(where (p.eft == allow))\n\n    [matchers]\n    m = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n    """)\n\n# Create enforcer from adapter and config policy\ne = casbin.Enforcer(\'rbac_example_model.conf\', adapter)\n')))),(0,l.kt)("h3",{id:"\u6a29\u9650\u306e\u30c1\u30a7\u30c3\u30af\u3059\u308b"},"\u6a29\u9650\u306e\u30c1\u30a7\u30c3\u30af\u3059\u308b"),(0,l.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u304c\u767a\u751f\u3059\u308b\u76f4\u524d\u306e\u30b3\u30fc\u30c9\u306bEnforcement\u30d5\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b:"),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\nobj := "data1" // \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\nact := "read" // \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nok, err := e.Enforce(sub, obj, act)\n\nif err != nil {\n    // \u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\n}\n\nif ok == true {\n    // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n} else {\n    // \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n}\n\n// \u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4e00\u62ec\u3067\u51e6\u7406\u3059\u308b\u306e\u306b BatchEnforce() \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\n// \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306fbool\u306eslice\u3092\u8fd4\u5374\u3057\u307e\u3059\u3002\u3053\u306eslice\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f2\u6b21\u5143\u914d\u5217\u306e\u884c\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\n// e.g. results[0] is the result of {"alice", "data1", "read"}\nresults, err := e.BatchEnforce([][]interface{}{{"alice", "data1", "read"}, {"bob", "data2", "write"}, {"jack", "data3", "read"}})\n'))),(0,l.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\nString obj = "data1"; // \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\nString act = "read"; // \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nif (e.enforce(sub, obj, act) == true) {\n    // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n} else {\n    // \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n}\n'))),(0,l.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\nconst obj = 'data1'; // \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\nconst act = 'read'; // \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nif ((await e.enforce(sub, obj, act)) === true) {\n    // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n} else {\n    // \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n}\n"))),(0,l.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\n$obj = "data1"; // \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\n$act = "read"; // \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n} else {\n    // \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n}\n'))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice" # \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\nobj = "data1" # \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\nact = "read" # \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nif e.enforce(sub, obj, act):\n    # alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n    pass\nelse:\n    # \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n    pass\n'))),(0,l.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice"; # \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\nvar obj = "data1"; # \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\nvar act = "read"; # \u30e6\u30fc\u30b6\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\nif (await e.EnforceAsync(sub, obj, act)) \n{\n    // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n}\nelse\n{\n    // \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\n}\n'))),(0,l.kt)(b,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e.Enforce({"alice", "/alice_data/hello", "GET"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n\n    if (e.Enforce({"alice", "/alice_data/hello", "POST"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n'))),(0,l.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice is super happy as she can read data1\nelse\n  // Alice is sad\n"))),(0,l.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u30e6\u30fc\u30b6\n  let obj = "data1"; // \u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\n  let act = "read"; // \u30e6\u30fc\u30b6\u30fc\u304c\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u64cd\u4f5c\n\n  if e.enforce((sub, obj, act)).await? {\n      // alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\n  } else {\n      // \u30a8\u30e9\u30fc\u304c\u767a\u751f\n  }\n'))),(0,l.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'if e:enforce("alice", "data1", "read") then\n   --  alice\u304cdata1\u3092\u95b2\u89a7\u3059\u308b\u3053\u3068\u3092\u8a31\u53ef\u3059\u308b\nelse\n   -- \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3057\u3001\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b\nend\n\n')))),(0,l.kt)("p",null,"Casbin\u306f\u5b9f\u884c\u6642\u306e\u6a29\u9650\u7ba1\u7406\u7528\u306eAPI\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u3059\u3079\u3066\u306e\u30ed\u30fc\u30eb\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(m,{groupId:"langs",mdxType:"Tabs"},(0,l.kt)(b,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,l.kt)(b,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Roles roles = e.getRolesForUser("alice");\n'))),(0,l.kt)(b,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const roles = await e.getRolesForUser('alice');\n"))),(0,l.kt)(b,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,l.kt)(b,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,l.kt)(b,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,l.kt)(b,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,l.kt)(b,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,l.kt)(b,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,l.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," \u304a\u3088\u3073 ",(0,l.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u4ed6\u306e\u8a73\u7d30\u306f\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3082\u53c2\u7167\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);