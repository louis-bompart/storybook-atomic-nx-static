import{r as t}from"./p-00525453.js";import{S as i,b as n}from"./p-7e7b1a62.js";import{o as s}from"./p-e12016d2.js";import{d as r}from"./p-97890486.js";import{c as e}from"./p-e9c4f463.js";import{I as u}from"./p-6fadd170.js";import{R as h}from"./p-5a302484.js";import"./p-1580513b.js";import"./p-9935af75.js";import"./p-231defbf.js";var o={exports:{}};(function(t,i){!function(i,n){t.exports=n()}(e,(function(){var t,i,n=1e3,s=6e4,r=36e5,e=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=31536e6,o=2628e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:h,months:o,days:e,hours:r,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},a=function(t){return t instanceof j},m=function(t,i,n){return new j(t,n,i.$l)},d=function(t){return i.p(t)+"s"},p=function(t){return t<0},l=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},M=function(t,i){return t?p(t)?{negative:!0,format:""+v(t)+i}:{negative:!1,format:""+t+i}:{negative:!1,format:""}},j=function(){function p(t,i,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),i)return m(t*c[d(i)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(i){s.$d[d(i)]=t[i]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(f);if(r){var e=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=e[0],this.$d.months=e[1],this.$d.weeks=e[2],this.$d.days=e[3],this.$d.hours=e[4],this.$d.minutes=e[5],this.$d.seconds=e[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(i,n){return i+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=l(t/h),t%=h,this.$d.months=l(t/o),t%=o,this.$d.days=l(t/e),t%=e,this.$d.hours=l(t/r),t%=r,this.$d.minutes=l(t/s),t%=s,this.$d.seconds=l(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=M(this.$d.years,"Y"),i=M(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=M(n,"D"),r=M(this.$d.hours,"H"),e=M(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3,u=Math.round(1e3*u)/1e3);var h=M(u,"S"),o=t.negative||i.negative||s.negative||r.negative||e.negative||h.negative,f=r.format||e.format||h.format?"T":"",c=(o?"-":"")+"P"+t.format+i.format+s.format+f+r.format+e.format+h.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return n.replace(u,(function(t,i){return i||String(s[t])}))},v.as=function(t){return this.$ms/c[d(t)]},v.get=function(t){var i=this.$ms,n=d(t);return"milliseconds"===n?i%=1e3:i="weeks"===n?l(i/c[n]):this.$d[n],i||0},v.add=function(t,i,n){var s;return s=i?t*c[d(i)]:a(t)?t.$ms:m(t,this).$ms,m(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,i){return this.add(t,i,!0)},v.locale=function(t){var i=this.clone();return i.$l=t,i},v.clone=function(){return m(this.$ms,this)},v.humanize=function(i){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}(),y=function(t,i,n){return t.add(i.years()*n,"y").add(i.months()*n,"M").add(i.days()*n,"d").add(i.hours()*n,"h").add(i.minutes()*n,"m").add(i.seconds()*n,"s").add(i.milliseconds()*n,"ms")};return function(n,s,r){t=r,i=r().$utils(),r.duration=function(t,i){var n=r.locale();return m(t,{$l:n},i)},r.isDuration=a;var e=s.prototype.add,u=s.prototype.subtract;s.prototype.add=function(t,i){return a(t)?y(this,t,1):e.bind(this)(t,i)},s.prototype.subtract=function(t,i){return a(t)?y(this,t,-1):u.bind(this)(t,i)}}}))})(o);const f=o.exports;var c=undefined&&undefined.__decorate||function(t,i,n,s){var r=arguments.length,e=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,n):s,u;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")e=Reflect.decorate(t,i,n,s);else for(var h=t.length-1;h>=0;h--)if(u=t[h])e=(r<3?u(e):r>3?u(i,n,e):u(i,n))||e;return r>3&&e&&Object.defineProperty(i,n,e),e};r.extend(f);const a=class{constructor(i){t(this,i);this.unit="ms";this.error=undefined;this.field=undefined;this.unit="ms";this.format=undefined}initialize(){new i({field:new n({required:true,emptyAllowed:false})}).validate({field:this.field});if(!this.value){this.error=new Error(`No value found for field ${this.field}`);return}if(isNaN(this.value)){this.error=new Error(`Value ${this.value} for field ${this.field} is not a number`)}}render(){const t=r.duration(this.value,this.unit);if(this.format){return t.format(this.format)}if(t.asYears()>=1){return this.bindings.i18n.t("approx_year",{count:Math.round(t.asYears())})}if(t.asMonths()>=1){return this.bindings.i18n.t("approx_month",{count:Math.round(t.asMonths())})}if(t.asDays()>=1){return this.bindings.i18n.t("approx_day",{count:Math.round(t.asDays())})}return t.format("HH:mm:ss")}get value(){return s.getResultProperty(this.result,this.field)}};c([u()],a.prototype,"bindings",void 0);c([h()],a.prototype,"result",void 0);export{a as atomic_result_timespan};
//# sourceMappingURL=p-7623484e.entry.js.map