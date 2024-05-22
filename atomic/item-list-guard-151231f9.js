import { h, F as Fragment } from './index-53978573.js';

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (h(Fragment, null,
        templateHasError && h("slot", null),
        ...children));
};

export { ItemListGuard as I };

//# sourceMappingURL=item-list-guard-151231f9.js.map