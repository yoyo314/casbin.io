!function(){"use strict";var e,c,a,f,t,d={},b={};function n(e){var c=b[e];if(void 0!==c)return c.exports;var a=b[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=d,n.c=b,e=[],n.O=function(c,a,f,t){if(!a){var d=1/0;for(i=0;i<e.length;i++){a=e[i][0],f=e[i][1],t=e[i][2];for(var b=!0,r=0;r<a.length;r++)(!1&t||d>=t)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(b=!1,t<d&&(d=t));if(b){e.splice(i--,1);var o=f();void 0!==o&&(c=o)}}return c}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[a,f,t]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);n.r(t);var d={};c=c||[null,a({}),a([]),a(a)];for(var b=2&f&&e;"object"==typeof b&&!~c.indexOf(b);b=a(b))Object.getOwnPropertyNames(b).forEach((function(c){d[c]=function(){return e[c]}}));return d.default=function(){return e},n.d(t,d),t},n.d=function(e,c){for(var a in c)n.o(c,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,a){return n.f[a](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({19:"a6712eeb",45:"26ae7368",53:"935f2afb",130:"b07e1a87",322:"5cfa1cc6",545:"2eb24781",606:"1d862be6",811:"9e7a45dd",948:"6d704c2a",968:"ee51bc21",1006:"62750e27",1094:"51ea7b3c",1169:"0077a376",1219:"3ec28a5d",1557:"ef4c4fe3",1657:"b077c005",1777:"af034434",1958:"cde8f264",2095:"e7250bc9",2534:"6f5db6c0",2535:"814f3328",2667:"1eb6d7d1",2740:"7e37206e",3029:"90b49270",3089:"a6aa9e1f",3100:"9fc2c5a2",3608:"9e4087bc",3686:"6df9948d",3770:"b37881b7",3833:"c4cc16ec",3953:"36d4d843",4074:"fd9d9c89",4195:"c4f5d8e4",5303:"36a6922d",5442:"79275c4c",5526:"a7f34d91",5694:"e841bbb0",5700:"abebfdae",6004:"9ff3c22c",6103:"ccc49370",6212:"a88adeff",6370:"d6b8ee7c",6433:"ce2599b6",6442:"2d438121",6485:"f043c905",6656:"f77beebe",6781:"a2552e6f",6896:"03b3a3ba",7008:"cb420542",7024:"6171cabc",7193:"64991f83",7211:"bf219fc3",7266:"c3d6e7b5",7365:"2aed91a7",7572:"0764d20c",7575:"7d53efec",7680:"af913d4d",7831:"d274a870",7915:"dd3d20f1",7918:"17896441",7920:"1a4e3797",8058:"4d3bfbc7",8285:"40077e83",8487:"dfe8901a",8602:"0f4b6af9",8622:"ee30d4c2",8640:"3e54d4d5",8857:"696b93ca",9e3:"e74a79a5",9108:"63abf161",9206:"ef798800",9278:"34e628af",9514:"1be78505",9626:"60b993eb",9849:"740774a1",9915:"6a727aef"}[e]||e)+"."+{19:"257f17cd",45:"e1c6bdfe",53:"97ecf788",130:"25535ca0",322:"ebf624db",545:"1e41a630",606:"6aa28680",811:"d24000e4",948:"77a6d55b",968:"af43928f",1006:"08c087e4",1094:"dcb88032",1169:"15264e8a",1219:"dfba570d",1557:"b158830f",1657:"c1c501bc",1777:"312a4c43",1958:"c1e70717",2095:"e9ce683c",2534:"e0c89786",2535:"dbb8a2ca",2667:"a81f87ca",2740:"2cb30317",3029:"63ab1a11",3089:"1fdcadb3",3100:"3b5428c2",3562:"9e52e70d",3608:"b1530489",3686:"a330fefa",3770:"2153282a",3833:"92b302fa",3944:"48e86a69",3953:"39801456",4074:"bec157b2",4195:"ecb792dd",4972:"e7d7b114",5303:"3e9e9f14",5442:"ffbfd824",5526:"5eb82812",5694:"4d30e855",5700:"fb26af20",6004:"15ed423d",6026:"a87bd49d",6103:"ab7065c6",6212:"55fe2c73",6370:"098cfe56",6433:"6f033eb7",6442:"9bc60b65",6485:"c93b9291",6656:"249a4cba",6781:"6b05a201",6896:"0d936182",6945:"b00e3a41",7008:"b7d7f511",7024:"44a67ada",7193:"83aca53c",7211:"d48b2d0e",7266:"d694b46a",7365:"804330e3",7572:"676a2e74",7575:"34ebdde1",7680:"96fca556",7831:"4e08691d",7915:"31d4f6ec",7918:"cd6ab2c7",7920:"90a6f65f",8058:"f2c3440f",8285:"e0e25de3",8487:"0ed4f5d8",8602:"373c9a9b",8622:"aa1eb558",8640:"ec7ecb9c",8857:"9b9579cd",8894:"fc60dbd3",9e3:"c2da8f5d",9108:"67610dc3",9206:"18b734bc",9278:"861a8cde",9514:"5034846f",9626:"b2650bfe",9849:"f6907200",9915:"bbd88af2"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},f={},t="casbin-website-v2:",n.l=function(e,c,a,d){if(f[e])f[e].push(c);else{var b,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+a){b=u;break}}b||(r=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,n.nc&&b.setAttribute("nonce",n.nc),b.setAttribute("data-webpack",t+a),b.src=e),f[e]=[c];var l=function(c,a){b.onerror=b.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),t&&t.forEach((function(e){return e(a)})),c)return c(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),r&&document.head.appendChild(b)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/ru/",n.gca=function(e){return e={17896441:"7918",a6712eeb:"19","26ae7368":"45","935f2afb":"53",b07e1a87:"130","5cfa1cc6":"322","2eb24781":"545","1d862be6":"606","9e7a45dd":"811","6d704c2a":"948",ee51bc21:"968","62750e27":"1006","51ea7b3c":"1094","0077a376":"1169","3ec28a5d":"1219",ef4c4fe3:"1557",b077c005:"1657",af034434:"1777",cde8f264:"1958",e7250bc9:"2095","6f5db6c0":"2534","814f3328":"2535","1eb6d7d1":"2667","7e37206e":"2740","90b49270":"3029",a6aa9e1f:"3089","9fc2c5a2":"3100","9e4087bc":"3608","6df9948d":"3686",b37881b7:"3770",c4cc16ec:"3833","36d4d843":"3953",fd9d9c89:"4074",c4f5d8e4:"4195","36a6922d":"5303","79275c4c":"5442",a7f34d91:"5526",e841bbb0:"5694",abebfdae:"5700","9ff3c22c":"6004",ccc49370:"6103",a88adeff:"6212",d6b8ee7c:"6370",ce2599b6:"6433","2d438121":"6442",f043c905:"6485",f77beebe:"6656",a2552e6f:"6781","03b3a3ba":"6896",cb420542:"7008","6171cabc":"7024","64991f83":"7193",bf219fc3:"7211",c3d6e7b5:"7266","2aed91a7":"7365","0764d20c":"7572","7d53efec":"7575",af913d4d:"7680",d274a870:"7831",dd3d20f1:"7915","1a4e3797":"7920","4d3bfbc7":"8058","40077e83":"8285",dfe8901a:"8487","0f4b6af9":"8602",ee30d4c2:"8622","3e54d4d5":"8640","696b93ca":"8857",e74a79a5:"9000","63abf161":"9108",ef798800:"9206","34e628af":"9278","1be78505":"9514","60b993eb":"9626","740774a1":"9849","6a727aef":"9915"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,a){var f=n.o(e,c)?e[c]:void 0;if(0!==f)if(f)a.push(f[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var t=new Promise((function(a,t){f=e[c]=[a,t]}));a.push(f[2]=t);var d=n.p+n.u(c),b=new Error;n.l(d,(function(a){if(n.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var t=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;b.message="Loading chunk "+c+" failed.\n("+t+": "+d+")",b.name="ChunkLoadError",b.type=t,b.request=d,f[1](b)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,a){var f,t,d=a[0],b=a[1],r=a[2],o=0;if(d.some((function(c){return 0!==e[c]}))){for(f in b)n.o(b,f)&&(n.m[f]=b[f]);if(r)var i=r(n)}for(c&&c(a);o<d.length;o++)t=d[o],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(i)},a=self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();