import{e as L}from"./p-e9c4f463-BPmi-3c5.js";import{r as y}from"./p-97890486-CBVTidVS.js";var a={exports:{}};(function(Y,D){(function(i,s){Y.exports=s(y.exports)})(L,function(i){function s(_){return _&&typeof _=="object"&&"default"in _?_:{default:_}}var h=s(i),u="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),M="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),f="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),l="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),d=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function e(_,r,c){var t,n;return c==="m"?r?"минута":"минуту":_+" "+(t=+_,n={mm:r?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[c].split("_"),t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2])}var o=function(_,r){return d.test(r)?u[_.month()]:M[_.month()]};o.s=M,o.f=u;var m=function(_,r){return d.test(r)?f[_.month()]:l[_.month()]};m.s=l,m.f=f;var p={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:m,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:e,mm:e,h:"час",hh:e,d:"день",dd:e,M:"месяц",MM:e,y:"год",yy:e},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};return h.default.locale(p,null,!0),p})})(a);const v=a.exports,b=Object.freeze(Object.assign(Object.create(null),a.exports,{default:v}));export{b as r};