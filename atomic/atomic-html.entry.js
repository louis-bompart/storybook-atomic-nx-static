import { r as registerInstance, h } from './index-53978573.js';
import { D as DOMPurify } from './utils-8200d0ae.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import './_commonjsHelpers-1a56c7bc.js';
import './event-utils-8de63ec3.js';

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
const AtomicHtml = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.value = undefined;
        this.sanitize = true;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return (h("span", { key: '258220a290bfd439aeac4b754f3115460fc13862', innerHTML: this.sanitize ? DOMPurify.sanitize(this.value) : this.value }));
    }
};
__decorate([
    InitializeBindings()
], AtomicHtml.prototype, "bindings", void 0);

export { AtomicHtml as atomic_html };

//# sourceMappingURL=atomic-html.entry.js.map