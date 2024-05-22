import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as isUndefined } from './bueno.esm.js';
import { b as Fye } from './headless.esm.js';
import { b as buildCustomEvent } from './event-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { a as buildStringTemplateFromResult } from './result-utils.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { R as ResultContext, I as InteractiveResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$4 } from './atomic-component-error2.js';
import { d as defineCustomElement$3 } from './atomic-result-text2.js';
import { d as defineCustomElement$2 } from './atomic-text2.js';

const atomicIpxResultLinkCss = "atomic-ipx-result-link a{color:var(--atomic-on-background)}atomic-ipx-result-link a:hover,atomic-ipx-result-link.js-focus-visible a.focus-visible,.js-focus-visible atomic-ipx-result-link a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-ipx-result-link a:hover,atomic-ipx-result-link a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-ipx-result-link a:focus{outline:none}atomic-ipx-result-link a:visited{color:var(--atomic-visited)}";
const AtomicIpxResultLinkStyle0 = atomicIpxResultLinkCss;

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
const AtomicIPXResultLink = /*@__PURE__*/ proxyCustomElement(class AtomicIPXResultLink extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.hrefTemplate = undefined;
    }
    initialize() {
        this.host.dispatchEvent(buildCustomEvent('atomic/resolveStopPropagation', (stopPropagation) => {
            this.stopPropagation = stopPropagation;
        }));
        this.actionsHistoryActions = Fye(this.bindings.engine);
    }
    connectedCallback() {
        const slotName = 'attributes';
        this.hasDefaultSlot = !!getDefaultSlotFromHost(this.host);
        this.linkAttributes = getAttributesFromLinkSlot(this.host, slotName);
    }
    async onSelect() {
        const resultPermanentId = this.result.raw.permanentid;
        if (resultPermanentId && this.actionsHistoryActions) {
            const action = this.actionsHistoryActions.addPageViewEntryInActionsHistory(resultPermanentId);
            this.bindings.engine.dispatch(action);
        }
        this.interactiveResult.select();
    }
    render() {
        const href = isUndefined(this.hrefTemplate)
            ? this.result.clickUri
            : buildStringTemplateFromResult(this.hrefTemplate, this.result, this.bindings);
        return (h(LinkWithItemAnalytics, { key: '8e41114cb308cc3a8642897bc925c5faacf63c8f', href: href, onSelect: () => this.onSelect(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (h("slot", null)) : (h("atomic-result-text", { field: "title", default: "no-title" }))));
    }
    get host() { return this; }
    static get style() { return AtomicIpxResultLinkStyle0; }
}, [4, "atomic-ipx-result-link", {
        "hrefTemplate": [513, "href-template"]
    }]);
__decorate([
    InitializeBindings()
], AtomicIPXResultLink.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicIPXResultLink.prototype, "result", void 0);
__decorate([
    InteractiveResultContext()
], AtomicIPXResultLink.prototype, "interactiveResult", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-ipx-result-link", "atomic-component-error", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-ipx-result-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicIPXResultLink);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicIpxResultLink = AtomicIPXResultLink;
const defineCustomElement = defineCustomElement$1;

export { AtomicIpxResultLink, defineCustomElement };

//# sourceMappingURL=atomic-ipx-result-link.js.map