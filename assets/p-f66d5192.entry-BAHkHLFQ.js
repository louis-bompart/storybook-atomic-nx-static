import{N as u,g as f,O as c}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{t as m,n as l}from"./p-ade4f913-CaQ8GiUG.js";import{p as d}from"./p-794b93a9-Bwn0XXeG.js";import{m as y}from"./p-107c3d7f-BhxinPh-.js";import{r as g}from"./p-a422cb9e-BPwXmkpq.js";import"./p-f5723aee-kxsZMmLK.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-1580513b-3LX64KEr.js";import"./p-529fdce5-yFKSm3-S.js";import"./p-e9c4f463-BPmi-3c5.js";const F=class{constructor(t){u(this,t),this.format=(r,o)=>r.toLocaleString(o,{style:"currency",currency:this.currency}),this.error=void 0,this.currency=void 0}componentWillLoad(){try{m((t,r)=>this.format(t,r),this.host)}catch(t){this.error=t}}render(){if(this.error)return f("atomic-component-error",{key:"eaa8f36e17d6c352522a3720e21d48e3cab8e9db",element:this.host,error:this.error})}get host(){return c(this)}};var p=function(t,r,o,i){var s=arguments.length,e=s<3?r:i===null?i=Object.getOwnPropertyDescriptor(r,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,r,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(e=(s<3?n(e):s>3?n(r,o,e):n(r,o))||e);return s>3&&e&&Object.defineProperty(r,o,e),e};const h=class{constructor(t){u(this,t),this.formatter=l,this.valueToDisplay=null,this.error=void 0,this.field=void 0,this.formatter=l,this.valueToDisplay=null}setFormat(t){t.preventDefault(),t.stopPropagation(),this.formatter=t.detail}parseValue(){const t=d.getProductProperty(this.product,this.field);if(t===null)return null;const r=parseFloat(`${t}`);return Number.isNaN(r)?(this.error=new Error(`Could not parse "${t}" from field "${this.field}" as a number.`),null):r}formatValue(t){try{return this.formatter(t,this.bindings.i18n.languages)}catch(r){return this.error=r,t.toString()}}updateValueToDisplay(){const t=this.parseValue();t!==null&&(this.valueToDisplay=this.formatValue(t))}componentWillRender(){this.updateValueToDisplay()}render(){if(this.valueToDisplay===null){this.host.remove();return}return this.valueToDisplay}get host(){return c(this)}};p([y()],h.prototype,"bindings",void 0);p([g()],h.prototype,"product",void 0);export{F as atomic_format_currency,h as atomic_product_numeric_field_value};