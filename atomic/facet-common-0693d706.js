function shouldDisplayInputForFacetRange(facetRange) {
    const { hasInput, hasInputRange, searchStatusState, facetValues } = facetRange;
    if (!hasInput) {
        return false;
    }
    if (hasInputRange) {
        return true;
    }
    if (!searchStatusState.hasResults) {
        return false;
    }
    const onlyValuesWithResultsOrActive = facetValues.filter((value) => value.numberOfResults || value.state !== 'idle') || [];
    if (!onlyValuesWithResultsOrActive.length) {
        return false;
    }
    return true;
}
function sortFacetVisibility(facetElements, facetInfoMap) {
    const visibleFacets = [];
    const invisibleFacets = [];
    facetElements.forEach((facet) => {
        if (facetInfoMap[facet.facetId] && facetInfoMap[facet.facetId].isHidden()) {
            invisibleFacets.push(facet);
        }
        else {
            visibleFacets.push(facet);
        }
    });
    return { visibleFacets, invisibleFacets };
}
function collapseFacetsAfter(facets, visibleFacetsCount) {
    if (visibleFacetsCount === -1) {
        return;
    }
    facets.forEach((facet, index) => {
        facet.isCollapsed = index + 1 > visibleFacetsCount;
    });
}
function isAutomaticFacetGenerator(element) {
    return element.tagName === 'ATOMIC-AUTOMATIC-FACET-GENERATOR';
}
function isPseudoFacet(el) {
    return 'facetId' in el;
}
function getFacetsInChildren(parent) {
    const facets = Array.from(parent.children).filter((child) => isPseudoFacet(child));
    return facets;
}
function getAutomaticFacetGenerator(parent) {
    return Array.from(parent.children).find(isAutomaticFacetGenerator);
}
const get2DMatrix = (xSize, ySize = 0) => new Array(xSize).fill(null).map(() => new Array(ySize));
function findIndiceOfParent(facet, parents) {
    var _a;
    for (let i = 0; i < parents.length; i++) {
        if ((_a = parents[i]) === null || _a === void 0 ? void 0 : _a.contains(facet)) {
            return i;
        }
    }
    return parents.length;
}
/**
 * Triage elements by their parents.
 * @param facets Facet Elements
 * @param parents Elements that may contains the facets
 * @returns an array in the same order as the parents, containing the facets that are contained by the corresponding parent.
 * The last element of the array contains the facets that are not contained by any of the parents.
 */
function triageFacetsByParents(facets, ...parents) {
    const sortedFacets = get2DMatrix(parents.length + 1);
    for (const facet of facets) {
        const indice = findIndiceOfParent(facet, parents);
        sortedFacets[indice].push(facet);
    }
    return sortedFacets;
}

export { getAutomaticFacetGenerator as a, shouldDisplayInputForFacetRange as b, collapseFacetsAfter as c, getFacetsInChildren as g, sortFacetVisibility as s, triageFacetsByParents as t };

//# sourceMappingURL=facet-common-0693d706.js.map