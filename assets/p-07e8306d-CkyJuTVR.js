import{g as r}from"./atomic-breadbox.new.stories-D03zBEda.js";import{s as l}from"./p-395a891a-B9sLnel5.js";import{r as d}from"./p-55d2bcf3-DJQIxeeN.js";import{c as u}from"./p-9935af75-BsJQUBM3.js";import{p as h}from"./p-0f4cb99e-B8DyHYBq.js";import{r as o}from"./p-6fadd170-Cg3VAl32.js";import{n as p}from"./p-d1aad506-D1ww1j4r.js";import{c,i as f,n as m}from"./p-049d5dc4-DrZx4y7d.js";import{u as g}from"./p-19c3a01a-B_AmbOFf.js";import{a as v}from"./p-892039c7-BDAyNJqn.js";import{s as b}from"./p-b58f0ba6-DIQewScl.js";class Y{constructor(e){this.props=e,this.manualTimeframes=[],this.facetId=this.determineFacetId,this.props.setFacetId(this.facetId),this.manualTimeframes=this.getManualTimeframes(),this.manualTimeframes.length>0&&(this.facetForDateRange=this.props.initializeFacetForDateRange(this.currentValues)),this.props.withDatePicker&&(this.facetForDatePicker=this.props.initializeFacetForDatePicker(),this.filter=this.props.initializeFilter()),(this.facetForDateRange||this.filter)&&(this.dependenciesManager=this.props.buildDependenciesManager()),this.registerFacetToStore()}get determineFacetId(){return this.props.facetId?this.props.facetId:this.props.bindings.store.get("dateFacets")[this.props.field]?u(`${this.props.field}_`):this.props.field}get enabled(){var e,t,s,i;return(i=(t=(e=this.facetForDateRange)===null||e===void 0?void 0:e.state.enabled)!==null&&t!==void 0?t:(s=this.filter)===null||s===void 0?void 0:s.state.enabled)!==null&&i!==void 0?i:!0}get valuesToRender(){var e;return((e=this.facetForDateRange)===null||e===void 0?void 0:e.state.values.filter(t=>t.numberOfResults||t.state!=="idle"))||[]}get shouldRenderValues(){return!this.hasInputRange&&!!this.valuesToRender.length}get shouldRenderFacet(){return this.shouldRenderInput||this.shouldRenderValues}get shouldRenderInput(){var e,t;return p({hasInput:this.props.withDatePicker,hasInputRange:this.hasInputRange,searchStatusState:this.props.getSearchStatusState(),facetValues:((t=(e=this.facetForDatePicker)===null||e===void 0?void 0:e.state)===null||t===void 0?void 0:t.values)||[]})}get hasValues(){var e;return!((e=this.facetForDatePicker)===null||e===void 0)&&e.state.values.length?!0:!!this.valuesToRender.length}get numberOfSelectedValues(){var e,t,s;return!((t=(e=this.filter)===null||e===void 0?void 0:e.state)===null||t===void 0)&&t.range?1:((s=this.facetForDateRange)===null||s===void 0?void 0:s.state.values.filter(({state:i})=>i==="selected").length)||0}get hasInputRange(){var e;return!!(!((e=this.filter)===null||e===void 0)&&e.state.range)}get currentValues(){return this.manualTimeframes.map(({period:e,amount:t,unit:s})=>e==="past"?this.props.buildDateRange({start:{period:e,unit:s,amount:t},end:{period:"now"}}):this.props.buildDateRange({start:{period:"now"},end:{period:e,unit:s,amount:t}}))}disconnectedCallback(){var e;this.props.host.isConnected||(e=this.dependenciesManager)===null||e===void 0||e.stopWatching()}get isHidden(){return!this.shouldRenderFacet||!this.enabled}registerFacetToStore(){const e={label:()=>this.props.bindings.i18n.t(this.props.label),facetId:this.facetId,element:this.props.host,isHidden:()=>this.isHidden};this.props.bindings.store.registerFacet("dateFacets",{...e,format:t=>this.formatFacetValue(t)}),h(this.props.host,{...e,hasValues:()=>this.hasValues,numberOfActiveValues:()=>this.numberOfSelectedValues}),this.filter&&(this.props.bindings.store.state.dateFacets[this.filter.state.facetId]=this.props.bindings.store.state.dateFacets[this.facetId])}getManualTimeframes(){return Array.from(this.props.host.querySelectorAll("atomic-timeframe")).map(({label:e,amount:t,unit:s,period:i})=>({label:e,amount:t,unit:s,period:i}))}formatFacetValue(e){try{const t=this.props.deserializeRelativeDate(e.start),s=t.period==="past"?t:this.props.deserializeRelativeDate(e.end),i=this.getManualTimeframes().find(a=>a.period===s.period&&a.unit===s.unit&&a.amount===s.amount);return i!=null&&i.label?d(this.props.field,i.label,this.props.bindings.i18n):this.props.bindings.i18n.t(`${s.period}-${s.unit}`,{count:s.amount})}catch{return this.props.bindings.i18n.t("to",{start:l(e.start).format("YYYY-MM-DD"),end:l(e.end).format("YYYY-MM-DD")})}}renderValues(){return this.renderValuesContainer(this.valuesToRender.map(e=>this.renderValue(e)))}renderValue(e){const t=this.formatFacetValue(e),s=e.state==="selected",i=e.state==="excluded";return r(v,{displayValue:t,isSelected:s,numberOfResults:e.numberOfResults,i18n:this.props.bindings.i18n,onClick:()=>this.facetForDateRange.toggleSingleSelect(e)},r(g,{displayValue:t,isSelected:s,isExcluded:i}))}renderValuesContainer(e){return r(b,{i18n:this.props.bindings.i18n,label:this.props.label},r("ul",{class:"mt-3",part:"values"},e))}renderHeader(e,t,s){return r(c,{i18n:this.props.bindings.i18n,label:this.props.label,onClearFilters:()=>{var i,a,n;if(t.focusAfterSearch(),!((i=this.filter)===null||i===void 0)&&i.state.range){(a=this.filter)===null||a===void 0||a.clear();return}(n=this.facetForDateRange)===null||n===void 0||n.deselectAll()},numberOfActiveValues:this.numberOfSelectedValues,isCollapsed:e,headingLevel:this.props.headingLevel,onToggleCollapse:s,headerRef:i=>t.setTarget(i)})}renderDateInput(){return r("atomic-facet-date-input",{min:this.props.min,max:this.props.max,bindings:this.props.bindings,label:this.props.label,filter:this.filter,filterState:this.filter.state})}render({hasError:e,firstSearchExecuted:t,isCollapsed:s,headerFocus:i,onToggleCollapse:a}){return e||!this.enabled?r(o,null):t?this.shouldRenderFacet?r(m,null,this.renderHeader(s,i,a),!s&&[this.shouldRenderValues&&this.renderValues(),this.shouldRenderInput&&this.renderDateInput()]):r(o,null):r(f,{numberOfValues:this.currentValues.length,isCollapsed:s})}}export{Y as p};