'use strict';

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return index.h(initializationUtils.Hidden, null);
    }
    return index.h(index.Fragment, null, ...children);
};

exports.PagerGuard = PagerGuard;

//# sourceMappingURL=pager-guard-62dc2c63.js.map