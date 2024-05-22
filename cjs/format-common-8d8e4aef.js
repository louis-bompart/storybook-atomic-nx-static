'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const dispatchNumberFormatEvent = (formatter, element) => {
    const event = eventUtils.buildCustomEvent('atomic/numberFormat', formatter);
    const canceled = element.dispatchEvent(event);
    if (canceled) {
        throw new Error('The Atomic number format component was not handled, as it is not a child of a compatible component');
    }
};
const defaultNumberFormatter = (value, languages) => value.toLocaleString(languages);

exports.defaultNumberFormatter = defaultNumberFormatter;
exports.dispatchNumberFormatEvent = dispatchNumberFormatEvent;

//# sourceMappingURL=format-common-8d8e4aef.js.map