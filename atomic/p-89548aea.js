import{h as e}from"./p-00525453.js";import{F as s}from"./p-fadb0f7c.js";import{F as t}from"./p-19c3a01a.js";import{F as a}from"./p-892039c7.js";import{g as c}from"./p-55d2bcf3.js";import{F as l}from"./p-b58f0ba6.js";const o=({manualRanges:e,field:s,i18n:t,facetValue:a,logger:l,formatter:o})=>{var i;const u=(i=e.find((e=>n(e,a))))===null||i===void 0?void 0:i.label;return u?c(s,u,t):t.t("to",{start:r(a.start,t,l,o),end:r(a.end,t,l,o)})};const r=(e,s,t,a)=>{try{return a(e,s.languages)}catch(s){t.error(`atomic-numeric-facet facet value "${e}" could not be formatted correctly.`,s);return e}};const n=(e,s)=>e.start===s.start&&e.end===s.end&&e.endInclusive===s.endInclusive;const i=c=>{const{facetValue:l,displayValuesAs:r,i18n:n,onClick:i}=c;const u=o(c);const f=l.state==="selected";switch(r){case"checkbox":return e(s,{displayValue:u,numberOfResults:l.numberOfResults,isSelected:f,i18n:n,onClick:()=>i()},e(t,{displayValue:u,isSelected:f}));case"link":return e(a,{displayValue:u,numberOfResults:l.numberOfResults,isSelected:f,i18n:n,onClick:i},e(t,{displayValue:u,isSelected:f}))}};const u=({i18n:s,label:t},a)=>e(l,{i18n:s,label:t},e("ul",{class:"mt-3",part:"values"},a));export{i as N,u as a,o as f};
//# sourceMappingURL=p-89548aea.js.map