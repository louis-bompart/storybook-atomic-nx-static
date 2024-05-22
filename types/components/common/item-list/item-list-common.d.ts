import { FocusTargetController } from '../../../utils/accessibility-utils';
import { AnyItem } from '../interface/item';
import { AtomicCommonStore, AtomicCommonStoreData } from '../interface/store';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../layout/display-options';
export declare const resultComponentClass = "result-component";
export type ItemRenderingFunction<SpecificResult extends AnyItem = AnyItem> = ((result: SpecificResult, root: HTMLElement) => string) | undefined;
export interface ItemListCommonProps {
    store: AtomicCommonStore<AtomicCommonStoreData>;
    loadingFlag: string;
    host: HTMLElement;
    nextNewItemTarget: FocusTargetController;
    getCurrentNumberOfItems: () => number;
    getIsLoading: () => boolean;
    engineSubscribe: (cb: () => void) => () => void;
}
export declare class ItemListCommon {
    private props;
    private indexOfResultToFocus?;
    private firstResultEl?;
    private updateBreakpointsOnce;
    constructor(props: ItemListCommonProps);
    updateBreakpoints(): void;
    getResultId(uniqueIdOnResult: string, searchResponseId: string, density: ItemDisplayDensity, imageSize: ItemDisplayImageSize): string;
    setNewResultRef(element: HTMLElement, resultIndex: number): void;
    focusOnNextNewResult(): void;
    focusOnFirstResultAfterNextSearch(): Promise<void>;
}
