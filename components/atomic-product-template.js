import { h, proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { V as VA } from './headless.esm2.js';
import { l as aggregate, m as isVisualNode, e as isElementNode } from './utils.js';
import { i as isResultSectionNode } from './sections2.js';
import { t as tableElementTagName } from './table-element-utils.js';

function getTemplateNodeType(node) {
    if (isResultSectionNode(node)) {
        return 'section';
    }
    if (!isVisualNode(node)) {
        return 'metadata';
    }
    if (isElementNode(node) &&
        node.tagName.toLowerCase() === tableElementTagName) {
        return 'table-column-definition';
    }
    return 'other';
}
function groupNodesByType(nodes) {
    return aggregate(Array.from(nodes), (node) => getTemplateNodeType(node));
}
class ProductTemplateCommon {
    constructor({ host, setError, validParents, allowEmpty = false, }) {
        this.matchConditions = [];
        this.host = host;
        this.validateTemplate(host, setError, validParents, allowEmpty);
    }
    validateTemplate(host, setError, validParents, allowEmpty = true) {
        var _a;
        const hasValidParent = validParents
            .map((p) => p.toUpperCase())
            .includes(((_a = host.parentElement) === null || _a === void 0 ? void 0 : _a.nodeName) || '');
        const tagName = host.nodeName.toLowerCase();
        if (!hasValidParent) {
            setError(new Error(`The "${tagName}" component has to be the child of one of the following: ${validParents
                .map((p) => `"${p.toLowerCase()}"`)
                .join(', ')}.`));
            return;
        }
        const template = host.querySelector('template');
        if (!template) {
            setError(new Error(`The "${tagName}" component must contain a "template" element as a child.`));
            return;
        }
        if (!allowEmpty && !template.innerHTML.trim()) {
            setError(new Error(`The "template" tag inside "${tagName}" cannot be empty.`));
            return;
        }
        if (template.content.querySelector('script')) {
            console.warn('Any "script" tags defined inside of "template" elements are not supported and will not be executed when the products are rendered.', host);
        }
        const { section: sectionNodes, other: otherNodes } = groupNodesByType(template.content.childNodes);
        if ((sectionNodes === null || sectionNodes === void 0 ? void 0 : sectionNodes.length) && (otherNodes === null || otherNodes === void 0 ? void 0 : otherNodes.length)) {
            console.warn('Product templates should only contain section elements or non-section elements. Future updates could unpredictably affect this product template.', host, { sectionNodes, otherNodes });
        }
    }
    getTemplate(conditions, error) {
        if (error) {
            return null;
        }
        return {
            conditions: conditions.concat(this.matchConditions),
            content: getTemplateElement(this.host).content,
            priority: 1,
        };
    }
    renderIfError(error) {
        if (error) {
            return (h("atomic-component-error", { element: this.host, error: error }));
        }
    }
}
function getTemplateElement(host) {
    return host.querySelector('template');
}
function makeMatchConditions(mustMatch, mustNotMatch) {
    const conditions = [];
    for (const field in mustMatch) {
        conditions.push(VA.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(VA.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}

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
const AtomicProductTemplate$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductTemplate extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * A function that must return true on products for the product template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to products whose `ec_name` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(product) => /singapore/i.test(product.ec_name)];`
         */
        this.conditions = [];
        this.mustMatch = {};
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.productTemplateCommon = new ProductTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: [
                'atomic-commerce-product-list',
                'atomic-commerce-recommendation-list',
            ],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.productTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the product template to apply based on the evaluated conditions.
     */
    async getTemplate() {
        return this.productTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.productTemplateCommon.renderIfError(this.error);
    }
    get host() { return this; }
}, [1, "atomic-product-template", {
        "conditions": [16],
        "error": [32],
        "getTemplate": [64]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate$1.prototype, "mustNotMatch", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-template"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-template":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductTemplate$1);
            }
            break;
    } });
}

const AtomicProductTemplate = AtomicProductTemplate$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductTemplate, defineCustomElement };

//# sourceMappingURL=atomic-product-template.js.map