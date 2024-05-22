import { SortState, SearchStatus } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-sort-dropdown` component renders a dropdown that the end user can interact with to select the criteria to use when sorting query results.
 *
 * @part label - The "Sort by" label of the `<select>` element.
 * @part select-parent - The `<select>` element parent.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-separator - The element separating the select from the icon.
 * @part placeholder - The dropdown placeholder for while the search interface is initializing.
 */
export declare class AtomicSortDropdown implements InitializableComponent {
    bindings: Bindings;
    private sort;
    searchStatus: SearchStatus;
    private id;
    host: HTMLElement;
    sortState: SortState;
    private searchStatusState;
    error: Error;
    initialize(): void;
    private buildOptions;
    private get options();
    private select;
    render(): any[];
}
