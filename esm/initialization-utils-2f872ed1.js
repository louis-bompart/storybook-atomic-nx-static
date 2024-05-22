import { h, H as Host, g as getElement, f as forceUpdate } from './index-c045ad7c.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { c as closest } from './utils-af246396.js';

const Hidden = () => (h(Host, { class: "atomic-hidden" }));

const initializeEventName = 'atomic/initializeComponent';
const initializableElements = [
    'atomic-recs-interface',
    'atomic-search-interface',
    'atomic-commerce-interface',
    'atomic-relevance-inspector',
    'atomic-insight-interface',
    'atomic-commerce-interface',
    'atomic-external',
];
/**
 * Retrieves `Bindings` or `CommerceBindings` on a configured parent interface.
 * @param event - The element on which to dispatch the event, which must be the child of a configured Atomic container element.
 * @returns A promise that resolves upon initialization of the parent container element, and rejects otherwise.
 */
function initializeBindings(element) {
    return new Promise((resolve, reject) => {
        const event = buildCustomEvent(initializeEventName, (bindings) => resolve(bindings));
        element.dispatchEvent(event);
        if (!closest(element, initializableElements.join(', '))) {
            reject(new MissingInterfaceParentError(element.nodeName.toLowerCase()));
        }
    });
}
class MissingInterfaceParentError extends Error {
    constructor(elementName) {
        super(`The "${elementName}" element must be the child of the following elements: ${initializableElements.join(', ')}`);
    }
}
/**
 * Makes Shadow Dom elements compatible with the focus-visible polyfill https://github.com/WICG/focus-visible
 * Necessary for Safari under version 15.4.
 */
function applyFocusVisiblePolyfill(element) {
    if (!element.shadowRoot) {
        return;
    }
    if (window.applyFocusVisiblePolyfill) {
        window.applyFocusVisiblePolyfill(element.shadowRoot);
        return;
    }
    window.addEventListener('focus-visible-polyfill-ready', () => { var _a; return (_a = window.applyFocusVisiblePolyfill) === null || _a === void 0 ? void 0 : _a.call(window, element.shadowRoot); }, { once: true });
}
const renderedAttribute = 'data-atomic-rendered';
const loadedAttribute = 'data-atomic-loaded';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used on a property named `bindings`.
 * This will automatically fetch the `Bindings` from the parent `atomic-search-interface` or `atomic-external` components.
 *
 * Once a component is bound, the `initialize` method is called.
 * In the event of an initialization error, the `error` property will be set and an `atomic-component-error` will be rendered.
 *
 * In order for a component using this decorator to render properly, it should have an internal state bound to one of the properties from `bindings`.
 * This is possible by using the `BindStateToController` decorator.
 *
 * @example
 * @InitializeBindings() public bindings!: Bindings;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 */
function InitializeBindings({ forceUpdate: forceUpdate$1, } = {}) {
    return (component, bindingsProperty) => {
        const { componentWillLoad, render, componentDidRender, componentDidLoad, disconnectedCallback, } = component;
        let unsubscribeLanguage = () => { };
        if (bindingsProperty !== 'bindings') {
            return console.error(`The InitializeBindings decorator should be used on a property called "bindings", and not "${bindingsProperty}"`, component);
        }
        component.componentWillLoad = function () {
            const element = getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            const event = buildCustomEvent(initializeEventName, (bindings) => {
                this.bindings = bindings;
                const updateLanguage = () => forceUpdate(this);
                this.bindings.i18n.on('languageChanged', updateLanguage);
                unsubscribeLanguage = () => this.bindings.i18n.off('languageChanged', updateLanguage);
                try {
                    // When no controller is initialized, updating a property with a State() decorator, there will be no re-render.
                    // In this case, we have to manually trigger it.
                    if (this.initialize) {
                        this.initialize();
                        if (forceUpdate$1) {
                            forceUpdate(this);
                        }
                    }
                    else {
                        forceUpdate(this);
                    }
                }
                catch (e) {
                    this.error = e;
                }
            });
            element.dispatchEvent(event);
            if (!closest(element, initializableElements.join(', '))) {
                this.error = new MissingInterfaceParentError(element.nodeName.toLowerCase());
                return;
            }
            return componentWillLoad && componentWillLoad.call(this);
        };
        component.render = function () {
            if (this.error) {
                return (h("atomic-component-error", { element: getElement(this), error: this.error }));
            }
            if (!this.bindings) {
                return h(Hidden, null);
            }
            getElement(this).setAttribute(renderedAttribute, 'true');
            return render && render.call(this);
        };
        component.disconnectedCallback = function () {
            const element = getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            unsubscribeLanguage();
            disconnectedCallback && disconnectedCallback.call(this);
        };
        component.componentDidRender = function () {
            const element = getElement(this);
            if (element.getAttribute(renderedAttribute) === 'false') {
                return;
            }
            componentDidRender && componentDidRender.call(this);
            if (element.getAttribute(loadedAttribute) === 'false') {
                element.setAttribute(loadedAttribute, 'true');
                applyFocusVisiblePolyfill(getElement(this));
                componentDidLoad && componentDidLoad.call(this);
            }
        };
        component.componentDidLoad = function () { };
    };
}
/**
 * A [StencilJS property decorator](https://stenciljs.com/) is used together with the [State decorator](https://stenciljs.com/docs/state#state-decorator).
 * This allows the Stencil component state property to automatically get updates from a [Coveo Headless controller](https://docs.coveo.com/en/headless/latest/usage/#use-headless-controllers).
 *
 * @example
 * @BindStateToController('pager') @State() private pagerState!: PagerState;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 *
 * @param controllerProperty The controller property to subscribe to. The controller has to be created inside of the `initialize` method.
 * @param options The configurable `BindStateToController` options.
 */
function BindStateToController(controllerProperty, options) {
    return (component, stateProperty) => {
        const { disconnectedCallback, initialize } = component;
        component.initialize = function () {
            initialize && initialize.call(this);
            if (!initialize) {
                return console.error(`ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${controllerProperty}`, component);
            }
            if (!this[controllerProperty]) {
                return;
            }
            if ((options === null || options === void 0 ? void 0 : options.onUpdateCallbackMethod) &&
                !this[options.onUpdateCallbackMethod]) {
                return console.error(`ControllerState: The onUpdateCallbackMethod property "${options.onUpdateCallbackMethod}" is not defined`, component);
            }
            this.unsubscribeController = this[controllerProperty].subscribe(() => {
                this[stateProperty] = this[controllerProperty].state;
                (options === null || options === void 0 ? void 0 : options.onUpdateCallbackMethod) &&
                    this[options.onUpdateCallbackMethod]();
            });
        };
        component.disconnectedCallback = function () {
            var _a;
            !getElement(this).isConnected && ((_a = this.unsubscribeController) === null || _a === void 0 ? void 0 : _a.call(this));
            disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}

export { BindStateToController as B, Hidden as H, InitializeBindings as I, MissingInterfaceParentError as M, initializeEventName as a, applyFocusVisiblePolyfill as b, initializeBindings as i };

//# sourceMappingURL=initialization-utils-2f872ed1.js.map