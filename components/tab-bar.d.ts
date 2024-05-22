import type { Components, JSX } from "../types/components";

interface TabBar extends Components.TabBar, HTMLElement {}
export const TabBar: {
    prototype: TabBar;
    new (): TabBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
