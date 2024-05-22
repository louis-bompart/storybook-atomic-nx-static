'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const formatCommon = require('./format-common-8d8e4aef.js');
const headless_esm = require('./headless.esm-12566d73.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const productTemplateDecorators = require('./product-template-decorators-7a6b2044.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./item-decorators-7bbc4b3f.js');

const AtomicFormatCurrency = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'currency',
                currency: this.currency,
            });
        };
        this.error = undefined;
        this.currency = undefined;
    }
    componentWillLoad() {
        try {
            formatCommon.dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: 'eaa8f36e17d6c352522a3720e21d48e3cab8e9db', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

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
const AtomicProductNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.formatter = formatCommon.defaultNumberFormatter;
        this.valueToDisplay = null;
        this.error = undefined;
        this.field = undefined;
        this.formatter = formatCommon.defaultNumberFormatter;
        this.valueToDisplay = null;
    }
    setFormat(event) {
        event.preventDefault();
        event.stopPropagation();
        this.formatter = event.detail;
    }
    parseValue() {
        const value = headless_esm.VA.getProductProperty(this.product, this.field);
        if (value === null) {
            return null;
        }
        const valueAsNumber = parseFloat(`${value}`);
        if (Number.isNaN(valueAsNumber)) {
            this.error = new Error(`Could not parse "${value}" from field "${this.field}" as a number.`);
            return null;
        }
        return valueAsNumber;
    }
    formatValue(value) {
        try {
            return this.formatter(value, this.bindings.i18n.languages);
        }
        catch (error) {
            this.error = error;
            return value.toString();
        }
    }
    updateValueToDisplay() {
        const value = this.parseValue();
        if (value !== null) {
            this.valueToDisplay = this.formatValue(value);
        }
    }
    componentWillRender() {
        this.updateValueToDisplay();
    }
    render() {
        if (this.valueToDisplay === null) {
            this.host.remove();
            return;
        }
        return this.valueToDisplay;
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductNumber.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductNumber.prototype, "product", void 0);

exports.atomic_format_currency = AtomicFormatCurrency;
exports.atomic_product_numeric_field_value = AtomicProductNumber;

//# sourceMappingURL=atomic-format-currency_2.cjs.entry.js.map