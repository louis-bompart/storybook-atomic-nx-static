import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { a as zj, f as fA } from './headless.esm-3423086c.js';
import { S as SearchIcon } from './search-64cc84a9.js';
import { g as getPartialSearchBoxSuggestionElement, Q as QuerySuggestionText, a as QuerySuggestionIcon, b as QuerySuggestionContainer } from './query-suggestions-c462ddd7.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common-1d4c0dac.js';
import { C as Clock } from './clock-add3e9a5.js';
import { a as SafeStorage, S as StorageItems } from './local-storage-utils-e06a332f.js';
import { o as once } from './utils-bc6a079b.js';
import { g as getPartialRecentQueryClearElement, R as RecentQueryClear, a as getPartialRecentQueryElement, b as RecentQueryText, c as RecentQueryIcon, d as RecentQueriesContainer } from './recent-queries-e2a43224.js';
import './string-utils-5f5a23a8.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';
import './headless.esm-88bad35d.js';

const AtomicCommerceSearchBoxQuerySuggestions = class {
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
        const { registerQuerySuggest, fetchQuerySuggestions } = zj(engine);
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
            return (h("atomic-component-error", { key: '08d9dfa760b2907bc60d2bf175e1c44a2c5a8778', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

const AtomicCommerceSearchBoxRecentQueries = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The maximum number of suggestions to display when the user types in the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = once(() => this.bindings.engine.logger.warn('The recent queries feature is deactivated because analytics are disabled.'));
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = 3;
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
    renderIcon() {
        return this.icon || Clock;
    }
    initialize() {
        this.storage = new SafeStorage();
        this.recentQueriesList = fA(this.bindings.engine, {
            initialState: { queries: this.retrieveLocalStorage() },
            options: { maxLength: 1000, clearFilters: this.bindings.clearFilters },
        });
        this.recentQueriesList.subscribe(() => this.updateLocalStorage());
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            renderItems: () => this.renderItems(),
        };
    }
    retrieveLocalStorage() {
        return this.storage.getParsedJSON(StorageItems.RECENT_QUERIES, []);
    }
    updateLocalStorage() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return this.disableFeature();
        }
        return this.storage.setJSON(StorageItems.RECENT_QUERIES, this.recentQueriesList.state.queries);
    }
    disableFeature() {
        this.warnUser();
        this.storage.removeItem(StorageItems.RECENT_QUERIES);
    }
    renderItems() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return [];
        }
        const query = this.bindings.searchBoxController.state.value;
        const hasQuery = query !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        const filteredQueries = this.recentQueriesList.state.queries
            .filter((recentQuery) => recentQuery !== query &&
            recentQuery.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, max);
        const suggestionElements = filteredQueries.map((value) => this.renderItem(value));
        if (suggestionElements.length) {
            suggestionElements.unshift(this.renderClear());
        }
        return suggestionElements;
    }
    renderClear() {
        const partialItem = getPartialRecentQueryClearElement(this.bindings.i18n);
        return {
            ...partialItem,
            content: h(RecentQueryClear, { i18n: this.bindings.i18n }),
            onSelect: () => {
                this.recentQueriesList.clear();
                this.bindings.triggerSuggestions();
            },
        };
    }
    renderItem(value) {
        const query = this.bindings.searchBoxController.state.value;
        const partialItem = getPartialRecentQueryElement(value, this.bindings.i18n);
        return {
            ...partialItem,
            content: (h(RecentQueriesContainer, null, h(RecentQueryIcon, { icon: this.renderIcon() }), h(RecentQueryText, { query: query, value: value }))),
            onSelect: () => {
                if (this.bindings.isStandalone) {
                    this.bindings.searchBoxController.updateText(value);
                    this.bindings.searchBoxController.submit();
                    return;
                }
                this.recentQueriesList.executeRecentQuery(this.recentQueriesList.state.queries.indexOf(value));
            },
        };
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '019afb85dbf8f488c6773e3c7c32eb870fc4be86', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicCommerceSearchBoxQuerySuggestions as atomic_commerce_search_box_query_suggestions, AtomicCommerceSearchBoxRecentQueries as atomic_commerce_search_box_recent_queries };

//# sourceMappingURL=atomic-commerce-search-box-query-suggestions_2.entry.js.map