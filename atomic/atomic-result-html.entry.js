import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { I as InitializeBindings } from './initialization-utils-446eb31c.js';
import { g as getStringValueFromResultOrNull } from './result-utils-ac9aa938.js';
import { R as ResultContext } from './result-template-decorators-7958bada.js';
import './event-utils-8de63ec3.js';
import './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';
import './headless.esm-bdb53e72.js';
import './item-decorators-50bb80ae.js';

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
const AtomicResultHtml = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.field = undefined;
        this.sanitize = true;
    }
    render() {
        const resultValue = getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValue) {
            this.host.remove();
            return;
        }
        return (h("atomic-html", { value: resultValue, sanitize: this.sanitize }));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultHtml.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultHtml.prototype, "result", void 0);

export { AtomicResultHtml as atomic_result_html };

//# sourceMappingURL=atomic-result-html.entry.js.map