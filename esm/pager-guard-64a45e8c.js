import { h, F as Fragment } from './index-c045ad7c.js';
import { H as Hidden } from './initialization-utils-2f872ed1.js';

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return h(Hidden, null);
    }
    return h(Fragment, null, ...children);
};

export { PagerGuard as P };

//# sourceMappingURL=pager-guard-64a45e8c.js.map