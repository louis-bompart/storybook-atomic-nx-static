'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const propsUtils = require('./props-utils-d9a5cdae.js');
const resultTemplateCommon = require('./result-template-common-0b854caf.js');
const resultTemplateDecorators = require('./result-template-decorators-7ce75291.js');
require('./bueno.esm-344292d0.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./table-element-utils-8c4aa9e6.js');
require('./sections-923396f6.js');
require('./item-decorators-1f104375.js');
require('./event-utils-9bfcf3c5.js');

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
        index.registerInstance(this, hostRef);
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
            this.conditions.push(headless_esm.ow.fieldsMustBeDefined(fieldNames));
        }
        if (this.ifNotDefined) {
            const fieldNames = this.ifNotDefined.split(',');
            this.conditions.push(headless_esm.ow.fieldsMustNotBeDefined(fieldNames));
        }
        this.conditions.push(...resultTemplateCommon.makeMatchConditions(this.mustMatch, this.mustNotMatch));
    }
    render() {
        if (!this.conditions.every((condition) => condition(this.result))) {
            this.shouldBeRemoved = true;
            return '';
        }
        return index.h("slot", null);
    }
    componentDidLoad() {
        this.shouldBeRemoved && this.host.remove();
    }
    get host() { return index.getElement(this); }
};
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustMatch", void 0);
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicFieldCondition.prototype, "mustNotMatch", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicFieldCondition.prototype, "result", void 0);
AtomicFieldCondition.style = AtomicFieldConditionStyle0;

exports.atomic_field_condition = AtomicFieldCondition;

//# sourceMappingURL=atomic-field-condition.cjs.entry.js.map