!function(){"use strict";var e,a,d,c,f,t={},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var d=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=t,r.c=n,e=[],r.O=function(a,d,c,f){if(!d){var t=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var n=!0,b=0;b<d.length;b++)(!1&f||t>=f)&&Object.keys(r.O).every((function(e){return r.O[e](d[b])}))?d.splice(b--,1):(n=!1,f<t&&(t=f));if(n){e.splice(i--,1);var o=c();void 0!==o&&(a=o)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},d=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var t={};a=a||[null,d({}),d([]),d(d)];for(var n=2&c&&e;"object"==typeof n&&!~a.indexOf(n);n=d(n))Object.getOwnPropertyNames(n).forEach((function(a){t[a]=function(){return e[a]}}));return t.default=function(){return e},r.d(f,t),f},r.d=function(e,a){for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,d){return r.f[d](e,a),a}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",225:"47cd9856",623:"2231f6ac",953:"5c2d8bdb",1151:"b0992c06",1331:"366e2b37",1369:"7f332c82",1569:"4cdda172",1643:"a9560e99",2014:"c64a3b83",2095:"18752ff5",2126:"16cdfb49",2250:"ea585fdc",2321:"33ec1ff9",2403:"6da89748",2534:"6f5db6c0",2535:"814f3328",2622:"8274c49f",2740:"7e37206e",2858:"492d0155",3089:"a6aa9e1f",3311:"b6a60845",3479:"1f502eb8",3608:"9e4087bc",3621:"617387ad",3908:"46d4c535",3978:"3e8ea99f",3991:"95009011",4074:"fd9d9c89",4195:"c4f5d8e4",4337:"bc855f8f",4848:"8186480d",4891:"3ccd08e3",5153:"71521ad7",5504:"6431f5e8",5517:"d4fb1a5d",5700:"abebfdae",5736:"a497f7f5",5771:"1a1d1d86",5881:"35d60f35",6103:"ccc49370",6370:"d6b8ee7c",6446:"7afd9f41",6683:"ab5f73b2",6721:"83dbd4fd",6930:"c98668c9",7180:"7e1c6d1d",7319:"252e5545",7477:"8eeb5750",7500:"d2db9d6c",7569:"485bacb6",7636:"55d35bce",7637:"66767b55",7638:"03fc9a3c",7680:"af913d4d",7902:"79884ccd",7918:"17896441",7920:"1a4e3797",7951:"a9d9a126",7992:"205a579c",8013:"fb5f53b6",8104:"d92a2f09",8122:"52a2ca59",8413:"d96f1a22",8475:"08e611ad",8576:"c699eb95",9e3:"e74a79a5",9083:"e989b5df",9220:"ec991c01",9246:"6daa16c5",9311:"e174b9d8",9514:"1be78505",9555:"a59c4e63",9626:"60b993eb",9924:"f16ffb91",9985:"031780a5"}[e]||e)+"."+{53:"537059e9",225:"fae04cea",623:"c1c9401b",953:"7e6c78cf",1151:"0e65b9e1",1331:"eb96c4cd",1369:"3b3753a0",1569:"37750de8",1643:"084f9d5c",2014:"2c71502a",2095:"e299faa8",2126:"f5db5c7b",2250:"689c31f7",2321:"83ad2510",2403:"a599366d",2534:"e0c89786",2535:"b8a2967e",2622:"d563b0cb",2740:"2cb30317",2858:"1e7c5992",3089:"1fdcadb3",3311:"1009df4d",3479:"38fc8d84",3562:"9e52e70d",3608:"b1530489",3621:"5a032806",3908:"e29c1eb6",3944:"48e86a69",3978:"8801a252",3991:"59117669",4074:"bec157b2",4195:"ecb792dd",4337:"fd60c697",4848:"419d6af1",4891:"c8bfba5c",4972:"e7d7b114",5153:"df887171",5504:"ece0ffa7",5517:"de54e7b1",5700:"fb26af20",5736:"7fd93d5b",5771:"e23e2323",5881:"84d99490",6026:"a87bd49d",6103:"ab7065c6",6370:"098cfe56",6446:"b8757aec",6683:"51d522db",6721:"850dce35",6930:"a5d5679e",6945:"b00e3a41",7180:"217bcd8b",7319:"934af315",7477:"bc95c066",7500:"ce10e065",7569:"e76c487c",7636:"52be8345",7637:"1acfdbba",7638:"711663bf",7680:"96fca556",7902:"41eb7ada",7918:"cd6ab2c7",7920:"90a6f65f",7951:"326661b1",7992:"69711b93",8013:"2f7130f2",8104:"5ccbea9b",8122:"ad964dc9",8413:"98fabce4",8475:"bd0a83b1",8576:"303203bb",8894:"fc60dbd3",9e3:"c2da8f5d",9083:"70ff5283",9220:"4670f91f",9246:"6ab1c433",9311:"db2961ad",9514:"5034846f",9555:"f886b084",9626:"b2650bfe",9924:"5f0b43b7",9985:"5bbacf84"}[e]+".js"},r.miniCssF=function(e){},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},f="casbin-website-v2:",r.l=function(e,a,d,t){if(c[e])c[e].push(a);else{var n,b;if(void 0!==d)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){n=u;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",f+d),n.src=e),c[e]=[a];var l=function(a,d){n.onerror=n.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),f&&f.forEach((function(e){return e(d)})),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/ko/",r.gca=function(e){return e={17896441:"7918",95009011:"3991","935f2afb":"53","47cd9856":"225","2231f6ac":"623","5c2d8bdb":"953",b0992c06:"1151","366e2b37":"1331","7f332c82":"1369","4cdda172":"1569",a9560e99:"1643",c64a3b83:"2014","18752ff5":"2095","16cdfb49":"2126",ea585fdc:"2250","33ec1ff9":"2321","6da89748":"2403","6f5db6c0":"2534","814f3328":"2535","8274c49f":"2622","7e37206e":"2740","492d0155":"2858",a6aa9e1f:"3089",b6a60845:"3311","1f502eb8":"3479","9e4087bc":"3608","617387ad":"3621","46d4c535":"3908","3e8ea99f":"3978",fd9d9c89:"4074",c4f5d8e4:"4195",bc855f8f:"4337","8186480d":"4848","3ccd08e3":"4891","71521ad7":"5153","6431f5e8":"5504",d4fb1a5d:"5517",abebfdae:"5700",a497f7f5:"5736","1a1d1d86":"5771","35d60f35":"5881",ccc49370:"6103",d6b8ee7c:"6370","7afd9f41":"6446",ab5f73b2:"6683","83dbd4fd":"6721",c98668c9:"6930","7e1c6d1d":"7180","252e5545":"7319","8eeb5750":"7477",d2db9d6c:"7500","485bacb6":"7569","55d35bce":"7636","66767b55":"7637","03fc9a3c":"7638",af913d4d:"7680","79884ccd":"7902","1a4e3797":"7920",a9d9a126:"7951","205a579c":"7992",fb5f53b6:"8013",d92a2f09:"8104","52a2ca59":"8122",d96f1a22:"8413","08e611ad":"8475",c699eb95:"8576",e74a79a5:"9000",e989b5df:"9083",ec991c01:"9220","6daa16c5":"9246",e174b9d8:"9311","1be78505":"9514",a59c4e63:"9555","60b993eb":"9626",f16ffb91:"9924","031780a5":"9985"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(a,d){var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise((function(d,f){c=e[a]=[d,f]}));d.push(c[2]=f);var t=r.p+r.u(a),n=new Error;r.l(t,(function(d){if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;n.message="Loading chunk "+a+" failed.\n("+f+": "+t+")",n.name="ChunkLoadError",n.type=f,n.request=t,c[1](n)}}),"chunk-"+a,a)}},r.O.j=function(a){return 0===e[a]};var a=function(a,d){var c,f,t=d[0],n=d[1],b=d[2],o=0;if(t.some((function(a){return 0!==e[a]}))){for(c in n)r.o(n,c)&&(r.m[c]=n[c]);if(b)var i=b(r)}for(a&&a(d);o<t.length;o++)f=t[o],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))}()}();