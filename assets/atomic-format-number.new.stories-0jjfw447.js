import{r as d,n as u}from"./index-B-ZmIc0D.js";import{w as l}from"./result-wrapper-qW4bQRUT.js";import{w as p}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:f,engineConfig:b}=l({preprocessRequest:e=>{const r=JSON.parse(e.body.toString());return r.cq="@size>0",r.fieldsToInclude=["size"],r.numberOfResults=1,e.body=JSON.stringify(r),e}}),{decorator:h,play:y}=p(b),S={component:"atomic-format-number",title:"Atomic/Format/atomic-format-number",id:"atomic-format-number",render:d,decorators:[h],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:y},t={name:"Within Numeric Facet",decorators:[e=>u`
      <atomic-numeric-facet field="size"> ${e()} </atomic-numeric-facet>
    `]},o={name:"Within Numeric Result",decorators:[e=>u`
      <atomic-result-number field="size"> ${e()} </atomic-result-number>
    `,f]};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Within Numeric Facet',
  decorators: [story => html\`
      <atomic-numeric-facet field="size"> \${story()} </atomic-numeric-facet>
    \`]
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var n,m,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Within Numeric Result',
  decorators: [story => html\`
      <atomic-result-number field="size"> \${story()} </atomic-result-number>
    \`, resultDecorator]
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const F=["Facet","Result"];export{t as Facet,o as Result,F as __namedExportsOrder,S as default};
