import{N as p,g as u,O as l}from"./preview-Cp9OdNlu.js";import{M as c}from"./p-abea0bd2-55DIQVI1.js";import{s as m}from"./p-b6da4b1f-BaLrSCo6.js";import{u as a}from"./p-1996150c-CESwXcAC.js";import{e as v}from"./p-849728b4-DXyKjzoT.js";import"./p-f5723aee-KeNxIJx_.js";import"./p-053b4bcb-g1ovJ3l8.js";import"./iframe-vvwA9ouH.js";import"../sb-preview/runtime.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./p-7e7b1a62-C6-3oFSh.js";import"./p-4328fcc3-C1crOUOq.js";import"./p-529fdce5-C1bBLtu6.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";const D="atomic-field-condition{max-width:100%}",M=D;var h=function(t,i,o,s){var r=arguments.length,e=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,o):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,i,o,s);else for(var d=t.length-1;d>=0;d--)(n=t[d])&&(e=(r<3?n(e):r>3?n(i,o,e):n(i,o))||e);return r>3&&e&&Object.defineProperty(i,o,e),e};const f=class{constructor(t){p(this,t),this.mustMatch={},this.mustNotMatch={},this.conditions=[],this.shouldBeRemoved=!1,this.ifDefined=void 0,this.ifNotDefined=void 0}componentWillLoad(){if(this.ifDefined){const t=this.ifDefined.split(",");this.conditions.push(c.fieldsMustBeDefined(t))}if(this.ifNotDefined){const t=this.ifNotDefined.split(",");this.conditions.push(c.fieldsMustNotBeDefined(t))}this.conditions.push(...a(this.mustMatch,this.mustNotMatch))}render(){return this.conditions.every(t=>t(this.result))?u("slot",null):(this.shouldBeRemoved=!0,"")}componentDidLoad(){this.shouldBeRemoved&&this.host.remove()}get host(){return l(this)}};h([m({splitValues:!0})],f.prototype,"mustMatch",void 0);h([m({splitValues:!0})],f.prototype,"mustNotMatch",void 0);h([v()],f.prototype,"result",void 0);f.style=M;export{f as atomic_field_condition};
