import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-24b58382.js';
import { g as getStringValueFromResultOrNull } from './result-utils-a899cfd0.js';
import { R as ResultContext } from './result-template-decorators-13a4dae6.js';
import './event-utils-8de63ec3.js';
import './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';
import './headless.esm-88bad35d.js';
import './item-decorators-79369ad9.js';

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