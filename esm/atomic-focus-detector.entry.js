import { r as registerInstance, d as createEvent, h, H as Host, g as getElement } from './index-c045ad7c.js';
import { q as isAncestorOf, u as getFocusedElement } from './utils-bc6a079b.js';
import './_commonjsHelpers-c9e3b764.js';

const AtomicFocusDetector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h(Host, { key: 'ac90a651c69561667a1583662fb2b007f96a2084', style: { display: 'contents' } });
    }
    get host() { return getElement(this); }
};

export { AtomicFocusDetector as atomic_focus_detector };

//# sourceMappingURL=atomic-focus-detector.entry.js.map