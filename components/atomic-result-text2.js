import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as isArray } from './bueno.esm.js';
import { y as yg, o as ow } from './headless.esm.js';
import { g as getFieldValueCaption } from './field-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { g as getStringValueFromResultOrNull } from './result-utils.js';
import { R as ResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';
import { d as defineCustomElement$1 } from './atomic-text2.js';

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
const AtomicResultText = /*@__PURE__*/ proxyCustomElement(class AtomicResultText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get host() { return this; }
}, [0, "atomic-result-text", {
        "field": [513],
        "shouldHighlight": [516, "should-highlight"],
        "default": [513],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultText.prototype, "result", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-text", "atomic-component-error", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultText);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicResultText as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-text2.js.map