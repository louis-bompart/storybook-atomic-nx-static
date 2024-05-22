'use strict';

const itemDecorators = require('./item-decorators-1f104375.js');

/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for product template components.
 * This allows the Stencil component to fetch the current product from its rendered parent, the `atomic-product` component.
 *
 * Example:
 * ```
 * @ProductContext() private product!: Product;
 * ```
 *
 * For more information and examples, view the [Utilities section](https://github.com/coveo/ui-kit/tree/master/packages/atomic#utilities) of the Coveo Atomic README.
 */
function ProductContext(opts = { folded: false }) {
    return itemDecorators.ItemContext({ parentName: 'atomic-product', folded: opts.folded });
}
function InteractiveProductContext() {
    return itemDecorators.InteractiveItemContext();
}
/**
 * Retrieves `Product` on a rendered `atomic-product`.
 *
 * This method is useful for building custom product template elements, see [Create a Product List](https://docs.coveo.com/en/atomic/latest/cc-search/create-custom-components/native-components/#custom-product-template-component-example) for more information.
 *
 * You should use the method in the [connectedCallback lifecycle method](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks).
 *
 * @param element - The element that the event is dispatched to, which must be the child of a rendered "atomic-product".
 * @returns A promise that resolves on initialization of the parent "atomic-product" element, or rejects when there is no parent "atomic-product" element.
 */
function productContext(element) {
    return itemDecorators.itemContext(element, 'atomic-product');
}

exports.InteractiveProductContext = InteractiveProductContext;
exports.ProductContext = ProductContext;
exports.productContext = productContext;

//# sourceMappingURL=product-template-decorators-1ba94a89.js.map