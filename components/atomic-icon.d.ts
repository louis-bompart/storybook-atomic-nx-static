import type { Components, JSX } from "../types/components";

interface AtomicIcon extends Components.AtomicIcon, HTMLElement {}
export const AtomicIcon: {
    prototype: AtomicIcon;
    new (): AtomicIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
