import { U as yg } from './headless.esm-88bad35d.js';
import { h } from './index-c045ad7c.js';
import { e as encodeForDomAttribute } from './string-utils-5f5a23a8.js';

const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${encodeForDomAttribute(value)}`,
        ariaLabel: i18n.t('recent-query-suggestion-label', {
            query: value,
            interpolation: { escapeValue: false },
        }),
    };
};
const getPartialRecentQueryClearElement = (i18n) => {
    return {
        key: 'recent-query-clear',
        ariaLabel: i18n.t('clear-recent-searches', {
            interpolation: { escapeValue: false },
        }),
        part: 'recent-query-title-item suggestion-divider',
        hideIfLast: true,
    };
};
const RecentQueriesContainer = (_, children) => {
    return (h("div", { part: "recent-query-content", class: "flex items-center break-all text-left" }, children));
};
const RecentQueryIcon = ({ icon, }) => {
    return (h("atomic-icon", { part: "recent-query-icon", icon: icon, class: "w-4 h-4 mr-2 shrink-0" }));
};
const RecentQueryText = ({ query, value, }) => {
    if (query === '') {
        return (h("span", { part: "recent-query-text", class: "break-all line-clamp-2" }, value));
    }
    return (h("span", { part: "recent-query-text", class: "break-all line-clamp-2", innerHTML: yg.highlightString({
            content: value,
            openingDelimiter: '<span part="recent-query-text-highlight" class="font-bold">',
            closingDelimiter: '</span>',
            highlights: [
                {
                    offset: query.length,
                    length: value.length - query.length,
                },
            ],
        }) }));
};
const RecentQueryClear = ({ i18n, }) => {
    return (h("div", { part: "recent-query-title-content", class: "flex justify-between w-full" },
        h("span", { class: "font-bold", part: "recent-query-title" }, i18n.t('recent-searches')),
        h("span", { part: "recent-query-clear" }, i18n.t('clear'))));
};

export { RecentQueryClear as R, getPartialRecentQueryElement as a, RecentQueryText as b, RecentQueryIcon as c, RecentQueriesContainer as d, getPartialRecentQueryClearElement as g };

//# sourceMappingURL=recent-queries-e2a43224.js.map