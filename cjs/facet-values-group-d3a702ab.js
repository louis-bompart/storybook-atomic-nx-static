'use strict';

const index = require('./index-c930d4b4.js');
const fieldsetGroup = require('./fieldset-group-6717d2e5.js');

const FacetValuesGroup = (props, children) => {
    if (!props.label) {
        return children;
    }
    const facetDisplayLabel = props.i18n.t(props.label);
    const groupLabel = props.query === undefined
        ? props.i18n.t('facet-values', { label: facetDisplayLabel })
        : props.i18n.t('facet-search-results', {
            query: props.query,
            label: facetDisplayLabel,
        });
    return index.h(fieldsetGroup.FieldsetGroup, { label: groupLabel }, children);
};

exports.FacetValuesGroup = FacetValuesGroup;

//# sourceMappingURL=facet-values-group-d3a702ab.js.map