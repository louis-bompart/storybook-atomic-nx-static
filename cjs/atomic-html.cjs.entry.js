'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const utils = require('./utils-93ea935e.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./event-utils-9bfcf3c5.js');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicHtml = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.value = undefined;
        this.sanitize = true;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return (index.h("span", { key: 'fda5ec49ed8c449d437bcd731f18447d0fa56277', innerHTML: this.sanitize ? utils.DOMPurify.sanitize(this.value) : this.value }));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicHtml.prototype, "bindings", void 0);

exports.atomic_html = AtomicHtml;

//# sourceMappingURL=atomic-html.cjs.entry.js.map