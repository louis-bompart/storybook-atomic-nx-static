import { Sort, SortState, Search, ProductListing } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-sort-dropdown` component renders a dropdown that the end user can interact with to select the criteria to use when sorting products.
 *
 * @part label - The "Sort by" label of the `<select>` element.
 * @part select-parent - The `<select>` element parent.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-separator - The element separating the select from the icon.
 * @part placeholder - The dropdown placeholder for while the interface is initializing.
 *
 * @internal
 */
export declare class AtomicCommerceSortDropdown implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private id;
    host: HTMLElement;
    sort: Sort;
    sortState: SortState;
    searchOrListing: Search | ProductListing;
    private searchOrListingState;
    error: Error;
    initialize(): void;
    private select;
    private getLabel;
    render(): any;
    private getSortByLabel;
}
