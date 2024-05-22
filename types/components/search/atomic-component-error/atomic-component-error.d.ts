/** The `atomic-component-error` is used by other components to return errors. This doesn't require any configuration.*/
export declare class AtomicComponentError {
    element: HTMLElement;
    error: Error;
    connectedCallback(): void;
    render(): any;
}
