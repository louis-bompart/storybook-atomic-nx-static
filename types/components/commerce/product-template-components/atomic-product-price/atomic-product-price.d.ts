import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @internal
 * The `atomic-product-price` component renders the price of a product.
 */
export declare class AtomicProductPrice implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    error: Error;
    private product;
    /**
     * The currency to use in currency formatting. Allowed values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
     */
    currency: string;
    render(): any;
}
