import { h } from './index-c045ad7c.js';
import { F as FieldsetGroup } from './fieldset-group-85a2cf46.js';

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

//# sourceMappingURL=facet-values-group-d2313a29.js.map