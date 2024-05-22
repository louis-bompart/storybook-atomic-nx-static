'use strict';

const index = require('./index-c930d4b4.js');
const arrowBottomRounded = require('./arrow-bottom-rounded-705a1b2c.js');

const SortContainer = (_, children) => {
    return (index.h("div", { class: "flex items-center flex-wrap text-on-background" }, children));
};

const SortGuard = ({ hasError, firstSearchExecuted, hasResults }, children) => {
    if (hasError) {
        return;
    }
    if (!firstSearchExecuted) {
        return (index.h("div", { part: "placeholder", "aria-hidden": true, class: "rounded h-6 my-2 w-44 bg-neutral animate-pulse" }));
    }
    if (!hasResults) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const SortLabel = ({ id, i18n }) => {
    return (index.h("label", { class: "m-2 font-bold text-sm cursor-pointer", part: "label", htmlFor: id }, i18n.t('with-colon', {
        text: i18n.t('sort-by'),
    })));
};

const SortOption = ({ value, selected, i18n, label, }) => {
    return (index.h("option", { value: value, selected: selected }, i18n.t(label)));
};

const SortSelect = ({ i18n, id, onSelect }, children) => {
    return (index.h("div", { class: "relative", part: "select-parent" },
        index.h("select", { id: id, class: "btn-outline-neutral h-10 flex-grow cursor-pointer appearance-none pl-3 pr-24", part: "select", "aria-label": i18n.t('sort-by'), onChange: (option) => onSelect(option) }, children),
        index.h("div", { part: "select-separator", class: "w-10 absolute pointer-events-none top-px bottom-px right-0 border-l border-neutral flex justify-center items-center" },
            index.h("atomic-icon", { class: "w-2.5", icon: arrowBottomRounded.ArrowBottomIcon }))));
};

exports.SortContainer = SortContainer;
exports.SortGuard = SortGuard;
exports.SortLabel = SortLabel;
exports.SortOption = SortOption;
exports.SortSelect = SortSelect;

//# sourceMappingURL=select-9ee6a869.js.map