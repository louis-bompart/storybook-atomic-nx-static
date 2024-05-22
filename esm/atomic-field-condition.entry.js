import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { o as ow } from './headless.esm-88bad35d.js';
import { M as MapProp } from './props-utils-36d102c2.js';
import { m as makeMatchConditions } from './result-template-common-de38d8ed.js';
import { R as ResultContext } from './result-template-decorators-13a4dae6.js';
import './bueno.esm-9a075e67.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './table-element-utils-2fd4b45f.js';
import './sections-724d765d.js';
import './item-decorators-79369ad9.js';
import './event-utils-8de63ec3.js';

const atomicFieldConditionCss = "atomic-field-condition{max-width:100%}";
const AtomicFieldConditionStyle0 = atomicFieldConditionCss;

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
            this.conditions.push(ow.fieldsMustBeDefined(fieldNames));
        }
        if (this.ifNotDefined) {
            const fieldNames = this.ifNotDefined.split(',');
            this.conditions.push(ow.fieldsMustNotBeDefined(fieldNames));
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
AtomicFieldCondition.style = AtomicFieldConditionStyle0;

export { AtomicFieldCondition as atomic_field_condition };

//# sourceMappingURL=atomic-field-condition.entry.js.map