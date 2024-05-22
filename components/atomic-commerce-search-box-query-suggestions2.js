import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as zj } from './headless.esm2.js';
import { S as SearchIcon } from './search.js';
import { g as getPartialSearchBoxSuggestionElement, Q as QuerySuggestionContainer, a as QuerySuggestionIcon, b as QuerySuggestionText } from './query-suggestions.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';
import { d as defineCustomElement$1 } from './atomic-icon2.js';

const AtomicCommerceSearchBoxQuerySuggestions = /*@__PURE__*/ proxyCustomElement(class AtomicCommerceSearchBoxQuerySuggestions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get host() { return this; }
}, [1, "atomic-commerce-search-box-query-suggestions", {
        "icon": [1],
        "maxWithQuery": [514, "max-with-query"],
        "maxWithoutQuery": [514, "max-without-query"],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-commerce-search-box-query-suggestions", "atomic-component-error", "atomic-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-commerce-search-box-query-suggestions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicCommerceSearchBoxQuerySuggestions);
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

export { AtomicCommerceSearchBoxQuerySuggestions as A, defineCustomElement as d };

//# sourceMappingURL=atomic-commerce-search-box-query-suggestions2.js.map