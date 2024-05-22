import { h } from './index-c045ad7c.js';
import { A as ArrowBottomIcon } from './arrow-bottom-rounded-043572da.js';
import { A as ArrowUp } from './arrow-top-rounded-cf1dd47d.js';
import { C as CloseIcon } from './close-ff816971.js';
import { B as Button } from './button-a9fb1e13.js';
import { H as Heading } from './heading-686c01b3.js';
import { g as getRandomArbitrary } from './utils-bc6a079b.js';

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

const FacetPlaceholder = ({ numberOfValues, isCollapsed, }) => {
    const facetValues = [];
    for (let i = 0; i < numberOfValues; i++) {
        const width = `${getRandomArbitrary(60, 100)}%`;
        const opacity = `${getRandomArbitrary(0.3, 1)}`;
        facetValues.push(h("div", { class: "flex bg-neutral h-5 mt-4", style: { width, opacity } }));
    }
    return (h("div", { part: "placeholder", class: "bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7", "aria-hidden": "true" },
        h("div", { class: "bg-neutral rounded h-8", style: { width: `${getRandomArbitrary(25, 75)}%` } }),
        !isCollapsed && h("div", { class: "mt-7" }, facetValues)));
};

export { FacetHeader as F, FacetContainer as a, FacetPlaceholder as b };

//# sourceMappingURL=facet-placeholder-4514ff97.js.map