'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const itemLink = require('./item-link-96e6faf5.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./xss-utils-185a1c77.js');

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
        index.registerInstance(this, hostRef);
        this.selectSource = index.createEvent(this, "selectSource", 7);
        this.beginDelayedSelectSource = index.createEvent(this, "beginDelayedSelectSource", 7);
        this.cancelPendingSelectSource = index.createEvent(this, "cancelPendingSelectSource", 7);
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
        return (index.h(index.Host, { key: '1309a3bd9ff80367985a6a53b35356bcd06e9794' }, index.h(itemLink.LinkWithItemAnalytics, { key: 'ba24fd24129377eb2ef2c42eff39a143a21be358', title: this.source.clickUri, href: this.source.clickUri, className: "block truncate", part: "source-url", attributes: this.anchorAttributes, onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, this.source.clickUri), index.h(itemLink.LinkWithItemAnalytics, { key: '5bb1717963b9055f5c4289fcf095913ee1cda9bb', title: this.source.title, href: this.source.clickUri, attributes: this.anchorAttributes, className: "block", part: "source-title", onSelect: () => this.selectSource.emit(), onBeginDelayedSelect: () => this.beginDelayedSelectSource.emit(), onCancelPendingSelect: () => this.cancelPendingSelectSource.emit() }, index.h("atomic-result-text", { field: "title", default: "no-title", key: this.source.uniqueId }))));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicSmartSnippetSource.prototype, "bindings", void 0);

exports.atomic_smart_snippet_source = AtomicSmartSnippetSource;

//# sourceMappingURL=atomic-smart-snippet-source.cjs.entry.js.map