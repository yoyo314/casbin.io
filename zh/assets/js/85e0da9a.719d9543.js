"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[3474],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(b,o(o({ref:a},p),{},{components:n})):t.createElement(b,o({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),r=n(6010),l="tabItem_Ymn6";function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},a)}},5488:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(3117),r=n(7294),l=n(6010),o=n(2389),c=n(7392),s=n(7094),i=n(2466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var a,n,o=e.lazy,d=e.block,m=e.defaultValue,b=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,c.l)(g,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(a=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?a:v[0].props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),T=N.tabGroupChoices,x=N.setTabGroupChoices,E=(0,r.useState)(h),w=E[0],j=E[1],I=[],Z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=T[f];null!=P&&P!==w&&g.some((function(e){return e.value===P}))&&j(P)}var C=function(e){var a=e.currentTarget,n=I.indexOf(a),t=g[n].value;t!==w&&(Z(a),j(t),null!=f&&x(f,String(t)))},_=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t,r=I.indexOf(e.currentTarget)+1;n=null!=(t=I[r])?t:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;n=null!=(l=I[o])?l:I[I.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var a=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===a})}),null!=n?n:a)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function m(e){var a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},7330:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var t=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(5488),c=n(5162),s=["components"],i={id:"get-started",title:"\u5f00\u59cb\u4f7f\u7528"},p=void 0,u={unversionedId:"get-started",id:"get-started",title:"\u5f00\u59cb\u4f7f\u7528",description:"\u5b89\u88c5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/GetStarted.mdx",sourceDirName:".",slug:"/get-started",permalink:"/zh/docs/get-started",draft:!1,editUrl:"https://github.com/casbin/casbin-website-v2/edit/master/docs/GetStarted.mdx",tags:[],version:"current",frontMatter:{id:"get-started",title:"\u5f00\u59cb\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh/docs/overview"},next:{title:"\u5de5\u4f5c\u539f\u7406",permalink:"/zh/docs/how-it-works"}},d={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u65b0\u5efa\u4e00\u4e2aCasbin enforcer",id:"\u65b0\u5efa\u4e00\u4e2acasbin-enforcer",level:2},{value:"\u68c0\u67e5\u6743\u9650",id:"\u68c0\u67e5\u6743\u9650",level:3}],b={toc:m};function f(e){var a=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go get github.com/casbin/casbin/v2\n"))),(0,l.kt)(c.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5bf9\u4e8eMaven\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/jcasbin --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>jcasbin</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,l.kt)(c.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install casbin --save\n\n# Yarn\nyarn add casbin\n"))),(0,l.kt)(c.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5728\u60a8\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"comper.json")," \u4e2d require \u8fd9\u4e2a\u5305\u3002 \u4e0b\u8f7d\u8f6f\u4ef6\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"composer require casbin/casbin\n"))),(0,l.kt)(c.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install casbin\n"))),(0,l.kt)(c.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dotnet add package Casbin.NET\n"))),(0,l.kt)(c.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# download source\ngit clone https://github.com/casbin/casbin-cpp.git\n\n# generate project files\ncd casbin-cpp && mkdir build && cd build && cmake .. -DCMAKE_BUILD_TYPE=Release\n\n# build and install casbin\ncmake --build . --config Release --target casbin install -j 10\n"))),(0,l.kt)(c.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'cargo install cargo-edit\ncargo add casbin\n\n// \u5982\u679c\u4f60\u4f7f\u7528 async-std \u4f5c\u4e3a\u5f02\u6b65\u6267\u884c\u5668\ncargo add async-std\n\n// \u5982\u679c\u4f60\u4f7f\u7528 tokio \u4f5c\u4e3a\u5f02\u6b65\u6267\u884c\u5668\ncargo add tokio // \u786e\u4fdd\u4f60\u542f\u7528\u4e86 "macros" \u7279\u6027\n'))),(0,l.kt)(c.Z,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("p",null,"Casbins4D \u4ee5\u5305\u7684\u5f62\u5f0f\u63d0\u4f9b\uff08\u76ee\u524d\u4e3a Delphi 10.3 Rio\uff09\uff0c\u60a8\u53ef\u4ee5\u5728 IDE \u4e2d\u5b89\u88c5\u5b83\u3002 \u7136\u800c\uff0c\u6ca1\u6709\u53ef\u89c6\u5316\u7ec4\u4ef6\uff0c\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5728\u5305\u5916\u72ec\u7acb\u4f7f\u7528\u8fd9\u4e9b unit\u3002 \u53ea\u9700\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u5bfc\u5165 unit \u5373\u53ef\uff08\u5982\u679c\u4f60\u4e0d\u4ecb\u610f\u5b83\u4eec\u7684\u6570\u91cf\uff09\u3002")),(0,l.kt)(c.Z,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"luarocks install casbin  \n")),(0,l.kt)("p",null,"\u5982\u679c\u62a5\u51fa\u9519\u8bef\uff1a\u60a8\u7684\u7528\u6237\u6ca1\u6709\u5199\u5165/usr/local/lib/luarocks/rocks \u7684\u6743\u9650\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ee5 root \u7528\u6237\u8eab\u4efd\u8fd0\u884c\u6216\u4f7f\u7528\u672c\u5730\u6811\uff0c\u52a0\u4e0a --local \u53c2\u6570\u3002 \u60a8\u53ef\u4ee5\u5c06 --local \u53c2\u6570\u6dfb\u52a0\u5230\u60a8\u7684\u547d\u4ee4\u540e\u9762\uff0c\u5c31\u50cf\u8fd9\u6837\u4fee\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"luarocks install casbin  --local\n")))),(0,l.kt)("h2",{id:"\u65b0\u5efa\u4e00\u4e2acasbin-enforcer"},"\u65b0\u5efa\u4e00\u4e2aCasbin enforcer"),(0,l.kt)("p",null,"Casbin\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e\u8bbf\u95ee\u63a7\u5236\u6a21\u578b"),(0,l.kt)("p",null,"\u5b83\u6709\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6, ",(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv"),"\u3002 \u5176\u4e2d, ",(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u5b58\u50a8\u4e86\u6211\u4eec\u7684\u8bbf\u95ee\u6a21\u578b, \u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u5b58\u50a8\u7684\u662f\u6211\u4eec\u5177\u4f53\u7684\u7528\u6237\u6743\u9650\u914d\u7f6e\u3002 Casbin\u7684\u4f7f\u7528\u975e\u5e38\u7cbe\u70bc\u3002 \u57fa\u672c\u4e0a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e00\u79cd\u4e3b\u8981\u7684\u7ed3\u6784\uff1a",(0,l.kt)("strong",{parentName:"p"},"enforcer")," \u5f53\u6784\u9020\u8fd9\u4e2a\u7ed3\u6784\u7684\u65f6\u5019\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"model.conf")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"policy.csv")," \u5c06\u4f1a\u88ab\u52a0\u8f7d\u3002"),(0,l.kt)("p",null,"\u7528\u53e6\u4e00\u79cd\u8bf4\u6cd5\u5c31\u662f\uff0c\u5f53\u65b0\u5efaCasbin enforcer\u7684\u65f6\u5019 \u4f60\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"supported-models"},"Model")," \u548c\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"adapters"},"Adapter"),"\u3002"),(0,l.kt)("p",null,"Casbin\u62e5\u6709\u4e00\u4e2a a ",(0,l.kt)("a",{parentName:"p",href:"adapters#file-adapter-built-in"},"FileAdapter"),", \u60f3\u77e5\u9053\u66f4\u591a\u8bf7\u67e5\u9605 \u201c\u66f4\u591aAdapter\u201d \u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"adapters"},"Adapter")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528Model\u6587\u4ef6\u548c\u9ed8\u8ba4 ",(0,l.kt)("a",{parentName:"li",href:"adapters#file-adapter-built-in"},"FileAdapter"),":")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/casbin/casbin/v2"\n\ne, err := casbin.NewEnforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,l.kt)(c.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import org.casbin.jcasbin.main.Enforcer;\n\nEnforcer e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(c.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { newEnforcer } from 'casbin';\n\nconst e = await newEnforcer('path/to/model.conf', 'path/to/policy.csv');\n"))),(0,l.kt)(c.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'require_once \'./vendor/autoload.php\';\n\nuse Casbin\\Enforcer;\n\n$e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(c.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\n\ne = casbin.Enforcer("path/to/model.conf", "path/to/policy.csv")\n'))),(0,l.kt)(c.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using NetCasbin; \n\nvar e = new Enforcer("path/to/model.conf", "path/to/policy.csv");\n'))),(0,l.kt)(c.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <casbin/casbin.h>\n\nint main() {\n    // Create an Enforcer\n    casbin::Enforcer e("path/to/model.conf", "path/to/policy.csv");\n\n    // your code ..\n}\n'))),(0,l.kt)(c.Z,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},"var\n  casbin: ICasbin;\nbegin\n  casbin := TCasbin.Create('path/to/model.conf', 'path/to/policy.csv');\n  ...\nend\n"))),(0,l.kt)(c.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use casbin::prelude::*;\n\n// \u5982\u679c\u4f60\u4f7f\u7528 async_td \u4f5c\u4e3a\u5f02\u6b65\u6267\u884c\u5668\n#[cfg(feature = "runtime-async-std")]\n#[async_std::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n\n// \u5982\u679c\u4f60\u4f7f\u7528 tokio \u4f5c\u4e3a\u5f02\u6b65\u6267\u884c\u5668\n#[cfg(feature = "runtime-tokio")]\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut e = Enforcer::new("path/to/model.conf", "path/to/policy.csv").await?;\n    Ok(())\n}\n'))),(0,l.kt)(c.Z,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local Enforcer = require("casbin")\nlocal e = Enforcer:new("path/to/model.conf", "path/to/policy.csv") -- The Casbin Enforcer\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u5176\u4ed6Adapter\u4e00\u8d77\u4f7f\u7528Model text")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    xormadapter "github.com/casbin/xorm-adapter/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\n// \u4f7f\u7528MySQL\u6570\u636e\u5e93\u521d\u59cb\u5316\u4e00\u4e2aXorm\u9002\u914d\u5668\na, err := xormadapter.NewAdapter("mysql", "mysql_username:mysql_password@tcp(127.0.0.1:3306)/casbin")\nif err != nil {\n    log.Fatalf("error: adapter: %s", err)\n}\n\nm, err := model.NewModelFromString(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n`)\nif err != nil {\n    log.Fatalf("error: model: %s", err)\n}\n\ne, err := casbin.NewEnforcer(m, a)\nif err != nil {\n    log.Fatalf("error: enforcer: %s", err)\n}\n'))),(0,l.kt)(c.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import casbin\nimport casbin_sqlalchemy_adapter\n\n\n# Use SQLAlchemy Casbin adapter with SQLLite DB\nadapter = casbin_sqlalchemy_adapter.Adapter(\'sqlite:///test.db\')\n\n# Create a config model policy\nwith open("rbac_example_model.conf", "w") as f:\n    f.write("""\n    [request_definition]\n    r = sub, obj, act\n\n    [policy_definition]\n    p = sub, obj, act\n\n    [policy_effect]\n    e = some(where (p.eft == allow))\n\n    [matchers]\n    m = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n    """)\n\n# Create enforcer from adapter and config policy\ne = casbin.Enforcer(\'rbac_example_model.conf\', adapter)\n')))),(0,l.kt)("h3",{id:"\u68c0\u67e5\u6743\u9650"},"\u68c0\u67e5\u6743\u9650"),(0,l.kt)("p",null,"\u5728\u8bbf\u95ee\u53d1\u751f\u4e4b\u524d, \u5728\u4ee3\u7801\u4e2d\u6dfb\u52a0\u5f3a\u5236\u6302\u94a9:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'sub := "alice" // \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\u3002\nobj: = "data1" // \u5c06\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\u3002\nact := "read" // \u7528\u6237\u5bf9\u8d44\u6e90\u6267\u884c\u7684\u64cd\u4f5c\u3002\n\nok, err := e.Enforce(sub, obj, act)\n\nif err != nil {\n    // \u5904\u7406err\n}\n\nif ok == true {\n    // \u5141\u8bb8alice\u8bfb\u53d6data1\n} else {\n    // \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n}\n\n// \u60a8\u53ef\u4ee5\u4f7f\u7528BatchEnforce()\u6765\u6279\u91cf\u6267\u884c\u4e00\u4e9b\u8bf7\u6c42\n// \u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u5e03\u5c14\u5207\u7247\uff0c\u6b64\u5207\u7247\u7684\u7d22\u5f15\u5bf9\u5e94\u4e8e\u4e8c\u7ef4\u6570\u7ec4\u7684\u884c\u7d22\u5f15\u3002\n// \u4f8b\u5982results[0] \u662f{"alice", "data1", "read"}\u7684\u7ed3\u679c\nresults, err := e.BatchEnforce([[] []interface{}{"alice", "data1", "read"}, {"bob", datata2", "write"}, {"jack", "data3", "read"}})\n'))),(0,l.kt)(c.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String sub = "alice"; // \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\nString obj = "data1"; // \u5c06\u8981\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\nString act = "read"; // \u7528\u6237\u5bf9\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\n\nif (e.enforce(sub, obj, act) == true) {\n    // \u5141\u8bb8alice\u8bfb\u53d6data1\n} else {\n    // \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n}\n'))),(0,l.kt)(c.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const sub = 'alice'; // \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\nconst obj = 'data1'; // \u5c06\u8981\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\nconst act = 'read'; // \u7528\u6237\u5bf9\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\n\nif ((await e.enforce(sub, obj, act)) === true) {\n    // \u5141\u8bb8alice\u8bfb\u53d6data1\n} else {\n    // \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n}\n"))),(0,l.kt)(c.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$sub = "alice"; // \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\n$obj = "data1"; // \u5c06\u8981\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\n$act = "read"; // \u7528\u6237\u5bf9\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\n\nif ($e->enforce($sub, $obj, $act) === true) {\n    // \u5141\u8bb8alice\u8bfb\u53d6data1\n} else {\n    // \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n}\n'))),(0,l.kt)(c.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sub = "alice"  # \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\nobj = "data1"  # \u5c06\u8981\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\nact = "read"  # \u7528\u6237\u5bf9\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\n\nif e.enforce(sub, obj, act):\n    # \u5141\u8bb8alice\u8bfb\u53d6data1\n    pass\nelse:\n    # \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n    pass\n'))),(0,l.kt)(c.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var sub = "alice";  # \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\nvar obj = "data1";  # \u5c06\u8981\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\nvar act = "read";  # \u7528\u6237\u5bf9\u8d44\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\n\nif (await e.EnforceAsync(sub, obj, act)) \n{\n    // \u5141\u8bb8alice\u8bfb\u53d6data1\n}\nelse\n{\n    // \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\n}\n'))),(0,l.kt)(c.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'    casbin::Enforcer e("../assets/model.conf", "../assets/policy.csv");\n\n    if (e.Enforce({"alice", "/alice_data/hello", "GET"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n\n    if (e.Enforce({"alice", "/alice_data/hello", "POST"})) {\n        std::cout << "Enforce OK" << std::endl;\n    } else {\n        std::cout << "Enforce NOT Good" << std::endl;\n    }\n'))),(0,l.kt)(c.Z,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},"if casbin.enforce(['alice,data1,read']) then\n  // Alice\u5f88\u5f00\u5174\u5b83\u80fd\u591f\u8bfb\u53d6data1\u4e86\nelse\n  // Alice\u5f88\u4f24\u5fc3\n"))),(0,l.kt)(c.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'  let sub = "alice"; // \u60f3\u8981\u8bbf\u95ee\u8d44\u6e90\u7684\u7528\u6237\n  let obj = "data1"; // \u5c06\u4f1a\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\n  let act = "read"; // \u7528\u6237\u5bf9\u8d44\u6e90\u7684\u64cd\u4f5c\n\n  if e.enforce((sub, obj, act)).await? {\n      // \u5141\u8bb8alice\u8bfb\u53d6data1\n  } else {\n      // \u53d1\u751f\u9519\u8bef\n  }\n'))),(0,l.kt)(c.Z,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'if e:enforce("alice", "data1", "read") then\n   -- \u5141\u8bb8alice\u8bfb\u53d6data1\nelse\n   -- \u62d2\u7edd\u8bf7\u6c42\uff0c\u629b\u51fa\u5f02\u5e38\nend\n\n')))),(0,l.kt)("p",null,"Casbin also provides API for permission management at run-time. For example, You can get all the roles assigned to a user as below:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := e.GetRolesForUser("alice")\n'))),(0,l.kt)(c.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Roles roles = e.getRolesForUser("alice");\n'))),(0,l.kt)(c.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const roles = await e.getRolesForUser('alice');\n"))),(0,l.kt)(c.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$roles = $e->getRolesForUser("alice");\n'))),(0,l.kt)(c.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'roles = e.get_roles_for_user("alice")\n'))),(0,l.kt)(c.Z,{value:".NET",label:".NET",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var roles = e.GetRolesForUser("alice");\n'))),(0,l.kt)(c.Z,{value:"Delphi",label:"Delphi",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-delphi"},'roles = e.rolesForEntity("alice")\n'))),(0,l.kt)(c.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let roles = e.get_roles_for_user("alice");\n'))),(0,l.kt)(c.Z,{value:"Lua",label:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local roles = e:GetRolesForUser("alice")\n')))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/management-api"},"Management API")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"RBAC API")," for more usage."),(0,l.kt)("p",null,"\u8bf7\u67e5\u770b\u6d4b\u8bd5\u7528\u4f8b\u4ee5\u83b7\u53d6\u66f4\u591a\u4f7f\u7528\u65b9\u5f0f\u3002"))}f.isMDXComponent=!0}}]);