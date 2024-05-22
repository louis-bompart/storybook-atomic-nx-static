import { h, F as Fragment } from './index-53978573.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { F as FacetValueBox } from './facet-value-box-a73e967d.js';
import { F as FacetValueCheckbox } from './facet-value-checkbox-522d5545.js';
import { F as FacetValueLabelHighlight } from './facet-value-label-highlight-9ee13cbe.js';
import { F as FacetValueLink } from './facet-value-link-9d1d7675.js';

const MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX = 9;
const FacetSearchInputGuard = ({ withSearch, canShowMoreValues, numberOfDisplayedValues }, children) => {
    if (!withSearch) {
        return;
    }
    // Hide the input if there are no more values to load from the index and there are less than 8 values to display.
    // 8 is an arbitrary number, discussed with UX as a good compromise: A list long enough where it's worth searching.
    if (!canShowMoreValues &&
        numberOfDisplayedValues < MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX) {
        return;
    }
    return h(Fragment, null, children);
};

const FacetValue = ({ facetSearchQuery, displayValuesAs, enableExclusion, facetCount, facetState, facetValue, field, i18n, onExclude, onSelect, setRef, }) => {
    const displayValue = getFieldValueCaption(field, facetValue, i18n);
    const isSelected = facetState === 'selected';
    const isExcluded = facetState === 'excluded';
    const triStateProps = enableExclusion
        ? {
            onExclude,
            state: facetState,
        }
        : {};
    switch (displayValuesAs) {
        case 'checkbox':
            return (h(FacetValueCheckbox, { ...triStateProps, displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded, searchQuery: facetSearchQuery })));
        case 'link':
            return (h(FacetValueLink, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
        case 'box':
            return (h(FacetValueBox, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
    }
};

const FacetSearchValue = (props) => {
    return h(FacetValue, { ...props, facetState: "idle" });
};

export { FacetSearchInputGuard as F, FacetSearchValue as a, FacetValue as b };

//# sourceMappingURL=facet-search-value-1ba9aedc.js.map