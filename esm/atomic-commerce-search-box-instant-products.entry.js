import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { x as xA } from './headless.esm-3423086c.js';
import { e as encodeForDomAttribute } from './string-utils-5f5a23a8.js';
import { g as getPartialInstantItemElement, a as getPartialInstantItemShowAllElement, I as InstantItemShowAllButton } from './instant-item-b3531ed9.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common-f37e2d0d.js';
import { P as ProductTemplateProvider } from './product-template-provider-a23f2f6d.js';
import './button-style-8b7877b4.js';
import './event-utils-8de63ec3.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';
import './template-provider-818c930d.js';

// TODO: KIT-3165 Uncomment once the `buildInteractiveInstantProduct` function is implemented in headless.
function buildInteractiveInstantProduct(_engine, _arg) {
    return {};
}
const AtomicCommerceSearchBoxInstantProducts = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.products = [];
        this.display = 'list';
        this.templateHasError = false;
        /**
         * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of different parts in a product.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the products.
         */
        this.imageSize = 'icon';
        this.error = undefined;
        this.templateHasError = false;
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
        const atomicProduct = el.tagName === 'ATOMIC-PRODUCT'
            ? el
            : el === null || el === void 0 ? void 0 : el.querySelector('atomic-product');
        return (((_a = atomicProduct === null || atomicProduct === void 0 ? void 0 : atomicProduct.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('atomic-product-link a')) || null);
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
        const products = this.instantProducts.state.products.length
            ? this.instantProducts.state.products
            : this.products;
        const elements = products.map((product) => {
            var _a;
            const partialItem = getPartialInstantItemElement(this.bindings.i18n, ((_a = this.ariaLabelGenerator) === null || _a === void 0 ? void 0 : _a.call(this, this.bindings, product)) || product.ec_name, product.permanentid);
            return {
                ...partialItem,
                content: (h("atomic-product", { key: `instant-product-${encodeForDomAttribute(product.permanentid)}`, part: "outline", product: product, interactiveProduct: buildInteractiveInstantProduct(), display: this.display, density: this.density, imageSize: this.imageSize, content: this.itemTemplateProvider.getTemplateContent(product), stopPropagation: false, renderingFunction: this.itemRenderingFunction })),
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
                    this.bindings.searchBoxController.updateText(this.instantProducts.state.query);
                    this.bindings.searchBoxController.submit();
                },
            });
        }
        return elements;
    }
    initialize() {
        this.instantProducts = xA(this.bindings.engine, {
            options: {},
        });
        this.itemTemplateProvider = new ProductTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.host.querySelectorAll('atomic-product-template')),
            getResultTemplateRegistered: () => true,
            setResultTemplateRegistered: () => { },
            getTemplateHasError: () => this.templateHasError,
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
        });
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            panel: 'right',
            onSuggestedQueryChange: (q) => {
                this.instantProducts.updateQuery(q);
                return this.onSuggestedQueryChange();
            },
            renderItems: () => this.renderItems(),
        };
    }
    onSuggestedQueryChange() {
        if (!this.bindings.getSuggestionElements().length &&
            !this.bindings.searchBoxController.state.value) {
            console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-commerce-search-box-query-suggestions or atomic-commerce-search-box-recent-queries in your search box in order to see some instant products.");
        }
        return new Promise((resolve) => {
            const unsubscribe = this.instantProducts.subscribe(() => {
                const state = this.instantProducts.state;
                if (!state.isLoading) {
                    if (state.products.length) {
                        this.products = state.products;
                    }
                    unsubscribe();
                    resolve();
                }
            });
        });
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '9e22a6a606f4bb867d64b8ba6f170210c638c9b8', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicCommerceSearchBoxInstantProducts as atomic_commerce_search_box_instant_products };

//# sourceMappingURL=atomic-commerce-search-box-instant-products.entry.js.map