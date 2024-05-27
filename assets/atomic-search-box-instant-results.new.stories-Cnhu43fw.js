import{r as p,n as r}from"./index-B-ZmIc0D.js";import{w as g}from"./search-interface-wrapper-BHYthar9.js";import{s as f}from"./index-1E8GfjP2.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";const{decorator:y,play:c}=g({accessToken:"xx149e3ec9-786f-4c6c-b64f-49a403b930de",organizationId:"fashioncoveodemocomgzh7iep8",search:{searchHub:"MainSearch"}}),S={component:"atomic-search-box-instant-results",title:"Atomic/SearchBox/InstantResults",id:"atomic-search-box-instant-results",render:p,decorators:[t=>r`<atomic-search-box>
        <atomic-search-box-query-suggestions>
          ${t()}
        </atomic-search-box-query-suggestions>
      </atomic-search-box>`,y],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:c},e={name:"atomic-instant-results",args:{default:`
      <atomic-result-template>
        <template>
          <style>
            div.result-root.with-sections.display-list.image-small
              atomic-result-section-visual {
              height: 120px;
            }
            .rating-wrapper {
              display: flex;
              align-items: center;
            }
            .rating-wrapper span {
              margin-left: 5px;
              color: #8e959d;
            }
          </style>
          <atomic-result-section-visual>
            <atomic-result-image
              field="ec_images"
              aria-hidden="true"
            ></atomic-result-image>
          </atomic-result-section-visual>
          <atomic-result-section-title>
            <atomic-result-link></atomic-result-link>
          </atomic-result-section-title>
          <atomic-result-section-title-metadata>
            <div class="rating-wrapper">
              <atomic-result-rating field="ec_rating"></atomic-result-rating>
              <atomic-field-condition class="field" if-defined="ec_rating">
                <span>
                  <atomic-result-number
                    field="cat_rating_count"
                  ></atomic-result-number>
                </span>
              </atomic-field-condition>
            </div>
          </atomic-result-section-title-metadata>
          <atomic-result-section-bottom-metadata>
            <atomic-result-number field="ec_price">
              <atomic-format-currency currency="USD"></atomic-format-currency>
            </atomic-result-number>
          </atomic-result-section-bottom-metadata>
        </template>
      </atomic-result-template>
    `,imageSize:"small"},decorators:[t=>r`
      <style>
        atomic-search-box::part(suggestions-left) {
          display: none;
        }
      </style>
      ${t()}
    `],play:async t=>{await c(t);const{canvasElement:l,step:m}=t,u=f(l);await m("Click Searchbox",async()=>{var a,i;(i=(a=await u.findAllByShadowTitle("Search field with suggestions.",{exact:!1}))==null?void 0:a.find(d=>d.role==="combobox"))==null||i.focus()})}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'atomic-instant-results',
  args: {
    default: \`
      <atomic-result-template>
        <template>
          <style>
            div.result-root.with-sections.display-list.image-small
              atomic-result-section-visual {
              height: 120px;
            }
            .rating-wrapper {
              display: flex;
              align-items: center;
            }
            .rating-wrapper span {
              margin-left: 5px;
              color: #8e959d;
            }
          </style>
          <atomic-result-section-visual>
            <atomic-result-image
              field="ec_images"
              aria-hidden="true"
            ></atomic-result-image>
          </atomic-result-section-visual>
          <atomic-result-section-title>
            <atomic-result-link></atomic-result-link>
          </atomic-result-section-title>
          <atomic-result-section-title-metadata>
            <div class="rating-wrapper">
              <atomic-result-rating field="ec_rating"></atomic-result-rating>
              <atomic-field-condition class="field" if-defined="ec_rating">
                <span>
                  <atomic-result-number
                    field="cat_rating_count"
                  ></atomic-result-number>
                </span>
              </atomic-field-condition>
            </div>
          </atomic-result-section-title-metadata>
          <atomic-result-section-bottom-metadata>
            <atomic-result-number field="ec_price">
              <atomic-format-currency currency="USD"></atomic-format-currency>
            </atomic-result-number>
          </atomic-result-section-bottom-metadata>
        </template>
      </atomic-result-template>
    \`,
    imageSize: 'small'
  },
  decorators: [story => html\`
      <style>
        atomic-search-box::part(suggestions-left) {
          display: none;
        }
      </style>
      \${story()}
    \`],
  play: async context => {
    await play(context);
    const {
      canvasElement,
      step
    } = context;
    const canvas = within(canvasElement);
    await step('Click Searchbox', async () => {
      (await canvas.findAllByShadowTitle('Search field with suggestions.', {
        exact: false
      }))?.find(el => el.role === 'combobox')?.focus();
    });
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const _=["FirstStory"];export{e as FirstStory,_ as __namedExportsOrder,S as default};
