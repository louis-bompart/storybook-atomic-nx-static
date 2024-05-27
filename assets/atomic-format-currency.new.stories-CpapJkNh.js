import{r as u,n as i}from"./index-B-ZmIc0D.js";import{w as d}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:l,play:f}=d(),g={component:"atomic-format-currency",title:"Atomic/Format/atomic-format-currency",id:"atomic-format-currency",render:u,decorators:[l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:f},e={name:"Within Numeric Facet",decorators:[t=>i`
      <atomic-numeric-facet field="sncost"> ${t()} </atomic-numeric-facet>
    `],args:{currency:"USD"}},r={name:"Within Numeric Result",decorators:[t=>i`
      <style>
        atomic-numeric-facet {
          display: none;
        }
      </style>
      <atomic-numeric-facet field="sncost"></atomic-numeric-facet>
      <atomic-result-number field="sncost"> ${t()} </atomic-result-number>
    `],args:{currency:"USD"}};var c,a,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Within Numeric Facet',
  decorators: [story => html\`
      <atomic-numeric-facet field="sncost"> \${story()} </atomic-numeric-facet>
    \`],
  args: {
    currency: 'USD'
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,s,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Within Numeric Result',
  decorators: [story => html\`
      <style>
        atomic-numeric-facet {
          display: none;
        }
      </style>
      <atomic-numeric-facet field="sncost"></atomic-numeric-facet>
      <atomic-result-number field="sncost"> \${story()} </atomic-result-number>
    \`],
  args: {
    currency: 'USD'
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const S=["Facet","Result"];export{e as Facet,r as Result,S as __namedExportsOrder,g as default};
