import { FunctionalComponent } from '../../stencil-public-runtime';
import { ButtonStyle } from './button-style';
export interface ButtonProps {
    style: ButtonStyle;
    onClick?(event?: MouseEvent): void;
    class?: string;
    text?: string;
    part?: string;
    type?: string;
    form?: string;
    role?: string;
    disabled?: boolean;
    ariaLabel?: string;
    ariaExpanded?: string;
    ariaPressed?: string;
    ariaChecked?: string;
    ariaCurrent?: string;
    ariaControls?: string;
    ariaHidden?: string;
    tabIndex?: string;
    title?: string;
    ref?(element?: HTMLButtonElement): void;
}
export declare const Button: FunctionalComponent<ButtonProps>;
