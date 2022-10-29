(()=>{"use strict";var e,t={8957:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},a=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=i(o(7294)),s=c(o(2788)),l=i(o(351)),d=o(1225),f=o(1479),h=o(3643),p=o(4382);t.default=function(){const[e,t]=(0,u.useState)(!1),o=(0,u.useRef)(null),[n,r]=(0,u.useState)(null),[i,c]=(0,u.useState)([]),s=(0,u.useMemo)((()=>"lo"===l.get("CanaryReleaseRouteV4")),[]);var w,_,x;w=e=>"Escape"==e.key,_=()=>t(!e),x=[e],(0,u.useEffect)((()=>{const e=e=>{w(e)&&_()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}),x);const k=(0,u.useCallback)((()=>{c([]),o.current&&setTimeout((()=>{if(!o.current)return;var e;o.current&&(function(e){let t;const o=document.createNodeIterator(e,NodeFilter.SHOW_ALL);for(;t=o.nextNode();)t.removeAttribute&&t.removeAttribute("style")}(e=o.current),function(e){let t;const o=document.createNodeIterator(e,NodeFilter.SHOW_ALL);for(;t=o.nextNode();)"a"==t.tagName&&t.setAttribute("target","_blank")}(e));const{cartItems:t,rejectedRows:n,withCounts:r}=(0,d.extractData)(o.current);r||c(["Не удалось распознать колонку таблицы с количествами – везде будут '1'",...i]);for(const e of t)e.warning&&e.tableRow&&e.tableRow.setAttribute("style","background: orange;");for(const e of n)e.setAttribute("style","background: grey;")}),100)}),[o,i]),O=(0,u.useCallback)((()=>{if(c([]),null==o.current)return;const{cartItems:e}=(0,d.extractData)(o.current);if(0==e.length)return void console.log("no data extracted");let t;console.log("adding items",e),t=s?()=>a(this,void 0,void 0,(function*(){let t=0;for(const o of e){t++,r(`${t} из ${e.length}`);try{yield h.utkonosNewAPI.modifyCartItem(o)}catch(e){e instanceof p.UtkonosAPIException&&o.tableRow&&(console.log("item is failed to save: ",o),o.tableRow.setAttribute("style","background: #ffb0b0;"))}}})):()=>a(this,void 0,void 0,(function*(){yield f.utkonosLegacyAPI.saveCart(e)})),t().then((()=>{r(null)})).catch((e=>{r(null),console.log("failed to save",e),alert(`Не удалось сохранить: ${e}`)}))}),[]);return u.default.createElement(u.default.StrictMode,null,e&&u.default.createElement(m,{className:"utkonos-ext-root"},u.default.createElement(v,{contentEditable:!0,ref:o,onPaste:k}),u.default.createElement(g,null,u.default.createElement("div",null,s?"Версия сайта новая":"Версия сайта старая"),i.map((e=>u.default.createElement("div",{id:e},e)))),u.default.createElement(b,{onClick:O,disabled:!!n},n&&`Сохраняем... ${n}`,!n&&"Добавить")),u.default.createElement(y,{onClick:()=>t(!e)}))};const m=s.default.div`
  position: fixed;
  width: 400px;
  height: 80vh;
  top: calc(50% - 40vh);
  right: 5px;
  background: #ffd9d9;
  z-index: 1000;
  border: 1px solid #555;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,v=s.default.div`
  height: 100%;
  width: 100%;
  border-radius: 7px;
  background: white;
  overflow: scroll;
  
  font-size: 0.8em;
  
  padding: 5px 10px;
`,g=s.default.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,b=s.default.button`
  margin: 5px;
  border: 1px solid black;
  border-radius: 3px;
`,y=s.default.div`
  position: fixed;
  height: 73px;
  width: 36px;
  top: 0;
  right: 0;
  z-index: 1000;
  background: url(https://mayak.help/wp-content/themes/mayak/img/logo.png);
  transform: scale(0.8);
  -webkit-transform-origin-x: right;
  -webkit-transform-origin-y: top;
`},5311:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(7294)),i=n(o(3935)),a=n(o(8957));console.log("[utkonos-ext] initializing");const c=document.createElement("div");document.body.appendChild(c),i.default.render(r.default.createElement(a.default,null),c)},923:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractFromTable=void 0;const n=o(9385);o(8446),o(4788),o(6026),t.extractFromTable=function(e){var t;const[o,r]=function(e){const t=(0,n.doXpath)(".//tr",e),o=[];for(const e of t){const t=[];for(const o of e.childNodes){const e=document.evaluate(".//a",o,null,XPathResult.ANY_TYPE).iterateNext();if(null!==e){const o=e instanceof HTMLElement?e.getAttribute("href"):e.textContent;t.push(o||"")}else t.push(o.textContent||"")}o.push(t)}return[o,t]}(e);if(0==o.length)return{cartItems:[],rejectedRows:[]};console.log("table data"),console.table(o);const i=function(e){var t;let o=e.filter((e=>e.filter((e=>!isNaN(parseFloat(e.trim())))).length>0));const n=Math.round(o.map((e=>e.filter((e=>!!e.trim())).length)).reduce(((e,t)=>e+t),0)/o.length);o=o.filter((e=>e.filter((e=>!!e.trim())).length==n)),console.log("Detecting quantities column. This is the filtered data"),console.table(o);for(let e=0;e<(null===(t=o[0])||void 0===t?void 0:t.length);e++){const t=o.map((t=>t[e])),n=t.map((e=>parseFloat(e.trim())));if(void 0!==n.find(isNaN)){console.log(`column ${e} is not all numbers`);continue}if(n.every(((e,t)=>0===t||e>=n[t-1]))){console.log(`column ${e} looks like a row numbers`);continue}const r=n.reduce(((e,t)=>e+t),0)/t.length,i=n.filter((e=>Math.round(e)==e)).length/t.length;if(r<15&&i>.5)return console.log(`column ${e} seems to have a quantities`),e;console.log(`column ${e} ignored. Average value: ${r}, rate of rounded values: ${i})`)}}(o);if(void 0===i)return console.log("can't find quantities column"),{cartItems:[],rejectedRows:[]};const a=[],c=[];for(let e=0;e<o.length;e++){const n=o[e];if(0==n.filter((e=>!isNaN(parseFloat(e.trim())))).length){console.log("filter out possible header of footer row: ",n);continue}let u=!1,s=parseInt(n[i]);s||(console.log(`can't parse quantity from column ${i}. Using default value. Row: `,n),s=1,u=!0);const l=n.find((e=>-1!=e.indexOf("utkonos.ru")));if(!l){console.log("can't find link for this row",n),c.push(r[e]);continue}const d=parseInt((null===(t=l.match(/utkonos\.ru\/item\/(\d+)/))||void 0===t?void 0:t[1])||"");d?a.push({id:d,quantity:s,tableRow:r[e],warning:u}):(console.log(`can't find ID for this link: ${l}, row: `,n),c.push(r[e]))}return{cartItems:a,rejectedRows:c}}},3187:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractFromUnstructuredText=void 0;const n=o(9385);t.extractFromUnstructuredText=function(e){const t=[],o=(0,n.doXpath)(".//a",e);for(const e of o)if(e instanceof HTMLElement){const o=e.getAttribute("href");o&&t.push(o)}const r=t.join("\n")+e.textContent,i=[],a=new Set;for(const e of r.matchAll(/https:\/\/www\.utkonos\.ru\/item\/(\d+)/g)){const t=e[1];a.has(t)||(a.add(t),i.push({id:parseInt(t),quantity:1}))}return i}},1225:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractData=void 0;const n=o(923),r=o(3187);t.extractData=function(e){if(1==document.evaluate("count(.//table)",e,null,XPathResult.NUMBER_TYPE).numberValue){const{cartItems:t,rejectedRows:o}=(0,n.extractFromTable)(e);if(t.length>0)return{withCounts:!0,cartItems:t,rejectedRows:o}}return{cartItems:(0,r.extractFromUnstructuredText)(e),rejectedRows:[],withCounts:!1}}},9620:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uuidv4=void 0,t.uuidv4=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},9385:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.doXpath=void 0,t.doXpath=function(e,t,o=XPathResult.ORDERED_NODE_ITERATOR_TYPE){const n=[],r=document.evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE);let i=r.iterateNext();for(;i;)i instanceof HTMLElement&&n.push(i),i=r.iterateNext();return n}},1479:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},a=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.utkonosLegacyAPI=void 0;const c=i(o(351)),u=o(9620),s=o(4382);t.utkonosLegacyAPI=new class{saveCart(e){return a(this,void 0,void 0,(function*(){const t=[],o=[];for(const n of e)t.push(n.id.toString()),o.push(n.quantity);const n={GoodsItemId:t,Count:o,UseDelta:0,Return:{Cart:"0",CartItemList:"0",TotalCost:"0"}};return this.makeRequest("cartItemMultiAdd",n)}))}goodsItemSearchByid(e){return a(this,void 0,void 0,(function*(){const t={Id:e.toString(),Return:{BrandInfo:1}};return this.makeRequest("goodsItemSearchByid",t)}))}makeRequest(e,t){return a(this,void 0,void 0,(function*(){const o=JSON.parse(localStorage.getItem("device_data")||"{}"),n=yield c.get("Utk_SessionToken"),r={Head:{DeviceId:o.device_id,Domain:"www.utkonos.ru",RequestId:(0,u.uuidv4)().replaceAll(/-/g,""),MarketingPartnerKey:"mp-cc3c743ffd17487a9021d11129548218",Version:"utkonos-ext",Client:"utkonos-ext",Method:e,Store:"utk",SessionToken:n},Body:t};console.log("[legacy API] sending request to method",e,r);const i=new FormData;i.append("request",JSON.stringify(r));const a=yield fetch(`https://www.utkonos.ru/api/rest/${e}`,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,ru;q=0.8","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"},referrer:"https://www.utkonos.ru/",referrerPolicy:"no-referrer-when-downgrade",body:i,method:"POST",mode:"cors",credentials:"include"});if(console.log(a),!a.ok)throw new s.UtkonosAPIException(a.statusText);return a}))}}},3643:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},a=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.utkonosNewAPI=void 0;const c=i(o(351)),u=o(9620),s=o(4382);t.utkonosNewAPI=new class{modifyCartItem(e){var t,o,n;return a(this,void 0,void 0,(function*(){const r=yield this.makeRequest("cartItemModify",{GoodsItemId:e.id,Quantity:e.quantity,Return:{Cart:0,Goods:0}}),i=null===(n=null===(o=null===(t=r.Body.CartList[0])||void 0===t?void 0:t.CartNotices)||void 0===o?void 0:o.CartNoticeList[0])||void 0===n?void 0:n.Description;if(i)throw new s.UtkonosAPIException(i);return r}))}makeRequest(e,t){return a(this,void 0,void 0,(function*(){const o=yield c.get("Utk_SessionToken"),n={Head:{DeviceId:yield c.get("Utk_DvcGuid"),SessionToken:o,RequestId:(0,u.uuidv4)().replaceAll(/-/g,""),MarketingPartnerKey:"mp80-661295c9cbf9d6b2f6428414504a8deed3020641",Version:"utkonos-ext",Client:"utkonos-ext",Method:e,Domain:"moscow",Store:"utk"},Body:t};console.log("[new API] sending request to method",e,n);const r=`request=${JSON.stringify(n)}`,i=yield fetch(`https://www.utkonos.ru/api/rest/${e}`,{headers:{Accept:"application/json, text/plain, */*","Accept-Language":"en-US,en;q=0.9,ru;q=0.8","Content-Type":"application/x-www-form-urlencoded","sec-ch-ua":'"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-retail-brand":"utk"},referrer:"https://www.utkonos.ru/",referrerPolicy:"no-referrer-when-downgrade",body:r,method:"POST",mode:"cors",credentials:"include"});if(!i.ok)throw new s.UtkonosAPIException(i.statusText);const a=yield i.json();if(console.log("response: ",a),a.Body.ErrorList)throw new s.UtkonosAPIException(a.Body.ErrorList[0].Message);return a}))}}},4382:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UtkonosAPIException=void 0;class o extends Error{constructor(e){super(e),this.name="UtkonosAPIException"}}t.UtkonosAPIException=o}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(l=0;l<e.length;l++){for(var[o,r,i]=e[l],c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[u])))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={575:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,c,u]=o,s=0;if(a.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self.webpackChunkutkonos_ext=self.webpackChunkutkonos_ext||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var r=n.O(void 0,[736],(()=>n(5311)));r=n.O(r)})();