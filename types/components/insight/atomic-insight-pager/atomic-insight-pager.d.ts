import { InsightPager, InsightPagerState, InsightSearchStatus, InsightSearchStatusState } from '../';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightPager implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    pager: InsightPager;
    searchStatus: InsightSearchStatus;
    pagerState: InsightPagerState;
    searchStatusState: InsightSearchStatusState;
    error: Error;
    private scrollToTopEvent;
    /**
     * Specifies how many page buttons to display in the pager.
     */
    numberOfPages: number;
    private activePage?;
    private radioGroupName;
    initialize(): void;
    private get focusTarget();
    private focusOnFirstResultAndScrollToTop;
    render(): any;
}
