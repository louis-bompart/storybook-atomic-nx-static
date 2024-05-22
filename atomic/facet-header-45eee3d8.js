import { h } from './index-53978573.js';
import { A as ArrowBottomIcon } from './arrow-bottom-rounded-043572da.js';
import { A as ArrowUp } from './arrow-top-rounded-cf1dd47d.js';
import { C as CloseIcon } from './close-ff816971.js';
import { B as Button } from './button-1e00370c.js';
import { H as Heading } from './heading-08f9a008.js';

const FacetContainer = (_, children) => (h("div", { class: "bg-background border border-neutral rounded-lg p-4", part: "facet" }, children));

const FacetHeader = (props) => {
    const label = props.i18n.t(props.label);
    const expandFacet = props.i18n.t('expand-facet', { label });
    const collapseFacet = props.i18n.t('collapse-facet', { label });
    const clearFilters = props.i18n.t('clear-filters', {
        count: props.numberOfActiveValues,
    });
    const clearFiltersForFacet = props.i18n.t('clear-filters-for-facet', {
        count: props.numberOfActiveValues,
        label,
    });
    return [
        h(Button, { style: "text-transparent", part: "label-button", class: "flex font-bold justify-between w-full py-1 px-2 text-lg rounded-none", title: props.isCollapsed ? expandFacet : collapseFacet, onClick: () => props.onToggleCollapse(), ariaExpanded: (!props.isCollapsed).toString(), ref: props.headerRef },
            h(Heading, { level: props.headingLevel, class: "truncate" }, label),
            h("atomic-icon", { part: "label-button-icon", class: "w-3 self-center shrink-0 ml-4", icon: props.isCollapsed ? ArrowBottomIcon : ArrowUp })),
        props.onClearFilters && props.numberOfActiveValues > 0 && (h(Button, { style: "text-primary", part: "clear-button", class: "flex items-baseline max-w-full p-2 text-sm", ariaLabel: clearFiltersForFacet, onClick: () => props.onClearFilters() },
            h("atomic-icon", { part: "clear-button-icon", class: "w-2 h-2 mr-1", icon: CloseIcon }),
            h("span", null, clearFilters))),
    ];
};

export { FacetHeader as F, FacetContainer as a };

//# sourceMappingURL=facet-header-45eee3d8.js.map