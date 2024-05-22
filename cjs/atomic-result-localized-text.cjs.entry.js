'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const propsUtils = require('./props-utils-e054c946.js');
const resultTemplateDecorators = require('./result-template-decorators-a55bdcb7.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./item-decorators-7bbc4b3f.js');

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
const AtomicResultLocalizedText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The field value to dynamically evaluate.
         */
        this.field = {};
        this.error = undefined;
        this.localeKey = undefined;
        this.fieldCount = undefined;
    }
    render() {
        return this.bindings.i18n.t(this.localeKey, {
            ...this.parseFieldValues(),
            ...this.parseFieldCount(),
        });
    }
    parseFieldValues() {
        const ret = {};
        if (Object.keys(this.field).length === 0) {
            return ret;
        }
        Object.entries(this.field).forEach(([fieldName, i18nParameter]) => {
            const fieldValueRaw = headless_esm.ow.getResultProperty(this.result, fieldName);
            if (!bueno_esm.isNullOrUndefined(fieldValueRaw)) {
                ret[i18nParameter] = fieldValueRaw;
            }
        });
        return ret;
    }
    parseFieldCount() {
        var _a;
        if (!this.fieldCount) {
            return {};
        }
        return {
            count: (_a = headless_esm.ow.getResultProperty(this.result, this.fieldCount)) !== null && _a !== void 0 ? _a : 1,
        };
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultLocalizedText.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultLocalizedText.prototype, "result", void 0);
__decorate([
    propsUtils.MapProp()
], AtomicResultLocalizedText.prototype, "field", void 0);

exports.atomic_result_localized_text = AtomicResultLocalizedText;

//# sourceMappingURL=atomic-result-localized-text.cjs.entry.js.map