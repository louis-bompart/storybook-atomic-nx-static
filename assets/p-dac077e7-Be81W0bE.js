import{g as r}from"./atomic-breadbox.new.stories-D03zBEda.js";const f=`<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
  <path
    d="m 2.6226137,7.5483827 -1.73646599,-1.67659 c -0.58287,-0.56277 -0.2895686,-1.54878 0.50612799,-1.70148 l 2.630348,-0.50477 c 0.31897,-0.06121 0.58834,-0.27352 0.72239,-0.56935 l 0.84414,-1.86293 c 0.35481,-0.78302702 1.46689,-0.78302802 1.8217,0 l 0.84414,1.86293 c 0.13405,0.29583 0.40342,0.50814 0.72239,0.56935 l 2.6303203,0.50477 c 0.7957,0.1527 1.089,1.13871 0.5062,1.70148 l -1.73651,1.67659 c -0.23632,0.22817 -0.34551,0.55786 -0.2921,0.88198 l 0.45461,2.7587403 c 0.1357,0.824 -0.7386003,1.4416 -1.4698203,1.0382 l -2.087,-1.1515 c -0.30069,-0.1659 -0.66547,-0.1659 -0.96616,0 l -2.087,1.1515 c -0.73122,0.4034 -1.60555,-0.2142 -1.46978,-1.0382 l 0.45457,-2.7587403 c 0.05341,-0.32412 -0.05578,-0.65381 -0.2921,-0.88198 z"
    stroke-width="0.8125"
  />
</svg>`,m=t=>{var o;const e=(t.numberOfActiveIcons/t.numberOfTotalIcons*100).toString()+"%",c=`${(o=t.iconSize)!==null&&o!==void 0?o:.75}rem`,i=n=>r("atomic-icon",{icon:t.icon,class:`shrink-0 ${n?"icon-active":"icon-inactive"}`,style:{width:c,height:c}}),l=()=>{const n=[];for(let s=0;s<t.numberOfTotalIcons;s++)n.push(i(!1));return n},a=()=>{const n=[];for(let s=0;s<t.numberOfTotalIcons;s++)n.push(i(!0));return n};return r("div",{class:"relative w-max",part:"value-rating",role:"img","aria-label":t.i18n.t("stars",{count:t.numberOfActiveIcons,max:t.numberOfTotalIcons})},r("div",{class:"z-0 flex gap-0.5"},l()),r("div",{class:"absolute left-0 top-0 z-1 flex gap-0.5 overflow-hidden",style:{width:e}},a()))},v=(t,o)=>{if(t===null)return null;const e=parseFloat(`${t}`);if(Number.isNaN(e))throw new Error(`Could not parse "${t}" from field "${o}" as a number.`);return e};export{f as l,v as n,m as s};
