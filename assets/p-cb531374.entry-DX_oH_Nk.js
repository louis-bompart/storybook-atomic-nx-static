import{N as h,g as l,O as u}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{e as c,t as g,a as f}from"./p-00579e36-B9H1Cag7.js";import{n as y}from"./p-53b93b76-BpUdUxa6.js";import{m as b,p as m}from"./p-107c3d7f-BhxinPh-.js";import{c as R}from"./p-f5723aee-kxsZMmLK.js";import{t as L}from"./p-7e69c7c8-CR9YS2NK.js";import{s as S,t as F}from"./p-5ff0fe21-CAsElj0b.js";import{l as P,a as T}from"./p-036c0e91-CTQ_B6OC.js";import{n as v}from"./p-f3df7d3d-gkanrbn5.js";import{e as x}from"./p-c944a92c-DtEeJaNE.js";import{r as w}from"./p-006798cd--3bzYy34.js";import"./p-e12016d2-bJLTunAq.js";import"./p-053b4bcb-BGdEgx6a.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-a2fc549d-BcKcO86e.js";import"./p-bd76e089-WykMeynx.js";const E=".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}",I=E;var p=function(t,e,s,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,s):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,s,o);else for(var d=t.length-1;d>=0;d--)(a=t[d])&&(i=(r<3?a(i):r>3?a(e,s,i):a(e,s))||i);return r>3&&i&&Object.defineProperty(e,s,i),i};const n=class{constructor(t){h(this,t),this.loadingFlag=R("firstResultLoaded-"),this.display="list",this.resultTemplateRegistered=!1,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.foldedResultListState=void 0,this.resultsPerPageState=void 0,this.resultTemplateRegistered=!1,this.error=void 0,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.collectionField=void 0,this.parentField=void 0,this.childField=void 0}async setRenderFunction(t){this.itemRenderingFunction=t}resolveFoldedResultList(t){t.preventDefault(),t.stopPropagation(),t.detail(this.foldedResultList)}loadCollection(t){t.preventDefault(),t.stopPropagation(),this.foldedResultList.loadCollection(t.detail)}initialize(){try{this.foldedResultList=this.initFolding(),this.resultsPerPage=c(this.bindings.engine)}catch(t){this.error=t}this.itemTemplateProvider=new S({includeDefaultTemplate:!0,templateElements:Array.from(this.host.querySelectorAll("atomic-insight-result-template")),getResultTemplateRegistered:()=>this.resultTemplateRegistered,getTemplateHasError:()=>this.templateHasError,setResultTemplateRegistered:t=>{this.resultTemplateRegistered=t},setTemplateHasError:t=>{this.templateHasError=t},bindings:this.bindings}),this.itemListCommon=new v({engineSubscribe:this.bindings.engine.subscribe,getCurrentNumberOfItems:()=>this.foldedResultListState.results.length,getIsLoading:()=>this.foldedResultListState.isLoading,host:this.host,loadingFlag:this.loadingFlag,nextNewItemTarget:this.focusTarget,store:this.bindings.store})}get focusTarget(){return this.nextNewResultTarget||(this.nextNewResultTarget=new y(this)),this.nextNewResultTarget}initFolding(t={options:{}}){return g(this.bindings.engine,{options:{...t.options,folding:{collectionField:this.collectionField,parentField:this.parentField,childField:this.childField}}})}render(){this.itemListCommon.updateBreakpoints();const t=this.computeListDisplayClasses();return l(x,{key:"5a5989a8f4bc5a54a296c2f31cefcf3a7c15240f",firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults,hasTemplate:this.resultTemplateRegistered,templateHasError:this.itemTemplateProvider.hasError,hasError:this.foldedResultListState.hasError},l(P,{key:"71f81d254665841d8f4f2b830943b670cf0c0151",listClasses:t,display:this.display},l(L,{key:"5b0d44f92761bd8d4682eec9ec17bd910a152bf8",displayPlaceholders:!this.bindings.store.isAppLoaded(),numberOfPlaceholders:this.resultsPerPageState.numberOfResults,display:this.display,density:this.density,imageSize:this.imageSize}),l(T,{key:"905eeb0b6d7c95adb46af482a54f2df92a3ac00a",firstRequestExecuted:this.foldedResultListState.firstSearchExecuted,hasItems:this.foldedResultListState.hasResults},this.foldedResultListState.results.map((e,s)=>{const o=this.getPropsForAtomicInsightResult(e);return l("atomic-insight-result",{...o,part:"outline",ref:r=>r&&this.itemListCommon.setNewResultRef(r,s)})}))))}computeListDisplayClasses(){const t=!this.bindings.store.isAppLoaded();return w(this.display,this.density,this.imageSize,this.foldedResultListState.firstSearchExecuted&&this.foldedResultListState.isLoading,t)}getPropsForAtomicInsightResult(t){const e=F(t);return{interactiveResult:f(this.bindings.engine,{options:{result:e}}),result:e,renderingFunction:this.itemRenderingFunction,loadingFlag:this.loadingFlag,key:this.itemListCommon.getResultId(e.uniqueId,this.foldedResultListState.searchResponseId,this.density,this.imageSize),content:this.itemTemplateProvider.getTemplateContent(e),store:this.bindings.store,density:this.density,display:this.display,imageSize:this.imageSize}}get host(){return u(this)}};p([b()],n.prototype,"bindings",void 0);p([m("foldedResultList")],n.prototype,"foldedResultListState",void 0);p([m("resultsPerPage")],n.prototype,"resultsPerPageState",void 0);n.style=I;export{n as atomic_insight_folded_result_list};
