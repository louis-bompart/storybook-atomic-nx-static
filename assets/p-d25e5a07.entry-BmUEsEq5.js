import{N as l,g as n,O as u}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{O as h,V as m}from"./p-e12016d2-bJLTunAq.js";import{r as d}from"./p-8f5830b4-EwJYRc8T.js";import{s as g}from"./p-5ff0fe21-CAsElj0b.js";import{e as c,l as p,r as b}from"./p-0e55feeb-Dz7tUor9.js";import{r as y}from"./p-2130c607-Dbl0RhQH.js";import"./p-f5723aee-kxsZMmLK.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-a2fc549d-BcKcO86e.js";import"./p-b0ede3ce-D6gWHOV3.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";const A=class{constructor(t){l(this,t),this.results=[],this.display="list",this.templateHasError=!1,this.maxResultsPerQuery=4,this.density="normal",this.imageSize="icon",this.error=void 0,this.templateHasError=!1,this.maxResultsPerQuery=4,this.density="normal",this.imageSize="icon",this.ariaLabelGenerator=void 0}async setRenderFunction(t){this.itemRenderingFunction=t}componentWillLoad(){try{y(t=>(this.bindings=t,this.initialize()),this.host)}catch(t){this.error=t}}getLink(t){var s;const e=t.tagName==="ATOMIC-RESULT"?t:t==null?void 0:t.querySelector("atomic-result");return((s=e==null?void 0:e.shadowRoot)===null||s===void 0?void 0:s.querySelector("atomic-result-link a"))||null}handleLinkClick(t,s){const e=o=>t.setAttribute("target",o),i=t.getAttribute("target");return s&&e("_blank"),t.click(),s&&e(i||""),!0}renderItems(){if(!this.bindings.suggestedQuery()||this.bindings.store.isMobile())return[];const s=(this.instantResults.state.results.length?this.instantResults.state.results:this.results).map(e=>{var i;return{...c(this.bindings.i18n,((i=this.ariaLabelGenerator)===null||i===void 0?void 0:i.call(this,this.bindings,e))||e.title,e.uniqueId),content:n("atomic-result",{key:`instant-result-${d(e.uniqueId)}`,part:"outline",result:e,interactiveResult:h(this.bindings.engine,{options:{result:e}}),display:this.display,density:this.density,imageSize:this.imageSize,content:this.itemTemplateProvider.getTemplateContent(e),stopPropagation:!1,renderingFunction:this.itemRenderingFunction}),onSelect:r=>{const a=this.getLink(r.target);a&&this.handleLinkClick(a,r.ctrlKey||r.metaKey)}}});if(s.length){const e=p(this.bindings.i18n);s.push({...e,content:n(b,{i18n:this.bindings.i18n}),onSelect:()=>{this.bindings.clearSuggestions(),this.bindings.searchBoxController.updateText(this.instantResults.state.q),this.bindings.searchBoxController.submit()}})}return s}initialize(){return this.instantResults=m(this.bindings.engine,{options:{maxResultsPerQuery:this.maxResultsPerQuery}}),this.itemTemplateProvider=new g({includeDefaultTemplate:!0,templateElements:Array.from(this.host.querySelectorAll("atomic-result-template")),getResultTemplateRegistered:()=>!0,setResultTemplateRegistered:()=>{},getTemplateHasError:()=>this.templateHasError,setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings}),{position:Array.from(this.host.parentNode.children).indexOf(this.host),panel:"right",onSuggestedQueryChange:t=>(this.instantResults.updateQuery(t),this.onSuggestedQueryChange()),renderItems:()=>this.renderItems()}}onSuggestedQueryChange(){return!this.bindings.getSuggestionElements().length&&!this.bindings.searchBoxController.state.value&&console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-search-box-query-suggestions or atomic-search-box-recent-queries in your search box in order to see some instant results."),new Promise(t=>{const s=this.instantResults.subscribe(()=>{const e=this.instantResults.state;e.isLoading||(e.results.length&&(this.results=e.results),s(),t())})})}render(){if(this.error)return n("atomic-component-error",{key:"2aa28f637287f77b33d238a9b2b1ff248e06f37d",element:this.host,error:this.error})}get host(){return u(this)}};export{A as atomic_search_box_instant_results};