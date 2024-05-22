import { FunctionalComponent } from '../../../../stencil-public-runtime';
export interface ExcludeProps {
    onClick(): void;
    key?: string | number;
    class?: string;
    text?: string;
    ariaLabel?: string;
    ref?(element?: HTMLElement): void;
    onMouseEnter?(evt: MouseEvent): void;
}
export declare const FacetValueExclude: FunctionalComponent<ExcludeProps>;
