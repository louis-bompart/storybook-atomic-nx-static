'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const productTemplateDecorators = require('./product-template-decorators-7a6b2044.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./item-decorators-7bbc4b3f.js');

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
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'd125ecc5fb6991e60bb102c1a94a6bef568ac7b1' }, index.h("atomic-product-numeric-field-value", { key: '2a0d0b6dc8701bdd942b27480c898e6a73118d1f', class: `mx-1 ${hasPromotionalPrice && 'text-error'}`, field: hasPromotionalPrice ? 'ec_promo_price' : 'ec_price' }, index.h("atomic-format-currency", { key: 'cb7fbaca580389e498c23cf9737d294e1d7cfa56', currency: this.currency })), hasPromotionalPrice && (index.h("atomic-product-numeric-field-value", { key: 'accf8b1444e0428a0fff4ba6cb1934769a00cc69', class: "mx-1 text-xl line-through", field: "ec_price" }, index.h("atomic-format-currency", { key: '3eaa7998168872f16ec998087265b4acfe605e04', currency: this.currency })))));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductPrice.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductPrice.prototype, "product", void 0);

exports.atomic_product_price = AtomicProductPrice;

//# sourceMappingURL=atomic-product-price.cjs.entry.js.map