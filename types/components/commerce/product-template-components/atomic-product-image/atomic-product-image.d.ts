import { Bindings } from '../../../../components';
import { InitializableComponent } from '../../../../utils/initialization-utils';
/**
 * The `atomic-product-image` component renders an image from a product field.
 * @internal
 */
export declare class AtomicProductImage implements InitializableComponent {
    bindings: Bindings;
    private product;
    private host;
    private useFallback;
    private currentImage;
    private images;
    error: Error;
    /**
     * The product field which the component should use. This will look for the field in the product object first, then in the product.additionalFields object.
     */
    field: string;
    /**
     * An fallback image URL that will be used in case the specified image is not available or an error is encountered.
     */
    fallback: string;
    /**
     * Moves to the previous image, when the carousel is activated.
     */
    previousImage(): Promise<void>;
    /**
     * Moves to the next image, when the carousel is activated.
     */
    nextImage(): Promise<void>;
    /**
     * Navigates to the specified image index.
     *
     * @param index - The index of the image to navigate to.
     */
    navigateToImage(index: number): Promise<void>;
    private logWarning;
    private handleImageError;
    private handleMissingFallback;
    private validateUrl;
    componentWillLoad(): void;
    private get imageUrls();
    private get numberOfImages();
    private renderCurrentImage;
    render(): any;
}
