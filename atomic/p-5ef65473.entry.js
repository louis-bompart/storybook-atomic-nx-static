import{r as e,d as t,h as i,H as s}from"./p-00525453.js";import{I as c}from"./p-6fadd170.js";import{L as a}from"./p-0c7c191e.js";import"./p-1580513b.js";import"./p-9935af75.js";import"./p-e9c4f463.js";import"./p-659d3ea8.js";var n=undefined&&undefined.__decorate||function(e,t,i,s){var c=arguments.length,a=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)if(n=e[r])a=(c<3?n(a):c>3?n(t,i,a):n(t,i))||a;return c>3&&a&&Object.defineProperty(t,i,a),a};const r=class{constructor(i){e(this,i);this.selectSource=t(this,"selectSource",7);this.beginDelayedSelectSource=t(this,"beginDelayedSelectSource",7);this.cancelPendingSelectSource=t(this,"cancelPendingSelectSource",7);this.source=undefined;this.anchorAttributes=undefined;this.error=undefined}resolveResult(e){e.preventDefault();e.stopPropagation();if(this.source){e.detail(this.source)}}render(){return i(s,{key:"f39870d9fb73f730ca505be1b27aa853c053e89b"},i(a,{key:"9a60314204a2d523bc9e880aead3180c910f4a8b",title:this.source.clickUri,href:this.source.clickUri,className:"block truncate",part:"source-url",attributes:this.anchorAttributes,onSelect:()=>this.selectSource.emit(),onBeginDelayedSelect:()=>this.beginDelayedSelectSource.emit(),onCancelPendingSelect:()=>this.cancelPendingSelectSource.emit()},this.source.clickUri),i(a,{key:"ba85b4a8a8320074d0fb0649883b13230fd26170",title:this.source.title,href:this.source.clickUri,attributes:this.anchorAttributes,className:"block",part:"source-title",onSelect:()=>this.selectSource.emit(),onBeginDelayedSelect:()=>this.beginDelayedSelectSource.emit(),onCancelPendingSelect:()=>this.cancelPendingSelectSource.emit()},i("atomic-result-text",{field:"title",default:"no-title",key:this.source.uniqueId})))}};n([c()],r.prototype,"bindings",void 0);export{r as atomic_smart_snippet_source};
//# sourceMappingURL=p-5ef65473.entry.js.map