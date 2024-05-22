'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');
const utils = require('./utils-93ea935e.js');

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
    element.dispatchEvent(eventUtils.buildCustomEvent('atomic/searchBoxSuggestion/register', event));
    if (!utils.closest(element, searchBoxElements.join(', '))) {
        throw new Error(`The "${element.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${searchBoxElements.join(', ')}`);
    }
};
function elementHasNoQuery(el) {
    return !el.query;
}
function elementHasQuery(el) {
    return !!el.query;
}

exports.dispatchSearchBoxSuggestionsEvent = dispatchSearchBoxSuggestionsEvent;
exports.elementHasNoQuery = elementHasNoQuery;
exports.elementHasQuery = elementHasQuery;

//# sourceMappingURL=suggestions-common-cd742c1b.js.map