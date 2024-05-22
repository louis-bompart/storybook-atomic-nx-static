import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { A as qT } from './headless.esm.js';
import { C as Clock } from './clock.js';
import { a as SafeStorage, S as StorageItems } from './local-storage-utils.js';
import { o as once } from './utils.js';
import { g as getPartialRecentQueryClearElement, R as RecentQueryClear, a as getPartialRecentQueryElement, b as RecentQueriesContainer, c as RecentQueryIcon, d as RecentQueryText } from './recent-queries.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';
import { d as defineCustomElement$1 } from './atomic-icon2.js';

const AtomicSearchBoxRecentQueries = /*@__PURE__*/ proxyCustomElement(class AtomicSearchBoxRecentQueries extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = once(() => this.bindings.engine.logger.warn('Because analytics are disabled, the recent queries feature is deactivated.'));
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
        this.recentQueriesList = qT(this.bindings.engine, {
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
            return (h("atomic-component-error", { key: 'e3e8f148ef23dc520931455150df5ba295be136d', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-search-box-recent-queries", {
        "icon": [1],
        "maxWithQuery": [514, "max-with-query"],
        "maxWithoutQuery": [514, "max-without-query"],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-search-box-recent-queries", "atomic-component-error", "atomic-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-search-box-recent-queries":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSearchBoxRecentQueries);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicSearchBoxRecentQueries as A, defineCustomElement as d };

//# sourceMappingURL=atomic-search-box-recent-queries2.js.map