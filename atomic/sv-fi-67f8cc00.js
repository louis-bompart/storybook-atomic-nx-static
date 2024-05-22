import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var svFi$2 = {exports: {}};

(function (module, exports) {
!function(e,t){"object"=='object'&&"undefined"!='object'?module.exports=t(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_sv_fi=t(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),d={name:"sv-fi",weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){var t=e%10;return "["+e+(1===t||2===t?"a":"e")+"]"},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY, [kl.] HH.mm",LLLL:"dddd, D. MMMM YYYY, [kl.] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [kl.] HH.mm",llll:"ddd, D. MMM YYYY, [kl.] HH.mm"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};return a.default.locale(d,null,!0),d}));
}(svFi$2, svFi$2.exports));

const svFi = svFi$2.exports;

const svFi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), svFi$2.exports, {
	'default': svFi
}));

export { svFi$1 as s };

//# sourceMappingURL=sv-fi-67f8cc00.js.map