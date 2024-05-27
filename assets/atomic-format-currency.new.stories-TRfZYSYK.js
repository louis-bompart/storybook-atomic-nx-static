import{r as d,n as u}from"./index-B-ZmIc0D.js";import{w as l}from"./result-wrapper-qW4bQRUT.js";import{w as p}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:f,engineConfig:y}=l({preprocessRequest:r=>{const e=JSON.parse(r.body.toString());return e.cq="@sncost>0",e.fieldsToInclude=["sncost"],e.numberOfResults=1,r.body=JSON.stringify(e),r}}),{decorator:g,play:S}=p(y),R={component:"atomic-format-currency",title:"Atomic/Format/atomic-format-currency",id:"atomic-format-currency",render:d,decorators:[g],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:S},t={name:"Within Numeric Facet",decorators:[r=>u`
      <atomic-numeric-facet field="sncost"> ${r()} </atomic-numeric-facet>
    `],args:{currency:"USD"}},o={name:"Within Numeric Result",decorators:[r=>u`
      <atomic-result-number field="sncost"> ${r()} </atomic-result-number>
    `,f],args:{currency:"USD"}};var c,n,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Within Numeric Facet',
  decorators: [story => html\`
      <atomic-numeric-facet field="sncost"> \${story()} </atomic-numeric-facet>
    \`],
  args: {
    currency: 'USD'
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,m,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Within Numeric Result',
  decorators: [story => html\`
      <atomic-result-number field="sncost"> \${story()} </atomic-result-number>
    \`, resultDecorator],
  args: {
    currency: 'USD'
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const F=["Facet","Result"];export{t as Facet,o as Result,F as __namedExportsOrder,R as default};
