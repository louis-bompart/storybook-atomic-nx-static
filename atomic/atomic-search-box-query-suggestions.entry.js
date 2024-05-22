import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { Z as loadQuerySuggestActions } from './headless.esm-bdb53e72.js';
import { S as SearchIcon } from './search-64cc84a9.js';
import { g as getPartialSearchBoxSuggestionElement, Q as QuerySuggestionContainer, a as QuerySuggestionIcon, b as QuerySuggestionText } from './query-suggestions-b9903d1f.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common-08348f37.js';
import './string-utils-5f5a23a8.js';
import './event-utils-8de63ec3.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';

const AtomicSearchBoxQuerySuggestions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = undefined;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    initialize() {
        const engine = this.bindings.engine;
        const { registerQuerySuggest, fetchQuerySuggestions } = loadQuerySuggestActions(engine);
        engine.dispatch(registerQuerySuggest({
            id: this.bindings.id,
            count: this.bindings.numberOfQueries,
        }));
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            onInput: () => engine.dispatch(fetchQuerySuggestions({
                id: this.bindings.id,
            })),
            renderItems: () => this.renderItems(),
        };
    }
    renderItems() {
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        return this.bindings.searchBoxController.state.suggestions
            .slice(0, max)
            .map((suggestion) => this.renderItem(suggestion));
    }
    renderItem(suggestion) {
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const partialItem = getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        return {
            ...partialItem,
            content: (h(QuerySuggestionContainer, null, h(QuerySuggestionIcon, { icon: this.icon || SearchIcon, hasSuggestion: this.bindings.getSuggestions().length > 1 }), h(QuerySuggestionText, { suggestion: suggestion, hasQuery: hasQuery }))),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '4ec61e56d2f712e9fdee38cb448c4d8cbcda5972', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicSearchBoxQuerySuggestions as atomic_search_box_query_suggestions };

//# sourceMappingURL=atomic-search-box-query-suggestions.entry.js.map