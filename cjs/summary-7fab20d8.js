'use strict';

const index = require('./index-c930d4b4.js');
const button = require('./button-90bb3acf.js');

const LoadMoreButton = ({ i18n, onClick, moreAvailable, }) => {
    if (!moreAvailable) {
        return;
    }
    return (index.h(button.Button, { style: "primary", text: i18n.t('load-more-results'), part: "load-more-results-button", class: "font-bold my-2 p-3", onClick: () => onClick() }));
};

const LoadMoreContainer = (_, children) => {
    return (index.h("div", { class: "flex flex-col items-center", part: "container" }, children));
};

const LoadMoreGuard = ({ isLoaded, hasResults }, children) => {
    if (!isLoaded || !hasResults) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const LoadMoreProgressBar = ({ from, to }) => {
    const percentage = (from / to) * 100;
    const width = `${Math.ceil(percentage)}%`;
    return (index.h("div", { part: "progress-bar", class: "relative w-72 h-1 my-2 rounded bg-neutral" },
        index.h("div", { class: "progress-bar absolute h-full left-0 top-0 z-1 overflow-hidden rounded bg-gradient-to-r", style: { width } })));
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
    return (index.h("div", { class: "my-2 text-lg text-neutral-dark", part: "showing-results", innerHTML: content }));
};

exports.LoadMoreButton = LoadMoreButton;
exports.LoadMoreContainer = LoadMoreContainer;
exports.LoadMoreGuard = LoadMoreGuard;
exports.LoadMoreProgressBar = LoadMoreProgressBar;
exports.LoadMoreSummary = LoadMoreSummary;

//# sourceMappingURL=summary-7fab20d8.js.map