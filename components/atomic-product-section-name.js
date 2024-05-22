import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionTitle = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-name"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-name"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-name":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionTitle);
            }
            break;
    } });
}

const AtomicProductSectionName = AtomicProductSectionTitle;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionName, defineCustomElement };

//# sourceMappingURL=atomic-product-section-name.js.map