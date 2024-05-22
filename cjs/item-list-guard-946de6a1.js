'use strict';

const index = require('./index-c930d4b4.js');

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (index.h(index.Fragment, null,
        templateHasError && index.h("slot", null),
        ...children));
};

exports.ItemListGuard = ItemListGuard;

//# sourceMappingURL=item-list-guard-946de6a1.js.map