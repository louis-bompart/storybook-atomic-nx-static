import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { d as defineCustomElement$6 } from './atomic-component-error2.js';
import { d as defineCustomElement$5 } from './atomic-focus-trap2.js';
import { d as defineCustomElement$4 } from './atomic-icon2.js';
import { d as defineCustomElement$3 } from './tab-bar2.js';
import { d as defineCustomElement$2 } from './tab-popover2.js';

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
const AtomicInsightTabs$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightTabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.error = undefined;
    }
    render() {
        return (h("tab-bar", { key: '19cff92f59d5bd1d242ae552f1fcf05c4c9643ca' }, h("slot", { key: '0b9d9a3d8b39be8e66877577d6c2987c6ad20923' })));
    }
}, [4, "atomic-insight-tabs", {
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicInsightTabs$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-tabs", "atomic-component-error", "atomic-focus-trap", "atomic-icon", "tab-bar", "tab-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightTabs$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atomic-focus-trap":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "tab-bar":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tab-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicInsightTabs = AtomicInsightTabs$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightTabs, defineCustomElement };

//# sourceMappingURL=atomic-insight-tabs.js.map