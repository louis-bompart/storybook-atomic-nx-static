import { FoldedResult, InteractiveResult, Result } from '@coveo/headless';
import { AtomicCommonStore, AtomicCommonStoreData } from '../../common/interface/store';
import { DisplayConfig } from '../../common/item-list/item-decorators';
import { ItemRenderingFunction } from '../../common/item-list/item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
import { InteractiveResultContextEvent, ResultContextEvent } from '../result-template-components/result-template-decorators';
/**
 * The `atomic-result` component is used internally by the `atomic-result-list` component.
 */
export declare class AtomicResult {
    private layout;
    host: HTMLElement;
    /**
     * Whether an atomic-result-link inside atomic-result should stop click event propagation.
     */
    stopPropagation?: boolean;
    /**
     * The result item.
     */
    result: Result | FoldedResult;
    /**
     * The InteractiveResult item.
     * @internal
     */
    interactiveResult: InteractiveResult;
    /**
     * Global Atomic state.
     * @internal
     */
    store?: AtomicCommonStore<AtomicCommonStoreData>;
    /**
     * The result content to display.
     */
    content?: ParentNode;
    /**
     * How results should be displayed.
     */
    display: ItemDisplayLayout;
    /**
     * How large or small results should be.
     */
    density: ItemDisplayDensity;
    /**
     * The size of the visual section in result list items.
     *
     * This is overwritten by the image size defined in the result content, if it exists.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The classes to add to the result element.
     */
    classes: string;
    /**
     * @internal
     */
    loadingFlag?: string;
    /**
     * Internal function used by atomic-recs-list in advanced setups, which lets you bypass the standard HTML template system.
     * Particularly useful for Atomic React
     *
     * @internal
     */
    renderingFunction: ItemRenderingFunction;
    private resultRootRef?;
    private executedRenderingFunctionOnce;
    resolveResult(event: ResultContextEvent<FoldedResult | Result>): void;
    resolveInteractiveResult(event: InteractiveResultContextEvent): void;
    resolveStopPropagation(event: CustomEvent): void;
    resolveResultDisplayConfig(event: ResultContextEvent<DisplayConfig>): void;
    connectedCallback(): void;
    private get isCustomRenderFunctionMode();
    private getContentHTML;
    private shouldExecuteRenderFunction;
    render(): any;
    componentDidLoad(): void;
    componentDidRender(): void;
}
