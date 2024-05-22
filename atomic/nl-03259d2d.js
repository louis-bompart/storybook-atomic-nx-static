import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var nl$2 = {exports: {}};

(function (module, exports) {
!function(e,a){"object"=='object'&&"undefined"!='object'?module.exports=a(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],a):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_nl=a(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=a(e),n={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(e){return "["+e+(1===e||8===e||e>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return d.default.locale(n,null,!0),n}));
}(nl$2, nl$2.exports));

const nl = nl$2.exports;

const nl$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), nl$2.exports, {
	'default': nl
}));

export { nl$1 as n };

//# sourceMappingURL=nl-03259d2d.js.map