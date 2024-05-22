'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-93ea935e.js');
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
        return (index.h("tab-bar", { key: 'd88ac185c99c249b618ef2fc3896e4b7463bb0a3' }, index.h("slot", { key: 'b123a76ef8ea47b8a85e9774fd2379f72c7b87cf' })));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);

exports.atomic_ipx_tabs = AtomicIPXTabs;

//# sourceMappingURL=atomic-ipx-tabs.cjs.entry.js.map