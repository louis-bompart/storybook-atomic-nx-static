import{c as t}from"./p-e9c4f463.js";import{a as n}from"./p-3d32d423.js";var e={exports:{}};(function(e,r){!function(t,r){e.exports=r(n.exports)}(t,(function(t){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t),r="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),_={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},o={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},u={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:r,monthsShort:r,weekStart:6,meridiem:function(t){return t>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(t){return o[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return _[t]})).replace(/,/g,"،")},ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return e.default.locale(u,null,!0),u}))})(e);const r=e.exports;const _=Object.freeze(Object.assign(Object.create(null),e.exports,{default:r}));export{_ as a};
//# sourceMappingURL=p-0d247f89.js.map