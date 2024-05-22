import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { S as Schema, N as NumberValue } from './bueno.esm-9a075e67.js';
import { w as wk } from './headless.esm-88bad35d.js';
import { A as Arrow } from './arrow-right-6b97b365.js';
import { F as FocusTargetController } from './accessibility-utils-95c56e98.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { p as parseXML } from './utils-af246396.js';
import { a as getAttributesFromLinkSlot } from './attributes-slot-fda20590.js';
import { L as LinkWithItemAnalytics } from './item-link-e997e301.js';
import { R as ResultContext } from './result-template-decorators-4dbe86bc.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';
import './xss-utils-3bfd8d0c.js';
import './item-decorators-d183824b.js';

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
        registerInstance(this, hostRef);
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
            this.expandedPartFocus = new FocusTargetController(this);
        }
        return this.expandedPartFocus;
    }
    connectedCallback() {
        try {
            new Schema({
                maxNumberOfParts: new NumberValue({ min: 3 }),
            }).validate({ maxNumberOfParts: this.maxNumberOfParts });
        }
        catch (error) {
            this.error = error;
        }
        const slotName = 'attributes';
        this.linkAttributes = getAttributesFromLinkSlot(this.host, slotName);
    }
    initialize() {
        this.interactiveResult = wk(this.bindings.engine, {
            options: { result: this.result },
        });
    }
    getIndexOfEllipsis(parentsCount) {
        const valuesToHide = Math.max(2, parentsCount - this.maxNumberOfParts);
        const valuesToShowBeforeEllipsis = parentsCount - valuesToHide - 1;
        return valuesToShowBeforeEllipsis;
    }
    renderEllipsis() {
        return (h("li", null, h("button", { "aria-label": this.bindings.i18n.t('collapsed-uri-parts'), onClick: (e) => {
                e.stopPropagation();
                this.focusTarget.focusOnNextTarget();
                this.listExpanded = true;
            } }, "..."), this.renderSeparator()));
    }
    get allParents() {
        const parentsXml = parseXML(`${this.result.raw.parents}`);
        const parents = Array.from(parentsXml.getElementsByTagName('parent'));
        const ellipsisIndex = this.getIndexOfEllipsis(parents.length);
        return parents.map((parent, i) => {
            const name = parent.getAttribute('name');
            const uri = parent.getAttribute('uri');
            return (h("li", null, this.renderLink(name, uri, i === ellipsisIndex), i === parents.length - 1 ? null : this.renderSeparator()));
        });
    }
    renderSeparator() {
        return (h("atomic-icon", { class: "result-printable-uri-separator", icon: Arrow, role: "separator" }));
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
        return (h(LinkWithItemAnalytics, { href: uri, title: typeof content === 'string' ? content : undefined, onSelect: () => this.interactiveResult.select(), onBeginDelayedSelect: () => this.interactiveResult.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveResult.cancelPendingSelect(), attributes: this.linkAttributes, ref: shouldSetTarget
                ? (el) => this.focusTarget.setTarget(el)
                : undefined }, content));
    }
    render() {
        const parents = this.renderParents();
        if (parents.length) {
            return (h("ul", { "aria-label": this.bindings.i18n.t('printable-uri') }, parents));
        }
        return this.renderLink(h("atomic-result-text", { field: "printableUri" }), this.result.clickUri, false);
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultPrintableUri.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultPrintableUri.prototype, "result", void 0);
AtomicResultPrintableUri.style = AtomicResultPrintableUriStyle0;

export { AtomicResultPrintableUri as atomic_result_printable_uri };

//# sourceMappingURL=atomic-result-printable-uri.entry.js.map