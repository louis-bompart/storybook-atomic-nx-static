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
const AtomicInsightTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
    }
    render() {
        return (h("tab-bar", { key: '749d53affdd216538df215ef03fdc9915abf6ac3' }, h("slot", { key: '954728b66eca460586fbcec508fc0ca86230a62a' })));
    }
};
__decorate([
    InitializeBindings()
], AtomicInsightTabs.prototype, "bindings", void 0);

export { AtomicInsightTabs as atomic_insight_tabs };

//# sourceMappingURL=atomic-insight-tabs.entry.js.map