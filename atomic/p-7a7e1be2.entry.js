import{r as t,g as s}from"./p-00525453.js";import{M as i}from"./p-a4fb8fa5.js";import{R as e,a as r,m as o}from"./p-3a5f1443.js";import"./p-7e7b1a62.js";import"./p-9935af75.js";import"./p-e9c4f463.js";import"./p-e12016d2.js";import"./p-4328fcc3.js";import"./p-d7ad2547.js";var h=undefined&&undefined.__decorate||function(t,s,i,e){var r=arguments.length,o=r<3?s:e===null?e=Object.getOwnPropertyDescriptor(s,i):e,h;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,s,i,e);else for(var n=t.length-1;n>=0;n--)if(h=t[n])o=(r<3?h(o):r>3?h(s,i,o):h(s,i))||o;return r>3&&o&&Object.defineProperty(s,i,o),o};const n=class{constructor(s){t(this,s);this.conditions=[];this.mustMatch={};this.mustNotMatch={};this.error=undefined;this.conditions=[];this.ifDefined=undefined;this.ifNotDefined=undefined;this.resultTemplateCommon=new e({host:this.host,setError:t=>{this.error=t},validParents:["atomic-insight-result-children"]})}componentWillLoad(){this.conditions=r(this.ifDefined,this.ifNotDefined);this.resultTemplateCommon.matchConditions=o(this.mustMatch,this.mustNotMatch)}async getTemplate(){return this.resultTemplateCommon.getTemplate(this.conditions,this.error)}render(){return this.resultTemplateCommon.renderIfError(this.error)}get host(){return s(this)}};h([i({splitValues:true})],n.prototype,"mustMatch",void 0);h([i({splitValues:true})],n.prototype,"mustNotMatch",void 0);export{n as atomic_insight_result_children_template};
//# sourceMappingURL=p-7a7e1be2.entry.js.map