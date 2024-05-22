import { h, F as Fragment } from './index-53978573.js';
import { H as Hidden } from './initialization-utils-446eb31c.js';

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return h(Hidden, null);
    }
    return h(Fragment, null, children);
};

export { FacetGuard as F };

//# sourceMappingURL=facet-guard-a90e3674.js.map