var S="top",V="bottom",F="right",B="left",et="auto",ue=[S,V,F,B],$="start",G="end",tt="clippingParents",Ve="viewport",Q="popper",rt="reference",Ct=ue.reduce(function(e,t){return e.concat([t+"-"+$,t+"-"+G])},[]),Xt=[].concat(ue,[et]).reduce(function(e,t){return e.concat([t,t+"-"+$,t+"-"+G])},[]),nt="beforeRead",it="read",at="afterRead",ot="beforeMain",st="main",ft="afterMain",ut="beforeWrite",ct="write",vt="afterWrite",lt=[nt,it,at,ot,st,ft,ut,ct,vt];function T(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){var t=A(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=A(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ce(e){if(typeof ShadowRoot>"u")return!1;var t=A(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function pt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},i=t.attributes[r]||{},a=t.elements[r];!M(a)||!T(a)||(Object.assign(a.style,n),Object.keys(i).forEach(function(u){var o=i[u];o===!1?a.removeAttribute(u):a.setAttribute(u,o===!0?"":o)}))})}function dt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],a=t.attributes[n]||{},u=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),o=u.reduce(function(s,c){return s[c]="",s},{});!M(i)||!T(i)||(Object.assign(i.style,o),Object.keys(a).forEach(function(s){i.removeAttribute(s)}))})}}const Yt={name:"applyStyles",enabled:!0,phase:"write",fn:pt,effect:dt,requires:["computeStyles"]};function ve(e){return e.split("-")[0]}var z=Math.max,re=Math.min,Y=Math.round;function se(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function qe(){return!/^((?!chrome|android).)*safari/i.test(se())}function I(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),i=1,a=1;t&&M(e)&&(i=e.offsetWidth>0&&Y(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Y(n.height)/e.offsetHeight||1);var u=C(e)?A(e):window,o=u.visualViewport,s=!qe()&&r,c=(n.left+(s&&o?o.offsetLeft:0))/i,f=(n.top+(s&&o?o.offsetTop:0))/a,j=n.width/i,y=n.height/a;return{width:j,height:y,top:f,right:c+j,bottom:f+y,left:c,x:c,y:f}}function Ne(e){var t=I(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ht(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ce(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function H(e){return A(e).getComputedStyle(e)}function mt(e){return["table","td","th"].indexOf(T(e))>=0}function q(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function ne(e){return T(e)==="html"?e:e.assignedSlot||e.parentNode||(ce(e)?e.host:null)||q(e)}function Pe(e){return!M(e)||H(e).position==="fixed"?null:e.offsetParent}function gt(e){var t=/firefox/i.test(se()),r=/Trident/i.test(se());if(r&&M(e)){var n=H(e);if(n.position==="fixed")return null}var i=ne(e);for(ce(i)&&(i=i.host);M(i)&&["html","body"].indexOf(T(i))<0;){var a=H(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function ie(e){for(var t=A(e),r=Pe(e);r&&mt(r)&&H(r).position==="static";)r=Pe(r);return r&&(T(r)==="html"||T(r)==="body"&&H(r).position==="static")?t:r||gt(e)||t}function ze(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e,t,r){return z(e,re(t,r))}function yt(e,t,r){var n=te(e,t,r);return n>r?r:n}function Fe(){return{top:0,right:0,bottom:0,left:0}}function bt(e){return Object.assign({},Fe(),e)}function wt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function le(e){return e.split("-")[1]}var xt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ot(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Y(r*i)/i||0,y:Y(n*i)/i||0}}function Se(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,u=e.offsets,o=e.position,s=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,j=e.isFixed,y=u.x,v=y===void 0?0:y,k=u.y,m=k===void 0?0:k,p=typeof f=="function"?f({x:v,y:m}):{x:v,y:m};v=p.x,m=p.y;var g=u.hasOwnProperty("x"),w=u.hasOwnProperty("y"),b=B,l=S,d=window;if(c){var h=ie(r),x="clientHeight",L="clientWidth";if(h===A(r)&&(h=q(r),H(h).position!=="static"&&o==="absolute"&&(x="scrollHeight",L="scrollWidth")),h=h,i===S||(i===B||i===F)&&a===G){l=V;var E=j&&h===d&&d.visualViewport?d.visualViewport.height:h[x];m-=E-n.height,m*=s?1:-1}if(i===B||(i===S||i===V)&&a===G){b=F;var O=j&&h===d&&d.visualViewport?d.visualViewport.width:h[L];v-=O-n.width,v*=s?1:-1}}var R=Object.assign({position:o},c&&xt),W=f===!0?Ot({x:v,y:m},A(r)):{x:v,y:m};if(v=W.x,m=W.y,s){var D;return Object.assign({},R,(D={},D[l]=w?"0":"",D[b]=g?"0":"",D.transform=(d.devicePixelRatio||1)<=1?"translate("+v+"px, "+m+"px)":"translate3d("+v+"px, "+m+"px, 0)",D))}return Object.assign({},R,(t={},t[l]=w?m+"px":"",t[b]=g?v+"px":"",t.transform="",t))}function jt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=n===void 0?!0:n,a=r.adaptive,u=a===void 0?!0:a,o=r.roundOffsets,s=o===void 0?!0:o,c={placement:ve(t.placement),variation:le(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Se(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Se(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const It={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jt,data:{}};var ee={passive:!0};function Et(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=i===void 0?!0:i,u=n.resize,o=u===void 0?!0:u,s=A(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(f){f.addEventListener("scroll",r.update,ee)}),o&&s.addEventListener("resize",r.update,ee),function(){a&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ee)}),o&&s.removeEventListener("resize",r.update,ee)}}const Qt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Et,data:{}};function pe(e){var t=A(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function de(e){return I(q(e)).left+pe(e).scrollLeft}function At(e,t){var r=A(e),n=q(e),i=r.visualViewport,a=n.clientWidth,u=n.clientHeight,o=0,s=0;if(i){a=i.width,u=i.height;var c=qe();(c||!c&&t==="fixed")&&(o=i.offsetLeft,s=i.offsetTop)}return{width:a,height:u,x:o+de(e),y:s}}function Lt(e){var t,r=q(e),n=pe(e),i=(t=e.ownerDocument)==null?void 0:t.body,a=z(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),u=z(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-n.scrollLeft+de(e),s=-n.scrollTop;return H(i||r).direction==="rtl"&&(o+=z(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:u,x:o,y:s}}function he(e){var t=H(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function Ce(e){return["html","body","#document"].indexOf(T(e))>=0?e.ownerDocument.body:M(e)&&he(e)?e:Ce(ne(e))}function Z(e,t){var r;t===void 0&&(t=[]);var n=Ce(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),a=A(n),u=i?[a].concat(a.visualViewport||[],he(n)?n:[]):n,o=t.concat(u);return i?o:o.concat(Z(ne(u)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Dt(e,t){var r=I(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function He(e,t,r){return t===Ve?fe(At(e,r)):C(t)?Dt(t,r):fe(Lt(q(e)))}function Mt(e){var t=Z(ne(e)),r=["absolute","fixed"].indexOf(H(e).position)>=0,n=r&&M(e)?ie(e):e;return C(n)?t.filter(function(i){return C(i)&&ht(i,n)&&T(i)!=="body"}):[]}function Rt(e,t,r,n){var i=t==="clippingParents"?Mt(e):[].concat(t),a=[].concat(i,[r]),u=a[0],o=a.reduce(function(s,c){var f=He(e,c,n);return s.top=z(f.top,s.top),s.right=re(f.right,s.right),s.bottom=re(f.bottom,s.bottom),s.left=z(f.left,s.left),s},He(e,u,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Xe(e){var t=e.reference,r=e.element,n=e.placement,i=n?ve(n):null,a=n?le(n):null,u=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,s;switch(i){case S:s={x:u,y:t.y-r.height};break;case V:s={x:u,y:t.y+t.height};break;case F:s={x:t.x+t.width,y:o};break;case B:s={x:t.x-r.width,y:o};break;default:s={x:t.x,y:t.y}}var c=i?ze(i):null;if(c!=null){var f=c==="y"?"height":"width";switch(a){case $:s[c]=s[c]-(t[f]/2-r[f]/2);break;case G:s[c]=s[c]+(t[f]/2-r[f]/2);break}}return s}function Tt(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=n===void 0?e.placement:n,a=r.strategy,u=a===void 0?e.strategy:a,o=r.boundary,s=o===void 0?tt:o,c=r.rootBoundary,f=c===void 0?Ve:c,j=r.elementContext,y=j===void 0?Q:j,v=r.altBoundary,k=v===void 0?!1:v,m=r.padding,p=m===void 0?0:m,g=bt(typeof p!="number"?p:wt(p,ue)),w=y===Q?rt:Q,b=e.rects.popper,l=e.elements[k?w:y],d=Rt(C(l)?l:l.contextElement||q(e.elements.popper),s,f,u),h=I(e.elements.reference),x=Xe({reference:h,element:b,strategy:"absolute",placement:i}),L=fe(Object.assign({},b,x)),E=y===Q?L:h,O={top:d.top-E.top+g.top,bottom:E.bottom-d.bottom+g.bottom,left:d.left-E.left+g.left,right:E.right-d.right+g.right},R=e.modifiersData.offset;if(y===Q&&R){var W=R[i];Object.keys(O).forEach(function(D){var J=[F,V].indexOf(D)>=0?1:-1,K=[S,V].indexOf(D)>=0?"y":"x";O[D]+=W[K]*J})}return O}function kt(e){var t=e.state,r=e.name;t.modifiersData[r]=Xe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Zt={name:"popperOffsets",enabled:!0,phase:"read",fn:kt,data:{}};function Pt(e){return e==="x"?"y":"x"}function St(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,a=i===void 0?!0:i,u=r.altAxis,o=u===void 0?!1:u,s=r.boundary,c=r.rootBoundary,f=r.altBoundary,j=r.padding,y=r.tether,v=y===void 0?!0:y,k=r.tetherOffset,m=k===void 0?0:k,p=Tt(t,{boundary:s,rootBoundary:c,padding:j,altBoundary:f}),g=ve(t.placement),w=le(t.placement),b=!w,l=ze(g),d=Pt(l),h=t.modifiersData.popperOffsets,x=t.rects.reference,L=t.rects.popper,E=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,O=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(h){if(a){var D,J=l==="y"?S:B,K=l==="y"?V:F,P=l==="y"?"height":"width",X=h[l],me=X+p[J],ge=X-p[K],ye=v?-L[P]/2:0,Ye=w===$?x[P]:L[P],Ie=w===$?-L[P]:-x[P],be=t.elements.arrow,Qe=v&&be?Ne(be):{width:0,height:0},we=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Fe(),xe=we[J],Oe=we[K],_=te(0,x[P],Qe[P]),Ze=b?x[P]/2-ye-_-xe-O.mainAxis:Ye-_-xe-O.mainAxis,$e=b?-x[P]/2+ye+_+Oe+O.mainAxis:Ie+_+Oe+O.mainAxis,ae=t.elements.arrow&&ie(t.elements.arrow),Ge=ae?l==="y"?ae.clientTop||0:ae.clientLeft||0:0,je=(D=R==null?void 0:R[l])!=null?D:0,Je=X+Ze-je-Ge,Ke=X+$e-je,Ee=te(v?re(me,Je):me,X,v?z(ge,Ke):ge);h[l]=Ee,W[l]=Ee-X}if(o){var Ae,_e=l==="x"?S:B,Ue=l==="x"?V:F,N=h[d],U=d==="y"?"height":"width",Le=N+p[_e],De=N-p[Ue],oe=[S,B].indexOf(g)!==-1,Me=(Ae=R==null?void 0:R[d])!=null?Ae:0,Re=oe?Le:N-x[U]-L[U]-Me+O.altAxis,Te=oe?N+x[U]+L[U]-Me-O.altAxis:De,ke=v&&oe?yt(Re,N,Te):te(v?Re:Le,N,v?Te:De);h[d]=ke,W[d]=ke-N}t.modifiersData[n]=W}}const $t={name:"preventOverflow",enabled:!0,phase:"main",fn:St,requiresIfExists:["offset"]};function Ht(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Wt(e){return e===A(e)||!M(e)?pe(e):Ht(e)}function Bt(e){var t=e.getBoundingClientRect(),r=Y(t.width)/e.offsetWidth||1,n=Y(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Vt(e,t,r){r===void 0&&(r=!1);var n=M(t),i=M(t)&&Bt(t),a=q(t),u=I(e,i,r),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((T(t)!=="body"||he(a))&&(o=Wt(t)),M(t)?(s=I(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=de(a))),{x:u.left+o.scrollLeft-s.x,y:u.top+o.scrollTop-s.y,width:u.width,height:u.height}}function qt(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function i(a){r.add(a.name);var u=[].concat(a.requires||[],a.requiresIfExists||[]);u.forEach(function(o){if(!r.has(o)){var s=t.get(o);s&&i(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||i(a)}),n}function Nt(e){var t=qt(e);return lt.reduce(function(r,n){return r.concat(t.filter(function(i){return i.phase===n}))},[])}function zt(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ft(e){var t=e.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var We={placement:"bottom",modifiers:[],strategy:"absolute"};function Be(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Gt(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,a=i===void 0?We:i;return function(o,s,c){c===void 0&&(c=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},We,a),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},j=[],y=!1,v={state:f,setOptions:function(g){var w=typeof g=="function"?g(f.options):g;m(),f.options=Object.assign({},a,f.options,w),f.scrollParents={reference:C(o)?Z(o):o.contextElement?Z(o.contextElement):[],popper:Z(s)};var b=Nt(Ft([].concat(n,f.options.modifiers)));return f.orderedModifiers=b.filter(function(l){return l.enabled}),k(),v.update()},forceUpdate:function(){if(!y){var g=f.elements,w=g.reference,b=g.popper;if(Be(w,b)){f.rects={reference:Vt(w,ie(b),f.options.strategy==="fixed"),popper:Ne(b)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(O){return f.modifiersData[O.name]=Object.assign({},O.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var d=f.orderedModifiers[l],h=d.fn,x=d.options,L=x===void 0?{}:x,E=d.name;typeof h=="function"&&(f=h({state:f,options:L,name:E,instance:v})||f)}}}},update:zt(function(){return new Promise(function(p){v.forceUpdate(),p(f)})}),destroy:function(){m(),y=!0}};if(!Be(o,s))return v;v.setOptions(c).then(function(p){!y&&c.onFirstUpdate&&c.onFirstUpdate(p)});function k(){f.orderedModifiers.forEach(function(p){var g=p.name,w=p.options,b=w===void 0?{}:w,l=p.effect;if(typeof l=="function"){var d=l({state:f,name:g,instance:v,options:b}),h=function(){};j.push(d||h)}})}function m(){j.forEach(function(p){return p()}),j=[]}return v}}export{bt as $,Gt as D,Ne as F,ht as I,Zt as M,ie as Q,Yt as R,$t as S,ve as T,ze as V,te as X,wt as _,et as a,ue as b,S as c,Xt as d,B as e,It as i,Tt as j,Ct as l,F as n,$ as o,le as r,V as t,Qt as u};
