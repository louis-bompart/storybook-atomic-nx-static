import{N as d}from"./preview-C4e5QyPH.js";import{s as c}from"./p-7e7b1a62-C6-3oFSh.js";import{M as u}from"./p-abea0bd2-55DIQVI1.js";import{m as a}from"./p-107c3d7f-C4HwDtxk.js";import{s as m}from"./p-b6da4b1f-CK_AA4Pf.js";import{e as h}from"./p-849728b4-BFbNO7U7.js";import"./p-f5723aee-BNyovPuY.js";import"./iframe-DZOcfrC1.js";import"../sb-preview/runtime.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./p-1580513b-3LX64KEr.js";import"./p-529fdce5-CfCZs-Ro.js";import"./p-e9c4f463-BPmi-3c5.js";var f=function(t,e,o,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,o,r):n(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};const p=class{constructor(t){d(this,t),this.field={},this.error=void 0,this.localeKey=void 0,this.fieldCount=void 0}render(){return this.bindings.i18n.t(this.localeKey,{...this.parseFieldValues(),...this.parseFieldCount()})}parseFieldValues(){const t={};return Object.keys(this.field).length===0||Object.entries(this.field).forEach(([e,o])=>{const i=u.getResultProperty(this.result,e);c(i)||(t[o]=i)}),t}parseFieldCount(){var t;return this.fieldCount?{count:(t=u.getResultProperty(this.result,this.fieldCount))!==null&&t!==void 0?t:1}:{}}};f([a()],p.prototype,"bindings",void 0);f([h()],p.prototype,"result",void 0);f([m()],p.prototype,"field",void 0);export{p as atomic_result_localized_text};