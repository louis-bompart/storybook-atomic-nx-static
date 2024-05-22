import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ButtonProps } from '../button';
import { RadioButtonProps } from '../radio-button';
export interface PagerNavigationButtonProps extends Omit<ButtonProps, 'style' | 'part' | 'class'> {
    icon: string;
}
export interface PagerPageButtonProps extends Omit<RadioButtonProps, 'part' | 'style' | 'checked' | 'ariaCurrent' | 'key' | 'class'> {
    page: number;
    isSelected: boolean;
    text: string;
}
export declare const PagerPreviousButton: FunctionalComponent<PagerNavigationButtonProps>;
export declare const PagerNextButton: FunctionalComponent<PagerNavigationButtonProps>;
export declare const PagerPageButton: FunctionalComponent<PagerPageButtonProps>;
export declare const PagerPageButtons: FunctionalComponent;
