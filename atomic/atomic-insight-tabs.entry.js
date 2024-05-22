import { r as registerInstance, h } from './index-53978573.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import './event-utils-8de63ec3.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';

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
        registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (h("tab-bar", { key: '19cff92f59d5bd1d242ae552f1fcf05c4c9643ca' }, h("slot", { key: '0b9d9a3d8b39be8e66877577d6c2987c6ad20923' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicInsightTabs.prototype, "bindings", void 0);

export { AtomicInsightTabs as atomic_insight_tabs };

//# sourceMappingURL=atomic-insight-tabs.entry.js.map