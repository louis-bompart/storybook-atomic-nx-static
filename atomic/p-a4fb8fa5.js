import{i as o}from"./p-7e7b1a62.js";import{g as t}from"./p-00525453.js";import{a as n,k as r}from"./p-9935af75.js";function s(o){return(n,r)=>{const{componentWillLoad:s}=n;if(!s){console.error('The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.');return}n.componentWillLoad=function(){var n;const i=o&&o.attributePrefix||r;const c=this[r];const a=t(this).attributes;e(i,c,Array.from(a),(n=o===null||o===void 0?void 0:o.splitValues)!==null&&n!==void 0?n:false);s.call(this)}}}function i(){return(r,s)=>{const{componentWillLoad:i}=r;const c=n(s);r.componentWillLoad=function(){const n=this[s];if(!n||o(n)){i===null||i===void 0?void 0:i.call(this);return}try{const r=JSON.parse(n);if(o(r)){this[s]=r}else{console.error(`Property ${c} should be an array`,t(this))}}catch(o){console.error(`Error while parsing attribute ${c} as array`,o)}i===null||i===void 0?void 0:i.call(this)}}}function c(o){var t;const n=/(?:\\.|[^,])+/g;const[...r]=(t=o.matchAll(n))!==null&&t!==void 0?t:[];const s=/\\(.)/g;return r.map((([o])=>o.replace(s,"$1")))}function e(o,t,n,r){const s=l(o,n);Object.assign(t,r?a(s):s)}function a(o){return Object.entries(o).reduce(((o,[t,n])=>({...o,[t]:c(n).map((o=>o.trim()))})),{})}function l(o,t){const s={};const i=n(o)+"-";for(let o=0;o<t.length;o++){const n=t[o];if(n.name.indexOf(i)!==0){continue}const c=r(n.name.replace(i,""));s[c]=`${n.value}`}return s}export{i as A,s as M};
//# sourceMappingURL=p-a4fb8fa5.js.map