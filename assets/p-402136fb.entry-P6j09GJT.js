import{N as m,g as n,O as p}from"./preview-Cp9OdNlu.js";import{n as d,a as b}from"./p-7e7b1a62-C6-3oFSh.js";import{W as h}from"./p-abea0bd2-55DIQVI1.js";import{n as f}from"./p-7a01eaa3-CZOSf1yh.js";import{n as g}from"./p-53b93b76-BNupEshp.js";import{m as v}from"./p-107c3d7f-lK1Nx8Nb.js";import{u as x}from"./p-f5723aee-KeNxIJx_.js";import{n as y}from"./p-e113294c-C6xyh05W.js";import{n as P}from"./p-0c7c191e-D3Ka5q1a.js";import{e as w}from"./p-849728b4-DXyKjzoT.js";import"./iframe-vvwA9ouH.js";import"../sb-preview/runtime.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-659d3ea8-bIeC0PRq.js";import"./p-529fdce5-C1bBLtu6.js";const O="atomic-result-printable-uri{max-width:100%;word-break:break-word}atomic-result-printable-uri a,atomic-result-printable-uri button{color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri.js-focus-visible a.focus-visible,.js-focus-visible atomic-result-printable-uri a.focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri.js-focus-visible button.focus-visible,.js-focus-visible atomic-result-printable-uri button.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a:focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:focus,atomic-result-printable-uri button:focus{outline:none}atomic-result-printable-uri a:visited,atomic-result-printable-uri button:visited{color:var(--atomic-visited)}atomic-result-printable-uri ul{display:flex;flex-wrap:wrap}atomic-result-printable-uri li{display:inline-flex;align-items:center;max-width:100%}atomic-result-printable-uri li a{display:inline-block;vertical-align:middle;max-width:100%;text-overflow:ellipsis;overflow:hidden}atomic-result-printable-uri li{white-space:nowrap}atomic-result-printable-uri li:last-child{white-space:normal}atomic-result-printable-uri li:last-child::after{content:none}atomic-result-printable-uri li .result-printable-uri-separator{display:inline-block;margin:0 0.5rem;vertical-align:middle;width:0.75rem;height:0.75rem;color:var(--atomic-neutral-dark)}",k=O;var c=function(t,e,i,a){var s=arguments.length,r=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(r=(s<3?l(r):s>3?l(e,i,r):l(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};const u=class{constructor(t){m(this,t),this.listExpanded=!1,this.maxNumberOfParts=5,this.listExpanded=!1,this.error=void 0,this.maxNumberOfParts=5}get focusTarget(){return this.expandedPartFocus||(this.expandedPartFocus=new g(this)),this.expandedPartFocus}connectedCallback(){try{new d({maxNumberOfParts:new b({min:3})}).validate({maxNumberOfParts:this.maxNumberOfParts})}catch(e){this.error=e}const t="attributes";this.linkAttributes=y(this.host,t)}initialize(){this.interactiveResult=h(this.bindings.engine,{options:{result:this.result}})}getIndexOfEllipsis(t){const e=Math.max(2,t-this.maxNumberOfParts);return t-e-1}renderEllipsis(){return n("li",null,n("button",{"aria-label":this.bindings.i18n.t("collapsed-uri-parts"),onClick:t=>{t.stopPropagation(),this.focusTarget.focusOnNextTarget(),this.listExpanded=!0}},"..."),this.renderSeparator())}get allParents(){const t=x(`${this.result.raw.parents}`),e=Array.from(t.getElementsByTagName("parent")),i=this.getIndexOfEllipsis(e.length);return e.map((a,s)=>{const r=a.getAttribute("name"),l=a.getAttribute("uri");return n("li",null,this.renderLink(r,l,s===i),s===e.length-1?null:this.renderSeparator())})}renderSeparator(){return n("atomic-icon",{class:"result-printable-uri-separator",icon:f,role:"separator"})}renderParents(){const t=this.allParents;return this.listExpanded||t.length<=this.maxNumberOfParts?t:[t.slice(0,this.getIndexOfEllipsis(t.length)),this.renderEllipsis(),t.slice(-1)]}renderLink(t,e,i){return n(P,{href:e,title:typeof t=="string"?t:void 0,onSelect:()=>this.interactiveResult.select(),onBeginDelayedSelect:()=>this.interactiveResult.beginDelayedSelect(),onCancelPendingSelect:()=>this.interactiveResult.cancelPendingSelect(),attributes:this.linkAttributes,ref:i?a=>this.focusTarget.setTarget(a):void 0},t)}render(){const t=this.renderParents();return t.length?n("ul",{"aria-label":this.bindings.i18n.t("printable-uri")},t):this.renderLink(n("atomic-result-text",{field:"printableUri"}),this.result.clickUri,!1)}get host(){return p(this)}};c([v()],u.prototype,"bindings",void 0);c([w()],u.prototype,"result",void 0);u.style=k;export{u as atomic_result_printable_uri};
