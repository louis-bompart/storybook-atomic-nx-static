import{g as r,L as i}from"./atomic-breadbox.new.stories-D03zBEda.js";import{e as c}from"./p-c58ca89b-7qP8Vsig.js";const g=({i18n:t,onClick:e,moreAvailable:o})=>{if(o)return r(c,{style:"primary",text:t.t("load-more-results"),part:"load-more-results-button",class:"font-bold my-2 p-3",onClick:()=>e()})},p=(t,e)=>r("div",{class:"flex flex-col items-center",part:"container"},e),f=({isLoaded:t,hasResults:e},o)=>{if(!(!t||!e))return r(i,null,o)},m=({from:t,to:e})=>{const o=t/e*100,s=`${Math.ceil(o)}%`;return r("div",{part:"progress-bar",class:"relative w-72 h-1 my-2 rounded bg-neutral"},r("div",{class:"progress-bar absolute h-full left-0 top-0 z-1 overflow-hidden rounded bg-gradient-to-r",style:{width:s}}))},h=({i18n:t,from:e,to:o})=>{const s=l=>`<span class="font-bold text-on-background" part="highlight">${l}</span>`,n=t.language,a=t.t("showing-results-of-load-more",{interpolation:{escapeValue:!1},last:s(e.toLocaleString(n)),total:s(o.toLocaleString(n))});return r("div",{class:"my-2 text-lg text-neutral-dark",part:"showing-results",innerHTML:a})};export{f as a,p as e,h as l,m as n,g as o};
