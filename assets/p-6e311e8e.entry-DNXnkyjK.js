import{N as R,O as T}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{M as Y}from"./p-e12016d2-bJLTunAq.js";import{n as c}from"./p-3d32d423-CBVTidVS.js";import{e as h}from"./p-e9c4f463-BPmi-3c5.js";import{s as b}from"./p-10d8f0d4-SiqZ7CcQ.js";import{m as k}from"./p-107c3d7f-BhxinPh-.js";import{e as O}from"./p-f88eced6-DdgettQL.js";import"./p-f5723aee-kxsZMmLK.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-1580513b-3LX64KEr.js";import"./p-529fdce5-yFKSm3-S.js";var p={exports:{}};(function(e,r){(function(o,n){e.exports=n()})(h,function(){return function(o,n,a){var t="h:mm A",i={lastDay:"[Yesterday at] "+t,sameDay:"[Today at] "+t,nextDay:"[Tomorrow at] "+t,nextWeek:"dddd [at] "+t,lastWeek:"[Last] dddd [at] "+t,sameElse:"MM/DD/YYYY"};n.prototype.calendar=function(s,l){var g=l||this.$locale().calendar||i,v=a(s||void 0).startOf("d"),d=this.diff(v,"d",!0),m="sameElse",u=d<-6?m:d<-1?"lastWeek":d<0?"lastDay":d<1?"sameDay":d<2?"nextDay":d<7?"nextWeek":m,f=g[u]||i[u];return typeof f=="function"?f.call(this,a()):this.format(f)}}})})(p);const W=p.exports;var y={exports:{}};(function(e,r){(function(o,n){e.exports=n()})(h,function(){return function(o,n,a){a.updateLocale=function(t,i){var s=a.Ls[t];if(s)return(i?Object.keys(i):[]).forEach(function(l){s[l]=i[l]}),s}}})})(y);const E=y.exports;var x=function(e,r,o,n){var a=arguments.length,t=a<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,o):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,r,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(t=(a<3?i(t):a>3?i(r,o,t):i(r,o))||t);return a>3&&t&&Object.defineProperty(r,o,t),t};c.extend(W);c.extend(E);const D=class{constructor(e){R(this,e),this.field="date",this.format="D/M/YYYY",this.dateToRender=null,this.error=void 0,this.field="date",this.format="D/M/YYYY",this.relativeTime=void 0}updateDateToRender(){const e=Y.getResultProperty(this.result,this.field);if(e===null){this.dateToRender=null;return}const r=b(e);if(!r.isValid()){this.error=new Error(`Field "${this.field}" does not contain a valid date.`),this.dateToRender=null;return}this.relativeTime?(c.updateLocale(this.bindings.interfaceElement.language,{calendar:{sameDay:this.bindings.i18n.t("calendar-same-day"),nextDay:this.bindings.i18n.t("calendar-next-day"),nextWeek:this.bindings.i18n.t("calendar-next-week"),lastDay:this.bindings.i18n.t("calendar-last-day"),lastWeek:this.bindings.i18n.t("calendar-last-week"),sameElse:this.format}}),this.dateToRender=r.calendar()):this.dateToRender=r.format(this.format)}componentWillRender(){this.updateDateToRender()}render(){if(this.dateToRender===null){this.host.remove();return}return this.dateToRender}get host(){return T(this)}};x([k()],D.prototype,"bindings",void 0);x([O()],D.prototype,"result",void 0);export{D as atomic_result_date};
