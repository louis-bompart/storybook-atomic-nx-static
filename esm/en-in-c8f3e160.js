import { c as commonjsGlobal } from './_commonjsHelpers-c9e3b764.js';
import { a as dayjs_min } from './dayjs.min-a2b8725e.js';

var enIn$2 = {exports: {}};

(function (module, exports) {
!function(e,a){module.exports=a(dayjs_min.exports);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),n={name:"en-in",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var a=["th","st","nd","rd"],t=e%100;return "["+e+(a[(t-20)%10]||a[t]||a[0])+"]"}};return t.default.locale(n,null,!0),n}));
}(enIn$2));

const enIn = enIn$2.exports;

const enIn$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), enIn$2.exports, {
	'default': enIn
}));

export { enIn$1 as e };

//# sourceMappingURL=en-in-c8f3e160.js.map