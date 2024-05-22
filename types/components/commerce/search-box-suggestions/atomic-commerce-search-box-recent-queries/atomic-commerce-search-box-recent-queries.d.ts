/**
 * The `atomic-commerce-search-box-recent-queries` component can be added as a child of an `atomic-commerce-search-box` component, allowing for the configuration of recent query suggestions.
 *
 * @part recent-query-title - The 'Recent queries' title.
 * @part recent-query-clear - The 'Clear' button for clearing recent queries.
 *
 * @internal
 */
export declare class AtomicCommerceSearchBoxRecentQueries {
    private bindings;
    private recentQueriesList;
    private storage;
    private host;
    error: Error;
    /**
     * The SVG icon to display.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    icon?: string;
    /**
     * The maximum number of suggestions to display when the user types in the input field.
     */
    maxWithQuery: number;
    /**
     * The maximum number of suggestions to display initially, when the input field is empty.
     */
    maxWithoutQuery?: number;
    componentWillLoad(): void;
    private renderIcon;
    private initialize;
    private retrieveLocalStorage;
    private updateLocalStorage;
    private warnUser;
    private disableFeature;
    private renderItems;
    private renderClear;
    private renderItem;
    render(): any;
}
