import{r as f,n as d,w as n,e as c,u as y}from"./index-B-ZmIc0D.js";import{w}from"./search-interface-wrapper-BHYthar9.js";import{s as u}from"./index-1E8GfjP2.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";const{decorator:x,play:l}=w(),B={component:"atomic-breadbox",title:"Atomic/Breadbox",id:"atomic-breadbox",render:f,decorators:[x],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:l},t={name:"atomic-breadbox",args:{},decorators:[e=>d`
      ${e()}
      <div style="margin:20px 0">
        Select facet value(s) to see the Breadbox component.
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
    `],play:async e=>{await l(e);const{canvasElement:m,step:o}=e,a=u(m);await o("Wait for the facet values to render",async()=>{await n(()=>c(a.getByShadowTitle("People")).toBeInTheDocument(),{timeout:3e4})}),await o("Select a facet value",async()=>{const p=a.getByShadowTitle("People");await y.click(p),await n(()=>c(a.getByShadowTitle("Object type: People")).toBeInTheDocument(),{timeout:3e4})})}};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'atomic-breadbox',
  args: {},
  decorators: [story => html\`
      \${story()}
      <div style="margin:20px 0">
        Select facet value(s) to see the Breadbox component.
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
    \`],
  play: async context => {
    await play(context);
    const {
      canvasElement,
      step
    } = context;
    const canvas = within(canvasElement);
    await step('Wait for the facet values to render', async () => {
      await waitFor(() => expect(canvas.getByShadowTitle('People')).toBeInTheDocument(), {
        timeout: 30e3
      });
    });
    await step('Select a facet value', async () => {
      const facet = canvas.getByShadowTitle('People');
      await userEvent.click(facet);
      await waitFor(() => expect(canvas.getByShadowTitle('Object type: People')).toBeInTheDocument(), {
        timeout: 30e3
      });
    });
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const T=["FirstStory"];export{t as FirstStory,T as __namedExportsOrder,B as default};
