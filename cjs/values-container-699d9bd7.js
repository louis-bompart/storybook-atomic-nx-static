'use strict';

const index = require('./index-c930d4b4.js');
const facetValueCheckbox = require('./facet-value-checkbox-0dd6b980.js');
const facetValueLabelHighlight = require('./facet-value-label-highlight-e1da136a.js');
const facetValueLink = require('./facet-value-link-88928cce.js');
const fieldUtils = require('./field-utils-a715deca.js');
const facetValuesGroup = require('./facet-values-group-d3a702ab.js');

const formatHumanReadable = ({ manualRanges, field, i18n, facetValue, logger, formatter, }) => {
    var _a;
    const manualRangeLabel = (_a = manualRanges.find((range) => areRangesEqual(range, facetValue))) === null || _a === void 0 ? void 0 : _a.label;
    return manualRangeLabel
        ? fieldUtils.getFieldValueCaption(field, manualRangeLabel, i18n)
        : i18n.t('to', {
            start: formatNumberLocalized(facetValue.start, i18n, logger, formatter),
            end: formatNumberLocalized(facetValue.end, i18n, logger, formatter),
        });
};
const formatNumberLocalized = (value, i18n, logger, formatter) => {
    try {
        return formatter(value, i18n.languages);
    }
    catch (error) {
        logger.error(`atomic-numeric-facet facet value "${value}" could not be formatted correctly.`, error);
        return value;
    }
};
const areRangesEqual = (firstRange, secondRange) => {
    return (firstRange.start === secondRange.start &&
        firstRange.end === secondRange.end &&
        firstRange.endInclusive === secondRange.endInclusive);
};

const NumericFacetValueLink = (props) => {
    const { facetValue, displayValuesAs, i18n, onClick } = props;
    const displayValue = formatHumanReadable(props);
    const isSelected = facetValue.state === 'selected';
    switch (displayValuesAs) {
        case 'checkbox':
            return (index.h(facetValueCheckbox.FacetValueCheckbox, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => onClick() },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
        case 'link':
            return (index.h(facetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: onClick },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
    }
};

const NumericFacetValuesContainer = ({ i18n, label }, children) => {
    return (index.h(facetValuesGroup.FacetValuesGroup, { i18n: i18n, label: label },
        index.h("ul", { class: "mt-3", part: "values" }, children)));
};

exports.NumericFacetValueLink = NumericFacetValueLink;
exports.NumericFacetValuesContainer = NumericFacetValuesContainer;
exports.formatHumanReadable = formatHumanReadable;

//# sourceMappingURL=values-container-699d9bd7.js.map