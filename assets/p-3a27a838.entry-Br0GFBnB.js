import{N as u,v as g,g as l,k as p,O as m}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{g as f,n as d}from"./p-f5723aee-kxsZMmLK.js";import{m as v}from"./p-107c3d7f-BhxinPh-.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-1580513b-3LX64KEr.js";const w="atomic-icon{display:inline-block;fill:currentColor;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon{height:auto}}atomic-icon>svg{width:100%;max-height:100%;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon>svg{height:auto}}",y=w;var I=function(r,t,e,o){var n=arguments.length,s=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,t,e,o);else for(var a=r.length-1;a>=0;a--)(c=r[a])&&(s=(n<3?c(s):n>3?c(t,e,s):c(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s};class i extends Error{static fromStatusCode(t,e,o){return new i(t,`status code ${e} (${o})`)}static fromError(t,e){return new i(t,"an error",e)}constructor(t,e,o){super(`Could not fetch icon from ${t}, got ${e}.`),this.url=t,this.errorObject=o}}const h=class{constructor(r){u(this,r),this.svg=null,this.icon=void 0,this.svg=null}async fetchIcon(r){try{const t=await fetch(r).catch(e=>{throw i.fromError(r,e)});if(t.status!==200&&t.status!==304)throw i.fromStatusCode(r,t.status,t.statusText);return await t.text()}catch(t){return this.error=t,g(this),null}}validateSVG(r){/^<svg[\s\S]+<\/svg>$/gm.test(r)||this.bindings.engine.logger.warn('The inline "icon" prop is not an svg element. You may encounter rendering issues.',this.icon)}async getIcon(){const r=f(this.icon,this.bindings.store.getIconAssetsPath()),t=r?await this.fetchIcon(r):this.icon;return t&&this.validateSVG(t),t?d.exports.sanitize(t,{USE_PROFILES:{svg:!0,svgFilters:!0}}):null}async updateIcon(){const r=this.getIcon();this.svg=await r}initialize(){this.updateIcon()}render(){if(this.error){console.error(this.error,this.host),this.host.remove();return}return l(p,{innerHTML:this.svg,"aria-hidden":"true"})}static get assetsDirs(){return["assets"]}get host(){return m(this)}static get watchers(){return{icon:["updateIcon"]}}};I([v()],h.prototype,"bindings",void 0);h.style=y;export{h as atomic_icon};
