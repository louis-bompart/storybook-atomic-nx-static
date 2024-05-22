import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
interface NoResultsProps {
    bindings: AnyBindings;
    searchStatusState: {
        firstSearchExecuted: boolean;
        isLoading: boolean;
        hasResults: boolean;
    };
    querySummaryState: {
        hasQuery: boolean;
        query: string;
    };
    setAriaLive: (message: string) => void;
}
export declare const NoResultsCommon: FunctionalComponent<NoResultsProps>;
export {};
