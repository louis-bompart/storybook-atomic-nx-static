import{g as t}from"./p-00525453.js";import{b as n}from"./p-1580513b.js";import{c as e}from"./p-9935af75.js";class s extends Error{constructor(t,n){super(`The "${t}" element must be the child of an "${n}" element.`)}}function r(e={parentName:"atomic-result",folded:false}){return(r,o)=>{const{connectedCallback:c,componentWillRender:u,render:f}=r;r.connectedCallback=function(){const r=t(this);const u=n(i,(t=>{this[o]=l(t,e.folded)}));const f=r.dispatchEvent(u);if(f){this.error=new s(r.nodeName.toLowerCase(),e.parentName);return}return c&&c.call(this)};r.componentWillRender=function(){if(this.error){return}return u&&u.call(this)};r.render=function(){if(this.error){const n=t(this);n.remove();console.error("Result component is in error and has been removed from the DOM",this.error,this,n);return}return f&&f.call(this)}}}function o(){return(e,s)=>{const{connectedCallback:r}=e;e.connectedCallback=function(){const e=t(this);const o=n(c,(t=>{this[s]=t}));e.dispatchEvent(o);return r&&r.call(this)}}}const i="atomic/resolveResult";const c="atomic/resolveInteractiveResult";function u(t,r){return new Promise(((o,c)=>{const u=n(i,(t=>o(t)));t.dispatchEvent(u);if(!e(t,r)){c(new s(t.nodeName.toLowerCase(),r))}}))}function l(t,n){if(n){if("children"in t){return t}else{return{children:[],result:t}}}if("children"in t&&"result"in t){return t.result}return t}const f="atomic/resolveChildTemplates";function h(){return(e,s)=>{const{componentWillRender:r}=e;e.componentWillRender=function(){const e=t(this);const o=n(f,(t=>{const n=this;if(n.itemTemplateProvider){return}this[s]=t}));const i=e.dispatchEvent(o);if(i){this[s]=null;return}return r&&r.call(this)}}}const a="atomic/resolveResultDisplayConfig";function m(){return(e,s)=>{const{componentWillRender:r}=e;e.componentWillRender=function(){const e=t(this);const o=n(a,(t=>{this[s]=t}));const i=e.dispatchEvent(o);if(i){return}return r&&r.call(this)}}}export{h as C,r as I,o as a,m as b,u as i};
//# sourceMappingURL=p-231defbf.js.map