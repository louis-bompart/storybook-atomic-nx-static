import{e as m}from"./p-e9c4f463-BPmi-3c5.js";import{r as f}from"./p-97890486-CBVTidVS.js";var n={exports:{}};(function(a,p){(function(_,r){a.exports=r(f.exports)})(m,function(_){function r(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var u=r(_),i={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},d={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},o={name:"bn-bd",weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),months:"জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),monthsShort:"জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),weekStart:0,preparse:function(t){return t.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return d[e]})},postformat:function(t){return t.replace(/\d/g,function(e){return i[e]})},ordinal:function(t){var e=["ই","লা","রা","ঠা","শে"],s=t%100;return"["+t+(e[(s-20)%10]||e[s]||e[0])+"]"},formats:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY খ্রিস্টাব্দ",LL:"D MMMM YYYY খ্রিস্টাব্দ",LLL:"D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়",LLLL:"dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়"},meridiem:function(t){return t<4?"রাত":t<6?"ভোর":t<12?"সকাল":t<15?"দুপুর":t<18?"বিকাল":t<20?"সন্ধ্যা":"রাত"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"}};return u.default.locale(o,null,!0),o})})(n);const c=n.exports,Y=Object.freeze(Object.assign(Object.create(null),n.exports,{default:c}));export{Y as b};
