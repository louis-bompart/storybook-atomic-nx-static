import{r as c,n}from"./index-B-ZmIc0D.js";import{w as i}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:l,play:s}=i(),p={component:"atomic-refine-toggle",title:"Atomic/RefineToggle",id:"atomic-refine-toggle",render:c,decorators:[l],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:s},e={name:"atomic-refine-toggle",args:{},decorators:[r=>n`
      ${r()}
      <div style="display:none;">
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
      </div>
    `]};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'atomic-refine-toggle',
  args: {},
  decorators: [story => html\`
      \${story()}
      <div style="display:none;">
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
      </div>
    \`]
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,p as default};
