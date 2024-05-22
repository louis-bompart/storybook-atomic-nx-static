import { h } from './index-c045ad7c.js';
import { C as CloseIcon } from './close-ff816971.js';
import { p as popoverClass } from './popover-type-4db2bb7d.js';
import { B as Button } from './button-a9fb1e13.js';
import { i as isRefineModalFacet } from './store-bf24650b.js';

const RefineModalCommon = (props, children) => {
    const exportparts = 'container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper';
    const flushFacetElements = () => {
        var _a;
        (_a = props.host.querySelector('div[slot="facets"]')) === null || _a === void 0 ? void 0 : _a.remove();
    };
    const renderHeader = () => {
        return (h("div", { slot: "header", class: "contents" },
            h("h1", { part: "title", class: "truncate" }, props.title),
            h(Button, { style: "text-transparent", class: "grid place-items-center", part: "close-button", onClick: props.onClose, ariaLabel: props.bindings.i18n.t('close') },
                h("atomic-icon", { part: "close-icon", class: "w-5 h-5", icon: CloseIcon }))));
    };
    const renderFooter = () => {
        return (h("div", { part: "footer-content", slot: "footer" },
            h(Button, { style: "primary", part: "footer-button", class: "w-full p-3 flex text-lg justify-center", onClick: props.onClose },
                h("span", { part: "footer-button-text", class: "truncate mr-1" }, props.bindings.i18n.t('view-results')),
                h("span", { part: "footer-button-count" }, props.bindings.i18n.t('between-parentheses', {
                    text: props.querySummaryState.total.toLocaleString(props.bindings.i18n.language),
                })))));
    };
    return (h("atomic-modal", { fullscreen: true, isOpen: props.isOpen, source: props.openButton, container: props.host, close: props.onClose, onAnimationEnded: () => {
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
        clone.classList.remove(popoverClass);
        clone.setAttribute(isRefineModalFacet, '');
        divSlot.append(clone);
    });
    return divSlot;
}

export { RefineModalCommon as R, getClonedFacetElements as g };

//# sourceMappingURL=refine-modal-common-f9526610.js.map