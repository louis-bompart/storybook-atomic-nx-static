import{r as l}from"./index-B-ZmIc0D.js";import{w as n}from"./result-wrapper-qW4bQRUT.js";import{w as o}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:s,engineConfig:c}=n(),{decorator:d,play:r}=o(c),x={component:"atomic-result-fields-list",title:"Atomic/ResultList/ResultFieldsList",id:"atomic-result-fields-list",render:l,decorators:[s,d],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:r},e={name:"atomic-result-fields-list",args:{default:`
      <style>
        .field {
          display: inline-flex;
          white-space: nowrap;
          align-items: center;
        }
        .field-label {
          font-weight: bold;
          margin-right: 0.25rem;
        }
      </style>
      <atomic-field-condition class="field" if-defined="author">
        <span class="field-label"
          ><atomic-text value="author"></atomic-text>:</span
        >
        <atomic-result-text field="author"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="source">
        <span class="field-label"
          ><atomic-text value="source"></atomic-text>:</span
        >
        <atomic-result-text field="source"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="language">
        <span class="field-label"
          ><atomic-text value="language"></atomic-text>:</span
        >
        <atomic-result-multi-value-text
          field="language"
        ></atomic-result-multi-value-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="filetype">
        <span class="field-label"
          ><atomic-text value="fileType"></atomic-text>:</span
        >
        <atomic-result-text field="filetype"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="sncost">
        <span class="field-label">Cost:</span>
        <atomic-result-number field="sncost">
          <atomic-format-currency currency="CAD"></atomic-format-currency>
        </atomic-result-number>
      </atomic-field-condition>

      <span class="field">
        <span class="field-label">Date:</span>
        <atomic-result-date></atomic-result-date>
      </span>
    `}};var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'atomic-result-fields-list',
  args: {
    default: \`
      <style>
        .field {
          display: inline-flex;
          white-space: nowrap;
          align-items: center;
        }
        .field-label {
          font-weight: bold;
          margin-right: 0.25rem;
        }
      </style>
      <atomic-field-condition class="field" if-defined="author">
        <span class="field-label"
          ><atomic-text value="author"></atomic-text>:</span
        >
        <atomic-result-text field="author"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="source">
        <span class="field-label"
          ><atomic-text value="source"></atomic-text>:</span
        >
        <atomic-result-text field="source"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="language">
        <span class="field-label"
          ><atomic-text value="language"></atomic-text>:</span
        >
        <atomic-result-multi-value-text
          field="language"
        ></atomic-result-multi-value-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="filetype">
        <span class="field-label"
          ><atomic-text value="fileType"></atomic-text>:</span
        >
        <atomic-result-text field="filetype"></atomic-result-text>
      </atomic-field-condition>

      <atomic-field-condition class="field" if-defined="sncost">
        <span class="field-label">Cost:</span>
        <atomic-result-number field="sncost">
          <atomic-format-currency currency="CAD"></atomic-format-currency>
        </atomic-result-number>
      </atomic-field-condition>

      <span class="field">
        <span class="field-label">Date:</span>
        <atomic-result-date></atomic-result-date>
      </span>
    \`
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,x as default};
