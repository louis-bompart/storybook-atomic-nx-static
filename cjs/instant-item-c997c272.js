'use strict';

const index = require('./index-c930d4b4.js');
const stringUtils = require('./string-utils-bdf08f8c.js');
const buttonStyle = require('./button-style-dc30784f.js');

const getPartialInstantItemElement = (i18n, itemTitle, itemUniqueId) => {
    return {
        ariaLabel: i18n.t('instant-results-suggestion-label', {
            title: itemTitle,
            interpolation: { escapeValue: false },
        }),
        key: `instant-result-${stringUtils.encodeForDomAttribute(itemUniqueId)}`,
        part: 'instant-results-item',
    };
};
const getPartialInstantItemShowAllElement = (i18n) => {
    return {
        key: 'instant-results-show-all-button',
        part: 'instant-results-show-all',
        ariaLabel: i18n.t('show-all-results'),
    };
};
const InstantItemShowAllButton = ({ i18n }) => {
    return (index.h("div", { part: "instant-results-show-all-button", class: buttonStyle.getClassNameForButtonStyle('text-primary') }, i18n.t('show-all-results')));
};

exports.InstantItemShowAllButton = InstantItemShowAllButton;
exports.getPartialInstantItemElement = getPartialInstantItemElement;
exports.getPartialInstantItemShowAllElement = getPartialInstantItemShowAllElement;

//# sourceMappingURL=instant-item-c997c272.js.map