import{g as t}from"./p-53b93b76.js";import{u as s}from"./p-bd76e089.js";import{o as i,d as e}from"./p-f5723aee.js";const h="result-component";class n{constructor(t){this.props=t;this.props.store.setLoadingFlag(this.props.loadingFlag);this.props.store.registerResultList(this);this.updateBreakpointsOnce=i((()=>s(this.props.host)))}updateBreakpoints(){this.updateBreakpointsOnce()}getResultId(t,s,i,e){return`${t}${s}${i}${e}`}setNewResultRef(s,i){var e,h;if(i===0){this.firstResultEl=s}if(i!==this.indexOfResultToFocus){return}if(!s.children.length&&!((e=s.shadowRoot)===null||e===void 0?void 0:e.children.length)){return}this.indexOfResultToFocus=undefined;const n=(h=t(s))!==null&&h!==void 0?h:s;this.props.nextNewItemTarget.setTarget(n)}focusOnNextNewResult(){this.indexOfResultToFocus=this.props.getCurrentNumberOfItems();this.props.nextNewItemTarget.focusOnNextTarget()}async focusOnFirstResultAfterNextSearch(){await e();return new Promise((s=>{if(this.props.getIsLoading()){this.firstResultEl=undefined}const i=this.props.engineSubscribe((async()=>{var h;await e();if(!this.props.getIsLoading()&&this.firstResultEl){const e=(h=t(this.firstResultEl))!==null&&h!==void 0?h:this.firstResultEl;this.props.nextNewItemTarget.setTarget(e);this.props.nextNewItemTarget.focus();this.firstResultEl=undefined;i();s()}}))}))}}export{n as I,h as r};
//# sourceMappingURL=p-f3df7d3d.js.map