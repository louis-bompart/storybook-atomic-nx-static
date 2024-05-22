import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ButtonProps } from '../button';
import { AnyBindings } from '../interface/bindings';
interface Props extends Partial<ButtonProps> {
    bindings: AnyBindings;
}
export declare const SubmitButton: FunctionalComponent<Props>;
export {};
