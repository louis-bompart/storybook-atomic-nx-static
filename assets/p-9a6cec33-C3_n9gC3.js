import{g as s,L as h}from"./preview-Cp9OdNlu.js";const f=({additionalClasses:t},r)=>s("div",{class:`text-on-background${t?` ${t}`:""}`,part:"container"},r),p=({hasResults:t,hasError:r,firstSearchExecuted:a},l)=>{if(!(r||!t&&a))return a?s(h,null,l):s("div",{part:"placeholder","aria-hidden":"true",class:"h-6 my-2 w-60 bg-neutral rounded animate-pulse"})},n=(t,r)=>s("span",{class:"font-bold",part:`highlight${t.part?` ${t.part}`:""}`},r),y=({first:t,last:r,query:a,total:l,isLoading:u,i18n:o})=>{const i=a!==""?"showing-results-of-with-query":"showing-results-of",e={first:t.toLocaleString(),last:r.toLocaleString(),total:l.toLocaleString(),query:a,count:r},c={first:s(n,null,e.first),last:s(n,null,e.last),total:s(n,null,e.total),query:s(n,{part:"query"},e.query)},g=u?o.t("loading-results"):o.t(i,e);return{i18nKey:i,highlights:c,ariaLiveMessage:g}};export{p as a,y as e,f as r};
