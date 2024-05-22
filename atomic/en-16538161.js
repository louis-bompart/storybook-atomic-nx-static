import { c as commonjsGlobal } from './_commonjsHelpers-1a56c7bc.js';

var en$2 = {exports: {}};

(function (module, exports) {
!function(e,n){"object"=='object'&&"undefined"!='object'?module.exports=n():"function"==typeof undefined&&undefined.amd?undefined(n):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_en=n();}(commonjsGlobal,(function(){"use strict";return {name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var n=["th","st","nd","rd"],t=e%100;return "["+e+(n[(t-20)%10]||n[t]||n[0])+"]"}}}));
}(en$2, en$2.exports));

const en = en$2.exports;

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), en$2.exports, {
	'default': en
}));

export { en$1 as e };

//# sourceMappingURL=en-16538161.js.map