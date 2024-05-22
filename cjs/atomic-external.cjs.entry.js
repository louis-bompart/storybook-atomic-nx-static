'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicExternal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The CSS selector that identifies the `atomic-search-interface` component with which to initialize the external components.
         */
        this.selector = 'atomic-search-interface';
        this.selector = 'atomic-search-interface';
    }
    handleInitialization(event) {
        event.preventDefault();
        event.stopPropagation();
        this.interface.dispatchEvent(eventUtils.buildCustomEvent(initializationUtils.initializeEventName, event.detail));
    }
    handleScrollToTop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.interface.dispatchEvent(eventUtils.buildCustomEvent('atomic/scrollToTop', event.detail));
    }
    get interface() {
        const element = document.querySelector(this.selector);
        if (!element) {
            throw new Error(`Cannot find interface element with selector "${this.selector}"`);
        }
        return element;
    }
};

exports.atomic_external = AtomicExternal;

//# sourceMappingURL=atomic-external.cjs.entry.js.map