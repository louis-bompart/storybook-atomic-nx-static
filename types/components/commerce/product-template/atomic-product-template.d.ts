import { ProductTemplate, ProductTemplateCondition } from '@coveo/headless/commerce';
/**
 * @internal
 */
export declare class AtomicProductTemplate {
    private productTemplateCommon;
    error: Error;
    host: HTMLDivElement;
    /**
     * A function that must return true on products for the product template to apply.
     * Set programmatically before initialization, not via attribute.
     *
     * For example, the following targets a template and sets a condition to make it apply only to products whose `ec_name` contains `singapore`:
     * `document.querySelector('#target-template').conditions = [(product) => /singapore/i.test(product.ec_name)];`
     */
    conditions: ProductTemplateCondition[];
    mustMatch: Record<string, string[]>;
    mustNotMatch: Record<string, string[]>;
    constructor();
    componentWillLoad(): void;
    /**
     * Gets the product template to apply based on the evaluated conditions.
     */
    getTemplate(): Promise<ProductTemplate<DocumentFragment> | null>;
    render(): any;
}
