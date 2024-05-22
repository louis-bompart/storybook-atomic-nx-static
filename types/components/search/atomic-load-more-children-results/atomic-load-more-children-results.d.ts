import { Result } from '@coveo/headless';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-load-more-children-results` component allows to load the full collection for a folded result.
 *
 * @part button - The button used to load more results.
 */
export declare class AtomicLoadMoreChildrenResults {
    bindings: Bindings;
    result: Result;
    error: Error;
    host: HTMLElement;
    private foldedResultListState;
    private displayConfig;
    /**
     * The non-localized label for the button used to load more results.
     */
    label: string;
    private get collection();
    private loadFullCollection;
    private get hasMoreResults();
    private get isLoading();
    private get hasChildren();
    private get buttonClass();
    private get wrapperClass();
    render(): any;
}
