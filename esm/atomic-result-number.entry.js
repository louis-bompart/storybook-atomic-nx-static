import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { o as ow } from './headless.esm-88bad35d.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { a as defaultNumberFormatter } from './format-common-291c0e41.js';
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
const AtomicResultNumber = class {
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
        const value = ow.getResultProperty(this.result, this.field);
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
], AtomicResultNumber.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultNumber.prototype, "result", void 0);

export { AtomicResultNumber as atomic_result_number };

//# sourceMappingURL=atomic-result-number.entry.js.map