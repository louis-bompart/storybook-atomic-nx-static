'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const attributesSlot = require('./attributes-slot-90553c2d.js');
const itemLink = require('./item-link-96e6faf5.js');
const productTemplateDecorators = require('./product-template-decorators-7a6b2044.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./xss-utils-185a1c77.js');
require('./item-decorators-7bbc4b3f.js');

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
        index.registerInstance(this, hostRef);
        this.hrefTemplate = undefined;
    }
    initialize() {
        this.host.dispatchEvent(eventUtils.buildCustomEvent('atomic/resolveStopPropagation', (stopPropagation) => {
            this.stopPropagation = stopPropagation;
        }));
    }
    connectedCallback() {
        const slotName = 'attributes';
        this.hasDefaultSlot = !!attributesSlot.getDefaultSlotFromHost(this.host);
        this.linkAttributes = attributesSlot.getAttributesFromLinkSlot(this.host, slotName);
    }
    render() {
        const href = bueno_esm.isUndefined(this.hrefTemplate)
            ? this.product.clickUri
            : 'test';
        return (index.h(itemLink.LinkWithItemAnalytics, { key: 'be39eca91f097077018583daf1ca7f0302e84010', href: href, onSelect: () => this.interactiveProduct.select(), onBeginDelayedSelect: () => this.interactiveProduct.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveProduct.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (index.h("slot", null)) : (index.h("atomic-product-text", { field: "ec_name", default: "no-title" }))));
    }
    get host() { return index.getElement(this); }
};
AtomicProductLink.isCompatibleWithProductList = true;
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductLink.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductLink.prototype, "product", void 0);
__decorate([
    productTemplateDecorators.InteractiveProductContext()
], AtomicProductLink.prototype, "interactiveProduct", void 0);
AtomicProductLink.style = AtomicProductLinkStyle0;

exports.atomic_product_link = AtomicProductLink;

//# sourceMappingURL=atomic-product-link.cjs.entry.js.map