var f={exports:{}};(function(p,w){(function(s,d){d()})(0,function(){function s(o){var i=!0,u=!1,r=null,L={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&e.nodeName!=="HTML"&&e.nodeName!=="BODY"&&"classList"in e&&"contains"in e.classList)}function m(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){i=!1}function v(){document.addEventListener("mousemove",t),document.addEventListener("mousedown",t),document.addEventListener("mouseup",t),document.addEventListener("pointermove",t),document.addEventListener("pointerdown",t),document.addEventListener("pointerup",t),document.addEventListener("touchmove",t),document.addEventListener("touchstart",t),document.addEventListener("touchend",t)}function t(e){e.target.nodeName&&e.target.nodeName.toLowerCase()==="html"||(i=!1,document.removeEventListener("mousemove",t),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",t),document.removeEventListener("pointermove",t),document.removeEventListener("pointerdown",t),document.removeEventListener("pointerup",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchstart",t),document.removeEventListener("touchend",t))}document.addEventListener("keydown",function(e){e.metaKey||e.altKey||e.ctrlKey||(a(o.activeElement)&&m(o.activeElement),i=!0)},!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",function(e){document.visibilityState==="hidden"&&(u&&(i=!0),v())},!0),v(),o.addEventListener("focus",function(e){var n,l,E;a(e.target)&&(i||(n=e.target,l=n.type,(E=n.tagName)==="INPUT"&&L[l]&&!n.readOnly||E==="TEXTAREA"&&!n.readOnly||n.isContentEditable))&&m(e.target)},!0),o.addEventListener("blur",function(e){var n;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(u=!0,window.clearTimeout(r),r=window.setTimeout(function(){u=!1},100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("focus-visible"),n.removeAttribute("data-focus-visible-added")))},!0),o.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&o.host?o.host.setAttribute("data-js-focus-visible",""):o.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window<"u"&&typeof document<"u"){var d;window.applyFocusVisiblePolyfill=s;try{d=new CustomEvent("focus-visible-polyfill-ready")}catch{(d=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(d)}typeof document<"u"&&s(document)})})();const b=f.exports,y=Object.freeze(Object.assign(Object.create(null),f.exports,{default:b}));export{y as f};
