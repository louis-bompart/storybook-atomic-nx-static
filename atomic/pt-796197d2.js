import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var pt$2 = {exports: {}};

(function (module, exports) {
!function(e,a){"object"=='object'&&"undefined"!='object'?module.exports=a(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],a):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_pt=a(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),t={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return o.default.locale(t,null,!0),t}));
}(pt$2, pt$2.exports));

const pt = pt$2.exports;

const pt$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), pt$2.exports, {
	'default': pt
}));

export { pt$1 as p };

//# sourceMappingURL=pt-796197d2.js.map