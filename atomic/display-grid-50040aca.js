import { h } from './index-53978573.js';
import { L as LinkWithItemAnalytics } from './item-link-6991cf67.js';

const DisplayGrid = ({ item, setRef, select, gridTarget, beginDelayedSelect, cancelPendingSelect }, children) => {
    return (h("div", { part: "result-list-grid-clickable-container outline", ref: (element) => setRef(element), onClick: (event) => {
            event.preventDefault();
            select();
            window.open(item.clickUri, event.ctrlKey || event.metaKey ? '_blank' : gridTarget, 'noopener');
        } },
        h(LinkWithItemAnalytics, { part: "result-list-grid-clickable", onSelect: () => select(), onBeginDelayedSelect: () => beginDelayedSelect(), onCancelPendingSelect: () => cancelPendingSelect(), href: item.clickUri, title: item.title, target: gridTarget, rel: "noopener" }, item.title),
        ...children));
};

export { DisplayGrid as D };

//# sourceMappingURL=display-grid-50040aca.js.map