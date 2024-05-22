import{h as e}from"./p-00525453.js";import{u as t}from"./p-7b70d542.js";import{o as r}from"./p-9935af75.js";import{B as s}from"./p-c58ca89b.js";class a{constructor(e){this.props=e;this.updateBreakpoints=r((()=>t(this.props.getHost())))}sendFeedback(){if(this.props.getCurrentAnswer()==="other"){this.props.getSmartSnippet().sendDetailedFeedback(this.props.getDetailsInputRef().value)}else{this.props.getSmartSnippet().sendFeedback(this.props.getCurrentAnswer())}this.props.getFeedbackSent().emit();this.props.setIsOpen(false)}close(){this.props.setIsOpen(false);this.props.getSmartSnippet().closeFeedbackModal()}renderHeader(){return e("h1",{slot:"header"},this.props.getBindings().i18n.t("smart-snippet-feedback-explain-why"))}renderOptions(){const t=[{id:"does-not-answer",localeKey:"smart-snippet-feedback-reason-does-not-answer",correspondingAnswer:"does_not_answer"},{id:"partially-answers",localeKey:"smart-snippet-feedback-reason-partially-answers",correspondingAnswer:"partially_answers"},{id:"was-not-a-question",localeKey:"smart-snippet-feedback-reason-was-not-a-question",correspondingAnswer:"was_not_a_question"},{id:"other",localeKey:"smart-snippet-feedback-reason-other",correspondingAnswer:"other"}];return e("fieldset",null,e("legend",{part:"reason-title",class:"font-bold text-on-background text-lg"},this.props.getBindings().i18n.t("smart-snippet-feedback-select-reason")),t.map((({id:t,localeKey:r,correspondingAnswer:s})=>e("div",{class:"flex items-center",key:t,part:"reason"},e("input",{part:"reason-radio",type:"radio",name:"answer",id:t,checked:this.props.getCurrentAnswer()===s,onChange:e=>{var t;return((t=e.currentTarget)===null||t===void 0?void 0:t.checked)&&this.props.setCurrentAnswer(s)},class:"mr-2 w-4 h-4",required:true}),e("label",{part:"reason-label",htmlFor:t},this.props.getBindings().i18n.t(r))))))}renderDetails(){if(this.props.getCurrentAnswer()!=="other"){return}return e("fieldset",null,e("legend",{part:"details-title",class:"font-bold text-on-background text-lg"},this.props.getBindings().i18n.t("details")),e("textarea",{part:"details-input",name:"answer-details",ref:e=>this.props.setDetailsInputRef(e),class:"mt-2 p-2 w-full text-base leading-5 border border-neutral resize-none rounded",rows:4,required:true}))}renderBody(){return e("form",{part:"form",id:this.props.formId,slot:"body",onSubmit:e=>{e.preventDefault();this.sendFeedback()},class:"flex flex-col gap-8"},this.renderOptions(),this.renderDetails())}renderFooter(){return e("div",{part:"buttons",slot:"footer",class:"flex justify-end gap-2"},e(s,{part:"cancel-button",style:"outline-neutral",class:"text-primary",onClick:()=>this.close()},this.props.getBindings().i18n.t("cancel")),e(s,{part:"submit-button",style:"primary",type:"submit",form:this.props.formId},this.props.getBindings().i18n.t("feedback-send")))}render(){this.updateBreakpoints();return e("atomic-modal",{fullscreen:false,source:this.props.getSource(),container:this.props.getHost(),isOpen:this.props.getIsOpen(),close:()=>this.close(),exportparts:"backdrop,container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper"},this.renderHeader(),this.renderBody(),this.renderFooter())}}export{a as S};
//# sourceMappingURL=p-b1640ffa.js.map