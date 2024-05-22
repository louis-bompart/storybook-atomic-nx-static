import{a as t}from"./p-00525453.js";import{c as e}from"./p-e9c4f463.js";var n={exports:{}};
/*! @license DOMPurify 3.1.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.3/LICENSE */(function(t,n){(function(e,n){t.exports=n()})(e,(function(){const{entries:t,setPrototypeOf:e,isFrozen:n,getPrototypeOf:i,getOwnPropertyDescriptor:r}=Object;let{freeze:o,seal:l,create:a}=Object;let{apply:s,construct:c}=typeof Reflect!=="undefined"&&Reflect;if(!o){o=function t(e){return e}}if(!l){l=function t(e){return e}}if(!s){s=function t(e,n,i){return e.apply(n,i)}}if(!c){c=function t(e,n){return new e(...n)}}const f=k(Array.prototype.forEach);const u=k(Array.prototype.pop);const m=k(Array.prototype.push);const p=k(String.prototype.toLowerCase);const d=k(String.prototype.toString);const h=k(String.prototype.match);const g=k(String.prototype.replace);const y=k(String.prototype.indexOf);const b=k(String.prototype.trim);const w=k(Object.prototype.hasOwnProperty);const x=k(RegExp.prototype.test);const v=A(TypeError);const T=k(Number.isNaN);function k(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++){i[r-1]=arguments[r]}return s(t,e,i)}}function A(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++){n[i]=arguments[i]}return c(t,n)}}function E(t,i){let r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:p;if(e){e(t,null)}let o=i.length;while(o--){let e=i[o];if(typeof e==="string"){const t=r(e);if(t!==e){if(!n(i)){i[o]=t}e=t}}t[e]=true}return t}function S(t){for(let e=0;e<t.length;e++){const n=w(t,e);if(!n){t[e]=null}}return t}function _(e){const n=a(null);for(const[i,r]of t(e)){const t=w(e,i);if(t){if(Array.isArray(r)){n[i]=S(r)}else if(r&&typeof r==="object"&&r.constructor===Object){n[i]=_(r)}else{n[i]=r}}}return n}function R(t,e){while(t!==null){const n=r(t,e);if(n){if(n.get){return k(n.get)}if(typeof n.value==="function"){return k(n.value)}}t=i(t)}function n(){return null}return n}const L=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]);const D=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]);const O=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]);const z=o(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]);const M=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]);const I=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]);const F=o(["#text"]);const N=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]);const P=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]);const C=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]);const j=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);const U=l(/\{\{[\w\W]*|[\w\W]*\}\}/gm);const B=l(/<%[\w\W]*|[\w\W]*%>/gm);const W=l(/\${[\w\W]*}/gm);const H=l(/^data-[\-\w.\u00B7-\uFFFF]/);const $=l(/^aria-[\-\w]+$/);const q=l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);const Y=l(/^(?:\w+script|data):/i);const G=l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);const X=l(/^html$/i);const Z=l(/^[a-z][.\w]*(-[.\w]+)+$/i);var V=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:B,TMPLIT_EXPR:W,DATA_ATTR:H,ARIA_ATTR:$,IS_ALLOWED_URI:q,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:G,DOCTYPE_NAME:X,CUSTOM_ELEMENT:Z});const J={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12};const K=function t(){return typeof window==="undefined"?null:window};const Q=function t(e,n){if(typeof e!=="object"||typeof e.createPolicy!=="function"){return null}let i=null;const r="data-tt-policy-suffix";if(n&&n.hasAttribute(r)){i=n.getAttribute(r)}const o="dompurify"+(i?"#"+i:"");try{return e.createPolicy(o,{createHTML(t){return t},createScriptURL(t){return t}})}catch(t){console.warn("TrustedTypes policy "+o+" could not be created.");return null}};function tt(){let e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:K();const n=t=>tt(t);n.version="3.1.3";n.removed=[];if(!e||!e.document||e.document.nodeType!==J.document){n.isSupported=false;return n}let{document:i}=e;const r=i;const l=r.currentScript;const{DocumentFragment:s,HTMLTemplateElement:c,Node:k,Element:A,NodeFilter:S,NamedNodeMap:U=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:B,DOMParser:W,trustedTypes:H}=e;const $=A.prototype;const Y=R($,"cloneNode");const G=R($,"nextSibling");const Z=R($,"childNodes");const et=R($,"parentNode");if(typeof c==="function"){const t=i.createElement("template");if(t.content&&t.content.ownerDocument){i=t.content.ownerDocument}}let nt;let it="";const{implementation:rt,createNodeIterator:ot,createDocumentFragment:lt,getElementsByTagName:at}=i;const{importNode:st}=r;let ct={};n.isSupported=typeof t==="function"&&typeof et==="function"&&rt&&rt.createHTMLDocument!==undefined;const{MUSTACHE_EXPR:ft,ERB_EXPR:ut,TMPLIT_EXPR:mt,DATA_ATTR:pt,ARIA_ATTR:dt,IS_SCRIPT_OR_DATA:ht,ATTR_WHITESPACE:gt,CUSTOM_ELEMENT:yt}=V;let{IS_ALLOWED_URI:bt}=V;let wt=null;const xt=E({},[...L,...D,...O,...M,...F]);let vt=null;const Tt=E({},[...N,...P,...C,...j]);let kt=Object.seal(a(null,{tagNameCheck:{writable:true,configurable:false,enumerable:true,value:null},attributeNameCheck:{writable:true,configurable:false,enumerable:true,value:null},allowCustomizedBuiltInElements:{writable:true,configurable:false,enumerable:true,value:false}}));let At=null;let Et=null;let St=true;let _t=true;let Rt=false;let Lt=true;let Dt=false;let Ot=true;let zt=false;let Mt=false;let It=false;let Ft=false;let Nt=false;let Pt=false;let Ct=true;let jt=false;const Ut="user-content-";let Bt=true;let Wt=false;let Ht={};let $t=null;const qt=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Yt=null;const Gt=E({},["audio","video","img","source","image","track"]);let Xt=null;const Zt=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]);const Vt="http://www.w3.org/1998/Math/MathML";const Jt="http://www.w3.org/2000/svg";const Kt="http://www.w3.org/1999/xhtml";let Qt=Kt;let te=false;let ee=null;const ne=E({},[Vt,Jt,Kt],d);let ie=null;const re=["application/xhtml+xml","text/html"];const oe="text/html";let le=null;let ae=null;const se=255;const ce=i.createElement("form");const fe=function t(e){return e instanceof RegExp||e instanceof Function};const ue=function t(){let e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(ae&&ae===e){return}if(!e||typeof e!=="object"){e={}}e=_(e);ie=re.indexOf(e.PARSER_MEDIA_TYPE)===-1?oe:e.PARSER_MEDIA_TYPE;le=ie==="application/xhtml+xml"?d:p;wt=w(e,"ALLOWED_TAGS")?E({},e.ALLOWED_TAGS,le):xt;vt=w(e,"ALLOWED_ATTR")?E({},e.ALLOWED_ATTR,le):Tt;ee=w(e,"ALLOWED_NAMESPACES")?E({},e.ALLOWED_NAMESPACES,d):ne;Xt=w(e,"ADD_URI_SAFE_ATTR")?E(_(Zt),e.ADD_URI_SAFE_ATTR,le):Zt;Yt=w(e,"ADD_DATA_URI_TAGS")?E(_(Gt),e.ADD_DATA_URI_TAGS,le):Gt;$t=w(e,"FORBID_CONTENTS")?E({},e.FORBID_CONTENTS,le):qt;At=w(e,"FORBID_TAGS")?E({},e.FORBID_TAGS,le):{};Et=w(e,"FORBID_ATTR")?E({},e.FORBID_ATTR,le):{};Ht=w(e,"USE_PROFILES")?e.USE_PROFILES:false;St=e.ALLOW_ARIA_ATTR!==false;_t=e.ALLOW_DATA_ATTR!==false;Rt=e.ALLOW_UNKNOWN_PROTOCOLS||false;Lt=e.ALLOW_SELF_CLOSE_IN_ATTR!==false;Dt=e.SAFE_FOR_TEMPLATES||false;Ot=e.SAFE_FOR_XML!==false;zt=e.WHOLE_DOCUMENT||false;Ft=e.RETURN_DOM||false;Nt=e.RETURN_DOM_FRAGMENT||false;Pt=e.RETURN_TRUSTED_TYPE||false;It=e.FORCE_BODY||false;Ct=e.SANITIZE_DOM!==false;jt=e.SANITIZE_NAMED_PROPS||false;Bt=e.KEEP_CONTENT!==false;Wt=e.IN_PLACE||false;bt=e.ALLOWED_URI_REGEXP||q;Qt=e.NAMESPACE||Kt;kt=e.CUSTOM_ELEMENT_HANDLING||{};if(e.CUSTOM_ELEMENT_HANDLING&&fe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)){kt.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck}if(e.CUSTOM_ELEMENT_HANDLING&&fe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)){kt.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck}if(e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==="boolean"){kt.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements}if(Dt){_t=false}if(Nt){Ft=true}if(Ht){wt=E({},F);vt=[];if(Ht.html===true){E(wt,L);E(vt,N)}if(Ht.svg===true){E(wt,D);E(vt,P);E(vt,j)}if(Ht.svgFilters===true){E(wt,O);E(vt,P);E(vt,j)}if(Ht.mathMl===true){E(wt,M);E(vt,C);E(vt,j)}}if(e.ADD_TAGS){if(wt===xt){wt=_(wt)}E(wt,e.ADD_TAGS,le)}if(e.ADD_ATTR){if(vt===Tt){vt=_(vt)}E(vt,e.ADD_ATTR,le)}if(e.ADD_URI_SAFE_ATTR){E(Xt,e.ADD_URI_SAFE_ATTR,le)}if(e.FORBID_CONTENTS){if($t===qt){$t=_($t)}E($t,e.FORBID_CONTENTS,le)}if(Bt){wt["#text"]=true}if(zt){E(wt,["html","head","body"])}if(wt.table){E(wt,["tbody"]);delete At.tbody}if(e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=="function"){throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.')}if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=="function"){throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.')}nt=e.TRUSTED_TYPES_POLICY;it=nt.createHTML("")}else{if(nt===undefined){nt=Q(H,l)}if(nt!==null&&typeof it==="string"){it=nt.createHTML("")}}if(o){o(e)}ae=e};const me=E({},["mi","mo","mn","ms","mtext"]);const pe=E({},["foreignobject","annotation-xml"]);const de=E({},["title","style","font","a","script"]);const he=E({},[...D,...O,...z]);const ge=E({},[...M,...I]);const ye=function t(e){let n=et(e);if(!n||!n.tagName){n={namespaceURI:Qt,tagName:"template"}}const i=p(e.tagName);const r=p(n.tagName);if(!ee[e.namespaceURI]){return false}if(e.namespaceURI===Jt){if(n.namespaceURI===Kt){return i==="svg"}if(n.namespaceURI===Vt){return i==="svg"&&(r==="annotation-xml"||me[r])}return Boolean(he[i])}if(e.namespaceURI===Vt){if(n.namespaceURI===Kt){return i==="math"}if(n.namespaceURI===Jt){return i==="math"&&pe[r]}return Boolean(ge[i])}if(e.namespaceURI===Kt){if(n.namespaceURI===Jt&&!pe[r]){return false}if(n.namespaceURI===Vt&&!me[r]){return false}return!ge[i]&&(de[i]||!he[i])}if(ie==="application/xhtml+xml"&&ee[e.namespaceURI]){return true}return false};const be=function t(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}};const we=function t(e,i){try{m(n.removed,{attribute:i.getAttributeNode(e),from:i})}catch(t){m(n.removed,{attribute:null,from:i})}i.removeAttribute(e);if(e==="is"&&!vt[e]){if(Ft||Nt){try{be(i)}catch(t){}}else{try{i.setAttribute(e,"")}catch(t){}}}};const xe=function t(e){let n=null;let r=null;if(It){e="<remove></remove>"+e}else{const t=h(e,/^[\r\n\t ]+/);r=t&&t[0]}if(ie==="application/xhtml+xml"&&Qt===Kt){e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>"}const o=nt?nt.createHTML(e):e;if(Qt===Kt){try{n=(new W).parseFromString(o,ie)}catch(t){}}if(!n||!n.documentElement){n=rt.createDocument(Qt,"template",null);try{n.documentElement.innerHTML=te?it:o}catch(t){}}const l=n.body||n.documentElement;if(e&&r){l.insertBefore(i.createTextNode(r),l.childNodes[0]||null)}if(Qt===Kt){return at.call(n,zt?"html":"body")[0]}return zt?n.documentElement:l};const ve=function t(e){return ot.call(e.ownerDocument||e,e,S.SHOW_ELEMENT|S.SHOW_COMMENT|S.SHOW_TEXT|S.SHOW_PROCESSING_INSTRUCTION|S.SHOW_CDATA_SECTION,null)};const Te=function t(e){return e instanceof B&&(typeof e.__depth!=="undefined"&&typeof e.__depth!=="number"||typeof e.__removalCount!=="undefined"&&typeof e.__removalCount!=="number"||typeof e.nodeName!=="string"||typeof e.textContent!=="string"||typeof e.removeChild!=="function"||!(e.attributes instanceof U)||typeof e.removeAttribute!=="function"||typeof e.setAttribute!=="function"||typeof e.namespaceURI!=="string"||typeof e.insertBefore!=="function"||typeof e.hasChildNodes!=="function")};const ke=function t(e){return typeof k==="function"&&e instanceof k};const Ae=function t(e,i,r){if(!ct[e]){return}f(ct[e],(t=>{t.call(n,i,r,ae)}))};const Ee=function t(e){let i=null;Ae("beforeSanitizeElements",e,null);if(Te(e)){be(e);return true}const r=le(e.nodeName);Ae("uponSanitizeElement",e,{tagName:r,allowedTags:wt});if(e.hasChildNodes()&&!ke(e.firstElementChild)&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent)){be(e);return true}if(e.nodeType===J.progressingInstruction){be(e);return true}if(Ot&&e.nodeType===J.comment&&x(/<[/\w]/g,e.data)){be(e);return true}if(!wt[r]||At[r]){if(!At[r]&&_e(r)){if(kt.tagNameCheck instanceof RegExp&&x(kt.tagNameCheck,r)){return false}if(kt.tagNameCheck instanceof Function&&kt.tagNameCheck(r)){return false}}if(Bt&&!$t[r]){const t=et(e)||e.parentNode;const n=Z(e)||e.childNodes;if(n&&t){const i=n.length;for(let r=i-1;r>=0;--r){const i=Y(n[r],true);i.__removalCount=(e.__removalCount||0)+1;t.insertBefore(i,G(e))}}}be(e);return true}if(e instanceof A&&!ye(e)){be(e);return true}if((r==="noscript"||r==="noembed"||r==="noframes")&&x(/<\/no(script|embed|frames)/i,e.innerHTML)){be(e);return true}if(Dt&&e.nodeType===J.text){i=e.textContent;f([ft,ut,mt],(t=>{i=g(i,t," ")}));if(e.textContent!==i){m(n.removed,{element:e.cloneNode()});e.textContent=i}}Ae("afterSanitizeElements",e,null);return false};const Se=function t(e,n,r){if(Ct&&(n==="id"||n==="name")&&(r in i||r in ce||r==="__depth"||r==="__removalCount")){return false}if(_t&&!Et[n]&&x(pt,n));else if(St&&x(dt,n));else if(!vt[n]||Et[n]){if(_e(e)&&(kt.tagNameCheck instanceof RegExp&&x(kt.tagNameCheck,e)||kt.tagNameCheck instanceof Function&&kt.tagNameCheck(e))&&(kt.attributeNameCheck instanceof RegExp&&x(kt.attributeNameCheck,n)||kt.attributeNameCheck instanceof Function&&kt.attributeNameCheck(n))||n==="is"&&kt.allowCustomizedBuiltInElements&&(kt.tagNameCheck instanceof RegExp&&x(kt.tagNameCheck,r)||kt.tagNameCheck instanceof Function&&kt.tagNameCheck(r)));else{return false}}else if(Xt[n]);else if(x(bt,g(r,gt,"")));else if((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&y(r,"data:")===0&&Yt[e]);else if(Rt&&!x(ht,g(r,gt,"")));else if(r){return false}else;return true};const _e=function t(e){return e!=="annotation-xml"&&h(e,yt)};const Re=function t(e){Ae("beforeSanitizeAttributes",e,null);const{attributes:i}=e;if(!i){return}const r={attrName:"",attrValue:"",keepAttr:true,allowedAttributes:vt};let o=i.length;while(o--){const t=i[o];const{name:l,namespaceURI:a,value:s}=t;const c=le(l);let m=l==="value"?s:b(s);r.attrName=c;r.attrValue=m;r.keepAttr=true;r.forceKeepAttr=undefined;Ae("uponSanitizeAttribute",e,r);m=r.attrValue;if(r.forceKeepAttr){continue}we(l,e);if(!r.keepAttr){continue}if(!Lt&&x(/\/>/i,m)){we(l,e);continue}if(Ot&&x(/((--!?|])>)|<\/(style|title)/i,m)){we(l,e);continue}if(Dt){f([ft,ut,mt],(t=>{m=g(m,t," ")}))}const p=le(e.nodeName);if(!Se(p,c,m)){continue}if(jt&&(c==="id"||c==="name")){we(l,e);m=Ut+m}if(nt&&typeof H==="object"&&typeof H.getAttributeType==="function"){if(a);else{switch(H.getAttributeType(p,c)){case"TrustedHTML":{m=nt.createHTML(m);break}case"TrustedScriptURL":{m=nt.createScriptURL(m);break}}}}try{if(a){e.setAttributeNS(a,l,m)}else{e.setAttribute(l,m)}if(Te(e)){be(e)}else{u(n.removed)}}catch(t){}}Ae("afterSanitizeAttributes",e,null)};const Le=function t(e){let n=null;const i=ve(e);Ae("beforeSanitizeShadowDOM",e,null);while(n=i.nextNode()){Ae("uponSanitizeShadowNode",n,null);if(Ee(n)){continue}const e=et(n);if(n.nodeType===J.element){if(e&&e.__depth){n.__depth=(n.__removalCount||0)+e.__depth+1}else{n.__depth=1}}if(n.__depth>=se||n.__depth<0||T(n.__depth)){be(n)}if(n.content instanceof s){n.content.__depth=n.__depth;t(n.content)}Re(n)}Ae("afterSanitizeShadowDOM",e,null)};n.sanitize=function(t){let e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};let i=null;let o=null;let l=null;let a=null;te=!t;if(te){t="\x3c!--\x3e"}if(typeof t!=="string"&&!ke(t)){if(typeof t.toString==="function"){t=t.toString();if(typeof t!=="string"){throw v("dirty is not a string, aborting")}}else{throw v("toString is not a function")}}if(!n.isSupported){return t}if(!Mt){ue(e)}n.removed=[];if(typeof t==="string"){Wt=false}if(Wt){if(t.nodeName){const e=le(t.nodeName);if(!wt[e]||At[e]){throw v("root node is forbidden and cannot be sanitized in-place")}}}else if(t instanceof k){i=xe("\x3c!----\x3e");o=i.ownerDocument.importNode(t,true);if(o.nodeType===J.element&&o.nodeName==="BODY"){i=o}else if(o.nodeName==="HTML"){i=o}else{i.appendChild(o)}}else{if(!Ft&&!Dt&&!zt&&t.indexOf("<")===-1){return nt&&Pt?nt.createHTML(t):t}i=xe(t);if(!i){return Ft?null:Pt?it:""}}if(i&&It){be(i.firstChild)}const c=ve(Wt?t:i);while(l=c.nextNode()){if(Ee(l)){continue}const t=et(l);if(l.nodeType===J.element){if(t&&t.__depth){l.__depth=(l.__removalCount||0)+t.__depth+1}else{l.__depth=1}}if(l.__depth>=se||l.__depth<0||T(l.__depth)){be(l)}if(l.content instanceof s){l.content.__depth=l.__depth;Le(l.content)}Re(l)}if(Wt){return t}if(Ft){if(Nt){a=lt.call(i.ownerDocument);while(i.firstChild){a.appendChild(i.firstChild)}}else{a=i}if(vt.shadowroot||vt.shadowrootmode){a=st.call(r,a,true)}return a}let u=zt?i.outerHTML:i.innerHTML;if(zt&&wt["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&x(X,i.ownerDocument.doctype.name)){u="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+u}if(Dt){f([ft,ut,mt],(t=>{u=g(u,t," ")}))}return nt&&Pt?nt.createHTML(u):u};n.setConfig=function(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};ue(t);Mt=true};n.clearConfig=function(){ae=null;Mt=false};n.isValidAttribute=function(t,e,n){if(!ae){ue({})}const i=le(t);const r=le(e);return Se(i,r,n)};n.addHook=function(t,e){if(typeof e!=="function"){return}ct[t]=ct[t]||[];m(ct[t],e)};n.removeHook=function(t){if(ct[t]){return u(ct[t])}};n.removeHooks=function(t){if(ct[t]){ct[t]=[]}};n.removeAllHooks=function(){ct={}};return n}var et=tt();return et}))})(n);const i=n.exports;function r(t){let e;return function(...n){if(t){e=t.apply(this,n);t=()=>{}}return e}}function o(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}function l(t){return t.replace(/-./g,(t=>t[1].toUpperCase()))}function a(t){return t.toLowerCase().replace(/([_][a-z])/g,(t=>t.toUpperCase().replace("_","")))}function s(t){return t.replace(/\s/g,"-").toLowerCase()}function c(t,e=5){const n=Math.random().toString(36).substring(2,2+e);if(!t){return n}return t+n}function f(t,e){return Math.random()*(e-t)+t}function u(t){return(new window.DOMParser).parseFromString(t,"text/xml")}function m(t){return t.nodeType===1}function p(t){return t.nodeType===3}function d(t){var e;if(m(t)){return!(t instanceof HTMLStyleElement)}if(p(t)){return!!((e=t.textContent)===null||e===void 0?void 0:e.trim())}return false}function h(t){for(let e=0;e<t.childNodes.length;e++){const n=t.childNodes.item(e);if(d(n)){return true}}return false}function g(e,n="./assets"){const[,i,r]=e.match(/^([a-z]+):\/\/(.*?)(\.svg)?$/)||[];if(!i){if(e.startsWith("./")||e.startsWith("../")){return e}return null}if(i==="http"||i==="https"){return e}if(i==="assets"){return t(`${n}/${r}.svg`)}return null}function y(t,e){const n=t.parentElement;if(!n){return false}if(n.tagName===e.toUpperCase()){return true}return y(n,e)}function b(t,e){if(!t){return null}if(t.matches(e)){return t}if(t.parentNode instanceof ShadowRoot){return b(t.parentNode.host,e)}return b(t.parentElement,e)}const w=(t,e)=>t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1;function x(t){var e;const i=n.exports.sanitize(`<style>${t}</style>`,{ALLOWED_TAGS:["style"],ALLOWED_ATTR:[],FORCE_BODY:true});const r=document.createElement("div");r.innerHTML=i;return(e=r.querySelector("style"))===null||e===void 0?void 0:e.innerHTML}function v(t=document){var e;const n=t.activeElement;if(n===null||n===void 0?void 0:n.shadowRoot){return(e=v(n.shadowRoot))!==null&&e!==void 0?e:n}return n}async function T(){return new Promise((t=>setTimeout(t,10)))}function k(t){let e=t;while(e&&e.parentNode){if(e.parentNode===document){return true}else if(e.parentNode instanceof ShadowRoot){e=e.parentNode.host}else{e=e.parentNode}}return false}function A(t){if(t.parentNode){return t.parentNode}if(t instanceof ShadowRoot){return t.host}return null}function E(t,e){if(e===t){return true}if(e instanceof HTMLElement&&e.assignedSlot&&E(t,e.assignedSlot)){return true}const n=A(e);return n===null?false:E(t,n)}function S(t,e){return t.reduce(((t,n,i)=>{const r=e(n,i);if(!(r in t)){t[r]=[]}t[r].push(n);return t}),{})}export{i as D,o as a,m as b,b as c,T as d,S as e,d as f,f as g,h,k as i,y as j,l as k,w as l,x as m,n,r as o,u as p,E as q,c as r,a as s,s as t,v as u,A as v,g as w};
//# sourceMappingURL=p-9935af75.js.map