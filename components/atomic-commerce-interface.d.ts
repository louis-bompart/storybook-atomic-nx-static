import type { Components, JSX } from "../types/components";

interface AtomicCommerceInterface extends Components.AtomicCommerceInterface, HTMLElement {}
export const AtomicCommerceInterface: {
    prototype: AtomicCommerceInterface;
    new (): AtomicCommerceInterface;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
