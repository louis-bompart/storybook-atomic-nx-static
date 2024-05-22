import{J as rr}from"./p-e12016d2-D4PWgvR2.js";import{n as V}from"./p-97890486-CBVTidVS.js";import{e as er}from"./p-e9c4f463-BPmi-3c5.js";var B={exports:{}};(function(S,O){(function(x,z){S.exports=z()})(er,function(){var x={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},z=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,A=/\d\d/,a=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,m={},X=function(r){return(r=+r)+(r>68?1900:2e3)},o=function(r){return function(e){this[r]=+e}},_=[/[+-]\d\d:?(\d\d)?|Z/,function(r){(this.zone||(this.zone={})).offset=function(e){if(!e||e==="Z")return 0;var n=e.match(/([+-]|\d\d)/g),t=60*n[1]+(+n[2]||0);return t===0?0:n[0]==="+"?-t:t}(r)}],C=function(r){var e=m[r];return e&&(e.indexOf?e:e.s.concat(e.f))},j=function(r,e){var n,t=m.meridiem;if(t){for(var u=1;u<=24;u+=1)if(r.indexOf(t(u,0,e))>-1){n=u>12;break}}else n=r===(e?"pm":"PM");return n},G={A:[w,function(r){this.afternoon=j(r,!1)}],a:[w,function(r){this.afternoon=j(r,!0)}],S:[/\d/,function(r){this.milliseconds=100*+r}],SS:[A,function(r){this.milliseconds=10*+r}],SSS:[/\d{3}/,function(r){this.milliseconds=+r}],s:[a,o("seconds")],ss:[a,o("seconds")],m:[a,o("minutes")],mm:[a,o("minutes")],H:[a,o("hours")],h:[a,o("hours")],HH:[a,o("hours")],hh:[a,o("hours")],D:[a,o("day")],DD:[A,o("day")],Do:[w,function(r){var e=m.ordinal,n=r.match(/\d+/);if(this.day=n[0],e)for(var t=1;t<=31;t+=1)e(t).replace(/\[|\]/g,"")===r&&(this.day=t)}],M:[a,o("month")],MM:[A,o("month")],MMM:[w,function(r){var e=C("months"),n=(C("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(r)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[w,function(r){var e=C("months").indexOf(r)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[A,function(r){this.year=X(r)}],YYYY:[/\d{4}/,o("year")],Z:_,ZZ:_};function I(r){var e,n;e=r,n=m&&m.formats;for(var t=(r=e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(D,l,f){var i=f&&f.toUpperCase();return l||n[f]||x[f]||n[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,Y,v){return Y||v.slice(1)})})).match(z),u=t.length,h=0;h<u;h+=1){var $=t[h],p=G[$],c=p&&p[0],d=p&&p[1];t[h]=d?{regex:c,parser:d}:$.replace(/^\[|\]$/g,"")}return function(D){for(var l={},f=0,i=0;f<u;f+=1){var M=t[f];if(typeof M=="string")i+=M.length;else{var Y=M.regex,v=M.parser,T=D.slice(i),L=Y.exec(T)[0];v.call(l,L),D=D.replace(L,"")}}return function(g){var s=g.afternoon;if(s!==void 0){var y=g.hours;s?y<12&&(g.hours+=12):y===12&&(g.hours=0),delete g.afternoon}}(l),l}}return function(r,e,n){n.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(X=r.parseTwoDigitYear);var t=e.prototype,u=t.parse;t.parse=function(h){var $=h.date,p=h.utc,c=h.args;this.$u=p;var d=c[1];if(typeof d=="string"){var D=c[2]===!0,l=c[3]===!0,f=D||l,i=c[2];l&&(i=c[2]),m=this.$locale(),!D&&i&&(m=n.Ls[i]),this.$d=function(T,L,g){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*T);var s=I(L)(T),y=s.year,Z=s.month,K=s.day,N=s.hours,Q=s.minutes,R=s.seconds,W=s.milliseconds,q=s.zone,U=new Date,b=K||(y||Z?1:U.getDate()),k=y||U.getFullYear(),H=0;y&&!Z||(H=Z>0?Z-1:U.getMonth());var E=N||0,F=Q||0,J=R||0,P=W||0;return q?new Date(Date.UTC(k,H,b,E,F,J,P+60*q.offset*1e3)):g?new Date(Date.UTC(k,H,b,E,F,J,P)):new Date(k,H,b,E,F,J,P)}catch{return new Date("")}}($,d,p),this.init(),i&&i!==!0&&(this.$L=this.locale(i).$L),f&&$!=this.format(d)&&(this.$d=new Date("")),m={}}else if(d instanceof Array)for(var M=d.length,Y=1;Y<=M;Y+=1){c[1]=d[Y-1];var v=n.apply(this,c);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}Y===M&&(this.$d=new Date(""))}else u.call(this,h)}}})})(B);const nr=B.exports;V.extend(nr);function ar(S,O){const x=V(S,O);return!x.isValid()&&!O?V(S,rr):x}export{ar as s};