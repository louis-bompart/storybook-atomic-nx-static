'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const itemSectionUtils = require('./item-section-utils-e1d46b46.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicProductSectionEmphasized = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidRender() {
        itemSectionUtils.hideEmptySection(this.host);
    }
    get host() { return index.getElement(this); }
};

exports.atomic_product_section_emphasized = AtomicProductSectionEmphasized;

//# sourceMappingURL=atomic-product-section-emphasized.cjs.entry.js.map