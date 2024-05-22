'use strict';

const index = require('./index-c930d4b4.js');
const itemLink = require('./item-link-96e6faf5.js');

const DisplayGrid = ({ item, setRef, select, gridTarget, beginDelayedSelect, cancelPendingSelect }, children) => {
    return (index.h("div", { part: "result-list-grid-clickable-container outline", ref: (element) => setRef(element), onClick: (event) => {
            event.preventDefault();
            select();
            window.open(item.clickUri, event.ctrlKey || event.metaKey ? '_blank' : gridTarget, 'noopener');
        } },
        index.h(itemLink.LinkWithItemAnalytics, { part: "result-list-grid-clickable", onSelect: () => select(), onBeginDelayedSelect: () => beginDelayedSelect(), onCancelPendingSelect: () => cancelPendingSelect(), href: item.clickUri, title: item.title, target: gridTarget, rel: "noopener" }, item.title),
        ...children));
};

exports.DisplayGrid = DisplayGrid;

//# sourceMappingURL=display-grid-445229d3.js.map