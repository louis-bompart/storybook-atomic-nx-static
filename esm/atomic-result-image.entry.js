import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { o as ow } from './headless.esm-88bad35d.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { f as filterProtocol } from './xss-utils-3bfd8d0c.js';
import { R as ResultContext } from './result-template-decorators-4dbe86bc.js';
import './event-utils-8de63ec3.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-decorators-d183824b.js';

const atomicResultImageCss = "atomic-result-image{display:grid;place-items:center;grid-template-rows:100%;width:100%;height:100%}atomic-result-image img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}";
const AtomicResultImageStyle0 = atomicResultImageCss;

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
const AtomicResultImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.useFallback = false;
        this.useFallback = false;
        this.field = undefined;
        this.fallback = undefined;
    }
    get url() {
        const value = ow.getResultProperty(this.result, this.field);
        return Array.isArray(value) ? value[0] : value;
    }
    logWarning(message) {
        this.bindings.engine.logger.warn(message, this.host);
    }
    handleImageError() {
        const message = `The image url "${this.url}" is not valid or could not be loaded. You might want to add a "fallback" property.`;
        this.fallback ? (this.useFallback = true) : this.logWarning(message);
    }
    handleMissingFallback(message) {
        if (!this.fallback) {
            this.logWarning(message);
            this.host.remove();
            return null;
        }
        return this.fallback;
    }
    validateUrl(url) {
        if (!url) {
            const message = `"${this.field}" is missing. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        if (typeof url !== 'string') {
            const message = `Expected "${this.field}" to be a text field. Please review your indexation. You might want to add a "fallback" property.`;
            return this.handleMissingFallback(message);
        }
        return url;
    }
    render() {
        let url = this.useFallback ? this.fallback : this.url;
        if (!this.useFallback) {
            url = this.validateUrl(url);
            if (!url) {
                return;
            }
        }
        return (h("img", { alt: `${this.field} image`, src: filterProtocol(url), onError: () => this.handleImageError(), loading: "lazy" }));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultImage.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultImage.prototype, "result", void 0);
AtomicResultImage.style = AtomicResultImageStyle0;

export { AtomicResultImage as atomic_result_image };

//# sourceMappingURL=atomic-result-image.entry.js.map