import { DateFacet, DateFacetState, DateFilter, DateFilterState, RangeFacetSortCriterion, SearchStatus, SearchStatusState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * A facet is a list of values for a certain field occurring in the results.
 * An `atomic-timeframe-facet` displays a facet of the results for the current query as date intervals.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and allows to expand/collapse the facet.
 * @part label-button-icon - The label button icon.
 * @part clear-button - The button that resets the actively selected facet values.
 * @part clear-button-icon - The clear button icon.
 *
 * @part values - The facet values container.
 * @part value-label - The facet value label, common for all displays.
 * @part value-count - The facet value count, common for all displays.
 * @part value-link - The facet value when display is 'link'.
 * @part value-link-selected - The selected facet value when display is 'link'.
 *
 * @part input-start - The input for the starting value of the custom date range.
 * @part input-end - The input for the ending value of the custom date range.
 * @part input-label - The label for both the start and end input.
 * @part input-apply-button - The apply button for the custom range.
 */
export declare class AtomicTimeframeFacet implements InitializableComponent {
    bindings: Bindings;
    facetForDateRange?: DateFacet;
    facetForDatePicker?: DateFacet;
    private timeframeFacetCommon?;
    filter?: DateFilter;
    searchStatus: SearchStatus;
    private host;
    facetState: DateFacetState;
    facetForDatePickerState?: DateFacetState;
    filterState?: DateFilterState;
    searchStatusState: SearchStatusState;
    error: Error;
    /**
     * Specifies a unique identifier for the facet.
     */
    facetId?: string;
    /**
     * The non-localized label for the facet.
     * Used in the atomic-breadbox component through the bindings store.
     */
    label: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * Whether this facet should contain an datepicker allowing users to set custom ranges.
     */
    withDatePicker: boolean;
    /**
     * Specifies whether the facet is collapsed. When the facet is the child of an `atomic-facet-manager` component, the facet manager controls this property.
     */
    isCollapsed: boolean;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading over the facet, from 1 to 6.
     */
    headingLevel: number;
    /**
     * Whether to exclude the parents of folded results when estimating the result count for each facet value.
     */
    filterFacetCount: boolean;
    /**
     * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
     * Note: A high injectionDepth may negatively impact the facet request performance.
     * Minimum: `0`
     * Default: `1000`
     */
    injectionDepth: number;
    /**
     * The required facets and values for this facet to be displayed.
     * Examples:
     * ```html
     * <atomic-facet facet-id="abc" field="objecttype" ...></atomic-facet>
     *
     * <!-- To show the facet when any value is selected in the facet with id "abc": -->
     * <atomic-timeframe-facet
     *   depends-on-abc
     *   ...
     * ></atomic-timeframe-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-timeframe-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-timeframe-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    /**
     * The earliest date to accept from user input when the `withDatepicker` option is enabled.
     *
     * This value must be a valid date string in the format `YYYY-MM-DD`.
     *
     * If this format is not respected, the date picker ignores this property, behaving as if no `min` value had been set.
     *
     * See also [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#min).
     */
    min?: string;
    /**
     * The latest date to accept from user input when the `withDatepicker` option is enabled.
     *
     * This value must be a valid date string in the format `YYYY-MM-DD`.
     *
     * If this format is not respected, the date picker ignores this property, behaving as if no `max` value had been set.
     *
     * See also [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max).
     */
    max?: string;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'ascending' and 'descending'.
     */
    sortCriteria: RangeFacetSortCriterion;
    private headerFocus?;
    private get focusTarget();
    initialize(): void;
    disconnectedCallback(): void;
    private initializeFacetForDatePicker;
    private initializeFacetForDateRange;
    private initializeFilter;
    applyDateInput(): void;
    render(): any;
}
