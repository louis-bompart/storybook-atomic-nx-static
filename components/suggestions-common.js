import { b as buildCustomEvent } from './event-utils.js';
import { c as closest } from './utils.js';

const searchBoxElements = [
    'atomic-search-box',
    'atomic-insight-search-box',
    'atomic-commerce-search-box',
];
/**
 * Dispatches an event which retrieves the `SearchBoxSuggestionsBindings` on a configured parent search box.
 * @param event Event sent from the registered query suggestions to the parent search box.
 * @param element Element on which to dispatch the event, which must be the child of a configured search box.
 */
const dispatchSearchBoxSuggestionsEvent = (event, element) => {
    element.dispatchEvent(buildCustomEvent('atomic/searchBoxSuggestion/register', event));
    if (!closest(element, searchBoxElements.join(', '))) {
        throw new Error(`The "${element.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${searchBoxElements.join(', ')}`);
    }
};
function elementHasNoQuery(el) {
    return !el.query;
}
function elementHasQuery(el) {
    return !!el.query;
}

export { elementHasNoQuery as a, dispatchSearchBoxSuggestionsEvent as d, elementHasQuery as e };

//# sourceMappingURL=suggestions-common.js.map