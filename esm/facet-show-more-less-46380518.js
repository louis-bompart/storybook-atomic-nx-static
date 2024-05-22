import { s as shouldUpdateFacetSearchComponent, e as escapeHtml_1 } from './facet-value-label-highlight-0c70483d.js';
import { h } from './index-c045ad7c.js';
import { C as CloseIcon } from './close-ff816971.js';
import { S as SearchIcon } from './search-64cc84a9.js';
import { B as Button } from './button-a9fb1e13.js';
import { P as PlusIcon } from './plus-86088e85.js';

function announceFacetSearchResultsWithAriaLive(facet, label, setAriaLive, i18n) {
    let prevState = facet.state.facetSearch;
    facet.subscribe(() => {
        if (shouldUpdateFacetSearchComponent(facet.state.facetSearch, prevState) &&
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
    const search = props.i18n.t('facet-search-input');
    const facetSearch = props.i18n.t('facet-search', { label });
    const clear = props.i18n.t('clear');
    let inputRef;
    return (h("div", { class: "px-2 mt-3", part: "search-wrapper" },
        h("div", { class: "relative h-10" },
            h("input", { part: "search-input", class: "input-primary w-full h-full px-9 placeholder-neutral-dark text-sm group", type: "text", placeholder: search, "aria-label": facetSearch, value: props.query, onInput: (e) => props.onChange(e.target.value), ref: (ref) => (inputRef = ref) }),
            h("div", { class: "search-icon pointer-events-none absolute inline-flex justify-center items-center left-0 w-9 h-full text-on-background" },
                h("atomic-icon", { part: "search-icon", icon: SearchIcon })),
            props.query !== '' && (h(Button, { style: "text-transparent", title: clear, class: "search-clear-button absolute inline-flex justify-center items-center right-px w-9 top-px bottom-px", onClick: () => {
                    props.onClear();
                    inputRef.focus();
                } },
                h("atomic-icon", { part: "search-clear-button", icon: CloseIcon }))))));
};

function matchesFound(key, query, i18n) {
    return i18n.t(key, {
        query: `<span class="font-bold italic text-on-background" part="matches-query">${escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
const FacetSearchMatches = (props) => {
    if (!props.numberOfMatches) {
        return (h("div", { class: "px-2" },
            h("div", { part: "no-matches", class: "truncate p-3 bg-neutral-light text-neutral-dark text-sm rounded", innerHTML: matchesFound('no-matches-found-for', props.query, props.i18n) })));
    }
    if (props.hasMoreMatches) {
        return (h("div", { class: "px-2" },
            h("div", { part: "more-matches", class: "truncate mt-3 text-neutral-dark text-sm", innerHTML: matchesFound('more-matches-for', props.query, props.i18n) })));
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
    return (h("div", { class: "mt-2" },
        h(Button, { style: "text-primary", part: "show-less", class: `${btnClasses} ${props.canShowLessValues ? '' : 'hidden'}`, ariaLabel: showLessFacetValues, onClick: () => props.onShowLess(), ref: props.showLessRef },
            h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: MinusIcon }),
            h("span", { class: "truncate" }, showLess)),
        h(Button, { style: "text-primary", part: "show-more", class: `${btnClasses} ${props.canShowMoreValues ? '' : 'hidden'}`, ariaLabel: showMoreFacetValues, onClick: () => props.onShowMore(), ref: props.showMoreRef },
            h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: PlusIcon }),
            h("span", { class: "truncate" }, showMore))));
};

export { FacetSearchInput as F, announceFacetSearchResultsWithAriaLive as a, FacetSearchMatches as b, FacetShowMoreLess as c };

//# sourceMappingURL=facet-show-more-less-46380518.js.map