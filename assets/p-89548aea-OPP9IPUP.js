import{g as i}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{c as m}from"./p-fadb0f7c-BR3C62A2.js";import{u as c}from"./p-19c3a01a-C39dmYKb.js";import{a as f}from"./p-892039c7-BjCnpQlJ.js";import{r as p}from"./p-55d2bcf3-DJQIxeeN.js";import{s as b}from"./p-b58f0ba6-DqJvrJ0Y.js";const g=({manualRanges:e,field:t,i18n:r,facetValue:s,logger:n,formatter:a})=>{var l;const o=(l=e.find(d=>v(d,s)))===null||l===void 0?void 0:l.label;return o?p(t,o,r):r.t("to",{start:u(s.start,r,n,a),end:u(s.end,r,n,a)})},u=(e,t,r,s)=>{try{return s(e,t.languages)}catch(n){return r.error(`atomic-numeric-facet facet value "${e}" could not be formatted correctly.`,n),e}},v=(e,t)=>e.start===t.start&&e.end===t.end&&e.endInclusive===t.endInclusive,h=e=>{const{facetValue:t,displayValuesAs:r,i18n:s,onClick:n}=e,a=g(e),l=t.state==="selected";switch(r){case"checkbox":return i(m,{displayValue:a,numberOfResults:t.numberOfResults,isSelected:l,i18n:s,onClick:()=>n()},i(c,{displayValue:a,isSelected:l}));case"link":return i(f,{displayValue:a,numberOfResults:t.numberOfResults,isSelected:l,i18n:s,onClick:n},i(c,{displayValue:a,isSelected:l}))}},C=({i18n:e,label:t},r)=>i(b,{i18n:e,label:t},i("ul",{class:"mt-3",part:"values"},r));export{h as i,g as o,C as u};
