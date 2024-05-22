import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { d as defineCustomElement$4 } from './atomic-component-error2.js';
import { d as defineCustomElement$3 } from './atomic-result-text2.js';
import { d as defineCustomElement$2 } from './atomic-text2.js';

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
const AtomicSmartSnippetSource$1 = /*@__PURE__*/ proxyCustomElement(class AtomicSmartSnippetSource extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.selectSource = createEvent(this, "selectSource", 7);
        this.beginDelayedSelectSource = createEvent(this, "beginDelayedSelectSource", 7);
        this.cancelPendingSelectSource = createEvent(this, "cancelPendingSelectSource", 7);
        this.source = undefined;
        this.anchorAttributes = undefined;
        this.error = undefined;
    }
    resolveResult(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.source) {
            event.detail(this.source);
        }
    }
    render() {
        return (h(Host, { key: '1309a3bd9ff80367985a6a53b35356bcd06e9794' }, h(LinkWithItemAnalytics, { key: 'ba24fd24129377eb2ef2c42eff39a143a21be358', title: this.source.clickUri, href: this.source.clickUri, className: "block truncate", part: "source-url", attributes: this.anchorAttributes, onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, this.source.clickUri), h(LinkWithItemAnalytics, { key: '5bb1717963b9055f5c4289fcf095913ee1cda9bb', title: this.source.title, href: this.source.clickUri, attributes: this.anchorAttributes, className: "block", part: "source-title", onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, h("atomic-result-text", { field: "title", default: "no-title", key: this.source.uniqueId }))));
    }
}, [0, "atomic-smart-snippet-source", {
        "source": [1040],
        "anchorAttributes": [16],
        "error": [32]
    }, [[0, "atomic/resolveResult", "resolveResult"]]]);
__decorate([
    InitializeBindings()
], AtomicSmartSnippetSource$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-smart-snippet-source", "atomic-component-error", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-smart-snippet-source":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSmartSnippetSource$1);
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

const AtomicSmartSnippetSource = AtomicSmartSnippetSource$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicSmartSnippetSource, defineCustomElement };

//# sourceMappingURL=atomic-smart-snippet-source.js.map