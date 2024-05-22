'use strict';

const index = require('./index-c930d4b4.js');
const close = require('./close-20739950.js');
const popoverType = require('./popover-type-555a9d8d.js');
const button = require('./button-90bb3acf.js');
const store = require('./store-3e7a313a.js');

const RefineModalCommon = (props, children) => {
    const exportparts = 'container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper';
    const flushFacetElements = () => {
        var _a;
        (_a = props.host.querySelector('div[slot="facets"]')) === null || _a === void 0 ? void 0 : _a.remove();
    };
    const renderHeader = () => {
        return (index.h("div", { slot: "header", class: "contents" },
            index.h("h1", { part: "title", class: "truncate" }, props.title),
            index.h(button.Button, { style: "text-transparent", class: "grid place-items-center", part: "close-button", onClick: props.onClose, ariaLabel: props.bindings.i18n.t('close') },
                index.h("atomic-icon", { part: "close-icon", class: "w-5 h-5", icon: close.CloseIcon }))));
    };
    const renderFooter = () => {
        return (index.h("div", { part: "footer-content", slot: "footer" },
            index.h(button.Button, { style: "primary", part: "footer-button", class: "w-full p-3 flex text-lg justify-center", onClick: props.onClose },
                index.h("span", { part: "footer-button-text", class: "truncate mr-1" }, props.bindings.i18n.t('view-results')),
                index.h("span", { part: "footer-button-count" }, props.bindings.i18n.t('between-parentheses', {
                    text: props.querySummaryState.total.toLocaleString(props.bindings.i18n.language),
                })))));
    };
    return (index.h("atomic-modal", { fullscreen: true, isOpen: props.isOpen, source: props.openButton, container: props.host, close: props.onClose, onAnimationEnded: () => {
            if (!props.isOpen) {
                flushFacetElements();
            }
        }, exportparts: exportparts, boundary: props.boundary, scope: props.scope },
        renderHeader(),
        ...children,
        renderFooter()));
};
function getClonedFacetElements(facetElements, collapseFacetsAfter, root) {
    const divSlot = document.createElement('div');
    divSlot.setAttribute('slot', 'facets');
    divSlot.style.display = 'flex';
    divSlot.style.flexDirection = 'column';
    divSlot.style.gap = 'var(--atomic-refine-modal-facet-margin, 20px)';
    const allFacetTags = Array.from(new Set(facetElements.map((el) => el.tagName.toLowerCase())));
    const allFacetsInOrderInDOM = allFacetTags.length
        ? root.querySelectorAll(allFacetTags.join(','))
        : [];
    allFacetsInOrderInDOM.forEach((facetElement, index) => {
        const clone = facetElement.cloneNode(true);
        clone.isCollapsed = index + 1 > collapseFacetsAfter;
        clone.classList.remove(popoverType.popoverClass);
        clone.setAttribute(store.isRefineModalFacet, '');
        divSlot.append(clone);
    });
    return divSlot;
}

exports.RefineModalCommon = RefineModalCommon;
exports.getClonedFacetElements = getClonedFacetElements;

//# sourceMappingURL=refine-modal-common-7e4b7ad1.js.map