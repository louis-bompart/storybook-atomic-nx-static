import{J as n}from"./p-e12016d2-bJLTunAq.js";import{g as r}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{r as a}from"./p-8f5830b4-EwJYRc8T.js";const s=(e,t)=>({part:"recent-query-item",query:e,key:`recent-${a(e)}`,ariaLabel:t.t("recent-query-suggestion-label",{query:e,interpolation:{escapeValue:!1}})}),o=e=>({key:"recent-query-clear",ariaLabel:e.t("clear-recent-searches",{interpolation:{escapeValue:!1}}),part:"recent-query-title-item suggestion-divider",hideIfLast:!0}),p=(e,t)=>r("div",{part:"recent-query-content",class:"flex items-center break-all text-left"},t),u=({icon:e})=>r("atomic-icon",{part:"recent-query-icon",icon:e,class:"w-4 h-4 mr-2 shrink-0"}),g=({query:e,value:t})=>e===""?r("span",{part:"recent-query-text",class:"break-all line-clamp-2"},t):r("span",{part:"recent-query-text",class:"break-all line-clamp-2",innerHTML:n.highlightString({content:t,openingDelimiter:'<span part="recent-query-text-highlight" class="font-bold">',closingDelimiter:"</span>",highlights:[{offset:e.length,length:t.length-e.length}]})}),h=({i18n:e})=>r("div",{part:"recent-query-title-content",class:"flex justify-between w-full"},r("span",{class:"font-bold",part:"recent-query-title"},e.t("recent-searches")),r("span",{part:"recent-query-clear"},e.t("clear")));export{s as a,u as c,h as i,g as l,o as n,p as s};
