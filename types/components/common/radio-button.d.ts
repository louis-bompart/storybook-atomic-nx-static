import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonStyle } from './button-style';
export interface RadioButtonProps {
    groupName: string;
    onChecked?(): void;
    style?: ButtonStyle;
    key?: string | number;
    checked?: boolean;
    class?: string;
    text?: string;
    part?: string;
    ariaLabel?: string;
    ariaCurrent?: string;
    ref?(element?: HTMLInputElement): void;
}
export declare const RadioButton: FunctionalComponent<RadioButtonProps>;
