import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { R as ResultTemplatesHelpers } from './headless.esm-bdb53e72.js';
import { M as MapProp } from './props-utils-050f4514.js';
import { m as makeMatchConditions } from './result-template-common-061a924c.js';
import { R as ResultContext } from './result-template-decorators-7958bada.js';
import './bueno.esm-38a5b490.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './table-element-utils-2fd4b45f.js';
import './sections-a7d75695.js';
import './item-decorators-50bb80ae.js';
import './event-utils-8de63ec3.js';

const atomicFieldConditionCss = "atomic-field-condition{max-width:100%}";

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
const AtomicFieldCondition = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mustMatch = {};
        this.mustNotMatch = {};
        this.conditions = [];
        this.shouldBeRemoved = false;
        this.ifDefined = undefined;
        this.ifNotDefined = undefined;
    }
    componentWillLoad() {
        if (this.ifDefined) {
            const fieldNames = this.ifDefined.split(',');
            this.conditions.push(ResultTemplatesHelpers.fieldsMustBeDefined(fieldNames));
        }
        if (this.ifNotDefined) {
            const fieldNames = this.ifNotDefined.split(',');
            this.conditions.push(ResultTemplatesHelpers.fieldsMustNotBeDefined(fieldNames));
        }
        this.conditions.push(...makeMatchConditions(this.mustMatch, this.mustNotMatch));
    }
    render() {
        if (!this.conditions.every((condition) => condition(this.result))) {
            this.shouldBeRemoved = true;
            return '';
        }
        return h("slot", null);
    }
    componentDidLoad() {
        this.shouldBeRemoved && this.host.remove();
    }
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustNotMatch", void 0);
__decorate([
    ResultContext()
], AtomicFieldCondition.prototype, "result", void 0);
AtomicFieldCondition.style = atomicFieldConditionCss;

export { AtomicFieldCondition as atomic_field_condition };

//# sourceMappingURL=atomic-field-condition.entry.js.map