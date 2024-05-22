import { Product, InteractiveProduct } from '@coveo/headless/commerce';
import { AtomicCommonStore, AtomicCommonStoreData } from '../../common/interface/store';
import { DisplayConfig } from '../../common/item-list/item-decorators';
import { ItemRenderingFunction } from '../../common/item-list/item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
import { InteractiveProductContextEvent, ProductContextEvent } from '../product-template-components/product-template-decorators';
/**
 * The `atomic-product` component is used internally by the `atomic-product-list` component.
 * @internal
 */
export declare class AtomicProduct {
    private layout;
    host: HTMLElement;
    /**
     * Whether an atomic-product-link inside atomic-product should stop click event propagation.
     */
    stopPropagation?: boolean;
    /**
     * The product item.
     */
    product: Product;
    /**
     * The InteractiveProduct item.
     * @internal
     */
    interactiveProduct: InteractiveProduct;
    /**
     * Global Atomic state.
     * @internal
     */
    store?: AtomicCommonStore<AtomicCommonStoreData>;
    /**
     * The product content to display.
     */
    content?: ParentNode;
    /**
     * How products should be displayed.
     */
    display: ItemDisplayLayout;
    /**
     * How large or small products should be.
     */
    density: ItemDisplayDensity;
    /**
     * The size of the visual section in product list items.
     *
     * This is overwritten by the image size defined in the product content, if it exists.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The classes to add to the product element.
     */
    classes: string;
    /**
     * @internal
     */
    loadingFlag?: string;
    /**
     * Internal function used in advanced setups, which lets you bypass the standard HTML template system.
     * Particularly useful for Atomic React
     *
     * @internal
     */
    renderingFunction: ItemRenderingFunction;
    private productRootRef?;
    private executedRenderingFunctionOnce;
    resolveProduct(event: ProductContextEvent): void;
    resolveInteractiveProduct(event: InteractiveProductContextEvent): void;
    resolveStopPropagation(event: CustomEvent): void;
    resolveProductDisplayConfig(event: ProductContextEvent<DisplayConfig>): void;
    connectedCallback(): void;
    private get isCustomRenderFunctionMode();
    private getContentHTML;
    private shouldExecuteRenderFunction;
    render(): any;
    componentDidLoad(): void;
    componentDidRender(): void;
}
