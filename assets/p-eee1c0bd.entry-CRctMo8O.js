import{N as u,g as o,O as c}from"./atomic-breadbox.new.stories-D03zBEda.js";import{X as h,K as g,W as f}from"./p-e12016d2-D4PWgvR2.js";import{n as y}from"./p-100dc7b2-DwffWY4C.js";import{m as b,p as m}from"./p-6fadd170-Cg3VAl32.js";import{c as R}from"./p-9935af75-BsJQUBM3.js";import{t as S}from"./p-7e69c7c8-kqOGAQfv.js";import{s as L,t as F}from"./p-5ff0fe21-CTur0xQ1.js";import{l as x,a as w}from"./p-036c0e91-D2c8m7_E.js";import{n as P}from"./p-af30f3b4-Dppmjtuz.js";import{e as T}from"./p-c944a92c-DXWZoQ7j.js";import{r as v}from"./p-1a4bcc0e-MyoFk3g-.js";import"./p-d7ad2547-DUwI-3Sg.js";import"./iframe-DTo5wNcQ.js";import"../sb-preview/runtime.js";import"./p-1580513b-De1d4bsn.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-a2fc549d-BcKcO86e.js";import"./p-7b70d542-BqLMHXVU.js";const E=".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}",k=E;var p=function(t,e,s,r){var l=arguments.length,i=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,s):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,s,r);else for(var d=t.length-1;d>=0;d--)(a=t[d])&&(i=(l<3?a(i):l>3?a(e,s,i):a(e,s))||i);return l>3&&i&&Object.defineProperty(e,s,i),i};const n=class{constructor(t){u(this,t),this.loadingFlag=R("firstResultLoaded-"),this.display="list",this.resultTemplateRegistered=!1,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.numberOfFoldedResults=2,this.foldedResultListState=void 0,this.resultsPerPageState=void 0,this.resultTemplateRegistered=!1,this.error=void 0,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.collectionField=void 0,this.parentField=void 0,this.childField=void 0,this.numberOfFoldedResults=2}async setRenderFunction(t){this.resultRenderingFunction=t}resolveFoldedResultList(t){t.preventDefault(),t.stopPropagation(),t.detail(this.foldedResultList)}loadCollection(t){t.preventDefault(),t.stopPropagation(),this.foldedResultList.loadCollection(t.detail)}get focusTarget(){return this.nextNewResultTarget||(this.nextNewResultTarget=new y(this)),this.nextNewResultTarget}initialize(){try{this.foldedResultList=this.initFolding(),this.resultsPerPage=h(this.bindings.engine)}catch(t){this.error=t}this.itemTemplateProvider=new L({includeDefaultTemplate:!0,templateElements:Array.from(this.host.querySelectorAll("atomic-result-template")),getResultTemplateRegistered:()=>this.resultTemplateRegistered,getTemplateHasError:()=>this.templateHasError,setResultTemplateRegistered:t=>{this.resultTemplateRegistered=t},setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings}),this.itemListCommon=new P({engineSubscribe:this.bindings.engine.subscribe,getCurrentNumberOfItems:()=>this.foldedResultListState.results.length,getIsLoading:()=>this.foldedResultListState.isLoading,host:this.host,loadingFlag:this.loadingFlag,nextNewItemTarget:this.focusTarget,store:this.bindings.store})}initFolding(t={options:{}}){return g(this.bindings.engine,{options:{...t.options,folding:{collectionField:this.collectionField,parentField:this.parentField,childField:this.childField,numberOfFoldedResults:this.numberOfFoldedResults}}})}render(){this.itemListCommon.updateBreakpoints();const t=this.computeListDisplayClasses();return o(T,{key:"377ae17d94b9df97a9b26e7e36b940a95083361d",hasError:this.foldedResultListState.hasError,firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults,hasTemplate:this.resultTemplateRegistered,templateHasError:this.itemTemplateProvider.hasError},o(x,{key:"f126cab07b64c6e6a81be6c253034ead28cbdac8",listClasses:t,display:this.display},o(S,{key:"70d951456239b3045ee6073223249bd2ecc94cc7",density:this.density,imageSize:this.imageSize,display:this.display,displayPlaceholders:!this.bindings.store.isAppLoaded(),numberOfPlaceholders:this.resultsPerPageState.numberOfResults}),o(w,{key:"2db66d58267c68626b29eddcb368ba91516aab28",firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults},this.foldedResultListState.results.map((e,s)=>{const r=this.getPropsForAtomicResult(e);return o("atomic-result",{...r,part:"outline",ref:l=>l&&this.itemListCommon.setNewResultRef(l,s)})}))))}computeListDisplayClasses(){const t=!this.bindings.store.isAppLoaded();return v(this.display,this.density,this.imageSize,this.foldedResultListState.firstSearchExecuted&&this.foldedResultListState.isLoading,t)}getPropsForAtomicResult(t){const e=F(t);return{interactiveResult:f(this.bindings.engine,{options:{result:e}}),result:e,renderingFunction:this.resultRenderingFunction,loadingFlag:this.loadingFlag,key:this.itemListCommon.getResultId(e.uniqueId,this.foldedResultListState.searchResponseId,this.density,this.imageSize),content:this.itemTemplateProvider.getTemplateContent(e),store:this.bindings.store,density:this.density,imageSize:this.imageSize,display:this.display}}get host(){return c(this)}};p([b()],n.prototype,"bindings",void 0);p([m("foldedResultList")],n.prototype,"foldedResultListState",void 0);p([m("resultsPerPage")],n.prototype,"resultsPerPageState",void 0);n.style=k;export{n as atomic_folded_result_list};
