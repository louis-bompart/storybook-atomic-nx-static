import{r as a,n as c}from"./index-B-ZmIc0D.js";import{w as l}from"./result-wrapper-qW4bQRUT.js";import{w as r}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:s,engineConfig:d}=l(),{decorator:f,play:m}=r(d),x={component:"atomic-field-condition",title:"Atomic/ResultList/FieldCondition",id:"atomic-field-condition",render:a,decorators:[s,f],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:m},e={name:"atomic-field-condition",args:{default:`
      <div>
        The visibility of this text can be controlled by the field conditions component
      </div>
    `},decorators:[i=>c`
      ${i()}
      <div style="margin:20px 0">
        Select facet value(s) to filter on field values and influence the
        condition(s).
      </div>
      <div style="display: flex; justify-content: flex-start;">
        <atomic-facet
          field="objecttype"
          style="flex-grow:1"
          label="Object type"
        ></atomic-facet>
        <atomic-facet
          field="filetype"
          style="flex-grow:1"
          label="File type"
        ></atomic-facet>
        <atomic-facet
          field="source"
          style="flex-grow:1"
          label="Source"
        ></atomic-facet>
      </div>
    `]};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'atomic-field-condition',
  args: {
    default: \`
      <div>
        The visibility of this text can be controlled by the field conditions component
      </div>
    \`
  },
  decorators: [story => html\`
      \${story()}
      <div style="margin:20px 0">
        Select facet value(s) to filter on field values and influence the
        condition(s).
      </div>
      <div style="display: flex; justify-content: flex-start;">
        <atomic-facet
          field="objecttype"
          style="flex-grow:1"
          label="Object type"
        ></atomic-facet>
        <atomic-facet
          field="filetype"
          style="flex-grow:1"
          label="File type"
        ></atomic-facet>
        <atomic-facet
          field="source"
          style="flex-grow:1"
          label="Source"
        ></atomic-facet>
      </div>
    \`]
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,x as default};
