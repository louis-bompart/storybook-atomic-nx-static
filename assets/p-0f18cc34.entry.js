import{r as s,d as t,h as o,H as i,g as c}from"./p-00525453.js";import{q as e,u as r}from"./p-f5723aee.js";import"./p-e9c4f463.js";const n=class{constructor(o){s(this,o);this.focusEnter=t(this,"focusEnter",7);this.focusExit=t(this,"focusExit",7);this.focusWasContained=this.containsFocus}get containsFocus(){const s=r();return!!s&&e(this.host,s)}onFocusIn(){this.onFocusChanged()}onFocusOut(){this.onFocusChanged()}onFocusChanged(){const s=this.containsFocus;if(s===this.focusWasContained){return}this.focusWasContained=s;s?this.focusEnter.emit():this.focusExit.emit()}render(){return o(i,{key:"afb5c5a1203e99b0cb0c44f58a890533e180b457",style:{display:"contents"}})}get host(){return c(this)}};export{n as atomic_focus_detector};
//# sourceMappingURL=p-0f18cc34.entry.js.map