import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { m as buildRecentQueriesList } from './headless.esm-628c1e39.js';
import { C as Clock } from './clock-add3e9a5.js';
import { S as SafeStorage, a as StorageItems } from './local-storage-utils-a1619fdc.js';
import { o as once } from './utils-8200d0ae.js';
import { g as getPartialRecentQueryClearElement, R as RecentQueryClear, a as getPartialRecentQueryElement, b as RecentQueriesContainer, c as RecentQueryIcon, d as RecentQueryText } from './recent-queries-a474f8a6.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common-08348f37.js';
import './_commonjsHelpers-1a56c7bc.js';
import './headless.esm-bdb53e72.js';
import './string-utils-5f5a23a8.js';
import './event-utils-8de63ec3.js';

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
        this.recentQueriesList = buildRecentQueriesList(this.bindings.engine, {
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
            return (h("atomic-component-error", { key: '57d2db4a5b30a56207d447c406197e6380845694', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicCommerceSearchBoxRecentQueries as atomic_commerce_search_box_recent_queries };

//# sourceMappingURL=atomic-commerce-search-box-recent-queries.entry.js.map