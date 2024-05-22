import { h, r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { M as MapProp } from './props-utils-26db487c.js';
import { V as VA } from './headless.esm-3423086c.js';
import { e as aggregate, f as isVisualNode, b as isElementNode } from './utils-af246396.js';
import { i as isResultSectionNode } from './sections-a848dae3.js';
import { t as tableElementTagName } from './table-element-utils-2fd4b45f.js';
import './bueno.esm-9a075e67.js';
import './_commonjsHelpers-c9e3b764.js';

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
const AtomicProductTemplate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustNotMatch", void 0);

export { AtomicProductTemplate as atomic_product_template };

//# sourceMappingURL=atomic-product-template.entry.js.map