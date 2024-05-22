import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as dispatchNumberFormatEvent } from './format-common.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';

const AtomicFormatNumber$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFormatNumber extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                minimumIntegerDigits: this.minimumIntegerDigits,
                minimumFractionDigits: this.minimumFractionDigits,
                maximumFractionDigits: this.maximumFractionDigits,
                minimumSignificantDigits: this.minimumSignificantDigits,
                maximumSignificantDigits: this.maximumSignificantDigits,
            });
        };
        this.error = undefined;
        this.minimumIntegerDigits = undefined;
        this.minimumFractionDigits = undefined;
        this.maximumFractionDigits = undefined;
        this.minimumSignificantDigits = undefined;
        this.maximumSignificantDigits = undefined;
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
            return (h("atomic-component-error", { key: '52b7dc825f5f4beb7e6e018bc65b124a7d75783c', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-format-number", {
        "minimumIntegerDigits": [514, "minimum-integer-digits"],
        "minimumFractionDigits": [514, "minimum-fraction-digits"],
        "maximumFractionDigits": [514, "maximum-fraction-digits"],
        "minimumSignificantDigits": [514, "minimum-significant-digits"],
        "maximumSignificantDigits": [514, "maximum-significant-digits"],
        "error": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-format-number", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-format-number":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFormatNumber$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicFormatNumber = AtomicFormatNumber$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFormatNumber, defineCustomElement };

//# sourceMappingURL=atomic-format-number.js.map