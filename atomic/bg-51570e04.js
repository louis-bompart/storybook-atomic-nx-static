import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var bg$2 = {exports: {}};

(function (module, exports) {
!function(e,_){"object"=='object'&&"undefined"!='object'?module.exports=_(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],_):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_bg=_(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(e){var _=e%100;if(_>10&&_<20)return e+"-ти";var t=e%10;return 1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};return t.default.locale(d,null,!0),d}));
}(bg$2, bg$2.exports));

const bg = bg$2.exports;

const bg$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), bg$2.exports, {
	'default': bg
}));

export { bg$1 as b };

//# sourceMappingURL=bg-51570e04.js.map