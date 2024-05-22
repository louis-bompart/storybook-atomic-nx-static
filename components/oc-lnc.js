import { c as commonjsGlobal } from './_commonjsHelpers.js';
import { a as dayjs_min } from './dayjs.min.js';

var ocLnc$2 = {exports: {}};

(function (module, exports) {
!function(e,d){module.exports=d(dayjs_min.exports);}(commonjsGlobal,(function(e){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=d(e),s={name:"oc-lnc",weekdays:"dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),weekdaysShort:"Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),months:"genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),monthsShort:"gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"unas segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},ordinal:function(e){return e+"º"}};return n.default.locale(s,null,!0),s}));
}(ocLnc$2));

const ocLnc = ocLnc$2.exports;

const ocLnc$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), ocLnc$2.exports, {
	'default': ocLnc
}));

export { ocLnc$1 as o };

//# sourceMappingURL=oc-lnc.js.map