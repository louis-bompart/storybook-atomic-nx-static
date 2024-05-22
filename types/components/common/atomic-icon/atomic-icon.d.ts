import { InitializableComponent } from '../../../utils/initialization-utils';
import { AnyBindings } from '../interface/bindings';
/**
 * The `atomic-icon` component displays an SVG icon with a 1:1 aspect ratio.
 *
 * This component can display an icon from those available in the Atomic package, from a specific location, or as an inline SVG element.
 */
export declare class AtomicIcon implements InitializableComponent<AnyBindings> {
    host: HTMLElement;
    bindings: AnyBindings;
    /**
     * The SVG icon to display.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    icon: string;
    error: Error;
    private svg;
    private fetchIcon;
    private validateSVG;
    private getIcon;
    updateIcon(): Promise<void>;
    initialize(): void;
    render(): any;
}
