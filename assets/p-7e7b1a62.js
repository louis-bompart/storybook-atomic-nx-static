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
 */
function t(t,n){const e=`\n  The following properties are invalid:\n\n    ${t.join("\n\t")}\n  \n  ${n}\n  `;return new r(e)}var r=class extends Error{constructor(t){super(t);this.name="SchemaValidationError"}};var n=class{constructor(t){this.definition=t}validate(r={},n=""){const e={...this.default,...r};const i=[];for(const t in this.definition){const r=this.definition[t].validate(e[t]);r&&i.push(`${t}: ${r}`)}if(i.length){throw t(i,n)}return e}get default(){const t={};for(const r in this.definition){const n=this.definition[r].default;if(n!==void 0){t[r]=n}}return t}};var e=class{constructor(t={}){this.baseConfig=t}validate(t){if(this.baseConfig.required&&s(t)){return"value is required."}return null}get default(){return this.baseConfig.default instanceof Function?this.baseConfig.default():this.baseConfig.default}get required(){return this.baseConfig.required===true}};function i(t){return t===void 0}function u(t){return t===null}function s(t){return i(t)||u(t)}var a=class{constructor(t={}){this.config=t;this.value=new e(t)}validate(t){const r=this.value.validate(t);if(r){return r}if(!o(t)){return"value is not a number."}if(t<this.config.min){return`minimum value of ${this.config.min} not respected.`}if(t>this.config.max){return`maximum value of ${this.config.max} not respected.`}return null}get default(){return this.value.default}get required(){return this.value.required}};function o(t){return i(t)||f(t)}function f(t){return typeof t==="number"&&!isNaN(t)}var c=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;var l=class{constructor(t={}){this.config={emptyAllowed:true,url:false,...t};this.value=new e(this.config)}validate(t){const{emptyAllowed:r,url:n,regex:e,constrainTo:u}=this.config;const s=this.value.validate(t);if(s){return s}if(i(t)){return null}if(!d(t)){return"value is not a string."}if(!r&&!t.length){return"value is an empty string."}if(n&&!c.test(t)){return"value is not a valid URL."}if(e&&!e.test(t)){return`value did not match provided regex ${e}`}if(u&&!u.includes(t)){const t=u.join(", ");return`value should be one of: ${t}.`}return null}get default(){return this.value.default}get required(){return this.value.required}};function d(t){return Object.prototype.toString.call(t)==="[object String]"}function h(t){return Array.isArray(t)}export{a as N,n as S,s as a,l as b,i as c,h as i};
//# sourceMappingURL=p-7e7b1a62.js.map