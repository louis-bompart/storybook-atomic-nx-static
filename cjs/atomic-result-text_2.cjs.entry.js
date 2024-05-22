'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const fieldUtils = require('./field-utils-a715deca.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const resultUtils = require('./result-utils-9f11ee00.js');
const resultTemplateDecorators = require('./result-template-decorators-a55bdcb7.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./item-decorators-7bbc4b3f.js');

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
        index.registerInstance(this, hostRef);
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
            const highlightedValue = headless_esm.yg.highlightString({
                content: value,
                openingDelimiter,
                closingDelimiter,
                highlights,
            });
            const innerHTML = highlightedValue
                .replace(new RegExp(openingDelimiter, 'g'), '<b>')
                .replace(new RegExp(closingDelimiter, 'g'), '</b>');
            // deepcode ignore ReactSetInnerHtml: This is not React code
            return index.h(index.Host, { innerHTML: innerHTML });
        }
        catch (error) {
            this.error = error;
        }
    }
    possiblyWarnOnBadFieldType() {
        const resultValueRaw = headless_esm.ow.getResultProperty(this.result, this.field);
        if (bueno_esm.isArray(resultValueRaw)) {
            this.bindings.engine.logger.error(`atomic-result-text cannot be used with multi value field "${this.field}" with values "${resultValueRaw}". Use atomic-result-multi-value-text instead.`, this);
        }
    }
    render() {
        const resultValueAsString = resultUtils.getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValueAsString && !this.default) {
            this.possiblyWarnOnBadFieldType();
            this.host.remove();
            return;
        }
        if (!resultValueAsString && this.default) {
            this.possiblyWarnOnBadFieldType();
            return (index.h("atomic-text", { value: fieldUtils.getFieldValueCaption(this.field, this.default, this.bindings.i18n) }));
        }
        const textValue = `${resultValueAsString}`;
        const highlightsValue = headless_esm.ow.getResultProperty(this.result, `${this.field}Highlights`);
        if (this.shouldHighlight && highlightsValue) {
            return this.renderWithHighlights(textValue, highlightsValue);
        }
        return fieldUtils.getFieldValueCaption(this.field, textValue, this.bindings.i18n);
    }
    get host() { return index.getElement(this); }
};
__decorate$1([
    initializationUtils.InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate$1([
    resultTemplateDecorators.ResultContext()
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
        index.registerInstance(this, hostRef);
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
    initializationUtils.InitializeBindings()
], AtomicText.prototype, "bindings", void 0);

exports.atomic_result_text = AtomicResultText;
exports.atomic_text = AtomicText;

//# sourceMappingURL=atomic-result-text_2.cjs.entry.js.map