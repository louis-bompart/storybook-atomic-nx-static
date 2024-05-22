import { b as buildCustomEvent } from './event-utils-8de63ec3.js';

const popoverClass = 'popover-nested';
function initializePopover(host, childFacet) {
    host.dispatchEvent(buildCustomEvent('atomic/initializePopover', childFacet));
}

export { initializePopover as i, popoverClass as p };

//# sourceMappingURL=popover-type-4db2bb7d.js.map