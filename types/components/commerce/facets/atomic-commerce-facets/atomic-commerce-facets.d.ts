import { FacetGeneratorState, FacetGenerator } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-facets` component automatically renders commerce facets based on the Commerce API response.
 * Unlike regular facets, which require explicit definition and request in the query, the `atomic-commerce-facets` component dynamically generates facets.
 *
 * @internal
 */
export declare class AtomicCommerceFacets implements InitializableComponent<Bindings> {
    bindings: Bindings;
    facetGenerator: FacetGenerator;
    host: HTMLElement;
    /**
     * The maximum number of facets to expand.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     * Using the value `-1` disables the feature and keeps all facets expanded.
     */
    collapseFacetsAfter: number;
    facetGeneratorState: FacetGeneratorState[];
    error: Error;
    initialize(): void;
    private validateProps;
    private shouldCollapseFacet;
    render(): any;
}
