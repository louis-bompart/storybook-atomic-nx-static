import{g as t,L as V}from"./preview-Cp9OdNlu.js";import{r as x}from"./p-55d2bcf3-DJQIxeeN.js";import{a as Q}from"./p-b3f42061-CrZR0-ja.js";import{c as R}from"./p-fadb0f7c-2u8ShBrx.js";import{u as f}from"./p-19c3a01a-B44tRM56.js";import{a as b}from"./p-892039c7-CLM20kLz.js";const k=9,A=({withSearch:e,canShowMoreValues:n,numberOfDisplayedValues:i},c)=>{if(e&&!(!n&&i<k))return t(V,null,c)},C=({facetSearchQuery:e,displayValuesAs:n,enableExclusion:i,facetCount:c,facetState:o,facetValue:m,field:h,i18n:u,onExclude:y,onSelect:d,setRef:a})=>{const r=x(h,m,u),s=o==="selected",S=o==="excluded",p=i?{onExclude:y,state:o}:{};switch(n){case"checkbox":return t(R,{...p,displayValue:r,numberOfResults:c,isSelected:s,i18n:u,onClick:d,searchQuery:e,buttonRef:l=>{a&&a(l)}},t(f,{displayValue:r,isSelected:s,isExcluded:S,searchQuery:e}));case"link":return t(b,{displayValue:r,numberOfResults:c,isSelected:s,i18n:u,onClick:d,searchQuery:e,buttonRef:l=>{a&&a(l)}},t(f,{displayValue:r,isSelected:s,searchQuery:e}));case"box":return t(Q,{displayValue:r,numberOfResults:c,isSelected:s,i18n:u,onClick:d,searchQuery:e,buttonRef:l=>{a&&a(l)}},t(f,{displayValue:r,isSelected:s,searchQuery:e}))}},D=e=>t(C,{...e,facetState:"idle"});export{C as i,A as n,D as o};