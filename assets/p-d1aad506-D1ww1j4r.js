function l(n){const{hasInput:t,hasInputRange:e,searchStatusState:r,facetValues:u}=n;return t?e?!0:!(!r.hasResults||!(u.filter(s=>s.numberOfResults||s.state!=="idle")||[]).length):!1}function h(n,t){const e=[],r=[];return n.forEach(u=>{t[u.facetId]&&t[u.facetId].isHidden()?r.push(u):e.push(u)}),{visibleFacets:e,invisibleFacets:r}}function d(n,t){t!==-1&&n.forEach((e,r)=>{e.isCollapsed=r+1>t})}function f(n){return n.tagName==="ATOMIC-AUTOMATIC-FACET-GENERATOR"}function i(n){return"facetId"in n}function A(n){return Array.from(n.children).filter(e=>i(e))}function p(n){return Array.from(n.children).find(f)}const a=(n,t=0)=>new Array(n).fill(null).map(()=>new Array(t));function c(n,t){var e;for(let r=0;r<t.length;r++)if(!((e=t[r])===null||e===void 0)&&e.contains(n))return r;return t.length}function I(n,...t){const e=a(t.length+1);for(const r of n){const u=c(r,t);e[u].push(r)}return e}export{p as a,I as f,l as n,d as r,A as s,h as t};