import { h, F as Fragment } from './index-53978573.js';
import { H as Hidden } from './initialization-utils-446eb31c.js';

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return h(Hidden, null);
    }
    return h(Fragment, null, ...children);
};

export { PagerGuard as P };

//# sourceMappingURL=pager-guard-63694a86.js.map