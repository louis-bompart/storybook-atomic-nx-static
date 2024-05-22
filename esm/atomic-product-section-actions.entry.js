import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { h as hideEmptySection } from './item-section-utils-a50cbfb4.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicProductSectionActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicProductSectionActions as atomic_product_section_actions };

//# sourceMappingURL=atomic-product-section-actions.entry.js.map