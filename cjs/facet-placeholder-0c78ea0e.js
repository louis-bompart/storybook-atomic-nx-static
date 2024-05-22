'use strict';

const index = require('./index-c930d4b4.js');
const arrowBottomRounded = require('./arrow-bottom-rounded-705a1b2c.js');
const arrowTopRounded = require('./arrow-top-rounded-e7a05d2f.js');
const close = require('./close-20739950.js');
const button = require('./button-90bb3acf.js');
const heading = require('./heading-db5d34c0.js');
const utils = require('./utils-b609c39e.js');

const FacetContainer = (_, children) => (index.h("div", { class: "bg-background border border-neutral rounded-lg p-4", part: "facet" }, children));

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
        index.h(button.Button, { style: "text-transparent", part: "label-button", class: "flex font-bold justify-between w-full py-1 px-2 text-lg rounded-none", title: props.isCollapsed ? expandFacet : collapseFacet, onClick: () => props.onToggleCollapse(), ariaExpanded: (!props.isCollapsed).toString(), ref: props.headerRef },
            index.h(heading.Heading, { level: props.headingLevel, class: "truncate" }, label),
            index.h("atomic-icon", { part: "label-button-icon", class: "w-3 self-center shrink-0 ml-4", icon: props.isCollapsed ? arrowBottomRounded.ArrowBottomIcon : arrowTopRounded.ArrowUp })),
        props.onClearFilters && props.numberOfActiveValues > 0 && (index.h(button.Button, { style: "text-primary", part: "clear-button", class: "flex items-baseline max-w-full p-2 text-sm", ariaLabel: clearFiltersForFacet, onClick: () => props.onClearFilters() },
            index.h("atomic-icon", { part: "clear-button-icon", class: "w-2 h-2 mr-1", icon: close.CloseIcon }),
            index.h("span", null, clearFilters))),
    ];
};

const FacetPlaceholder = ({ numberOfValues, isCollapsed, }) => {
    const facetValues = [];
    for (let i = 0; i < numberOfValues; i++) {
        const width = `${utils.getRandomArbitrary(60, 100)}%`;
        const opacity = `${utils.getRandomArbitrary(0.3, 1)}`;
        facetValues.push(index.h("div", { class: "flex bg-neutral h-5 mt-4", style: { width, opacity } }));
    }
    return (index.h("div", { part: "placeholder", class: "bg-background animate-pulse border border-neutral rounded-lg mb-4 p-7", "aria-hidden": "true" },
        index.h("div", { class: "bg-neutral rounded h-8", style: { width: `${utils.getRandomArbitrary(25, 75)}%` } }),
        !isCollapsed && index.h("div", { class: "mt-7" }, facetValues)));
};

exports.FacetContainer = FacetContainer;
exports.FacetHeader = FacetHeader;
exports.FacetPlaceholder = FacetPlaceholder;

//# sourceMappingURL=facet-placeholder-0c78ea0e.js.map