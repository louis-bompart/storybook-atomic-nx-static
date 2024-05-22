import type { Components, JSX } from "../types/components";

interface AtomicFocusDetector extends Components.AtomicFocusDetector, HTMLElement {}
export const AtomicFocusDetector: {
    prototype: AtomicFocusDetector;
    new (): AtomicFocusDetector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
