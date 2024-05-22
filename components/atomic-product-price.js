import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { P as ProductContext } from './product-template-decorators.js';
import { d as defineCustomElement$4 } from './atomic-component-error2.js';
import { d as defineCustomElement$3 } from './atomic-format-currency2.js';
import { d as defineCustomElement$2 } from './atomic-product-numeric-field-value2.js';

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
const AtomicProductPrice$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductPrice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The currency to use in currency formatting. Allowed values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
         */
        this.currency = 'USD';
        this.currency = 'USD';
    }
    render() {
        var _a, _b, _c, _d;
        const hasPromotionalPrice = ((_a = this.product) === null || _a === void 0 ? void 0 : _a.ec_promo_price) !== undefined &&
            ((_b = this.product) === null || _b === void 0 ? void 0 : _b.ec_price) !== undefined &&
            ((_c = this.product) === null || _c === void 0 ? void 0 : _c.ec_promo_price) < ((_d = this.product) === null || _d === void 0 ? void 0 : _d.ec_price);
        return (h("div", { key: 'd125ecc5fb6991e60bb102c1a94a6bef568ac7b1' }, h("atomic-product-numeric-field-value", { key: '2a0d0b6dc8701bdd942b27480c898e6a73118d1f', class: `mx-1 ${hasPromotionalPrice && 'text-error'}`, field: hasPromotionalPrice ? 'ec_promo_price' : 'ec_price' }, h("atomic-format-currency", { key: 'cb7fbaca580389e498c23cf9737d294e1d7cfa56', currency: this.currency })), hasPromotionalPrice && (h("atomic-product-numeric-field-value", { key: 'accf8b1444e0428a0fff4ba6cb1934769a00cc69', class: "mx-1 text-xl line-through", field: "ec_price" }, h("atomic-format-currency", { key: '3eaa7998168872f16ec998087265b4acfe605e04', currency: this.currency })))));
    }
}, [0, "atomic-product-price", {
        "currency": [513]
    }]);
__decorate([
    InitializeBindings()
], AtomicProductPrice$1.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductPrice$1.prototype, "product", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-price", "atomic-component-error", "atomic-format-currency", "atomic-product-numeric-field-value"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-price":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductPrice$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-format-currency":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-product-numeric-field-value":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicProductPrice = AtomicProductPrice$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductPrice, defineCustomElement };

//# sourceMappingURL=atomic-product-price.js.map