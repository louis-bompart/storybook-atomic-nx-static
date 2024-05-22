'use strict';

const index = require('./index-c930d4b4.js');
const button = require('./button-90bb3acf.js');
const radioButton = require('./radio-button-3926146c.js');

const PagerPreviousButton = (props) => {
    return (index.h(button.Button, { ...props, style: "outline-primary", part: "previous-button", class: "p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center" },
        index.h("atomic-icon", { icon: props.icon, part: "previous-button-icon", class: "w-5 align-middle" })));
};
const PagerNextButton = (props) => {
    return (index.h(button.Button, { ...props, style: "outline-primary", part: "next-button", class: "p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center" },
        index.h("atomic-icon", { icon: props.icon, part: "next-button-icon", class: "w-5 align-middle" })));
};
const PagerPageButton = (props) => {
    return (index.h(radioButton.RadioButton, { ...props, key: props.page, style: "outline-neutral", checked: props.isSelected, ariaCurrent: props.isSelected ? 'page' : 'false', class: "btn-page focus-visible:bg-neutral-light p-1 min-w-[2.5rem] min-h-[2.5rem]", part: `page-button${props.isSelected ? ' active-page-button' : ''}` }));
};
const PagerPageButtons = (_, children) => {
    return (index.h("div", { part: "page-buttons", role: "radiogroup", class: "contents" }, ...children));
};

const PagerNavigation = (props, children) => {
    return (index.h("nav", { "aria-label": props.label },
        index.h("div", { part: "buttons", class: "flex gap-2 flex-wrap" }, ...children)));
};

exports.PagerNavigation = PagerNavigation;
exports.PagerNextButton = PagerNextButton;
exports.PagerPageButton = PagerPageButton;
exports.PagerPageButtons = PagerPageButtons;
exports.PagerPreviousButton = PagerPreviousButton;

//# sourceMappingURL=pager-navigation-47e4c5a7.js.map