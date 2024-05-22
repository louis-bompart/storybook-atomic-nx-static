import { h, F as Fragment } from './index-c045ad7c.js';

const DisplayWrapper = ({ display, listClasses }, children) => {
    if (display === 'table') {
        return h(ListWrapper, { listClasses: listClasses }, ...children);
    }
    return (h(ListWrapper, { listClasses: listClasses },
        h("div", { class: `list-root ${listClasses}`, part: "result-list" }, children)));
};
const ListWrapper = ({ listClasses }, children) => {
    return h("div", { class: `list-wrapper ${listClasses}` }, ...children);
};

const ItemDisplayGuard = (props, children) => {
    if (!props.hasItems || !props.firstRequestExecuted) {
        return;
    }
    return h(Fragment, null, ...children);
};

export { DisplayWrapper as D, ItemDisplayGuard as I };

//# sourceMappingURL=item-display-guard-7af34685.js.map