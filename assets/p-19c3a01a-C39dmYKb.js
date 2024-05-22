import{g as u}from"./atomic-breadbox.new.stories-D5_t4T0B.js";import{n as c}from"./p-8f5830b4-EwJYRc8T.js";/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var l=/["'&<>]/,o=f;function f(e){var a=""+e,t=l.exec(a);if(!t)return a;var n,s="",r=0,i=0;for(r=t.index;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}i!==r&&(s+=a.substring(i,r)),i=r+1,s+=n}return i!==r?s+a.substring(i,r):s}function d(e,a){const t=e.query!=="",n=!e.values.length&&!a.values.length,s=!e.isLoading&&a.isLoading;return t&&n?s:!0}function h(e){const a=e.query!=="",t=e.isLoading,n=!!e.values.length;return a?n?!0:!t:!1}function g(e,a=""){const t=o(e);if(a.trim()==="")return t;const n=new RegExp(`(${c(a)})`,"i");return o(e).replace(n,'<span part="search-highlight" class="font-bold">$1</span>')}const b=e=>u("span",{title:e.displayValue,part:"value-label",class:`value-label truncate peer-hover:text-error ${e.isSelected||e.isExcluded?"font-bold":""}`,innerHTML:g(e.displayValue,e.searchQuery)});export{o as a,h as o,d as s,b as u};
