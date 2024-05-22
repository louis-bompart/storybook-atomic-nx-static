import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { B as Ek, M as Mk } from './headless.esm.js';
import { e as encodeForDomAttribute } from './string-utils.js';
import { I as ItemTemplateProvider } from './item-template-provider.js';
import { g as getPartialInstantItemElement, a as getPartialInstantItemShowAllElement, I as InstantItemShowAllButton } from './instant-item.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';
import { d as defineCustomElement$6 } from './atomic-component-error2.js';
import { d as defineCustomElement$5 } from './atomic-result2.js';
import { d as defineCustomElement$4 } from './atomic-result-link2.js';
import { d as defineCustomElement$3 } from './atomic-result-text2.js';
import { d as defineCustomElement$2 } from './atomic-text2.js';

const AtomicSearchBoxInstantResults$1 = /*@__PURE__*/ proxyCustomElement(class AtomicSearchBoxInstantResults extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.results = [];
        this.display = 'list';
        this.templateHasError = false;
        /**
         * The maximum number of results to show.
         */
        this.maxResultsPerQuery = 4;
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        this.error = undefined;
        this.templateHasError = false;
        this.maxResultsPerQuery = 4;
        this.density = 'normal';
        this.imageSize = 'icon';
        this.ariaLabelGenerator = undefined;
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
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
    getLink(el) {
        var _a;
        const atomicResult = el.tagName === 'ATOMIC-RESULT' ? el : el === null || el === void 0 ? void 0 : el.querySelector('atomic-result');
        return (((_a = atomicResult === null || atomicResult === void 0 ? void 0 : atomicResult.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('atomic-result-link a')) || null);
    }
    handleLinkClick(el, hasModifier) {
        const setTarget = (value) => el.setAttribute('target', value);
        const initialTarget = el.getAttribute('target');
        hasModifier && setTarget('_blank');
        el.click();
        hasModifier && setTarget(initialTarget || '');
        return true;
    }
    renderItems() {
        if (!this.bindings.suggestedQuery() || this.bindings.store.isMobile()) {
            return [];
        }
        const results = this.instantResults.state.results.length
            ? this.instantResults.state.results
            : this.results;
        const elements = results.map((result) => {
            var _a;
            const partialItem = getPartialInstantItemElement(this.bindings.i18n, ((_a = this.ariaLabelGenerator) === null || _a === void 0 ? void 0 : _a.call(this, this.bindings, result)) || result.title, result.uniqueId);
            return {
                ...partialItem,
                content: (h("atomic-result", { key: `instant-result-${encodeForDomAttribute(result.uniqueId)}`, part: "outline", result: result, interactiveResult: Ek(this.bindings.engine, {
                        options: { result },
                    }), display: this.display, density: this.density, imageSize: this.imageSize, content: this.itemTemplateProvider.getTemplateContent(result), stopPropagation: false, renderingFunction: this.itemRenderingFunction })),
                onSelect: (e) => {
                    const link = this.getLink(e.target);
                    if (!link) {
                        return;
                    }
                    this.handleLinkClick(link, e.ctrlKey || e.metaKey);
                },
            };
        });
        if (elements.length) {
            const partialItem = getPartialInstantItemShowAllElement(this.bindings.i18n);
            elements.push({
                ...partialItem,
                content: h(InstantItemShowAllButton, { i18n: this.bindings.i18n }),
                onSelect: () => {
                    this.bindings.clearSuggestions();
                    this.bindings.searchBoxController.updateText(this.instantResults.state.q);
                    this.bindings.searchBoxController.submit();
                },
            });
        }
        return elements;
    }
    initialize() {
        this.instantResults = Mk(this.bindings.engine, {
            options: {
                maxResultsPerQuery: this.maxResultsPerQuery,
            },
        });
        this.itemTemplateProvider = new ItemTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.host.querySelectorAll('atomic-result-template')),
            getResultTemplateRegistered: () => true,
            setResultTemplateRegistered: () => { },
            getTemplateHasError: () => this.templateHasError,
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
            bindings: this.bindings,
        });
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            panel: 'right',
            onSuggestedQueryChange: (q) => {
                this.instantResults.updateQuery(q);
                return this.onSuggestedQueryChange();
            },
            renderItems: () => this.renderItems(),
        };
    }
    onSuggestedQueryChange() {
        if (!this.bindings.getSuggestionElements().length &&
            !this.bindings.searchBoxController.state.value) {
            console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-search-box-query-suggestions or atomic-search-box-recent-queries in your search box in order to see some instant results.");
        }
        return new Promise((resolve) => {
            const unsubscribe = this.instantResults.subscribe(() => {
                const state = this.instantResults.state;
                if (!state.isLoading) {
                    if (state.results.length) {
                        this.results = state.results;
                    }
                    unsubscribe();
                    resolve();
                }
            });
        });
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '130c4d2a0963dc0a637b77ca63b2ca78feed7059', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-search-box-instant-results", {
        "maxResultsPerQuery": [514, "max-results-per-query"],
        "density": [513],
        "imageSize": [513, "image-size"],
        "ariaLabelGenerator": [16],
        "error": [32],
        "templateHasError": [32],
        "setRenderFunction": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-search-box-instant-results", "atomic-component-error", "atomic-result", "atomic-result-link", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-search-box-instant-results":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSearchBoxInstantResults$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atomic-result":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atomic-result-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicSearchBoxInstantResults = AtomicSearchBoxInstantResults$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicSearchBoxInstantResults, defineCustomElement };

//# sourceMappingURL=atomic-search-box-instant-results.js.map