import{a as dn}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{e as hn}from"./p-e9c4f463-BPmi-3c5.js";var Ue={exports:{}};/*! @license DOMPurify 3.1.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.3/LICENSE */(function(n,a){(function(c,C){n.exports=C()})(hn,function(){const{entries:c,setPrototypeOf:C,isFrozen:pe,getPrototypeOf:j,getOwnPropertyDescriptor:Ct}=Object;let{freeze:E,seal:L,create:Pe}=Object,{apply:de,construct:he}=typeof Reflect<"u"&&Reflect;E||(E=function(r){return r}),L||(L=function(r){return r}),de||(de=function(r,m,u){return r.apply(m,u)}),he||(he=function(r,m){return new r(...m)});const ne=b(Array.prototype.forEach),He=b(Array.prototype.pop),$=b(Array.prototype.push),oe=b(String.prototype.toLowerCase),ge=b(String.prototype.toString),Fe=b(String.prototype.match),q=b(String.prototype.replace),Lt=b(String.prototype.indexOf),vt=b(String.prototype.trim),O=b(Object.prototype.hasOwnProperty),N=b(RegExp.prototype.test),X=Ot(TypeError),ze=b(Number.isNaN);function b(f){return function(r){for(var m=arguments.length,u=new Array(m>1?m-1:0),T=1;T<m;T++)u[T-1]=arguments[T];return de(f,r,u)}}function Ot(f){return function(){for(var r=arguments.length,m=new Array(r),u=0;u<r;u++)m[u]=arguments[u];return he(f,m)}}function s(f,r){let m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:oe;C&&C(f,null);let u=r.length;for(;u--;){let T=r[u];if(typeof T=="string"){const D=m(T);D!==T&&(pe(r)||(r[u]=D),T=D)}f[T]=!0}return f}function xt(f){for(let r=0;r<f.length;r++)O(f,r)||(f[r]=null);return f}function I(f){const r=Pe(null);for(const[m,u]of c(f))O(f,m)&&(Array.isArray(u)?r[m]=xt(u):u&&typeof u=="object"&&u.constructor===Object?r[m]=I(u):r[m]=u);return r}function re(f,r){for(;f!==null;){const u=Ct(f,r);if(u){if(u.get)return b(u.get);if(typeof u.value=="function")return b(u.value)}f=j(f)}function m(){return null}return m}const We=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_e=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Te=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Dt=E(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ye=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kt=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Be=E(["#text"]),Ge=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ee=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ye=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ie=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Mt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),It=L(/<%[\w\W]*|[\w\W]*%>/gm),Ut=L(/\${[\w\W]*}/gm),Pt=L(/^data-[\-\w.\u00B7-\uFFFF]/),Ht=L(/^aria-[\-\w]+$/),je=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ft=L(/^(?:\w+script|data):/i),zt=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$e=L(/^html$/i),Wt=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var qe=Object.freeze({__proto__:null,MUSTACHE_EXPR:Mt,ERB_EXPR:It,TMPLIT_EXPR:Ut,DATA_ATTR:Pt,ARIA_ATTR:Ht,IS_ALLOWED_URI:je,IS_SCRIPT_OR_DATA:Ft,ATTR_WHITESPACE:zt,DOCTYPE_NAME:$e,CUSTOM_ELEMENT:Wt});const U={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Bt=function(){return typeof window>"u"?null:window},Gt=function(r,m){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let u=null;const T="data-tt-policy-suffix";m&&m.hasAttribute(T)&&(u=m.getAttribute(T));const D="dompurify"+(u?"#"+u:"");try{return r.createPolicy(D,{createHTML(H){return H},createScriptURL(H){return H}})}catch{return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function Xe(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bt();const r=i=>Xe(i);if(r.version="3.1.3",r.removed=[],!f||!f.document||f.document.nodeType!==U.document)return r.isSupported=!1,r;let{document:m}=f;const u=m,T=u.currentScript,{DocumentFragment:D,HTMLTemplateElement:H,Node:Ne,Element:Ze,NodeFilter:Z,NamedNodeMap:jt=f.NamedNodeMap||f.MozNamedAttrMap,HTMLFormElement:$t,DOMParser:qt,trustedTypes:ae}=f,le=Ze.prototype,Xt=re(le,"cloneNode"),Zt=re(le,"nextSibling"),Kt=re(le,"childNodes"),K=re(le,"parentNode");if(typeof H=="function"){const i=m.createElement("template");i.content&&i.content.ownerDocument&&(m=i.content.ownerDocument)}let A,V="";const{implementation:Ae,createNodeIterator:Vt,createDocumentFragment:Jt,getElementsByTagName:Qt}=m,{importNode:en}=u;let x={};r.isSupported=typeof c=="function"&&typeof K=="function"&&Ae&&Ae.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Se,ERB_EXPR:be,TMPLIT_EXPR:we,DATA_ATTR:tn,ARIA_ATTR:nn,IS_SCRIPT_OR_DATA:on,ATTR_WHITESPACE:Ke,CUSTOM_ELEMENT:rn}=qe;let{IS_ALLOWED_URI:Ve}=qe,d=null;const Je=s({},[...We,..._e,...Te,...ye,...Be]);let h=null;const Qe=s({},[...Ge,...Ee,...Ye,...ie]);let p=Object.seal(Pe(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),J=null,Re=null,et=!0,Ce=!0,tt=!1,nt=!0,F=!1,Le=!0,P=!1,ve=!1,Oe=!1,z=!1,se=!1,ce=!1,ot=!0,rt=!1;const an="user-content-";let xe=!0,Q=!1,W={},B=null;const it=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let at=null;const lt=s({},["audio","video","img","source","image","track"]);let De=null;const st=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ue="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",k="http://www.w3.org/1999/xhtml";let G=k,ke=!1,Me=null;const ln=s({},[ue,fe,k],ge);let ee=null;const sn=["application/xhtml+xml","text/html"],cn="text/html";let g=null,Y=null;const ct=255,un=m.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Y&&Y===e)){if((!e||typeof e!="object")&&(e={}),e=I(e),ee=sn.indexOf(e.PARSER_MEDIA_TYPE)===-1?cn:e.PARSER_MEDIA_TYPE,g=ee==="application/xhtml+xml"?ge:oe,d=O(e,"ALLOWED_TAGS")?s({},e.ALLOWED_TAGS,g):Je,h=O(e,"ALLOWED_ATTR")?s({},e.ALLOWED_ATTR,g):Qe,Me=O(e,"ALLOWED_NAMESPACES")?s({},e.ALLOWED_NAMESPACES,ge):ln,De=O(e,"ADD_URI_SAFE_ATTR")?s(I(st),e.ADD_URI_SAFE_ATTR,g):st,at=O(e,"ADD_DATA_URI_TAGS")?s(I(lt),e.ADD_DATA_URI_TAGS,g):lt,B=O(e,"FORBID_CONTENTS")?s({},e.FORBID_CONTENTS,g):it,J=O(e,"FORBID_TAGS")?s({},e.FORBID_TAGS,g):{},Re=O(e,"FORBID_ATTR")?s({},e.FORBID_ATTR,g):{},W=O(e,"USE_PROFILES")?e.USE_PROFILES:!1,et=e.ALLOW_ARIA_ATTR!==!1,Ce=e.ALLOW_DATA_ATTR!==!1,tt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,nt=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,F=e.SAFE_FOR_TEMPLATES||!1,Le=e.SAFE_FOR_XML!==!1,P=e.WHOLE_DOCUMENT||!1,z=e.RETURN_DOM||!1,se=e.RETURN_DOM_FRAGMENT||!1,ce=e.RETURN_TRUSTED_TYPE||!1,Oe=e.FORCE_BODY||!1,ot=e.SANITIZE_DOM!==!1,rt=e.SANITIZE_NAMED_PROPS||!1,xe=e.KEEP_CONTENT!==!1,Q=e.IN_PLACE||!1,Ve=e.ALLOWED_URI_REGEXP||je,G=e.NAMESPACE||k,p=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(p.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(p.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(p.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(Ce=!1),se&&(z=!0),W&&(d=s({},Be),h=[],W.html===!0&&(s(d,We),s(h,Ge)),W.svg===!0&&(s(d,_e),s(h,Ee),s(h,ie)),W.svgFilters===!0&&(s(d,Te),s(h,Ee),s(h,ie)),W.mathMl===!0&&(s(d,ye),s(h,Ye),s(h,ie))),e.ADD_TAGS&&(d===Je&&(d=I(d)),s(d,e.ADD_TAGS,g)),e.ADD_ATTR&&(h===Qe&&(h=I(h)),s(h,e.ADD_ATTR,g)),e.ADD_URI_SAFE_ATTR&&s(De,e.ADD_URI_SAFE_ATTR,g),e.FORBID_CONTENTS&&(B===it&&(B=I(B)),s(B,e.FORBID_CONTENTS,g)),xe&&(d["#text"]=!0),P&&s(d,["html","head","body"]),d.table&&(s(d,["tbody"]),delete J.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw X('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw X('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=e.TRUSTED_TYPES_POLICY,V=A.createHTML("")}else A===void 0&&(A=Gt(ae,T)),A!==null&&typeof V=="string"&&(V=A.createHTML(""));E&&E(e),Y=e}},ft=s({},["mi","mo","mn","ms","mtext"]),mt=s({},["foreignobject","annotation-xml"]),fn=s({},["title","style","font","a","script"]),pt=s({},[..._e,...Te,...Dt]),dt=s({},[...ye,...kt]),mn=function(e){let t=K(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});const o=oe(e.tagName),l=oe(t.tagName);return Me[e.namespaceURI]?e.namespaceURI===fe?t.namespaceURI===k?o==="svg":t.namespaceURI===ue?o==="svg"&&(l==="annotation-xml"||ft[l]):!!pt[o]:e.namespaceURI===ue?t.namespaceURI===k?o==="math":t.namespaceURI===fe?o==="math"&&mt[l]:!!dt[o]:e.namespaceURI===k?t.namespaceURI===fe&&!mt[l]||t.namespaceURI===ue&&!ft[l]?!1:!dt[o]&&(fn[o]||!pt[o]):!!(ee==="application/xhtml+xml"&&Me[e.namespaceURI]):!1},v=function(e){$(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},me=function(e,t){try{$(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!h[e])if(z||se)try{v(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ht=function(e){let t=null,o=null;if(Oe)e="<remove></remove>"+e;else{const _=Fe(e,/^[\r\n\t ]+/);o=_&&_[0]}ee==="application/xhtml+xml"&&G===k&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const l=A?A.createHTML(e):e;if(G===k)try{t=new qt().parseFromString(l,ee)}catch{}if(!t||!t.documentElement){t=Ae.createDocument(G,"template",null);try{t.documentElement.innerHTML=ke?V:l}catch{}}const y=t.body||t.documentElement;return e&&o&&y.insertBefore(m.createTextNode(o),y.childNodes[0]||null),G===k?Qt.call(t,P?"html":"body")[0]:P?t.documentElement:y},gt=function(e){return Vt.call(e.ownerDocument||e,e,Z.SHOW_ELEMENT|Z.SHOW_COMMENT|Z.SHOW_TEXT|Z.SHOW_PROCESSING_INSTRUCTION|Z.SHOW_CDATA_SECTION,null)},_t=function(e){return e instanceof $t&&(typeof e.__depth<"u"&&typeof e.__depth!="number"||typeof e.__removalCount<"u"&&typeof e.__removalCount!="number"||typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof jt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Tt=function(e){return typeof Ne=="function"&&e instanceof Ne},M=function(e,t,o){x[e]&&ne(x[e],l=>{l.call(r,t,o,Y)})},yt=function(e){let t=null;if(M("beforeSanitizeElements",e,null),_t(e))return v(e),!0;const o=g(e.nodeName);if(M("uponSanitizeElement",e,{tagName:o,allowedTags:d}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&N(/<[/\w]/g,e.innerHTML)&&N(/<[/\w]/g,e.textContent)||e.nodeType===U.progressingInstruction||Le&&e.nodeType===U.comment&&N(/<[/\w]/g,e.data))return v(e),!0;if(!d[o]||J[o]){if(!J[o]&&Nt(o)&&(p.tagNameCheck instanceof RegExp&&N(p.tagNameCheck,o)||p.tagNameCheck instanceof Function&&p.tagNameCheck(o)))return!1;if(xe&&!B[o]){const l=K(e)||e.parentNode,y=Kt(e)||e.childNodes;if(y&&l){const _=y.length;for(let w=_-1;w>=0;--w){const R=Xt(y[w],!0);R.__removalCount=(e.__removalCount||0)+1,l.insertBefore(R,Zt(e))}}}return v(e),!0}return e instanceof Ze&&!mn(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&N(/<\/no(script|embed|frames)/i,e.innerHTML)?(v(e),!0):(F&&e.nodeType===U.text&&(t=e.textContent,ne([Se,be,we],l=>{t=q(t,l," ")}),e.textContent!==t&&($(r.removed,{element:e.cloneNode()}),e.textContent=t)),M("afterSanitizeElements",e,null),!1)},Et=function(e,t,o){if(ot&&(t==="id"||t==="name")&&(o in m||o in un||o==="__depth"||o==="__removalCount"))return!1;if(!(Ce&&!Re[t]&&N(tn,t))){if(!(et&&N(nn,t))){if(!h[t]||Re[t]){if(!(Nt(e)&&(p.tagNameCheck instanceof RegExp&&N(p.tagNameCheck,e)||p.tagNameCheck instanceof Function&&p.tagNameCheck(e))&&(p.attributeNameCheck instanceof RegExp&&N(p.attributeNameCheck,t)||p.attributeNameCheck instanceof Function&&p.attributeNameCheck(t))||t==="is"&&p.allowCustomizedBuiltInElements&&(p.tagNameCheck instanceof RegExp&&N(p.tagNameCheck,o)||p.tagNameCheck instanceof Function&&p.tagNameCheck(o))))return!1}else if(!De[t]){if(!N(Ve,q(o,Ke,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Lt(o,"data:")===0&&at[e])){if(!(tt&&!N(on,q(o,Ke,"")))){if(o)return!1}}}}}}return!0},Nt=function(e){return e!=="annotation-xml"&&Fe(e,rn)},At=function(e){M("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:h};let l=t.length;for(;l--;){const y=t[l],{name:_,namespaceURI:w,value:R}=y,te=g(_);let S=_==="value"?R:vt(R);if(o.attrName=te,o.attrValue=S,o.keepAttr=!0,o.forceKeepAttr=void 0,M("uponSanitizeAttribute",e,o),S=o.attrValue,o.forceKeepAttr||(me(_,e),!o.keepAttr))continue;if(!nt&&N(/\/>/i,S)){me(_,e);continue}if(Le&&N(/((--!?|])>)|<\/(style|title)/i,S)){me(_,e);continue}F&&ne([Se,be,we],bt=>{S=q(S,bt," ")});const St=g(e.nodeName);if(Et(St,te,S)){if(rt&&(te==="id"||te==="name")&&(me(_,e),S=an+S),A&&typeof ae=="object"&&typeof ae.getAttributeType=="function"&&!w)switch(ae.getAttributeType(St,te)){case"TrustedHTML":{S=A.createHTML(S);break}case"TrustedScriptURL":{S=A.createScriptURL(S);break}}try{w?e.setAttributeNS(w,_,S):e.setAttribute(_,S),_t(e)?v(e):He(r.removed)}catch{}}}M("afterSanitizeAttributes",e,null)},pn=function i(e){let t=null;const o=gt(e);for(M("beforeSanitizeShadowDOM",e,null);t=o.nextNode();){if(M("uponSanitizeShadowNode",t,null),yt(t))continue;const l=K(t);t.nodeType===U.element&&(l&&l.__depth?t.__depth=(t.__removalCount||0)+l.__depth+1:t.__depth=1),(t.__depth>=ct||t.__depth<0||ze(t.__depth))&&v(t),t.content instanceof D&&(t.content.__depth=t.__depth,i(t.content)),At(t)}M("afterSanitizeShadowDOM",e,null)};return r.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,l=null,y=null;if(ke=!i,ke&&(i="<!-->"),typeof i!="string"&&!Tt(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw X("dirty is not a string, aborting")}else throw X("toString is not a function");if(!r.isSupported)return i;if(ve||Ie(e),r.removed=[],typeof i=="string"&&(Q=!1),Q){if(i.nodeName){const R=g(i.nodeName);if(!d[R]||J[R])throw X("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof Ne)t=ht("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===U.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!z&&!F&&!P&&i.indexOf("<")===-1)return A&&ce?A.createHTML(i):i;if(t=ht(i),!t)return z?null:ce?V:""}t&&Oe&&v(t.firstChild);const _=gt(Q?i:t);for(;l=_.nextNode();){if(yt(l))continue;const R=K(l);l.nodeType===U.element&&(R&&R.__depth?l.__depth=(l.__removalCount||0)+R.__depth+1:l.__depth=1),(l.__depth>=ct||l.__depth<0||ze(l.__depth))&&v(l),l.content instanceof D&&(l.content.__depth=l.__depth,pn(l.content)),At(l)}if(Q)return i;if(z){if(se)for(y=Jt.call(t.ownerDocument);t.firstChild;)y.appendChild(t.firstChild);else y=t;return(h.shadowroot||h.shadowrootmode)&&(y=en.call(u,y,!0)),y}let w=P?t.outerHTML:t.innerHTML;return P&&d["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&N($e,t.ownerDocument.doctype.name)&&(w="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+w),F&&ne([Se,be,we],R=>{w=q(w,R," ")}),A&&ce?A.createHTML(w):w},r.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ie(i),ve=!0},r.clearConfig=function(){Y=null,ve=!1},r.isValidAttribute=function(i,e,t){Y||Ie({});const o=g(i),l=g(e);return Et(o,l,t)},r.addHook=function(i,e){typeof e=="function"&&(x[i]=x[i]||[],$(x[i],e))},r.removeHook=function(i){if(x[i])return He(x[i])},r.removeHooks=function(i){x[i]&&(x[i]=[])},r.removeAllHooks=function(){x={}},r}var Yt=Xe();return Yt})})(Ue);const bn=Ue.exports;function wn(n){let a;return function(...c){return n&&(a=n.apply(this,c),n=()=>{}),a}}function Rn(n){return n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}function Cn(n){return n.replace(/-./g,a=>a[1].toUpperCase())}function Ln(n){return n.toLowerCase().replace(/([_][a-z])/g,a=>a.toUpperCase().replace("_",""))}function vn(n){return n.replace(/\s/g,"-").toLowerCase()}function On(n,a=5){const c=Math.random().toString(36).substring(2,2+a);return n?n+c:c}function xn(n,a){return Math.random()*(a-n)+n}function Dn(n){return new window.DOMParser().parseFromString(n,"text/xml")}function gn(n){return n.nodeType===1}function _n(n){return n.nodeType===3}function Tn(n){var a;return gn(n)?!(n instanceof HTMLStyleElement):_n(n)?!!(!((a=n.textContent)===null||a===void 0)&&a.trim()):!1}function kn(n){for(let a=0;a<n.childNodes.length;a++){const c=n.childNodes.item(a);if(Tn(c))return!0}return!1}function Mn(n,a="./assets"){const[,c,C]=n.match(/^([a-z]+):\/\/(.*?)(\.svg)?$/)||[];return c?c==="http"||c==="https"?n:c==="assets"?dn(`${a}/${C}.svg`):null:n.startsWith("./")||n.startsWith("../")?n:null}function yn(n,a){const c=n.parentElement;return c?c.tagName===a.toUpperCase()?!0:yn(c,a):!1}function wt(n,a){return n?n.matches(a)?n:n.parentNode instanceof ShadowRoot?wt(n.parentNode.host,a):wt(n.parentElement,a):null}const In=(n,a)=>n.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1;function Un(n){var a;const c=Ue.exports.sanitize(`<style>${n}</style>`,{ALLOWED_TAGS:["style"],ALLOWED_ATTR:[],FORCE_BODY:!0}),C=document.createElement("div");return C.innerHTML=c,(a=C.querySelector("style"))===null||a===void 0?void 0:a.innerHTML}function En(n=document){var a;const c=n.activeElement;return c!=null&&c.shadowRoot&&(a=En(c.shadowRoot))!==null&&a!==void 0?a:c}async function Pn(){return new Promise(n=>setTimeout(n,10))}function Hn(n){let a=n;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a.parentNode instanceof ShadowRoot?a=a.parentNode.host:a=a.parentNode}return!1}function Nn(n){return n.parentNode?n.parentNode:n instanceof ShadowRoot?n.host:null}function Rt(n,a){if(a===n||a instanceof HTMLElement&&a.assignedSlot&&Rt(n,a.assignedSlot))return!0;const c=Nn(a);return c===null?!1:Rt(n,c)}function Fn(n,a){return n.reduce((c,C,pe)=>{const j=a(C,pe);return j in c||(c[j]=[]),c[j].push(C),c},{})}export{Nn as A,Rt as E,Fn as S,Pn as T,Ln as a,wt as b,On as c,Tn as d,xn as f,Mn as g,kn as h,bn as i,Hn as k,Cn as l,gn as m,Ue as n,Rn as o,wn as r,vn as s,Dn as u,En as v,In as w,Un as x,yn as y};
