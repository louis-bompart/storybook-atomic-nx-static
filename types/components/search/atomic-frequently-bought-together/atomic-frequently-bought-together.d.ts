import { FrequentlyBoughtTogetherListState } from '@coveo/headless/product-recommendation';
/**
 * The `atomic-frequently-bought-together` component suggests products frequently bought with the current product based on the shopping cart of other users.
 */
export declare class AtomicProductRecommendations {
    state: FrequentlyBoughtTogetherListState;
    private engine;
    private frequentlyBoughtTogether;
    private unsubscribe;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private updateState;
    render(): any;
}
