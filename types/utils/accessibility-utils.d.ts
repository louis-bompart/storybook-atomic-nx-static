import { AnyBindings } from '../components/common/interface/bindings';
import { InitializableComponent } from './initialization-utils';
export declare const findAriaLiveEventName = "atomic/accessibility/findAriaLive";
export interface FindAriaLiveEventArgs {
    element?: HTMLAtomicAriaLiveElement;
}
export declare function AriaLiveRegion(regionName: string, assertive?: boolean): (component: InitializableComponent<AnyBindings>, setterName: string) => void;
export declare class FocusTargetController {
    private component;
    private bindings;
    private lastSearchId?;
    private element?;
    private onFocusCallback?;
    private doFocusAfterSearch;
    private doFocusOnNextTarget;
    constructor(component: InitializableComponent<AnyBindings>);
    setTarget(el: HTMLElement | undefined): void;
    focus(): Promise<void>;
    focusAfterSearch(): Promise<unknown>;
    focusOnNextTarget(): Promise<unknown>;
    disableForCurrentSearch(): void;
    private handleComponentRenderLoop;
}
export declare function getFocusableDescendants(element: Element): Generator<HTMLElement>;
export declare function getFirstFocusableDescendant(element: Element): HTMLElement | null;
