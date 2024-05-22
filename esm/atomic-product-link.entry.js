import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { c as isUndefined } from './bueno.esm-9a075e67.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot-fda20590.js';
import { L as LinkWithItemAnalytics } from './item-link-e997e301.js';
import { P as ProductContext, I as InteractiveProductContext } from './product-template-decorators-1c948806.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';
import './xss-utils-3bfd8d0c.js';
import './item-decorators-d183824b.js';

const atomicProductLinkCss = "atomic-result-link a{color:var(--atomic-on-background)}atomic-result-link a:hover,atomic-result-link.js-focus-visible a.focus-visible,.js-focus-visible atomic-result-link a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:hover,atomic-result-link a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:focus{outline:none}atomic-result-link a:visited{color:var(--atomic-visited)}";
const AtomicProductLinkStyle0 = atomicProductLinkCss;

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
const AtomicProductLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hrefTemplate = undefined;
    }
    initialize() {
        this.host.dispatchEvent(buildCustomEvent('atomic/resolveStopPropagation', (stopPropagation) => {
            this.stopPropagation = stopPropagation;
        }));
    }
    connectedCallback() {
        const slotName = 'attributes';
        this.hasDefaultSlot = !!getDefaultSlotFromHost(this.host);
        this.linkAttributes = getAttributesFromLinkSlot(this.host, slotName);
    }
    render() {
        const href = isUndefined(this.hrefTemplate)
            ? this.product.clickUri
            : 'test';
        return (h(LinkWithItemAnalytics, { key: 'be39eca91f097077018583daf1ca7f0302e84010', href: href, onSelect: () => this.interactiveProduct.select(), onBeginDelayedSelect: () => this.interactiveProduct.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveProduct.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (h("slot", null)) : (h("atomic-product-text", { field: "ec_name", default: "no-title" }))));
    }
    get host() { return getElement(this); }
};
AtomicProductLink.isCompatibleWithProductList = true;
__decorate([
    InitializeBindings()
], AtomicProductLink.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductLink.prototype, "product", void 0);
__decorate([
    InteractiveProductContext()
], AtomicProductLink.prototype, "interactiveProduct", void 0);
AtomicProductLink.style = AtomicProductLinkStyle0;

export { AtomicProductLink as atomic_product_link };

//# sourceMappingURL=atomic-product-link.entry.js.map