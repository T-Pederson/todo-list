(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),c=n(645),i=n.n(c),a=n(667),d=n.n(a),l=new URL(n(937),n.b),s=i()(o()),p=d()(l);s.push([e.id,"@font-face {\n  font-family: 'Roboto';\n  src: url("+p+");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: 400;\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  color: #555;\n}\n\nbody {\n  display: grid;\n  grid-template: 40px auto / 225px auto;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  background-color: #38bdf8;\n  grid-column: 1 / 3;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-left: 4px;\n}\n\n.logo {\n  height: 36px;\n}\n\nh1 {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: white;\n}\n\n.navbar {\n  background-color: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 12px 16px;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.navbar * {\n  width: fit-content;\n}\n\n.home,\n.week,\n.month,\n.project,\n.add,\n.edit,\n.delete,\n.checkbox {\n  cursor: pointer;\n}\n\n.home:hover,\n.week:hover,\n.month:hover,\n.project:hover {\n  color: black;\n  scale: 105%;\n  padding-left: 4px;\n}\n\n.add,\n.edit,\n.delete,\n.checkbox {\n  height: 24px;\n  width: 24px;\n}\n\n.add:hover,\n.edit:hover,\n.delete:hover,\n.checkbox:hover,\n.newProject:hover {\n  color: black;\n  filter: brightness(0%);\n}\n\n.projects {\n  padding-top: 12px;\n}\n\n.projectsContainer {\n  display: flex;\n  flex-direction: column;\n  padding-left: 12px;\n  gap: 8px;\n}\n\n.project {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.content {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: scroll;\n}\n\n.newProject {\n  display: flex;\n  font-size: .8em;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n}\n\n.todo {\n  padding: 8px;\n  border-radius: 8px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  min-width: 225px;\n}\n\n.low {\n  background-color: rgba(0, 255, 0, 0.6);\n}\n\n.medium {\n  background-color: rgba(255, 255, 0, 0.75);\n}\n\n.high {\n  background-color: rgba(255, 0, 0, 0.25);\n}\n\n.dueContainer,\n.priorityContainer {\n  display: grid;\n  grid-template-columns: auto auto 1fr auto auto;\n  gap: 6px;\n}\n\n.checkbox {\n  justify-self: end;\n}\n\n.complete {\n  filter: opacity(.5);\n}\n\n.selected {\n  color: black;\n  scale: 105%;\n  padding-left: 4px;\n}",""]);const u=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],s=c[l]||0,p="".concat(l," ").concat(s);c[l]=s+1;var u=n(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=r(e,o),l=0;l<c.length;l++){var s=n(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},937:(e,t,n)=>{e.exports=n.p+"fc2b5060f7accec5cf74.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),i=n.n(c),a=n(565),d=n.n(a),l=n(216),s=n.n(l),p=n(589),u=n.n(p),f=n(28),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n.p+"665a1069ef016cf5476b.svg",g=n.p+"127634af5f0f4edd1c28.svg",v=(e,t,n)=>({title:e,dueDate:t,priority:n}),b=n.p+"7cf8a52afe4672f643db.svg",x=n.p+"6b02d340fc798272486c.svg",y=n.p+"aa6c221efb4216e2e15d.svg",w=n.p+"32652fe3cf469a776f07.svg";function C(e){let t=e.target.parentNode.parentNode.classList;if(Array.from(t).includes("complete")){t.remove("complete");const n=document.createElement("img");n.setAttribute("src",b),n.setAttribute("alt","checkbox unchecked"),n.classList.add("checkbox"),e.target.after(n),n.addEventListener("click",C),e.target.remove()}else{t.add("complete");const n=document.createElement("img");n.setAttribute("src",w),n.setAttribute("alt","checkbox checked"),n.classList.add("checkbox"),e.target.after(n),n.addEventListener("click",C),e.target.remove()}}const k=document.querySelector(".content");function E(e){let t=document.createElement("div");t.classList.add("todo"),t.classList.add(e.priority.toLowerCase()),k.appendChild(t);let n=document.createElement("p");n.classList.add("title"),n.innerText=e.title,t.appendChild(n);let r=document.createElement("div");r.classList.add("dueContainer"),t.appendChild(r);let o=document.createElement("p");o.innerText="Due: ",r.appendChild(o);let c=document.createElement("p");c.innerText=e.dueDate,r.appendChild(c);let i=document.createElement("div");i.classList.add("priorityContainer"),t.appendChild(i);let a=document.createElement("p");a.innerText="Priority: ",i.appendChild(a);let d=document.createElement("p");d.innerText=e.priority,i.appendChild(d);let l=document.createElement("img");l.setAttribute("src",b),l.setAttribute("alt","checkbox unchecked"),l.classList.add("checkbox"),i.appendChild(l),l.addEventListener("click",C);let s=document.createElement("img");s.setAttribute("src",x),s.setAttribute("alt","edit"),s.classList.add("edit"),i.appendChild(s);let p=document.createElement("img");p.setAttribute("src",y),p.setAttribute("alt","delete"),p.classList.add("delete"),i.appendChild(p)}function L(e){!function(){const e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild)}();for(let t of e)for(let e of t.todoList)E(e);document.querySelector(".home").classList.add("selected")}let A=[],T=("Example",{title:"Example",todoList:[v("Take out the garbage","11/01/22","Low"),v("Grocery shopping","11/02/22","Medium"),v("Take a shower","11/01/22","High")]});A.push(T),function(e){const t=document.querySelector(".projectsContainer");for(let n of e){let e=document.createElement("p");e.classList.add("project"),e.id=n.title,e.innerText=n.title,t.appendChild(e)}}(A),function(){const e=document.createElement("img");e.setAttribute("src",h),e.setAttribute("alt","checklist icon"),e.classList.add("logo"),document.querySelector(".header").insertBefore(e,document.querySelector("h1"));let t=document.createElement("img");t.setAttribute("src",g),t.setAttribute("alt","Add"),t.classList.add("add"),document.querySelector(".projectsContainer").appendChild(t)}(),L(A),document.querySelector(".home").addEventListener("click",(()=>L(A)))})()})();