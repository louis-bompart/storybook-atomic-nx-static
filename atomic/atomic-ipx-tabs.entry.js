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
const AtomicIPXTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (h("tab-bar", { key: '83d9713eeee47db572c500caaa2f5074057dd48c' }, h("slot", { key: '68d35c695335f00dbaee54afbee43bf74c0f2294' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);

export { AtomicIPXTabs as atomic_ipx_tabs };

//# sourceMappingURL=atomic-ipx-tabs.entry.js.map