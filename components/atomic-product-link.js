import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as isUndefined } from './bueno.esm.js';
import { b as buildCustomEvent } from './event-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { P as ProductContext, I as InteractiveProductContext } from './product-template-decorators.js';
import { d as defineCustomElement$4 } from './atomic-commerce-text2.js';
import { d as defineCustomElement$3 } from './atomic-component-error2.js';
import { d as defineCustomElement$2 } from './atomic-product-text2.js';

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
const AtomicProductLink$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductLink extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get host() { return this; }
    static get style() { return AtomicProductLinkStyle0; }
}, [4, "atomic-product-link", {
        "hrefTemplate": [513, "href-template"]
    }]);
AtomicProductLink$1.isCompatibleWithProductList = true;
__decorate([
    InitializeBindings()
], AtomicProductLink$1.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductLink$1.prototype, "product", void 0);
__decorate([
    InteractiveProductContext()
], AtomicProductLink$1.prototype, "interactiveProduct", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-link", "atomic-commerce-text", "atomic-component-error", "atomic-product-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductLink$1);
            }
            break;
        case "atomic-commerce-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-product-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicProductLink = AtomicProductLink$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductLink, defineCustomElement };

//# sourceMappingURL=atomic-product-link.js.map