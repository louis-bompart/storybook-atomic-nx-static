'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const popoverClass = 'popover-nested';
function initializePopover(host, childFacet) {
    host.dispatchEvent(eventUtils.buildCustomEvent('atomic/initializePopover', childFacet));
}

exports.initializePopover = initializePopover;
exports.popoverClass = popoverClass;

//# sourceMappingURL=popover-type-555a9d8d.js.map