import{N as u,g as o,O as c}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{X as h,N as g,W as f}from"./p-e12016d2-bJLTunAq.js";import{n as y}from"./p-53b93b76-BpUdUxa6.js";import{m as b,p as m}from"./p-107c3d7f-BhxinPh-.js";import{c as R}from"./p-f5723aee-kxsZMmLK.js";import{t as S}from"./p-7e69c7c8-CR9YS2NK.js";import{s as L,t as F}from"./p-5ff0fe21-CAsElj0b.js";import{l as x,a as w}from"./p-036c0e91-CTQ_B6OC.js";import{n as P}from"./p-f3df7d3d-gkanrbn5.js";import{e as T}from"./p-c944a92c-DtEeJaNE.js";import{r as v}from"./p-006798cd--3bzYy34.js";import"./p-053b4bcb-BGdEgx6a.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-a2fc549d-BcKcO86e.js";import"./p-bd76e089-WykMeynx.js";const E=".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}",k=E;var p=function(t,e,s,r){var l=arguments.length,i=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,s):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,s,r);else for(var d=t.length-1;d>=0;d--)(a=t[d])&&(i=(l<3?a(i):l>3?a(e,s,i):a(e,s))||i);return l>3&&i&&Object.defineProperty(e,s,i),i};const n=class{constructor(t){u(this,t),this.loadingFlag=R("firstResultLoaded-"),this.display="list",this.resultTemplateRegistered=!1,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.numberOfFoldedResults=2,this.foldedResultListState=void 0,this.resultsPerPageState=void 0,this.resultTemplateRegistered=!1,this.error=void 0,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.collectionField=void 0,this.parentField=void 0,this.childField=void 0,this.numberOfFoldedResults=2}async setRenderFunction(t){this.resultRenderingFunction=t}resolveFoldedResultList(t){t.preventDefault(),t.stopPropagation(),t.detail(this.foldedResultList)}loadCollection(t){t.preventDefault(),t.stopPropagation(),this.foldedResultList.loadCollection(t.detail)}get focusTarget(){return this.nextNewResultTarget||(this.nextNewResultTarget=new y(this)),this.nextNewResultTarget}initialize(){try{this.foldedResultList=this.initFolding(),this.resultsPerPage=h(this.bindings.engine)}catch(t){this.error=t}this.itemTemplateProvider=new L({includeDefaultTemplate:!0,templateElements:Array.from(this.host.querySelectorAll("atomic-result-template")),getResultTemplateRegistered:()=>this.resultTemplateRegistered,getTemplateHasError:()=>this.templateHasError,setResultTemplateRegistered:t=>{this.resultTemplateRegistered=t},setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings}),this.itemListCommon=new P({engineSubscribe:this.bindings.engine.subscribe,getCurrentNumberOfItems:()=>this.foldedResultListState.results.length,getIsLoading:()=>this.foldedResultListState.isLoading,host:this.host,loadingFlag:this.loadingFlag,nextNewItemTarget:this.focusTarget,store:this.bindings.store})}initFolding(t={options:{}}){return g(this.bindings.engine,{options:{...t.options,folding:{collectionField:this.collectionField,parentField:this.parentField,childField:this.childField,numberOfFoldedResults:this.numberOfFoldedResults}}})}render(){this.itemListCommon.updateBreakpoints();const t=this.computeListDisplayClasses();return o(T,{key:"cba7d099d0f6b8b74f78c56fd8976f632bf4a8ca",hasError:this.foldedResultListState.hasError,firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults,hasTemplate:this.resultTemplateRegistered,templateHasError:this.itemTemplateProvider.hasError},o(x,{key:"1a8d06d0279469dd3076b3db8e4c9b8a98fb67d7",listClasses:t,display:this.display},o(S,{key:"dd6e8ff13a01004661acb2695ff7ad82ff8f9a95",density:this.density,imageSize:this.imageSize,display:this.display,displayPlaceholders:!this.bindings.store.isAppLoaded(),numberOfPlaceholders:this.resultsPerPageState.numberOfResults}),o(w,{key:"04a1a41afdcf28c43eb8594aa7c2aa6f632e996e",firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults},this.foldedResultListState.results.map((e,s)=>{const r=this.getPropsForAtomicResult(e);return o("atomic-result",{...r,part:"outline",ref:l=>l&&this.itemListCommon.setNewResultRef(l,s)})}))))}computeListDisplayClasses(){const t=!this.bindings.store.isAppLoaded();return v(this.display,this.density,this.imageSize,this.foldedResultListState.firstSearchExecuted&&this.foldedResultListState.isLoading,t)}getPropsForAtomicResult(t){const e=F(t);return{interactiveResult:f(this.bindings.engine,{options:{result:e}}),result:e,renderingFunction:this.resultRenderingFunction,loadingFlag:this.loadingFlag,key:this.itemListCommon.getResultId(e.uniqueId,this.foldedResultListState.searchResponseId,this.density,this.imageSize),content:this.itemTemplateProvider.getTemplateContent(e),store:this.bindings.store,density:this.density,imageSize:this.imageSize,display:this.display}}get host(){return c(this)}};p([b()],n.prototype,"bindings",void 0);p([m("foldedResultList")],n.prototype,"foldedResultListState",void 0);p([m("resultsPerPage")],n.prototype,"resultsPerPageState",void 0);n.style=k;export{n as atomic_folded_result_list};