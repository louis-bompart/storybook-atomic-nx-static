import{r as i,h as t,g as s}from"./p-00525453.js";import{d as e}from"./p-ade4f913.js";import"./p-1580513b.js";const n=class{constructor(t){i(this,t);this.format=(i,t)=>i.toLocaleString(t,{minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits});this.error=undefined;this.minimumIntegerDigits=undefined;this.minimumFractionDigits=undefined;this.maximumFractionDigits=undefined;this.minimumSignificantDigits=undefined;this.maximumSignificantDigits=undefined}componentWillLoad(){try{e(((i,t)=>this.format(i,t)),this.host)}catch(i){this.error=i}}render(){if(this.error){return t("atomic-component-error",{key:"e958fc2cd14073d806c9dafe06874ea38c1e01d9",element:this.host,error:this.error})}}get host(){return s(this)}};export{n as atomic_format_number};
//# sourceMappingURL=p-4c6c7965.entry.js.map