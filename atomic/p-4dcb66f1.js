import{l as t}from"./p-1580513b.js";const n="ripple";function o(t){return Math.cbrt(t)*129.21}function i(t){if(getComputedStyle(t).position==="static"){t.classList.add("ripple-relative")}}function a(t,a){var p;const e=(p=a.parent)!==null&&p!==void 0?p:t.currentTarget;const r=e.getElementsByClassName(n)[0];r&&r.remove();e.classList.add("ripple-parent");i(e);Array.from(e.children).forEach(i);const s=document.createElement("span");s.classList.add(n);s.style.backgroundColor=`var(--atomic-${a.color})`;s.setAttribute("part",n);const l=Math.max(e.clientWidth,e.clientHeight);const u=l/2;const m=o(u);const{top:d,left:f}=e.getBoundingClientRect();s.style.width=s.style.height=`${l}px`;s.style.left=`${t.clientX-(f+u)}px`;s.style.top=`${t.clientY-(d+u)}px`;s.style.setProperty("--animation-duration",`${m}ms`);e.prepend(s);c(s,m)}async function c(n,o){t(n,"animationend",(()=>{n&&n.remove()}));setTimeout((()=>n===null||n===void 0?void 0:n.remove()),o+o*.1)}export{a as c};
//# sourceMappingURL=p-4dcb66f1.js.map