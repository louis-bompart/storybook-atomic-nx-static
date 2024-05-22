import { r as registerInstance } from './index-53978573.js';
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
const AtomicCommerceText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.strings = {
            value: () => this.bindings.i18n.t(this.value, {
                count: this.count,
            }),
        };
        this.error = undefined;
        this.value = undefined;
        this.count = undefined;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return this.strings.value();
    }
};
__decorate([
    InitializeBindings()
], AtomicCommerceText.prototype, "bindings", void 0);

export { AtomicCommerceText as atomic_commerce_text };

//# sourceMappingURL=atomic-commerce-text.entry.js.map