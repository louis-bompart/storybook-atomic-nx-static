import { r as registerInstance } from './index-c045ad7c.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { a as initializeEventName } from './initialization-utils-2f872ed1.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicExternal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};

export { AtomicExternal as atomic_external };

//# sourceMappingURL=atomic-external.entry.js.map