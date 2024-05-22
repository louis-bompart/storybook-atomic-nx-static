'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const utils = require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');

const AtomicFocusDetector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.focusEnter = index.createEvent(this, "focusEnter", 7);
        this.focusExit = index.createEvent(this, "focusExit", 7);
        this.focusWasContained = this.containsFocus;
    }
    get containsFocus() {
        const focusedElement = utils.getFocusedElement();
        return !!focusedElement && utils.isAncestorOf(this.host, focusedElement);
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
        return index.h(index.Host, { key: '2233c1ff6ced6fbaed93a5dd71b4bf0ee6b186b5', style: { display: 'contents' } });
    }
    get host() { return index.getElement(this); }
};

exports.atomic_focus_detector = AtomicFocusDetector;

//# sourceMappingURL=atomic-focus-detector.cjs.entry.js.map