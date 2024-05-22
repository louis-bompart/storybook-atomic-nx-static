import { c as commonjsGlobal } from './_commonjsHelpers-c9e3b764.js';
import { a as dayjs_min } from './dayjs.min-a2b8725e.js';

var esPr$2 = {exports: {}};

(function (module, exports) {
!function(e,o){module.exports=o(dayjs_min.exports);}(commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es-pr",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return s.default.locale(d,null,!0),d}));
}(esPr$2));

const esPr = esPr$2.exports;

const esPr$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), esPr$2.exports, {
	'default': esPr
}));

export { esPr$1 as e };

//# sourceMappingURL=es-pr-3122191a.js.map