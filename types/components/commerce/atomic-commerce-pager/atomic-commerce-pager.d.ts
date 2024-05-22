import { Pagination, PaginationState, ProductListing, Search } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-pager` provides buttons that allow the end user to navigate through the different product pages.
 *
 * @part buttons - The list of the next/previous buttons and page-buttons.
 * @part page-buttons - The list of page buttons.
 * @part page-button - The page button.
 * @part active-page-button - The active page button.
 * @part previous-button - The previous button.
 * @part next-button - The next button.
 * @part previous-button-icon - Icon of the previous button.
 * @part next-button-icon - Icon of the next button.
 *
 * @internal
 */
export declare class AtomicCommercePager implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    pager: Pagination;
    listingOrSearch: ProductListing | Search;
    pagerState: PaginationState;
    error: Error;
    private scrollToTopEvent;
    /**
     * Specifies how many page buttons to display in the pager.
     */
    numberOfPages: number;
    /**
     * The SVG icon to use to display the Previous button.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    previousButtonIcon: string;
    /**
     * The SVG icon to use to display the Next button.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    nextButtonIcon: string;
    private activePage?;
    private radioGroupName;
    initialize(): void;
    render(): any;
    private focusOnFirstResultAndScrollToTop;
    private get focusTarget();
}
