import { c as commonjsGlobal } from './_commonjsHelpers-c9e3b764.js';
import { a as dayjs_min } from './dayjs.min-a2b8725e.js';

var bi$2 = {exports: {}};

(function (module, exports) {
!function(e,a){module.exports=a(dayjs_min.exports);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),_={name:"bi",weekdays:"Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"),months:"Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"),weekStart:1,weekdaysShort:"San_Man_Tus_Wen_Tos_Frae_Sar".split("_"),monthsShort:"Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"),weekdaysMin:"San_Ma_Tu_We_To_Fr_Sar".split("_"),ordinal:function(e){return e},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},relativeTime:{future:"lo %s",past:"%s bifo",s:"sam seken",m:"wan minit",mm:"%d minit",h:"wan haoa",hh:"%d haoa",d:"wan dei",dd:"%d dei",M:"wan manis",MM:"%d manis",y:"wan yia",yy:"%d yia"}};return n.default.locale(_,null,!0),_}));
}(bi$2));

const bi = bi$2.exports;

const bi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), bi$2.exports, {
	'default': bi
}));

export { bi$1 as b };

//# sourceMappingURL=bi-9c1136a2.js.map