'use strict';

const index = require('./index-c930d4b4.js');
const fieldUtils = require('./field-utils-a715deca.js');
const facetValueBox = require('./facet-value-box-e442c83e.js');
const facetValueCheckbox = require('./facet-value-checkbox-0dd6b980.js');
const facetValueLabelHighlight = require('./facet-value-label-highlight-e1da136a.js');
const facetValueLink = require('./facet-value-link-88928cce.js');

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
    return index.h(index.Fragment, null, children);
};

const FacetValue = ({ facetSearchQuery, displayValuesAs, enableExclusion, facetCount, facetState, facetValue, field, i18n, onExclude, onSelect, setRef, }) => {
    const displayValue = fieldUtils.getFieldValueCaption(field, facetValue, i18n);
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
            return (index.h(facetValueCheckbox.FacetValueCheckbox, { ...triStateProps, displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded, searchQuery: facetSearchQuery })));
        case 'link':
            return (index.h(facetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
        case 'box':
            return (index.h(facetValueBox.FacetValueBox, { displayValue: displayValue, numberOfResults: facetCount, isSelected: isSelected, i18n: i18n, onClick: onSelect, searchQuery: facetSearchQuery, buttonRef: (element) => {
                    setRef && setRef(element);
                } },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, searchQuery: facetSearchQuery })));
    }
};

const FacetSearchValue = (props) => {
    return index.h(FacetValue, { ...props, facetState: "idle" });
};

exports.FacetSearchInputGuard = FacetSearchInputGuard;
exports.FacetSearchValue = FacetSearchValue;
exports.FacetValue = FacetValue;

//# sourceMappingURL=facet-search-value-dec94bd3.js.map