import{r as n}from"./index-B-ZmIc0D.js";import{w as m}from"./result-wrapper-qW4bQRUT.js";import{w as c}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:i,engineConfig:d}=m({search:{preprocessSearchResponseMiddleware:e=>(e.body.results.forEach(s=>s.raw.randomimage="https://picsum.photos/200"),e)}}),{decorator:p,play:l}=c(d),w={component:"atomic-result-image",title:"Atomic/ResultList/ResultImage",id:"atomic-result-image",render:n,decorators:[i,p],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:l},r={name:"atomic-result-image",args:{field:"randomimage"}};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-result-image',
  args: {
    field: 'randomimage'
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const I=["FirstStory"];export{r as FirstStory,I as __namedExportsOrder,w as default};
