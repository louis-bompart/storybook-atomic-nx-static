import { h } from './index-c045ad7c.js';
import { e as encodeForDomAttribute } from './string-utils-5f5a23a8.js';

const getPartialSearchBoxSuggestionElement = (suggestion, i18n) => {
    return {
        part: 'query-suggestion-item',
        key: `qs-${encodeForDomAttribute(suggestion.rawValue)}`,
        query: suggestion.rawValue,
        ariaLabel: i18n.t('query-suggestion-label', {
            query: suggestion.rawValue,
            interpolation: { escapeValue: false },
        }),
    };
};
const QuerySuggestionContainer = (_, children) => {
    return (h("div", { part: "query-suggestion-content", class: "flex items-center" }, children));
};
const QuerySuggestionIcon = ({ icon, hasSuggestion }) => {
    if (!hasSuggestion) {
        return;
    }
    return (h("atomic-icon", { part: "query-suggestion-icon", icon: icon, class: "w-4 h-4 mr-2 shrink-0" }));
};
const QuerySuggestionText = ({ suggestion, hasQuery }) => {
    if (hasQuery) {
        return (h("span", { part: "query-suggestion-text", class: "break-all line-clamp-2", innerHTML: suggestion.highlightedValue }));
    }
    return (h("span", { part: "query-suggestion-text", class: "break-all line-clamp-2" }, suggestion.rawValue));
};

export { QuerySuggestionText as Q, QuerySuggestionIcon as a, QuerySuggestionContainer as b, getPartialSearchBoxSuggestionElement as g };

//# sourceMappingURL=query-suggestions-c462ddd7.js.map