import { r as registerInstance, j as createEvent, h, a as Host, g as getElement } from './index-53978573.js';
import { q as getFocusedElement, u as isAncestorOf } from './utils-8200d0ae.js';
import './_commonjsHelpers-1a56c7bc.js';

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
        return h(Host, { key: '2233c1ff6ced6fbaed93a5dd71b4bf0ee6b186b5', style: { display: 'contents' } });
    }
    get host() { return getElement(this); }
};

export { AtomicFocusDetector as atomic_focus_detector };

//# sourceMappingURL=atomic-focus-detector.entry.js.map