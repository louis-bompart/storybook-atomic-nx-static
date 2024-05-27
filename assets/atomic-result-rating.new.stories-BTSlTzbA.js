import{r as s}from"./index-B-ZmIc0D.js";import{w as i}from"./result-wrapper-qW4bQRUT.js";import{w as c}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:d,engineConfig:m}=i({preprocessRequest:t=>{const r=JSON.parse(t.body);return r.aq="@snrating",r.fieldsToInclude=[...r.fieldsToInclude,"snrating"],r.numberOfResults=1,t.body=JSON.stringify(r),t}}),{decorator:l,play:u}=c(m),R={component:"atomic-result-rating",title:"Atomic/ResultList/ResultRating",id:"atomic-result-rating",render:s,decorators:[d,l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:u},e={name:"atomic-result-rating",args:{field:"snrating"}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'atomic-result-rating',
  args: {
    field: 'snrating'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,R as default};
