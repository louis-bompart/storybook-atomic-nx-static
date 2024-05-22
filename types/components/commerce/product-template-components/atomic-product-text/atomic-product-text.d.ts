import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @internal
 * The `atomic-product-text` component renders the value of a string product field.
 */
export declare class AtomicProductText implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    error: Error;
    private product;
    private host;
    /**
     * The product field which the component should use.
     * This will look in the Product object first, and then in the product.additionalFields object for the fields.
     */
    field: string;
    /**
     * The locale key for the text to display when the configured field has no value.
     */
    default?: string;
    private possiblyWarnOnBadFieldType;
    render(): any;
}
