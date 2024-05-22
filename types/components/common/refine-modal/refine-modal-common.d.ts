import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
interface RefineModalCommonProps {
    host: HTMLElement;
    bindings: AnyBindings;
    onClose(): void;
    title: string;
    querySummaryState: {
        total: number;
    };
    isOpen: boolean;
    openButton?: HTMLElement;
    boundary?: 'page' | 'element';
    scope?: HTMLElement;
}
export declare const RefineModalCommon: FunctionalComponent<RefineModalCommonProps>;
export declare function getClonedFacetElements(facetElements: HTMLElement[], collapseFacetsAfter: number, root: HTMLElement): HTMLDivElement;
export {};
