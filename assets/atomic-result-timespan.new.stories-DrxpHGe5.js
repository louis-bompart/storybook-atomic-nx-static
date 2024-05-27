import{r as n}from"./index-B-ZmIc0D.js";import{w as i}from"./result-wrapper-qW4bQRUT.js";import{w as c}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:d,engineConfig:m}=i({preprocessRequest:r=>{const e=JSON.parse(r.body.toString());return e.cq="@ytvideoduration",e.fieldsToInclude=["ytvideoduration"],e.numberOfResults=1,r.body=JSON.stringify(e),r}}),{decorator:u,play:p}=c(m),I={component:"atomic-result-timespan",title:"Atomic/ResultList/ResultTimespan",id:"atomic-result-timespan",render:n,decorators:[d,u],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:p},t={name:"atomic-result-timespan",args:{field:"ytvideoduration",unit:"s"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-result-timespan',
  args: {
    field: 'ytvideoduration',
    unit: 's'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,I as default};
