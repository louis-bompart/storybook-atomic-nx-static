import { ResultsPerPageState, SearchStatus } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-results-per-page` component determines how many results to display per page.
 *
 * @part label - The "Results per page" label.
 * @part buttons - The list of buttons.
 * @part button - The result per page button.
 * @part active-button - The active result per page button.
 */
export declare class AtomicResultsPerPage implements InitializableComponent {
    bindings: Bindings;
    private resultPerPage;
    searchStatus: SearchStatus;
    private choices;
    private readonly radioGroupName;
    resultPerPageState: ResultsPerPageState;
    private searchStatusState;
    error: Error;
    /**
     * A list of choices for the number of results to display per page, separated by commas.
     */
    choicesDisplayed: string;
    /**
     * The initial selection for the number of result per page. This should be part of the `choicesDisplayed` option. By default, this is set to the first value in `choicesDisplayed`.
     */
    initialChoice?: number;
    private scrollToTopEvent;
    initialize(): void;
    private validateChoicesDisplayed;
    private validateInitialChoice;
    private buildChoice;
    private focusOnProperResultDependingOnChoice;
    render(): any;
}
