import { FunctionalComponent } from '../../stencil-public-runtime';
export interface CheckboxProps {
    checked: boolean;
    onToggle(checked: boolean): void;
    key?: string | number;
    id?: string;
    class?: string;
    text?: string;
    part?: string;
    iconPart?: string;
    ariaLabel?: string;
    ariaCurrent?: string;
    ref?(element?: HTMLElement): void;
    onMouseDown?(evt: MouseEvent): void;
}
export declare const Checkbox: FunctionalComponent<CheckboxProps>;
