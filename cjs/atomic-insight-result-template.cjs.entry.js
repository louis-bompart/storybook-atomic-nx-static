'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const propsUtils = require('./props-utils-d9a5cdae.js');
const resultTemplateCommon = require('./result-template-common-0b854caf.js');
require('./bueno.esm-344292d0.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./headless.esm-1a66963a.js');
require('./table-element-utils-8c4aa9e6.js');
require('./sections-923396f6.js');

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
        index.registerInstance(this, hostRef);
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
        this.resultTemplateCommon = new resultTemplateCommon.ResultTemplateCommon({
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
        this.conditions = resultTemplateCommon.makeDefinedConditions(this.ifDefined, this.ifNotDefined);
        this.resultTemplateCommon.matchConditions = resultTemplateCommon.makeMatchConditions(this.mustMatch, this.mustNotMatch);
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
    get host() { return index.getElement(this); }
};
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicInsightResultTemplate.prototype, "mustMatch", void 0);
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicInsightResultTemplate.prototype, "mustNotMatch", void 0);

exports.atomic_insight_result_template = AtomicInsightResultTemplate;

//# sourceMappingURL=atomic-insight-result-template.cjs.entry.js.map