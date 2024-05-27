import{r as n}from"./index-B-ZmIc0D.js";import{w as c}from"./result-wrapper-qW4bQRUT.js";import{w as m}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:l,engineConfig:i}=c({search:{preprocessSearchResponseMiddleware:r=>(r.body.results.forEach(s=>s.excerpt="<div>Some HTML content</div>"),r)}}),{decorator:p,play:d}=m(i),x={component:"atomic-result-html",title:"Atomic/ResultList/ResultHtml",id:"atomic-result-html",render:n,decorators:[l,p],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:d},e={name:"atomic-result-html",args:{field:"excerpt"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'atomic-result-html',
  args: {
    field: 'excerpt'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,x as default};
