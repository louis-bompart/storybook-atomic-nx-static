import { RecsInteractiveResult, RecsResult } from '..';
import { InteractiveItemContextEvent, ItemContextEvent, DisplayConfig } from '../../common/item-list/item-decorators';
import { ItemRenderingFunction } from '../../common/item-list/item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
import { AtomicRecsStore } from '../atomic-recs-interface/store';
/**
 * The `atomic-recs-result` component is used internally by the `atomic-recs-list` component.
 */
export declare class AtomicRecsResult {
    private layout;
    private resultRootRef?;
    private executedRenderingFunctionOnce;
    host: HTMLElement;
    /**
     * Whether an atomic-result-link inside atomic-recs-result should stop click event propagation.
     */
    stopPropagation?: boolean;
    /**
     * The result item.
     */
    result: RecsResult;
    /**
     * The InteractiveResult item.
     * @internal
     */
    interactiveResult: RecsInteractiveResult;
    /**
     * Global Atomic state.
     * @internal
     */
    store?: AtomicRecsStore;
    /**
     * The result content to display.
     */
    content?: ParentNode;
    /**
     * The layout to apply to display results.
     */
    display: ItemDisplayLayout;
    /**
     * The size of the results.
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
    resolveResult(event: ItemContextEvent<RecsResult>): void;
    resolveInteractiveResult(event: InteractiveItemContextEvent): void;
    resolveStopPropagation(event: CustomEvent): void;
    resolveResultDisplayConfig(event: ItemContextEvent<DisplayConfig>): void;
    connectedCallback(): void;
    private getContentHTML;
    private get isCustomRenderFunctionMode();
    private shouldExecuteRenderFunction;
    render(): any;
    componentDidLoad(): void;
    componentDidRender(): void;
}
