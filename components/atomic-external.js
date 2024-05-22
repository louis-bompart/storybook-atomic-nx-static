import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { b as buildCustomEvent } from './event-utils.js';
import { b as initializeEventName } from './initialization-utils.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';

const AtomicExternal$1 = /*@__PURE__*/ proxyCustomElement(class AtomicExternal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The CSS selector that identifies the `atomic-search-interface` component with which to initialize the external components.
         */
        this.selector = 'atomic-search-interface';
        this.selector = 'atomic-search-interface';
    }
    handleInitialization(event) {
        event.preventDefault();
        event.stopPropagation();
        this.interface.dispatchEvent(buildCustomEvent(initializeEventName, event.detail));
    }
    handleScrollToTop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.interface.dispatchEvent(buildCustomEvent('atomic/scrollToTop', event.detail));
    }
    get interface() {
        const element = document.querySelector(this.selector);
        if (!element) {
            throw new Error(`Cannot find interface element with selector "${this.selector}"`);
        }
        return element;
    }
}, [0, "atomic-external", {
        "selector": [513]
    }, [[0, "atomic/initializeComponent", "handleInitialization"], [0, "atomic/scrollToTop", "handleScrollToTop"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-external", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-external":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicExternal$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicExternal = AtomicExternal$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicExternal, defineCustomElement };

//# sourceMappingURL=atomic-external.js.map