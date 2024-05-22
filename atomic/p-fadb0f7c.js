import{h as e}from"./p-00525453.js";import{c as r}from"./p-4dcb66f1.js";import{r as o}from"./p-f5723aee.js";import{T as t,C as l}from"./p-32a5af39.js";import{C as a}from"./p-fafae456.js";import{C as n}from"./p-a56bfec6.js";const i=r=>{var o,l;const n=r.state==="selected";const i=r.state==="excluded";const s=(o=r.part)!==null&&o!==void 0?o:"checkbox";const c=["w-4 h-4 grid place-items-center rounded no-outline hover:border-primary-light focus-visible:border-primary-light"];const u=[s];if(n){c.push("selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light");u.push(`${s}-checked`)}else if(i){c.push("excluded bg-error hover:bg-error focus-visible:bg-error hover:border-error focus-visible:border-error");u.push(`${s}-checked`)}else{c.push("border border-neutral-dark")}if(r.class){c.push(r.class)}const d={key:r.key,id:r.id,class:c.join(" "),part:u.join(" "),"aria-pressed":n?"true":i?"mixed":"false","aria-label":(l=r.ariaLabel)!==null&&l!==void 0?l:r.text,value:r.text,ref:r.ref};return e("button",{...d,role:"button",onClick:()=>{var e;return(e=r.onToggle)===null||e===void 0?void 0:e.call(r,!n)},onMouseDown:e=>{var o;return(o=r.onMouseDown)===null||o===void 0?void 0:o.call(r,e)}},e("atomic-icon",{style:{stroke:"white",fill:"white"},class:`w-3/5 ${n||i?"block":"hidden"}`,icon:n?t:a,part:r.iconPart}))};const s=r=>{var o;const t=["value-exclude-button","peer","order-last","flex","ml-auto"];if(r.class){t.push(r.class)}const l={class:t.join(" "),part:"value-exclude-button",ref:r.ref,key:r.key,"aria-label":(o=r.ariaLabel)!==null&&o!==void 0?o:r.text,value:r.text};return e("button",{...l,onClick:()=>{var e;return(e=r.onClick)===null||e===void 0?void 0:e.call(r)},onMouseEnter:e=>{var o;return(o=r.onMouseEnter)===null||o===void 0?void 0:o.call(r,e)}},e("atomic-icon",{class:"w-4 p-1 rounded bg-neutral order-last hover:bg-error hover:fill-white invisible group-hover:visible",icon:n}))};const c=(t,a)=>{const n=o("facet-value-");const c=t.numberOfResults.toLocaleString(t.i18n.language);const u={value:t.displayValue,count:t.numberOfResults,interpolation:{escapeValue:false}};const d=t.i18n.t("facet-value",u);const v=t.i18n.t("facet-value-exclude",u);let b;const f=e=>"state"in e&&"isSelected"in e;const p=()=>{const o={id:n,onToggle:()=>t.onClick(),part:"value-checkbox",class:"value-checkbox",ariaLabel:d,ref:t.buttonRef,onMouseDown:e=>r(e,{color:"neutral",parent:b}),iconPart:"value-checkbox-icon"};if(f(t)){return e(i,{...o,state:t.state})}return e(l,{...o,checked:t.isSelected})};const h=()=>{if(f(t)){return e(s,{onClick:()=>{var e;return(e=t.onExclude)===null||e===void 0?void 0:e.call(t)},ariaLabel:v})}};return e("li",{key:t.displayValue,class:"relative flex items-center"},p(),e("label",{ref:e=>b=e,htmlFor:n,part:"value-checkbox-label",class:"group items-center",onMouseDown:e=>r(e,{color:"neutral"}),"aria-hidden":"true"},a,h(),e("span",{part:"value-count",class:"value-count"},t.i18n.t("between-parentheses",{text:c}))))};export{c as F};
//# sourceMappingURL=p-fadb0f7c.js.map