import{g as r}from"./atomic-breadbox.new.stories-CUAu_TQj.js";const d=e=>{if(e.displayPlaceholders)switch(e.display){case"table":return r(i,{...e});default:return r(l,{...e})}},l=e=>Array.from({length:e.numberOfPlaceholders},(s,a)=>r("atomic-result-placeholder",{key:`placeholder-${a}`,density:e.density,display:e.display||"list",imageSize:e.imageSize})),i=e=>r("atomic-result-table-placeholder",{density:e.density,imageSize:e.imageSize,rows:e.numberOfPlaceholders});export{l as r,d as t};
