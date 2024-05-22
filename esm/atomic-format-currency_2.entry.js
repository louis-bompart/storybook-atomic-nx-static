import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { d as dispatchNumberFormatEvent, a as defaultNumberFormatter } from './format-common-291c0e41.js';
import { V as VA } from './headless.esm-3423086c.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { P as ProductContext } from './product-template-decorators-1c948806.js';
import './event-utils-8de63ec3.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-decorators-d183824b.js';

const AtomicFormatCurrency = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: 'eaa8f36e17d6c352522a3720e21d48e3cab8e9db', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
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
        registerInstance(this, hostRef);
        this.formatter = defaultNumberFormatter;
        this.valueToDisplay = null;
        this.error = undefined;
        this.field = undefined;
        this.formatter = defaultNumberFormatter;
        this.valueToDisplay = null;
    }
    setFormat(event) {
        event.preventDefault();
        event.stopPropagation();
        this.formatter = event.detail;
    }
    parseValue() {
        const value = VA.getProductProperty(this.product, this.field);
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicProductNumber.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductNumber.prototype, "product", void 0);

export { AtomicFormatCurrency as atomic_format_currency, AtomicProductNumber as atomic_product_numeric_field_value };

//# sourceMappingURL=atomic-format-currency_2.entry.js.map