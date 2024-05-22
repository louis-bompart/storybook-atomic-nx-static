import { proxyCustomElement, HTMLElement, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { p as parseAssetURL, a as purify } from './utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { d as defineCustomElement$1 } from './atomic-component-error2.js';

const atomicIconCss = "atomic-icon{display:inline-block;fill:currentColor;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon{height:auto}}atomic-icon>svg{width:100%;max-height:100%;aspect-ratio:1 / 1;height:auto}@supports not (aspect-ratio: 1 / 1){atomic-icon>svg{height:auto}}";
const AtomicIconStyle0 = atomicIconCss;

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
class IconFetchError extends Error {
    static fromStatusCode(url, statusCode, statusText) {
        return new IconFetchError(url, `status code ${statusCode} (${statusText})`);
    }
    static fromError(url, error) {
        return new IconFetchError(url, 'an error', error);
    }
    constructor(url, errorMessage, errorObject) {
        super(`Could not fetch icon from ${url}, got ${errorMessage}.`);
        this.url = url;
        this.errorObject = errorObject;
    }
}
const AtomicIcon = /*@__PURE__*/ proxyCustomElement(class AtomicIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.svg = null;
        this.icon = undefined;
        this.svg = null;
    }
    async fetchIcon(url) {
        try {
            const response = await fetch(url).catch((e) => {
                throw IconFetchError.fromError(url, e);
            });
            if (response.status !== 200 && response.status !== 304) {
                throw IconFetchError.fromStatusCode(url, response.status, response.statusText);
            }
            return await response.text();
        }
        catch (e) {
            this.error = e;
            forceUpdate(this);
            return null;
        }
    }
    validateSVG(svg) {
        if (!/^<svg[\s\S]+<\/svg>$/gm.test(svg)) {
            this.bindings.engine.logger.warn('The inline "icon" prop is not an svg element. You may encounter rendering issues.', this.icon);
        }
    }
    async getIcon() {
        const url = parseAssetURL(this.icon, this.bindings.store.getIconAssetsPath());
        const svg = url ? await this.fetchIcon(url) : this.icon;
        if (svg) {
            this.validateSVG(svg);
        }
        const sanitizedSvg = svg
            ? purify.exports.sanitize(svg, {
                USE_PROFILES: { svg: true, svgFilters: true },
            })
            : null;
        return sanitizedSvg;
    }
    async updateIcon() {
        const svgPromise = this.getIcon();
        this.svg = await svgPromise;
    }
    initialize() {
        this.updateIcon();
    }
    render() {
        if (this.error) {
            console.error(this.error, this.host);
            this.host.remove();
            return;
        }
        return h(Host, { innerHTML: this.svg, "aria-hidden": "true" });
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return this; }
    static get watchers() { return {
        "icon": ["updateIcon"]
    }; }
    static get style() { return AtomicIconStyle0; }
}, [0, "atomic-icon", {
        "icon": [513],
        "svg": [32]
    }, undefined, {
        "icon": ["updateIcon"]
    }]);
__decorate([
    InitializeBindings()
], AtomicIcon.prototype, "bindings", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-icon", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicIcon);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicIcon as A, defineCustomElement as d };

//# sourceMappingURL=atomic-icon2.js.map