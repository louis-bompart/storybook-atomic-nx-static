'use strict';

const utils = require('./utils-93ea935e.js');

const resultSectionTags = new Set([
    'atomic-result-section-visual',
    'atomic-result-section-badges',
    'atomic-result-section-actions',
    'atomic-result-section-title',
    'atomic-result-section-title-metadata',
    'atomic-result-section-emphasized',
    'atomic-result-section-excerpt',
    'atomic-result-section-bottom-metadata',
    'atomic-result-section-children',
]);
const productSectionTags = new Set([
    'atomic-product-section-visual',
    'atomic-product-section-badges',
    'atomic-product-section-actions',
    'atomic-product-section-name',
    'atomic-product-section-metadata',
    'atomic-product-section-emphasized',
    'atomic-product-section-description',
    'atomic-product-section-bottom-metadata',
]);
const allTags = new Set([...resultSectionTags, ...productSectionTags]);
function isResultSectionNode(element) {
    if (!utils.isElementNode(element)) {
        return false;
    }
    return allTags.has(element.tagName.toLowerCase());
}
function containsSections(content) {
    if (typeof content === 'string') {
        return Array.from(resultSectionTags.values()).some((resultSectionTag) => content.includes(resultSectionTag));
    }
    return Array.from(content).some((child) => isResultSectionNode(child));
}

exports.containsSections = containsSections;
exports.isResultSectionNode = isResultSectionNode;

//# sourceMappingURL=sections-923396f6.js.map