import { FocusTargetController } from '../../../utils/accessibility-utils';
import { AnyBindings } from '../interface/bindings';
import { DateFacet, DateFilter, DateRangeOptions, DateRangeRequest, FacetConditionsManager, RangeFacetSortCriterion, RelativeDate, RelativeDatePeriod, RelativeDateUnit, SearchStatusState } from '../types';
export interface Timeframe {
    period: RelativeDatePeriod;
    unit?: RelativeDateUnit;
    amount?: number;
    label?: string;
}
interface TimeframeFacetCommonOptions {
    facetId?: string;
    host: HTMLElement;
    bindings: AnyBindings;
    label: string;
    field: string;
    headingLevel: number;
    dependsOn: Record<string, string>;
    withDatePicker: boolean;
    setFacetId(id: string): string;
    getSearchStatusState(): SearchStatusState;
    buildDependenciesManager(): FacetConditionsManager;
    deserializeRelativeDate(date: string): RelativeDate;
    buildDateRange(config: DateRangeOptions): DateRangeRequest;
    initializeFacetForDatePicker(): DateFacet;
    initializeFacetForDateRange(values: DateRangeRequest[]): DateFacet;
    initializeFilter(): DateFilter;
    min?: string;
    max?: string;
    sortCriteria: RangeFacetSortCriterion;
}
interface TimeframeFacetCommonRenderProps {
    hasError: boolean;
    firstSearchExecuted: boolean;
    isCollapsed: boolean;
    headerFocus: FocusTargetController;
    onToggleCollapse: () => boolean;
}
export declare class TimeframeFacetCommon {
    private props;
    private facetId?;
    private facetForDatePicker?;
    private facetForDateRange?;
    private filter?;
    private manualTimeframes;
    private dependenciesManager?;
    constructor(props: TimeframeFacetCommonOptions);
    private get determineFacetId();
    private get enabled();
    private get valuesToRender();
    private get shouldRenderValues();
    private get shouldRenderFacet();
    private get shouldRenderInput();
    private get hasValues();
    private get numberOfSelectedValues();
    private get hasInputRange();
    get currentValues(): DateRangeRequest[];
    disconnectedCallback(): void;
    private get isHidden();
    private registerFacetToStore;
    private getManualTimeframes;
    private formatFacetValue;
    private renderValues;
    private renderValue;
    private renderValuesContainer;
    private renderHeader;
    private renderDateInput;
    render({ hasError, firstSearchExecuted, isCollapsed, headerFocus, onToggleCollapse, }: TimeframeFacetCommonRenderProps): any;
}
export {};
