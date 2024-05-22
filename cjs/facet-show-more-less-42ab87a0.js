'use strict';

const facetValueLabelHighlight = require('./facet-value-label-highlight-e1da136a.js');
const index = require('./index-c930d4b4.js');
const close = require('./close-20739950.js');
const search = require('./search-a4774f02.js');
const button = require('./button-90bb3acf.js');
const plus = require('./plus-e4c10c13.js');

function announceFacetSearchResultsWithAriaLive(facet, label, setAriaLive, i18n) {
    let prevState = facet.state.facetSearch;
    facet.subscribe(() => {
        if (facetValueLabelHighlight.shouldUpdateFacetSearchComponent(facet.state.facetSearch, prevState) &&
            facet.state.facetSearch.query) {
            prevState = facet.state.facetSearch;
            setAriaLive(i18n.t('facet-search-results-count', {
                count: facet.state.facetSearch.values.length,
                label,
            }));
        }
    });
}

const FacetSearchInput = (props) => {
    const label = props.i18n.t(props.label);
    const search$1 = props.i18n.t('facet-search-input');
    const facetSearch = props.i18n.t('facet-search', { label });
    const clear = props.i18n.t('clear');
    let inputRef;
    return (index.h("div", { class: "px-2 mt-3", part: "search-wrapper" },
        index.h("div", { class: "relative h-10" },
            index.h("input", { part: "search-input", class: "input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group", type: "text", placeholder: search$1, "aria-label": facetSearch, value: props.query, onInput: (e) => props.onChange(e.target.value), ref: (ref) => (inputRef = ref) }),
            index.h("div", { class: "search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background" },
                index.h("atomic-icon", { part: "search-icon", icon: search.SearchIcon })),
            props.query !== '' && (index.h(button.Button, { style: "text-transparent", title: clear, class: "search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px", onClick: () => {
                    props.onClear();
                    inputRef.focus();
                } },
                index.h("atomic-icon", { part: "search-clear-button", icon: close.CloseIcon }))))));
};

function matchesFound(key, query, i18n) {
    return i18n.t(key, {
        query: `<span class="font-bold italic text-on-background" part="matches-query">${facetValueLabelHighlight.escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
const FacetSearchMatches = (props) => {
    if (!props.numberOfMatches) {
        return (index.h("div", { class: "px-2" },
            index.h("div", { part: "no-matches", class: "truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded", innerHTML: matchesFound('no-matches-found-for', props.query, props.i18n) })));
    }
    if (props.hasMoreMatches) {
        return (index.h("div", { class: "px-2" },
            index.h("div", { part: "more-matches", class: "truncate mt-3 text-neutral-dark text-sm", innerHTML: matchesFound('more-matches-for', props.query, props.i18n) })));
    }
};

const MinusIcon = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m64 208h384v96h-384z"/></svg>`;

const FacetShowMoreLess = (props) => {
    const label = props.i18n.t(props.label);
    const showMore = props.i18n.t('show-more');
    const showMoreFacetValues = props.i18n.t('show-more-facet-values', {
        label,
    });
    const showLess = props.i18n.t('show-less');
    const showLessFacetValues = props.i18n.t('show-less-facet-values', {
        label,
    });
    const btnClasses = 'flex items-baseline text-left p-2 text-sm max-w-full';
    const iconClasses = 'w-2 h-2 mr-1';
    if (!props.canShowLessValues && !props.canShowMoreValues) {
        return;
    }
    return (index.h("div", { class: "mt-2" },
        index.h(button.Button, { style: "text-primary", part: "show-less", class: `${btnClasses} ${props.canShowLessValues ? '' : 'hidden'}`, ariaLabel: showLessFacetValues, onClick: () => props.onShowLess(), ref: props.showLessRef },
            index.h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: MinusIcon }),
            index.h("span", { class: "truncate" }, showLess)),
        index.h(button.Button, { style: "text-primary", part: "show-more", class: `${btnClasses} ${props.canShowMoreValues ? '' : 'hidden'}`, ariaLabel: showMoreFacetValues, onClick: () => props.onShowMore(), ref: props.showMoreRef },
            index.h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: plus.PlusIcon }),
            index.h("span", { class: "truncate" }, showMore))));
};

exports.FacetSearchInput = FacetSearchInput;
exports.FacetSearchMatches = FacetSearchMatches;
exports.FacetShowMoreLess = FacetShowMoreLess;
exports.announceFacetSearchResultsWithAriaLive = announceFacetSearchResultsWithAriaLive;

//# sourceMappingURL=facet-show-more-less-42ab87a0.js.map