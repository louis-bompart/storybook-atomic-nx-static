import { h, F as Fragment } from './index-c045ad7c.js';
import { H as Hidden } from './initialization-utils-2f872ed1.js';

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return h(Hidden, null);
    }
    return h(Fragment, null, children);
};

export { FacetGuard as F };

//# sourceMappingURL=facet-guard-95a5755b.js.map