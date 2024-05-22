import { h } from '@stencil/core/internal/client';
import { e as encodeForDomAttribute } from './string-utils.js';
import { a as getClassNameForButtonStyle } from './button-style.js';

const getPartialInstantItemElement = (i18n, itemTitle, itemUniqueId) => {
    return {
        ariaLabel: i18n.t('instant-results-suggestion-label', {
            title: itemTitle,
            interpolation: { escapeValue: false },
        }),
        key: `instant-result-${encodeForDomAttribute(itemUniqueId)}`,
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
    return (h("div", { part: "instant-results-show-all-button", class: getClassNameForButtonStyle('text-primary') }, i18n.t('show-all-results')));
};

export { InstantItemShowAllButton as I, getPartialInstantItemShowAllElement as a, getPartialInstantItemElement as g };

//# sourceMappingURL=instant-item.js.map