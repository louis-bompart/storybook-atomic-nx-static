import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { h as hideEmptySection } from './item-section-utils-a50cbfb4.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicProductSectionBottomMetadata = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicProductSectionBottomMetadata as atomic_product_section_bottom_metadata };

//# sourceMappingURL=atomic-product-section-bottom-metadata.entry.js.map