import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { x as xA } from './headless.esm2.js';
import { e as encodeForDomAttribute } from './string-utils.js';
import { g as getPartialInstantItemElement, a as getPartialInstantItemShowAllElement, I as InstantItemShowAllButton } from './instant-item.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';
import { P as ProductTemplateProvider } from './product-template-provider.js';
import { d as defineCustomElement$6 } from './atomic-component-error2.js';
import { d as defineCustomElement$5 } from './atomic-product2.js';
import { d as defineCustomElement$4 } from './atomic-result-link2.js';
import { d as defineCustomElement$3 } from './atomic-result-text2.js';
import { d as defineCustomElement$2 } from './atomic-text2.js';

// TODO: KIT-3165 Uncomment once the `buildInteractiveInstantProduct` function is implemented in headless.
function buildInteractiveInstantProduct(_engine, _arg) {
    return {};
}
const AtomicCommerceSearchBoxInstantProducts$1 = /*@__PURE__*/ proxyCustomElement(class AtomicCommerceSearchBoxInstantProducts extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            return (h("atomic-component-error", { key: '66f6eed88fc35b2b84f2109912bb265b93722ca1', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-commerce-search-box-instant-products", {
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
    const components = ["atomic-commerce-search-box-instant-products", "atomic-component-error", "atomic-product", "atomic-result-link", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-commerce-search-box-instant-products":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicCommerceSearchBoxInstantProducts$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atomic-product":
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

const AtomicCommerceSearchBoxInstantProducts = AtomicCommerceSearchBoxInstantProducts$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicCommerceSearchBoxInstantProducts, defineCustomElement };

//# sourceMappingURL=atomic-commerce-search-box-instant-products.js.map