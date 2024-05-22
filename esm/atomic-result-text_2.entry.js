import { r as registerInstance, h, H as Host, g as getElement } from './index-c045ad7c.js';
import { i as isArray } from './bueno.esm-9a075e67.js';
import { U as yg, o as ow } from './headless.esm-88bad35d.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { g as getStringValueFromResultOrNull } from './result-utils-a899cfd0.js';
import { R as ResultContext } from './result-template-decorators-13a4dae6.js';
import './event-utils-8de63ec3.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-decorators-79369ad9.js';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
            const highlightedValue = yg.highlightString({
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
        const resultValueRaw = ow.getResultProperty(this.result, this.field);
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
        const highlightsValue = ow.getResultProperty(this.result, `${this.field}Highlights`);
        if (this.shouldHighlight && highlightsValue) {
            return this.renderWithHighlights(textValue, highlightsValue);
        }
        return getFieldValueCaption(this.field, textValue, this.bindings.i18n);
    }
    get host() { return getElement(this); }
};
__decorate$1([
    InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate$1([
    ResultContext()
], AtomicResultText.prototype, "result", void 0);

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
const AtomicText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.strings = {
            value: () => this.bindings.i18n.t(this.value, {
                count: this.count,
            }),
        };
        this.error = undefined;
        this.value = undefined;
        this.count = undefined;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return this.strings.value();
    }
};
__decorate([
    InitializeBindings()
], AtomicText.prototype, "bindings", void 0);

export { AtomicResultText as atomic_result_text, AtomicText as atomic_text };

//# sourceMappingURL=atomic-result-text_2.entry.js.map