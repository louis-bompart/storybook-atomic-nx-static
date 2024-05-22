import { h, F as Fragment } from './index-53978573.js';
import { A as ArrowBottomIcon } from './arrow-bottom-rounded-043572da.js';

const SortContainer = (_, children) => {
    return (h("div", { class: "flex items-center flex-wrap text-on-background" }, children));
};

const SortGuard = ({ hasError, firstSearchExecuted, hasResults }, children) => {
    if (hasError) {
        return;
    }
    if (!firstSearchExecuted) {
        return (h("div", { part: "placeholder", "aria-hidden": true, class: "rounded h-6 my-2 w-44 bg-neutral animate-pulse" }));
    }
    if (!hasResults) {
        return;
    }
    return h(Fragment, null, children);
};

const SortLabel = ({ id, i18n }) => {
    return (h("label", { class: "m-2 font-bold text-sm cursor-pointer", part: "label", htmlFor: id }, i18n.t('with-colon', {
        text: i18n.t('sort-by'),
    })));
};

const SortOption = ({ value, selected, i18n, label, }) => {
    return (h("option", { value: value, selected: selected }, i18n.t(label)));
};

const SortSelect = ({ i18n, id, onSelect }, children) => {
    return (h("div", { class: "relative", part: "select-parent" },
        h("select", { id: id, class: "btn-outline-neutral h-10 flex-grow cursor-pointer appearance-none pl-3 pr-24", part: "select", "aria-label": i18n.t('sort-by'), onChange: (option) => onSelect(option) }, children),
        h("div", { part: "select-separator", class: "w-10 absolute pointer-events-none top-px bottom-px right-0 border-l border-neutral flex justify-center items-center" },
            h("atomic-icon", { class: "w-2.5", icon: ArrowBottomIcon }))));
};

export { SortGuard as S, SortContainer as a, SortLabel as b, SortSelect as c, SortOption as d };

//# sourceMappingURL=select-cb745a86.js.map