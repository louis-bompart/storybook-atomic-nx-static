import type { Components, JSX } from "../types/components";

interface TabPopover extends Components.TabPopover, HTMLElement {}
export const TabPopover: {
    prototype: TabPopover;
    new (): TabPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
