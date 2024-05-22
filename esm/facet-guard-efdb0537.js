import { h, F as Fragment } from './index-c045ad7c.js';
import { H as Hidden } from './initialization-utils-24b58382.js';

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return h(Hidden, null);
    }
    return h(Fragment, null, children);
};

export { FacetGuard as F };

//# sourceMappingURL=facet-guard-efdb0537.js.map