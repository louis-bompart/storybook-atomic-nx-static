import{r as t,g as s}from"./p-00525453.js";import{M as i}from"./p-b6da4b1f.js";import{R as e,a as r,m as o}from"./p-47a97642.js";import"./p-7e7b1a62.js";import"./p-f5723aee.js";import"./p-e9c4f463.js";import"./p-e12016d2.js";import"./p-4328fcc3.js";import"./p-053b4bcb.js";var h=undefined&&undefined.__decorate||function(t,s,i,e){var r=arguments.length,o=r<3?s:e===null?e=Object.getOwnPropertyDescriptor(s,i):e,h;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,s,i,e);else for(var a=t.length-1;a>=0;a--)if(h=t[a])o=(r<3?h(o):r>3?h(s,i,o):h(s,i))||o;return r>3&&o&&Object.defineProperty(s,i,o),o};const a=class{constructor(s){t(this,s);this.matchConditions=[];this.conditions=[];this.mustMatch={};this.mustNotMatch={};this.error=undefined;this.conditions=[];this.ifDefined=undefined;this.ifNotDefined=undefined;this.resultTemplateCommon=new e({host:this.host,setError:t=>{this.error=t},validParents:["atomic-insight-result-list","atomic-insight-folded-result-list"],allowEmpty:true})}componentWillLoad(){this.conditions=r(this.ifDefined,this.ifNotDefined);this.resultTemplateCommon.matchConditions=o(this.mustMatch,this.mustNotMatch)}async getTemplate(){return this.resultTemplateCommon.getTemplate(this.conditions,this.error)}render(){return this.resultTemplateCommon.renderIfError(this.error)}get host(){return s(this)}};h([i({splitValues:true})],a.prototype,"mustMatch",void 0);h([i({splitValues:true})],a.prototype,"mustNotMatch",void 0);export{a as atomic_insight_result_template};
//# sourceMappingURL=p-8bc8aa10.entry.js.map