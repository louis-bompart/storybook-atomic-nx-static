import{N as d,g as h,k as p,O as m}from"./preview-Cp9OdNlu.js";import{h as b}from"./p-7e7b1a62-C6-3oFSh.js";import{J as v,M as u}from"./p-abea0bd2-55DIQVI1.js";import{r as c}from"./p-55d2bcf3-DJQIxeeN.js";import{m as a}from"./p-107c3d7f-lK1Nx8Nb.js";import{r as y}from"./p-418c4092-JxpFFc2j.js";import{e as O}from"./p-849728b4-DXyKjzoT.js";import"./p-f5723aee-KeNxIJx_.js";import"./iframe-vvwA9ouH.js";import"../sb-preview/runtime.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./p-1580513b-3LX64KEr.js";import"./p-529fdce5-C1bBLtu6.js";import"./p-e9c4f463-BPmi-3c5.js";var f=function(t,r,e,n){var s=arguments.length,i=s<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,r,e,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(r,e,i):o(r,e))||i);return s>3&&i&&Object.defineProperty(r,e,i),i};const g=class{constructor(t){d(this,t),this.shouldHighlight=!0,this.error=void 0,this.field=void 0,this.shouldHighlight=!0,this.default=void 0}renderWithHighlights(t,r){try{const e="_openingDelimiter_",n="_closingDelimiter_",i=v.highlightString({content:t,openingDelimiter:e,closingDelimiter:n,highlights:r}).replace(new RegExp(e,"g"),"<b>").replace(new RegExp(n,"g"),"</b>");return h(p,{innerHTML:i})}catch(e){this.error=e}}possiblyWarnOnBadFieldType(){const t=u.getResultProperty(this.result,this.field);b(t)&&this.bindings.engine.logger.error(`atomic-result-text cannot be used with multi value field "${this.field}" with values "${t}". Use atomic-result-multi-value-text instead.`,this)}render(){const t=y(this.result,this.field);if(!t&&!this.default){this.possiblyWarnOnBadFieldType(),this.host.remove();return}if(!t&&this.default)return this.possiblyWarnOnBadFieldType(),h("atomic-text",{value:c(this.field,this.default,this.bindings.i18n)});const r=`${t}`,e=u.getResultProperty(this.result,`${this.field}Highlights`);return this.shouldHighlight&&e?this.renderWithHighlights(r,e):c(this.field,r,this.bindings.i18n)}get host(){return m(this)}};f([a()],g.prototype,"bindings",void 0);f([O()],g.prototype,"result",void 0);var R=function(t,r,e,n){var s=arguments.length,i=s<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,r,e,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(r,e,i):o(r,e))||i);return s>3&&i&&Object.defineProperty(r,e,i),i};const x=class{constructor(t){d(this,t),this.strings={value:()=>this.bindings.i18n.t(this.value,{count:this.count})},this.error=void 0,this.value=void 0,this.count=void 0}connectedCallback(){this.value||(this.error=new Error('The "value" attribute must be defined.'))}render(){return this.strings.value()}};R([a()],x.prototype,"bindings",void 0);export{g as atomic_result_text,x as atomic_text};
