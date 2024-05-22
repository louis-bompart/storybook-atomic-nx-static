import{n as a,t as r}from"./p-9c7dbbdf-CHhzVeBT.js";function W(o){return`only screen and (min-width: ${o})`}function k(o,$,d,s){const l=o.id,t=`${d}#${l}`,m=`${s}:not(.${s}-no-results, .${s}-error)`,c=`@media ${W($)}`,f=`${t} { display: grid }`,p=`${c} {
    ${t} ${a("search")} {
      justify-self: start;
      width: 80%;
    }
  }`,u=()=>{const n=r(o,"facets"),e=r(o,"main");if(!n||!e)return"";const i=n.minWidth||"17rem",y=n.maxWidth||"22rem",x=e.minWidth||"50%",w=e.maxWidth||"70rem";return`${c} {
      ${t} {
        grid-template-areas:
        '. .                     atomic-section-search .'
        '. atomic-section-main   atomic-section-main   .';
        grid-template-columns:
          1fr minmax(${i}, ${y}) minmax(${x}, ${w}) 1fr;
        column-gap: var(--atomic-layout-spacing-x);
      }

      ${m} ${t} {
        grid-template-areas:
          '. .                     atomic-section-search .'
          '. atomic-section-facets atomic-section-main   .'
          '. atomic-section-facets .                     .';
      }

      ${m} ${t} ${a("facets")} {
        display: block;
      }
    }`},h=()=>{const n=r(o,"status");if(!n||!n.querySelector("atomic-refine-toggle"))return"";const i=`${t} ${a("status")}`;return`${i} atomic-sort-dropdown {
      display: none;
    }

    ${c} {
     ${i} atomic-sort-dropdown {
       display: block;
      }

      ${i} atomic-refine-toggle {
        display: none;
       }
    }`},g=()=>`${c} {
      ${t} ${a("horizontal-facets")} > atomic-popover:not(.atomic-hidden) {
        display: block;
      }
    }`;return[f,p,u(),h(),g()].filter(n=>n!=="").join(`

`)}export{k as s};
