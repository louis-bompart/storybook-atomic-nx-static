import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { M as MapProp } from './props-utils-36d102c2.js';
import { R as ResultTemplateCommon, m as makeMatchConditions } from './result-template-common-de38d8ed.js';
import './bueno.esm-9a075e67.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './headless.esm-88bad35d.js';
import './table-element-utils-2fd4b45f.js';
import './sections-724d765d.js';

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
const AtomicResultTemplate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * A function that must return true on results for the result template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
         */
        this.conditions = [];
        this.mustMatch = {};
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.resultTemplateCommon = new ResultTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: [
                'atomic-result-list',
                'atomic-folded-result-list',
                'atomic-search-box-instant-results',
            ],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.resultTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.resultTemplateCommon.renderIfError(this.error);
    }
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicResultTemplate.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicResultTemplate.prototype, "mustNotMatch", void 0);

export { AtomicResultTemplate as atomic_result_template };

//# sourceMappingURL=atomic-result-template.entry.js.map