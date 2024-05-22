import{o as t}from"./p-e12016d2.js";import{h as e}from"./p-00525453.js";import{e as n,f as o,b as r}from"./p-9935af75.js";import{t as i}from"./p-4328fcc3.js";import{i as s}from"./p-d7ad2547.js";function a(t){if(s(t)){return"section"}if(!o(t)){return"metadata"}if(r(t)&&t.tagName.toLowerCase()===i){return"table-column-definition"}return"other"}function c(t){return n(Array.from(t),(t=>a(t)))}class l{constructor({host:t,setError:e,validParents:n,allowEmpty:o=false}){this.matchConditions=[];this.host=t;this.validateTemplate(t,e,n,o)}validateTemplate(t,e,n,o=true){var r;const i=n.map((t=>t.toUpperCase())).includes(((r=t.parentElement)===null||r===void 0?void 0:r.nodeName)||"");const s=t.nodeName.toLowerCase();if(!i){e(new Error(`The "${s}" component has to be the child of one of the following: ${n.map((t=>`"${t.toLowerCase()}"`)).join(", ")}.`));return}const a=t.querySelector("template");if(!a){e(new Error(`The "${s}" component has to contain a "template" element as a child.`));return}if(!o&&!a.innerHTML.trim()){e(new Error(`The "template" tag inside "${s}" cannot be empty.`));return}if(a.content.querySelector("script")){console.warn('Any "script" tags defined inside of "template" elements are not supported and will not be executed when the results are rendered.',t)}const{section:l,other:f}=c(a.content.childNodes);if((l===null||l===void 0?void 0:l.length)&&(f===null||f===void 0?void 0:f.length)){console.warn("Result templates should only contain section elements or non-section elements. Future updates could unpredictably affect this result template.",t,{sectionNodes:l,otherNodes:f})}}getTemplate(t,e){if(e){return null}return{conditions:t.concat(this.matchConditions),content:f(this.host).content,priority:1}}renderIfError(t){if(t){return e("atomic-component-error",{element:this.host,error:t})}}}function f(t){return t.querySelector("template")}function u(e,n){const o=[];for(const n in e){o.push(t.fieldMustMatch(n,e[n]))}for(const e in n){o.push(t.fieldMustNotMatch(e,n[e]))}return o}function m(e,n){const o=[];if(e){const n=e.split(",");o.push(t.fieldsMustBeDefined(n))}if(n){const e=n.split(",");o.push(t.fieldsMustNotBeDefined(e))}return o}export{l as R,m as a,u as m};
//# sourceMappingURL=p-3a5f1443.js.map