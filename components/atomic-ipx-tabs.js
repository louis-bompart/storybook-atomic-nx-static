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
const AtomicIPXTabs = /*@__PURE__*/ proxyCustomElement(class AtomicIPXTabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.error = undefined;
    }
    render() {
        return (h("tab-bar", { key: 'd88ac185c99c249b618ef2fc3896e4b7463bb0a3' }, h("slot", { key: 'b123a76ef8ea47b8a85e9774fd2379f72c7b87cf' })));
    }
}, [4, "atomic-ipx-tabs", {
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-ipx-tabs", "atomic-component-error", "atomic-focus-trap", "atomic-icon", "tab-bar", "tab-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-ipx-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicIPXTabs);
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

const AtomicIpxTabs = AtomicIPXTabs;
const defineCustomElement = defineCustomElement$1;

export { AtomicIpxTabs, defineCustomElement };

//# sourceMappingURL=atomic-ipx-tabs.js.map