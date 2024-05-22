'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const debounceUtils = require('./debounce-utils-9dd35eb1.js');
const utils = require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicAriaLive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.regions = {};
        this.messagesQueue = debounceUtils.buildDebouncedQueue({ delay: 500 });
        this.id = utils.randomID('aria-live-');
        this.regions = {};
    }
    onFindAriaLive({ detail: args }) {
        if (!args.element || !this.isInSearchInterface) {
            args.element = this.host;
        }
    }
    get isInSearchInterface() {
        let element = this.host;
        while (element) {
            if (element.tagName === 'ATOMIC-SEARCH-INTERFACE') {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }
    /**
     * @internal
     */
    async updateMessage(region, message, assertive) {
        const updateRegion = () => (this.regions = { ...this.regions, [region]: { assertive, message } });
        if (message) {
            this.messagesQueue.enqueue(updateRegion, region);
        }
        else {
            this.messagesQueue.cancelActionIfQueued(region);
            updateRegion();
        }
    }
    /**
     * @internal
     */
    async registerRegion(region, assertive) {
        if (region in this.regions) {
            return;
        }
        this.regions = { ...this.regions, [region]: { assertive, message: '' } };
    }
    disconnectedCallback() {
        this.messagesQueue.clear();
    }
    render() {
        return (index.h(index.Host, { key: '23956133a83eabc70062eda40fc758b79ca95ef5', style: {
                position: 'absolute',
                display: 'block',
                height: '0',
                overflow: 'hidden',
                margin: '0',
            } }, Object.entries(this.regions).map(([regionName, { assertive, message }]) => (index.h("div", { key: regionName, id: `${this.id}-${regionName}`, "aria-live": assertive ? 'assertive' : 'polite', role: "status" }, message)))));
    }
    get host() { return index.getElement(this); }
};

exports.atomic_aria_live = AtomicAriaLive;

//# sourceMappingURL=atomic-aria-live.cjs.entry.js.map