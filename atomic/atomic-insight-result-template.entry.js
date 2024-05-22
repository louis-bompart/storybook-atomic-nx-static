import { r as registerInstance, g as getElement } from './index-53978573.js';
import { M as MapProp } from './props-utils-050f4514.js';
import { R as ResultTemplateCommon, a as makeDefinedConditions, m as makeMatchConditions } from './result-template-common-061a924c.js';
import './bueno.esm-38a5b490.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './headless.esm-bdb53e72.js';
import './table-element-utils-2fd4b45f.js';
import './sections-a7d75695.js';

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
const AtomicInsightResultTemplate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.matchConditions = [];
        /**
         * A function that must return true on results for the result template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
         */
        this.conditions = [];
        /**
         * The field and values that define which result items the condition must be applied to.
         *
         * For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`
         */
        this.mustMatch = {};
        /**
         * The field and values that define which result items the condition must not be applied to.
         *
         * For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage"`
         */
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.ifDefined = undefined;
        this.ifNotDefined = undefined;
        this.resultTemplateCommon = new ResultTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: [
                'atomic-insight-result-list',
                'atomic-insight-folded-result-list',
            ],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.conditions = makeDefinedConditions(this.ifDefined, this.ifNotDefined);
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
], AtomicInsightResultTemplate.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicInsightResultTemplate.prototype, "mustNotMatch", void 0);

export { AtomicInsightResultTemplate as atomic_insight_result_template };

//# sourceMappingURL=atomic-insight-result-template.entry.js.map