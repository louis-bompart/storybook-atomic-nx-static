import{a}from"./p-d7ad2547-DUwI-3Sg.js";function o(i){switch(i){case"grid":return"display-grid";case"list":default:return"display-list";case"table":return"display-table"}}function l(i){switch(i){case"comfortable":return"density-comfortable";case"normal":default:return"density-normal";case"compact":return"density-compact"}}function u(i){switch(i){case"large":return"image-large";case"small":return"image-small";case"icon":default:return"image-icon";case"none":return"image-none"}}function m(i,e,t,s,n){const r=c(i,e,t);return s&&r.push("loading"),n&&r.push("placeholder"),r.join(" ")}function c(i,e,t){return[o(i),l(e),u(t)]}class h{constructor(e,t,s,n){this.children=e,this.display=t,this.density=s,this.imageSize=n}getImageSizeFromSections(){var e;const t=(e=this.getSection("atomic-result-section-visual"))===null||e===void 0?void 0:e.getAttribute("image-size");if(t)return t}getSection(e){return Array.from(this.children).find(t=>t.tagName.toLowerCase()===e)}getClasses(e){var t;const s=c(this.display,this.density,(t=this.getImageSizeFromSections())!==null&&t!==void 0?t:this.imageSize);return(e?a(e):a(this.children))&&s.push("with-sections"),s}}export{h as a,c as n,m as r};
