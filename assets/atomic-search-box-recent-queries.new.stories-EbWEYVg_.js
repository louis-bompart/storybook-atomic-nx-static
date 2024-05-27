import{r as p,n as d,u as a}from"./index-B-ZmIc0D.js";import{w as u}from"./search-interface-wrapper-BHYthar9.js";import{s as x}from"./index-1E8GfjP2.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";const{decorator:y,play:m}=u(),E={component:"atomic-search-box-recent-queries",title:"Atomic/SearchBox/RecentQueries",id:"atomic-search-box-recent-queries",render:p,decorators:[e=>d`<atomic-search-box> ${e()} </atomic-search-box>`,y],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:m},t={name:"atomic-search-box-recent-queries",play:async e=>{var c;await m(e);const{canvasElement:h,step:n}=e,s=x(h),r=(c=await s.findAllByShadowTitle("Search field with suggestions.",{exact:!1}))==null?void 0:c.find(w=>w.role==="combobox");await n("Search for test",async()=>{await a.click(r),await a.type(r,"test{enter}")}),await n("Clear query",async()=>{await a.click(await s.findByShadowRole("button",{name:"Clear"}))}),await n("Click the searchbox",async()=>{await a.click(r)})}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-search-box-recent-queries',
  play: async context => {
    await play(context);
    const {
      canvasElement,
      step
    } = context;
    const canvas = within(canvasElement);
    const searchBox = (await canvas.findAllByShadowTitle('Search field with suggestions.', {
      exact: false
    }))?.find(el => el.role === 'combobox');
    await step('Search for test', async () => {
      await userEvent.click(searchBox!);
      await userEvent.type(searchBox!, 'test{enter}');
    });
    await step('Clear query', async () => {
      await userEvent.click(await canvas.findByShadowRole('button', {
        name: 'Clear'
      }));
    });
    await step('Click the searchbox', async () => {
      await userEvent.click(searchBox!);
    });
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["FirstStory"];export{t as FirstStory,k as __namedExportsOrder,E as default};
