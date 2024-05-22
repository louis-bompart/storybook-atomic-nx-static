import{N as f,T as c,g as i}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{e as h}from"./p-c58ca89b-CG9m7G5N.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-0V_eukm8.js";import"../sb-preview/runtime.js";import"./p-4dcb66f1-BK_B2d2p.js";import"./p-1580513b-3LX64KEr.js";import"./p-b0ede3ce-D6gWHOV3.js";const y=`[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\r
    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}`,g=y,v=class{constructor(t){f(this,t),this.applyInput=c(this,"atomic/numberInputApply",7),this.start=void 0,this.end=void 0,this.bindings=void 0,this.type=void 0,this.filter=void 0,this.filterState=void 0,this.label=void 0}connectedCallback(){var t,a;this.start=(t=this.filterState.range)===null||t===void 0?void 0:t.start,this.end=(a=this.filterState.range)===null||a===void 0?void 0:a.end}apply(){!this.startRef.validity.valid||!this.endRef.validity.valid||(this.applyInput.emit(),this.filter.setRange({start:this.start,end:this.end}))}render(){var t,a;const n=this.bindings.i18n.t(this.label),d=this.bindings.i18n.t("min"),p=this.bindings.i18n.t("max"),u=this.bindings.i18n.t("number-input-minimum",{label:n}),b=this.bindings.i18n.t("number-input-maximum",{label:n}),o=this.bindings.i18n.t("apply"),m=this.bindings.i18n.t("number-input-apply",{label:n}),r="p-2.5 input-primary placeholder-neutral-dark min-w-0 mr-1",s="text-neutral-dark text-sm",l=this.type==="integer"?"1":"any";return i("form",{key:"864a8a1396b9f6e08537109ba752c58ae17c0974",class:"mt-4 px-2 gap-y-0.5",part:"input-form",onSubmit:e=>(e.preventDefault(),this.apply(),!1)},i("label",{key:"62c2aa56bd2e2bdb8936b29c36591e24c836dc90",part:"label-start",class:s,htmlFor:`${this.filterState.facetId}_start`},d),i("input",{key:"1fb4d282c4c5d3fc3ea1302f00e5d7cd82f5e759",part:"input-start",id:`${this.filterState.facetId}_start`,type:"number",step:l,ref:e=>this.startRef=e,class:r,"aria-label":u,required:!0,min:Number.MIN_SAFE_INTEGER,max:this.end,value:(t=this.filterState.range)===null||t===void 0?void 0:t.start,onInput:e=>this.start=e.target.valueAsNumber}),i("label",{key:"d8a938ecad188bc2a4738b7fd4c2234d8f4d244f",part:"label-end",class:s,htmlFor:`${this.filterState.facetId}_end`},p),i("input",{key:"caeba5358d2612b72506aa24e988210f817a020f",part:"input-end",id:`${this.filterState.facetId}_end`,type:"number",step:l,ref:e=>this.endRef=e,class:r,"aria-label":b,required:!0,min:this.start,max:Number.MAX_SAFE_INTEGER,value:(a=this.filterState.range)===null||a===void 0?void 0:a.end,onInput:e=>this.end=e.target.valueAsNumber}),i(h,{key:"a04e26bca3e3b06f4261e13031943bea00f49e5d",style:"outline-primary",type:"submit",part:"input-apply-button",class:"p-2.5 flex-none truncate",ariaLabel:m,text:o}))}};v.style=g;export{v as atomic_facet_number_input};
