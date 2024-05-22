import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { R as ResultTemplateCommon, m as makeMatchConditions } from './result-template-common.js';

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
const AtomicResultChildrenTemplate$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultChildrenTemplate extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            validParents: ['atomic-result-children'],
        });
    }
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
    }
    componentWillLoad() {
        this.resultTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    render() {
        return this.resultTemplateCommon.renderIfError(this.error);
    }
    get host() { return this; }
}, [1, "atomic-result-children-template", {
        "conditions": [16],
        "error": [32],
        "getTemplate": [64]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicResultChildrenTemplate$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicResultChildrenTemplate$1.prototype, "mustNotMatch", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-children-template"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-children-template":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultChildrenTemplate$1);
            }
            break;
    } });
}

const AtomicResultChildrenTemplate = AtomicResultChildrenTemplate$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultChildrenTemplate, defineCustomElement };

//# sourceMappingURL=atomic-result-children-template.js.map