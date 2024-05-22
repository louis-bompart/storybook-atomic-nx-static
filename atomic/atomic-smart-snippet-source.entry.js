import { r as registerInstance, j as createEvent, h, a as Host } from './index-53978573.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import { L as LinkWithItemAnalytics } from './item-link-6991cf67.js';
import './event-utils-8de63ec3.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './xss-utils-3bfd8d0c.js';

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
const AtomicSmartSnippetSource = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
__decorate([
    InitializeBindings()
], AtomicSmartSnippetSource.prototype, "bindings", void 0);

export { AtomicSmartSnippetSource as atomic_smart_snippet_source };

//# sourceMappingURL=atomic-smart-snippet-source.entry.js.map