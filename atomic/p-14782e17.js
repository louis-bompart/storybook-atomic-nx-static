import{h as t}from"./p-00525453.js";import{A as e}from"./p-b700cfe1.js";import{A as a}from"./p-35fb03be.js";import{C as r}from"./p-fafae456.js";import{B as s}from"./p-c58ca89b.js";import{H as l}from"./p-16bd4264.js";import{g as o}from"./p-f5723aee.js";const n=(e,a)=>t("div",{class:"bg-background border border-neutral rounded-lg p-4",part:"facet"},a);const c=o=>{const n=o.i18n.t(o.label);const c=o.i18n.t("expand-facet",{label:n});const i=o.i18n.t("collapse-facet",{label:n});const p=o.i18n.t("clear-filters",{count:o.numberOfActiveValues});const b=o.i18n.t("clear-filters-for-facet",{count:o.numberOfActiveValues,label:n});return[t(s,{style:"text-transparent",part:"label-button",class:"flex font-bold justify-between w-full py-1 px-2 text-lg rounded-none",title:o.isCollapsed?c:i,onClick:()=>o.onToggleCollapse(),ariaExpanded:(!o.isCollapsed).toString(),ref:o.headerRef},t(l,{level:o.headingLevel,class:"truncate"},n),t("atomic-icon",{part:"label-button-icon",class:"w-3 self-center shrink-0 ml-4",icon:o.isCollapsed?e:a})),o.onClearFilters&&o.numberOfActiveValues>0&&t(s,{style:"text-primary",part:"clear-button",class:"flex items-baseline max-w-full p-2 text-sm",ariaLabel:b,onClick:()=>o.onClearFilters()},t("atomic-icon",{part:"clear-button-icon",class:"w-2 h-2 mr-1",icon:r}),t("span",null,p))]};const i=({numberOfValues:e,isCollapsed:a})=>{const r=[];for(let a=0;a<e;a++){const e=`${o(60,100)}%`;const a=`${o(.3,1)}`;r.push(t("div",{class:"flex bg-neutral h-5 mt-4",style:{width:e,opacity:a}}))}return t("div",{part:"placeholder",class:"bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7","aria-hidden":"true"},t("div",{class:"bg-neutral rounded h-8",style:{width:`${o(25,75)}%`}}),!a&&t("div",{class:"mt-7"},r))};export{c as F,n as a,i as b};
//# sourceMappingURL=p-14782e17.js.map