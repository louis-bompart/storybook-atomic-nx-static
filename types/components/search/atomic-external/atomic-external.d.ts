import { InitializeEvent } from '../../../utils/initialization-utils';
/**
 * The `atomic-external` component allows components defined outside of the `atomic-search-interface` to initialize.
 */
export declare class AtomicExternal {
    /**
     * The CSS selector that identifies the `atomic-search-interface` component with which to initialize the external components.
     */
    selector: string;
    handleInitialization(event: InitializeEvent): void;
    handleScrollToTop(event: CustomEvent): void;
    private get interface();
}
