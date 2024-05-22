import { r as registerInstance } from './index-53978573.js';
import { a as isNullOrUndefined } from './bueno.esm-38a5b490.js';
import { R as ResultTemplatesHelpers } from './headless.esm-bdb53e72.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import { M as MapProp } from './props-utils-050f4514.js';
import { R as ResultContext } from './result-template-decorators-7958bada.js';
import './event-utils-8de63ec3.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './item-decorators-50bb80ae.js';

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
            const fieldValueRaw = ResultTemplatesHelpers.getResultProperty(this.result, fieldName);
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
            count: (_a = ResultTemplatesHelpers.getResultProperty(this.result, this.fieldCount)) !== null && _a !== void 0 ? _a : 1,
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