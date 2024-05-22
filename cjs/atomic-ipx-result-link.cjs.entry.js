'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
const resultUtils = require('./result-utils-9f11ee00.js');
const attributesSlot = require('./attributes-slot-90553c2d.js');
const itemLink = require('./item-link-96e6faf5.js');
const resultTemplateDecorators = require('./result-template-decorators-7ce75291.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./xss-utils-185a1c77.js');
require('./item-decorators-1f104375.js');

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
        index.registerInstance(this, hostRef);
        this.hrefTemplate = undefined;
    }
    initialize() {
        this.host.dispatchEvent(eventUtils.buildCustomEvent('atomic/resolveStopPropagation', (stopPropagation) => {
            this.stopPropagation = stopPropagation;
        }));
        this.actionsHistoryActions = headless_esm.Fye(this.bindings.engine);
    }
    connectedCallback() {
        const slotName = 'attributes';
        this.hasDefaultSlot = !!attributesSlot.getDefaultSlotFromHost(this.host);
        this.linkAttributes = attributesSlot.getAttributesFromLinkSlot(this.host, slotName);
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
        const href = bueno_esm.isUndefined(this.hrefTemplate)
            ? this.result.clickUri
            : resultUtils.buildStringTemplateFromResult(this.hrefTemplate, this.result, this.bindings);
        return (index.h(itemLink.LinkWithItemAnalytics, { key: '51d43e03ff26bd847c7ad63666e6b4e0d8e434fe', href: href, onSelect: () => this.onSelect(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, stopPropagation: this.stopPropagation }, this.hasDefaultSlot ? (index.h("slot", null)) : (index.h("atomic-result-text", { field: "title", default: "no-title" }))));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicIPXResultLink.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicIPXResultLink.prototype, "result", void 0);
__decorate([
    resultTemplateDecorators.InteractiveResultContext()
], AtomicIPXResultLink.prototype, "interactiveResult", void 0);
AtomicIPXResultLink.style = AtomicIpxResultLinkStyle0;

exports.atomic_ipx_result_link = AtomicIPXResultLink;

//# sourceMappingURL=atomic-ipx-result-link.cjs.entry.js.map