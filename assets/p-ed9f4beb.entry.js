import{r as t,g as e}from"./p-00525453.js";import{o as s}from"./p-abea0bd2.js";import{d as n}from"./p-3d32d423.js";import{c as i}from"./p-e9c4f463.js";import{p as a}from"./p-b80efb1e.js";import{I as r}from"./p-107c3d7f.js";import{R as o}from"./p-849728b4.js";import"./p-1580513b.js";import"./p-f5723aee.js";import"./p-529fdce5.js";var d={exports:{}};(function(t,e){!function(e,s){t.exports=s()}(i,(function(){return function(t,e,s){var n="h:mm A",i={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};e.prototype.calendar=function(t,e){var n=e||this.$locale().calendar||i,a=s(t||void 0).startOf("d"),r=this.diff(a,"d",!0),o="sameElse",d=r<-6?o:r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":o,f=n[d]||i[d];return"function"==typeof f?f.call(this,s()):this.format(f)}}}))})(d);const f=d.exports;var c={exports:{}};(function(t,e){!function(e,s){t.exports=s()}(i,(function(){return function(t,e,s){s.updateLocale=function(t,e){var n=s.Ls[t];if(n)return(e?Object.keys(e):[]).forEach((function(t){n[t]=e[t]})),n}}}))})(c);const l=c.exports;var u=undefined&&undefined.__decorate||function(t,e,s,n){var i=arguments.length,a=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,s):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,s,n);else for(var o=t.length-1;o>=0;o--)if(r=t[o])a=(i<3?r(a):i>3?r(e,s,a):r(e,s))||a;return i>3&&a&&Object.defineProperty(e,s,a),a};n.extend(f);n.extend(l);const h=class{constructor(e){t(this,e);this.field="date";this.format="D/M/YYYY";this.dateToRender=null;this.error=undefined;this.field="date";this.format="D/M/YYYY";this.relativeTime=undefined}updateDateToRender(){const t=s.getResultProperty(this.result,this.field);if(t===null){this.dateToRender=null;return}const e=a(t);if(!e.isValid()){this.error=new Error(`Field "${this.field}" does not contain a valid date.`);this.dateToRender=null;return}if(this.relativeTime){n.updateLocale(this.bindings.interfaceElement.language,{calendar:{sameDay:this.bindings.i18n.t("calendar-same-day"),nextDay:this.bindings.i18n.t("calendar-next-day"),nextWeek:this.bindings.i18n.t("calendar-next-week"),lastDay:this.bindings.i18n.t("calendar-last-day"),lastWeek:this.bindings.i18n.t("calendar-last-week"),sameElse:this.format}});this.dateToRender=e.calendar()}else{this.dateToRender=e.format(this.format)}}componentWillRender(){this.updateDateToRender()}render(){if(this.dateToRender===null){this.host.remove();return}return this.dateToRender}get host(){return e(this)}};u([r()],h.prototype,"bindings",void 0);u([o()],h.prototype,"result",void 0);export{h as atomic_result_date};
//# sourceMappingURL=p-ed9f4beb.entry.js.map