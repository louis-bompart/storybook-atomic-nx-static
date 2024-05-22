import { r as registerInstance } from './index-c045ad7c.js';
import { a as isNullOrUndefined } from './bueno.esm-9a075e67.js';
import { o as ow } from './headless.esm-88bad35d.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { M as MapProp } from './props-utils-36d102c2.js';
import { R as ResultContext } from './result-template-decorators-13a4dae6.js';
import './event-utils-8de63ec3.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-decorators-79369ad9.js';

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
        registerInstance(this, hostRef);
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
            const fieldValueRaw = ow.getResultProperty(this.result, fieldName);
            if (!isNullOrUndefined(fieldValueRaw)) {
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
            count: (_a = ow.getResultProperty(this.result, this.fieldCount)) !== null && _a !== void 0 ? _a : 1,
        };
    }
};
__decorate([
    InitializeBindings()
], AtomicResultLocalizedText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultLocalizedText.prototype, "result", void 0);
__decorate([
    MapProp()
], AtomicResultLocalizedText.prototype, "field", void 0);

export { AtomicResultLocalizedText as atomic_result_localized_text };

//# sourceMappingURL=atomic-result-localized-text.entry.js.map