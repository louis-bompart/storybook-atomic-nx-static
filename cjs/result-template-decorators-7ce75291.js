'use strict';

const itemDecorators = require('./item-decorators-1f104375.js');

/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for result template components.
 * This allows the Stencil component to fetch the current result from its rendered parent, the `atomic-result` component.
 *
 * Example:
 * @ResultContext() private result!: Result;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 */
function ResultContext(opts = { folded: false }) {
    return itemDecorators.ItemContext({ parentName: 'atomic-result', folded: opts.folded });
}
function InteractiveResultContext() {
    return itemDecorators.InteractiveItemContext();
}
/**
 * Retrieves `Result` on a rendered `atomic-result`.
 *
 * This method is useful for building custom result template elements, see [Create a Result List](https://docs.coveo.com/en/atomic/latest/cc-search/create-custom-components/native-components/#custom-result-template-component-example) for more information.
 *
 * You should use the method in the [connectedCallback lifecycle method](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks).
 *
 * @param element The element that the event is dispatched to, which must be the child of a rendered "atomic-result".
 * @returns A promise that resolves on initialization of the parent "atomic-result" element, or rejects when there is no parent "atomic-result" element.
 */
function resultContext(element) {
    return itemDecorators.itemContext(element, 'atomic-result');
}

exports.InteractiveResultContext = InteractiveResultContext;
exports.ResultContext = ResultContext;
exports.resultContext = resultContext;

//# sourceMappingURL=result-template-decorators-7ce75291.js.map