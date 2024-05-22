/**
 * @license
 *
 * Copyright 2024 Coveo Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(t,e){const n=`
  The following properties are invalid:

    ${t.join(`
	`)}
  
  ${e}
  `;return new f(n)}var f=class extends Error{constructor(t){super(t),this.name="SchemaValidationError"}},p=class{constructor(t){this.definition=t}validate(t={},e=""){const n={...this.default,...t},r=[];for(const i in this.definition){const u=this.definition[i].validate(n[i]);u&&r.push(`${i}: ${u}`)}if(r.length)throw s(r,e);return n}get default(){const t={};for(const e in this.definition){const n=this.definition[e].default;n!==void 0&&(t[e]=n)}return t}},o=class{constructor(t={}){this.baseConfig=t}validate(t){return this.baseConfig.required&&d(t)?"value is required.":null}get default(){return this.baseConfig.default instanceof Function?this.baseConfig.default():this.baseConfig.default}get required(){return this.baseConfig.required===!0}};function a(t){return t===void 0}function l(t){return t===null}function d(t){return a(t)||l(t)}var b=class{constructor(t={}){this.config=t,this.value=new o(t)}validate(t){const e=this.value.validate(t);return e||(c(t)?t<this.config.min?`minimum value of ${this.config.min} not respected.`:t>this.config.max?`maximum value of ${this.config.max} not respected.`:null:"value is not a number.")}get default(){return this.value.default}get required(){return this.value.required}};function c(t){return a(t)||h(t)}function h(t){return typeof t=="number"&&!isNaN(t)}var v=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,$=class{constructor(t={}){this.config={emptyAllowed:!0,url:!1,...t},this.value=new o(this.config)}validate(t){const{emptyAllowed:e,url:n,regex:r,constrainTo:i}=this.config,u=this.value.validate(t);return u||(a(t)?null:g(t)?!e&&!t.length?"value is an empty string.":n&&!v.test(t)?"value is not a valid URL.":r&&!r.test(t)?`value did not match provided regex ${r}`:i&&!i.includes(t)?`value should be one of: ${i.join(", ")}.`:null:"value is not a string.")}get default(){return this.value.default}get required(){return this.value.required}};function g(t){return Object.prototype.toString.call(t)==="[object String]"}function q(t){return Array.isArray(t)}export{b as a,q as h,a as i,$ as l,p as n,d as s};
