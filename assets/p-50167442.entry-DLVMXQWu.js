import{N as p,O as f}from"./atomic-breadbox.new.stories-CUAu_TQj.js";import{m as u}from"./p-107c3d7f-BhxinPh-.js";import{c as y}from"./p-f5723aee-kxsZMmLK.js";import{t as $,n as s}from"./p-9c7dbbdf-CHhzVeBT.js";import"./index-Bqoxw6Vv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuucGJVn.js";import"../sb-preview/runtime.js";import"./p-1580513b-3LX64KEr.js";import"./p-e9c4f463-BPmi-3c5.js";const h="atomic-insight-tabs",w="atomic-insight-refine-modal",b="atomic-insight-search-box",x=["atomic-insight-refine-toggle","atomic-insight-edit-toggle","atomic-insight-history-toggle"],T=["atomic-insight-smart-snippet-suggestions","atomic-insight-smart-snippet"],v="atomic-insight-generated-answer";function l(t,e){var i;const o=`atomic-insight-layout#${t.id}`,n=!!(!((i=$(t,"search"))===null||i===void 0)&&i.querySelector(h)),r=e?`
  ${o} {
    display: grid;
    grid-template-rows: auto auto 8fr 1fr;
    max-height: 100%;
    box-sizing: border-box;
  }
  ${o} ${w} {
    grid-row-start: 5;
  }`:"",g=`${s("search")} {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.5rem;
      background: var(--atomic-neutral-light);
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
      min-width: 0;
      ${n?"":"padding-bottom: 1.5rem;"}
    }

    ${s("search")} ${b} {
      flex-grow: 1;
    }

    ${x.map(c=>`${s("search")} ${c} {
      flex-shrink: 0;
    }`)}

    ${s("search")} ${h} {
      width: 100%;
    }
    `,m=`${s("facets")} {
      display: none;
    }
    `,d=`
    ${s("results")} {
      overflow: auto;
    }

    ${s("results")} ${T.join(",")} {
      padding: 1.5rem 1.5rem 0px;
    }

    ${s("results")} ${v} {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    `;return[r,g,m,d].filter(c=>c!=="").join(`

`)}var S=function(t,e,i,a){var o=arguments.length,n=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,a);else for(var g=t.length-1;g>=0;g--)(r=t[g])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const j=class{constructor(t){p(this,t),this.widget=!1,this.widget=!1}updateStyles(){this.styleTag?this.styleTag.innerHTML=l(this.host,this.widget):this.makeStyleTag()}makeStyleTag(){this.styleTag=this.bindings.createStyleElement(),this.styleTag.innerHTML=l(this.host,this.widget),this.host.appendChild(this.styleTag)}componentDidLoad(){const t=this.host.id||y("atomic-insight-layout-");this.host.id=t,this.makeStyleTag()}get host(){return f(this)}static get watchers(){return{widget:["updateStyles"]}}};S([u()],j.prototype,"bindings",void 0);export{j as atomic_insight_layout};
