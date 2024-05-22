'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const itemSectionUtils = require('./item-section-utils-6e1d69b3.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicProductSectionDescription = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidRender() {
        itemSectionUtils.hideEmptySection(this.host);
    }
    get host() { return index.getElement(this); }
};

exports.atomic_product_section_description = AtomicProductSectionDescription;

//# sourceMappingURL=atomic-product-section-description.cjs.entry.js.map