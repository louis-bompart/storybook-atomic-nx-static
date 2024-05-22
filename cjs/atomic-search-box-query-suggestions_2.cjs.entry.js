'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const search = require('./search-a4774f02.js');
const querySuggestions = require('./query-suggestions-de42b077.js');
const suggestionsCommon = require('./suggestions-common-cd742c1b.js');
const clock = require('./clock-f03ff827.js');
const localStorageUtils = require('./local-storage-utils-f2621dfd.js');
const utils = require('./utils-93ea935e.js');
const recentQueries = require('./recent-queries-627208b4.js');
require('./string-utils-bdf08f8c.js');
require('./event-utils-9bfcf3c5.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicSearchBoxQuerySuggestions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = undefined;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            suggestionsCommon.dispatchSearchBoxSuggestionsEvent((bindings) => {
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
        const { registerQuerySuggest, fetchQuerySuggestions } = headless_esm.Wge(engine);
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
        const partialItem = querySuggestions.getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        return {
            ...partialItem,
            content: (index.h(querySuggestions.QuerySuggestionContainer, null, index.h(querySuggestions.QuerySuggestionIcon, { icon: this.icon || search.SearchIcon, hasSuggestion: this.bindings.getSuggestions().length > 1 }), index.h(querySuggestions.QuerySuggestionText, { suggestion: suggestion, hasQuery: hasQuery }))),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: 'd49f09374cfe7ddb9d66591b7fc1732a8b38a53c', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

const AtomicSearchBoxRecentQueries = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = utils.once(() => this.bindings.engine.logger.warn('Because analytics are disabled, the recent queries feature is deactivated.'));
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = 3;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            suggestionsCommon.dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    renderIcon() {
        return this.icon || clock.Clock;
    }
    initialize() {
        this.storage = new localStorageUtils.SafeStorage();
        this.recentQueriesList = headless_esm.qT(this.bindings.engine, {
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
        return this.storage.getParsedJSON(localStorageUtils.StorageItems.RECENT_QUERIES, []);
    }
    updateLocalStorage() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return this.disableFeature();
        }
        return this.storage.setJSON(localStorageUtils.StorageItems.RECENT_QUERIES, this.recentQueriesList.state.queries);
    }
    disableFeature() {
        this.warnUser();
        this.storage.removeItem(localStorageUtils.StorageItems.RECENT_QUERIES);
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
        const partialItem = recentQueries.getPartialRecentQueryClearElement(this.bindings.i18n);
        return {
            ...partialItem,
            content: index.h(recentQueries.RecentQueryClear, { i18n: this.bindings.i18n }),
            onSelect: () => {
                this.recentQueriesList.clear();
                this.bindings.triggerSuggestions();
            },
        };
    }
    renderItem(value) {
        const query = this.bindings.searchBoxController.state.value;
        const partialItem = recentQueries.getPartialRecentQueryElement(value, this.bindings.i18n);
        return {
            ...partialItem,
            content: (index.h(recentQueries.RecentQueriesContainer, null, index.h(recentQueries.RecentQueryIcon, { icon: this.renderIcon() }), index.h(recentQueries.RecentQueryText, { query: query, value: value }))),
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
            return (index.h("atomic-component-error", { key: 'e3e8f148ef23dc520931455150df5ba295be136d', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_search_box_query_suggestions = AtomicSearchBoxQuerySuggestions;
exports.atomic_search_box_recent_queries = AtomicSearchBoxRecentQueries;

//# sourceMappingURL=atomic-search-box-query-suggestions_2.cjs.entry.js.map