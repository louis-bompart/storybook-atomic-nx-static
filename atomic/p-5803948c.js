import{c as e}from"./p-e9c4f463.js";import{a as r}from"./p-97890486.js";var t={exports:{}};(function(t,n){!function(e,n){t.exports=n(r.exports)}(e,(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e);function n(e){return e>1&&e<5&&1!=~~(e/10)}function a(e,r,t,a){var o=e+" ";switch(t){case"s":return r||a?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":a?"minútu":"minútou";case"mm":return r||a?o+(n(e)?"minúty":"minút"):o+"minútami";case"h":return r?"hodina":a?"hodinu":"hodinou";case"hh":return r||a?o+(n(e)?"hodiny":"hodín"):o+"hodinami";case"d":return r||a?"deň":"dňom";case"dd":return r||a?o+(n(e)?"dni":"dní"):o+"dňami";case"M":return r||a?"mesiac":"mesiacom";case"MM":return r||a?o+(n(e)?"mesiace":"mesiacov"):o+"mesiacmi";case"y":return r||a?"rok":"rokom";case"yy":return r||a?o+(n(e)?"roky":"rokov"):o+"rokmi"}}var o={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return t.default.locale(o,null,!0),o}))})(t);const n=t.exports;const a=Object.freeze(Object.assign(Object.create(null),t.exports,{default:n}));export{a as s};
//# sourceMappingURL=p-5803948c.js.map