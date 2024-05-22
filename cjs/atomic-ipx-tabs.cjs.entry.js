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
const AtomicIPXTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (index.h("tab-bar", { key: '83d9713eeee47db572c500caaa2f5074057dd48c' }, index.h("slot", { key: '68d35c695335f00dbaee54afbee43bf74c0f2294' })));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);

exports.atomic_ipx_tabs = AtomicIPXTabs;

//# sourceMappingURL=atomic-ipx-tabs.cjs.entry.js.map