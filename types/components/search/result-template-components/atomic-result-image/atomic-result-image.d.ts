import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-image` component renders an image from a result field.
 */
export declare class AtomicResultImage implements InitializableComponent {
    bindings: Bindings;
    private result;
    private host;
    private useFallback;
    /**
     * The result field which the component should use. This will look for the field in the Result object first, then in the Result.raw object. It is important to include the necessary field in the `atomic-search-interface` component.
     */
    field: string;
    /**
     * An optional fallback image URL that will be used in case the specified image field is not available or encounters an error.
     */
    fallback?: string;
    error: Error;
    get url(): any;
    private logWarning;
    private handleImageError;
    private handleMissingFallback;
    private validateUrl;
    render(): any;
}
