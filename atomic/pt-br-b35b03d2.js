import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';
import { a as dayjs_min } from './dayjs.min-198942a4.js';
import './dayjs.min-f387479d.js';

var ptBr$2 = {exports: {}};

(function (module, exports) {
!function(e,o){"object"=='object'&&"undefined"!='object'?module.exports=o(dayjs_min.exports):"function"==typeof undefined&&undefined.amd?undefined(["dayjs"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_pt_br=o(e.dayjs);}(commonjsGlobal,(function(e){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),s={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return a.default.locale(s,null,!0),s}));
}(ptBr$2, ptBr$2.exports));

const ptBr = ptBr$2.exports;

const ptBr$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), ptBr$2.exports, {
	'default': ptBr
}));

export { ptBr$1 as p };

//# sourceMappingURL=pt-br-b35b03d2.js.map