'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const propsUtils = require('./props-utils-e054c946.js');
const headless_esm = require('./headless.esm-12566d73.js');
const utils = require('./utils-b609c39e.js');
const sections = require('./sections-9d82449e.js');
const tableElementUtils = require('./table-element-utils-8c4aa9e6.js');
require('./bueno.esm-344292d0.js');
require('./_commonjsHelpers-0192c5b3.js');

function getTemplateNodeType(node) {
    if (sections.isResultSectionNode(node)) {
        return 'section';
    }
    if (!utils.isVisualNode(node)) {
        return 'metadata';
    }
    if (utils.isElementNode(node) &&
        node.tagName.toLowerCase() === tableElementUtils.tableElementTagName) {
        return 'table-column-definition';
    }
    return 'other';
}
function groupNodesByType(nodes) {
    return utils.aggregate(Array.from(nodes), (node) => getTemplateNodeType(node));
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
            return (index.h("atomic-component-error", { element: this.host, error: error }));
        }
    }
}
function getTemplateElement(host) {
    return host.querySelector('template');
}
function makeMatchConditions(mustMatch, mustNotMatch) {
    const conditions = [];
    for (const field in mustMatch) {
        conditions.push(headless_esm.VA.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(headless_esm.VA.fieldMustNotMatch(field, mustNotMatch[field]));
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
        index.registerInstance(this, hostRef);
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
    get host() { return index.getElement(this); }
};
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustMatch", void 0);
__decorate([
    propsUtils.MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustNotMatch", void 0);

exports.atomic_product_template = AtomicProductTemplate;

//# sourceMappingURL=atomic-product-template.cjs.entry.js.map