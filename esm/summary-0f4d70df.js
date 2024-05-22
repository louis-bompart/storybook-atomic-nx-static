import { h, F as Fragment } from './index-c045ad7c.js';
import { B as Button } from './button-a9fb1e13.js';

const LoadMoreButton = ({ i18n, onClick, moreAvailable, }) => {
    if (!moreAvailable) {
        return;
    }
    return (h(Button, { style: "primary", text: i18n.t('load-more-results'), part: "load-more-results-button", class: "font-bold my-2 p-3", onClick: () => onClick() }));
};

const LoadMoreContainer = (_, children) => {
    return (h("div", { class: "flex flex-col items-center", part: "container" }, children));
};

const LoadMoreGuard = ({ isLoaded, hasResults }, children) => {
    if (!isLoaded || !hasResults) {
        return;
    }
    return h(Fragment, null, children);
};

const LoadMoreProgressBar = ({ from, to }) => {
    const percentage = (from / to) * 100;
    const width = `${Math.ceil(percentage)}%`;
    return (h("div", { part: "progress-bar", class: "relative w-72 h-1 my-2 rounded bg-neutral" },
        h("div", { class: "progress-bar absolute h-full left-0 top-0 z-1 overflow-hidden rounded bg-gradient-to-r", style: { width } })));
};

const LoadMoreSummary = ({ i18n, from, to, }) => {
    const wrapHighlight = (content) => {
        return `<span class="font-bold text-on-background" part="highlight">${content}</span>`;
    };
    const locale = i18n.language;
    const content = i18n.t('showing-results-of-load-more', {
        interpolation: { escapeValue: false },
        last: wrapHighlight(from.toLocaleString(locale)),
        total: wrapHighlight(to.toLocaleString(locale)),
    });
    return (h("div", { class: "my-2 text-lg text-neutral-dark", part: "showing-results", innerHTML: content }));
};

export { LoadMoreContainer as L, LoadMoreSummary as a, LoadMoreProgressBar as b, LoadMoreButton as c, LoadMoreGuard as d };

//# sourceMappingURL=summary-0f4d70df.js.map