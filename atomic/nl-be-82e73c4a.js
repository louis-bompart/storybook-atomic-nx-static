import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var nlBe$2 = {exports: {}};

(function (module, exports) {
!function(e,a){"object"=='object'&&"undefined"!='object'?module.exports=a(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],a):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_nl_be=a(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),d={name:"nl-be",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),weekStart:1,weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"}};return n.default.locale(d,null,!0),d}));
}(nlBe$2, nlBe$2.exports));

const nlBe = nlBe$2.exports;

const nlBe$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), nlBe$2.exports, {
	'default': nlBe
}));

export { nlBe$1 as n };

//# sourceMappingURL=nl-be-82e73c4a.js.map