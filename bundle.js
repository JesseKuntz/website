(()=>{"use strict";var e={98:()=>{class e extends HTMLElement{constructor(){super();const e=this.getAttribute("title"),t=this.getAttribute("emoji"),o=this.getAttribute("name"),n=this.innerHTML;this.innerHTML=`\n      <button class='card' id=${o}>\n        <div class='title-wrapper'>\n          <div class='emoji'>\n            <span class="iconify" data-icon="fluent-emoji:${t}"></span>\n          </div>\n          <h3 class='card-title'>\n            <div>${e}</div>\n          </h3>\n        </div>\n        <span class='close-button'>\n          <i class="gg-close"></i>\n          <div class='close-button-overlay'></div>\n        </span>\n        <div class='content'>\n          ${n}\n        </div>\n      </button>\n      <div class='overlay'></div>\n    `,this.className="no-after"}}window.customElements.define("project-card",e)},474:(e,t,o)=>{o.r(t)},920:(e,t,o)=>{e.exports=o.p+"meow0.mp3"},818:(e,t,o)=>{e.exports=o.p+"meow1.mp3"},554:(e,t,o)=>{e.exports=o.p+"meow2.mp3"}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",(()=>{o(98),o(474);const e=[o(920),o(818),o(554)],t=[...document.getElementsByClassName("card")],n=document.querySelector(".cat"),s=document.documentElement,c=getComputedStyle(s),l=c.getPropertyValue("--card-height"),a=document.createElement("div");a.classList.add("placeholder"),new window.LazyLoad,t.forEach((e=>{!function(e){const t=document.createElement("div");t.classList.add("fade"),e.appendChild(t)}(e);const o=e.querySelector(".fade"),n=e.nextElementSibling,s=()=>{!function(e,o){t.filter((t=>t!==e&&(o||t.classList.value.includes("active")))).forEach((e=>{e.classList.remove("active"),e.style.height=l,e.lastElementChild.style.display="block"}))}(e,o),e.classList.toggle("active"),e.parentElement.classList.toggle("modal"),document.body.classList.toggle("modal-open");const n=new URL(document.location).searchParams;e.classList.value.includes("active")?(e.style.height="fit-content",o.style.display="none",n.set("project",e.id),document.querySelector(".projects").insertBefore(a,e.parentNode)):(e.style.height=l,o.style.display="block",n.delete("project"),a.remove()),function(e){window.history.replaceState({},"",`${window.location.pathname}?${e}`)}(n)};n.addEventListener("click",(()=>{s()})),e.addEventListener("click",(t=>{e.classList.value.includes("active")&&"close-button-overlay"!==t.target.classList.value||s()}))})),function(){const e=new URL(document.location).searchParams.get("project"),t=document.querySelector(`#${e}`);if(t){t.click();const{left:e,top:o}=t.getBoundingClientRect();document.querySelector(".projects").scrollTo(e,0),window.scrollTo(0,o)}}(),function(e){const t=window.innerWidth;if(t<=600){const e=.87*t;s.style.setProperty("--card-width",`${e}px`)}}(),n.addEventListener("click",(()=>{!function(){const t=Math.floor(Math.random()*Math.floor(3));new Audio(e[t]).play()}();const t=c.getPropertyValue("--dark-color"),o=c.getPropertyValue("--light-color"),n=c.getPropertyValue("--dark-mode-cat"),l=c.getPropertyValue("--light-mode-cat");s.style.setProperty("--dark-color",o),s.style.setProperty("--light-color",t),s.style.setProperty("--dark-mode-cat",l),s.style.setProperty("--light-mode-cat",n)})),async function(){const e=(new Date).toISOString().slice(0,10),t=await fetch(`https://api.npmjs.org/downloads/point/2021-01-01:${e}/emoji-sprinkle`),{downloads:o}=await t.json();document.querySelector(".download-count").innerHTML=o}()})()})();