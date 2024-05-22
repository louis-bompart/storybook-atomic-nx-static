import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { h as hideEmptySection } from './item-section-utils-8c592960.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicResultSectionTitleMetadata = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicResultSectionTitleMetadata as atomic_result_section_title_metadata };

//# sourceMappingURL=atomic-result-section-title-metadata.entry.js.map