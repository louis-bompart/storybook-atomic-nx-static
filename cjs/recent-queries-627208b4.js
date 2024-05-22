'use strict';

const headless_esm = require('./headless.esm-1a66963a.js');
const index = require('./index-c930d4b4.js');
const stringUtils = require('./string-utils-bdf08f8c.js');

const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${stringUtils.encodeForDomAttribute(value)}`,
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
    return (index.h("div", { part: "recent-query-content", class: "flex items-center break-all text-left" }, children));
};
const RecentQueryIcon = ({ icon, }) => {
    return (index.h("atomic-icon", { part: "recent-query-icon", icon: icon, class: "w-4 h-4 mr-2 shrink-0" }));
};
const RecentQueryText = ({ query, value, }) => {
    if (query === '') {
        return (index.h("span", { part: "recent-query-text", class: "break-all line-clamp-2" }, value));
    }
    return (index.h("span", { part: "recent-query-text", class: "break-all line-clamp-2", innerHTML: headless_esm.yg.highlightString({
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
    return (index.h("div", { part: "recent-query-title-content", class: "flex justify-between w-full" },
        index.h("span", { class: "font-bold", part: "recent-query-title" }, i18n.t('recent-searches')),
        index.h("span", { part: "recent-query-clear" }, i18n.t('clear'))));
};

exports.RecentQueriesContainer = RecentQueriesContainer;
exports.RecentQueryClear = RecentQueryClear;
exports.RecentQueryIcon = RecentQueryIcon;
exports.RecentQueryText = RecentQueryText;
exports.getPartialRecentQueryClearElement = getPartialRecentQueryClearElement;
exports.getPartialRecentQueryElement = getPartialRecentQueryElement;

//# sourceMappingURL=recent-queries-627208b4.js.map