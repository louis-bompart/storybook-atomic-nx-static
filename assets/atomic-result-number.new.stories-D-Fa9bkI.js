import{r as s}from"./index-B-ZmIc0D.js";import{w as i}from"./result-wrapper-qW4bQRUT.js";import{w as m}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:c,engineConfig:l}=i({preprocessRequest:r=>{const e=JSON.parse(r.body);return e.fieldsToInclude=[...e.fieldsToInclude,"size"],e.numberOfResults=1,r.body=JSON.stringify(e),r}}),{decorator:u,play:d}=m(l),y={component:"atomic-result-number",title:"Atomic/ResultList/ResultNumber",id:"atomic-result-number",render:s,decorators:[c,u],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:d},t={name:"atomic-result-date",args:{default:`
      <span style="font-weight: bold; margin-right: 0.25rem;">File size:</span>
      <atomic-format-unit unit="byte" unit-display="long"></atomic-format-unit>
    `,field:"size"}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-result-date',
  args: {
    default: \`
      <span style="font-weight: bold; margin-right: 0.25rem;">File size:</span>
      <atomic-format-unit unit="byte" unit-display="long"></atomic-format-unit>
    \`,
    field: 'size'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,y as default};
