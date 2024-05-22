import { h } from './index-53978573.js';
import { B as Button } from './button-1e00370c.js';
import { R as RadioButton } from './radio-button-f3d98433.js';

const PagerPreviousButton = (props) => {
    return (h(Button, { ...props, style: "outline-primary", part: "previous-button", class: "p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center" },
        h("atomic-icon", { icon: props.icon, part: "previous-button-icon", class: "w-5 align-middle" })));
};
const PagerNextButton = (props) => {
    return (h(Button, { ...props, style: "outline-primary", part: "next-button", class: "p-1 min-w-[2.5rem] min-h-[2.5rem] flex justify-center items-center" },
        h("atomic-icon", { icon: props.icon, part: "next-button-icon", class: "w-5 align-middle" })));
};
const PagerPageButton = (props) => {
    return (h(RadioButton, { ...props, key: props.page, style: "outline-neutral", checked: props.isSelected, ariaCurrent: props.isSelected ? 'page' : 'false', class: "btn-page focus-visible:bg-neutral-light p-1 min-w-[2.5rem] min-h-[2.5rem]", part: `page-button${props.isSelected ? ' active-page-button' : ''}` }));
};
const PagerPageButtons = (_, children) => {
    return (h("div", { part: "page-buttons", role: "radiogroup", class: "contents" }, ...children));
};

const PagerNavigation = (props, children) => {
    return (h("nav", { "aria-label": props.label },
        h("div", { part: "buttons", class: "flex gap-2 flex-wrap" }, ...children)));
};

export { PagerNavigation as P, PagerPreviousButton as a, PagerPageButtons as b, PagerPageButton as c, PagerNextButton as d };

//# sourceMappingURL=pager-navigation-a4719d94.js.map