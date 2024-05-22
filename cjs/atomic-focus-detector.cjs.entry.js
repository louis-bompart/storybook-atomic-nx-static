'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const utils = require('./utils-93ea935e.js');
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
        return index.h(index.Host, { key: 'ac90a651c69561667a1583662fb2b007f96a2084', style: { display: 'contents' } });
    }
    get host() { return index.getElement(this); }
};

exports.atomic_focus_detector = AtomicFocusDetector;

//# sourceMappingURL=atomic-focus-detector.cjs.entry.js.map