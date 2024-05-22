import{r as t,s as i,h as e,g as s}from"./p-00525453.js";import{O as n,g as a,_ as o,p as r,b as h,I as c}from"./p-db60f779.js";import{i as l,C as u,m as d}from"./p-1172172e.js";import{A as f}from"./p-a4fb8fa5.js";import{g as p,c as g,d as m,a as y,b}from"./p-7961e6ea.js";import{c as j}from"./p-01968da6.js";import"./p-e9c4f463.js";import"./p-e12016d2.js";import"./p-97890486.js";import"./p-9935af75.js";import"./p-7e7b1a62.js";function v(t,i){var e;switch((e=t.analytics)===null||e===void 0?void 0:e.analyticsMode){case"next":return p(t,i);case"legacy":default:return A(t,i)}}function A(t,i){const e=(i,e)=>I(i,e,t);const s={analyticsClientMiddleware:e,enabled:i,...g(),...m()};if(t.analytics){return{...s,...t.analytics,analyticsClientMiddleware:e}}return s}function I(t,i,e){let s=y(t,i,e);s=b(s);return s}function w(){const t=j({loadingFlags:[],facets:{},numericFacets:{},dateFacets:{},categoryFacets:{},iconAssetsPath:"",facetElements:[],fieldsToInclude:[]});return{...t,getUniqueIDFromEngine(t){return t.state.recommendation.searchUid}}}var z=undefined&&undefined.__decorate||function(t,i,e,s){var n=arguments.length,a=n<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,i,e,s);else for(var r=t.length-1;r>=0;r--)if(o=t[r])a=(n<3?o(a):n>3?o(i,e,a):o(i,e))||a;return n>3&&a&&Object.defineProperty(i,e,a),a};const E="firstRecommendationExecuted";const R=class{constructor(i){t(this,i);this.store=w();this.initialized=false;this.analytics=true;this.i18n=l.createInstance();this.localizationCompatibilityVersion="v3";this.language="en";this.fieldsToInclude="[]";this.languageAssetsPath="./lang";this.iconAssetsPath="./assets";this.error=undefined;this.pipeline=undefined;this.searchHub=undefined;this.timezone=undefined;this.engine=undefined;this.analytics=true;this.i18n=l.createInstance();this.logLevel=undefined;this.localizationCompatibilityVersion="v3";this.language="en";this.fieldsToInclude="[]";this.languageAssetsPath="./lang";this.iconAssetsPath="./assets";this.CspNonce=undefined;this.commonInterfaceHelper=new u(this,"CoveoAtomicRecs")}get bindings(){return{engine:this.engine,i18n:this.i18n,store:this.store,interfaceElement:this.host}}connectedCallback(){this.store.setLoadingFlag(E)}componentWillLoad(){if(this.CspNonce){i(this.CspNonce)}}initialize(t){return this.internalInitialization((()=>this.initEngine(t)))}initializeWithRecommendationEngine(t){if(this.pipeline&&this.pipeline!==t.state.pipeline){console.warn(d("recommendation","query pipeline"))}if(this.searchHub&&this.searchHub!==t.state.searchHub){console.warn(d("recommendation","search hub"))}return this.internalInitialization((()=>this.engine=t))}async getRecommendations(){if(!this.commonInterfaceHelper.engineIsCreated(this.engine)){return}if(!this.initialized){console.error('You have to wait until the "initialize" promise is fulfilled before executing a search.',this.host);return}this.engine.dispatch(n(this.engine).getRecommendations())}async getOrganizationEndpoints(t,i="prod"){return a(t,i)}updateIconAssetsPath(){this.store.set("iconAssetsPath",this.iconAssetsPath)}handleInitialization(t){this.commonInterfaceHelper.onComponentInitializing(t)}updateLanguage(){if(!this.commonInterfaceHelper.engineIsCreated(this.engine)){return}const{updateSearchConfiguration:t}=o(this.engine);this.engine.dispatch(t({locale:this.language}));this.commonInterfaceHelper.onLanguageChange()}toggleAnalytics(){if(!this.commonInterfaceHelper.engineIsCreated(this.engine)){return}this.commonInterfaceHelper.onAnalyticsChange()}registerFieldsToInclude(){const t=c.concat([...this.fieldsToInclude].filter((t=>!!t)));this.engine.dispatch(r(this.engine).registerFieldsToInclude(t))}async internalInitialization(t){await this.commonInterfaceHelper.onInitialization(t);this.pipeline=this.engine.state.pipeline;this.searchHub=this.engine.state.searchHub;this.store.unsetLoadingFlag(E);this.initialized=true}initEngine(t){var i;const e=v(t,this.analytics);try{this.engine=h({configuration:{pipeline:this.pipeline,searchHub:(i=this.searchHub)!==null&&i!==void 0?i:"default",locale:this.language,timezone:this.timezone,...t,analytics:e},loggerOptions:{level:this.logLevel}})}catch(t){this.error=t;throw t}}render(){return this.engine&&e("slot",{key:"e57f3ca4a12dff5519647992175d19c5e3e31eb6"})}get host(){return s(this)}static get watchers(){return{iconAssetsPath:["updateIconAssetsPath"],language:["updateLanguage"],analytics:["toggleAnalytics"]}}};z([f()],R.prototype,"fieldsToInclude",void 0);export{R as atomic_recs_interface};
//# sourceMappingURL=p-b6101a2a.entry.js.map