import{c as t}from"./p-d7ad2547.js";function e(t){switch(t){case"grid":return"display-grid";case"list":default:return"display-list";case"table":return"display-table"}}function s(t){switch(t){case"comfortable":return"density-comfortable";case"normal":default:return"density-normal";case"compact":return"density-compact"}}function i(t){switch(t){case"large":return"image-large";case"small":return"image-small";case"icon":default:return"image-icon";case"none":return"image-none"}}function r(t,e,s,i,r){const a=n(t,e,s);if(i){a.push("loading")}if(r){a.push("placeholder")}return a.join(" ")}function n(t,r,n){const a=[e(t),s(r),i(n)];return a}class a{constructor(t,e,s,i){this.children=t;this.display=e;this.density=s;this.imageSize=i}getImageSizeFromSections(){var t;const e=(t=this.getSection("atomic-result-section-visual"))===null||t===void 0?void 0:t.getAttribute("image-size");if(!e){return undefined}return e}getSection(t){return Array.from(this.children).find((e=>e.tagName.toLowerCase()===t))}getClasses(e){var s;const i=n(this.display,this.density,(s=this.getImageSizeFromSections())!==null&&s!==void 0?s:this.imageSize);if(e?t(e):t(this.children)){i.push("with-sections")}return i}}export{a as I,n as a,r as g};
//# sourceMappingURL=p-1a4bcc0e.js.map