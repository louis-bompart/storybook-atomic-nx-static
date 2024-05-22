import { h } from './index-53978573.js';
import { F as FieldsetGroup } from './fieldset-group-267d9cd1.js';

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
    return h(FieldsetGroup, { label: groupLabel }, children);
};

export { FacetValuesGroup as F };

//# sourceMappingURL=facet-values-group-ed9dda7a.js.map