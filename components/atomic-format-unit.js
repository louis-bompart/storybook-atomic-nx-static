import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as dispatchNumberFormatEvent } from './format-common.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';

const AtomicFormatUnit$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFormatUnit extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * The unit formatting style to use in unit formatting.
         *
         * * "long" (e.g., 16 litres)
         * * "short" (e.g., 16 l)
         * * "narrow" (e.g., 16l)
         */
        this.unitDisplay = 'short';
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'unit',
                unit: this.unit,
                unitDisplay: this.unitDisplay,
            });
        };
        this.error = undefined;
        this.unit = undefined;
        this.unitDisplay = 'short';
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
            return (h("atomic-component-error", { key: '99a7094efb0f649e48bfcff7d5761d4d81d8e7a9', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-format-unit", {
        "unit": [513],
        "unitDisplay": [513, "unit-display"],
        "error": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-format-unit", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-format-unit":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFormatUnit$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicFormatUnit = AtomicFormatUnit$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFormatUnit, defineCustomElement };

//# sourceMappingURL=atomic-format-unit.js.map