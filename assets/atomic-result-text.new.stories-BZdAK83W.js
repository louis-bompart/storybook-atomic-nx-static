import{r as n}from"./index-B-ZmIc0D.js";import{w as c}from"./result-wrapper-qW4bQRUT.js";import{w as m}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:p,engineConfig:i}=c({search:{preprocessSearchResponseMiddleware:r=>(r.body.results.forEach(s=>s.excerpt="Some Text content"),r)}}),{decorator:d,play:l}=m(i),h={component:"atomic-result-text",title:"Atomic/ResultList/ResultText",id:"atomic-result-text",render:n,decorators:[p,d],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:l},e={name:"atomic-result-text",args:{field:"excerpt"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'atomic-result-text',
  args: {
    field: 'excerpt'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,h as default};
