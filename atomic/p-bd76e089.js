import{c as n}from"./p-f5723aee.js";const t="1024px";function o(n,o){return n.replace(new RegExp(`\\(min-width: ${t}\\)`,"g"),`(min-width: ${o})`)}function i(n,t){var i,c;const r=(i=n.shadowRoot)===null||i===void 0?void 0:i.adoptedStyleSheets;if(!r||!r.length){return}const u=r[0];const s=Object.values(u.cssRules).map((n=>n.cssText)).join("");(c=u.replaceSync)===null||c===void 0?void 0:c.call(u,o(s,t))}function c(n,t){var i;const c=(i=n.shadowRoot)===null||i===void 0?void 0:i.querySelector("style");if(!c){return}c.textContent=o(c.textContent,t)}const r=["atomic-search-layout","atomic-insight-layout"];function u(o){const u=n(o,r.join(", "));if(!(u===null||u===void 0?void 0:u.mobileBreakpoint)){return}if(u.mobileBreakpoint===t){return}i(o,u.mobileBreakpoint);c(o,u.mobileBreakpoint)}export{t as D,u};
//# sourceMappingURL=p-bd76e089.js.map