import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { h as hideEmptySection } from './item-section-utils-8c592960.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicProductSectionMetadata = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicProductSectionMetadata as atomic_product_section_metadata };

//# sourceMappingURL=atomic-product-section-metadata.entry.js.map