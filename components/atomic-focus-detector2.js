import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as isAncestorOf, j as getFocusedElement } from './utils.js';

const AtomicFocusDetector = /*@__PURE__*/ proxyCustomElement(class AtomicFocusDetector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.focusEnter = createEvent(this, "focusEnter", 7);
        this.focusExit = createEvent(this, "focusExit", 7);
        this.focusWasContained = this.containsFocus;
    }
    get containsFocus() {
        const focusedElement = getFocusedElement();
        return !!focusedElement && isAncestorOf(this.host, focusedElement);
    }
    onFocusIn() {
        this.onFocusChanged();
    }
    onFocusOut() {
        this.onFocusChanged();
    }
    onFocusChanged() {
        const containsFocus = this.containsFocus;
        if (containsFocus === this.focusWasContained) {
            return;
        }
        this.focusWasContained = containsFocus;
        containsFocus ? this.focusEnter.emit() : this.focusExit.emit();
    }
    render() {
        return h(Host, { key: '2233c1ff6ced6fbaed93a5dd71b4bf0ee6b186b5', style: { display: 'contents' } });
    }
    get host() { return this; }
}, [0, "atomic-focus-detector", undefined, [[4, "focusin", "onFocusIn"], [4, "focusout", "onFocusOut"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-focus-detector"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-focus-detector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFocusDetector);
            }
            break;
    } });
}

export { AtomicFocusDetector as A, defineCustomElement as d };

//# sourceMappingURL=atomic-focus-detector2.js.map