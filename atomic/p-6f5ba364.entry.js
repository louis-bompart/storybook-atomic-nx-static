import{r as t,g as s}from"./p-00525453.js";import{M as e}from"./p-a4fb8fa5.js";import{R as i,m as r}from"./p-3a5f1443.js";import"./p-7e7b1a62.js";import"./p-9935af75.js";import"./p-e9c4f463.js";import"./p-e12016d2.js";import"./p-4328fcc3.js";import"./p-d7ad2547.js";var o=undefined&&undefined.__decorate||function(t,s,e,i){var r=arguments.length,o=r<3?s:i===null?i=Object.getOwnPropertyDescriptor(s,e):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,s,e,i);else for(var p=t.length-1;p>=0;p--)if(a=t[p])o=(r<3?a(o):r>3?a(s,e,o):a(s,e))||o;return r>3&&o&&Object.defineProperty(s,e,o),o};const a=class{constructor(s){t(this,s);this.conditions=[];this.mustMatch={};this.mustNotMatch={};this.error=undefined;this.conditions=[];this.resultTemplateCommon=new i({host:this.host,setError:t=>{this.error=t},validParents:["atomic-result-list","atomic-folded-result-list","atomic-search-box-instant-results"],allowEmpty:true})}componentWillLoad(){this.resultTemplateCommon.matchConditions=r(this.mustMatch,this.mustNotMatch)}async getTemplate(){return this.resultTemplateCommon.getTemplate(this.conditions,this.error)}render(){return this.resultTemplateCommon.renderIfError(this.error)}get host(){return s(this)}};o([e({splitValues:true})],a.prototype,"mustMatch",void 0);o([e({splitValues:true})],a.prototype,"mustNotMatch",void 0);export{a as atomic_result_template};
//# sourceMappingURL=p-6f5ba364.entry.js.map