import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ItemTarget } from '../layout/display-options';
export interface DisplayGridProps {
    item: {
        clickUri: string;
        title: string;
    };
    setRef: (element?: HTMLElement) => void;
    select: () => void;
    beginDelayedSelect: () => void;
    cancelPendingSelect: () => void;
    gridTarget?: ItemTarget;
}
export declare const DisplayGrid: FunctionalComponent<DisplayGridProps>;
