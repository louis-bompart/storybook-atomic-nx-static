'use strict';

const index = require('./index-c930d4b4.js');

const DisplayWrapper = ({ display, listClasses }, children) => {
    if (display === 'table') {
        return index.h(ListWrapper, { listClasses: listClasses }, ...children);
    }
    return (index.h(ListWrapper, { listClasses: listClasses },
        index.h("div", { class: `list-root ${listClasses}`, part: "result-list" }, children)));
};
const ListWrapper = ({ listClasses }, children) => {
    return index.h("div", { class: `list-wrapper ${listClasses}` }, ...children);
};

const ItemDisplayGuard = (props, children) => {
    if (!props.hasItems || !props.firstRequestExecuted) {
        return;
    }
    return index.h(index.Fragment, null, ...children);
};

exports.DisplayWrapper = DisplayWrapper;
exports.ItemDisplayGuard = ItemDisplayGuard;

//# sourceMappingURL=item-display-guard-c58ceb86.js.map