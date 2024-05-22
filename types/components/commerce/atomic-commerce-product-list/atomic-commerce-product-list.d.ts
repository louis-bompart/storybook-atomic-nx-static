import { ProductListing, SearchState, Search } from '@coveo/headless/commerce';
import { FocusTargetController } from '../../../utils/accessibility-utils';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { ItemRenderingFunction } from '../../common/item-list/item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout, ItemTarget } from '../../common/layout/display-options';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @internal
 * The `atomic-commerce-product-list` component is responsible for displaying products.
 */
export declare class AtomicCommerceProductList implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    productListing: ProductListing;
    search: Search;
    private loadingFlag;
    private itemRenderingFunction;
    private nextNewResultTarget?;
    private productTemplateProvider;
    private productListCommon;
    host: HTMLDivElement;
    private productListingState;
    private searchState;
    private resultTemplateRegistered;
    error: Error;
    private templateHasError;
    /**
     * The desired layout to use when displaying products. Layouts affect how many products to display per row and how visually distinct they are from each other.
     */
    display: ItemDisplayLayout;
    /**
     * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of different parts in a product.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed for products.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The target location to open the product link (see [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)).
     * This property is only leveraged when `display` is `grid`.
     * @defaultValue `_self`
     */
    gridCellLinkTarget: ItemTarget;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering products.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param productRenderingFunction
     */
    setRenderFunction(productRenderingFunction: ItemRenderingFunction): Promise<void>;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    get productState(): SearchState;
    render(): any;
    private computeListDisplayClasses;
    private getPropsForAtomicProduct;
    private renderAsGrid;
    private renderAsTable;
    private renderAsList;
}
