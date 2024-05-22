import { h, Fragment } from '@stencil/core/internal/client';
import { A as Arrow } from './arrow-right.js';
import { B as Button } from './button.js';

const Carousel = (props, children) => {
    const commonPaginationClasses = 'w-10 h-10 grid justify-center items-center absolute top-[50%] -translate-y-1/2 z-1 shadow-lg group';
    const commonArrowClasses = 'w-3.5 align-middle text-on-background group-hover:text-primary group-focus:text-primary-light';
    function renderPreviousButton() {
        return (h(Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('previous'), onClick: () => props.previousPage(), part: "previous-button", class: `${commonPaginationClasses} -translate-x-1/2` },
            h("atomic-icon", { icon: Arrow, class: `${commonArrowClasses} rotate-180` })));
    }
    function renderNextButton() {
        return (h(Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('next'), onClick: () => props.nextPage(), part: "next-button", class: `${commonPaginationClasses} right-0 translate-x-1/2` },
            h("atomic-icon", { icon: Arrow, class: commonArrowClasses })));
    }
    function renderIndicators() {
        return (h("ul", { part: "indicators", class: "flex gap-2 justify-center mt-6" }, Array.from({ length: props.numberOfPages }, (_, index) => {
            const isActive = index === props.currentPage % props.numberOfPages;
            return (h("li", { part: `indicator ${isActive ? 'active-indicator' : ''}`, class: `rounded-md h-1 w-12 ${isActive ? 'bg-primary' : 'bg-neutral'} ` }));
        })));
    }
    return (h(Fragment, null,
        h("div", { class: "relative" },
            renderPreviousButton(),
            children,
            renderNextButton()),
        renderIndicators()));
};

export { Carousel as C };

//# sourceMappingURL=carousel.js.map