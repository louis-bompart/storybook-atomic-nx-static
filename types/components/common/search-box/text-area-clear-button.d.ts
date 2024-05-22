import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ButtonProps } from '../button';
import { AnyBindings } from '../interface/bindings';
interface Props extends Partial<ButtonProps> {
    bindings: AnyBindings;
    inputRef: HTMLInputElement | HTMLTextAreaElement | null;
}
export declare const TextAreaClearButton: FunctionalComponent<Props>;
export {};
