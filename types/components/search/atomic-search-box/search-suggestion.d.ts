import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AnyBindings } from '../../common/interface/bindings';
import { SearchBoxSuggestionElement } from '../../common/suggestions/suggestions-common';
export declare const queryDataAttribute = "data-query";
type Side = 'left' | 'right';
interface SearchSuggestionProps {
    bindings: AnyBindings;
    id: string;
    suggestion: SearchBoxSuggestionElement;
    isSelected: boolean;
    side: Side;
    index: number;
    lastIndex: number;
    isDoubleList: boolean;
}
interface ButtonSearchSuggestionProps extends SearchSuggestionProps {
    onClick?(e: Event): void;
    onMouseOver?(e: Event): void;
}
export declare const SimpleSearchSuggestion: FunctionalComponent<SearchSuggestionProps>;
export declare const ButtonSearchSuggestion: FunctionalComponent<ButtonSearchSuggestionProps>;
export {};
