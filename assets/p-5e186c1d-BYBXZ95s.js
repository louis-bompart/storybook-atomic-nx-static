import{g as t,L as p}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{n}from"./p-7a01eaa3-CZOSf1yh.js";import{e as o}from"./p-c58ca89b-CG9m7G5N.js";const y=(r,s)=>{const e="w-10 h-10 grid justify-center items-center absolute top-[50%] -translate-y-1/2 z-1 shadow-lg group",a="w-3.5 align-middle text-on-background group-hover:text-primary group-focus:text-primary-light";function c(){return t(o,{style:"outline-primary",ariaLabel:r.bindings.i18n.t("previous"),onClick:()=>r.previousPage(),part:"previous-button",class:`${e} -translate-x-1/2`},t("atomic-icon",{icon:n,class:`${a} rotate-180`}))}function l(){return t(o,{style:"outline-primary",ariaLabel:r.bindings.i18n.t("next"),onClick:()=>r.nextPage(),part:"next-button",class:`${e} right-0 translate-x-1/2`},t("atomic-icon",{icon:n,class:a}))}function u(){return t("ul",{part:"indicators",class:"flex gap-2 justify-center mt-6"},Array.from({length:r.numberOfPages},(m,g)=>{const i=g===r.currentPage%r.numberOfPages;return t("li",{part:`indicator ${i?"active-indicator":""}`,class:`rounded-md h-1 w-12 ${i?"bg-primary":"bg-neutral"} `})}))}return t(p,null,t("div",{class:"relative"},c(),s,l()),u())};export{y as n};
