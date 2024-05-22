import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as dispatchNumberFormatEvent } from './format-common.js';
import { d as defineCustomElement$1 } from './atomic-component-error2.js';

const AtomicFormatCurrency = /*@__PURE__*/ proxyCustomElement(class AtomicFormatCurrency extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'currency',
                currency: this.currency,
            });
        };
        this.error = undefined;
        this.currency = undefined;
    }
    componentWillLoad() {
        try {
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: 'eaa8f36e17d6c352522a3720e21d48e3cab8e9db', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-format-currency", {
        "currency": [513],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-format-currency", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-format-currency":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFormatCurrency);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicFormatCurrency as A, defineCustomElement as d };

//# sourceMappingURL=atomic-format-currency2.js.map