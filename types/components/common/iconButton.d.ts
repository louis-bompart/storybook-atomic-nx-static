import { FunctionalComponent, VNode } from '../../stencil-public-runtime';
import { ButtonProps } from './button';
export interface IconButtonProps extends ButtonProps {
    badge?: VNode;
    buttonRef?: (el?: HTMLButtonElement) => void;
    icon: string;
    partPrefix: string;
}
export declare const IconButton: FunctionalComponent<IconButtonProps>;
