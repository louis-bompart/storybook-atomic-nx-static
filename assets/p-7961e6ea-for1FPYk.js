import{U as o}from"./p-1172172e-DaGB8rqK.js";function a(e,r,n){var t;return!((t=n.analytics)===null||t===void 0)&&t.analyticsClientMiddleware?n.analytics.analyticsClientMiddleware(e,r):r}function u(e){return e.customData&&(e.customData.coveoAtomicVersion=o().version),e}function d(){return{documentLocation:document.location.href,...document.referrer&&{originLevel3:document.referrer}}}const i=/^(\d+\.\d+\.\d+)/;function l(){var e;return{source:{"@coveo/atomic":((e=i.exec(o().version))===null||e===void 0?void 0:e[0])||"0.0.0"}}}function f(e,r){const n={enabled:r,documentLocation:document.location.href,...document.referrer&&{originLevel3:document.referrer}};return e.analytics?{...n,...e.analytics}:n}export{f as c,d as e,a as o,l as r,u as t};
