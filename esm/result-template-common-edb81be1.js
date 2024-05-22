import { o as ow } from './headless.esm-88bad35d.js';
import { h } from './index-c045ad7c.js';
import { e as aggregate, f as isVisualNode, b as isElementNode } from './utils-af246396.js';
import { t as tableElementTagName } from './table-element-utils-2fd4b45f.js';
import { i as isResultSectionNode } from './sections-a848dae3.js';

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
class ResultTemplateCommon {
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
            setError(new Error(`The "${tagName}" component has to contain a "template" element as a child.`));
            return;
        }
        if (!allowEmpty && !template.innerHTML.trim()) {
            setError(new Error(`The "template" tag inside "${tagName}" cannot be empty.`));
            return;
        }
        if (template.content.querySelector('script')) {
            console.warn('Any "script" tags defined inside of "template" elements are not supported and will not be executed when the results are rendered.', host);
        }
        const { section: sectionNodes, other: otherNodes } = groupNodesByType(template.content.childNodes);
        if ((sectionNodes === null || sectionNodes === void 0 ? void 0 : sectionNodes.length) && (otherNodes === null || otherNodes === void 0 ? void 0 : otherNodes.length)) {
            console.warn('Result templates should only contain section elements or non-section elements. Future updates could unpredictably affect this result template.', host, { sectionNodes, otherNodes });
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
        conditions.push(ow.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(ow.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}
function makeDefinedConditions(ifDefined, ifNotDefined) {
    const conditions = [];
    if (ifDefined) {
        const fieldNames = ifDefined.split(',');
        conditions.push(ow.fieldsMustBeDefined(fieldNames));
    }
    if (ifNotDefined) {
        const fieldNames = ifNotDefined.split(',');
        conditions.push(ow.fieldsMustNotBeDefined(fieldNames));
    }
    return conditions;
}

export { ResultTemplateCommon as R, makeDefinedConditions as a, makeMatchConditions as m };

//# sourceMappingURL=result-template-common-edb81be1.js.map