import { RegularFacet, RegularFacetState, SearchSummary, ListingSummary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-facet` component renders a commerce facet that the end user can interact with to filter products.
 *
 * @internal
 */
export declare class AtomicCommerceFacet implements InitializableComponent<Bindings> {
    bindings: Bindings;
    summary: SearchSummary | ListingSummary;
    private host;
    facet: RegularFacet;
    facetState: RegularFacetState;
    error: Error;
    private isCollapsed;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    componentShouldUpdate(next: unknown, prev: unknown, propName: keyof AtomicCommerceFacet): boolean;
    render(): any;
    private renderBody;
    private renderValuesContainer;
    private renderSearchResults;
    private renderValues;
    private renderShowMoreLess;
    private renderMatches;
    private get activeValues();
    private get displayName();
    private get facetValueProps();
    private get isHidden();
    private registerFacet;
    private initPopover;
    private initSummary;
    private initAriaLive;
    private get facetInfo();
    private get focusTargets();
    private isFacetState;
}
