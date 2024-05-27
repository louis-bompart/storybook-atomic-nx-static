import{r as s}from"./index-B-ZmIc0D.js";import{w as u}from"./result-wrapper-qW4bQRUT.js";import{w as l}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:c,engineConfig:i}=u({preprocessRequest:t=>{const a=JSON.parse(t.body.toString());return a.cq="@language=French @language=Portuguese @language=German @language=Arabic @language=Japanese @language=English",t.body=JSON.stringify(a),t}}),{decorator:m,play:g}=l(i),h={component:"atomic-result-multi-value-text",title:"Atomic/ResultList/ResultMultiValueText",id:"atomic-result-multi-value-text",render:s,decorators:[c,m],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:g},e={name:"atomic-result-multi-value-text",args:{field:"language"}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'atomic-result-multi-value-text',
  args: {
    field: 'language'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,h as default};
