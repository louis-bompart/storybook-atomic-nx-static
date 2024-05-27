import{r as c}from"./index-B-ZmIc0D.js";import{w as s}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:n,play:m}=s({preprocessRequest:i=>{const t=JSON.parse(i.body);return t.aq='@source==("iNaturalistTaxons")',t.fieldsToInclude=[...t.fieldsToInclude||[],"source"],i.body=JSON.stringify(t),i}}),f={component:"atomic-folded-result-list",title:"Atomic/FoldedResultList",id:"atomic-folded-result-list",render:c,decorators:[n],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:m},e={name:"atomic-folded-result-list",args:{default:`
      <atomic-result-template>
        <template>
          <atomic-result-section-visual>
            <atomic-result-image class="icon"></atomic-result-image>
            <img src="https://picsum.photos/350" class="thumbnail" />
          </atomic-result-section-visual>
          <atomic-result-section-badges>
            <atomic-field-condition must-match-sourcetype="Salesforce">
              <atomic-result-badge
                label="Salesforce"
                class="salesforce-badge"
              ></atomic-result-badge>
            </atomic-field-condition>
            <atomic-result-badge
              icon="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/language.svg"
            >
              <atomic-result-multi-value-text
                field="language"
              ></atomic-result-multi-value-text>
            </atomic-result-badge>
            <atomic-field-condition must-match-is-recommendation="true">
              <atomic-result-badge label="Recommended"></atomic-result-badge>
            </atomic-field-condition>
            <atomic-field-condition must-match-is-top-result="true">
              <atomic-result-badge label="Top Result"></atomic-result-badge>
            </atomic-field-condition>
          </atomic-result-section-badges>
          <atomic-result-section-title
            ><atomic-result-link></atomic-result-link
          ></atomic-result-section-title>
          <atomic-result-section-excerpt
            ><atomic-result-text field="excerpt"></atomic-result-text
          ></atomic-result-section-excerpt>
          <atomic-result-section-bottom-metadata>
            <atomic-result-fields-list>
              <atomic-field-condition class="field" if-defined="source">
                <span class="field-label"
                  ><atomic-text value="source"></atomic-text>:</span
                >
                <atomic-result-text field="source"></atomic-result-text>
              </atomic-field-condition>
            </atomic-result-fields-list>
          </atomic-result-section-bottom-metadata>
          <atomic-result-section-children>
            <atomic-load-more-children-results></atomic-load-more-children-results>
            <atomic-result-children image-size="icon">
              <!-- CHILD -->
              <atomic-result-children-template>
                <!-- CHILD TEMPLATE -->
                <template>
                  <atomic-result-section-visual>
                    <atomic-result-image class="icon"></atomic-result-image>
                    <img src="https://picsum.photos/350" class="thumbnail" />
                  </atomic-result-section-visual>
                  <atomic-result-section-title
                    ><atomic-result-link></atomic-result-link
                  ></atomic-result-section-title>
                  <atomic-result-section-excerpt
                    ><atomic-result-text field="excerpt"></atomic-result-text
                  ></atomic-result-section-excerpt>
                  <atomic-result-section-bottom-metadata>
                    <atomic-result-fields-list>
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

                      <atomic-field-condition
                        class="field"
                        if-defined="language"
                      >
                        <span class="field-label"
                          ><atomic-text value="language"></atomic-text>:</span
                        >
                        <atomic-result-multi-value-text
                          field="language"
                        ></atomic-result-multi-value-text>
                      </atomic-field-condition>

                      <atomic-field-condition
                        class="field"
                        if-defined="filetype"
                      >
                        <span class="field-label"
                          ><atomic-text value="fileType"></atomic-text>:</span
                        >
                        <atomic-result-text
                          field="filetype"
                        ></atomic-result-text>
                      </atomic-field-condition>
                    </atomic-result-fields-list>
                  </atomic-result-section-bottom-metadata>
                  <atomic-result-section-children>
                    <atomic-result-children inherit-templates>
                    </atomic-result-children>
                  </atomic-result-section-children>
                </template>
              </atomic-result-children-template>
            </atomic-result-children>
          </atomic-result-section-children>
        </template>
      </atomic-result-template>
    `}};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'atomic-folded-result-list',
  args: {
    default: \`
      <atomic-result-template>
        <template>
          <atomic-result-section-visual>
            <atomic-result-image class="icon"></atomic-result-image>
            <img src="https://picsum.photos/350" class="thumbnail" />
          </atomic-result-section-visual>
          <atomic-result-section-badges>
            <atomic-field-condition must-match-sourcetype="Salesforce">
              <atomic-result-badge
                label="Salesforce"
                class="salesforce-badge"
              ></atomic-result-badge>
            </atomic-field-condition>
            <atomic-result-badge
              icon="https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/svg/language.svg"
            >
              <atomic-result-multi-value-text
                field="language"
              ></atomic-result-multi-value-text>
            </atomic-result-badge>
            <atomic-field-condition must-match-is-recommendation="true">
              <atomic-result-badge label="Recommended"></atomic-result-badge>
            </atomic-field-condition>
            <atomic-field-condition must-match-is-top-result="true">
              <atomic-result-badge label="Top Result"></atomic-result-badge>
            </atomic-field-condition>
          </atomic-result-section-badges>
          <atomic-result-section-title
            ><atomic-result-link></atomic-result-link
          ></atomic-result-section-title>
          <atomic-result-section-excerpt
            ><atomic-result-text field="excerpt"></atomic-result-text
          ></atomic-result-section-excerpt>
          <atomic-result-section-bottom-metadata>
            <atomic-result-fields-list>
              <atomic-field-condition class="field" if-defined="source">
                <span class="field-label"
                  ><atomic-text value="source"></atomic-text>:</span
                >
                <atomic-result-text field="source"></atomic-result-text>
              </atomic-field-condition>
            </atomic-result-fields-list>
          </atomic-result-section-bottom-metadata>
          <atomic-result-section-children>
            <atomic-load-more-children-results></atomic-load-more-children-results>
            <atomic-result-children image-size="icon">
              <!-- CHILD -->
              <atomic-result-children-template>
                <!-- CHILD TEMPLATE -->
                <template>
                  <atomic-result-section-visual>
                    <atomic-result-image class="icon"></atomic-result-image>
                    <img src="https://picsum.photos/350" class="thumbnail" />
                  </atomic-result-section-visual>
                  <atomic-result-section-title
                    ><atomic-result-link></atomic-result-link
                  ></atomic-result-section-title>
                  <atomic-result-section-excerpt
                    ><atomic-result-text field="excerpt"></atomic-result-text
                  ></atomic-result-section-excerpt>
                  <atomic-result-section-bottom-metadata>
                    <atomic-result-fields-list>
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

                      <atomic-field-condition
                        class="field"
                        if-defined="language"
                      >
                        <span class="field-label"
                          ><atomic-text value="language"></atomic-text>:</span
                        >
                        <atomic-result-multi-value-text
                          field="language"
                        ></atomic-result-multi-value-text>
                      </atomic-field-condition>

                      <atomic-field-condition
                        class="field"
                        if-defined="filetype"
                      >
                        <span class="field-label"
                          ><atomic-text value="fileType"></atomic-text>:</span
                        >
                        <atomic-result-text
                          field="filetype"
                        ></atomic-result-text>
                      </atomic-field-condition>
                    </atomic-result-fields-list>
                  </atomic-result-section-bottom-metadata>
                  <atomic-result-section-children>
                    <atomic-result-children inherit-templates>
                    </atomic-result-children>
                  </atomic-result-section-children>
                </template>
              </atomic-result-children-template>
            </atomic-result-children>
          </atomic-result-section-children>
        </template>
      </atomic-result-template>
    \`
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,f as default};
