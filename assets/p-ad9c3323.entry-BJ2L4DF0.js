import{N as c,g as n,O as u}from"./atomic-breadbox.new.stories-D03zBEda.js";import{U as d}from"./p-794b93a9-Bwn0XXeG.js";import{r as h}from"./p-8f5830b4-EwJYRc8T.js";import{e as l,l as m,r as g}from"./p-0e55feeb-B2it8iNp.js";import{r as p}from"./p-a6063f86-B30eqkoD.js";import{n as b}from"./p-f93ea420-DfVovsGV.js";import"./p-9935af75-BsJQUBM3.js";import"./iframe-DTo5wNcQ.js";import"../sb-preview/runtime.js";import"./p-b0ede3ce-D6gWHOV3.js";import"./p-1580513b-De1d4bsn.js";import"./p-a2fc549d-BcKcO86e.js";import"./p-e9c4f463-BPmi-3c5.js";function y(t,i){return{}}const z=class{constructor(t){c(this,t),this.products=[],this.display="list",this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.error=void 0,this.templateHasError=!1,this.density="normal",this.imageSize="icon",this.ariaLabelGenerator=void 0}async setRenderFunction(t){this.itemRenderingFunction=t}componentWillLoad(){try{p(t=>(this.bindings=t,this.initialize()),this.host)}catch(t){this.error=t}}getLink(t){var i;const e=t.tagName==="ATOMIC-PRODUCT"?t:t==null?void 0:t.querySelector("atomic-product");return((i=e==null?void 0:e.shadowRoot)===null||i===void 0?void 0:i.querySelector("atomic-product-link a"))||null}handleLinkClick(t,i){const e=o=>t.setAttribute("target",o),r=t.getAttribute("target");return i&&e("_blank"),t.click(),i&&e(r||""),!0}renderItems(){if(!this.bindings.suggestedQuery()||this.bindings.store.isMobile())return[];const i=(this.instantProducts.state.products.length?this.instantProducts.state.products:this.products).map(e=>{var r;return{...l(this.bindings.i18n,((r=this.ariaLabelGenerator)===null||r===void 0?void 0:r.call(this,this.bindings,e))||e.ec_name,e.permanentid),content:n("atomic-product",{key:`instant-product-${h(e.permanentid)}`,part:"outline",product:e,interactiveProduct:y(),display:this.display,density:this.density,imageSize:this.imageSize,content:this.itemTemplateProvider.getTemplateContent(e),stopPropagation:!1,renderingFunction:this.itemRenderingFunction}),onSelect:s=>{const a=this.getLink(s.target);a&&this.handleLinkClick(a,s.ctrlKey||s.metaKey)}}});if(i.length){const e=m(this.bindings.i18n);i.push({...e,content:n(g,{i18n:this.bindings.i18n}),onSelect:()=>{this.bindings.clearSuggestions(),this.bindings.searchBoxController.updateText(this.instantProducts.state.query),this.bindings.searchBoxController.submit()}})}return i}initialize(){return this.instantProducts=d(this.bindings.engine,{options:{}}),this.itemTemplateProvider=new b({includeDefaultTemplate:!0,templateElements:Array.from(this.host.querySelectorAll("atomic-product-template")),getResultTemplateRegistered:()=>!0,setResultTemplateRegistered:()=>{},getTemplateHasError:()=>this.templateHasError,setTemplateHasError:t=>{this.templateHasError=t}}),{position:Array.from(this.host.parentNode.children).indexOf(this.host),panel:"right",onSuggestedQueryChange:t=>(this.instantProducts.updateQuery(t),this.onSuggestedQueryChange()),renderItems:()=>this.renderItems()}}onSuggestedQueryChange(){return!this.bindings.getSuggestionElements().length&&!this.bindings.searchBoxController.state.value&&console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-commerce-search-box-query-suggestions or atomic-commerce-search-box-recent-queries in your search box in order to see some instant products."),new Promise(t=>{const i=this.instantProducts.subscribe(()=>{const e=this.instantProducts.state;e.isLoading||(e.products.length&&(this.products=e.products),i(),t())})})}render(){if(this.error)return n("atomic-component-error",{key:"66f6eed88fc35b2b84f2109912bb265b93722ca1",element:this.host,error:this.error})}get host(){return u(this)}};export{z as atomic_commerce_search_box_instant_products};
