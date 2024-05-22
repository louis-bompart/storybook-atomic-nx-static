import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @internal
 * The `atomic-product-description` component renders the description of a product.
 */
export declare class AtomicProductDescription implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private product;
    hostElement: HTMLElement;
    error: Error;
    private isExpanded;
    private isTruncated;
    private descriptionText;
    private resizeObserver;
    /**
     * The number of lines after which the product description should be truncated. A value of "none" will disable truncation.
     */
    truncateAfter: 'none' | '1' | '2' | '3' | '4';
    /**
     * The name of the description field to use.
     */
    field: 'ec_description' | 'ec_shortdesc';
    constructor();
    private validateProps;
    componentDidLoad(): void;
    private onToggleExpand;
    private getLineClampClass;
    disconnectedCallback(): void;
    private renderProductDescription;
    private renderShowMoreButton;
    render(): any;
}
