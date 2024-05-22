import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { D as DEFAULT_MOBILE_BREAKPOINT } from './replace-breakpoint-8bfab33b.js';
import { r as randomID } from './utils-af246396.js';
import { b as buildSearchLayoutCommon } from './search-layout-a5d30198.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';
import './sections-ae00b53a.js';

function buildCommerceLayout(element, mobileBreakpoint) {
    return buildSearchLayoutCommon(element, mobileBreakpoint, 'atomic-commerce-layout', 'atomic-commerce-interface');
}

const atomicCommerceLayoutCss = ".atomic-modal-opened{overflow-y:hidden}atomic-layout-section[section='search']{grid-area:atomic-section-search}atomic-layout-section[section='facets']{grid-area:atomic-section-facets}atomic-layout-section[section='main']{grid-area:atomic-section-main}atomic-layout-section[section='status']{grid-area:atomic-section-status}atomic-layout-section[section='pagination']{grid-area:atomic-section-pagination}atomic-commerce-layout{width:100%;height:100%;display:none;grid-template-areas:'. atomic-section-search .'\r\n    '. atomic-section-main .';grid-template-columns:var(--atomic-layout-spacing-x) minmax(0, 1fr) var(--atomic-layout-spacing-x)}atomic-commerce-layout atomic-layout-section[section='search']{margin:var(--atomic-layout-spacing-y) 0;max-width:var(--atomic-layout-max-search-box-input-width, 678px);width:100%;justify-self:center}atomic-commerce-layout atomic-layout-section[section='search'] atomic-commerce-search-box::part(suggestions-double-list){width:125%;max-width:var(--atomic-layout-max-search-box-double-suggestions-width, 800px)}atomic-commerce-layout atomic-layout-section[section='search'] atomic-commerce-search-box::part(suggestions-left){flex-basis:var(--atomic-layout-search-box-left-suggestions-width, 30%)}atomic-commerce-layout atomic-layout-section[section='search'] atomic-commerce-search-box::part(suggestions-right){flex-basis:calc(100% - var(--atomic-layout-search-box-left-suggestions-width, 30%))}atomic-commerce-layout atomic-layout-section[section='facets']{display:none}atomic-commerce-layout atomic-layout-section[section='facets'] *{margin-bottom:var(--atomic-layout-spacing-y)}atomic-commerce-layout atomic-layout-section[section='main']{margin-bottom:var(--atomic-layout-spacing-y)}atomic-commerce-layout atomic-layout-section[section='horizontal-facets']{display:flex;flex-wrap:wrap;margin-bottom:var(--atomic-layout-spacing-y);row-gap:0.5rem}atomic-commerce-layout atomic-layout-section[section='horizontal-facets']>*{max-width:100%}atomic-commerce-layout atomic-layout-section[section='horizontal-facets']>atomic-popover{margin-right:0.5rem;display:none}atomic-commerce-layout atomic-layout-section[section='status']{display:grid;justify-content:space-between;grid-template-areas:'atomic-breadbox       atomic-breadbox'\r\n      'atomic-query-summary  atomic-sort'\r\n      'atomic-did-you-mean   atomic-did-you-mean'\r\n      'atomic-notifications  atomic-notifications'}atomic-commerce-layout atomic-layout-section[section='status']>*{margin-bottom:var(--atomic-layout-spacing-y)}atomic-commerce-layout atomic-layout-section[section='status'] atomic-commerce-breadbox{grid-area:atomic-breadbox}atomic-commerce-layout atomic-layout-section[section='status'] atomic-commerce-query-summary{grid-area:atomic-query-summary;align-self:center;overflow:hidden}atomic-commerce-layout atomic-layout-section[section='status'] atomic-commerce-sort-dropdown{grid-area:atomic-sort;justify-self:end}atomic-commerce-layout atomic-layout-section[section='status'] atomic-refine-toggle{grid-area:atomic-sort}atomic-commerce-layout atomic-layout-section[section='status'] atomic-commerce-did-you-mean{grid-area:atomic-did-you-mean}atomic-commerce-layout atomic-layout-section[section='status'] atomic-commerce-notifications{grid-area:atomic-notifications}atomic-commerce-layout atomic-layout-section[section='pagination']{display:flex;flex-direction:column;justify-content:space-between;align-items:center}atomic-commerce-layout atomic-layout-section[section='pagination'] atomic-commerce-load-more-products{width:100%}atomic-commerce-layout atomic-layout-section[section='pagination']>*{margin-top:var(--atomic-layout-spacing-y)}@media only screen and (min-width: 50rem){atomic-commerce-layout atomic-layout-section[section='pagination']{flex-direction:row}}";
const AtomicCommerceLayoutStyle0 = atomicCommerceLayoutCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicCommerceLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * CSS value that defines where the layout goes from mobile to desktop.
         * e.g., 800px, 65rem.
         */
        this.mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT;
        this.mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT;
    }
    componentDidLoad() {
        const id = this.host.id || randomID('atomic-commerce-layout-');
        this.host.id = id;
        const styleTag = this.bindings.createStyleElement();
        styleTag.innerHTML = buildCommerceLayout(this.host, this.mobileBreakpoint);
        this.host.appendChild(styleTag);
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicCommerceLayout.prototype, "bindings", void 0);
AtomicCommerceLayout.style = AtomicCommerceLayoutStyle0;

export { AtomicCommerceLayout as atomic_commerce_layout };

//# sourceMappingURL=atomic-commerce-layout.entry.js.map