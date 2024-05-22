'use strict';

const index = require('./index-c930d4b4.js');
const arrowRight = require('./arrow-right-104a0618.js');
const button = require('./button-90bb3acf.js');

const Carousel = (props, children) => {
    const commonPaginationClasses = 'w-10 h-10 grid justify-center items-center absolute top-[50%] -translate-y-1/2 z-1 shadow-lg group';
    const commonArrowClasses = 'w-3.5 align-middle text-on-background group-hover:text-primary group-focus:text-primary-light';
    function renderPreviousButton() {
        return (index.h(button.Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('previous'), onClick: () => props.previousPage(), part: "previous-button", class: `${commonPaginationClasses} -translate-x-1/2` },
            index.h("atomic-icon", { icon: arrowRight.Arrow, class: `${commonArrowClasses} rotate-180` })));
    }
    function renderNextButton() {
        return (index.h(button.Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('next'), onClick: () => props.nextPage(), part: "next-button", class: `${commonPaginationClasses} right-0 translate-x-1/2` },
            index.h("atomic-icon", { icon: arrowRight.Arrow, class: commonArrowClasses })));
    }
    function renderIndicators() {
        return (index.h("ul", { part: "indicators", class: "flex gap-2 justify-center mt-6" }, Array.from({ length: props.numberOfPages }, (_, index$1) => {
            const isActive = index$1 === props.currentPage % props.numberOfPages;
            return (index.h("li", { part: `indicator ${isActive ? 'active-indicator' : ''}`, class: `rounded-md h-1 w-12 ${isActive ? 'bg-primary' : 'bg-neutral'} ` }));
        })));
    }
    return (index.h(index.Fragment, null,
        index.h("div", { class: "relative" },
            renderPreviousButton(),
            children,
            renderNextButton()),
        renderIndicators()));
};

exports.Carousel = Carousel;

//# sourceMappingURL=carousel-46420299.js.map