import{r as u,n as s}from"./index-B-ZmIc0D.js";import{w as d}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:l,play:f}=d(),z={component:"atomic-format-unit",title:"Atomic/Format/atomic-format-unit",id:"atomic-format-unit",render:u,decorators:[l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:f,args:{unit:"byte"}},e={name:"Within Numeric Facet",decorators:[r=>s`
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,n,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const b=["Facet","Result"];export{e as Facet,t as Result,b as __namedExportsOrder,z as default};
