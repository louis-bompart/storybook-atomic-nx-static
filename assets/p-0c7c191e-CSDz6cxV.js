import{g as E}from"./atomic-breadbox.new.stories-D03zBEda.js";import{t as L}from"./p-659d3ea8-bIeC0PRq.js";const x=(t,{onSelect:i,onBeginDelayedSelect:s,onCancelPendingSelect:l,stopPropagation:c=!0})=>{const n=(e,o)=>{c&&e.stopPropagation(),o()};["click","contextmenu","mousedown","mouseup"].forEach(e=>t.addEventListener(e,o=>n(o,i))),t.addEventListener("touchstart",e=>n(e,s),{passive:!0}),t.addEventListener("touchend",e=>n(e,l),{passive:!0})},C=({href:t,className:i,part:s,title:l,onSelect:c,onBeginDelayedSelect:n,onCancelPendingSelect:e,onMouseOver:o,onMouseLeave:d,onFocus:p,onBlur:g,ref:u,attributes:r,tabIndex:f,ariaHidden:v,rel:S,stopPropagation:h=!0,target:P="_self"},m)=>E("a",{class:i,part:s,href:L(t),target:P,title:l,rel:S,ref:a=>{u&&u(a),a&&(x(a,{onSelect:c,onBeginDelayedSelect:n,onCancelPendingSelect:e,stopPropagation:h}),r!=null&&r.length&&[...r].forEach(({nodeName:b,nodeValue:B})=>{a.setAttribute(b,B)}),v&&a.setAttribute("aria-hidden","true"))},tabIndex:f,onMouseOver:o,onMouseLeave:d,onFocus:p,onBlur:g},m);export{C as n,x as t};
