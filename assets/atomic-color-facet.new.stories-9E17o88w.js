import{f as l}from"./facets-decorator-0c-Fo_TH.js";import{r as u}from"./index-B-ZmIc0D.js";import{w as g}from"./search-interface-wrapper-BHYthar9.js";import"./index-Bqoxw6Vv.js";const{decorator:i,play:d}=g(),h={component:"atomic-color-facet",title:"Atomic/ColorFacet",id:"atomic-color-facet",render:u,decorators:[i],parameters:{controls:{expanded:!0,hideNoControlsWarning:!0}},play:d},c={doc:{"background-image":'url("atomic/assets/document.svg")',"background-color":"rgb(146,151,196)"},lithiumuser:{"background-image":'url("atomic/assets/folder.svg',"background-color":"rgb(132, 199, 208)"},SalesforceItem:{"background-image":'url("atomic/assets/record.svg',"background-color":"rgb(146, 151, 196)"},lithiummessage:{"background-image":'url("atomic/assets/knowledge.svg',"background-color":"rgb(147, 104, 183)"},ppt:{"background-image":'url("atomic/assets/ppt.svg',"background-color":"rgb(170, 62, 152)"},pdf:{"background-image":'url("atomic/assets/pdf.svg',"background-color":"transparent"},"rss-item":{"background-image":'url("atomic/assets/rssitem.svg',"background-color":"transparent"},video:{"background-image":'url("atomic/assets/video.svg',"background-color":"rgb(122, 231, 199)"}},m=Object.keys(c).reduce((r,e)=>Object.assign(r,{[`value-${e}`]:{control:{type:"object"},if:{arg:"field",eq:"filetype"},name:`value-${e}`,required:!1,description:`The facet value to customize facet value '${e}'. See \`value-*\`.`,type:{name:"object",value:{}},table:{category:"css shadow parts",subcategory:"Dynamic parts",type:{},defaultValue:{}}}}),{}),p={"background-position":"center","background-size":"contain","background-repeat":"no-repeat"},b=Object.entries(c).reduce((r,[e,n])=>Object.assign(r,{[`value-${e}`]:{...p,...n}}),{}),a={name:"atomic-color-facet",argTypes:{...m,"value-*":{control:!1}},args:{...b,field:"filetype","number-of-values":9},decorators:[l]};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'atomic-color-facet',
  argTypes: {
    ...argTypes,
    'value-*': {
      control: false
    }
  },
  args: {
    ...args,
    field: 'filetype',
    'number-of-values': 9
  },
  decorators: [facetDecorator]
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,h as default};
