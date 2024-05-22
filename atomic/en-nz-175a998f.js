import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var enNz$2 = {exports: {}};

(function (module, exports) {
!function(e,a){"object"=='object'&&"undefined"!='object'?module.exports=a(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],a):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_en_nz=a(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),n={name:"en-nz",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),weekStart:1,weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ordinal:function(e){var a=["th","st","nd","rd"],t=e%100;return "["+e+(a[(t-20)%10]||a[t]||a[0])+"]"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}};return t.default.locale(n,null,!0),n}));
}(enNz$2, enNz$2.exports));

const enNz = enNz$2.exports;

const enNz$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), enNz$2.exports, {
	'default': enNz
}));

export { enNz$1 as e };

//# sourceMappingURL=en-nz-175a998f.js.map