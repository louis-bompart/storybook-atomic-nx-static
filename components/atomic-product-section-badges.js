import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionBadges = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionBadges extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-badges"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-badges"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-badges":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionBadges);
            }
            break;
    } });
}

const AtomicProductSectionBadges = AtomicResultSectionBadges;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionBadges, defineCustomElement };

//# sourceMappingURL=atomic-product-section-badges.js.map