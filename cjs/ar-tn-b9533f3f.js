'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-0192c5b3.js');
const dayjs_min = require('./dayjs.min-7a187b98.js');

var arTn$2 = {exports: {}};

(function (module, exports) {
!function(e,_){module.exports=_(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ar-tn",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekStart:1,weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"}};return t.default.locale(d,null,!0),d}));
}(arTn$2));

const arTn = arTn$2.exports;

const arTn$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), arTn$2.exports, {
	'default': arTn
}));

exports.arTn = arTn$1;

//# sourceMappingURL=ar-tn-b9533f3f.js.map