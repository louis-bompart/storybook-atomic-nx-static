'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-0192c5b3.js');
const dayjs_min = require('./dayjs.min-f5fda39e.js');

var mk$2 = {exports: {}};

(function (module, exports) {
!function(e,_){module.exports=_(dayjs_min.dayjs_min.exports);}(_commonjsHelpers.commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"mk",weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),weekStart:1,weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"}};return t.default.locale(d,null,!0),d}));
}(mk$2));

const mk = mk$2.exports;

const mk$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), mk$2.exports, {
	'default': mk
}));

exports.mk = mk$1;

//# sourceMappingURL=mk-c760f0b7.js.map