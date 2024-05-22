import { r as registerInstance, h } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import './event-utils-8de63ec3.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';

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
        return (h("tab-bar", { key: 'd88ac185c99c249b618ef2fc3896e4b7463bb0a3' }, h("slot", { key: 'b123a76ef8ea47b8a85e9774fd2379f72c7b87cf' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);

export { AtomicIPXTabs as atomic_ipx_tabs };

//# sourceMappingURL=atomic-ipx-tabs.entry.js.map