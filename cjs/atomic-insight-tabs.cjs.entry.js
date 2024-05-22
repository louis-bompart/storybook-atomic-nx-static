'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');

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
const AtomicInsightTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (index.h("tab-bar", { key: '19cff92f59d5bd1d242ae552f1fcf05c4c9643ca' }, index.h("slot", { key: '0b9d9a3d8b39be8e66877577d6c2987c6ad20923' })));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightTabs.prototype, "bindings", void 0);

exports.atomic_insight_tabs = AtomicInsightTabs;

//# sourceMappingURL=atomic-insight-tabs.cjs.entry.js.map