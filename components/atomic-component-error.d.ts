import type { Components, JSX } from "../types/components";

interface AtomicComponentError extends Components.AtomicComponentError, HTMLElement {}
export const AtomicComponentError: {
    prototype: AtomicComponentError;
    new (): AtomicComponentError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
