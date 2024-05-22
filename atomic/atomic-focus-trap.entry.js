import { r as registerInstance, g as getElement } from './index-53978573.js';
import { g as getFirstFocusableDescendant } from './accessibility-utils-c8cb59bc.js';
import { v as getParent, u as isAncestorOf, d as defer, q as getFocusedElement } from './utils-8200d0ae.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-1a56c7bc.js';

const AtomicFocusTrap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        /**
         * Whether the element should be hidden from screen readers & not interactive with the tab, when not active.
         */
        this.shouldHideSelf = true;
        /**
         * The common ancestor of the focus trap and of all the elements that should be inaccessible when inside the focus trap.
         */
        this.scope = document.body;
        this.hiddenElements = [];
        this.active = false;
        this.source = undefined;
        this.container = undefined;
        this.shouldHideSelf = true;
        this.scope = document.body;
    }
    hide(element) {
        // aria-hidden -> already hidden
        // aria-live or atomic-aria-live -> must not be hidden otherwise it won't announce dynamic changes in the live region
        if (element.hasAttribute('aria-hidden') ||
            element.hasAttribute('aria-live') ||
            element.tagName.toLowerCase() === 'atomic-aria-live') {
            return;
        }
        element.setAttribute('aria-hidden', 'true');
        this.hiddenElements.push(element);
    }
    showAll() {
        let el;
        while ((el = this.hiddenElements.pop())) {
            el.removeAttribute('aria-hidden');
        }
    }
    hideSiblingsRecursively(element) {
        const parent = getParent(element);
        if (parent === null) {
            return;
        }
        Array.from(parent.children).forEach((sibling) => {
            if (sibling === element) {
                return;
            }
            if (sibling.assignedSlot &&
                isAncestorOf(this.host, sibling.assignedSlot)) {
                return;
            }
            this.hide(sibling);
        });
        if (parent !== this.scope) {
            this.hideSiblingsRecursively(parent);
        }
    }
    showSelf() {
        this.parentToHide.removeAttribute('aria-hidden');
        this.parentToHide.removeAttribute('tabindex');
    }
    hideSelf() {
        if (this.shouldHideSelf) {
            this.parentToHide.setAttribute('aria-hidden', 'true');
            this.parentToHide.setAttribute('tabindex', '-1');
        }
    }
    async onDeactivated(isInitialLoad) {
        var _a;
        this.showAll();
        if (!isInitialLoad) {
            await defer();
            (_a = this.source) === null || _a === void 0 ? void 0 : _a.focus();
        }
        this.hideSelf();
    }
    async onActivated(isInitialLoad) {
        var _a;
        this.showSelf();
        if (!isInitialLoad) {
            await defer();
            (_a = getFirstFocusableDescendant(this.host)) === null || _a === void 0 ? void 0 : _a.focus();
        }
        this.hideSiblingsRecursively(this.host);
    }
    async activeChanged(active, wasActive) {
        const isInitialLoad = active === wasActive;
        if (active) {
            await this.onActivated(isInitialLoad);
        }
        else {
            await this.onDeactivated(isInitialLoad);
        }
    }
    onFocusChanged(e) {
        var _a;
        const elementIsPartOfHost = (focusedElement) => isAncestorOf(this.host, focusedElement);
        const elementIsPartOfScope = (focusedElement) => isAncestorOf(this.scope, focusedElement);
        if (!e.target || !this.active) {
            return;
        }
        const focusedElement = getFocusedElement();
        if (focusedElement &&
            (elementIsPartOfHost(focusedElement) ||
                !elementIsPartOfScope(focusedElement))) {
            return;
        }
        (_a = getFirstFocusableDescendant(this.host)) === null || _a === void 0 ? void 0 : _a.focus();
    }
    connectedCallback() {
        this.activeChanged(this.active, this.active);
    }
    disconnectedCallback() {
        this.showAll();
    }
    get parentToHide() {
        var _a;
        return (_a = this.container) !== null && _a !== void 0 ? _a : this.host;
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeChanged"]
    }; }
};

export { AtomicFocusTrap as atomic_focus_trap };

//# sourceMappingURL=atomic-focus-trap.entry.js.map