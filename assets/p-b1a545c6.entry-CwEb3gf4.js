import{N as g,M as u,g as d,O as f}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{o as p,U as m,j as I,b as y,i as b,O as z}from"./p-db60f779-DjDQLiAT.js";import{e as c,Y as v,X as l}from"./p-c510e89e-CtgbwjUj.js";import{i as C}from"./p-b6da4b1f-BEE80E8s.js";import{r as H,e as A,c as w,o as P,t as E}from"./p-0db098e9-T3R0h4MK.js";import{d as F}from"./p-d74ceb39-DnFFOJRK.js";import"./p-e12016d2-bJLTunAq.js";import"./p-3d32d423-CBVTidVS.js";import"./p-f5723aee-D-iZ1npx.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-0V_eukm8.js";import"../sb-preview/runtime.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-7e7b1a62-C6-3oFSh.js";function O(e,t){var i;switch((i=e.analytics)===null||i===void 0?void 0:i.analyticsMode){case"next":return H(e,t);case"legacy":default:return R(e,t)}}function R(e,t){const i=(a,s)=>L(a,s,e),n={analyticsClientMiddleware:i,enabled:t,...A(),...w()};return e.analytics?{...n,...e.analytics,analyticsClientMiddleware:i}:n}function L(e,t,i){let n=P(e,t,i);return n=E(n),n}function T(){return{...F({loadingFlags:[],facets:{},numericFacets:{},dateFacets:{},categoryFacets:{},iconAssetsPath:"",facetElements:[],fieldsToInclude:[]}),getUniqueIDFromEngine(t){return t.state.recommendation.searchUid}}}var j=function(e,t,i,n){var a=arguments.length,s=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};const h="firstRecommendationExecuted",M=class{constructor(e){g(this,e),this.store=T(),this.initialized=!1,this.analytics=!0,this.i18n=c.createInstance(),this.localizationCompatibilityVersion="v3",this.language="en",this.fieldsToInclude="[]",this.languageAssetsPath="./lang",this.iconAssetsPath="./assets",this.error=void 0,this.pipeline=void 0,this.searchHub=void 0,this.timezone=void 0,this.engine=void 0,this.analytics=!0,this.i18n=c.createInstance(),this.logLevel=void 0,this.localizationCompatibilityVersion="v3",this.language="en",this.fieldsToInclude="[]",this.languageAssetsPath="./lang",this.iconAssetsPath="./assets",this.CspNonce=void 0,this.commonInterfaceHelper=new v(this,"CoveoAtomicRecs")}get bindings(){return{engine:this.engine,i18n:this.i18n,store:this.store,interfaceElement:this.host}}connectedCallback(){this.store.setLoadingFlag(h)}componentWillLoad(){this.CspNonce&&u(this.CspNonce)}initialize(e){return this.internalInitialization(()=>this.initEngine(e))}initializeWithRecommendationEngine(e){return this.pipeline&&this.pipeline!==e.state.pipeline&&console.warn(l("recommendation","query pipeline")),this.searchHub&&this.searchHub!==e.state.searchHub&&console.warn(l("recommendation","search hub")),this.internalInitialization(()=>this.engine=e)}async getRecommendations(){if(this.commonInterfaceHelper.engineIsCreated(this.engine)){if(!this.initialized){console.error('You have to wait until the "initialize" promise is fulfilled before executing a search.',this.host);return}this.engine.dispatch(p(this.engine).getRecommendations())}}async getOrganizationEndpoints(e,t="prod"){return m(e,t)}updateIconAssetsPath(){this.store.set("iconAssetsPath",this.iconAssetsPath)}handleInitialization(e){this.commonInterfaceHelper.onComponentInitializing(e)}updateLanguage(){if(!this.commonInterfaceHelper.engineIsCreated(this.engine))return;const{updateSearchConfiguration:e}=I(this.engine);this.engine.dispatch(e({locale:this.language})),this.commonInterfaceHelper.onLanguageChange()}toggleAnalytics(){this.commonInterfaceHelper.engineIsCreated(this.engine)&&this.commonInterfaceHelper.onAnalyticsChange()}registerFieldsToInclude(){const e=y.concat([...this.fieldsToInclude].filter(t=>!!t));this.engine.dispatch(b(this.engine).registerFieldsToInclude(e))}async internalInitialization(e){await this.commonInterfaceHelper.onInitialization(e),this.pipeline=this.engine.state.pipeline,this.searchHub=this.engine.state.searchHub,this.store.unsetLoadingFlag(h),this.initialized=!0}initEngine(e){var t;const i=O(e,this.analytics);try{this.engine=z({configuration:{pipeline:this.pipeline,searchHub:(t=this.searchHub)!==null&&t!==void 0?t:"default",locale:this.language,timezone:this.timezone,...e,analytics:i},loggerOptions:{level:this.logLevel}})}catch(n){throw this.error=n,n}}render(){return this.engine&&d("slot",{key:"f3683a76d3555fabc6e28f3eb1ee6c2091faa2f2"})}get host(){return f(this)}static get watchers(){return{iconAssetsPath:["updateIconAssetsPath"],language:["updateLanguage"],analytics:["toggleAnalytics"]}}};j([C()],M.prototype,"fieldsToInclude",void 0);export{M as atomic_recs_interface};
