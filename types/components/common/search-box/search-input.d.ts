import { FunctionalComponent } from '../../../stencil-public-runtime';
import { JSXBase } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
interface Props extends JSXBase.InputHTMLAttributes<HTMLInputElement> {
    inputRef: HTMLInputElement;
    loading: boolean;
    bindings: AnyBindings;
    value: string;
    ariaLabel: string;
    onClear(): void;
    popup?: {
        id: string;
        activeDescendant: string;
        expanded: boolean;
        hasSuggestions: boolean;
    };
}
export declare const SearchInput: FunctionalComponent<Props>;
export {};
