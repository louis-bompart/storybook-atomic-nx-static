'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
const resultUtils = require('./result-utils-9f11ee00.js');
const resultTemplateDecorators = require('./result-template-decorators-7ce75291.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./headless.esm-1a66963a.js');
require('./item-decorators-1f104375.js');

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
const AtomicResultHtml = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.field = undefined;
        this.sanitize = true;
    }
    render() {
        const resultValue = resultUtils.getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValue) {
            this.host.remove();
            return;
        }
        return (index.h("atomic-html", { value: resultValue, sanitize: this.sanitize }));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultHtml.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultHtml.prototype, "result", void 0);

exports.atomic_result_html = AtomicResultHtml;

//# sourceMappingURL=atomic-result-html.cjs.entry.js.map