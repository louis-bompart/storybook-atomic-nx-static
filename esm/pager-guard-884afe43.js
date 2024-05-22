import { h, F as Fragment } from './index-c045ad7c.js';
import { H as Hidden } from './initialization-utils-24b58382.js';

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return h(Hidden, null);
    }
    return h(Fragment, null, ...children);
};

export { PagerGuard as P };

//# sourceMappingURL=pager-guard-884afe43.js.map