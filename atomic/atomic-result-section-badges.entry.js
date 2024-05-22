import { r as registerInstance, g as getElement } from './index-53978573.js';
import { h as hideEmptySection } from './item-section-utils-a5e887fa.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';

const AtomicResultSectionBadges = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicResultSectionBadges as atomic_result_section_badges };

//# sourceMappingURL=atomic-result-section-badges.entry.js.map