import{r as s}from"./index-B-ZmIc0D.js";import{w as i}from"./result-wrapper-qW4bQRUT.js";import{w as m}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:u,engineConfig:c}=i({preprocessRequest:r=>{const e=JSON.parse(r.body);return e.fieldsToInclude=[...e.fieldsToInclude,"size"],e.numberOfResults=1,r.body=JSON.stringify(e),r}}),{decorator:l,play:d}=m(c),y={component:"atomic-result-number",title:"Atomic/ResultList/ResultNumber",id:"atomic-result-number",render:s,decorators:[u,l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:d},t={name:"atomic-result-number",args:{default:`
      <span style="font-weight: bold; margin-right: 0.25rem;">File size:</span>
      <atomic-format-unit unit="byte" unit-display="long"></atomic-format-unit>
    `,field:"size"}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-result-number',
  args: {
    default: \`
      <span style="font-weight: bold; margin-right: 0.25rem;">File size:</span>
      <atomic-format-unit unit="byte" unit-display="long"></atomic-format-unit>
    \`,
    field: 'size'
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,y as default};
