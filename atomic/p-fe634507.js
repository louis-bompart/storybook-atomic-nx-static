import{c as e}from"./p-e9c4f463.js";import{a as n}from"./p-3d32d423.js";var t={exports:{}};(function(t,r){!function(e,r){t.exports=r(n.exports)}(e,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function r(e){return e%100==2}function a(e){return e%100==3||e%100==4}function m(e,n,t,m){var u=e+" ";switch(t){case"s":return n||m?"nekaj sekund":"nekaj sekundami";case"m":return n?"ena minuta":"eno minuto";case"mm":return r(e)?u+(n||m?"minuti":"minutama"):a(e)?u+(n||m?"minute":"minutami"):u+(n||m?"minut":"minutami");case"h":return n?"ena ura":"eno uro";case"hh":return r(e)?u+(n||m?"uri":"urama"):a(e)?u+(n||m?"ure":"urami"):u+(n||m?"ur":"urami");case"d":return n||m?"en dan":"enim dnem";case"dd":return r(e)?u+(n||m?"dneva":"dnevoma"):u+(n||m?"dni":"dnevi");case"M":return n||m?"en mesec":"enim mesecem";case"MM":return r(e)?u+(n||m?"meseca":"mesecema"):a(e)?u+(n||m?"mesece":"meseci"):u+(n||m?"mesecev":"meseci");case"y":return n||m?"eno leto":"enim letom";case"yy":return r(e)?u+(n||m?"leti":"letoma"):a(e)?u+(n||m?"leta":"leti"):u+(n||m?"let":"leti")}}var u={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};return t.default.locale(u,null,!0),u}))})(t);const r=t.exports;const a=Object.freeze(Object.assign(Object.create(null),t.exports,{default:r}));export{a as s};
//# sourceMappingURL=p-fe634507.js.map