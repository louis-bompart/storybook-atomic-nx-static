'use strict';

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return index.h(initializationUtils.Hidden, null);
    }
    return index.h(index.Fragment, null, ...children);
};

exports.PagerGuard = PagerGuard;

//# sourceMappingURL=pager-guard-6bb046d1.js.map