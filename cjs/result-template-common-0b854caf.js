'use strict';

const headless_esm = require('./headless.esm-1a66963a.js');
const index = require('./index-c930d4b4.js');
const utils = require('./utils-93ea935e.js');
const tableElementUtils = require('./table-element-utils-8c4aa9e6.js');
const sections = require('./sections-923396f6.js');

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
        conditions.push(headless_esm.ow.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(headless_esm.ow.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}
function makeDefinedConditions(ifDefined, ifNotDefined) {
    const conditions = [];
    if (ifDefined) {
        const fieldNames = ifDefined.split(',');
        conditions.push(headless_esm.ow.fieldsMustBeDefined(fieldNames));
    }
    if (ifNotDefined) {
        const fieldNames = ifNotDefined.split(',');
        conditions.push(headless_esm.ow.fieldsMustNotBeDefined(fieldNames));
    }
    return conditions;
}

exports.ResultTemplateCommon = ResultTemplateCommon;
exports.makeDefinedConditions = makeDefinedConditions;
exports.makeMatchConditions = makeMatchConditions;

//# sourceMappingURL=result-template-common-0b854caf.js.map