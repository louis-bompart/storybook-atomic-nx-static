import{r as d,n as u}from"./index-B-ZmIc0D.js";import{w as h}from"./search-interface-wrapper-BHYthar9.js";import{s as x}from"./index-1E8GfjP2.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";const{decorator:y,play:c}=h(),v={component:"atomic-search-box-query-suggestions",title:"Atomic/SearchBox/QuerySuggestions",id:"atomic-search-box-query-suggestions",render:d,decorators:[e=>u`<atomic-search-box> ${e()} </atomic-search-box>`,y],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:c},a={name:"atomic-search-box-query-suggestions",play:async e=>{await c(e);const{canvasElement:i,step:m}=e,l=x(i);await m("Click Searchbox",async()=>{var o,t;(t=(o=await l.findAllByShadowTitle("Search field with suggestions.",{exact:!1}))==null?void 0:o.find(p=>p.role==="combobox"))==null||t.focus()})}};var s,n,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'atomic-search-box-query-suggestions',
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
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const q=["FirstStory"];export{a as FirstStory,q as __namedExportsOrder,v as default};
