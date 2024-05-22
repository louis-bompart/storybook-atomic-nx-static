import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as isUndefined } from './bueno.esm.js';
import { b as buildCustomEvent } from './event-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { a as buildStringTemplateFromResult } from './result-utils.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { R as ResultContext, I as InteractiveResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$3 } from './atomic-component-error2.js';
import { d as defineCustomElement$2 } from './atomic-result-text2.js';
import { d as defineCustomElement$1 } from './atomic-text2.js';

const atomicResultLinkCss = "atomic-result-link a{color:var(--atomic-on-background)}atomic-result-link a:hover,atomic-result-link.js-focus-visible a.focus-visible,.js-focus-visible atomic-result-link a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:hover,atomic-result-link a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:focus{outline:none}atomic-result-link a:visited{color:var(--atomic-visited)}";
const AtomicResultLinkStyle0 = atomicResultLinkCss;

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
const AtomicResultLink = /*@__PURE__*/ proxyCustomElement(class AtomicResultLink extends HTMLElement {
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
            ? this.result.clickUri
            : buildStringTemplateFromResult(this.hrefTemplate, this.result, this.bindings);
        return (h(LinkWithItemAnalytics, { key: '5bc5a6f54a53f4ae76888c923c4945a150b6bb37', href: href, onSelect: () => this.interactiveResult.select(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (h("slot", null)) : (h("atomic-result-text", { field: "title", default: "no-title" }))));
    }
    get host() { return this; }
    static get style() { return AtomicResultLinkStyle0; }
}, [4, "atomic-result-link", {
        "hrefTemplate": [513, "href-template"]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultLink.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultLink.prototype, "result", void 0);
__decorate([
    InteractiveResultContext()
], AtomicResultLink.prototype, "interactiveResult", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-link", "atomic-component-error", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultLink);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicResultLink as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-link2.js.map