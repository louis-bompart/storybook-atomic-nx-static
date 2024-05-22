import { h } from './index-c045ad7c.js';
import { L as LinkWithItemAnalytics } from './item-link-e997e301.js';

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

//# sourceMappingURL=display-grid-89483b4d.js.map