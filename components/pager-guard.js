import { h, Fragment } from '@stencil/core/internal/client';
import { H as Hidden } from './initialization-utils.js';

const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasResults) {
        return h(Hidden, null);
    }
    return h(Fragment, null, ...children);
};

export { PagerGuard as P };

//# sourceMappingURL=pager-guard.js.map