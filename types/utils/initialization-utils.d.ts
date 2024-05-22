import { ComponentInterface } from '../stencil-public-runtime';
import { TOptions } from 'i18next';
import { AnyBindings } from '../components/common/interface/bindings';
import { Bindings } from '../components/search/atomic-search-interface/atomic-search-interface';
declare global {
    interface Window {
        applyFocusVisiblePolyfill?: (shadowRoot: ShadowRoot) => void;
    }
}
export type InitializeEventHandler = (bindings: AnyBindings) => void;
export type InitializeEvent = CustomEvent<InitializeEventHandler>;
export declare const initializeEventName = "atomic/initializeComponent";
/**
 * Retrieves `Bindings` or `CommerceBindings` on a configured parent interface.
 * @param event - The element on which to dispatch the event, which must be the child of a configured Atomic container element.
 * @returns A promise that resolves upon initialization of the parent container element, and rejects otherwise.
 */
export declare function initializeBindings<SpecificBindings extends AnyBindings = Bindings>(element: Element): Promise<SpecificBindings>;
export declare class MissingInterfaceParentError extends Error {
    constructor(elementName: string);
}
/**
 * Necessary interface an Atomic Component must have to initialize itself correctly.
 */
export interface InitializableComponent<SpecificBindings extends AnyBindings = Bindings> extends ComponentInterface {
    /**
     * Bindings passed from the `AtomicSearchInterface` to its children components.
     */
    bindings: SpecificBindings;
    /**
     * Method called right after the `bindings` property is defined. This is the method where Headless Framework controllers should be initialized.
     */
    initialize?: () => void;
    error: Error;
}
/**
 * Makes Shadow Dom elements compatible with the focus-visible polyfill https://github.com/WICG/focus-visible
 * Necessary for Safari under version 15.4.
 */
export declare function applyFocusVisiblePolyfill(element: HTMLElement): void;
type InitializeBindingsProps = {
    forceUpdate?: boolean;
};
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
export declare function InitializeBindings<SpecificBindings extends AnyBindings>({ forceUpdate, }?: InitializeBindingsProps): (component: InitializableComponent<SpecificBindings>, bindingsProperty: string) => void;
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
export declare function BindStateToController(controllerProperty: string, options?: {
    /**
     * Component's method to be called when state is updated.
     */
    onUpdateCallbackMethod?: string;
}): (component: InitializableComponent<AnyBindings>, stateProperty: string) => void;
export declare function DeferUntilRender(): (component: ComponentInterface, methodName: string) => void;
export type I18nState = Record<string, (variables?: TOptions) => string>;
export {};
