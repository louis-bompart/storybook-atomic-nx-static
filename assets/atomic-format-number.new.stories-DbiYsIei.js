import{r as u,n as s}from"./index-B-ZmIc0D.js";import{w as d}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:l,play:f}=d(),b={component:"atomic-format-number",title:"Atomic/Format/atomic-format-number",id:"atomic-format-number",render:u,decorators:[l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:f},e={name:"Within Numeric Facet",decorators:[r=>s`
      <atomic-numeric-facet field="size"> ${r()} </atomic-numeric-facet>
    `]},t={name:"Within Numeric Result",decorators:[r=>s`
      <style>
        atomic-numeric-facet {
          display: none;
        }
      </style>
      <atomic-numeric-facet field="size"></atomic-numeric-facet>
      <atomic-result-number field="size"> ${r()} </atomic-result-number>
    `]};var a,o,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Within Numeric Facet',
  decorators: [story => html\`
      <atomic-numeric-facet field="size"> \${story()} </atomic-numeric-facet>
    \`]
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,n,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Within Numeric Result',
  decorators: [story => html\`
      <style>
        atomic-numeric-facet {
          display: none;
        }
      </style>
      <atomic-numeric-facet field="size"></atomic-numeric-facet>
      <atomic-result-number field="size"> \${story()} </atomic-result-number>
    \`]
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const z=["Facet","Result"];export{e as Facet,t as Result,z as __namedExportsOrder,b as default};
