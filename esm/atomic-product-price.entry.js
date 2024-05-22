import { r as registerInstance, h } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { P as ProductContext } from './product-template-decorators-1c948806.js';
import './event-utils-8de63ec3.js';
import './utils-af246396.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-decorators-d183824b.js';

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
const AtomicProductPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
__decorate([
    InitializeBindings()
], AtomicProductPrice.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductPrice.prototype, "product", void 0);

export { AtomicProductPrice as atomic_product_price };

//# sourceMappingURL=atomic-product-price.entry.js.map