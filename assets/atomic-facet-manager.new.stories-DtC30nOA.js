import{r as c,n}from"./index-B-ZmIc0D.js";import{w as l}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:i,play:s}=l(),p={component:"atomic-facet-manager",title:"Atomic/Breadbox",id:"atomic-facet-manager",render:c,decorators:[i],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:s,argTypes:{default:{control:!1}}},a={name:"atomic-facet-manager",decorators:[r=>n`
      <style>
        atomic-facet-manager {
          width: 500px;
          margin: auto;
          display: block;
        }
      </style>
      ${r()}
    `],args:{default:`
      <atomic-facet field="author" label="Authors"></atomic-facet>
      <atomic-facet field="language" label="Language"></atomic-facet>
      <atomic-facet
        field="objecttype"
        label="Type"
        display-values-as="link"
      ></atomic-facet>
      <atomic-facet
        field="year"
        label="Year"
        display-values-as="box"
      ></atomic-facet>
    `}};var e,t,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'atomic-facet-manager',
  decorators: [story => html\`
      <style>
        atomic-facet-manager {
          width: 500px;
          margin: auto;
          display: block;
        }
      </style>
      \${story()}
    \`],
  args: {
    default: \`
      <atomic-facet field="author" label="Authors"></atomic-facet>
      <atomic-facet field="language" label="Language"></atomic-facet>
      <atomic-facet
        field="objecttype"
        label="Type"
        display-values-as="link"
      ></atomic-facet>
      <atomic-facet
        field="year"
        label="Year"
        display-values-as="box"
      ></atomic-facet>
    \`
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const u=["FirstStory"];export{a as FirstStory,u as __namedExportsOrder,p as default};
