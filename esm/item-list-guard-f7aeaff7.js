import { h, F as Fragment } from './index-c045ad7c.js';

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (h(Fragment, null,
        templateHasError && h("slot", null),
        ...children));
};

export { ItemListGuard as I };

//# sourceMappingURL=item-list-guard-f7aeaff7.js.map