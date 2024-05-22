/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,lt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),ht=new WeakMap;let jt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(lt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ht.set(e,t))}return t}toString(){return this.cssText}};const zt=o=>new jt(typeof o=="string"?o:o+"",void 0,xt),Dt=(o,t)=>{lt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=B.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},at=lt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const z=window,dt=z.trustedTypes,Vt=dt?dt.emptyScript:"",ct=z.reactiveElementPolyfillSupport,it={toAttribute(o,t){switch(t){case Boolean:o=o?Vt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},wt=(o,t)=>t!==o&&(t==t||o==o),F={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:wt},st="finalized";let C=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty(st))return!1;this[st]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(at(s))}else t!==void 0&&e.push(at(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=F){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:it).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:it;this._$El=r,this[r]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};C[st]=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},ct==null||ct({ReactiveElement:C}),((K=z.reactiveElementVersions)!==null&&K!==void 0?K:z.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const D=window,H=D.trustedTypes,$t=H?H.createPolicy("lit-html",{createHTML:o=>o}):void 0,nt="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Nt="?"+A,Wt=`<${Nt}>`,S=document,V=()=>S.createComment(""),M=o=>o===null||typeof o!="object"&&typeof o!="function",Ut=Array.isArray,Zt=o=>Ut(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,pt=/>/g,g=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,_t=/"/g,Pt=/^(?:script|style|textarea|title)$/i,R=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),At=new WeakMap,y=S.createTreeWalker(S,129,null,!1);function Tt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}const qt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=P;for(let c=0;c<e;c++){const l=o[c];let h,a,d=-1,$=0;for(;$<l.length&&(n.lastIndex=$,a=n.exec(l),a!==null);)$=n.lastIndex,n===P?a[1]==="!--"?n=ut:a[1]!==void 0?n=pt:a[2]!==void 0?(Pt.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=g):a[3]!==void 0&&(n=g):n===g?a[0]===">"?(n=s??P,d=-1):a[1]===void 0?d=-2:(d=n.lastIndex-a[2].length,h=a[1],n=a[3]===void 0?g:a[3]==='"'?_t:vt):n===_t||n===vt?n=g:n===ut||n===pt?n=P:(n=g,s=void 0);const u=n===g&&o[c+1].startsWith("/>")?" ":"";r+=n===P?l+Wt:d>=0?(i.push(h),l.slice(0,d)+nt+l.slice(d)+A+u):l+A+(d===-2?(i.push(void 0),c):u)}return[Tt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let ot=class Mt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const c=t.length-1,l=this.parts,[h,a]=qt(t,e);if(this.el=Mt.createElement(h,i),y.currentNode=this.el.content,e===2){const d=this.el.content,$=d.firstChild;$.remove(),d.append(...$.childNodes)}for(;(s=y.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const $ of s.getAttributeNames())if($.endsWith(nt)||$.startsWith(A)){const u=a[n++];if(d.push($),u!==void 0){const J=s.getAttribute(u.toLowerCase()+nt).split(A),_=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:_[2],strings:J,ctor:_[1]==="."?Kt:_[1]==="?"?Gt:_[1]==="@"?Qt:Z})}else l.push({type:6,index:r})}for(const $ of d)s.removeAttribute($)}if(Pt.test(s.tagName)){const d=s.textContent.split(A),$=d.length-1;if($>0){s.textContent=H?H.emptyScript:"";for(let u=0;u<$;u++)s.append(d[u],V()),y.nextNode(),l.push({type:2,index:++r});s.append(d[$],V())}}}else if(s.nodeType===8)if(s.data===Nt)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:r}),d+=A.length-1}r++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}};function x(o,t,e=o,i){var s,r,n,c;if(t===R)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=M(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=x(o,l._$AS(o,t.values),l,i)),t}let Jt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);y.currentNode=r;let n=y.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let a;h.type===2?a=new Rt(n,n.nextSibling,this,t):h.type===1?a=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(a=new Xt(n,this,t)),this._$AV.push(a),h=s[++l]}c!==(h==null?void 0:h.index)&&(n=y.nextNode(),c++)}return y.currentNode=S,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Rt=class Ot{constructor(t,e,i,s){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),M(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ot.createElement(Tt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new Jt(r,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new ot(t)),e}T(t){Ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Ot(this.k(V()),this.k(V()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Z=class{constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=x(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=x(this,c[i+l],e,l),h===R&&(h=this._$AH[l]),n||(n=!M(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Kt=class extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}};const Ft=H?H.emptyScript:"";let Gt=class extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Ft):this.element.removeAttribute(this.name)}},Qt=class extends Z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=x(this,t,e,0))!==null&&i!==void 0?i:p)===R)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Xt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};const ft=D.litHtmlPolyfillSupport;ft==null||ft(ot,Rt),((G=D.litHtmlVersions)!==null&&G!==void 0?G:D.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const W=window,w=W.trustedTypes,gt=w?w.createPolicy("lit-html",{createHTML:o=>o}):void 0,rt="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+f,Yt=`<${kt}>`,b=document,O=()=>b.createComment(""),k=o=>o===null||typeof o!="object"&&typeof o!="function",It=Array.isArray,te=o=>It(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,yt=/>/g,m=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,St=/"/g,Lt=/^(?:script|style|textarea|title)$/i,N=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),bt=new WeakMap,E=b.createTreeWalker(b,129,null,!1);function Bt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}const ee=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=T;for(let c=0;c<e;c++){const l=o[c];let h,a,d=-1,$=0;for(;$<l.length&&(n.lastIndex=$,a=n.exec(l),a!==null);)$=n.lastIndex,n===T?a[1]==="!--"?n=mt:a[1]!==void 0?n=yt:a[2]!==void 0?(Lt.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=m):a[3]!==void 0&&(n=m):n===m?a[0]===">"?(n=s??T,d=-1):a[1]===void 0?d=-2:(d=n.lastIndex-a[2].length,h=a[1],n=a[3]===void 0?m:a[3]==='"'?St:Et):n===St||n===Et?n=m:n===mt||n===yt?n=T:(n=m,s=void 0);const u=n===m&&o[c+1].startsWith("/>")?" ":"";r+=n===T?l+Yt:d>=0?(i.push(h),l.slice(0,d)+rt+l.slice(d)+f+u):l+f+(d===-2?(i.push(void 0),c):u)}return[Bt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const c=t.length-1,l=this.parts,[h,a]=ee(t,e);if(this.el=I.createElement(h,i),E.currentNode=this.el.content,e===2){const d=this.el.content,$=d.firstChild;$.remove(),d.append(...$.childNodes)}for(;(s=E.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const $ of s.getAttributeNames())if($.endsWith(rt)||$.startsWith(f)){const u=a[n++];if(d.push($),u!==void 0){const J=s.getAttribute(u.toLowerCase()+rt).split(f),_=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:_[2],strings:J,ctor:_[1]==="."?se:_[1]==="?"?oe:_[1]==="@"?re:q})}else l.push({type:6,index:r})}for(const $ of d)s.removeAttribute($)}if(Lt.test(s.tagName)){const d=s.textContent.split(f),$=d.length-1;if($>0){s.textContent=w?w.emptyScript:"";for(let u=0;u<$;u++)s.append(d[u],O()),E.nextNode(),l.push({type:2,index:++r});s.append(d[$],O())}}}else if(s.nodeType===8)if(s.data===kt)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(f,d+1))!==-1;)l.push({type:7,index:r}),d+=f.length-1}r++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function U(o,t,e=o,i){var s,r,n,c;if(t===N)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=k(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=U(o,l._$AS(o,t.values),l,i)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);E.currentNode=r;let n=E.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let a;h.type===2?a=new L(n,n.nextSibling,this,t):h.type===1?a=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(a=new le(n,this,t)),this._$AV.push(a),h=s[++l]}c!==(h==null?void 0:h.index)&&(n=E.nextNode(),c++)}return E.currentNode=b,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),k(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):te(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(Bt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new ie(r,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new I(t)),e}T(t){It(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new L(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class q{constructor(t,e,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=U(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=U(this,c[i+l],e,l),h===N&&(h=this._$AH[l]),n||(n=!k(h)||h!==this._$AH[l]),h===v?t=v:t!==v&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class se extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const ne=w?w.emptyScript:"";class oe extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,ne):this.element.removeAttribute(this.name)}}class re extends q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=U(this,t,e,0))!==null&&i!==void 0?i:v)===N)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class le{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Ct=W.litHtmlPolyfillSupport;Ct==null||Ct(I,L),((X=W.litHtmlVersions)!==null&&X!==void 0?X:W.litHtmlVersions=[]).push("2.8.0");const he=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new L(t.insertBefore(O(),c),c,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt,et;class j extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=he(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return N}}j.finalized=!0,j._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:j});const Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:j});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.3");export{he as D};
