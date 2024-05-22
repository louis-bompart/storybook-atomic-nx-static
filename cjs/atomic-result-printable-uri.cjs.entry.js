'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const arrowRight = require('./arrow-right-104a0618.js');
const accessibilityUtils = require('./accessibility-utils-d00e9462.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const utils = require('./utils-b609c39e.js');
const attributesSlot = require('./attributes-slot-90553c2d.js');
const itemLink = require('./item-link-96e6faf5.js');
const resultTemplateDecorators = require('./result-template-decorators-a55bdcb7.js');
require('./event-utils-9bfcf3c5.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./xss-utils-185a1c77.js');
require('./item-decorators-7bbc4b3f.js');

const atomicResultPrintableUriCss = "atomic-result-printable-uri{max-width:100%;word-break:break-word}atomic-result-printable-uri a,atomic-result-printable-uri button{color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri.js-focus-visible a.focus-visible,.js-focus-visible atomic-result-printable-uri a.focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri.js-focus-visible button.focus-visible,.js-focus-visible atomic-result-printable-uri button.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a:focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:focus,atomic-result-printable-uri button:focus{outline:none}atomic-result-printable-uri a:visited,atomic-result-printable-uri button:visited{color:var(--atomic-visited)}atomic-result-printable-uri ul{display:flex;flex-wrap:wrap}atomic-result-printable-uri li{display:inline-flex;align-items:center;max-width:100%}atomic-result-printable-uri li a{display:inline-block;vertical-align:middle;max-width:100%;text-overflow:ellipsis;overflow:hidden}atomic-result-printable-uri li{white-space:nowrap}atomic-result-printable-uri li:last-child{white-space:normal}atomic-result-printable-uri li:last-child::after{content:none}atomic-result-printable-uri li .result-printable-uri-separator{display:inline-block;margin:0 0.5rem;vertical-align:middle;width:0.75rem;height:0.75rem;color:var(--atomic-neutral-dark)}";
const AtomicResultPrintableUriStyle0 = atomicResultPrintableUriCss;

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
const AtomicResultPrintableUri = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.listExpanded = false;
        /**
         * The maximum number of Uri parts to display. This has to be over the minimum of `3` in order to be effective. Putting `Infinity` will disable the ellipsis.
         */
        this.maxNumberOfParts = 5;
        this.listExpanded = false;
        this.error = undefined;
        this.maxNumberOfParts = 5;
    }
    get focusTarget() {
        if (!this.expandedPartFocus) {
            this.expandedPartFocus = new accessibilityUtils.FocusTargetController(this);
        }
        return this.expandedPartFocus;
    }
    connectedCallback() {
        try {
            new bueno_esm.Schema({
                maxNumberOfParts: new bueno_esm.NumberValue({ min: 3 }),
            }).validate({ maxNumberOfParts: this.maxNumberOfParts });
        }
        catch (error) {
            this.error = error;
        }
        const slotName = 'attributes';
        this.linkAttributes = attributesSlot.getAttributesFromLinkSlot(this.host, slotName);
    }
    initialize() {
        this.interactiveResult = headless_esm.wk(this.bindings.engine, {
            options: { result: this.result },
        });
    }
    getIndexOfEllipsis(parentsCount) {
        const valuesToHide = Math.max(2, parentsCount - this.maxNumberOfParts);
        const valuesToShowBeforeEllipsis = parentsCount - valuesToHide - 1;
        return valuesToShowBeforeEllipsis;
    }
    renderEllipsis() {
        return (index.h("li", null, index.h("button", { "aria-label": this.bindings.i18n.t('collapsed-uri-parts'), onClick: (e) => {
                e.stopPropagation();
                this.focusTarget.focusOnNextTarget();
                this.listExpanded = true;
            } }, "..."), this.renderSeparator()));
    }
    get allParents() {
        const parentsXml = utils.parseXML(`${this.result.raw.parents}`);
        const parents = Array.from(parentsXml.getElementsByTagName('parent'));
        const ellipsisIndex = this.getIndexOfEllipsis(parents.length);
        return parents.map((parent, i) => {
            const name = parent.getAttribute('name');
            const uri = parent.getAttribute('uri');
            return (index.h("li", null, this.renderLink(name, uri, i === ellipsisIndex), i === parents.length - 1 ? null : this.renderSeparator()));
        });
    }
    renderSeparator() {
        return (index.h("atomic-icon", { class: "result-printable-uri-separator", icon: arrowRight.Arrow, role: "separator" }));
    }
    renderParents() {
        const parents = this.allParents;
        if (this.listExpanded || parents.length <= this.maxNumberOfParts) {
            return parents;
        }
        return [
            parents.slice(0, this.getIndexOfEllipsis(parents.length)),
            this.renderEllipsis(),
            parents.slice(-1),
        ];
    }
    renderLink(content, uri, shouldSetTarget) {
        return (index.h(itemLink.LinkWithItemAnalytics, { href: uri, title: typeof content === 'string' ? content : undefined, onSelect: () => this.interactiveResult.select(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, ref: shouldSetTarget
                ? (el) => this.focusTarget.setTarget(el)
                : undefined }, content));
    }
    render() {
        const parents = this.renderParents();
        if (parents.length) {
            return (index.h("ul", { "aria-label": this.bindings.i18n.t('printable-uri') }, parents));
        }
        return this.renderLink(index.h("atomic-result-text", { field: "printableUri" }), this.result.clickUri, false);
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultPrintableUri.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultPrintableUri.prototype, "result", void 0);
AtomicResultPrintableUri.style = AtomicResultPrintableUriStyle0;

exports.atomic_result_printable_uri = AtomicResultPrintableUri;

//# sourceMappingURL=atomic-result-printable-uri.cjs.entry.js.map