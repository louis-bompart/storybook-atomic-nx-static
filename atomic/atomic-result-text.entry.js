import { r as registerInstance, h, a as Host, g as getElement } from './index-53978573.js';
import { i as isArray } from './bueno.esm-38a5b490.js';
import { Y as highlight_exports, R as ResultTemplatesHelpers } from './headless.esm-bdb53e72.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import { g as getStringValueFromResultOrNull } from './result-utils-ac9aa938.js';
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
const AtomicResultText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * When this is set to `true`, the component attempts to highlight text based on the highlighting properties provided by the search API response.
         */
        this.shouldHighlight = true;
        this.error = undefined;
        this.field = undefined;
        this.shouldHighlight = true;
        this.default = undefined;
    }
    renderWithHighlights(value, highlights) {
        try {
            const openingDelimiter = '_openingDelimiter_';
            const closingDelimiter = '_closingDelimiter_';
            const highlightedValue = highlight_exports.highlightString({
                content: value,
                openingDelimiter,
                closingDelimiter,
                highlights,
            });
            const innerHTML = highlightedValue
                .replace(new RegExp(openingDelimiter, 'g'), '<b>')
                .replace(new RegExp(closingDelimiter, 'g'), '</b>');
            // deepcode ignore ReactSetInnerHtml: This is not React code
            return h(Host, { innerHTML: innerHTML });
        }
        catch (error) {
            this.error = error;
        }
    }
    possiblyWarnOnBadFieldType() {
        const resultValueRaw = ResultTemplatesHelpers.getResultProperty(this.result, this.field);
        if (isArray(resultValueRaw)) {
            this.bindings.engine.logger.error(`atomic-result-text cannot be used with multi value field "${this.field}" with values "${resultValueRaw}". Use atomic-result-multi-value-text instead.`, this);
        }
    }
    render() {
        const resultValueAsString = getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValueAsString && !this.default) {
            this.possiblyWarnOnBadFieldType();
            this.host.remove();
            return;
        }
        if (!resultValueAsString && this.default) {
            this.possiblyWarnOnBadFieldType();
            return (h("atomic-text", { value: getFieldValueCaption(this.field, this.default, this.bindings.i18n) }));
        }
        const textValue = `${resultValueAsString}`;
        const highlightsValue = ResultTemplatesHelpers.getResultProperty(this.result, `${this.field}Highlights`);
        if (this.shouldHighlight && highlightsValue) {
            return this.renderWithHighlights(textValue, highlightsValue);
        }
        return getFieldValueCaption(this.field, textValue, this.bindings.i18n);
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultText.prototype, "result", void 0);

export { AtomicResultText as atomic_result_text };

//# sourceMappingURL=atomic-result-text.entry.js.map