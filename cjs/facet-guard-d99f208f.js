'use strict';

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return index.h(initializationUtils.Hidden, null);
    }
    return index.h(index.Fragment, null, children);
};

exports.FacetGuard = FacetGuard;

//# sourceMappingURL=facet-guard-d99f208f.js.map