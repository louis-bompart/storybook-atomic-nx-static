import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { c as isUndefined } from './bueno.esm-9a075e67.js';
import { F as Fye } from './headless.esm-88bad35d.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { a as buildStringTemplateFromResult } from './result-utils-a899cfd0.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot-fda20590.js';
import { L as LinkWithItemAnalytics } from './item-link-e997e301.js';
import { R as ResultContext, I as InteractiveResultContext } from './result-template-decorators-13a4dae6.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './xss-utils-3bfd8d0c.js';
import './item-decorators-79369ad9.js';

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
const AtomicIPXResultLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(LinkWithItemAnalytics, { key: '51d43e03ff26bd847c7ad63666e6b4e0d8e434fe', href: href, onSelect: () => this.onSelect(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (h("slot", null)) : (h("atomic-result-text", { field: "title", default: "no-title" }))));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicIPXResultLink.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicIPXResultLink.prototype, "result", void 0);
__decorate([
    InteractiveResultContext()
], AtomicIPXResultLink.prototype, "interactiveResult", void 0);
AtomicIPXResultLink.style = AtomicIpxResultLinkStyle0;

export { AtomicIPXResultLink as atomic_ipx_result_link };

//# sourceMappingURL=atomic-ipx-result-link.entry.js.map