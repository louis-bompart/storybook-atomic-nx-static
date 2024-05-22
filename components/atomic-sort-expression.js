import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';

const AtomicSortExpression$1 = /*@__PURE__*/ proxyCustomElement(class AtomicSortExpression extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.label = undefined;
        this.expression = undefined;
    }
    render() {
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.host.closest(dropdownComponent)) {
            const error = new Error(`The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return (h("atomic-component-error", { key: 'b5b1efef9975af7505fdda9aa6c4d72a714de779', element: this.host, error: error }));
        }
    }
    get host() { return this; }
}, [0, "atomic-sort-expression", {
        "label": [513],
        "expression": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-sort-expression", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-sort-expression":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSortExpression$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicSortExpression = AtomicSortExpression$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicSortExpression, defineCustomElement };

//# sourceMappingURL=atomic-sort-expression.js.map