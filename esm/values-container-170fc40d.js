import { h } from './index-c045ad7c.js';
import { F as FacetValueCheckbox } from './facet-value-checkbox-7e6a54e2.js';
import { F as FacetValueLabelHighlight } from './facet-value-label-highlight-0c70483d.js';
import { F as FacetValueLink } from './facet-value-link-dc9150b3.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { F as FacetValuesGroup } from './facet-values-group-d2313a29.js';

const formatHumanReadable = ({ manualRanges, field, i18n, facetValue, logger, formatter, }) => {
    var _a;
    const manualRangeLabel = (_a = manualRanges.find((range) => areRangesEqual(range, facetValue))) === null || _a === void 0 ? void 0 : _a.label;
    return manualRangeLabel
        ? getFieldValueCaption(field, manualRangeLabel, i18n)
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
            return (h(FacetValueCheckbox, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => onClick() },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
        case 'link':
            return (h(FacetValueLink, { displayValue: displayValue, numberOfResults: facetValue.numberOfResults, isSelected: isSelected, i18n: i18n, onClick: onClick },
                h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
    }
};

const NumericFacetValuesContainer = ({ i18n, label }, children) => {
    return (h(FacetValuesGroup, { i18n: i18n, label: label },
        h("ul", { class: "mt-3", part: "values" }, children)));
};

export { NumericFacetValueLink as N, NumericFacetValuesContainer as a, formatHumanReadable as f };

//# sourceMappingURL=values-container-170fc40d.js.map