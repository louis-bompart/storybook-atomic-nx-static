'use strict';

const index = require('./index-c930d4b4.js');

const QuerySummaryContainer = ({ additionalClasses }, children) => {
    return (index.h("div", { class: `text-on-background${additionalClasses ? ` ${additionalClasses}` : ''}`, part: "container" }, children));
};

const QuerySummaryGuard = ({ hasResults, hasError, firstSearchExecuted }, children) => {
    if (hasError || (!hasResults && firstSearchExecuted)) {
        return;
    }
    if (!firstSearchExecuted) {
        return (index.h("div", { part: "placeholder", "aria-hidden": "true", class: "h-6 my-2 w-60 bg-neutral rounded animate-pulse" }));
    }
    return index.h(index.Fragment, null, children);
};

const WrapHighlight = (props, children) => {
    return (index.h("span", { class: "font-bold", part: `highlight${props.part ? ` ${props.part}` : ''}` }, children));
};
const getQuerySummaryI18nParameters = ({ first, last, query, total, isLoading, i18n, }) => {
    const i18nKey = query !== '' ? 'showing-results-of-with-query' : 'showing-results-of';
    const params = {
        first: first.toLocaleString(),
        last: last.toLocaleString(),
        total: total.toLocaleString(),
        query: query,
        count: last,
    };
    const highlights = {
        first: index.h(WrapHighlight, null, params.first),
        last: index.h(WrapHighlight, null, params.last),
        total: index.h(WrapHighlight, null, params.total),
        query: index.h(WrapHighlight, { part: "query" }, params.query),
    };
    const ariaLiveMessage = isLoading
        ? i18n.t('loading-results')
        : i18n.t(i18nKey, params);
    return { i18nKey, highlights, ariaLiveMessage };
};

exports.QuerySummaryContainer = QuerySummaryContainer;
exports.QuerySummaryGuard = QuerySummaryGuard;
exports.getQuerySummaryI18nParameters = getQuerySummaryI18nParameters;

//# sourceMappingURL=utils-5757cf7c.js.map