import { h } from '@stencil/core/internal/client';
import { g as getRandomArbitrary } from './utils.js';

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

export { FacetPlaceholder as F };

//# sourceMappingURL=facet-placeholder.js.map