import { h, F as Fragment } from './index-c045ad7c.js';

const QuerySummaryContainer = ({ additionalClasses }, children) => {
    return (h("div", { class: `text-on-background${additionalClasses ? ` ${additionalClasses}` : ''}`, part: "container" }, children));
};

const QuerySummaryGuard = ({ hasResults, hasError, firstSearchExecuted }, children) => {
    if (hasError || (!hasResults && firstSearchExecuted)) {
        return;
    }
    if (!firstSearchExecuted) {
        return (h("div", { part: "placeholder", "aria-hidden": "true", class: "h-6 my-2 w-60 bg-neutral rounded animate-pulse" }));
    }
    return h(Fragment, null, children);
};

const WrapHighlight = (props, children) => {
    return (h("span", { class: "font-bold", part: `highlight${props.part ? ` ${props.part}` : ''}` }, children));
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
        first: h(WrapHighlight, null, params.first),
        last: h(WrapHighlight, null, params.last),
        total: h(WrapHighlight, null, params.total),
        query: h(WrapHighlight, { part: "query" }, params.query),
    };
    const ariaLiveMessage = isLoading
        ? i18n.t('loading-results')
        : i18n.t(i18nKey, params);
    return { i18nKey, highlights, ariaLiveMessage };
};

export { QuerySummaryContainer as Q, QuerySummaryGuard as a, getQuerySummaryI18nParameters as g };

//# sourceMappingURL=utils-7a5c90c9.js.map