import{b as a}from"./p-f5723aee-KeNxIJx_.js";const c="1024px";function l(o,t){return o.replace(new RegExp(`\\(min-width: ${c}\\)`,"g"),`(min-width: ${t})`)}function d(o,t){var n,e;const i=(n=o.shadowRoot)===null||n===void 0?void 0:n.adoptedStyleSheets;if(!i||!i.length)return;const r=i[0],u=Object.values(r.cssRules).map(s=>s.cssText).join("");(e=r.replaceSync)===null||e===void 0||e.call(r,l(u,t))}function p(o,t){var n;const e=(n=o.shadowRoot)===null||n===void 0?void 0:n.querySelector("style");e&&(e.textContent=l(e.textContent,t))}const m=["atomic-search-layout","atomic-insight-layout"];function f(o){const t=a(o,m.join(", "));t!=null&&t.mobileBreakpoint&&t.mobileBreakpoint!==c&&(d(o,t.mobileBreakpoint),p(o,t.mobileBreakpoint))}export{c as t,f as u};
