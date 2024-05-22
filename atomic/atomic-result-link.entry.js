import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { c as isUndefined } from './bueno.esm-38a5b490.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import { a as buildStringTemplateFromResult } from './result-utils-ac9aa938.js';
import { g as getDefaultSlotFromHost, a as getAttributesFromLinkSlot } from './attributes-slot-fda20590.js';
import { L as LinkWithItemAnalytics } from './item-link-6991cf67.js';
import { R as ResultContext, I as InteractiveResultContext } from './result-template-decorators-7958bada.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './headless.esm-bdb53e72.js';
import './xss-utils-3bfd8d0c.js';
import './item-decorators-50bb80ae.js';

const atomicResultLinkCss = "atomic-result-link a{color:var(--atomic-on-background)}atomic-result-link a:hover,atomic-result-link.js-focus-visible a.focus-visible,.js-focus-visible atomic-result-link a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:hover,atomic-result-link a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:focus{outline:none}atomic-result-link a:visited{color:var(--atomic-visited)}";

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
const AtomicResultLink = class {
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
            ? this.result.clickUri
            : buildStringTemplateFromResult(this.hrefTemplate, this.result, this.bindings);
        return (h(LinkWithItemAnalytics, { key: 'ecf5fbca79d03c3a0483857f741299b367b98779', href: href, onSelect: () => this.interactiveResult.select(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (h("slot", null)) : (h("atomic-result-text", { field: "title", default: "no-title" }))));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultLink.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultLink.prototype, "result", void 0);
__decorate([
    InteractiveResultContext()
], AtomicResultLink.prototype, "interactiveResult", void 0);
AtomicResultLink.style = atomicResultLinkCss;

export { AtomicResultLink as atomic_result_link };

//# sourceMappingURL=atomic-result-link.entry.js.map