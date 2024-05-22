import { r as registerInstance, d as createEvent, h, H as Host } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { L as LinkWithItemAnalytics } from './item-link-e997e301.js';
import './event-utils-8de63ec3.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
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
        return (h(Host, { key: 'f39870d9fb73f730ca505be1b27aa853c053e89b' }, h(LinkWithItemAnalytics, { key: '9a60314204a2d523bc9e880aead3180c910f4a8b', title: this.source.clickUri, href: this.source.clickUri, className: "block truncate", part: "source-url", attributes: this.anchorAttributes, onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, this.source.clickUri), h(LinkWithItemAnalytics, { key: 'ba85b4a8a8320074d0fb0649883b13230fd26170', title: this.source.title, href: this.source.clickUri, attributes: this.anchorAttributes, className: "block", part: "source-title", onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, h("atomic-result-text", { field: "title", default: "no-title", key: this.source.uniqueId }))));
    }
};
__decorate([
    InitializeBindings()
], AtomicSmartSnippetSource.prototype, "bindings", void 0);

export { AtomicSmartSnippetSource as atomic_smart_snippet_source };

//# sourceMappingURL=atomic-smart-snippet-source.entry.js.map