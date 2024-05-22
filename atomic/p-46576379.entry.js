import{r as t,h as s,g as e}from"./p-00525453.js";import{W as i,V as r}from"./p-e12016d2.js";import{S as n}from"./p-cfb3c589.js";import{g as h,Q as o,a as c,b as a}from"./p-484590fe.js";import{d as u}from"./p-2130c607.js";import{C as d}from"./p-c280cd05.js";import{a as m,S as p}from"./p-0943c4bd.js";import{o as f}from"./p-f5723aee.js";import{g as l,R as g,a as b,b as j,c as y,d as S}from"./p-82ef9a5b.js";import"./p-8f5830b4.js";import"./p-1580513b.js";import"./p-e9c4f463.js";const I=class{constructor(s){t(this,s);this.error=undefined;this.icon=undefined;this.maxWithQuery=undefined;this.maxWithoutQuery=undefined}componentWillLoad(){try{u((t=>{this.bindings=t;return this.initialize()}),this.host)}catch(t){this.error=t}}initialize(){const t=this.bindings.engine;const{registerQuerySuggest:s,fetchQuerySuggestions:e}=i(t);t.dispatch(s({id:this.bindings.id,count:this.bindings.numberOfQueries}));return{position:Array.from(this.host.parentNode.children).indexOf(this.host),onInput:()=>t.dispatch(e({id:this.bindings.id})),renderItems:()=>this.renderItems()}}renderItems(){const t=this.bindings.searchBoxController.state.value!=="";const s=t?this.maxWithQuery:this.maxWithoutQuery;return this.bindings.searchBoxController.state.suggestions.slice(0,s).map((t=>this.renderItem(t)))}renderItem(t){const e=this.bindings.searchBoxController.state.value!=="";const i=h(t,this.bindings.i18n);return{...i,content:s(a,null,s(c,{icon:this.icon||n,hasSuggestion:this.bindings.getSuggestions().length>1}),s(o,{suggestion:t,hasQuery:e})),onSelect:()=>{this.bindings.searchBoxController.selectSuggestion(t.rawValue)}}}render(){if(this.error){return s("atomic-component-error",{key:"4ec61e56d2f712e9fdee38cb448c4d8cbcda5972",element:this.host,error:this.error})}}get host(){return e(this)}};const _=class{constructor(s){t(this,s);this.maxWithQuery=3;this.warnUser=f((()=>this.bindings.engine.logger.warn("Because analytics are disabled, the recent queries feature is deactivated.")));this.error=undefined;this.icon=undefined;this.maxWithQuery=3;this.maxWithoutQuery=undefined}componentWillLoad(){try{u((t=>{this.bindings=t;return this.initialize()}),this.host)}catch(t){this.error=t}}renderIcon(){return this.icon||d}initialize(){this.storage=new m;this.recentQueriesList=r(this.bindings.engine,{initialState:{queries:this.retrieveLocalStorage()},options:{maxLength:1e3,clearFilters:this.bindings.clearFilters}});this.recentQueriesList.subscribe((()=>this.updateLocalStorage()));return{position:Array.from(this.host.parentNode.children).indexOf(this.host),renderItems:()=>this.renderItems()}}retrieveLocalStorage(){return this.storage.getParsedJSON(p.RECENT_QUERIES,[])}updateLocalStorage(){if(!this.recentQueriesList.state.analyticsEnabled){return this.disableFeature()}return this.storage.setJSON(p.RECENT_QUERIES,this.recentQueriesList.state.queries)}disableFeature(){this.warnUser();this.storage.removeItem(p.RECENT_QUERIES)}renderItems(){if(!this.recentQueriesList.state.analyticsEnabled){return[]}const t=this.bindings.searchBoxController.state.value;const s=t!=="";const e=s?this.maxWithQuery:this.maxWithoutQuery;const i=this.recentQueriesList.state.queries.filter((s=>s!==t&&s.toLowerCase().startsWith(t.toLowerCase()))).slice(0,e);const r=i.map((t=>this.renderItem(t)));if(r.length){r.unshift(this.renderClear())}return r}renderClear(){const t=l(this.bindings.i18n);return{...t,content:s(g,{i18n:this.bindings.i18n}),onSelect:()=>{this.recentQueriesList.clear();this.bindings.triggerSuggestions()}}}renderItem(t){const e=this.bindings.searchBoxController.state.value;const i=b(t,this.bindings.i18n);return{...i,content:s(S,null,s(y,{icon:this.renderIcon()}),s(j,{query:e,value:t})),onSelect:()=>{if(this.bindings.isStandalone){this.bindings.searchBoxController.updateText(t);this.bindings.searchBoxController.submit();return}this.recentQueriesList.executeRecentQuery(this.recentQueriesList.state.queries.indexOf(t))}}}render(){if(this.error){return s("atomic-component-error",{key:"6ee4cd8d0395136d2b20800984a6312901ed2dd0",element:this.host,error:this.error})}}get host(){return e(this)}};export{I as atomic_search_box_query_suggestions,_ as atomic_search_box_recent_queries};
//# sourceMappingURL=p-46576379.entry.js.map